/**
 * Claude Code Decompiled
 * Category: ui
 * File: 36/53
 * Lines: 285486 - 286985 (1500 lines)
 * Original file: cli.js
 */

var L72 = U((zjG, N72) => {
    var j1 = oLA(),
        NY5 = N32(),
        I72 = M32(),
        LY5 = f32(),
        MY5 = s32(),
        Y72 = jk(),
        OY5 = z10(),
        RY5 = U10(),
        J72 = $10(),
        Sk = Z72(),
        SD = eB1(),
        TY5 = tB1(),
        X1A = Ji(),
        FA = X1A.TAG_NAMES,
        U2 = X1A.NAMESPACES,
        z72 = X1A.ATTRS,
        PY5 = {
            scriptingEnabled: !0,
            sourceCodeLocationInfo: !1,
            onParseError: null,
            treeAdapter: OY5
        },
        jY5 = {
            [FA.TR]: "IN_ROW_MODE",
            [FA.TBODY]: "IN_TABLE_BODY_MODE",
            [FA.THEAD]: "IN_TABLE_BODY_MODE",
            [FA.TFOOT]: "IN_TABLE_BODY_MODE",
            [FA.CAPTION]: "IN_CAPTION_MODE",
            [FA.COLGROUP]: "IN_COLUMN_GROUP_MODE",
            [FA.TABLE]: "IN_TABLE_MODE",
            [FA.BODY]: "IN_BODY_MODE",
            [FA.FRAMESET]: "IN_FRAMESET_MODE"
        },
        SY5 = {
            [FA.CAPTION]: "IN_TABLE_MODE",
            [FA.COLGROUP]: "IN_TABLE_MODE",
            [FA.TBODY]: "IN_TABLE_MODE",
            [FA.TFOOT]: "IN_TABLE_MODE",
            [FA.THEAD]: "IN_TABLE_MODE",
            [FA.COL]: "IN_COLUMN_GROUP_MODE",
            [FA.TR]: "IN_TABLE_BODY_MODE",
            [FA.TD]: "IN_ROW_MODE",
            [FA.TH]: "IN_ROW_MODE"
        },
        W72 = {
            ["INITIAL_MODE"]: {
                [j1.CHARACTER_TOKEN]: eLA,
                [j1.NULL_CHARACTER_TOKEN]: eLA,
                [j1.WHITESPACE_CHARACTER_TOKEN]: j5,
                [j1.COMMENT_TOKEN]: kF,
                [j1.DOCTYPE_TOKEN]: hY5,
                [j1.START_TAG_TOKEN]: eLA,
                [j1.END_TAG_TOKEN]: eLA,
                [j1.EOF_TOKEN]: eLA
            },
            ["BEFORE_HTML_MODE"]: {
                [j1.CHARACTER_TOKEN]: QMA,
                [j1.NULL_CHARACTER_TOKEN]: QMA,
                [j1.WHITESPACE_CHARACTER_TOKEN]: j5,
                [j1.COMMENT_TOKEN]: kF,
                [j1.DOCTYPE_TOKEN]: j5,
                [j1.START_TAG_TOKEN]: gY5,
                [j1.END_TAG_TOKEN]: uY5,
                [j1.EOF_TOKEN]: QMA
            },
            ["BEFORE_HEAD_MODE"]: {
                [j1.CHARACTER_TOKEN]: BMA,
                [j1.NULL_CHARACTER_TOKEN]: BMA,
                [j1.WHITESPACE_CHARACTER_TOKEN]: j5,
                [j1.COMMENT_TOKEN]: kF,
                [j1.DOCTYPE_TOKEN]: Z21,
                [j1.START_TAG_TOKEN]: mY5,
                [j1.END_TAG_TOKEN]: dY5,
                [j1.EOF_TOKEN]: BMA
            },
            ["IN_HEAD_MODE"]: {
                [j1.CHARACTER_TOKEN]: GMA,
                [j1.NULL_CHARACTER_TOKEN]: GMA,
                [j1.WHITESPACE_CHARACTER_TOKEN]: pU,
                [j1.COMMENT_TOKEN]: kF,
                [j1.DOCTYPE_TOKEN]: Z21,
                [j1.START_TAG_TOKEN]: rV,
                [j1.END_TAG_TOKEN]: F1A,
                [j1.EOF_TOKEN]: GMA
            },
            ["IN_HEAD_NO_SCRIPT_MODE"]: {
                [j1.CHARACTER_TOKEN]: ZMA,
                [j1.NULL_CHARACTER_TOKEN]: ZMA,
                [j1.WHITESPACE_CHARACTER_TOKEN]: pU,
                [j1.COMMENT_TOKEN]: kF,
                [j1.DOCTYPE_TOKEN]: Z21,
                [j1.START_TAG_TOKEN]: cY5,
                [j1.END_TAG_TOKEN]: pY5,
                [j1.EOF_TOKEN]: ZMA
            },
            ["AFTER_HEAD_MODE"]: {
                [j1.CHARACTER_TOKEN]: IMA,
                [j1.NULL_CHARACTER_TOKEN]: IMA,
                [j1.WHITESPACE_CHARACTER_TOKEN]: pU,
                [j1.COMMENT_TOKEN]: kF,
                [j1.DOCTYPE_TOKEN]: Z21,
                [j1.START_TAG_TOKEN]: lY5,
                [j1.END_TAG_TOKEN]: iY5,
                [j1.EOF_TOKEN]: IMA
            },
            ["IN_BODY_MODE"]: {
                [j1.CHARACTER_TOKEN]: I21,
                [j1.NULL_CHARACTER_TOKEN]: j5,
                [j1.WHITESPACE_CHARACTER_TOKEN]: W1A,
                [j1.COMMENT_TOKEN]: kF,
                [j1.DOCTYPE_TOKEN]: j5,
                [j1.START_TAG_TOKEN]: lU,
                [j1.END_TAG_TOKEN]: N10,
                [j1.EOF_TOKEN]: Kh
            },
            ["TEXT_MODE"]: {
                [j1.CHARACTER_TOKEN]: pU,
                [j1.NULL_CHARACTER_TOKEN]: pU,
                [j1.WHITESPACE_CHARACTER_TOKEN]: pU,
                [j1.COMMENT_TOKEN]: j5,
                [j1.DOCTYPE_TOKEN]: j5,
                [j1.START_TAG_TOKEN]: j5,
                [j1.END_TAG_TOKEN]: LJ5,
                [j1.EOF_TOKEN]: MJ5
            },
            ["IN_TABLE_MODE"]: {
                [j1.CHARACTER_TOKEN]: Dh,
                [j1.NULL_CHARACTER_TOKEN]: Dh,
                [j1.WHITESPACE_CHARACTER_TOKEN]: Dh,
                [j1.COMMENT_TOKEN]: kF,
                [j1.DOCTYPE_TOKEN]: j5,
                [j1.START_TAG_TOKEN]: L10,
                [j1.END_TAG_TOKEN]: M10,
                [j1.EOF_TOKEN]: Kh
            },
            ["IN_TABLE_TEXT_MODE"]: {
                [j1.CHARACTER_TOKEN]: xJ5,
                [j1.NULL_CHARACTER_TOKEN]: j5,
                [j1.WHITESPACE_CHARACTER_TOKEN]: yJ5,
                [j1.COMMENT_TOKEN]: AMA,
                [j1.DOCTYPE_TOKEN]: AMA,
                [j1.START_TAG_TOKEN]: AMA,
                [j1.END_TAG_TOKEN]: AMA,
                [j1.EOF_TOKEN]: AMA
            },
            ["IN_CAPTION_MODE"]: {
                [j1.CHARACTER_TOKEN]: I21,
                [j1.NULL_CHARACTER_TOKEN]: j5,
                [j1.WHITESPACE_CHARACTER_TOKEN]: W1A,
                [j1.COMMENT_TOKEN]: kF,
                [j1.DOCTYPE_TOKEN]: j5,
                [j1.START_TAG_TOKEN]: vJ5,
                [j1.END_TAG_TOKEN]: bJ5,
                [j1.EOF_TOKEN]: Kh
            },
            ["IN_COLUMN_GROUP_MODE"]: {
                [j1.CHARACTER_TOKEN]: J21,
                [j1.NULL_CHARACTER_TOKEN]: J21,
                [j1.WHITESPACE_CHARACTER_TOKEN]: pU,
                [j1.COMMENT_TOKEN]: kF,
                [j1.DOCTYPE_TOKEN]: j5,
                [j1.START_TAG_TOKEN]: fJ5,
                [j1.END_TAG_TOKEN]: hJ5,
                [j1.EOF_TOKEN]: Kh
            },
            ["IN_TABLE_BODY_MODE"]: {
                [j1.CHARACTER_TOKEN]: Dh,
                [j1.NULL_CHARACTER_TOKEN]: Dh,
                [j1.WHITESPACE_CHARACTER_TOKEN]: Dh,
                [j1.COMMENT_TOKEN]: kF,
                [j1.DOCTYPE_TOKEN]: j5,
                [j1.START_TAG_TOKEN]: gJ5,
                [j1.END_TAG_TOKEN]: uJ5,
                [j1.EOF_TOKEN]: Kh
            },
            ["IN_ROW_MODE"]: {
                [j1.CHARACTER_TOKEN]: Dh,
                [j1.NULL_CHARACTER_TOKEN]: Dh,
                [j1.WHITESPACE_CHARACTER_TOKEN]: Dh,
                [j1.COMMENT_TOKEN]: kF,
                [j1.DOCTYPE_TOKEN]: j5,
                [j1.START_TAG_TOKEN]: mJ5,
                [j1.END_TAG_TOKEN]: dJ5,
                [j1.EOF_TOKEN]: Kh
            },
            ["IN_CELL_MODE"]: {
                [j1.CHARACTER_TOKEN]: I21,
                [j1.NULL_CHARACTER_TOKEN]: j5,
                [j1.WHITESPACE_CHARACTER_TOKEN]: W1A,
                [j1.COMMENT_TOKEN]: kF,
                [j1.DOCTYPE_TOKEN]: j5,
                [j1.START_TAG_TOKEN]: cJ5,
                [j1.END_TAG_TOKEN]: pJ5,
                [j1.EOF_TOKEN]: Kh
            },
            ["IN_SELECT_MODE"]: {
                [j1.CHARACTER_TOKEN]: pU,
                [j1.NULL_CHARACTER_TOKEN]: j5,
                [j1.WHITESPACE_CHARACTER_TOKEN]: pU,
                [j1.COMMENT_TOKEN]: kF,
                [j1.DOCTYPE_TOKEN]: j5,
                [j1.START_TAG_TOKEN]: $72,
                [j1.END_TAG_TOKEN]: w72,
                [j1.EOF_TOKEN]: Kh
            },
            ["IN_SELECT_IN_TABLE_MODE"]: {
                [j1.CHARACTER_TOKEN]: pU,
                [j1.NULL_CHARACTER_TOKEN]: j5,
                [j1.WHITESPACE_CHARACTER_TOKEN]: pU,
                [j1.COMMENT_TOKEN]: kF,
                [j1.DOCTYPE_TOKEN]: j5,
                [j1.START_TAG_TOKEN]: lJ5,
                [j1.END_TAG_TOKEN]: iJ5,
                [j1.EOF_TOKEN]: Kh
            },
            ["IN_TEMPLATE_MODE"]: {
                [j1.CHARACTER_TOKEN]: I21,
                [j1.NULL_CHARACTER_TOKEN]: j5,
                [j1.WHITESPACE_CHARACTER_TOKEN]: W1A,
                [j1.COMMENT_TOKEN]: kF,
                [j1.DOCTYPE_TOKEN]: j5,
                [j1.START_TAG_TOKEN]: nJ5,
                [j1.END_TAG_TOKEN]: aJ5,
                [j1.EOF_TOKEN]: q72
            },
            ["AFTER_BODY_MODE"]: {
                [j1.CHARACTER_TOKEN]: W21,
                [j1.NULL_CHARACTER_TOKEN]: W21,
                [j1.WHITESPACE_CHARACTER_TOKEN]: W1A,
                [j1.COMMENT_TOKEN]: fY5,
                [j1.DOCTYPE_TOKEN]: j5,
                [j1.START_TAG_TOKEN]: sJ5,
                [j1.END_TAG_TOKEN]: rJ5,
                [j1.EOF_TOKEN]: tLA
            },
            ["IN_FRAMESET_MODE"]: {
                [j1.CHARACTER_TOKEN]: j5,
                [j1.NULL_CHARACTER_TOKEN]: j5,
                [j1.WHITESPACE_CHARACTER_TOKEN]: pU,
                [j1.COMMENT_TOKEN]: kF,
                [j1.DOCTYPE_TOKEN]: j5,
                [j1.START_TAG_TOKEN]: oJ5,
                [j1.END_TAG_TOKEN]: tJ5,
                [j1.EOF_TOKEN]: tLA
            },
            ["AFTER_FRAMESET_MODE"]: {
                [j1.CHARACTER_TOKEN]: j5,
                [j1.NULL_CHARACTER_TOKEN]: j5,
                [j1.WHITESPACE_CHARACTER_TOKEN]: pU,
                [j1.COMMENT_TOKEN]: kF,
                [j1.DOCTYPE_TOKEN]: j5,
                [j1.START_TAG_TOKEN]: eJ5,
                [j1.END_TAG_TOKEN]: AW5,
                [j1.EOF_TOKEN]: tLA
            },
            ["AFTER_AFTER_BODY_MODE"]: {
                [j1.CHARACTER_TOKEN]: Y21,
                [j1.NULL_CHARACTER_TOKEN]: Y21,
                [j1.WHITESPACE_CHARACTER_TOKEN]: W1A,
                [j1.COMMENT_TOKEN]: X72,
                [j1.DOCTYPE_TOKEN]: j5,
                [j1.START_TAG_TOKEN]: QW5,
                [j1.END_TAG_TOKEN]: Y21,
                [j1.EOF_TOKEN]: tLA
            },
            ["AFTER_AFTER_FRAMESET_MODE"]: {
                [j1.CHARACTER_TOKEN]: j5,
                [j1.NULL_CHARACTER_TOKEN]: j5,
                [j1.WHITESPACE_CHARACTER_TOKEN]: W1A,
                [j1.COMMENT_TOKEN]: X72,
                [j1.DOCTYPE_TOKEN]: j5,
                [j1.START_TAG_TOKEN]: BW5,
                [j1.END_TAG_TOKEN]: j5,
                [j1.EOF_TOKEN]: tLA
            }
        };
    class U72 {
        constructor(A) {
            if (this.options = RY5(PY5, A), this.treeAdapter = this.options.treeAdapter, this.pendingScript = null, this.options.sourceCodeLocationInfo) Y72.install(this, LY5);
            if (this.options.onParseError) Y72.install(this, MY5, {
                onParseError: this.options.onParseError
            })
        }
        parse(A) {
            let Q = this.treeAdapter.createDocument();
            return this._bootstrap(Q, null), this.tokenizer.write(A, !0), this._runParsingLoop(null), Q
        }
        parseFragment(A, Q) {
            if (!Q) Q = this.treeAdapter.createElement(FA.TEMPLATE, U2.HTML, []);
            let B = this.treeAdapter.createElement("documentmock", U2.HTML, []);
            if (this._bootstrap(B, Q), this.treeAdapter.getTagName(Q) === FA.TEMPLATE) this._pushTmplInsertionMode("IN_TEMPLATE_MODE");
            this._initTokenizerForFragmentParsing(), this._insertFakeRootElement(), this._resetInsertionMode(), this._findFormInFragmentContext(), this.tokenizer.write(A, !0), this._runParsingLoop(null);
            let G = this.treeAdapter.getFirstChild(B),
                Z = this.treeAdapter.createDocumentFragment();
            return this._adoptNodes(G, Z), Z
        }
        _bootstrap(A, Q) {
            this.tokenizer = new j1(this.options), this.stopped = !1, this.insertionMode = "INITIAL_MODE", this.originalInsertionMode = "", this.document = A, this.fragmentContext = Q, this.headElement = null, this.formElement = null, this.openElements = new NY5(this.document, this.treeAdapter), this.activeFormattingElements = new I72(this.treeAdapter), this.tmplInsertionModeStack = [], this.tmplInsertionModeStackTop = -1, this.currentTmplInsertionMode = null, this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1
        }
        _err() {}
        _runParsingLoop(A) {
            while (!this.stopped) {
                this._setupTokenizerCDATAMode();
                let Q = this.tokenizer.getNextToken();
                if (Q.type === j1.HIBERNATION_TOKEN) break;
                if (this.skipNextNewLine) {
                    if (this.skipNextNewLine = !1, Q.type === j1.WHITESPACE_CHARACTER_TOKEN && Q.chars[0] === `
`) {
                        if (Q.chars.length === 1) continue;
                        Q.chars = Q.chars.substr(1)
                    }
                }
                if (this._processInputToken(Q), A && this.pendingScript) break
            }
        }
        runParsingLoopForCurrentChunk(A, Q) {
            if (this._runParsingLoop(Q), Q && this.pendingScript) {
                let B = this.pendingScript;
                this.pendingScript = null, Q(B);
                return
            }
            if (A) A()
        }
        _setupTokenizerCDATAMode() {
            let A = this._getAdjustedCurrentElement();
            this.tokenizer.allowCDATA = A && A !== this.document && this.treeAdapter.getNamespaceURI(A) !== U2.HTML && !this._isIntegrationPoint(A)
        }
        _switchToTextParsing(A, Q) {
            this._insertElement(A, U2.HTML), this.tokenizer.state = Q, this.originalInsertionMode = this.insertionMode, this.insertionMode = "TEXT_MODE"
        }
        switchToPlaintextParsing() {
            this.insertionMode = "TEXT_MODE", this.originalInsertionMode = "IN_BODY_MODE", this.tokenizer.state = j1.MODE.PLAINTEXT
        }
        _getAdjustedCurrentElement() {
            return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current
        }
        _findFormInFragmentContext() {
            let A = this.fragmentContext;
            do {
                if (this.treeAdapter.getTagName(A) === FA.FORM) {
                    this.formElement = A;
                    break
                }
                A = this.treeAdapter.getParentNode(A)
            } while (A)
        }
        _initTokenizerForFragmentParsing() {
            if (this.treeAdapter.getNamespaceURI(this.fragmentContext) === U2.HTML) {
                let A = this.treeAdapter.getTagName(this.fragmentContext);
                if (A === FA.TITLE || A === FA.TEXTAREA) this.tokenizer.state = j1.MODE.RCDATA;
                else if (A === FA.STYLE || A === FA.XMP || A === FA.IFRAME || A === FA.NOEMBED || A === FA.NOFRAMES || A === FA.NOSCRIPT) this.tokenizer.state = j1.MODE.RAWTEXT;
                else if (A === FA.SCRIPT) this.tokenizer.state = j1.MODE.SCRIPT_DATA;
                else if (A === FA.PLAINTEXT) this.tokenizer.state = j1.MODE.PLAINTEXT
            }
        }
        _setDocumentType(A) {
            let Q = A.name || "",
                B = A.publicId || "",
                G = A.systemId || "";
            this.treeAdapter.setDocumentType(this.document, Q, B, G)
        }
        _attachElementToTree(A) {
            if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(A);
            else {
                let Q = this.openElements.currentTmplContent || this.openElements.current;
                this.treeAdapter.appendChild(Q, A)
            }
        }
        _appendElement(A, Q) {
            let B = this.treeAdapter.createElement(A.tagName, Q, A.attrs);
            this._attachElementToTree(B)
        }
        _insertElement(A, Q) {
            let B = this.treeAdapter.createElement(A.tagName, Q, A.attrs);
            this._attachElementToTree(B), this.openElements.push(B)
        }
        _insertFakeElement(A) {
            let Q = this.treeAdapter.createElement(A, U2.HTML, []);
            this._attachElementToTree(Q), this.openElements.push(Q)
        }
        _insertTemplate(A) {
            let Q = this.treeAdapter.createElement(A.tagName, U2.HTML, A.attrs),
                B = this.treeAdapter.createDocumentFragment();
            this.treeAdapter.setTemplateContent(Q, B), this._attachElementToTree(Q), this.openElements.push(Q)
        }
        _insertFakeRootElement() {
            let A = this.treeAdapter.createElement(FA.HTML, U2.HTML, []);
            this.treeAdapter.appendChild(this.openElements.current, A), this.openElements.push(A)
        }
        _appendCommentNode(A, Q) {
            let B = this.treeAdapter.createCommentNode(A.data);
            this.treeAdapter.appendChild(Q, B)
        }
        _insertCharacters(A) {
            if (this._shouldFosterParentOnInsertion()) this._fosterParentText(A.chars);
            else {
                let Q = this.openElements.currentTmplContent || this.openElements.current;
                this.treeAdapter.insertText(Q, A.chars)
            }
        }
        _adoptNodes(A, Q) {
            for (let B = this.treeAdapter.getFirstChild(A); B; B = this.treeAdapter.getFirstChild(A)) this.treeAdapter.detachNode(B), this.treeAdapter.appendChild(Q, B)
        }
        _shouldProcessTokenInForeignContent(A) {
            let Q = this._getAdjustedCurrentElement();
            if (!Q || Q === this.document) return !1;
            let B = this.treeAdapter.getNamespaceURI(Q);
            if (B === U2.HTML) return !1;
            if (this.treeAdapter.getTagName(Q) === FA.ANNOTATION_XML && B === U2.MATHML && A.type === j1.START_TAG_TOKEN && A.tagName === FA.SVG) return !1;
            let G = A.type === j1.CHARACTER_TOKEN || A.type === j1.NULL_CHARACTER_TOKEN || A.type === j1.WHITESPACE_CHARACTER_TOKEN;
            if ((A.type === j1.START_TAG_TOKEN && A.tagName !== FA.MGLYPH && A.tagName !== FA.MALIGNMARK || G) && this._isIntegrationPoint(Q, U2.MATHML)) return !1;
            if ((A.type === j1.START_TAG_TOKEN || G) && this._isIntegrationPoint(Q, U2.HTML)) return !1;
            return A.type !== j1.EOF_TOKEN
        }
        _processToken(A) {
            W72[this.insertionMode][A.type](this, A)
        }
        _processTokenInBodyMode(A) {
            W72.IN_BODY_MODE[A.type](this, A)
        }
        _processTokenInForeignContent(A) {
            if (A.type === j1.CHARACTER_TOKEN) ZW5(this, A);
            else if (A.type === j1.NULL_CHARACTER_TOKEN) GW5(this, A);
            else if (A.type === j1.WHITESPACE_CHARACTER_TOKEN) pU(this, A);
            else if (A.type === j1.COMMENT_TOKEN) kF(this, A);
            else if (A.type === j1.START_TAG_TOKEN) IW5(this, A);
            else if (A.type === j1.END_TAG_TOKEN) YW5(this, A)
        }
        _processInputToken(A) {
            if (this._shouldProcessTokenInForeignContent(A)) this._processTokenInForeignContent(A);
            else this._processToken(A);
            if (A.type === j1.START_TAG_TOKEN && A.selfClosing && !A.ackSelfClosing) this._err(SD.nonVoidHtmlElementStartTagWithTrailingSolidus)
        }
        _isIntegrationPoint(A, Q) {
            let B = this.treeAdapter.getTagName(A),
                G = this.treeAdapter.getNamespaceURI(A),
                Z = this.treeAdapter.getAttrList(A);
            return Sk.isIntegrationPoint(B, G, Z, Q)
        }
        _reconstructActiveFormattingElements() {
            let A = this.activeFormattingElements.length;
            if (A) {
                let Q = A,
                    B = null;
                do
                    if (Q--, B = this.activeFormattingElements.entries[Q], B.type === I72.MARKER_ENTRY || this.openElements.contains(B.element)) {
                        Q++;
                        break
                    } while (Q > 0);
                for (let G = Q; G < A; G++) B = this.activeFormattingElements.entries[G], this._insertElement(B.token, this.treeAdapter.getNamespaceURI(B.element)), B.element = this.openElements.current
            }
        }
        _closeTableCell() {
            this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = "IN_ROW_MODE"
        }
        _closePElement() {
            this.openElements.generateImpliedEndTagsWithExclusion(FA.P), this.openElements.popUntilTagNamePopped(FA.P)
        }
        _resetInsertionMode() {
            for (let A = this.openElements.stackTop, Q = !1; A >= 0; A--) {
                let B = this.openElements.items[A];
                if (A === 0) {
                    if (Q = !0, this.fragmentContext) B = this.fragmentContext
                }
                let G = this.treeAdapter.getTagName(B),
                    Z = jY5[G];
                if (Z) {
                    this.insertionMode = Z;
                    break
                } else if (!Q && (G === FA.TD || G === FA.TH)) {
                    this.insertionMode = "IN_CELL_MODE";
                    break
                } else if (!Q && G === FA.HEAD) {
                    this.insertionMode = "IN_HEAD_MODE";
                    break
                } else if (G === FA.SELECT) {
                    this._resetInsertionModeForSelect(A);
                    break
                } else if (G === FA.TEMPLATE) {
                    this.insertionMode = this.currentTmplInsertionMode;
                    break
                } else if (G === FA.HTML) {
                    this.insertionMode = this.headElement ? "AFTER_HEAD_MODE" : "BEFORE_HEAD_MODE";
                    break
                } else if (Q) {
                    this.insertionMode = "IN_BODY_MODE";
                    break
                }
            }
        }
        _resetInsertionModeForSelect(A) {
            if (A > 0)
                for (let Q = A - 1; Q > 0; Q--) {
                    let B = this.openElements.items[Q],
                        G = this.treeAdapter.getTagName(B);
                    if (G === FA.TEMPLATE) break;
                    else if (G === FA.TABLE) {
                        this.insertionMode = "IN_SELECT_IN_TABLE_MODE";
                        return
                    }
                }
            this.insertionMode = "IN_SELECT_MODE"
        }
        _pushTmplInsertionMode(A) {
            this.tmplInsertionModeStack.push(A), this.tmplInsertionModeStackTop++, this.currentTmplInsertionMode = A
        }
        _popTmplInsertionMode() {
            this.tmplInsertionModeStack.pop(), this.tmplInsertionModeStackTop--, this.currentTmplInsertionMode = this.tmplInsertionModeStack[this.tmplInsertionModeStackTop]
        }
        _isElementCausesFosterParenting(A) {
            let Q = this.treeAdapter.getTagName(A);
            return Q === FA.TABLE || Q === FA.TBODY || Q === FA.TFOOT || Q === FA.THEAD || Q === FA.TR
        }
        _shouldFosterParentOnInsertion() {
            return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.current)
        }
        _findFosterParentingLocation() {
            let A = {
                parent: null,
                beforeElement: null
            };
            for (let Q = this.openElements.stackTop; Q >= 0; Q--) {
                let B = this.openElements.items[Q],
                    G = this.treeAdapter.getTagName(B),
                    Z = this.treeAdapter.getNamespaceURI(B);
                if (G === FA.TEMPLATE && Z === U2.HTML) {
                    A.parent = this.treeAdapter.getTemplateContent(B);
                    break
                } else if (G === FA.TABLE) {
                    if (A.parent = this.treeAdapter.getParentNode(B), A.parent) A.beforeElement = B;
                    else A.parent = this.openElements.items[Q - 1];
                    break
                }
            }
            if (!A.parent) A.parent = this.openElements.items[0];
            return A
        }
        _fosterParentElement(A) {
            let Q = this._findFosterParentingLocation();
            if (Q.beforeElement) this.treeAdapter.insertBefore(Q.parent, A, Q.beforeElement);
            else this.treeAdapter.appendChild(Q.parent, A)
        }
        _fosterParentText(A) {
            let Q = this._findFosterParentingLocation();
            if (Q.beforeElement) this.treeAdapter.insertTextBefore(Q.parent, A, Q.beforeElement);
            else this.treeAdapter.insertText(Q.parent, A)
        }
        _isSpecialElement(A) {
            let Q = this.treeAdapter.getTagName(A),
                B = this.treeAdapter.getNamespaceURI(A);
            return X1A.SPECIAL_ELEMENTS[B][Q]
        }
    }
    N72.exports = U72;

    function _Y5(A, Q) {
        let B = A.activeFormattingElements.getElementEntryInScopeWithTagName(Q.tagName);
        if (B) {
            if (!A.openElements.contains(B.element)) A.activeFormattingElements.removeEntry(B), B = null;
            else if (!A.openElements.hasInScope(Q.tagName)) B = null
        } else AP(A, Q);
        return B
    }

    function kY5(A, Q) {
        let B = null;
        for (let G = A.openElements.stackTop; G >= 0; G--) {
            let Z = A.openElements.items[G];
            if (Z === Q.element) break;
            if (A._isSpecialElement(Z)) B = Z
        }
        if (!B) A.openElements.popUntilElementPopped(Q.element), A.activeFormattingElements.removeEntry(Q);
        return B
    }

    function yY5(A, Q, B) {
        let G = Q,
            Z = A.openElements.getCommonAncestor(Q);
        for (let I = 0, Y = Z; Y !== B; I++, Y = Z) {
            Z = A.openElements.getCommonAncestor(Y);
            let J = A.activeFormattingElements.getElementEntry(Y),
                W = J && I >= 3;
            if (!J || W) {
                if (W) A.activeFormattingElements.removeEntry(J);
                A.openElements.remove(Y)
            } else {
                if (Y = xY5(A, J), G === Q) A.activeFormattingElements.bookmark = J;
                A.treeAdapter.detachNode(G), A.treeAdapter.appendChild(Y, G), G = Y
            }
        }
        return G
    }

    function xY5(A, Q) {
        let B = A.treeAdapter.getNamespaceURI(Q.element),
            G = A.treeAdapter.createElement(Q.token.tagName, B, Q.token.attrs);
        return A.openElements.replace(Q.element, G), Q.element = G, G
    }

    function vY5(A, Q, B) {
        if (A._isElementCausesFosterParenting(Q)) A._fosterParentElement(B);
        else {
            let G = A.treeAdapter.getTagName(Q),
                Z = A.treeAdapter.getNamespaceURI(Q);
            if (G === FA.TEMPLATE && Z === U2.HTML) Q = A.treeAdapter.getTemplateContent(Q);
            A.treeAdapter.appendChild(Q, B)
        }
    }

    function bY5(A, Q, B) {
        let G = A.treeAdapter.getNamespaceURI(B.element),
            Z = B.token,
            I = A.treeAdapter.createElement(Z.tagName, G, Z.attrs);
        A._adoptNodes(Q, I), A.treeAdapter.appendChild(Q, I), A.activeFormattingElements.insertElementAfterBookmark(I, B.token), A.activeFormattingElements.removeEntry(B), A.openElements.remove(B.element), A.openElements.insertAfter(Q, I)
    }

    function Xi(A, Q) {
        let B;
        for (let G = 0; G < 8; G++) {
            if (B = _Y5(A, Q, B), !B) break;
            let Z = kY5(A, B);
            if (!Z) break;
            A.activeFormattingElements.bookmark = B;
            let I = yY5(A, Z, B.element),
                Y = A.openElements.getCommonAncestor(B.element);
            A.treeAdapter.detachNode(I), vY5(A, Y, I), bY5(A, Z, B)
        }
    }

    function j5() {}

    function Z21(A) {
        A._err(SD.misplacedDoctype)
    }

    function kF(A, Q) {
        A._appendCommentNode(Q, A.openElements.currentTmplContent || A.openElements.current)
    }

    function fY5(A, Q) {
        A._appendCommentNode(Q, A.openElements.items[0])
    }

    function X72(A, Q) {
        A._appendCommentNode(Q, A.document)
    }

    function pU(A, Q) {
        A._insertCharacters(Q)
    }

    function tLA(A) {
        A.stopped = !0
    }

    function hY5(A, Q) {
        A._setDocumentType(Q);
        let B = Q.forceQuirks ? X1A.DOCUMENT_MODE.QUIRKS : J72.getDocumentMode(Q);
        if (!J72.isConforming(Q)) A._err(SD.nonConformingDoctype);
        A.treeAdapter.setDocumentMode(A.document, B), A.insertionMode = "BEFORE_HTML_MODE"
    }

    function eLA(A, Q) {
        A._err(SD.missingDoctype, {
            beforeToken: !0
        }), A.treeAdapter.setDocumentMode(A.document, X1A.DOCUMENT_MODE.QUIRKS), A.insertionMode = "BEFORE_HTML_MODE", A._processToken(Q)
    }

    function gY5(A, Q) {
        if (Q.tagName === FA.HTML) A._insertElement(Q, U2.HTML), A.insertionMode = "BEFORE_HEAD_MODE";
        else QMA(A, Q)
    }

    function uY5(A, Q) {
        let B = Q.tagName;
        if (B === FA.HTML || B === FA.HEAD || B === FA.BODY || B === FA.BR) QMA(A, Q)
    }

    function QMA(A, Q) {
        A._insertFakeRootElement(), A.insertionMode = "BEFORE_HEAD_MODE", A._processToken(Q)
    }

    function mY5(A, Q) {
        let B = Q.tagName;
        if (B === FA.HTML) lU(A, Q);
        else if (B === FA.HEAD) A._insertElement(Q, U2.HTML), A.headElement = A.openElements.current, A.insertionMode = "IN_HEAD_MODE";
        else BMA(A, Q)
    }

    function dY5(A, Q) {
        let B = Q.tagName;
        if (B === FA.HEAD || B === FA.BODY || B === FA.HTML || B === FA.BR) BMA(A, Q);
        else A._err(SD.endTagWithoutMatchingOpenElement)
    }

    function BMA(A, Q) {
        A._insertFakeElement(FA.HEAD), A.headElement = A.openElements.current, A.insertionMode = "IN_HEAD_MODE", A._processToken(Q)
    }

    function rV(A, Q) {
        let B = Q.tagName;
        if (B === FA.HTML) lU(A, Q);
        else if (B === FA.BASE || B === FA.BASEFONT || B === FA.BGSOUND || B === FA.LINK || B === FA.META) A._appendElement(Q, U2.HTML), Q.ackSelfClosing = !0;
        else if (B === FA.TITLE) A._switchToTextParsing(Q, j1.MODE.RCDATA);
        else if (B === FA.NOSCRIPT)
            if (A.options.scriptingEnabled) A._switchToTextParsing(Q, j1.MODE.RAWTEXT);
            else A._insertElement(Q, U2.HTML), A.insertionMode = "IN_HEAD_NO_SCRIPT_MODE";
        else if (B === FA.NOFRAMES || B === FA.STYLE) A._switchToTextParsing(Q, j1.MODE.RAWTEXT);
        else if (B === FA.SCRIPT) A._switchToTextParsing(Q, j1.MODE.SCRIPT_DATA);
        else if (B === FA.TEMPLATE) A._insertTemplate(Q, U2.HTML), A.activeFormattingElements.insertMarker(), A.framesetOk = !1, A.insertionMode = "IN_TEMPLATE_MODE", A._pushTmplInsertionMode("IN_TEMPLATE_MODE");
        else if (B === FA.HEAD) A._err(SD.misplacedStartTagForHeadElement);
        else GMA(A, Q)
    }

    function F1A(A, Q) {
        let B = Q.tagName;
        if (B === FA.HEAD) A.openElements.pop(), A.insertionMode = "AFTER_HEAD_MODE";
        else if (B === FA.BODY || B === FA.BR || B === FA.HTML) GMA(A, Q);
        else if (B === FA.TEMPLATE)
            if (A.openElements.tmplCount > 0) {
                if (A.openElements.generateImpliedEndTagsThoroughly(), A.openElements.currentTagName !== FA.TEMPLATE) A._err(SD.closingOfElementWithOpenChildElements);
                A.openElements.popUntilTagNamePopped(FA.TEMPLATE), A.activeFormattingElements.clearToLastMarker(), A._popTmplInsertionMode(), A._resetInsertionMode()
            } else A._err(SD.endTagWithoutMatchingOpenElement);
        else A._err(SD.endTagWithoutMatchingOpenElement)
    }

    function GMA(A, Q) {
        A.openElements.pop(), A.insertionMode = "AFTER_HEAD_MODE", A._processToken(Q)
    }

    function cY5(A, Q) {
        let B = Q.tagName;
        if (B === FA.HTML) lU(A, Q);
        else if (B === FA.BASEFONT || B === FA.BGSOUND || B === FA.HEAD || B === FA.LINK || B === FA.META || B === FA.NOFRAMES || B === FA.STYLE) rV(A, Q);
        else if (B === FA.NOSCRIPT) A._err(SD.nestedNoscriptInHead);
        else ZMA(A, Q)
    }

    function pY5(A, Q) {
        let B = Q.tagName;
        if (B === FA.NOSCRIPT) A.openElements.pop(), A.insertionMode = "IN_HEAD_MODE";
        else if (B === FA.BR) ZMA(A, Q);
        else A._err(SD.endTagWithoutMatchingOpenElement)
    }

    function ZMA(A, Q) {
        let B = Q.type === j1.EOF_TOKEN ? SD.openElementsLeftAfterEof : SD.disallowedContentInNoscriptInHead;
        A._err(B), A.openElements.pop(), A.insertionMode = "IN_HEAD_MODE", A._processToken(Q)
    }

    function lY5(A, Q) {
        let B = Q.tagName;
        if (B === FA.HTML) lU(A, Q);
        else if (B === FA.BODY) A._insertElement(Q, U2.HTML), A.framesetOk = !1, A.insertionMode = "IN_BODY_MODE";
        else if (B === FA.FRAMESET) A._insertElement(Q, U2.HTML), A.insertionMode = "IN_FRAMESET_MODE";
        else if (B === FA.BASE || B === FA.BASEFONT || B === FA.BGSOUND || B === FA.LINK || B === FA.META || B === FA.NOFRAMES || B === FA.SCRIPT || B === FA.STYLE || B === FA.TEMPLATE || B === FA.TITLE) A._err(SD.abandonedHeadElementChild), A.openElements.push(A.headElement), rV(A, Q), A.openElements.remove(A.headElement);
        else if (B === FA.HEAD) A._err(SD.misplacedStartTagForHeadElement);
        else IMA(A, Q)
    }

    function iY5(A, Q) {
        let B = Q.tagName;
        if (B === FA.BODY || B === FA.HTML || B === FA.BR) IMA(A, Q);
        else if (B === FA.TEMPLATE) F1A(A, Q);
        else A._err(SD.endTagWithoutMatchingOpenElement)
    }

    function IMA(A, Q) {
        A._insertFakeElement(FA.BODY), A.insertionMode = "IN_BODY_MODE", A._processToken(Q)
    }

    function W1A(A, Q) {
        A._reconstructActiveFormattingElements(), A._insertCharacters(Q)
    }

    function I21(A, Q) {
        A._reconstructActiveFormattingElements(), A._insertCharacters(Q), A.framesetOk = !1
    }

    function nY5(A, Q) {
        if (A.openElements.tmplCount === 0) A.treeAdapter.adoptAttributes(A.openElements.items[0], Q.attrs)
    }

    function aY5(A, Q) {
        let B = A.openElements.tryPeekProperlyNestedBodyElement();
        if (B && A.openElements.tmplCount === 0) A.framesetOk = !1, A.treeAdapter.adoptAttributes(B, Q.attrs)
    }

    function sY5(A, Q) {
        let B = A.openElements.tryPeekProperlyNestedBodyElement();
        if (A.framesetOk && B) A.treeAdapter.detachNode(B), A.openElements.popAllUpToHtmlElement(), A._insertElement(Q, U2.HTML), A.insertionMode = "IN_FRAMESET_MODE"
    }

    function Vh(A, Q) {
        if (A.openElements.hasInButtonScope(FA.P)) A._closePElement();
        A._insertElement(Q, U2.HTML)
    }

    function rY5(A, Q) {
        if (A.openElements.hasInButtonScope(FA.P)) A._closePElement();
        let B = A.openElements.currentTagName;
        if (B === FA.H1 || B === FA.H2 || B === FA.H3 || B === FA.H4 || B === FA.H5 || B === FA.H6) A.openElements.pop();
        A._insertElement(Q, U2.HTML)
    }

    function F72(A, Q) {
        if (A.openElements.hasInButtonScope(FA.P)) A._closePElement();
        A._insertElement(Q, U2.HTML), A.skipNextNewLine = !0, A.framesetOk = !1
    }

    function oY5(A, Q) {
        let B = A.openElements.tmplCount > 0;
        if (!A.formElement || B) {
            if (A.openElements.hasInButtonScope(FA.P)) A._closePElement();
            if (A._insertElement(Q, U2.HTML), !B) A.formElement = A.openElements.current
        }
    }

    function tY5(A, Q) {
        A.framesetOk = !1;
        let B = Q.tagName;
        for (let G = A.openElements.stackTop; G >= 0; G--) {
            let Z = A.openElements.items[G],
                I = A.treeAdapter.getTagName(Z),
                Y = null;
            if (B === FA.LI && I === FA.LI) Y = FA.LI;
            else if ((B === FA.DD || B === FA.DT) && (I === FA.DD || I === FA.DT)) Y = I;
            if (Y) {
                A.openElements.generateImpliedEndTagsWithExclusion(Y), A.openElements.popUntilTagNamePopped(Y);
                break
            }
            if (I !== FA.ADDRESS && I !== FA.DIV && I !== FA.P && A._isSpecialElement(Z)) break
        }
        if (A.openElements.hasInButtonScope(FA.P)) A._closePElement();
        A._insertElement(Q, U2.HTML)
    }

    function eY5(A, Q) {
        if (A.openElements.hasInButtonScope(FA.P)) A._closePElement();
        A._insertElement(Q, U2.HTML), A.tokenizer.state = j1.MODE.PLAINTEXT
    }

    function AJ5(A, Q) {
        if (A.openElements.hasInScope(FA.BUTTON)) A.openElements.generateImpliedEndTags(), A.openElements.popUntilTagNamePopped(FA.BUTTON);
        A._reconstructActiveFormattingElements(), A._insertElement(Q, U2.HTML), A.framesetOk = !1
    }

    function QJ5(A, Q) {
        let B = A.activeFormattingElements.getElementEntryInScopeWithTagName(FA.A);
        if (B) Xi(A, Q), A.openElements.remove(B.element), A.activeFormattingElements.removeEntry(B);
        A._reconstructActiveFormattingElements(), A._insertElement(Q, U2.HTML), A.activeFormattingElements.pushElement(A.openElements.current, Q)
    }

    function iIA(A, Q) {
        A._reconstructActiveFormattingElements(), A._insertElement(Q, U2.HTML), A.activeFormattingElements.pushElement(A.openElements.current, Q)
    }

    function BJ5(A, Q) {
        if (A._reconstructActiveFormattingElements(), A.openElements.hasInScope(FA.NOBR)) Xi(A, Q), A._reconstructActiveFormattingElements();
        A._insertElement(Q, U2.HTML), A.activeFormattingElements.pushElement(A.openElements.current, Q)
    }

    function V72(A, Q) {
        A._reconstructActiveFormattingElements(), A._insertElement(Q, U2.HTML), A.activeFormattingElements.insertMarker(), A.framesetOk = !1
    }

    function GJ5(A, Q) {
        if (A.treeAdapter.getDocumentMode(A.document) !== X1A.DOCUMENT_MODE.QUIRKS && A.openElements.hasInButtonScope(FA.P)) A._closePElement();
        A._insertElement(Q, U2.HTML), A.framesetOk = !1, A.insertionMode = "IN_TABLE_MODE"
    }

    function nIA(A, Q) {
        A._reconstructActiveFormattingElements(), A._appendElement(Q, U2.HTML), A.framesetOk = !1, Q.ackSelfClosing = !0
    }

    function ZJ5(A, Q) {
        A._reconstructActiveFormattingElements(), A._appendElement(Q, U2.HTML);
        let B = j1.getTokenAttr(Q, z72.TYPE);
        if (!B || B.toLowerCase() !== "hidden") A.framesetOk = !1;
        Q.ackSelfClosing = !0
    }

    function K72(A, Q) {
        A._appendElement(Q, U2.HTML), Q.ackSelfClosing = !0
    }

    function IJ5(A, Q) {
        if (A.openElements.hasInButtonScope(FA.P)) A._closePElement();
        A._appendElement(Q, U2.HTML), A.framesetOk = !1, A.ackSelfClosing = !0
    }

    function YJ5(A, Q) {
        Q.tagName = FA.IMG, nIA(A, Q)
    }

    function JJ5(A, Q) {
        A._insertElement(Q, U2.HTML), A.skipNextNewLine = !0, A.tokenizer.state = j1.MODE.RCDATA, A.originalInsertionMode = A.insertionMode, A.framesetOk = !1, A.insertionMode = "TEXT_MODE"
    }

    function WJ5(A, Q) {
        if (A.openElements.hasInButtonScope(FA.P)) A._closePElement();
        A._reconstructActiveFormattingElements(), A.framesetOk = !1, A._switchToTextParsing(Q, j1.MODE.RAWTEXT)
    }

    function XJ5(A, Q) {
        A.framesetOk = !1, A._switchToTextParsing(Q, j1.MODE.RAWTEXT)
    }

    function D72(A, Q) {
        A._switchToTextParsing(Q, j1.MODE.RAWTEXT)
    }

    function FJ5(A, Q) {
        if (A._reconstructActiveFormattingElements(), A._insertElement(Q, U2.HTML), A.framesetOk = !1, A.insertionMode === "IN_TABLE_MODE" || A.insertionMode === "IN_CAPTION_MODE" || A.insertionMode === "IN_TABLE_BODY_MODE" || A.insertionMode === "IN_ROW_MODE" || A.insertionMode === "IN_CELL_MODE") A.insertionMode = "IN_SELECT_IN_TABLE_MODE";
        else A.insertionMode = "IN_SELECT_MODE"
    }

    function H72(A, Q) {
        if (A.openElements.currentTagName === FA.OPTION) A.openElements.pop();
        A._reconstructActiveFormattingElements(), A._insertElement(Q, U2.HTML)
    }

    function C72(A, Q) {
        if (A.openElements.hasInScope(FA.RUBY)) A.openElements.generateImpliedEndTags();
        A._insertElement(Q, U2.HTML)
    }

    function VJ5(A, Q) {
        if (A.openElements.hasInScope(FA.RUBY)) A.openElements.generateImpliedEndTagsWithExclusion(FA.RTC);
        A._insertElement(Q, U2.HTML)
    }

    function KJ5(A, Q) {
        if (A.openElements.hasInButtonScope(FA.P)) A._closePElement();
        A._insertElement(Q, U2.HTML)
    }

    function DJ5(A, Q) {
        if (A._reconstructActiveFormattingElements(), Sk.adjustTokenMathMLAttrs(Q), Sk.adjustTokenXMLAttrs(Q), Q.selfClosing) A._appendElement(Q, U2.MATHML);
        else A._insertElement(Q, U2.MATHML);
        Q.ackSelfClosing = !0
    }

    function HJ5(A, Q) {
        if (A._reconstructActiveFormattingElements(), Sk.adjustTokenSVGAttrs(Q), Sk.adjustTokenXMLAttrs(Q), Q.selfClosing) A._appendElement(Q, U2.SVG);
        else A._insertElement(Q, U2.SVG);
        Q.ackSelfClosing = !0
    }

    function aM(A, Q) {
        A._reconstructActiveFormattingElements(), A._insertElement(Q, U2.HTML)
    }

    function lU(A, Q) {
        let B = Q.tagName;
        switch (B.length) {
            case 1:
                if (B === FA.I || B === FA.S || B === FA.B || B === FA.U) iIA(A, Q);
                else if (B === FA.P) Vh(A, Q);
                else if (B === FA.A) QJ5(A, Q);
                else aM(A, Q);
                break;
            case 2:
                if (B === FA.DL || B === FA.OL || B === FA.UL) Vh(A, Q);
                else if (B === FA.H1 || B === FA.H2 || B === FA.H3 || B === FA.H4 || B === FA.H5 || B === FA.H6) rY5(A, Q);
                else if (B === FA.LI || B === FA.DD || B === FA.DT) tY5(A, Q);
                else if (B === FA.EM || B === FA.TT) iIA(A, Q);
                else if (B === FA.BR) nIA(A, Q);
                else if (B === FA.HR) IJ5(A, Q);
                else if (B === FA.RB) C72(A, Q);
                else if (B === FA.RT || B === FA.RP) VJ5(A, Q);
                else if (B !== FA.TH && B !== FA.TD && B !== FA.TR) aM(A, Q);
                break;
            case 3:
                if (B === FA.DIV || B === FA.DIR || B === FA.NAV) Vh(A, Q);
                else if (B === FA.PRE) F72(A, Q);
                else if (B === FA.BIG) iIA(A, Q);
                else if (B === FA.IMG || B === FA.WBR) nIA(A, Q);
                else if (B === FA.XMP) WJ5(A, Q);
                else if (B === FA.SVG) HJ5(A, Q);
                else if (B === FA.RTC) C72(A, Q);
                else if (B !== FA.COL) aM(A, Q);
                break;
            case 4:
                if (B === FA.HTML) nY5(A, Q);
                else if (B === FA.BASE || B === FA.LINK || B === FA.META) rV(A, Q);
                else if (B === FA.BODY) aY5(A, Q);
                else if (B === FA.MAIN || B === FA.MENU) Vh(A, Q);
                else if (B === FA.FORM) oY5(A, Q);
                else if (B === FA.CODE || B === FA.FONT) iIA(A, Q);
                else if (B === FA.NOBR) BJ5(A, Q);
                else if (B === FA.AREA) nIA(A, Q);
                else if (B === FA.MATH) DJ5(A, Q);
                else if (B === FA.MENU) KJ5(A, Q);
                else if (B !== FA.HEAD) aM(A, Q);
                break;
            case 5:
                if (B === FA.STYLE || B === FA.TITLE) rV(A, Q);
                else if (B === FA.ASIDE) Vh(A, Q);
                else if (B === FA.SMALL) iIA(A, Q);
                else if (B === FA.TABLE) GJ5(A, Q);
                else if (B === FA.EMBED) nIA(A, Q);
                else if (B === FA.INPUT) ZJ5(A, Q);
                else if (B === FA.PARAM || B === FA.TRACK) K72(A, Q);
                else if (B === FA.IMAGE) YJ5(A, Q);
                else if (B !== FA.FRAME && B !== FA.TBODY && B !== FA.TFOOT && B !== FA.THEAD) aM(A, Q);
                break;
            case 6:
                if (B === FA.SCRIPT) rV(A, Q);
                else if (B === FA.CENTER || B === FA.FIGURE || B === FA.FOOTER || B === FA.HEADER || B === FA.HGROUP || B === FA.DIALOG) Vh(A, Q);
                else if (B === FA.BUTTON) AJ5(A, Q);
                else if (B === FA.STRIKE || B === FA.STRONG) iIA(A, Q);
                else if (B === FA.APPLET || B === FA.OBJECT) V72(A, Q);
                else if (B === FA.KEYGEN) nIA(A, Q);
                else if (B === FA.SOURCE) K72(A, Q);
                else if (B === FA.IFRAME) XJ5(A, Q);
                else if (B === FA.SELECT) FJ5(A, Q);
                else if (B === FA.OPTION) H72(A, Q);
                else aM(A, Q);
                break;
            case 7:
                if (B === FA.BGSOUND) rV(A, Q);
                else if (B === FA.DETAILS || B === FA.ADDRESS || B === FA.ARTICLE || B === FA.SECTION || B === FA.SUMMARY) Vh(A, Q);
                else if (B === FA.LISTING) F72(A, Q);
                else if (B === FA.MARQUEE) V72(A, Q);
                else if (B === FA.NOEMBED) D72(A, Q);
                else if (B !== FA.CAPTION) aM(A, Q);
                break;
            case 8:
                if (B === FA.BASEFONT) rV(A, Q);
                else if (B === FA.FRAMESET) sY5(A, Q);
                else if (B === FA.FIELDSET) Vh(A, Q);
                else if (B === FA.TEXTAREA) JJ5(A, Q);
                else if (B === FA.TEMPLATE) rV(A, Q);
                else if (B === FA.NOSCRIPT)
                    if (A.options.scriptingEnabled) D72(A, Q);
                    else aM(A, Q);
                else if (B === FA.OPTGROUP) H72(A, Q);
                else if (B !== FA.COLGROUP) aM(A, Q);
                break;
            case 9:
                if (B === FA.PLAINTEXT) eY5(A, Q);
                else aM(A, Q);
                break;
            case 10:
                if (B === FA.BLOCKQUOTE || B === FA.FIGCAPTION) Vh(A, Q);
                else aM(A, Q);
                break;
            default:
                aM(A, Q)
        }
    }

    function CJ5(A) {
        if (A.openElements.hasInScope(FA.BODY)) A.insertionMode = "AFTER_BODY_MODE"
    }

    function EJ5(A, Q) {
        if (A.openElements.hasInScope(FA.BODY)) A.insertionMode = "AFTER_BODY_MODE", A._processToken(Q)
    }

    function Wi(A, Q) {
        let B = Q.tagName;
        if (A.openElements.hasInScope(B)) A.openElements.generateImpliedEndTags(), A.openElements.popUntilTagNamePopped(B)
    }

    function zJ5(A) {
        let Q = A.openElements.tmplCount > 0,
            B = A.formElement;
        if (!Q) A.formElement = null;
        if ((B || Q) && A.openElements.hasInScope(FA.FORM))
            if (A.openElements.generateImpliedEndTags(), Q) A.openElements.popUntilTagNamePopped(FA.FORM);
            else A.openElements.remove(B)
    }

    function UJ5(A) {
        if (!A.openElements.hasInButtonScope(FA.P)) A._insertFakeElement(FA.P);
        A._closePElement()
    }

    function $J5(A) {
        if (A.openElements.hasInListItemScope(FA.LI)) A.openElements.generateImpliedEndTagsWithExclusion(FA.LI), A.openElements.popUntilTagNamePopped(FA.LI)
    }

    function wJ5(A, Q) {
        let B = Q.tagName;
        if (A.openElements.hasInScope(B)) A.openElements.generateImpliedEndTagsWithExclusion(B), A.openElements.popUntilTagNamePopped(B)
    }

    function qJ5(A) {
        if (A.openElements.hasNumberedHeaderInScope()) A.openElements.generateImpliedEndTags(), A.openElements.popUntilNumberedHeaderPopped()
    }

    function E72(A, Q) {
        let B = Q.tagName;
        if (A.openElements.hasInScope(B)) A.openElements.generateImpliedEndTags(), A.openElements.popUntilTagNamePopped(B), A.activeFormattingElements.clearToLastMarker()
    }

    function NJ5(A) {
        A._reconstructActiveFormattingElements(), A._insertFakeElement(FA.BR), A.openElements.pop(), A.framesetOk = !1
    }

    function AP(A, Q) {
        let B = Q.tagName;
        for (let G = A.openElements.stackTop; G > 0; G--) {
            let Z = A.openElements.items[G];
            if (A.treeAdapter.getTagName(Z) === B) {
                A.openElements.generateImpliedEndTagsWithExclusion(B), A.openElements.popUntilElementPopped(Z);
                break
            }
            if (A._isSpecialElement(Z)) break
        }
    }

    function N10(A, Q) {
        let B = Q.tagName;
        switch (B.length) {
            case 1:
                if (B === FA.A || B === FA.B || B === FA.I || B === FA.S || B === FA.U) Xi(A, Q);
                else if (B === FA.P) UJ5(A, Q);
                else AP(A, Q);
                break;
            case 2:
                if (B === FA.DL || B === FA.UL || B === FA.OL) Wi(A, Q);
                else if (B === FA.LI) $J5(A, Q);
                else if (B === FA.DD || B === FA.DT) wJ5(A, Q);
                else if (B === FA.H1 || B === FA.H2 || B === FA.H3 || B === FA.H4 || B === FA.H5 || B === FA.H6) qJ5(A, Q);
                else if (B === FA.BR) NJ5(A, Q);
                else if (B === FA.EM || B === FA.TT) Xi(A, Q);
                else AP(A, Q);
                break;
            case 3:
                if (B === FA.BIG) Xi(A, Q);
                else if (B === FA.DIR || B === FA.DIV || B === FA.NAV || B === FA.PRE) Wi(A, Q);
                else AP(A, Q);
                break;
            case 4:
                if (B === FA.BODY) CJ5(A, Q);
                else if (B === FA.HTML) EJ5(A, Q);
                else if (B === FA.FORM) zJ5(A, Q);
                else if (B === FA.CODE || B === FA.FONT || B === FA.NOBR) Xi(A, Q);
                else if (B === FA.MAIN || B === FA.MENU) Wi(A, Q);
                else AP(A, Q);
                break;
            case 5:
                if (B === FA.ASIDE) Wi(A, Q);
                else if (B === FA.SMALL) Xi(A, Q);
                else AP(A, Q);
                break;
            case 6:
                if (B === FA.CENTER || B === FA.FIGURE || B === FA.FOOTER || B === FA.HEADER || B === FA.HGROUP || B === FA.DIALOG) Wi(A, Q);
                else if (B === FA.APPLET || B === FA.OBJECT) E72(A, Q);
                else if (B === FA.STRIKE || B === FA.STRONG) Xi(A, Q);
                else AP(A, Q);
                break;
            case 7:
                if (B === FA.ADDRESS || B === FA.ARTICLE || B === FA.DETAILS || B === FA.SECTION || B === FA.SUMMARY || B === FA.LISTING) Wi(A, Q);
                else if (B === FA.MARQUEE) E72(A, Q);
                else AP(A, Q);
                break;
            case 8:
                if (B === FA.FIELDSET) Wi(A, Q);
                else if (B === FA.TEMPLATE) F1A(A, Q);
                else AP(A, Q);
                break;
            case 10:
                if (B === FA.BLOCKQUOTE || B === FA.FIGCAPTION) Wi(A, Q);
                else AP(A, Q);
                break;
            default:
                AP(A, Q)
        }
    }

    function Kh(A, Q) {
        if (A.tmplInsertionModeStackTop > -1) q72(A, Q);
        else A.stopped = !0
    }

    function LJ5(A, Q) {
        if (Q.tagName === FA.SCRIPT) A.pendingScript = A.openElements.current;
        A.openElements.pop(), A.insertionMode = A.originalInsertionMode
    }

    function MJ5(A, Q) {
        A._err(SD.eofInElementThatCanContainOnlyText), A.openElements.pop(), A.insertionMode = A.originalInsertionMode, A._processToken(Q)
    }

    function Dh(A, Q) {
        let B = A.openElements.currentTagName;
        if (B === FA.TABLE || B === FA.TBODY || B === FA.TFOOT || B === FA.THEAD || B === FA.TR) A.pendingCharacterTokens = [], A.hasNonWhitespacePendingCharacterToken = !1, A.originalInsertionMode = A.insertionMode, A.insertionMode = "IN_TABLE_TEXT_MODE", A._processToken(Q);
        else sM(A, Q)
    }

    function OJ5(A, Q) {
        A.openElements.clearBackToTableContext(), A.activeFormattingElements.insertMarker(), A._insertElement(Q, U2.HTML), A.insertionMode = "IN_CAPTION_MODE"
    }

    function RJ5(A, Q) {
        A.openElements.clearBackToTableContext(), A._insertElement(Q, U2.HTML), A.insertionMode = "IN_COLUMN_GROUP_MODE"
    }

    function TJ5(A, Q) {
        A.openElements.clearBackToTableContext(), A._insertFakeElement(FA.COLGROUP), A.insertionMode = "IN_COLUMN_GROUP_MODE", A._processToken(Q)
    }

    function PJ5(A, Q) {
        A.openElements.clearBackToTableContext(), A._insertElement(Q, U2.HTML), A.insertionMode = "IN_TABLE_BODY_MODE"
    }

    function jJ5(A, Q) {
        A.openElements.clearBackToTableContext(), A._insertFakeElement(FA.TBODY), A.insertionMode = "IN_TABLE_BODY_MODE", A._processToken(Q)
    }

    function SJ5(A, Q) {
        if (A.openElements.hasInTableScope(FA.TABLE)) A.openElements.popUntilTagNamePopped(FA.TABLE), A._resetInsertionMode(), A._processToken(Q)
    }

    function _J5(A, Q) {
        let B = j1.getTokenAttr(Q, z72.TYPE);
        if (B && B.toLowerCase() === "hidden") A._appendElement(Q, U2.HTML);
        else sM(A, Q);
        Q.ackSelfClosing = !0
    }

    function kJ5(A, Q) {
        if (!A.formElement && A.openElements.tmplCount === 0) A._insertElement(Q, U2.HTML), A.formElement = A.openElements.current, A.openElements.pop()
    }

    function L10(A, Q) {
        let B = Q.tagName;
        switch (B.length) {
            case 2:
                if (B === FA.TD || B === FA.TH || B === FA.TR) jJ5(A, Q);
                else sM(A, Q);
                break;
            case 3:
                if (B === FA.COL) TJ5(A, Q);
                else sM(A, Q);
                break;
            case 4:
                if (B === FA.FORM) kJ5(A, Q);
                else sM(A, Q);
                break;
            case 5:
                if (B === FA.TABLE) SJ5(A, Q);
                else if (B === FA.STYLE) rV(A, Q);
                else if (B === FA.TBODY || B === FA.TFOOT || B === FA.THEAD) PJ5(A, Q);
                else if (B === FA.INPUT) _J5(A, Q);
                else sM(A, Q);
                break;
            case 6:
                if (B === FA.SCRIPT) rV(A, Q);
                else sM(A, Q);
                break;
            case 7:
                if (B === FA.CAPTION) OJ5(A, Q);
                else sM(A, Q);
                break;
            case 8:
                if (B === FA.COLGROUP) RJ5(A, Q);
                else if (B === FA.TEMPLATE) rV(A, Q);
                else sM(A, Q);
                break;
            default:
                sM(A, Q)
        }
    }

    function M10(A, Q) {
        let B = Q.tagName;
        if (B === FA.TABLE) {
            if (A.openElements.hasInTableScope(FA.TABLE)) A.openElements.popUntilTagNamePopped(FA.TABLE), A._resetInsertionMode()
        } else if (B === FA.TEMPLATE) F1A(A, Q);
        else if (B !== FA.BODY && B !== FA.CAPTION && B !== FA.COL && B !== FA.COLGROUP && B !== FA.HTML && B !== FA.TBODY && B !== FA.TD && B !== FA.TFOOT && B !== FA.TH && B !== FA.THEAD && B !== FA.TR) sM(A, Q)
    }

    function sM(A, Q) {
        let B = A.fosterParentingEnabled;
        A.fosterParentingEnabled = !0, A._processTokenInBodyMode(Q), A.fosterParentingEnabled = B
    }

    function yJ5(A, Q) {
        A.pendingCharacterTokens.push(Q)
    }

    function xJ5(A, Q) {
        A.pendingCharacterTokens.push(Q), A.hasNonWhitespacePendingCharacterToken = !0
    }

    function AMA(A, Q) {
        let B = 0;
        if (A.hasNonWhitespacePendingCharacterToken)
            for (; B < A.pendingCharacterTokens.length; B++) sM(A, A.pendingCharacterTokens[B]);
        else
            for (; B < A.pendingCharacterTokens.length; B++) A._insertCharacters(A.pendingCharacterTokens[B]);
        A.insertionMode = A.originalInsertionMode, A._processToken(Q)
    }

    function vJ5(A, Q) {
        let B = Q.tagName;
        if (B === FA.CAPTION || B === FA.COL || B === FA.COLGROUP || B === FA.TBODY || B === FA.TD || B === FA.TFOOT || B === FA.TH || B === FA.THEAD || B === FA.TR) {
            if (A.openElements.hasInTableScope(FA.CAPTION)) A.openElements.generateImpliedEndTags(), A.openElements.popUntilTagNamePopped(FA.CAPTION), A.activeFormattingElements.clearToLastMarker(), A.insertionMode = "IN_TABLE_MODE", A._processToken(Q)
        } else lU(A, Q)
    }

    function bJ5(A, Q) {
        let B = Q.tagName;
        if (B === FA.CAPTION || B === FA.TABLE) {
            if (A.openElements.hasInTableScope(FA.CAPTION)) {
                if (A.openElements.generateImpliedEndTags(), A.openElements.popUntilTagNamePopped(FA.CAPTION), A.activeFormattingElements.clearToLastMarker(), A.insertionMode = "IN_TABLE_MODE", B === FA.TABLE) A._processToken(Q)
            }
        } else if (B !== FA.BODY && B !== FA.COL && B !== FA.COLGROUP && B !== FA.HTML && B !== FA.TBODY && B !== FA.TD && B !== FA.TFOOT && B !== FA.TH && B !== FA.THEAD && B !== FA.TR) N10(A, Q)
    }

    function fJ5(A, Q) {
        let B = Q.tagName;
        if (B === FA.HTML) lU(A, Q);
        else if (B === FA.COL) A._appendElement(Q, U2.HTML), Q.ackSelfClosing = !0;
        else if (B === FA.TEMPLATE) rV(A, Q);
        else J21(A, Q)
    }

    function hJ5(A, Q) {
        let B = Q.tagName;
        if (B === FA.COLGROUP) {
            if (A.openElements.currentTagName === FA.COLGROUP) A.openElements.pop(), A.insertionMode = "IN_TABLE_MODE"
        } else if (B === FA.TEMPLATE) F1A(A, Q);
        else if (B !== FA.COL) J21(A, Q)
    }

    function J21(A, Q) {
        if (A.openElements.currentTagName === FA.COLGROUP) A.openElements.pop(), A.insertionMode = "IN_TABLE_MODE", A._processToken(Q)
    }

    function gJ5(A, Q) {
        let B = Q.tagName;
        if (B === FA.TR) A.openElements.clearBackToTableBodyContext(), A._insertElement(Q, U2.HTML), A.insertionMode = "IN_ROW_MODE";
        else if (B === FA.TH || B === FA.TD) A.openElements.clearBackToTableBodyContext(), A._insertFakeElement(FA.TR), A.insertionMode = "IN_ROW_MODE", A._processToken(Q);
        else if (B === FA.CAPTION || B === FA.COL || B === FA.COLGROUP || B === FA.TBODY || B === FA.TFOOT || B === FA.THEAD) {
            if (A.openElements.hasTableBodyContextInTableScope()) A.openElements.clearBackToTableBodyContext(), A.openElements.pop(), A.insertionMode = "IN_TABLE_MODE", A._processToken(Q)
        } else L10(A, Q)
    }

    function uJ5(A, Q) {
        let B = Q.tagName;
        if (B === FA.TBODY || B === FA.TFOOT || B === FA.THEAD) {
            if (A.openElements.hasInTableScope(B)) A.openElements.clearBackToTableBodyContext(), A.openElements.pop(), A.insertionMode = "IN_TABLE_MODE"
        } else if (B === FA.TABLE) {
            if (A.openElements.hasTableBodyContextInTableScope()) A.openElements.clearBackToTableBodyContext(), A.openElements.pop(), A.insertionMode = "IN_TABLE_MODE", A._processToken(Q)
        } else if (B !== FA.BODY && B !== FA.CAPTION && B !== FA.COL && B !== FA.COLGROUP || B !== FA.HTML && B !== FA.TD && B !== FA.TH && B !== FA.TR) M10(A, Q)
    }

    function mJ5(A, Q) {
        let B = Q.tagName;
        if (B === FA.TH || B === FA.TD) A.openElements.clearBackToTableRowContext(), A._insertElement(Q, U2.HTML), A.insertionMode = "IN_CELL_MODE", A.activeFormattingElements.insertMarker();
        else if (B === FA.CAPTION || B === FA.COL || B === FA.COLGROUP || B === FA.TBODY || B === FA.TFOOT || B === FA.THEAD || B === FA.TR) {
            if (A.openElements.hasInTableScope(FA.TR)) A.openElements.clearBackToTableRowContext(), A.openElements.pop(), A.insertionMode = "IN_TABLE_BODY_MODE", A._processToken(Q)
        } else L10(A, Q)
    }

    function dJ5(A, Q) {
        let B = Q.tagName;
        if (B === FA.TR) {
            if (A.openElements.hasInTableScope(FA.TR)) A.openElements.clearBackToTableRowContext(), A.openElements.pop(), A.insertionMode = "IN_TABLE_BODY_MODE"
        } else if (B === FA.TABLE) {
            if (A.openElements.hasInTableScope(FA.TR)) A.openElements.clearBackToTableRowContext(), A.openElements.pop(), A.insertionMode = "IN_TABLE_BODY_MODE", A._processToken(Q)
        } else if (B === FA.TBODY || B === FA.TFOOT || B === FA.THEAD) {
            if (A.openElements.hasInTableScope(B) || A.openElements.hasInTableScope(FA.TR)) A.openElements.clearBackToTableRowContext(), A.openElements.pop(), A.insertionMode = "IN_TABLE_BODY_MODE", A._processToken(Q)
        } else if (B !== FA.BODY && B !== FA.CAPTION && B !== FA.COL && B !== FA.COLGROUP || B !== FA.HTML && B !== FA.TD && B !== FA.TH) M10(A, Q)
    }

    function cJ5(A, Q) {
        let B = Q.tagName;
        if (B === FA.CAPTION || B === FA.COL || B === FA.COLGROUP || B === FA.TBODY || B === FA.TD || B === FA.TFOOT || B === FA.TH || B === FA.THEAD || B === FA.TR) {
            if (A.openElements.hasInTableScope(FA.TD) || A.openElements.hasInTableScope(FA.TH)) A._closeTableCell(), A._processToken(Q)
        } else lU(A, Q)
    }

    function pJ5(A, Q) {
        let B = Q.tagName;
        if (B === FA.TD || B === FA.TH) {
            if (A.openElements.hasInTableScope(B)) A.openElements.generateImpliedEndTags(), A.openElements.popUntilTagNamePopped(B), A.activeFormattingElements.clearToLastMarker(), A.insertionMode = "IN_ROW_MODE"
        } else if (B === FA.TABLE || B === FA.TBODY || B === FA.TFOOT || B === FA.THEAD || B === FA.TR) {
            if (A.openElements.hasInTableScope(B)) A._closeTableCell(), A._processToken(Q)
        } else if (B !== FA.BODY && B !== FA.CAPTION && B !== FA.COL && B !== FA.COLGROUP && B !== FA.HTML) N10(A, Q)
    }

    function $72(A, Q) {
        let B = Q.tagName;
        if (B === FA.HTML) lU(A, Q);
        else if (B === FA.OPTION) {
            if (A.openElements.currentTagName === FA.OPTION) A.openElements.pop();
            A._insertElement(Q, U2.HTML)
        } else if (B === FA.OPTGROUP) {
            if (A.openElements.currentTagName === FA.OPTION) A.openElements.pop();
            if (A.openElements.currentTagName === FA.OPTGROUP) A.openElements.pop();
            A._insertElement(Q, U2.HTML)
        } else if (B === FA.INPUT || B === FA.KEYGEN || B === FA.TEXTAREA || B === FA.SELECT) {
            if (A.openElements.hasInSelectScope(FA.SELECT)) {
                if (A.openElements.popUntilTagNamePopped(FA.SELECT), A._resetInsertionMode(), B !== FA.SELECT) A._processToken(Q)
            }
        } else if (B === FA.SCRIPT || B === FA.TEMPLATE) rV(A, Q)
    }

    function w72(A, Q) {
        let B = Q.tagName;
        if (B === FA.OPTGROUP) {
            let G = A.openElements.items[A.openElements.stackTop - 1],
                Z = G && A.treeAdapter.getTagName(G);
            if (A.openElements.currentTagName === FA.OPTION && Z === FA.OPTGROUP) A.openElements.pop();
            if (A.openElements.currentTagName === FA.OPTGROUP) A.openElements.pop()
        } else if (B === FA.OPTION) {
            if (A.openElements.currentTagName === FA.OPTION) A.openElements.pop()
        } else if (B === FA.SELECT && A.openElements.hasInSelectScope(FA.SELECT)) A.openElements.popUntilTagNamePopped(FA.SELECT), A._resetInsertionMode();
        else if (B === FA.TEMPLATE) F1A(A, Q)
    }

    function lJ5(A, Q) {
        let B = Q.tagName;
        if (B === FA.CAPTION || B === FA.TABLE || B === FA.TBODY || B === FA.TFOOT || B === FA.THEAD || B === FA.TR || B === FA.TD || B === FA.TH) A.openElements.popUntilTagNamePopped(FA.SELECT), A._resetInsertionMode(), A._processToken(Q);
        else $72(A, Q)
    }

    function iJ5(A, Q) {
        let B = Q.tagName;
        if (B === FA.CAPTION || B === FA.TABLE || B === FA.TBODY || B === FA.TFOOT || B === FA.THEAD || B === FA.TR || B === FA.TD || B === FA.TH) {
            if (A.openElements.hasInTableScope(B)) A.openElements.popUntilTagNamePopped(FA.SELECT), A._resetInsertionMode(), A._processToken(Q)
        } else w72(A, Q)
    }

    function nJ5(A, Q) {
        let B = Q.tagName;
        if (B === FA.BASE || B === FA.BASEFONT || B === FA.BGSOUND || B === FA.LINK || B === FA.META || B === FA.NOFRAMES || B === FA.SCRIPT || B === FA.STYLE || B === FA.TEMPLATE || B === FA.TITLE) rV(A, Q);
        else {
            let G = SY5[B] || "IN_BODY_MODE";
            A._popTmplInsertionMode(), A._pushTmplInsertionMode(G), A.insertionMode = G, A._processToken(Q)
        }
    }

    function aJ5(A, Q) {
        if (Q.tagName === FA.TEMPLATE) F1A(A, Q)
    }

    function q72(A, Q) {
        if (A.openElements.tmplCount > 0) A.openElements.popUntilTagNamePopped(FA.TEMPLATE), A.activeFormattingElements.clearToLastMarker(), A._popTmplInsertionMode(), A._resetInsertionMode(), A._processToken(Q);
        else A.stopped = !0
    }

    function sJ5(A, Q) {
        if (Q.tagName === FA.HTML) lU(A, Q);
        else W21(A, Q)
    }

    function rJ5(A, Q) {
        if (Q.tagName === FA.HTML) {
            if (!A.fragmentContext) A.insertionMode = "AFTER_AFTER_BODY_MODE"
        } else W21(A, Q)
    }

    function W21(A, Q) {
        A.insertionMode = "IN_BODY_MODE", A._processToken(Q)
    }

    function oJ5(A, Q) {
        let B = Q.tagName;
        if (B === FA.HTML) lU(A, Q);
        else if (B === FA.FRAMESET) A._insertElement(Q, U2.HTML);
        else if (B === FA.FRAME) A._appendElement(Q, U2.HTML), Q.ackSelfClosing = !0;
        else if (B === FA.NOFRAMES) rV(A, Q)
    }

    function tJ5(A, Q) {
        if (Q.tagName === FA.FRAMESET && !A.openElements.isRootHtmlElementCurrent()) {
            if (A.openElements.pop(), !A.fragmentContext && A.openElements.currentTagName !== FA.FRAMESET) A.insertionMode = "AFTER_FRAMESET_MODE"
        }
    }

    function eJ5(A, Q) {
        let B = Q.tagName;
        if (B === FA.HTML) lU(A, Q);
        else if (B === FA.NOFRAMES) rV(A, Q)
    }

    function AW5(A, Q) {
        if (Q.tagName === FA.HTML) A.insertionMode = "AFTER_AFTER_FRAMESET_MODE"
    }

    function QW5(A, Q) {
        if (Q.tagName === FA.HTML) lU(A, Q);
        else Y21(A, Q)
    }

    function Y21(A, Q) {
        A.insertionMode = "IN_BODY_MODE", A._processToken(Q)
    }

    function BW5(A, Q) {
        let B = Q.tagName;