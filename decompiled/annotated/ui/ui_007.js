/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: ui_007.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   L        (25次) = lazyLoader(fn) - Lazy module loader
 *   U        (12次) = moduleWrapper(fn) - CommonJS module wrapper
 *   M8       (3次) = shellEscape() - Shell escape utility
 *   GA       (1次) = esmImport(module) - ESM import helper
 *   pG       (1次) = esmExport(obj, key) - ESM export binding
 *   HX       (1次) = globalThis - Global object reference
 *   IW       (1次) = tokenize() - Tokenize bash command
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 7/53
 * Lines: 46317 - 47816 (1500 lines)
 * Original file: cli.js
 */

    Dc0.exports = N84
});
var Ec0 = U((i87, Cc0) => {
    function L84(A) {
        return {
            name: "Verilog",
            aliases: ["v", "sv", "svh"],
            case_insensitive: !1,
            keywords: {
                $pattern: /[\w\$]+/,
                keyword: "accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf|0 bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate|5 genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor",
                literal: "null",
                built_in: "$finish $stop $exit $fatal $error $warning $info $realtime $time $printtimescale $bitstoreal $bitstoshortreal $itor $signed $cast $bits $stime $timeformat $realtobits $shortrealtobits $rtoi $unsigned $asserton $assertkill $assertpasson $assertfailon $assertnonvacuouson $assertoff $assertcontrol $assertpassoff $assertfailoff $assertvacuousoff $isunbounded $sampled $fell $changed $past_gclk $fell_gclk $changed_gclk $rising_gclk $steady_gclk $coverage_control $coverage_get $coverage_save $set_coverage_db_name $rose $stable $past $rose_gclk $stable_gclk $future_gclk $falling_gclk $changing_gclk $display $coverage_get_max $coverage_merge $get_coverage $load_coverage_db $typename $unpacked_dimensions $left $low $increment $clog2 $ln $log10 $exp $sqrt $pow $floor $ceil $sin $cos $tan $countbits $onehot $isunknown $fatal $warning $dimensions $right $high $size $asin $acos $atan $atan2 $hypot $sinh $cosh $tanh $asinh $acosh $atanh $countones $onehot0 $error $info $random $dist_chi_square $dist_erlang $dist_exponential $dist_normal $dist_poisson $dist_t $dist_uniform $q_initialize $q_remove $q_exam $async$and$array $async$nand$array $async$or$array $async$nor$array $sync$and$array $sync$nand$array $sync$or$array $sync$nor$array $q_add $q_full $psprintf $async$and$plane $async$nand$plane $async$or$plane $async$nor$plane $sync$and$plane $sync$nand$plane $sync$or$plane $sync$nor$plane $system $display $displayb $displayh $displayo $strobe $strobeb $strobeh $strobeo $write $readmemb $readmemh $writememh $value$plusargs $dumpvars $dumpon $dumplimit $dumpports $dumpportson $dumpportslimit $writeb $writeh $writeo $monitor $monitorb $monitorh $monitoro $writememb $dumpfile $dumpoff $dumpall $dumpflush $dumpportsoff $dumpportsall $dumpportsflush $fclose $fdisplay $fdisplayb $fdisplayh $fdisplayo $fstrobe $fstrobeb $fstrobeh $fstrobeo $swrite $swriteb $swriteh $swriteo $fscanf $fread $fseek $fflush $feof $fopen $fwrite $fwriteb $fwriteh $fwriteo $fmonitor $fmonitorb $fmonitorh $fmonitoro $sformat $sformatf $fgetc $ungetc $fgets $sscanf $rewind $ftell $ferror"
            },
            contains: [A.C_BLOCK_COMMENT_MODE, A.C_LINE_COMMENT_MODE, A.QUOTE_STRING_MODE, {
                className: "number",
                contains: [A.BACKSLASH_ESCAPE],
                variants: [{
                    begin: "\\b((\\d+'(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)"
                }, {
                    begin: "\\B(('(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)"
                }, {
                    begin: "\\b([0-9_])+",
                    relevance: 0
                }]
            }, {
                className: "variable",
                variants: [{
                    begin: "#\\((?!parameter).+\\)"
                }, {
                    begin: "\\.\\w+",
                    relevance: 0
                }]
            }, {
                className: "meta",
                begin: "`",
                end: "$",
                keywords: {
                    "meta-keyword": "define __FILE__ __LINE__ begin_keywords celldefine default_nettype define else elsif end_keywords endcelldefine endif ifdef ifndef include line nounconnected_drive pragma resetall timescale unconnected_drive undef undefineall"
                },
                relevance: 0
            }]
        }
    }
    Cc0.exports = L84
});
var Uc0 = U((n87, zc0) => {
    function M84(A) {
        let B = "[eE][-+]?\\d(_|\\d)*",
            G = "\\d(_|\\d)*(\\.\\d(_|\\d)*)?(" + B + ")?",
            Z = "\\w+",
            Y = "\\b(" + ("\\d(_|\\d)*#\\w+(\\.\\w+)?#(" + B + ")?") + "|" + G + ")";
        return {
            name: "VHDL",
            case_insensitive: !0,
            keywords: {
                keyword: "abs access after alias all and architecture array assert assume assume_guarantee attribute begin block body buffer bus case component configuration constant context cover disconnect downto default else elsif end entity exit fairness file for force function generate generic group guarded if impure in inertial inout is label library linkage literal loop map mod nand new next nor not null of on open or others out package parameter port postponed procedure process property protected pure range record register reject release rem report restrict restrict_guarantee return rol ror select sequence severity shared signal sla sll sra srl strong subtype then to transport type unaffected units until use variable view vmode vprop vunit wait when while with xnor xor",
                built_in: "boolean bit character integer time delay_length natural positive string bit_vector file_open_kind file_open_status std_logic std_logic_vector unsigned signed boolean_vector integer_vector std_ulogic std_ulogic_vector unresolved_unsigned u_unsigned unresolved_signed u_signed real_vector time_vector",
                literal: "false true note warning error failure line text side width"
            },
            illegal: /\{/,
            contains: [A.C_BLOCK_COMMENT_MODE, A.COMMENT("--", "$"), A.QUOTE_STRING_MODE, {
                className: "number",
                begin: Y,
                relevance: 0
            }, {
                className: "string",
                begin: "'(U|X|0|1|Z|W|L|H|-)'",
                contains: [A.BACKSLASH_ESCAPE]
            }, {
                className: "symbol",
                begin: "'[A-Za-z](_?[A-Za-z0-9])*",
                contains: [A.BACKSLASH_ESCAPE]
            }]
        }
    }
    zc0.exports = M84
});
var wc0 = U((a87, $c0) => {
    function O84(A) {
        return {
            name: "Vim Script",
            keywords: {
                $pattern: /[!#@\w]+/,
                keyword: "N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope cp cpf cq cr cs cst cu cuna cunme cw delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu go gr grepa gu gv ha helpf helpg helpt hi hid his ia iabc if ij il im imapc ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf quita qa rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank",
                built_in: "synIDtrans atan2 range matcharg did_filetype asin feedkeys xor argv complete_check add getwinposx getqflist getwinposy screencol clearmatches empty extend getcmdpos mzeval garbagecollect setreg ceil sqrt diff_hlID inputsecret get getfperm getpid filewritable shiftwidth max sinh isdirectory synID system inputrestore winline atan visualmode inputlist tabpagewinnr round getregtype mapcheck hasmapto histdel argidx findfile sha256 exists toupper getcmdline taglist string getmatches bufnr strftime winwidth bufexists strtrans tabpagebuflist setcmdpos remote_read printf setloclist getpos getline bufwinnr float2nr len getcmdtype diff_filler luaeval resolve libcallnr foldclosedend reverse filter has_key bufname str2float strlen setline getcharmod setbufvar index searchpos shellescape undofile foldclosed setqflist buflisted strchars str2nr virtcol floor remove undotree remote_expr winheight gettabwinvar reltime cursor tabpagenr finddir localtime acos getloclist search tanh matchend rename gettabvar strdisplaywidth type abs py3eval setwinvar tolower wildmenumode log10 spellsuggest bufloaded synconcealed nextnonblank server2client complete settabwinvar executable input wincol setmatches getftype hlID inputsave searchpair or screenrow line settabvar histadd deepcopy strpart remote_peek and eval getftime submatch screenchar winsaveview matchadd mkdir screenattr getfontname libcall reltimestr getfsize winnr invert pow getbufline byte2line soundfold repeat fnameescape tagfiles sin strwidth spellbadword trunc maparg log lispindent hostname setpos globpath remote_foreground getchar synIDattr fnamemodify cscope_connection stridx winbufnr indent min complete_add nr2char searchpairpos inputdialog values matchlist items hlexists strridx browsedir expand fmod pathshorten line2byte argc count getwinvar glob foldtextresult getreg foreground cosh matchdelete has char2nr simplify histget searchdecl iconv winrestcmd pumvisible writefile foldlevel haslocaldir keys cos matchstr foldtext histnr tan tempname getcwd byteidx getbufvar islocked escape eventhandler remote_send serverlist winrestview synstack pyeval prevnonblank readfile cindent filereadable changenr exp"
            },
            illegal: /;/,
            contains: [A.NUMBER_MODE, {
                className: "string",
                begin: "'",
                end: "'",
                illegal: "\\n"
            }, {
                className: "string",
                begin: /"(\\"|\n\\|[^"\n])*"/
            }, A.COMMENT('"', "$"), {
                className: "variable",
                begin: /[bwtglsav]:[\w\d_]*/
            }, {
                className: "function",
                beginKeywords: "function function!",
                end: "$",
                relevance: 0,
                contains: [A.TITLE_MODE, {
                    className: "params",
                    begin: "\\(",
                    end: "\\)"
                }]
            }, {
                className: "symbol",
                begin: /<[\w-]+>/
            }]
        }
    }
    $c0.exports = O84
});
var Nc0 = U((s87, qc0) => {
    function R84(A) {
        return {
            name: "Intel x86 Assembly",
            case_insensitive: !0,
            keywords: {
                $pattern: "[.%]?" + A.IDENT_RE,
                keyword: "lock rep repe repz repne repnz xaquire xrelease bnd nobnd aaa aad aam aas adc add and arpl bb0_reset bb1_reset bound bsf bsr bswap bt btc btr bts call cbw cdq cdqe clc cld cli clts cmc cmp cmpsb cmpsd cmpsq cmpsw cmpxchg cmpxchg486 cmpxchg8b cmpxchg16b cpuid cpu_read cpu_write cqo cwd cwde daa das dec div dmint emms enter equ f2xm1 fabs fadd faddp fbld fbstp fchs fclex fcmovb fcmovbe fcmove fcmovnb fcmovnbe fcmovne fcmovnu fcmovu fcom fcomi fcomip fcomp fcompp fcos fdecstp fdisi fdiv fdivp fdivr fdivrp femms feni ffree ffreep fiadd ficom ficomp fidiv fidivr fild fimul fincstp finit fist fistp fisttp fisub fisubr fld fld1 fldcw fldenv fldl2e fldl2t fldlg2 fldln2 fldpi fldz fmul fmulp fnclex fndisi fneni fninit fnop fnsave fnstcw fnstenv fnstsw fpatan fprem fprem1 fptan frndint frstor fsave fscale fsetpm fsin fsincos fsqrt fst fstcw fstenv fstp fstsw fsub fsubp fsubr fsubrp ftst fucom fucomi fucomip fucomp fucompp fxam fxch fxtract fyl2x fyl2xp1 hlt ibts icebp idiv imul in inc incbin insb insd insw int int01 int1 int03 int3 into invd invpcid invlpg invlpga iret iretd iretq iretw jcxz jecxz jrcxz jmp jmpe lahf lar lds lea leave les lfence lfs lgdt lgs lidt lldt lmsw loadall loadall286 lodsb lodsd lodsq lodsw loop loope loopne loopnz loopz lsl lss ltr mfence monitor mov movd movq movsb movsd movsq movsw movsx movsxd movzx mul mwait neg nop not or out outsb outsd outsw packssdw packsswb packuswb paddb paddd paddsb paddsiw paddsw paddusb paddusw paddw pand pandn pause paveb pavgusb pcmpeqb pcmpeqd pcmpeqw pcmpgtb pcmpgtd pcmpgtw pdistib pf2id pfacc pfadd pfcmpeq pfcmpge pfcmpgt pfmax pfmin pfmul pfrcp pfrcpit1 pfrcpit2 pfrsqit1 pfrsqrt pfsub pfsubr pi2fd pmachriw pmaddwd pmagw pmulhriw pmulhrwa pmulhrwc pmulhw pmullw pmvgezb pmvlzb pmvnzb pmvzb pop popa popad popaw popf popfd popfq popfw por prefetch prefetchw pslld psllq psllw psrad psraw psrld psrlq psrlw psubb psubd psubsb psubsiw psubsw psubusb psubusw psubw punpckhbw punpckhdq punpckhwd punpcklbw punpckldq punpcklwd push pusha pushad pushaw pushf pushfd pushfq pushfw pxor rcl rcr rdshr rdmsr rdpmc rdtsc rdtscp ret retf retn rol ror rdm rsdc rsldt rsm rsts sahf sal salc sar sbb scasb scasd scasq scasw sfence sgdt shl shld shr shrd sidt sldt skinit smi smint smintold smsw stc std sti stosb stosd stosq stosw str sub svdc svldt svts swapgs syscall sysenter sysexit sysret test ud0 ud1 ud2b ud2 ud2a umov verr verw fwait wbinvd wrshr wrmsr xadd xbts xchg xlatb xlat xor cmove cmovz cmovne cmovnz cmova cmovnbe cmovae cmovnb cmovb cmovnae cmovbe cmovna cmovg cmovnle cmovge cmovnl cmovl cmovnge cmovle cmovng cmovc cmovnc cmovo cmovno cmovs cmovns cmovp cmovpe cmovnp cmovpo je jz jne jnz ja jnbe jae jnb jb jnae jbe jna jg jnle jge jnl jl jnge jle jng jc jnc jo jno js jns jpo jnp jpe jp sete setz setne setnz seta setnbe setae setnb setnc setb setnae setcset setbe setna setg setnle setge setnl setl setnge setle setng sets setns seto setno setpe setp setpo setnp addps addss andnps andps cmpeqps cmpeqss cmpleps cmpless cmpltps cmpltss cmpneqps cmpneqss cmpnleps cmpnless cmpnltps cmpnltss cmpordps cmpordss cmpunordps cmpunordss cmpps cmpss comiss cvtpi2ps cvtps2pi cvtsi2ss cvtss2si cvttps2pi cvttss2si divps divss ldmxcsr maxps maxss minps minss movaps movhps movlhps movlps movhlps movmskps movntps movss movups mulps mulss orps rcpps rcpss rsqrtps rsqrtss shufps sqrtps sqrtss stmxcsr subps subss ucomiss unpckhps unpcklps xorps fxrstor fxrstor64 fxsave fxsave64 xgetbv xsetbv xsave xsave64 xsaveopt xsaveopt64 xrstor xrstor64 prefetchnta prefetcht0 prefetcht1 prefetcht2 maskmovq movntq pavgb pavgw pextrw pinsrw pmaxsw pmaxub pminsw pminub pmovmskb pmulhuw psadbw pshufw pf2iw pfnacc pfpnacc pi2fw pswapd maskmovdqu clflush movntdq movnti movntpd movdqa movdqu movdq2q movq2dq paddq pmuludq pshufd pshufhw pshuflw pslldq psrldq psubq punpckhqdq punpcklqdq addpd addsd andnpd andpd cmpeqpd cmpeqsd cmplepd cmplesd cmpltpd cmpltsd cmpneqpd cmpneqsd cmpnlepd cmpnlesd cmpnltpd cmpnltsd cmpordpd cmpordsd cmpunordpd cmpunordsd cmppd comisd cvtdq2pd cvtdq2ps cvtpd2dq cvtpd2pi cvtpd2ps cvtpi2pd cvtps2dq cvtps2pd cvtsd2si cvtsd2ss cvtsi2sd cvtss2sd cvttpd2pi cvttpd2dq cvttps2dq cvttsd2si divpd divsd maxpd maxsd minpd minsd movapd movhpd movlpd movmskpd movupd mulpd mulsd orpd shufpd sqrtpd sqrtsd subpd subsd ucomisd unpckhpd unpcklpd xorpd addsubpd addsubps haddpd haddps hsubpd hsubps lddqu movddup movshdup movsldup clgi stgi vmcall vmclear vmfunc vmlaunch vmload vmmcall vmptrld vmptrst vmread vmresume vmrun vmsave vmwrite vmxoff vmxon invept invvpid pabsb pabsw pabsd palignr phaddw phaddd phaddsw phsubw phsubd phsubsw pmaddubsw pmulhrsw pshufb psignb psignw psignd extrq insertq movntsd movntss lzcnt blendpd blendps blendvpd blendvps dppd dpps extractps insertps movntdqa mpsadbw packusdw pblendvb pblendw pcmpeqq pextrb pextrd pextrq phminposuw pinsrb pinsrd pinsrq pmaxsb pmaxsd pmaxud pmaxuw pminsb pminsd pminud pminuw pmovsxbw pmovsxbd pmovsxbq pmovsxwd pmovsxwq pmovsxdq pmovzxbw pmovzxbd pmovzxbq pmovzxwd pmovzxwq pmovzxdq pmuldq pmulld ptest roundpd roundps roundsd roundss crc32 pcmpestri pcmpestrm pcmpistri pcmpistrm pcmpgtq popcnt getsec pfrcpv pfrsqrtv movbe aesenc aesenclast aesdec aesdeclast aesimc aeskeygenassist vaesenc vaesenclast vaesdec vaesdeclast vaesimc vaeskeygenassist vaddpd vaddps vaddsd vaddss vaddsubpd vaddsubps vandpd vandps vandnpd vandnps vblendpd vblendps vblendvpd vblendvps vbroadcastss vbroadcastsd vbroadcastf128 vcmpeq_ospd vcmpeqpd vcmplt_ospd vcmpltpd vcmple_ospd vcmplepd vcmpunord_qpd vcmpunordpd vcmpneq_uqpd vcmpneqpd vcmpnlt_uspd vcmpnltpd vcmpnle_uspd vcmpnlepd vcmpord_qpd vcmpordpd vcmpeq_uqpd vcmpnge_uspd vcmpngepd vcmpngt_uspd vcmpngtpd vcmpfalse_oqpd vcmpfalsepd vcmpneq_oqpd vcmpge_ospd vcmpgepd vcmpgt_ospd vcmpgtpd vcmptrue_uqpd vcmptruepd vcmplt_oqpd vcmple_oqpd vcmpunord_spd vcmpneq_uspd vcmpnlt_uqpd vcmpnle_uqpd vcmpord_spd vcmpeq_uspd vcmpnge_uqpd vcmpngt_uqpd vcmpfalse_ospd vcmpneq_ospd vcmpge_oqpd vcmpgt_oqpd vcmptrue_uspd vcmppd vcmpeq_osps vcmpeqps vcmplt_osps vcmpltps vcmple_osps vcmpleps vcmpunord_qps vcmpunordps vcmpneq_uqps vcmpneqps vcmpnlt_usps vcmpnltps vcmpnle_usps vcmpnleps vcmpord_qps vcmpordps vcmpeq_uqps vcmpnge_usps vcmpngeps vcmpngt_usps vcmpngtps vcmpfalse_oqps vcmpfalseps vcmpneq_oqps vcmpge_osps vcmpgeps vcmpgt_osps vcmpgtps vcmptrue_uqps vcmptrueps vcmplt_oqps vcmple_oqps vcmpunord_sps vcmpneq_usps vcmpnlt_uqps vcmpnle_uqps vcmpord_sps vcmpeq_usps vcmpnge_uqps vcmpngt_uqps vcmpfalse_osps vcmpneq_osps vcmpge_oqps vcmpgt_oqps vcmptrue_usps vcmpps vcmpeq_ossd vcmpeqsd vcmplt_ossd vcmpltsd vcmple_ossd vcmplesd vcmpunord_qsd vcmpunordsd vcmpneq_uqsd vcmpneqsd vcmpnlt_ussd vcmpnltsd vcmpnle_ussd vcmpnlesd vcmpord_qsd vcmpordsd vcmpeq_uqsd vcmpnge_ussd vcmpngesd vcmpngt_ussd vcmpngtsd vcmpfalse_oqsd vcmpfalsesd vcmpneq_oqsd vcmpge_ossd vcmpgesd vcmpgt_ossd vcmpgtsd vcmptrue_uqsd vcmptruesd vcmplt_oqsd vcmple_oqsd vcmpunord_ssd vcmpneq_ussd vcmpnlt_uqsd vcmpnle_uqsd vcmpord_ssd vcmpeq_ussd vcmpnge_uqsd vcmpngt_uqsd vcmpfalse_ossd vcmpneq_ossd vcmpge_oqsd vcmpgt_oqsd vcmptrue_ussd vcmpsd vcmpeq_osss vcmpeqss vcmplt_osss vcmpltss vcmple_osss vcmpless vcmpunord_qss vcmpunordss vcmpneq_uqss vcmpneqss vcmpnlt_usss vcmpnltss vcmpnle_usss vcmpnless vcmpord_qss vcmpordss vcmpeq_uqss vcmpnge_usss vcmpngess vcmpngt_usss vcmpngtss vcmpfalse_oqss vcmpfalsess vcmpneq_oqss vcmpge_osss vcmpgess vcmpgt_osss vcmpgtss vcmptrue_uqss vcmptruess vcmplt_oqss vcmple_oqss vcmpunord_sss vcmpneq_usss vcmpnlt_uqss vcmpnle_uqss vcmpord_sss vcmpeq_usss vcmpnge_uqss vcmpngt_uqss vcmpfalse_osss vcmpneq_osss vcmpge_oqss vcmpgt_oqss vcmptrue_usss vcmpss vcomisd vcomiss vcvtdq2pd vcvtdq2ps vcvtpd2dq vcvtpd2ps vcvtps2dq vcvtps2pd vcvtsd2si vcvtsd2ss vcvtsi2sd vcvtsi2ss vcvtss2sd vcvtss2si vcvttpd2dq vcvttps2dq vcvttsd2si vcvttss2si vdivpd vdivps vdivsd vdivss vdppd vdpps vextractf128 vextractps vhaddpd vhaddps vhsubpd vhsubps vinsertf128 vinsertps vlddqu vldqqu vldmxcsr vmaskmovdqu vmaskmovps vmaskmovpd vmaxpd vmaxps vmaxsd vmaxss vminpd vminps vminsd vminss vmovapd vmovaps vmovd vmovq vmovddup vmovdqa vmovqqa vmovdqu vmovqqu vmovhlps vmovhpd vmovhps vmovlhps vmovlpd vmovlps vmovmskpd vmovmskps vmovntdq vmovntqq vmovntdqa vmovntpd vmovntps vmovsd vmovshdup vmovsldup vmovss vmovupd vmovups vmpsadbw vmulpd vmulps vmulsd vmulss vorpd vorps vpabsb vpabsw vpabsd vpacksswb vpackssdw vpackuswb vpackusdw vpaddb vpaddw vpaddd vpaddq vpaddsb vpaddsw vpaddusb vpaddusw vpalignr vpand vpandn vpavgb vpavgw vpblendvb vpblendw vpcmpestri vpcmpestrm vpcmpistri vpcmpistrm vpcmpeqb vpcmpeqw vpcmpeqd vpcmpeqq vpcmpgtb vpcmpgtw vpcmpgtd vpcmpgtq vpermilpd vpermilps vperm2f128 vpextrb vpextrw vpextrd vpextrq vphaddw vphaddd vphaddsw vphminposuw vphsubw vphsubd vphsubsw vpinsrb vpinsrw vpinsrd vpinsrq vpmaddwd vpmaddubsw vpmaxsb vpmaxsw vpmaxsd vpmaxub vpmaxuw vpmaxud vpminsb vpminsw vpminsd vpminub vpminuw vpminud vpmovmskb vpmovsxbw vpmovsxbd vpmovsxbq vpmovsxwd vpmovsxwq vpmovsxdq vpmovzxbw vpmovzxbd vpmovzxbq vpmovzxwd vpmovzxwq vpmovzxdq vpmulhuw vpmulhrsw vpmulhw vpmullw vpmulld vpmuludq vpmuldq vpor vpsadbw vpshufb vpshufd vpshufhw vpshuflw vpsignb vpsignw vpsignd vpslldq vpsrldq vpsllw vpslld vpsllq vpsraw vpsrad vpsrlw vpsrld vpsrlq vptest vpsubb vpsubw vpsubd vpsubq vpsubsb vpsubsw vpsubusb vpsubusw vpunpckhbw vpunpckhwd vpunpckhdq vpunpckhqdq vpunpcklbw vpunpcklwd vpunpckldq vpunpcklqdq vpxor vrcpps vrcpss vrsqrtps vrsqrtss vroundpd vroundps vroundsd vroundss vshufpd vshufps vsqrtpd vsqrtps vsqrtsd vsqrtss vstmxcsr vsubpd vsubps vsubsd vsubss vtestps vtestpd vucomisd vucomiss vunpckhpd vunpckhps vunpcklpd vunpcklps vxorpd vxorps vzeroall vzeroupper pclmullqlqdq pclmulhqlqdq pclmullqhqdq pclmulhqhqdq pclmulqdq vpclmullqlqdq vpclmulhqlqdq vpclmullqhqdq vpclmulhqhqdq vpclmulqdq vfmadd132ps vfmadd132pd vfmadd312ps vfmadd312pd vfmadd213ps vfmadd213pd vfmadd123ps vfmadd123pd vfmadd231ps vfmadd231pd vfmadd321ps vfmadd321pd vfmaddsub132ps vfmaddsub132pd vfmaddsub312ps vfmaddsub312pd vfmaddsub213ps vfmaddsub213pd vfmaddsub123ps vfmaddsub123pd vfmaddsub231ps vfmaddsub231pd vfmaddsub321ps vfmaddsub321pd vfmsub132ps vfmsub132pd vfmsub312ps vfmsub312pd vfmsub213ps vfmsub213pd vfmsub123ps vfmsub123pd vfmsub231ps vfmsub231pd vfmsub321ps vfmsub321pd vfmsubadd132ps vfmsubadd132pd vfmsubadd312ps vfmsubadd312pd vfmsubadd213ps vfmsubadd213pd vfmsubadd123ps vfmsubadd123pd vfmsubadd231ps vfmsubadd231pd vfmsubadd321ps vfmsubadd321pd vfnmadd132ps vfnmadd132pd vfnmadd312ps vfnmadd312pd vfnmadd213ps vfnmadd213pd vfnmadd123ps vfnmadd123pd vfnmadd231ps vfnmadd231pd vfnmadd321ps vfnmadd321pd vfnmsub132ps vfnmsub132pd vfnmsub312ps vfnmsub312pd vfnmsub213ps vfnmsub213pd vfnmsub123ps vfnmsub123pd vfnmsub231ps vfnmsub231pd vfnmsub321ps vfnmsub321pd vfmadd132ss vfmadd132sd vfmadd312ss vfmadd312sd vfmadd213ss vfmadd213sd vfmadd123ss vfmadd123sd vfmadd231ss vfmadd231sd vfmadd321ss vfmadd321sd vfmsub132ss vfmsub132sd vfmsub312ss vfmsub312sd vfmsub213ss vfmsub213sd vfmsub123ss vfmsub123sd vfmsub231ss vfmsub231sd vfmsub321ss vfmsub321sd vfnmadd132ss vfnmadd132sd vfnmadd312ss vfnmadd312sd vfnmadd213ss vfnmadd213sd vfnmadd123ss vfnmadd123sd vfnmadd231ss vfnmadd231sd vfnmadd321ss vfnmadd321sd vfnmsub132ss vfnmsub132sd vfnmsub312ss vfnmsub312sd vfnmsub213ss vfnmsub213sd vfnmsub123ss vfnmsub123sd vfnmsub231ss vfnmsub231sd vfnmsub321ss vfnmsub321sd rdfsbase rdgsbase rdrand wrfsbase wrgsbase vcvtph2ps vcvtps2ph adcx adox rdseed clac stac xstore xcryptecb xcryptcbc xcryptctr xcryptcfb xcryptofb montmul xsha1 xsha256 llwpcb slwpcb lwpval lwpins vfmaddpd vfmaddps vfmaddsd vfmaddss vfmaddsubpd vfmaddsubps vfmsubaddpd vfmsubaddps vfmsubpd vfmsubps vfmsubsd vfmsubss vfnmaddpd vfnmaddps vfnmaddsd vfnmaddss vfnmsubpd vfnmsubps vfnmsubsd vfnmsubss vfrczpd vfrczps vfrczsd vfrczss vpcmov vpcomb vpcomd vpcomq vpcomub vpcomud vpcomuq vpcomuw vpcomw vphaddbd vphaddbq vphaddbw vphadddq vphaddubd vphaddubq vphaddubw vphaddudq vphadduwd vphadduwq vphaddwd vphaddwq vphsubbw vphsubdq vphsubwd vpmacsdd vpmacsdqh vpmacsdql vpmacssdd vpmacssdqh vpmacssdql vpmacsswd vpmacssww vpmacswd vpmacsww vpmadcsswd vpmadcswd vpperm vprotb vprotd vprotq vprotw vpshab vpshad vpshaq vpshaw vpshlb vpshld vpshlq vpshlw vbroadcasti128 vpblendd vpbroadcastb vpbroadcastw vpbroadcastd vpbroadcastq vpermd vpermpd vpermps vpermq vperm2i128 vextracti128 vinserti128 vpmaskmovd vpmaskmovq vpsllvd vpsllvq vpsravd vpsrlvd vpsrlvq vgatherdpd vgatherqpd vgatherdps vgatherqps vpgatherdd vpgatherqd vpgatherdq vpgatherqq xabort xbegin xend xtest andn bextr blci blcic blsi blsic blcfill blsfill blcmsk blsmsk blsr blcs bzhi mulx pdep pext rorx sarx shlx shrx tzcnt tzmsk t1mskc valignd valignq vblendmpd vblendmps vbroadcastf32x4 vbroadcastf64x4 vbroadcasti32x4 vbroadcasti64x4 vcompresspd vcompressps vcvtpd2udq vcvtps2udq vcvtsd2usi vcvtss2usi vcvttpd2udq vcvttps2udq vcvttsd2usi vcvttss2usi vcvtudq2pd vcvtudq2ps vcvtusi2sd vcvtusi2ss vexpandpd vexpandps vextractf32x4 vextractf64x4 vextracti32x4 vextracti64x4 vfixupimmpd vfixupimmps vfixupimmsd vfixupimmss vgetexppd vgetexpps vgetexpsd vgetexpss vgetmantpd vgetmantps vgetmantsd vgetmantss vinsertf32x4 vinsertf64x4 vinserti32x4 vinserti64x4 vmovdqa32 vmovdqa64 vmovdqu32 vmovdqu64 vpabsq vpandd vpandnd vpandnq vpandq vpblendmd vpblendmq vpcmpltd vpcmpled vpcmpneqd vpcmpnltd vpcmpnled vpcmpd vpcmpltq vpcmpleq vpcmpneqq vpcmpnltq vpcmpnleq vpcmpq vpcmpequd vpcmpltud vpcmpleud vpcmpnequd vpcmpnltud vpcmpnleud vpcmpud vpcmpequq vpcmpltuq vpcmpleuq vpcmpnequq vpcmpnltuq vpcmpnleuq vpcmpuq vpcompressd vpcompressq vpermi2d vpermi2pd vpermi2ps vpermi2q vpermt2d vpermt2pd vpermt2ps vpermt2q vpexpandd vpexpandq vpmaxsq vpmaxuq vpminsq vpminuq vpmovdb vpmovdw vpmovqb vpmovqd vpmovqw vpmovsdb vpmovsdw vpmovsqb vpmovsqd vpmovsqw vpmovusdb vpmovusdw vpmovusqb vpmovusqd vpmovusqw vpord vporq vprold vprolq vprolvd vprolvq vprord vprorq vprorvd vprorvq vpscatterdd vpscatterdq vpscatterqd vpscatterqq vpsraq vpsravq vpternlogd vpternlogq vptestmd vptestmq vptestnmd vptestnmq vpxord vpxorq vrcp14pd vrcp14ps vrcp14sd vrcp14ss vrndscalepd vrndscaleps vrndscalesd vrndscaless vrsqrt14pd vrsqrt14ps vrsqrt14sd vrsqrt14ss vscalefpd vscalefps vscalefsd vscalefss vscatterdpd vscatterdps vscatterqpd vscatterqps vshuff32x4 vshuff64x2 vshufi32x4 vshufi64x2 kandnw kandw kmovw knotw kortestw korw kshiftlw kshiftrw kunpckbw kxnorw kxorw vpbroadcastmb2q vpbroadcastmw2d vpconflictd vpconflictq vplzcntd vplzcntq vexp2pd vexp2ps vrcp28pd vrcp28ps vrcp28sd vrcp28ss vrsqrt28pd vrsqrt28ps vrsqrt28sd vrsqrt28ss vgatherpf0dpd vgatherpf0dps vgatherpf0qpd vgatherpf0qps vgatherpf1dpd vgatherpf1dps vgatherpf1qpd vgatherpf1qps vscatterpf0dpd vscatterpf0dps vscatterpf0qpd vscatterpf0qps vscatterpf1dpd vscatterpf1dps vscatterpf1qpd vscatterpf1qps prefetchwt1 bndmk bndcl bndcu bndcn bndmov bndldx bndstx sha1rnds4 sha1nexte sha1msg1 sha1msg2 sha256rnds2 sha256msg1 sha256msg2 hint_nop0 hint_nop1 hint_nop2 hint_nop3 hint_nop4 hint_nop5 hint_nop6 hint_nop7 hint_nop8 hint_nop9 hint_nop10 hint_nop11 hint_nop12 hint_nop13 hint_nop14 hint_nop15 hint_nop16 hint_nop17 hint_nop18 hint_nop19 hint_nop20 hint_nop21 hint_nop22 hint_nop23 hint_nop24 hint_nop25 hint_nop26 hint_nop27 hint_nop28 hint_nop29 hint_nop30 hint_nop31 hint_nop32 hint_nop33 hint_nop34 hint_nop35 hint_nop36 hint_nop37 hint_nop38 hint_nop39 hint_nop40 hint_nop41 hint_nop42 hint_nop43 hint_nop44 hint_nop45 hint_nop46 hint_nop47 hint_nop48 hint_nop49 hint_nop50 hint_nop51 hint_nop52 hint_nop53 hint_nop54 hint_nop55 hint_nop56 hint_nop57 hint_nop58 hint_nop59 hint_nop60 hint_nop61 hint_nop62 hint_nop63",
                built_in: "ip eip rip al ah bl bh cl ch dl dh sil dil bpl spl r8b r9b r10b r11b r12b r13b r14b r15b ax bx cx dx si di bp sp r8w r9w r10w r11w r12w r13w r14w r15w eax ebx ecx edx esi edi ebp esp eip r8d r9d r10d r11d r12d r13d r14d r15d rax rbx rcx rdx rsi rdi rbp rsp r8 r9 r10 r11 r12 r13 r14 r15 cs ds es fs gs ss st st0 st1 st2 st3 st4 st5 st6 st7 mm0 mm1 mm2 mm3 mm4 mm5 mm6 mm7 xmm0  xmm1  xmm2  xmm3  xmm4  xmm5  xmm6  xmm7  xmm8  xmm9 xmm10  xmm11 xmm12 xmm13 xmm14 xmm15 xmm16 xmm17 xmm18 xmm19 xmm20 xmm21 xmm22 xmm23 xmm24 xmm25 xmm26 xmm27 xmm28 xmm29 xmm30 xmm31 ymm0  ymm1  ymm2  ymm3  ymm4  ymm5  ymm6  ymm7  ymm8  ymm9 ymm10  ymm11 ymm12 ymm13 ymm14 ymm15 ymm16 ymm17 ymm18 ymm19 ymm20 ymm21 ymm22 ymm23 ymm24 ymm25 ymm26 ymm27 ymm28 ymm29 ymm30 ymm31 zmm0  zmm1  zmm2  zmm3  zmm4  zmm5  zmm6  zmm7  zmm8  zmm9 zmm10  zmm11 zmm12 zmm13 zmm14 zmm15 zmm16 zmm17 zmm18 zmm19 zmm20 zmm21 zmm22 zmm23 zmm24 zmm25 zmm26 zmm27 zmm28 zmm29 zmm30 zmm31 k0 k1 k2 k3 k4 k5 k6 k7 bnd0 bnd1 bnd2 bnd3 cr0 cr1 cr2 cr3 cr4 cr8 dr0 dr1 dr2 dr3 dr8 tr3 tr4 tr5 tr6 tr7 r0 r1 r2 r3 r4 r5 r6 r7 r0b r1b r2b r3b r4b r5b r6b r7b r0w r1w r2w r3w r4w r5w r6w r7w r0d r1d r2d r3d r4d r5d r6d r7d r0h r1h r2h r3h r0l r1l r2l r3l r4l r5l r6l r7l r8l r9l r10l r11l r12l r13l r14l r15l db dw dd dq dt ddq do dy dz resb resw resd resq rest resdq reso resy resz incbin equ times byte word dword qword nosplit rel abs seg wrt strict near far a32 ptr",
                meta: "%define %xdefine %+ %undef %defstr %deftok %assign %strcat %strlen %substr %rotate %elif %else %endif %if %ifmacro %ifctx %ifidn %ifidni %ifid %ifnum %ifstr %iftoken %ifempty %ifenv %error %warning %fatal %rep %endrep %include %push %pop %repl %pathsearch %depend %use %arg %stacksize %local %line %comment %endcomment .nolist __FILE__ __LINE__ __SECT__  __BITS__ __OUTPUT_FORMAT__ __DATE__ __TIME__ __DATE_NUM__ __TIME_NUM__ __UTC_DATE__ __UTC_TIME__ __UTC_DATE_NUM__ __UTC_TIME_NUM__  __PASS__ struc endstruc istruc at iend align alignb sectalign daz nodaz up down zero default option assume public bits use16 use32 use64 default section segment absolute extern global common cpu float __utf16__ __utf16le__ __utf16be__ __utf32__ __utf32le__ __utf32be__ __float8__ __float16__ __float32__ __float64__ __float80m__ __float80e__ __float128l__ __float128h__ __Infinity__ __QNaN__ __SNaN__ Inf NaN QNaN SNaN float8 float16 float32 float64 float80m float80e float128l float128h __FLOAT_DAZ__ __FLOAT_ROUND__ __FLOAT__"
            },
            contains: [A.COMMENT(";", "$", {
                relevance: 0
            }), {
                className: "number",
                variants: [{
                    begin: "\\b(?:([0-9][0-9_]*)?\\.[0-9_]*(?:[eE][+-]?[0-9_]+)?|(0[Xx])?[0-9][0-9_]*(\\.[0-9_]*)?(?:[pP](?:[+-]?[0-9_]+)?)?)\\b",
                    relevance: 0
                }, {
                    begin: "\\$[0-9][0-9A-Fa-f]*",
                    relevance: 0
                }, {
                    begin: "\\b(?:[0-9A-Fa-f][0-9A-Fa-f_]*[Hh]|[0-9][0-9_]*[DdTt]?|[0-7][0-7_]*[QqOo]|[0-1][0-1_]*[BbYy])\\b"
                }, {
                    begin: "\\b(?:0[Xx][0-9A-Fa-f_]+|0[DdTt][0-9_]+|0[QqOo][0-7_]+|0[BbYy][0-1_]+)\\b"
                }]
            }, A.QUOTE_STRING_MODE, {
                className: "string",
                variants: [{
                    begin: "'",
                    end: "[^\\\\]'"
                }, {
                    begin: "`",
                    end: "[^\\\\]`"
                }],
                relevance: 0
            }, {
                className: "symbol",
                variants: [{
                    begin: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)"
                }, {
                    begin: "^\\s*%%[A-Za-z0-9_$#@~.?]*:"
                }],
                relevance: 0
            }, {
                className: "subst",
                begin: "%[0-9]+",
                relevance: 0
            }, {
                className: "subst",
                begin: "%!S+",
                relevance: 0
            }, {
                className: "meta",
                begin: /^\s*\.[\w_-]+/
            }]
        }
    }
    qc0.exports = R84
});
var Mc0 = U((r87, Lc0) => {
    function T84(A) {
        let B = {
                $pattern: /[a-zA-Z][a-zA-Z0-9_?]*/,
                keyword: "if then else do while until for loop import with is as where when by data constant integer real text name boolean symbol infix prefix postfix block tree",
                literal: "true false nil",
                built_in: "in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin acos atan exp expm1 log log2 log10 log1p pi at text_length text_range text_find text_replace contains page slide basic_slide title_slide title subtitle fade_in fade_out fade_at clear_color color line_color line_width texture_wrap texture_transform texture scale_?x scale_?y scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y rotate_?z? rectangle circle ellipse sphere path line_to move_to quad_to curve_to theme background contents locally time mouse_?x mouse_?y mouse_buttons " + "ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts"
            },
            G = {
                className: "string",
                begin: '"',
                end: '"',
                illegal: "\\n"
            },
            Z = {
                className: "string",
                begin: "'",
                end: "'",
                illegal: "\\n"
            },
            I = {
                className: "string",
                begin: "<<",
                end: ">>"
            },
            Y = {
                className: "number",
                begin: "[0-9]+#[0-9A-Z_]+(\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?"
            },
            J = {
                beginKeywords: "import",
                end: "$",
                keywords: B,
                contains: [G]
            },
            W = {
                className: "function",
                begin: /[a-z][^\n]*->/,
                returnBegin: !0,
                end: /->/,
                contains: [A.inherit(A.TITLE_MODE, {
                    starts: {
                        endsWithParent: !0,
                        keywords: B
                    }
                })]
            };
        return {
            name: "XL",
            aliases: ["tao"],
            keywords: B,
            contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, G, Z, I, W, J, Y, A.NUMBER_MODE]
        }
    }
    Lc0.exports = T84
});
var Rc0 = U((o87, Oc0) => {
    function P84(A) {
        return {
            name: "XQuery",
            aliases: ["xpath", "xq"],
            case_insensitive: !1,
            illegal: /(proc)|(abstract)|(extends)|(until)|(#)/,
            keywords: {
                $pattern: /[a-zA-Z$][a-zA-Z0-9_:-]*/,
                keyword: "module schema namespace boundary-space preserve no-preserve strip default collation base-uri ordering context decimal-format decimal-separator copy-namespaces empty-sequence except exponent-separator external grouping-separator inherit no-inherit lax minus-sign per-mille percent schema-attribute schema-element strict unordered zero-digit declare import option function validate variable for at in let where order group by return if then else tumbling sliding window start when only end previous next stable ascending descending allowing empty greatest least some every satisfies switch case typeswitch try catch and or to union intersect instance of treat as castable cast map array delete insert into replace value rename copy modify update",
                type: "item document-node node attribute document element comment namespace namespace-node processing-instruction text construction xs:anyAtomicType xs:untypedAtomic xs:duration xs:time xs:decimal xs:float xs:double xs:gYearMonth xs:gYear xs:gMonthDay xs:gMonth xs:gDay xs:boolean xs:base64Binary xs:hexBinary xs:anyURI xs:QName xs:NOTATION xs:dateTime xs:dateTimeStamp xs:date xs:string xs:normalizedString xs:token xs:language xs:NMTOKEN xs:Name xs:NCName xs:ID xs:IDREF xs:ENTITY xs:integer xs:nonPositiveInteger xs:negativeInteger xs:long xs:int xs:short xs:byte xs:nonNegativeInteger xs:unisignedLong xs:unsignedInt xs:unsignedShort xs:unsignedByte xs:positiveInteger xs:yearMonthDuration xs:dayTimeDuration",
                literal: "eq ne lt le gt ge is self:: child:: descendant:: descendant-or-self:: attribute:: following:: following-sibling:: parent:: ancestor:: ancestor-or-self:: preceding:: preceding-sibling:: NaN"
            },
            contains: [{
                className: "variable",
                begin: /[$][\w\-:]+/
            }, {
                className: "built_in",
                variants: [{
                    begin: /\barray:/,
                    end: /(?:append|filter|flatten|fold-(?:left|right)|for-each(?:-pair)?|get|head|insert-before|join|put|remove|reverse|size|sort|subarray|tail)\b/
                }, {
                    begin: /\bmap:/,
                    end: /(?:contains|entry|find|for-each|get|keys|merge|put|remove|size)\b/
                }, {
                    begin: /\bmath:/,
                    end: /(?:a(?:cos|sin|tan[2]?)|cos|exp(?:10)?|log(?:10)?|pi|pow|sin|sqrt|tan)\b/
                }, {
                    begin: /\bop:/,
                    end: /\(/,
                    excludeEnd: !0
                }, {
                    begin: /\bfn:/,
                    end: /\(/,
                    excludeEnd: !0
                }, {
                    begin: /[^</$:'"-]\b(?:abs|accumulator-(?:after|before)|adjust-(?:date(?:Time)?|time)-to-timezone|analyze-string|apply|available-(?:environment-variables|system-properties)|avg|base-uri|boolean|ceiling|codepoints?-(?:equal|to-string)|collation-key|collection|compare|concat|contains(?:-token)?|copy-of|count|current(?:-)?(?:date(?:Time)?|time|group(?:ing-key)?|output-uri|merge-(?:group|key))?data|dateTime|days?-from-(?:date(?:Time)?|duration)|deep-equal|default-(?:collation|language)|distinct-values|document(?:-uri)?|doc(?:-available)?|element-(?:available|with-id)|empty|encode-for-uri|ends-with|environment-variable|error|escape-html-uri|exactly-one|exists|false|filter|floor|fold-(?:left|right)|for-each(?:-pair)?|format-(?:date(?:Time)?|time|integer|number)|function-(?:arity|available|lookup|name)|generate-id|has-children|head|hours-from-(?:dateTime|duration|time)|id(?:ref)?|implicit-timezone|in-scope-prefixes|index-of|innermost|insert-before|iri-to-uri|json-(?:doc|to-xml)|key|lang|last|load-xquery-module|local-name(?:-from-QName)?|(?:lower|upper)-case|matches|max|minutes-from-(?:dateTime|duration|time)|min|months?-from-(?:date(?:Time)?|duration)|name(?:space-uri-?(?:for-prefix|from-QName)?)?|nilled|node-name|normalize-(?:space|unicode)|not|number|one-or-more|outermost|parse-(?:ietf-date|json)|path|position|(?:prefix-from-)?QName|random-number-generator|regex-group|remove|replace|resolve-(?:QName|uri)|reverse|root|round(?:-half-to-even)?|seconds-from-(?:dateTime|duration|time)|snapshot|sort|starts-with|static-base-uri|stream-available|string-?(?:join|length|to-codepoints)?|subsequence|substring-?(?:after|before)?|sum|system-property|tail|timezone-from-(?:date(?:Time)?|time)|tokenize|trace|trans(?:form|late)|true|type-available|unordered|unparsed-(?:entity|text)?-?(?:public-id|uri|available|lines)?|uri-collection|xml-to-json|years?-from-(?:date(?:Time)?|duration)|zero-or-one)\b/
                }, {
                    begin: /\blocal:/,
                    end: /\(/,
                    excludeEnd: !0
                }, {
                    begin: /\bzip:/,
                    end: /(?:zip-file|(?:xml|html|text|binary)-entry| (?:update-)?entries)\b/
                }, {
                    begin: /\b(?:util|db|functx|app|xdmp|xmldb):/,
                    end: /\(/,
                    excludeEnd: !0
                }]
            }, {
                className: "string",
                variants: [{
                    begin: /"/,
                    end: /"/,
                    contains: [{
                        begin: /""/,
                        relevance: 0
                    }]
                }, {
                    begin: /'/,
                    end: /'/,
                    contains: [{
                        begin: /''/,
                        relevance: 0
                    }]
                }]
            }, {
                className: "number",
                begin: /(\b0[0-7_]+)|(\b0x[0-9a-fA-F_]+)|(\b[1-9][0-9_]*(\.[0-9_]+)?)|[0_]\b/,
                relevance: 0
            }, {
                className: "comment",
                begin: /\(:/,
                end: /:\)/,
                relevance: 10,
                contains: [{
                    className: "doctag",
                    begin: /@\w+/
                }]
            }, {
                className: "meta",
                begin: /%[\w\-:]+/
            }, {
                className: "title",
                begin: /\bxquery version "[13]\.[01]"\s?(?:encoding ".+")?/,
                end: /;/
            }, {
                beginKeywords: "element attribute comment document processing-instruction",
                end: /\{/,
                excludeEnd: !0
            }, {
                begin: /<([\w._:-]+)(\s+\S*=('|").*('|"))?>/,
                end: /(\/[\w._:-]+>)/,
                subLanguage: "xml",
                contains: [{
                    begin: /\{/,
                    end: /\}/,
                    subLanguage: "xquery"
                }, "self"]
            }]
        }
    }
    Oc0.exports = P84
});
var Pc0 = U((t87, Tc0) => {
    function j84(A) {
        let Q = {
                className: "string",
                contains: [A.BACKSLASH_ESCAPE],
                variants: [A.inherit(A.APOS_STRING_MODE, {
                    illegal: null
                }), A.inherit(A.QUOTE_STRING_MODE, {
                    illegal: null
                })]
            },
            B = A.UNDERSCORE_TITLE_MODE,
            G = {
                variants: [A.BINARY_NUMBER_MODE, A.C_NUMBER_MODE]
            },
            Z = "namespace class interface use extends function return abstract final public protected private static deprecated throw try catch Exception echo empty isset instanceof unset let var new const self require if else elseif switch case default do while loop for continue break likely unlikely __LINE__ __FILE__ __DIR__ __FUNCTION__ __CLASS__ __TRAIT__ __METHOD__ __NAMESPACE__ array boolean float double integer object resource string char long unsigned bool int uint ulong uchar true false null undefined";
        return {
            name: "Zephir",
            aliases: ["zep"],
            keywords: Z,
            contains: [A.C_LINE_COMMENT_MODE, A.COMMENT(/\/\*/, /\*\//, {
                contains: [{
                    className: "doctag",
                    begin: /@[A-Za-z]+/
                }]
            }), {
                className: "string",
                begin: /<<<['"]?\w+['"]?$/,
                end: /^\w+;/,
                contains: [A.BACKSLASH_ESCAPE]
            }, {
                begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
            }, {
                className: "function",
                beginKeywords: "function fn",
                end: /[;{]/,
                excludeEnd: !0,
                illegal: /\$|\[|%/,
                contains: [B, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    keywords: Z,
                    contains: ["self", A.C_BLOCK_COMMENT_MODE, Q, G]
                }]
            }, {
                className: "class",
                beginKeywords: "class interface",
                end: /\{/,
                excludeEnd: !0,
                illegal: /[:($"]/,
                contains: [{
                    beginKeywords: "extends implements"
                }, B]
            }, {
                beginKeywords: "namespace",
                end: /;/,
                illegal: /[.']/,
                contains: [B]
            }, {
                beginKeywords: "use",
                end: /;/,
                contains: [B]
            }, {
                begin: /=>/
            }, Q, G]
        }
    }
    Tc0.exports = j84
});
var tH1 = U((e87, jc0) => {
    var m1 = cv0();
    m1.registerLanguage("1c", lv0());
    m1.registerLanguage("abnf", nv0());
    m1.registerLanguage("accesslog", rv0());
    m1.registerLanguage("actionscript", tv0());
    m1.registerLanguage("ada", Ab0());
    m1.registerLanguage("angelscript", Bb0());
    m1.registerLanguage("apache", Zb0());
    m1.registerLanguage("applescript", Xb0());
    m1.registerLanguage("arcade", Vb0());
    m1.registerLanguage("arduino", Db0());
    m1.registerLanguage("armasm", Cb0());
    m1.registerLanguage("xml", $b0());
    m1.registerLanguage("asciidoc", Nb0());
    m1.registerLanguage("aspectj", Mb0());
    m1.registerLanguage("autohotkey", Rb0());
    m1.registerLanguage("autoit", Pb0());
    m1.registerLanguage("avrasm", Sb0());
    m1.registerLanguage("awk", kb0());
    m1.registerLanguage("axapta", xb0());
    m1.registerLanguage("bash", bb0());
    m1.registerLanguage("basic", hb0());
    m1.registerLanguage("bnf", ub0());
    m1.registerLanguage("brainfuck", db0());
    m1.registerLanguage("c-like", pb0());
    m1.registerLanguage("c", ib0());
    m1.registerLanguage("cal", ab0());
    m1.registerLanguage("capnproto", rb0());
    m1.registerLanguage("ceylon", tb0());
    m1.registerLanguage("clean", Af0());
    m1.registerLanguage("clojure", Bf0());
    m1.registerLanguage("clojure-repl", Zf0());
    m1.registerLanguage("cmake", Yf0());
    m1.registerLanguage("coffeescript", Wf0());
    m1.registerLanguage("coq", Ff0());
    m1.registerLanguage("cos", Kf0());
    m1.registerLanguage("cpp", Hf0());
    m1.registerLanguage("crmsh", Ef0());
    m1.registerLanguage("crystal", Uf0());
    m1.registerLanguage("csharp", wf0());
    m1.registerLanguage("csp", Nf0());
    m1.registerLanguage("css", Mf0());
    m1.registerLanguage("d", Rf0());
    m1.registerLanguage("markdown", Pf0());
    m1.registerLanguage("dart", Sf0());
    m1.registerLanguage("delphi", kf0());
    m1.registerLanguage("diff", xf0());
    m1.registerLanguage("django", bf0());
    m1.registerLanguage("dns", hf0());
    m1.registerLanguage("dockerfile", uf0());
    m1.registerLanguage("dos", df0());
    m1.registerLanguage("dsconfig", pf0());
    m1.registerLanguage("dts", if0());
    m1.registerLanguage("dust", af0());
    m1.registerLanguage("ebnf", rf0());
    m1.registerLanguage("elixir", tf0());
    m1.registerLanguage("elm", Ah0());
    m1.registerLanguage("ruby", Gh0());
    m1.registerLanguage("erb", Ih0());
    m1.registerLanguage("erlang-repl", Jh0());
    m1.registerLanguage("erlang", Xh0());
    m1.registerLanguage("excel", Vh0());
    m1.registerLanguage("fix", Dh0());
    m1.registerLanguage("flix", Ch0());
    m1.registerLanguage("fortran", zh0());
    m1.registerLanguage("fsharp", $h0());
    m1.registerLanguage("gams", qh0());
    m1.registerLanguage("gauss", Lh0());
    m1.registerLanguage("gcode", Oh0());
    m1.registerLanguage("gherkin", Th0());
    m1.registerLanguage("glsl", jh0());
    m1.registerLanguage("gml", _h0());
    m1.registerLanguage("go", yh0());
    m1.registerLanguage("golo", vh0());
    m1.registerLanguage("gradle", fh0());
    m1.registerLanguage("groovy", gh0());
    m1.registerLanguage("haml", mh0());
    m1.registerLanguage("handlebars", ph0());
    m1.registerLanguage("haskell", ih0());
    m1.registerLanguage("haxe", ah0());
    m1.registerLanguage("hsp", rh0());
    m1.registerLanguage("htmlbars", eh0());
    m1.registerLanguage("http", Qg0());
    m1.registerLanguage("hy", Gg0());
    m1.registerLanguage("inform7", Ig0());
    m1.registerLanguage("ini", Xg0());
    m1.registerLanguage("irpf90", Vg0());
    m1.registerLanguage("isbl", Dg0());
    m1.registerLanguage("java", Cg0());
    m1.registerLanguage("javascript", Ug0());
    m1.registerLanguage("jboss-cli", wg0());
    m1.registerLanguage("json", Ng0());
    m1.registerLanguage("julia", Mg0());
    m1.registerLanguage("julia-repl", Rg0());
    m1.registerLanguage("kotlin", Pg0());
    m1.registerLanguage("lasso", Sg0());
    m1.registerLanguage("latex", kg0());
    m1.registerLanguage("ldif", xg0());
    m1.registerLanguage("leaf", bg0());
    m1.registerLanguage("less", ug0());
    m1.registerLanguage("lisp", dg0());
    m1.registerLanguage("livecodeserver", pg0());
    m1.registerLanguage("livescript", ig0());
    m1.registerLanguage("llvm", ag0());
    m1.registerLanguage("lsl", rg0());
    m1.registerLanguage("lua", tg0());
    m1.registerLanguage("makefile", Au0());
    m1.registerLanguage("mathematica", Iu0());
    m1.registerLanguage("matlab", Ju0());
    m1.registerLanguage("maxima", Xu0());
    m1.registerLanguage("mel", Vu0());
    m1.registerLanguage("mercury", Du0());
    m1.registerLanguage("mipsasm", Cu0());
    m1.registerLanguage("mizar", zu0());
    m1.registerLanguage("perl", qu0());
    m1.registerLanguage("mojolicious", Lu0());
    m1.registerLanguage("monkey", Ou0());
    m1.registerLanguage("moonscript", Tu0());
    m1.registerLanguage("n1ql", ju0());
    m1.registerLanguage("nginx", _u0());
    m1.registerLanguage("nim", yu0());
    m1.registerLanguage("nix", vu0());
    m1.registerLanguage("node-repl", fu0());
    m1.registerLanguage("nsis", gu0());
    m1.registerLanguage("objectivec", mu0());
    m1.registerLanguage("ocaml", cu0());
    m1.registerLanguage("openscad", lu0());
    m1.registerLanguage("oxygene", nu0());
    m1.registerLanguage("parser3", su0());
    m1.registerLanguage("pf", ou0());
    m1.registerLanguage("pgsql", eu0());
    m1.registerLanguage("php", Qm0());
    m1.registerLanguage("php-template", Gm0());
    m1.registerLanguage("plaintext", Im0());
    m1.registerLanguage("pony", Jm0());
    m1.registerLanguage("powershell", Xm0());
    m1.registerLanguage("processing", Vm0());
    m1.registerLanguage("profile", Dm0());
    m1.registerLanguage("prolog", Cm0());
    m1.registerLanguage("properties", zm0());
    m1.registerLanguage("protobuf", $m0());
    m1.registerLanguage("puppet", qm0());
    m1.registerLanguage("purebasic", Lm0());
    m1.registerLanguage("python", Om0());
    m1.registerLanguage("python-repl", Tm0());
    m1.registerLanguage("q", jm0());
    m1.registerLanguage("qml", _m0());
    m1.registerLanguage("r", ym0());
    m1.registerLanguage("reasonml", vm0());
    m1.registerLanguage("rib", fm0());
    m1.registerLanguage("roboconf", gm0());
    m1.registerLanguage("routeros", mm0());
    m1.registerLanguage("rsl", cm0());
    m1.registerLanguage("ruleslanguage", lm0());
    m1.registerLanguage("rust", nm0());
    m1.registerLanguage("sas", sm0());
    m1.registerLanguage("scala", om0());
    m1.registerLanguage("scheme", em0());
    m1.registerLanguage("scilab", Qd0());
    m1.registerLanguage("scss", Gd0());
    m1.registerLanguage("shell", Id0());
    m1.registerLanguage("smali", Jd0());
    m1.registerLanguage("smalltalk", Xd0());
    m1.registerLanguage("sml", Vd0());
    m1.registerLanguage("sqf", Dd0());
    m1.registerLanguage("sql_more", Cd0());
    m1.registerLanguage("sql", Ud0());
    m1.registerLanguage("stan", wd0());
    m1.registerLanguage("stata", Nd0());
    m1.registerLanguage("step21", Md0());
    m1.registerLanguage("stylus", Rd0());
    m1.registerLanguage("subunit", Pd0());
    m1.registerLanguage("swift", fd0());
    m1.registerLanguage("taggerscript", gd0());
    m1.registerLanguage("yaml", md0());
    m1.registerLanguage("tap", cd0());
    m1.registerLanguage("tcl", id0());
    m1.registerLanguage("thrift", ad0());
    m1.registerLanguage("tp", rd0());
    m1.registerLanguage("twig", td0());
    m1.registerLanguage("typescript", Zc0());
    m1.registerLanguage("vala", Yc0());
    m1.registerLanguage("vbnet", Xc0());
    m1.registerLanguage("vbscript", Kc0());
    m1.registerLanguage("vbscript-html", Hc0());
    m1.registerLanguage("verilog", Ec0());
    m1.registerLanguage("vhdl", Uc0());
    m1.registerLanguage("vim", wc0());
    m1.registerLanguage("x86asm", Nc0());
    m1.registerLanguage("xl", Mc0());
    m1.registerLanguage("xquery", Rc0());
    m1.registerLanguage("zephir", Pc0());
    jc0.exports = m1
});
class Sc0 {
    cache = new Map;
    maxCacheSize = 1000;
    readFile(A) {
        let Q = OA(),
            B;
        try {
            B = Q.statSync(A)
        } catch (J) {
            throw this.cache.delete(A), J
        }
        let G = A,
            Z = this.cache.get(G);
        if (Z && Z.mtime === B.mtimeMs) return {
            content: Z.content,
            encoding: Z.encoding
        };
        let I = VH(A),
            Y = Q.readFileSync(A, {
                encoding: I
            }).replaceAll(`\r
`, `
`);
        if (this.cache.set(G, {
                content: Y,
                encoding: I,
                mtime: B.mtimeMs
            }), this.cache.size > this.maxCacheSize) {
            let J = this.cache.keys().next().value;
            if (J) this.cache.delete(J)
        }
        return {
            content: Y,
            encoding: I
        }
    }
    clear() {
        this.cache.clear()
    }
    invalidate(A) {
        this.cache.delete(A)
    }
    getStats() {
        return {
            size: this.cache.size,
            entries: Array.from(this.cache.keys())
        }
    }
}
var _c0;
var kc0 = L(() => {
    o0();
    M9();
    _c0 = new Sc0
});
var xc0 = U((G67, yc0) => {
    yc0.exports = function(Q) {
        return Q.map(function(B) {
            if (B === "") return "''";
            if (B && typeof B === "object") return B.op.replace(/(.)/g, "\\$1");
            if (/["\s\\]/.test(B) && !/'/.test(B)) return "'" + B.replace(/(['])/g, "\\$1") + "'";
            if (/["'\s]/.test(B)) return '"' + B.replace(/(["\\$`!])/g, "\\$1") + '"';
            return String(B).replace(/([A-Za-z]:)?([#!"$&'()*,:;<=>?@[\\\]^`{|}])/g, "$1\\$2")
        }).join(" ")
    }
});
var mc0 = U((Z67, uc0) => {
    var gc0 = "(?:" + ["\\|\\|", "\\&\\&", ";;", "\\|\\&", "\\<\\(", "\\<\\<\\<", ">>", ">\\&", "<\\&", "[&;()|<>]"].join("|") + ")",
        vc0 = new RegExp("^" + gc0 + "$"),
        bc0 = "|&;()<> \\t",
        S84 = '"((\\\\"|[^"])*?)"',
        _84 = "'((\\\\'|[^'])*?)'",
        k84 = /^#$/,
        fc0 = "'",
        hc0 = '"',
        eH1 = "$",
        is = "",
        y84 = 4294967296;
    for (vxA = 0; vxA < 4; vxA++) is += (y84 * Math.random()).toString(16);
    var vxA, x84 = new RegExp("^" + is);

    function v84(A, Q) {
        var B = Q.lastIndex,
            G = [],
            Z;
        while (Z = Q.exec(A))
            if (G.push(Z), Q.lastIndex === Z.index) Q.lastIndex += 1;
        return Q.lastIndex = B, G
    }

    function b84(A, Q, B) {
        var G = typeof A === "function" ? A(B) : A[B];
        if (typeof G > "u" && B != "") G = "";
        else if (typeof G > "u") G = "$";
        if (typeof G === "object") return Q + is + JSON.stringify(G) + is;
        return Q + G
    }

    function f84(A, Q, B) {
        if (!B) B = {};
        var G = B.escape || "\\",
            Z = "(\\" + G + `['"` + bc0 + `]|[^\\s'"` + bc0 + "])+",
            I = new RegExp(["(" + gc0 + ")", "(" + Z + "|" + S84 + "|" + _84 + ")+"].join("|"), "g"),
            Y = v84(A, I);
        if (Y.length === 0) return [];
        if (!Q) Q = {};
        var J = !1;
        return Y.map(function(W) {
            var X = W[0];
            if (!X || J) return;
            if (vc0.test(X)) return {
                op: X
            };
            var F = !1,
                V = !1,
                K = "",
                D = !1,
                H;

            function C() {
                H += 1;
                var w, N, q = X.charAt(H);
                if (q === "{") {
                    if (H += 1, X.charAt(H) === "}") throw Error("Bad substitution: " + X.slice(H - 2, H + 1));
                    if (w = X.indexOf("}", H), w < 0) throw Error("Bad substitution: " + X.slice(H));
                    N = X.slice(H, w), H = w
                } else if (/[*@#?$!_-]/.test(q)) N = q, H += 1;
                else {
                    var R = X.slice(H);
                    if (w = R.match(/[^\w\d_]/), !w) N = R, H = X.length;
                    else N = R.slice(0, w.index), H += w.index - 1
                }
                return b84(Q, "", N)
            }
            for (H = 0; H < X.length; H++) {
                var E = X.charAt(H);
                if (D = D || !F && (E === "*" || E === "?"), V) K += E, V = !1;
                else if (F)
                    if (E === F) F = !1;
                    else if (F == fc0) K += E;
                else if (E === G)
                    if (H += 1, E = X.charAt(H), E === hc0 || E === G || E === eH1) K += E;
                    else K += G + E;
                else if (E === eH1) K += C();
                else K += E;
                else if (E === hc0 || E === fc0) F = E;
                else if (vc0.test(E)) return {
                    op: X
                };
                else if (k84.test(E)) {
                    J = !0;
                    var z = {
                        comment: A.slice(W.index + H + 1)
                    };
                    if (K.length) return [K, z];
                    return [z]
                } else if (E === G) V = !0;
                else if (E === eH1) K += C();
                else K += E
            }
            if (D) return {
                op: "glob",
                pattern: K
            };
            return K
        }).reduce(function(W, X) {
            return typeof X > "u" ? W : W.concat(X)
        }, [])
    }
    uc0.exports = function(Q, B, G) {
        var Z = f84(Q, B, G);
        if (typeof B !== "function") return Z;
        return Z.reduce(function(I, Y) {
            if (typeof Y === "object") return I.concat(Y);
            var J = Y.split(RegExp("(" + is + ".*?" + is + ")", "g"));
            if (J.length === 1) return I.concat(J[0]);
            return I.concat(J.filter(Boolean).map(function(W) {
                if (x84.test(W)) return JSON.parse(W.split(is)[1]);
                return W
            }))
        }, [])
    }
});
var bxA = U((h84) => {
    h84.quote = xc0();
    h84.parse = mc0()
});

/* IW */
/* tokenize() - Tokenize bash command */
function IW(A, Q) {
    try {
        return {
            success: !0,
            tokens: typeof Q === "function" ? q9A.parse(A, Q) : q9A.parse(A, Q)
        }
    } catch (B) {
        if (B instanceof Error) e(B);
        return {
            success: !1,
            error: B instanceof Error ? B.message : "Unknown parse error"
        }
    }
}

function m84(A) {
    try {
        let Q = A.map((G, Z) => {
            if (G === null || G === void 0) return String(G);
            let I = typeof G;
            if (I === "string") return G;
            if (I === "number" || I === "boolean") return String(G);
            if (I === "object") throw Error(`Cannot quote argument at index ${Z}: object values are not supported`);
            if (I === "symbol") throw Error(`Cannot quote argument at index ${Z}: symbol values are not supported`);
            if (I === "function") throw Error(`Cannot quote argument at index ${Z}: function values are not supported`);
            throw Error(`Cannot quote argument at index ${Z}: unsupported type ${I}`)
        });
        return {
            success: !0,
            quoted: q9A.quote(Q)
        }
    } catch (Q) {
        if (Q instanceof Error) e(Q);
        return {
            success: !1,
            error: Q instanceof Error ? Q.message : "Unknown quote error"
        }
    }
}

/* M8 */
/* shellEscape() - Shell escape utility */
function M8(A) {
    let Q = m84([...A]);
    if (Q.success) return Q.quoted;
    try {
        let B = A.map((G) => {
            if (G === null || G === void 0) return String(G);
            let Z = typeof G;
            if (Z === "string" || Z === "number" || Z === "boolean") return String(G);
            return JSON.stringify(G)
        });
        return q9A.quote(B)
    } catch (B) {
        if (B instanceof Error) e(B);
        throw Error("Failed to quote shell arguments safely")
    }
}
var q9A;
var KH = L(() => {
    u1();
    q9A = GA(bxA(), 1)
});
import {
    execSync as fxA
} from "node:child_process";
import * as dc0 from "node:path/win32";
import * as N9A from "node:path";

function AC1(A) {
    try {
        return fxA(`dir "${A}"`, {
            stdio: "pipe"
        }), !0
    } catch {
        return !1
    }
}

function d84(A) {
    if (A === "git") {
        let Q = ["C:\\Program Files\\Git\\cmd\\git.exe", "C:\\Program Files (x86)\\Git\\cmd\\git.exe"];
        for (let B of Q)
            if (AC1(B)) return B
    }
    try {
        let B = fxA(`where.exe ${A}`, {
                stdio: "pipe",
                encoding: "utf8"
            }).trim().split(`\r
`).filter(Boolean),
            G = H0().toLowerCase();
        for (let Z of B) {
            let I = N9A.resolve(Z).toLowerCase();
            if (N9A.dirname(I).toLowerCase() === G || I.startsWith(G + N9A.sep)) {
                g(`Skipping potentially malicious executable in current directory: ${Z}`);
                continue
            }
            return Z
        }
        return null
    } catch {
        return null
    }
}
var cc0 = () => {
        if (uQ() === "windows") {
            let A = QC1();
            process.env.SHELL = A, g(`Using bash path: "${A}"`)
        }
    },
    QC1, pj = (A) => {
        let Q = M8([A]);
        return fxA(`cygpath -u ${Q}`, {
            shell: QC1()
        }).toString().trim()
    },
    pc0 = (A) => {
        let Q = M8([A]);
        return fxA(`cygpath -w ${Q}`, {
            shell: QC1()
        }).toString().trim()
    };
var L9A = L(() => {
    o2();
    KH();
    s5();
    D0();
    R2();
    QC1 = t1(() => {
        if (process.env.CLAUDE_CODE_GIT_BASH_PATH) {
            if (AC1(process.env.CLAUDE_CODE_GIT_BASH_PATH)) return process.env.CLAUDE_CODE_GIT_BASH_PATH;
            console.error(`Claude Code was unable to find CLAUDE_CODE_GIT_BASH_PATH path "${process.env.CLAUDE_CODE_GIT_BASH_PATH}"`), process.exit(1)
        }
        let A = d84("git");
        if (A) {
            let Q = dc0.join(A, "..", "..", "bin", "bash.exe");
            if (AC1(Q)) return Q
        }
        console.error("Claude Code on Windows requires git-bash (https://git-scm.com/downloads/win). If installed but not in PATH, set environment variable pointing to your bash.exe, similar to: CLAUDE_CODE_GIT_BASH_PATH=C:\\Program Files\\Git\\bin\\bash.exe"), process.exit(1)
    })
});
import {
    homedir as lc0
} from "os";
import {
    isAbsolute as c84,
    join as p84,
    resolve as l84,
    normalize as ic0,
    dirname as i84
} from "path";

function b9(A, Q) {
    let B = Q ?? H0() ?? OA().cwd();
    if (typeof A !== "string") throw TypeError(`Path must be a string, received ${typeof A}`);
    if (typeof B !== "string") throw TypeError(`Base directory must be a string, received ${typeof B}`);
    if (A.includes("\x00") || B.includes("\x00")) throw Error("Path contains null bytes");
    let G = A.trim();
    if (!G) return ic0(B);
    if (G === "~") return lc0();
    if (G.startsWith("~/")) return p84(lc0(), G.slice(2));
    let Z = G;
    if (uQ() === "windows" && G.match(/^\/[a-z]\//i)) try {
        Z = pc0(G)
    } catch {
        Z = G
    }
    if (c84(Z)) return ic0(Z);
    return l84(B, Z)
}

function Qv(A) {
    let Q = b9(A);
    try {
        if (OA().statSync(Q).isDirectory()) return Q
    } catch {}
    return i84(Q)
}

function M9A(A) {
    return /(?:^|[\\/])\.\.(?:[\\/]|$)/.test(A)
}
var jI = L(() => {
    R2();
    o0();
    s5();
    L9A()
});

function n84(A) {
    var Q = A == null ? 0 : A.length;
    return Q ? A[Q - 1] : void 0
}
var dC;
var O9A = L(() => {
    dC = n84
});
import nc0 from "node:process";

function BC1() {
    let {
        env: A
    } = nc0, {
        TERM: Q,
        TERM_PROGRAM: B
    } = A;
    if (nc0.platform !== "win32") return Q !== "linux";
    return Boolean(A.WT_SESSION) || Boolean(A.TERMINUS_SUBLIME) || A.ConEmuTask === "{cmd::Cmder}" || B === "Terminus-Sublime" || B === "vscode" || Q === "xterm-256color" || Q === "alacritty" || Q === "rxvt-unicode" || Q === "rxvt-unicode-256color" || A.TERMINAL_EMULATOR === "JetBrains-JediTerm"
}
var ac0 = () => {};
var sc0, rc0, a84, s84, r84, o84, t84, V1, R67;
var n2 = L(() => {
    ac0();
    sc0 = {
        circleQuestionMark: "(?)",
        questionMarkPrefix: "(?)",
        square: "█",
        squareDarkShade: "▓",
        squareMediumShade: "▒",
        squareLightShade: "░",
        squareTop: "▀",
        squareBottom: "▄",
        squareLeft: "▌",
        squareRight: "▐",
        squareCenter: "■",
        bullet: "●",
        dot: "․",
        ellipsis: "…",
        pointerSmall: "›",
        triangleUp: "▲",
        triangleUpSmall: "▴",
        triangleDown: "▼",
        triangleDownSmall: "▾",
        triangleLeftSmall: "◂",
        triangleRightSmall: "▸",
        home: "⌂",
        heart: "♥",
        musicNote: "♪",
        musicNoteBeamed: "♫",
        arrowUp: "↑",
        arrowDown: "↓",
        arrowLeft: "←",
        arrowRight: "→",
        arrowLeftRight: "↔",
        arrowUpDown: "↕",
        almostEqual: "≈",
        notEqual: "≠",
        lessOrEqual: "≤",
        greaterOrEqual: "≥",
        identical: "≡",
        infinity: "∞",
        subscriptZero: "₀",
        subscriptOne: "₁",
        subscriptTwo: "₂",
        subscriptThree: "₃",
        subscriptFour: "₄",
        subscriptFive: "₅",
        subscriptSix: "₆",
        subscriptSeven: "₇",
        subscriptEight: "₈",
        subscriptNine: "₉",
        oneHalf: "½",
        oneThird: "⅓",
        oneQuarter: "¼",
        oneFifth: "⅕",
        oneSixth: "⅙",
        oneEighth: "⅛",
        twoThirds: "⅔",
        twoFifths: "⅖",
        threeQuarters: "¾",
        threeFifths: "⅗",
        threeEighths: "⅜",
        fourFifths: "⅘",
        fiveSixths: "⅚",
        fiveEighths: "⅝",
        sevenEighths: "⅞",
        line: "─",
        lineBold: "━",
        lineDouble: "═",
        lineDashed0: "┄",
        lineDashed1: "┅",
        lineDashed2: "┈",
        lineDashed3: "┉",
        lineDashed4: "╌",
        lineDashed5: "╍",
        lineDashed6: "╴",
        lineDashed7: "╶",
        lineDashed8: "╸",
        lineDashed9: "╺",
        lineDashed10: "╼",
        lineDashed11: "╾",
        lineDashed12: "−",
        lineDashed13: "–",
        lineDashed14: "‐",
        lineDashed15: "⁃",
        lineVertical: "│",
        lineVerticalBold: "┃",
        lineVerticalDouble: "║",
        lineVerticalDashed0: "┆",
        lineVerticalDashed1: "┇",
        lineVerticalDashed2: "┊",
        lineVerticalDashed3: "┋",
        lineVerticalDashed4: "╎",
        lineVerticalDashed5: "╏",
        lineVerticalDashed6: "╵",
        lineVerticalDashed7: "╷",
        lineVerticalDashed8: "╹",
        lineVerticalDashed9: "╻",
        lineVerticalDashed10: "╽",
        lineVerticalDashed11: "╿",
        lineDownLeft: "┐",
        lineDownLeftArc: "╮",
        lineDownBoldLeftBold: "┓",
        lineDownBoldLeft: "┒",
        lineDownLeftBold: "┑",
        lineDownDoubleLeftDouble: "╗",
        lineDownDoubleLeft: "╖",
        lineDownLeftDouble: "╕",
        lineDownRight: "┌",
        lineDownRightArc: "╭",
        lineDownBoldRightBold: "┏",
        lineDownBoldRight: "┎",
        lineDownRightBold: "┍",
        lineDownDoubleRightDouble: "╔",
        lineDownDoubleRight: "╓",
        lineDownRightDouble: "╒",
        lineUpLeft: "┘",
        lineUpLeftArc: "╯",
        lineUpBoldLeftBold: "┛",
        lineUpBoldLeft: "┚",
        lineUpLeftBold: "┙",
        lineUpDoubleLeftDouble: "╝",
        lineUpDoubleLeft: "╜",
        lineUpLeftDouble: "╛",
        lineUpRight: "└",
        lineUpRightArc: "╰",
        lineUpBoldRightBold: "┗",
        lineUpBoldRight: "┖",
        lineUpRightBold: "┕",
        lineUpDoubleRightDouble: "╚",
        lineUpDoubleRight: "╙",
        lineUpRightDouble: "╘",
        lineUpDownLeft: "┤",
        lineUpBoldDownBoldLeftBold: "┫",
        lineUpBoldDownBoldLeft: "┨",
        lineUpDownLeftBold: "┥",
        lineUpBoldDownLeftBold: "┩",
        lineUpDownBoldLeftBold: "┪",
        lineUpDownBoldLeft: "┧",
        lineUpBoldDownLeft: "┦",
        lineUpDoubleDownDoubleLeftDouble: "╣",
        lineUpDoubleDownDoubleLeft: "╢",
        lineUpDownLeftDouble: "╡",
        lineUpDownRight: "├",
        lineUpBoldDownBoldRightBold: "┣",
        lineUpBoldDownBoldRight: "┠",
        lineUpDownRightBold: "┝",
        lineUpBoldDownRightBold: "┡",
        lineUpDownBoldRightBold: "┢",
        lineUpDownBoldRight: "┟",
        lineUpBoldDownRight: "┞",
        lineUpDoubleDownDoubleRightDouble: "╠",
        lineUpDoubleDownDoubleRight: "╟",
        lineUpDownRightDouble: "╞",
        lineDownLeftRight: "┬",
        lineDownBoldLeftBoldRightBold: "┳",
        lineDownLeftBoldRightBold: "┯",
        lineDownBoldLeftRight: "┰",
        lineDownBoldLeftBoldRight: "┱",
        lineDownBoldLeftRightBold: "┲",
        lineDownLeftRightBold: "┮",
        lineDownLeftBoldRight: "┭",
        lineDownDoubleLeftDoubleRightDouble: "╦",
        lineDownDoubleLeftRight: "╥",
        lineDownLeftDoubleRightDouble: "╤",
        lineUpLeftRight: "┴",
        lineUpBoldLeftBoldRightBold: "┻",
        lineUpLeftBoldRightBold: "┷",
        lineUpBoldLeftRight: "┸",
        lineUpBoldLeftBoldRight: "┹",
        lineUpBoldLeftRightBold: "┺",
        lineUpLeftRightBold: "┶",
        lineUpLeftBoldRight: "┵",
        lineUpDoubleLeftDoubleRightDouble: "╩",
        lineUpDoubleLeftRight: "╨",
        lineUpLeftDoubleRightDouble: "╧",
        lineUpDownLeftRight: "┼",
        lineUpBoldDownBoldLeftBoldRightBold: "╋",
        lineUpDownBoldLeftBoldRightBold: "╈",
        lineUpBoldDownLeftBoldRightBold: "╇",
        lineUpBoldDownBoldLeftRightBold: "╊",
        lineUpBoldDownBoldLeftBoldRight: "╉",
        lineUpBoldDownLeftRight: "╀",
        lineUpDownBoldLeftRight: "╁",
        lineUpDownLeftBoldRight: "┽",
        lineUpDownLeftRightBold: "┾",
        lineUpBoldDownBoldLeftRight: "╂",
        lineUpDownLeftBoldRightBold: "┿",
        lineUpBoldDownLeftBoldRight: "╃",
        lineUpBoldDownLeftRightBold: "╄",
        lineUpDownBoldLeftBoldRight: "╅",
        lineUpDownBoldLeftRightBold: "╆",
        lineUpDoubleDownDoubleLeftDoubleRightDouble: "╬",
        lineUpDoubleDownDoubleLeftRight: "╫",
        lineUpDownLeftDoubleRightDouble: "╪",
        lineCross: "╳",
        lineBackslash: "╲",
        lineSlash: "╱"
    }, rc0 = {
        tick: "✔",
        info: "ℹ",
        warning: "⚠",
        cross: "✘",
        squareSmall: "◻",
        squareSmallFilled: "◼",
        circle: "◯",
        circleFilled: "◉",
        circleDotted: "◌",
        circleDouble: "◎",
        circleCircle: "ⓞ",
        circleCross: "ⓧ",
        circlePipe: "Ⓘ",
        radioOn: "◉",
        radioOff: "◯",
        checkboxOn: "☒",
        checkboxOff: "☐",
        checkboxCircleOn: "ⓧ",
        checkboxCircleOff: "Ⓘ",
        pointer: "❯",
        triangleUpOutline: "△",
        triangleLeft: "◀",
        triangleRight: "▶",
        lozenge: "◆",
        lozengeOutline: "◇",
        hamburger: "☰",
        smiley: "㋡",
        mustache: "෴",
        star: "★",
        play: "▶",
        nodejs: "⬢",
        oneSeventh: "⅐",
        oneNinth: "⅑",
        oneTenth: "⅒"
    }, a84 = {
        tick: "√",
        info: "i",
        warning: "‼",
        cross: "×",
        squareSmall: "□",
        squareSmallFilled: "■",
        circle: "( )",
        circleFilled: "(*)",
        circleDotted: "( )",
        circleDouble: "( )",
        circleCircle: "(○)",
        circleCross: "(×)",
        circlePipe: "(│)",
        radioOn: "(*)",
        radioOff: "( )",
        checkboxOn: "[×]",
        checkboxOff: "[ ]",
        checkboxCircleOn: "(×)",
        checkboxCircleOff: "( )",
        pointer: ">",
        triangleUpOutline: "∆",
        triangleLeft: "◄",
        triangleRight: "►",
        lozenge: "♦",
        lozengeOutline: "◊",
        hamburger: "≡",
        smiley: "☺",
        mustache: "┌─┐",
        star: "✶",
        play: "►",
        nodejs: "♦",
        oneSeventh: "1/7",
        oneNinth: "1/9",
        oneTenth: "1/10"
    }, s84 = {
        ...sc0,
        ...rc0
    }, r84 = {
        ...sc0,
        ...a84
    }, o84 = BC1(), t84 = o84 ? s84 : r84, V1 = t84, R67 = Object.entries(rc0)
});
var e84, R9A;
var GC1 = L(() => {
    ju();
    e84 = function() {
        try {
            var A = xz(Object, "defineProperty");
            return A({}, "", {}), A
        } catch (Q) {}
    }(), R9A = e84
});

function A64(A, Q, B) {
    if (Q == "__proto__" && R9A) R9A(A, Q, {
        configurable: !0,
        enumerable: !0,
        value: B,
        writable: !0
    });
    else A[Q] = B
}
var Um;
var KKA = L(() => {
    GC1();
    Um = A64
});

function Q64(A, Q, B) {
    if (B !== void 0 && !wj(A[Q], B) || B === void 0 && !(Q in A)) Um(A, Q, B)
}
var DKA;
var ZC1 = L(() => {
    KKA();
    NBA();
    DKA = Q64
});

function B64(A) {
    return function(Q, B, G) {
        var Z = -1,
            I = Object(Q),
            Y = G(Q),
            J = Y.length;
        while (J--) {
            var W = Y[A ? J : ++Z];
            if (B(I[W], W, I) === !1) break
        }
        return Q
    }
}
var oc0;
var tc0 = L(() => {
    oc0 = B64
});
var G64, hxA;
var IC1 = L(() => {
    tc0();
    G64 = oc0(), hxA = G64
});
var uxA = {};
pG(uxA, {
    default: () => HKA
});

function I64(A, Q) {
    if (Q) return A.slice();
    var B = A.length,
        G = Qp0 ? Qp0(B) : new A.constructor(B);
    return A.copy(G), G
}
var Bp0, ec0, Z64, Ap0, Qp0, HKA;
var YC1 = L(() => {
    WR();
    Bp0 = typeof uxA == "object" && uxA && !uxA.nodeType && uxA, ec0 = Bp0 && typeof gxA == "object" && gxA && !gxA.nodeType && gxA, Z64 = ec0 && ec0.exports === Bp0, Ap0 = Z64 ? HX.Buffer : void 0, Qp0 = Ap0 ? Ap0.allocUnsafe : void 0;
    HKA = I64
});

function Y64(A) {
    var Q = new A.constructor(A.byteLength);
    return new TBA(Q).set(new TBA(A)), Q
}
var T9A;
var mxA = L(() => {
    _W1();
    T9A = Y64
});

function J64(A, Q) {
    var B = Q ? T9A(A.buffer) : A.buffer;
    return new A.constructor(B, A.byteOffset, A.length)
}
var dxA;
var JC1 = L(() => {
    mxA();
    dxA = J64
});

function W64(A, Q) {
    var B = -1,
        G = A.length;
    Q || (Q = Array(G));
    while (++B < G) Q[B] = A[B];
    return Q
}
var cxA;
var WC1 = L(() => {
    cxA = W64
});
var Gp0, X64, Zp0;
var Ip0 = L(() => {
    jN();
    Gp0 = Object.create, X64 = function() {
        function A() {}
        return function(Q) {
            if (!TY(Q)) return {};
            if (Gp0) return Gp0(Q);
            A.prototype = Q;
            var B = new A;
            return A.prototype = void 0, B
        }
    }(), Zp0 = X64
});
var F64, P9A;
var pxA = L(() => {
    gW1();
    F64 = x_A(Object.getPrototypeOf, Object), P9A = F64
});

function V64(A) {
    return typeof A.constructor == "function" && !xBA(A) ? Zp0(P9A(A)) : {}
}
var lxA;
var XC1 = L(() => {
    Ip0();
    pxA();
    y_A();
    lxA = V64
});

function K64(A) {
    return zF(A) && Tj(A)
}
var Yp0;
var Jp0 = L(() => {
    vBA();
    Mj();
    Yp0 = K64
});

function U64(A) {
    if (!zF(A) || i$(A) != D64) return !1;
    var Q = P9A(A);
    if (Q === null) return !0;
    var B = E64.call(Q, "constructor") && Q.constructor;
    return typeof B == "function" && B instanceof B && Wp0.call(B) == z64
}
var D64 = "[object Object]",
    H64, C64, Wp0, E64, z64, j9A;
var ixA = L(() => {
    Vs();
    pxA();
    Mj();
    H64 = Function.prototype, C64 = Object.prototype, Wp0 = H64.toString, E64 = C64.hasOwnProperty, z64 = Wp0.call(Object);
    j9A = U64
});

function $64(A, Q) {
    if (Q === "constructor" && typeof A[Q] === "function") return;
    if (Q == "__proto__") return;
    return A[Q]
}
var CKA;
var FC1 = L(() => {
    CKA = $64
});

function N64(A, Q, B) {
    var G = A[Q];
    if (!(q64.call(A, Q) && wj(G, B)) || B === void 0 && !(Q in A)) Um(A, Q, B)
}
var w64, q64, $m;
var EKA = L(() => {
    KKA();
    NBA();
    w64 = Object.prototype, q64 = w64.hasOwnProperty;
    $m = N64
});

function L64(A, Q, B, G) {
    var Z = !B;
    B || (B = {});
    var I = -1,
        Y = Q.length;
    while (++I < Y) {
        var J = Q[I],
            W = G ? G(B[J], A[J], J, B, A) : void 0;
        if (W === void 0) W = A[J];
        if (Z) Um(B, J, W);
        else $m(B, J, W)
    }
    return B
}
var hN;
var ns = L(() => {
    EKA();
    KKA();
    hN = L64
});

function M64(A) {
    var Q = [];
    if (A != null)
        for (var B in Object(A)) Q.push(B);
    return Q
}
var Xp0;
var Fp0 = L(() => {
    Xp0 = M64
});

function T64(A) {
    if (!TY(A)) return Xp0(A);
    var Q = xBA(A),
        B = [];
    for (var G in A)
        if (!(G == "constructor" && (Q || !R64.call(A, G)))) B.push(G);