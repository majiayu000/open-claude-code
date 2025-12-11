#!/bin/bash
#
# Claude Code 反混淆 - 一键执行脚本
#
# 用法:
#   ./scripts/run-all.sh           # 完整执行 (包含 LLM)
#   ./scripts/run-all.sh --no-llm  # 只执行静态分析
#   ./scripts/run-all.sh --fast    # 快速模式 (减少 LLM 调用)
#   ./scripts/run-all.sh --resume  # 从断点恢复
#

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 项目根目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# 默认参数
USE_LLM=true
FAST_MODE=false
RESUME=false
VALIDATE_ONLY=false
VERBOSE=false

# 解析参数
while [[ $# -gt 0 ]]; do
    case $1 in
        --no-llm)
            USE_LLM=false
            shift
            ;;
        --fast)
            FAST_MODE=true
            shift
            ;;
        --resume)
            RESUME=true
            shift
            ;;
        --validate)
            VALIDATE_ONLY=true
            shift
            ;;
        --verbose|-v)
            VERBOSE=true
            shift
            ;;
        --help|-h)
            echo "
Claude Code 反混淆 - 一键执行脚本

用法:
  ./scripts/run-all.sh [选项]

选项:
  --no-llm      禁用 LLM 推断 (只执行静态分析)
  --fast        快速模式 (限制 LLM 分析数量)
  --resume      从断点恢复执行
  --validate    仅执行验证 (不执行分析)
  --verbose, -v 显示详细输出
  --help, -h    显示帮助

环境变量:
  ANTHROPIC_API_KEY    Claude API 密钥 (LLM 推断必需)

示例:
  # 完整执行
  ./scripts/run-all.sh

  # 只执行静态分析
  ./scripts/run-all.sh --no-llm

  # 从上次中断处继续
  ./scripts/run-all.sh --resume

  # 快速测试
  ./scripts/run-all.sh --fast --no-llm
"
            exit 0
            ;;
        *)
            echo -e "${RED}未知选项: $1${NC}"
            exit 1
            ;;
    esac
done

# ==================== 函数定义 ====================

print_banner() {
    echo ""
    echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${BLUE}║       Claude Code 反混淆自动化流水线                       ║${NC}"
    echo -e "${BLUE}║                                                            ║${NC}"
    echo -e "${BLUE}║       版本: 1.0.0                                          ║${NC}"
    echo -e "${BLUE}║       日期: $(date +%Y-%m-%d)                                      ║${NC}"
    echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"
    echo ""
}

print_step() {
    local step=$1
    local total=$2
    local message=$3
    echo ""
    echo -e "${GREEN}[${step}/${total}]${NC} ${message}"
    echo "────────────────────────────────────────"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

check_prerequisites() {
    print_step 1 6 "检查环境..."

    # 检查 Node.js
    if ! command -v node &> /dev/null; then
        print_error "Node.js 未安装"
        exit 1
    fi
    print_success "Node.js: $(node --version)"

    # 检查 npm
    if ! command -v npm &> /dev/null; then
        print_error "npm 未安装"
        exit 1
    fi
    print_success "npm: $(npm --version)"

    # 检查 API Key (如果需要 LLM)
    if [ "$USE_LLM" = true ]; then
        if [ -z "$ANTHROPIC_API_KEY" ]; then
            print_warning "ANTHROPIC_API_KEY 未设置，LLM 推断可能失败"
            echo "  提示: export ANTHROPIC_API_KEY='your-key'"
        else
            print_success "ANTHROPIC_API_KEY 已设置"
        fi
    fi

    # 检查输入文件
    INPUT_FILE="$PROJECT_ROOT/decompiled/cli.formatted.js"
    if [ ! -f "$INPUT_FILE" ]; then
        print_error "输入文件不存在: $INPUT_FILE"
        exit 1
    fi
    print_success "输入文件: $(du -h "$INPUT_FILE" | cut -f1)"
}

install_dependencies() {
    print_step 2 6 "安装依赖..."

    cd "$PROJECT_ROOT"

    # 检查 package.json 是否存在
    if [ -f "package.json" ]; then
        if [ ! -d "node_modules" ]; then
            npm install
            print_success "依赖安装完成"
        else
            print_success "依赖已安装"
        fi
    else
        print_warning "未找到 package.json，跳过依赖安装"
    fi

    # 检查 deobfuscator 依赖
    DEOB_DIR="$PROJECT_ROOT/tools/deobfuscator"
    if [ -f "$DEOB_DIR/package.json" ]; then
        cd "$DEOB_DIR"
        if [ ! -d "node_modules" ]; then
            npm install
            print_success "deobfuscator 依赖安装完成"
        else
            print_success "deobfuscator 依赖已安装"
        fi
    fi

    cd "$PROJECT_ROOT"
}

run_pipeline() {
    print_step 3 6 "执行分析流水线..."

    cd "$PROJECT_ROOT/scripts"

    # 构建参数
    ARGS=""

    if [ "$USE_LLM" = false ]; then
        ARGS="$ARGS --no-llm"
    fi

    if [ "$RESUME" = true ]; then
        ARGS="$ARGS --resume"
    fi

    if [ "$VERBOSE" = true ]; then
        ARGS="$ARGS --verbose"
    fi

    # 如果是快速模式，修改配置
    if [ "$FAST_MODE" = true ]; then
        echo "  快速模式: 限制 LLM 分析数量为 100"
        # 这里可以通过环境变量传递
        export LLM_MAX_FUNCTIONS=100
    fi

    # 执行主流水线
    echo ""
    node full-pipeline.js $ARGS

    if [ $? -eq 0 ]; then
        print_success "分析流水线完成"
    else
        print_error "分析流水线失败"
        exit 1
    fi
}

run_validation() {
    print_step 4 6 "执行验证..."

    cd "$PROJECT_ROOT/scripts"

    node validate-mappings.js

    if [ $? -eq 0 ]; then
        print_success "验证通过"
    else
        print_warning "验证发现问题，请查看报告"
    fi
}

apply_to_readable() {
    print_step 5 6 "应用到 readable 目录..."

    READABLE_DIR="$PROJECT_ROOT/decompiled/readable"

    # 确保目录存在
    mkdir -p "$READABLE_DIR"

    # 复制生成的文件
    if [ -f "$PROJECT_ROOT/scripts/../decompiled/readable/cli.readable.js" ]; then
        print_success "cli.readable.js 已生成"
    fi

    if [ -f "$PROJECT_ROOT/decompiled/readable/VARIABLE_MAPPING.json" ]; then
        print_success "VARIABLE_MAPPING.json 已生成"
    fi

    if [ -f "$PROJECT_ROOT/decompiled/readable/VARIABLE_MAPPING.md" ]; then
        print_success "VARIABLE_MAPPING.md 已生成"
    fi

    if [ -f "$PROJECT_ROOT/decompiled/readable/ANALYSIS_REPORT.md" ]; then
        print_success "ANALYSIS_REPORT.md 已生成"
    fi

    # 运行现有的增强脚本 (如果存在)
    if [ -f "$PROJECT_ROOT/scripts/enhance-original-library.js" ]; then
        echo ""
        echo "  运行增强脚本..."
        cd "$PROJECT_ROOT/scripts"
        node enhance-original-library.js 2>/dev/null || true
    fi
}

print_summary() {
    print_step 6 6 "完成!"

    echo ""
    echo -e "${GREEN}╔════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║                    执行完成                                ║${NC}"
    echo -e "${GREEN}╚════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    echo "  输出文件:"
    echo "    - decompiled/readable/cli.readable.js      (可读代码)"
    echo "    - decompiled/readable/VARIABLE_MAPPING.json (映射表)"
    echo "    - decompiled/readable/VARIABLE_MAPPING.md   (Markdown)"
    echo "    - decompiled/readable/ANALYSIS_REPORT.md    (分析报告)"
    echo "    - decompiled/readable/VALIDATION_REPORT.md  (验证报告)"
    echo ""
    echo "  下一步:"
    echo "    1. 查看 ANALYSIS_REPORT.md 了解分析结果"
    echo "    2. 查看 VALIDATION_REPORT.md 检查问题"
    echo "    3. 浏览 readable/ 目录查看可读代码"
    echo ""
    echo -e "  ${BLUE}查看报告: cat decompiled/readable/ANALYSIS_REPORT.md${NC}"
    echo ""
}

# ==================== 主流程 ====================

main() {
    print_banner

    # 记录开始时间
    START_TIME=$(date +%s)

    # 仅验证模式
    if [ "$VALIDATE_ONLY" = true ]; then
        check_prerequisites
        run_validation
        exit 0
    fi

    # 完整执行
    check_prerequisites
    install_dependencies
    run_pipeline
    run_validation
    apply_to_readable
    print_summary

    # 计算耗时
    END_TIME=$(date +%s)
    DURATION=$((END_TIME - START_TIME))
    echo -e "  总耗时: ${GREEN}${DURATION} 秒${NC}"
    echo ""
}

# 执行
main
