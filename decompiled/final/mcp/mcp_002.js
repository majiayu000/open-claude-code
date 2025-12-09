/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: mcp_002.js
 * 处理时间: 2025-12-09T03:41:37.728Z
 * 变量映射: 0 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 2/29
 * Lines: 4496 - 5995 (1500 lines)
 * Original file: cli.js
 */

        "application/patch-ops-error+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["xer"]
        },
        "application/pdf": {
            source: "iana",
            compressible: !1,
            extensions: ["pdf"]
        },
        "application/pdx": {
            source: "iana"
        },
        "application/pem-certificate-chain": {
            source: "iana"
        },
        "application/pgp-encrypted": {
            source: "iana",
            compressible: !1,
            extensions: ["pgp"]
        },
        "application/pgp-keys": {
            source: "iana",
            extensions: ["asc"]
        },
        "application/pgp-signature": {
            source: "iana",
            extensions: ["asc", "sig"]
        },
        "application/pics-rules": {
            source: "apache",
            extensions: ["prf"]
        },
        "application/pidf+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0
        },
        "application/pidf-diff+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0
        },
        "application/pkcs10": {
            source: "iana",
            extensions: ["p10"]
        },
        "application/pkcs12": {
            source: "iana"
        },
        "application/pkcs7-mime": {
            source: "iana",
            extensions: ["p7m", "p7c"]
        },
        "application/pkcs7-signature": {
            source: "iana",
            extensions: ["p7s"]
        },
        "application/pkcs8": {
            source: "iana",
            extensions: ["p8"]
        },
        "application/pkcs8-encrypted": {
            source: "iana"
        },
        "application/pkix-attr-cert": {
            source: "iana",
            extensions: ["ac"]
        },
        "application/pkix-cert": {
            source: "iana",
            extensions: ["cer"]
        },
        "application/pkix-crl": {
            source: "iana",
            extensions: ["crl"]
        },
        "application/pkix-pkipath": {
            source: "iana",
            extensions: ["pkipath"]
        },
        "application/pkixcmp": {
            source: "iana",
            extensions: ["pki"]
        },
        "application/pls+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["pls"]
        },
        "application/poc-settings+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0
        },
        "application/postscript": {
            source: "iana",
            compressible: !0,
            extensions: ["ai", "eps", "ps"]
        },
        "application/ppsp-tracker+json": {
            source: "iana",
            compressible: !0
        },
        "application/problem+json": {
            source: "iana",
            compressible: !0
        },
        "application/problem+xml": {
            source: "iana",
            compressible: !0
        },
        "application/provenance+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["provx"]
        },
        "application/prs.alvestrand.titrax-sheet": {
            source: "iana"
        },
        "application/prs.cww": {
            source: "iana",
            extensions: ["cww"]
        },
        "application/prs.cyn": {
            source: "iana",
            charset: "7-BIT"
        },
        "application/prs.hpub+zip": {
            source: "iana",
            compressible: !1
        },
        "application/prs.nprend": {
            source: "iana"
        },
        "application/prs.plucker": {
            source: "iana"
        },
        "application/prs.rdf-xml-crypt": {
            source: "iana"
        },
        "application/prs.xsf+xml": {
            source: "iana",
            compressible: !0
        },
        "application/pskc+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["pskcxml"]
        },
        "application/pvd+json": {
            source: "iana",
            compressible: !0
        },
        "application/qsig": {
            source: "iana"
        },
        "application/raml+yaml": {
            compressible: !0,
            extensions: ["raml"]
        },
        "application/raptorfec": {
            source: "iana"
        },
        "application/rdap+json": {
            source: "iana",
            compressible: !0
        },
        "application/rdf+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["rdf", "owl"]
        },
        "application/reginfo+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["rif"]
        },
        "application/relax-ng-compact-syntax": {
            source: "iana",
            extensions: ["rnc"]
        },
        "application/remote-printing": {
            source: "iana"
        },
        "application/reputon+json": {
            source: "iana",
            compressible: !0
        },
        "application/resource-lists+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["rl"]
        },
        "application/resource-lists-diff+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["rld"]
        },
        "application/rfc+xml": {
            source: "iana",
            compressible: !0
        },
        "application/riscos": {
            source: "iana"
        },
        "application/rlmi+xml": {
            source: "iana",
            compressible: !0
        },
        "application/rls-services+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["rs"]
        },
        "application/route-apd+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["rapd"]
        },
        "application/route-s-tsid+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["sls"]
        },
        "application/route-usd+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["rusd"]
        },
        "application/rpki-ghostbusters": {
            source: "iana",
            extensions: ["gbr"]
        },
        "application/rpki-manifest": {
            source: "iana",
            extensions: ["mft"]
        },
        "application/rpki-publication": {
            source: "iana"
        },
        "application/rpki-roa": {
            source: "iana",
            extensions: ["roa"]
        },
        "application/rpki-updown": {
            source: "iana"
        },
        "application/rsd+xml": {
            source: "apache",
            compressible: !0,
            extensions: ["rsd"]
        },
        "application/rss+xml": {
            source: "apache",
            compressible: !0,
            extensions: ["rss"]
        },
        "application/rtf": {
            source: "iana",
            compressible: !0,
            extensions: ["rtf"]
        },
        "application/rtploopback": {
            source: "iana"
        },
        "application/rtx": {
            source: "iana"
        },
        "application/samlassertion+xml": {
            source: "iana",
            compressible: !0
        },
        "application/samlmetadata+xml": {
            source: "iana",
            compressible: !0
        },
        "application/sarif+json": {
            source: "iana",
            compressible: !0
        },
        "application/sarif-external-properties+json": {
            source: "iana",
            compressible: !0
        },
        "application/sbe": {
            source: "iana"
        },
        "application/sbml+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["sbml"]
        },
        "application/scaip+xml": {
            source: "iana",
            compressible: !0
        },
        "application/scim+json": {
            source: "iana",
            compressible: !0
        },
        "application/scvp-cv-request": {
            source: "iana",
            extensions: ["scq"]
        },
        "application/scvp-cv-response": {
            source: "iana",
            extensions: ["scs"]
        },
        "application/scvp-vp-request": {
            source: "iana",
            extensions: ["spq"]
        },
        "application/scvp-vp-response": {
            source: "iana",
            extensions: ["spp"]
        },
        "application/sdp": {
            source: "iana",
            extensions: ["sdp"]
        },
        "application/secevent+jwt": {
            source: "iana"
        },
        "application/senml+cbor": {
            source: "iana"
        },
        "application/senml+json": {
            source: "iana",
            compressible: !0
        },
        "application/senml+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["senmlx"]
        },
        "application/senml-etch+cbor": {
            source: "iana"
        },
        "application/senml-etch+json": {
            source: "iana",
            compressible: !0
        },
        "application/senml-exi": {
            source: "iana"
        },
        "application/sensml+cbor": {
            source: "iana"
        },
        "application/sensml+json": {
            source: "iana",
            compressible: !0
        },
        "application/sensml+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["sensmlx"]
        },
        "application/sensml-exi": {
            source: "iana"
        },
        "application/sep+xml": {
            source: "iana",
            compressible: !0
        },
        "application/sep-exi": {
            source: "iana"
        },
        "application/session-info": {
            source: "iana"
        },
        "application/set-payment": {
            source: "iana"
        },
        "application/set-payment-initiation": {
            source: "iana",
            extensions: ["setpay"]
        },
        "application/set-registration": {
            source: "iana"
        },
        "application/set-registration-initiation": {
            source: "iana",
            extensions: ["setreg"]
        },
        "application/sgml": {
            source: "iana"
        },
        "application/sgml-open-catalog": {
            source: "iana"
        },
        "application/shf+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["shf"]
        },
        "application/sieve": {
            source: "iana",
            extensions: ["siv", "sieve"]
        },
        "application/simple-filter+xml": {
            source: "iana",
            compressible: !0
        },
        "application/simple-message-summary": {
            source: "iana"
        },
        "application/simplesymbolcontainer": {
            source: "iana"
        },
        "application/sipc": {
            source: "iana"
        },
        "application/slate": {
            source: "iana"
        },
        "application/smil": {
            source: "iana"
        },
        "application/smil+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["smi", "smil"]
        },
        "application/smpte336m": {
            source: "iana"
        },
        "application/soap+fastinfoset": {
            source: "iana"
        },
        "application/soap+xml": {
            source: "iana",
            compressible: !0
        },
        "application/sparql-query": {
            source: "iana",
            extensions: ["rq"]
        },
        "application/sparql-results+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["srx"]
        },
        "application/spdx+json": {
            source: "iana",
            compressible: !0
        },
        "application/spirits-event+xml": {
            source: "iana",
            compressible: !0
        },
        "application/sql": {
            source: "iana"
        },
        "application/srgs": {
            source: "iana",
            extensions: ["gram"]
        },
        "application/srgs+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["grxml"]
        },
        "application/sru+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["sru"]
        },
        "application/ssdl+xml": {
            source: "apache",
            compressible: !0,
            extensions: ["ssdl"]
        },
        "application/ssml+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["ssml"]
        },
        "application/stix+json": {
            source: "iana",
            compressible: !0
        },
        "application/swid+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["swidtag"]
        },
        "application/tamp-apex-update": {
            source: "iana"
        },
        "application/tamp-apex-update-confirm": {
            source: "iana"
        },
        "application/tamp-community-update": {
            source: "iana"
        },
        "application/tamp-community-update-confirm": {
            source: "iana"
        },
        "application/tamp-error": {
            source: "iana"
        },
        "application/tamp-sequence-adjust": {
            source: "iana"
        },
        "application/tamp-sequence-adjust-confirm": {
            source: "iana"
        },
        "application/tamp-status-query": {
            source: "iana"
        },
        "application/tamp-status-response": {
            source: "iana"
        },
        "application/tamp-update": {
            source: "iana"
        },
        "application/tamp-update-confirm": {
            source: "iana"
        },
        "application/tar": {
            compressible: !0
        },
        "application/taxii+json": {
            source: "iana",
            compressible: !0
        },
        "application/td+json": {
            source: "iana",
            compressible: !0
        },
        "application/tei+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["tei", "teicorpus"]
        },
        "application/tetra_isi": {
            source: "iana"
        },
        "application/thraud+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["tfi"]
        },
        "application/timestamp-query": {
            source: "iana"
        },
        "application/timestamp-reply": {
            source: "iana"
        },
        "application/timestamped-data": {
            source: "iana",
            extensions: ["tsd"]
        },
        "application/tlsrpt+gzip": {
            source: "iana"
        },
        "application/tlsrpt+json": {
            source: "iana",
            compressible: !0
        },
        "application/tnauthlist": {
            source: "iana"
        },
        "application/token-introspection+jwt": {
            source: "iana"
        },
        "application/toml": {
            compressible: !0,
            extensions: ["toml"]
        },
        "application/trickle-ice-sdpfrag": {
            source: "iana"
        },
        "application/trig": {
            source: "iana",
            extensions: ["trig"]
        },
        "application/ttml+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["ttml"]
        },
        "application/tve-trigger": {
            source: "iana"
        },
        "application/tzif": {
            source: "iana"
        },
        "application/tzif-leap": {
            source: "iana"
        },
        "application/ubjson": {
            compressible: !1,
            extensions: ["ubj"]
        },
        "application/ulpfec": {
            source: "iana"
        },
        "application/urc-grpsheet+xml": {
            source: "iana",
            compressible: !0
        },
        "application/urc-ressheet+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["rsheet"]
        },
        "application/urc-targetdesc+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["td"]
        },
        "application/urc-uisocketdesc+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vcard+json": {
            source: "iana",
            compressible: !0
        },
        "application/vcard+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vemmi": {
            source: "iana"
        },
        "application/vividence.scriptfile": {
            source: "apache"
        },
        "application/vnd.1000minds.decision-model+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["1km"]
        },
        "application/vnd.3gpp-prose+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp-prose-pc3ch+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp-v2x-local-service-information": {
            source: "iana"
        },
        "application/vnd.3gpp.5gnas": {
            source: "iana"
        },
        "application/vnd.3gpp.access-transfer-events+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.bsf+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.gmop+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.gtpc": {
            source: "iana"
        },
        "application/vnd.3gpp.interworking-data": {
            source: "iana"
        },
        "application/vnd.3gpp.lpp": {
            source: "iana"
        },
        "application/vnd.3gpp.mc-signalling-ear": {
            source: "iana"
        },
        "application/vnd.3gpp.mcdata-affiliation-command+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcdata-info+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcdata-payload": {
            source: "iana"
        },
        "application/vnd.3gpp.mcdata-service-config+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcdata-signalling": {
            source: "iana"
        },
        "application/vnd.3gpp.mcdata-ue-config+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcdata-user-profile+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcptt-affiliation-command+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcptt-floor-request+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcptt-info+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcptt-location-info+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcptt-service-config+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcptt-signed+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcptt-ue-config+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcptt-ue-init-config+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcptt-user-profile+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcvideo-affiliation-command+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcvideo-affiliation-info+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcvideo-info+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcvideo-location-info+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcvideo-service-config+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcvideo-transmission-request+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcvideo-ue-config+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mcvideo-user-profile+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.mid-call+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.ngap": {
            source: "iana"
        },
        "application/vnd.3gpp.pfcp": {
            source: "iana"
        },
        "application/vnd.3gpp.pic-bw-large": {
            source: "iana",
            extensions: ["plb"]
        },
        "application/vnd.3gpp.pic-bw-small": {
            source: "iana",
            extensions: ["psb"]
        },
        "application/vnd.3gpp.pic-bw-var": {
            source: "iana",
            extensions: ["pvb"]
        },
        "application/vnd.3gpp.s1ap": {
            source: "iana"
        },
        "application/vnd.3gpp.sms": {
            source: "iana"
        },
        "application/vnd.3gpp.sms+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.srvcc-ext+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.srvcc-info+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.state-and-event-info+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp.ussd+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp2.bcmcsinfo+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.3gpp2.sms": {
            source: "iana"
        },
        "application/vnd.3gpp2.tcap": {
            source: "iana",
            extensions: ["tcap"]
        },
        "application/vnd.3lightssoftware.imagescal": {
            source: "iana"
        },
        "application/vnd.3m.post-it-notes": {
            source: "iana",
            extensions: ["pwn"]
        },
        "application/vnd.accpac.simply.aso": {
            source: "iana",
            extensions: ["aso"]
        },
        "application/vnd.accpac.simply.imp": {
            source: "iana",
            extensions: ["imp"]
        },
        "application/vnd.acucobol": {
            source: "iana",
            extensions: ["acu"]
        },
        "application/vnd.acucorp": {
            source: "iana",
            extensions: ["atc", "acutc"]
        },
        "application/vnd.adobe.air-application-installer-package+zip": {
            source: "apache",
            compressible: !1,
            extensions: ["air"]
        },
        "application/vnd.adobe.flash.movie": {
            source: "iana"
        },
        "application/vnd.adobe.formscentral.fcdt": {
            source: "iana",
            extensions: ["fcdt"]
        },
        "application/vnd.adobe.fxp": {
            source: "iana",
            extensions: ["fxp", "fxpl"]
        },
        "application/vnd.adobe.partial-upload": {
            source: "iana"
        },
        "application/vnd.adobe.xdp+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["xdp"]
        },
        "application/vnd.adobe.xfdf": {
            source: "iana",
            extensions: ["xfdf"]
        },
        "application/vnd.aether.imp": {
            source: "iana"
        },
        "application/vnd.afpc.afplinedata": {
            source: "iana"
        },
        "application/vnd.afpc.afplinedata-pagedef": {
            source: "iana"
        },
        "application/vnd.afpc.cmoca-cmresource": {
            source: "iana"
        },
        "application/vnd.afpc.foca-charset": {
            source: "iana"
        },
        "application/vnd.afpc.foca-codedfont": {
            source: "iana"
        },
        "application/vnd.afpc.foca-codepage": {
            source: "iana"
        },
        "application/vnd.afpc.modca": {
            source: "iana"
        },
        "application/vnd.afpc.modca-cmtable": {
            source: "iana"
        },
        "application/vnd.afpc.modca-formdef": {
            source: "iana"
        },
        "application/vnd.afpc.modca-mediummap": {
            source: "iana"
        },
        "application/vnd.afpc.modca-objectcontainer": {
            source: "iana"
        },
        "application/vnd.afpc.modca-overlay": {
            source: "iana"
        },
        "application/vnd.afpc.modca-pagesegment": {
            source: "iana"
        },
        "application/vnd.age": {
            source: "iana",
            extensions: ["age"]
        },
        "application/vnd.ah-barcode": {
            source: "iana"
        },
        "application/vnd.ahead.space": {
            source: "iana",
            extensions: ["ahead"]
        },
        "application/vnd.airzip.filesecure.azf": {
            source: "iana",
            extensions: ["azf"]
        },
        "application/vnd.airzip.filesecure.azs": {
            source: "iana",
            extensions: ["azs"]
        },
        "application/vnd.amadeus+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.amazon.ebook": {
            source: "apache",
            extensions: ["azw"]
        },
        "application/vnd.amazon.mobi8-ebook": {
            source: "iana"
        },
        "application/vnd.americandynamics.acc": {
            source: "iana",
            extensions: ["acc"]
        },
        "application/vnd.amiga.ami": {
            source: "iana",
            extensions: ["ami"]
        },
        "application/vnd.amundsen.maze+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.android.ota": {
            source: "iana"
        },
        "application/vnd.android.package-archive": {
            source: "apache",
            compressible: !1,
            extensions: ["apk"]
        },
        "application/vnd.anki": {
            source: "iana"
        },
        "application/vnd.anser-web-certificate-issue-initiation": {
            source: "iana",
            extensions: ["cii"]
        },
        "application/vnd.anser-web-funds-transfer-initiation": {
            source: "apache",
            extensions: ["fti"]
        },
        "application/vnd.antix.game-component": {
            source: "iana",
            extensions: ["atx"]
        },
        "application/vnd.apache.arrow.file": {
            source: "iana"
        },
        "application/vnd.apache.arrow.stream": {
            source: "iana"
        },
        "application/vnd.apache.thrift.binary": {
            source: "iana"
        },
        "application/vnd.apache.thrift.compact": {
            source: "iana"
        },
        "application/vnd.apache.thrift.json": {
            source: "iana"
        },
        "application/vnd.api+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.aplextor.warrp+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.apothekende.reservation+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.apple.installer+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["mpkg"]
        },
        "application/vnd.apple.keynote": {
            source: "iana",
            extensions: ["key"]
        },
        "application/vnd.apple.mpegurl": {
            source: "iana",
            extensions: ["m3u8"]
        },
        "application/vnd.apple.numbers": {
            source: "iana",
            extensions: ["numbers"]
        },
        "application/vnd.apple.pages": {
            source: "iana",
            extensions: ["pages"]
        },
        "application/vnd.apple.pkpass": {
            compressible: !1,
            extensions: ["pkpass"]
        },
        "application/vnd.arastra.swi": {
            source: "iana"
        },
        "application/vnd.aristanetworks.swi": {
            source: "iana",
            extensions: ["swi"]
        },
        "application/vnd.artisan+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.artsquare": {
            source: "iana"
        },
        "application/vnd.astraea-software.iota": {
            source: "iana",
            extensions: ["iota"]
        },
        "application/vnd.audiograph": {
            source: "iana",
            extensions: ["aep"]
        },
        "application/vnd.autopackage": {
            source: "iana"
        },
        "application/vnd.avalon+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.avistar+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.balsamiq.bmml+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["bmml"]
        },
        "application/vnd.balsamiq.bmpr": {
            source: "iana"
        },
        "application/vnd.banana-accounting": {
            source: "iana"
        },
        "application/vnd.bbf.usp.error": {
            source: "iana"
        },
        "application/vnd.bbf.usp.msg": {
            source: "iana"
        },
        "application/vnd.bbf.usp.msg+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.bekitzur-stech+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.bint.med-content": {
            source: "iana"
        },
        "application/vnd.biopax.rdf+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.blink-idb-value-wrapper": {
            source: "iana"
        },
        "application/vnd.blueice.multipass": {
            source: "iana",
            extensions: ["mpm"]
        },
        "application/vnd.bluetooth.ep.oob": {
            source: "iana"
        },
        "application/vnd.bluetooth.le.oob": {
            source: "iana"
        },
        "application/vnd.bmi": {
            source: "iana",
            extensions: ["bmi"]
        },
        "application/vnd.bpf": {
            source: "iana"
        },
        "application/vnd.bpf3": {
            source: "iana"
        },
        "application/vnd.businessobjects": {
            source: "iana",
            extensions: ["rep"]
        },
        "application/vnd.byu.uapi+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.cab-jscript": {
            source: "iana"
        },
        "application/vnd.canon-cpdl": {
            source: "iana"
        },
        "application/vnd.canon-lips": {
            source: "iana"
        },
        "application/vnd.capasystems-pg+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.cendio.thinlinc.clientconf": {
            source: "iana"
        },
        "application/vnd.century-systems.tcp_stream": {
            source: "iana"
        },
        "application/vnd.chemdraw+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["cdxml"]
        },
        "application/vnd.chess-pgn": {
            source: "iana"
        },
        "application/vnd.chipnuts.karaoke-mmd": {
            source: "iana",
            extensions: ["mmd"]
        },
        "application/vnd.ciedi": {
            source: "iana"
        },
        "application/vnd.cinderella": {
            source: "iana",
            extensions: ["cdy"]
        },
        "application/vnd.cirpack.isdn-ext": {
            source: "iana"
        },
        "application/vnd.citationstyles.style+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["csl"]
        },
        "application/vnd.claymore": {
            source: "iana",
            extensions: ["cla"]
        },
        "application/vnd.cloanto.rp9": {
            source: "iana",
            extensions: ["rp9"]
        },
        "application/vnd.clonk.c4group": {
            source: "iana",
            extensions: ["c4g", "c4d", "c4f", "c4p", "c4u"]
        },
        "application/vnd.cluetrust.cartomobile-config": {
            source: "iana",
            extensions: ["c11amc"]
        },
        "application/vnd.cluetrust.cartomobile-config-pkg": {
            source: "iana",
            extensions: ["c11amz"]
        },
        "application/vnd.coffeescript": {
            source: "iana"
        },
        "application/vnd.collabio.xodocuments.document": {
            source: "iana"
        },
        "application/vnd.collabio.xodocuments.document-template": {
            source: "iana"
        },
        "application/vnd.collabio.xodocuments.presentation": {
            source: "iana"
        },
        "application/vnd.collabio.xodocuments.presentation-template": {
            source: "iana"
        },
        "application/vnd.collabio.xodocuments.spreadsheet": {
            source: "iana"
        },
        "application/vnd.collabio.xodocuments.spreadsheet-template": {
            source: "iana"
        },
        "application/vnd.collection+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.collection.doc+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.collection.next+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.comicbook+zip": {
            source: "iana",
            compressible: !1
        },
        "application/vnd.comicbook-rar": {
            source: "iana"
        },
        "application/vnd.commerce-battelle": {
            source: "iana"
        },
        "application/vnd.commonspace": {
            source: "iana",
            extensions: ["csp"]
        },
        "application/vnd.contact.cmsg": {
            source: "iana",
            extensions: ["cdbcmsg"]
        },
        "application/vnd.coreos.ignition+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.cosmocaller": {
            source: "iana",
            extensions: ["cmc"]
        },
        "application/vnd.crick.clicker": {
            source: "iana",
            extensions: ["clkx"]
        },
        "application/vnd.crick.clicker.keyboard": {
            source: "iana",
            extensions: ["clkk"]
        },
        "application/vnd.crick.clicker.palette": {
            source: "iana",
            extensions: ["clkp"]
        },
        "application/vnd.crick.clicker.template": {
            source: "iana",
            extensions: ["clkt"]
        },
        "application/vnd.crick.clicker.wordbank": {
            source: "iana",
            extensions: ["clkw"]
        },
        "application/vnd.criticaltools.wbs+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["wbs"]
        },
        "application/vnd.cryptii.pipe+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.crypto-shade-file": {
            source: "iana"
        },
        "application/vnd.cryptomator.encrypted": {
            source: "iana"
        },
        "application/vnd.cryptomator.vault": {
            source: "iana"
        },
        "application/vnd.ctc-posml": {
            source: "iana",
            extensions: ["pml"]
        },
        "application/vnd.ctct.ws+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.cups-pdf": {
            source: "iana"
        },
        "application/vnd.cups-postscript": {
            source: "iana"
        },
        "application/vnd.cups-ppd": {
            source: "iana",
            extensions: ["ppd"]
        },
        "application/vnd.cups-raster": {
            source: "iana"
        },
        "application/vnd.cups-raw": {
            source: "iana"
        },
        "application/vnd.curl": {
            source: "iana"
        },
        "application/vnd.curl.car": {
            source: "apache",
            extensions: ["car"]
        },
        "application/vnd.curl.pcurl": {
            source: "apache",
            extensions: ["pcurl"]
        },
        "application/vnd.cyan.dean.root+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.cybank": {
            source: "iana"
        },
        "application/vnd.cyclonedx+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.cyclonedx+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.d2l.coursepackage1p0+zip": {
            source: "iana",
            compressible: !1
        },
        "application/vnd.d3m-dataset": {
            source: "iana"
        },
        "application/vnd.d3m-problem": {
            source: "iana"
        },
        "application/vnd.dart": {
            source: "iana",
            compressible: !0,
            extensions: ["dart"]
        },
        "application/vnd.data-vision.rdz": {
            source: "iana",
            extensions: ["rdz"]
        },
        "application/vnd.datapackage+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.dataresource+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.dbf": {
            source: "iana",
            extensions: ["dbf"]
        },
        "application/vnd.debian.binary-package": {
            source: "iana"
        },
        "application/vnd.dece.data": {
            source: "iana",
            extensions: ["uvf", "uvvf", "uvd", "uvvd"]
        },
        "application/vnd.dece.ttml+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["uvt", "uvvt"]
        },
        "application/vnd.dece.unspecified": {
            source: "iana",
            extensions: ["uvx", "uvvx"]
        },
        "application/vnd.dece.zip": {
            source: "iana",
            extensions: ["uvz", "uvvz"]
        },
        "application/vnd.denovo.fcselayout-link": {
            source: "iana",
            extensions: ["fe_launch"]
        },
        "application/vnd.desmume.movie": {
            source: "iana"
        },
        "application/vnd.dir-bi.plate-dl-nosuffix": {
            source: "iana"
        },
        "application/vnd.dm.delegation+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.dna": {
            source: "iana",
            extensions: ["dna"]
        },
        "application/vnd.document+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.dolby.mlp": {
            source: "apache",
            extensions: ["mlp"]
        },
        "application/vnd.dolby.mobile.1": {
            source: "iana"
        },
        "application/vnd.dolby.mobile.2": {
            source: "iana"
        },
        "application/vnd.doremir.scorecloud-binary-document": {
            source: "iana"
        },
        "application/vnd.dpgraph": {
            source: "iana",
            extensions: ["dpg"]
        },
        "application/vnd.dreamfactory": {
            source: "iana",
            extensions: ["dfac"]
        },
        "application/vnd.drive+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.ds-keypoint": {
            source: "apache",
            extensions: ["kpxx"]
        },
        "application/vnd.dtg.local": {
            source: "iana"
        },
        "application/vnd.dtg.local.flash": {
            source: "iana"
        },
        "application/vnd.dtg.local.html": {
            source: "iana"
        },
        "application/vnd.dvb.ait": {
            source: "iana",
            extensions: ["ait"]
        },
        "application/vnd.dvb.dvbisl+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.dvb.dvbj": {
            source: "iana"
        },
        "application/vnd.dvb.esgcontainer": {
            source: "iana"
        },
        "application/vnd.dvb.ipdcdftnotifaccess": {
            source: "iana"
        },
        "application/vnd.dvb.ipdcesgaccess": {
            source: "iana"
        },
        "application/vnd.dvb.ipdcesgaccess2": {
            source: "iana"
        },
        "application/vnd.dvb.ipdcesgpdd": {
            source: "iana"
        },
        "application/vnd.dvb.ipdcroaming": {
            source: "iana"
        },
        "application/vnd.dvb.iptv.alfec-base": {
            source: "iana"
        },
        "application/vnd.dvb.iptv.alfec-enhancement": {
            source: "iana"
        },