/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: ui_001.js
 * 处理时间: 2025-12-09T03:41:38.880Z
 * 变量映射: 0 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 1/53
 * Lines: 7493 - 8992 (1500 lines)
 * Original file: cli.js
 */

        "application/vnd.oasis.opendocument.text-master": {
            source: "iana",
            extensions: ["odm"]
        },
        "application/vnd.oasis.opendocument.text-template": {
            source: "iana",
            extensions: ["ott"]
        },
        "application/vnd.oasis.opendocument.text-web": {
            source: "iana",
            extensions: ["oth"]
        },
        "application/vnd.obn": {
            source: "iana"
        },
        "application/vnd.ocf+cbor": {
            source: "iana"
        },
        "application/vnd.oci.image.manifest.v1+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oftn.l10n+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oipf.contentaccessdownload+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oipf.contentaccessstreaming+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oipf.cspg-hexbinary": {
            source: "iana"
        },
        "application/vnd.oipf.dae.svg+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oipf.dae.xhtml+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oipf.mippvcontrolmessage+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oipf.pae.gem": {
            source: "iana"
        },
        "application/vnd.oipf.spdiscovery+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oipf.spdlist+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oipf.ueprofile+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oipf.userprofile+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.olpc-sugar": {
            source: "iana",
            extensions: ["xo"]
        },
        "application/vnd.oma-scws-config": {
            source: "iana"
        },
        "application/vnd.oma-scws-http-request": {
            source: "iana"
        },
        "application/vnd.oma-scws-http-response": {
            source: "iana"
        },
        "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.bcast.drm-trigger+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.bcast.imd+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.bcast.ltkm": {
            source: "iana"
        },
        "application/vnd.oma.bcast.notification+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.bcast.provisioningtrigger": {
            source: "iana"
        },
        "application/vnd.oma.bcast.sgboot": {
            source: "iana"
        },
        "application/vnd.oma.bcast.sgdd+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.bcast.sgdu": {
            source: "iana"
        },
        "application/vnd.oma.bcast.simple-symbol-container": {
            source: "iana"
        },
        "application/vnd.oma.bcast.smartcard-trigger+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.bcast.sprov+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.bcast.stkm": {
            source: "iana"
        },
        "application/vnd.oma.cab-address-book+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.cab-feature-handler+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.cab-pcc+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.cab-subs-invite+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.cab-user-prefs+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.dcd": {
            source: "iana"
        },
        "application/vnd.oma.dcdc": {
            source: "iana"
        },
        "application/vnd.oma.dd2+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["dd2"]
        },
        "application/vnd.oma.drm.risd+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.group-usage-list+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.lwm2m+cbor": {
            source: "iana"
        },
        "application/vnd.oma.lwm2m+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.lwm2m+tlv": {
            source: "iana"
        },
        "application/vnd.oma.pal+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.poc.detailed-progress-report+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.poc.final-report+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.poc.groups+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.poc.invocation-descriptor+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.poc.optimized-progress-report+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.push": {
            source: "iana"
        },
        "application/vnd.oma.scidm.messages+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oma.xcap-directory+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.omads-email+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0
        },
        "application/vnd.omads-file+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0
        },
        "application/vnd.omads-folder+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0
        },
        "application/vnd.omaloc-supl-init": {
            source: "iana"
        },
        "application/vnd.onepager": {
            source: "iana"
        },
        "application/vnd.onepagertamp": {
            source: "iana"
        },
        "application/vnd.onepagertamx": {
            source: "iana"
        },
        "application/vnd.onepagertat": {
            source: "iana"
        },
        "application/vnd.onepagertatp": {
            source: "iana"
        },
        "application/vnd.onepagertatx": {
            source: "iana"
        },
        "application/vnd.openblox.game+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["obgx"]
        },
        "application/vnd.openblox.game-binary": {
            source: "iana"
        },
        "application/vnd.openeye.oeb": {
            source: "iana"
        },
        "application/vnd.openofficeorg.extension": {
            source: "apache",
            extensions: ["oxt"]
        },
        "application/vnd.openstreetmap.data+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["osm"]
        },
        "application/vnd.opentimestamps.ots": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.drawing+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
            source: "iana",
            compressible: !1,
            extensions: ["pptx"]
        },
        "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.presentationml.slide": {
            source: "iana",
            extensions: ["sldx"]
        },
        "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
            source: "iana",
            extensions: ["ppsx"]
        },
        "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.presentationml.template": {
            source: "iana",
            extensions: ["potx"]
        },
        "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
            source: "iana",
            compressible: !1,
            extensions: ["xlsx"]
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
            source: "iana",
            extensions: ["xltx"]
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.theme+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.vmldrawing": {
            source: "iana"
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
            source: "iana",
            compressible: !1,
            extensions: ["docx"]
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
            source: "iana",
            extensions: ["dotx"]
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-package.core-properties+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.openxmlformats-package.relationships+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oracle.resource+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.orange.indata": {
            source: "iana"
        },
        "application/vnd.osa.netdeploy": {
            source: "iana"
        },
        "application/vnd.osgeo.mapguide.package": {
            source: "iana",
            extensions: ["mgp"]
        },
        "application/vnd.osgi.bundle": {
            source: "iana"
        },
        "application/vnd.osgi.dp": {
            source: "iana",
            extensions: ["dp"]
        },
        "application/vnd.osgi.subsystem": {
            source: "iana",
            extensions: ["esa"]
        },
        "application/vnd.otps.ct-kip+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.oxli.countgraph": {
            source: "iana"
        },
        "application/vnd.pagerduty+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.palm": {
            source: "iana",
            extensions: ["pdb", "pqa", "oprc"]
        },
        "application/vnd.panoply": {
            source: "iana"
        },
        "application/vnd.paos.xml": {
            source: "iana"
        },
        "application/vnd.patentdive": {
            source: "iana"
        },
        "application/vnd.patientecommsdoc": {
            source: "iana"
        },
        "application/vnd.pawaafile": {
            source: "iana",
            extensions: ["paw"]
        },
        "application/vnd.pcos": {
            source: "iana"
        },
        "application/vnd.pg.format": {
            source: "iana",
            extensions: ["str"]
        },
        "application/vnd.pg.osasli": {
            source: "iana",
            extensions: ["ei6"]
        },
        "application/vnd.piaccess.application-licence": {
            source: "iana"
        },
        "application/vnd.picsel": {
            source: "iana",
            extensions: ["efif"]
        },
        "application/vnd.pmi.widget": {
            source: "iana",
            extensions: ["wg"]
        },
        "application/vnd.poc.group-advertisement+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.pocketlearn": {
            source: "iana",
            extensions: ["plf"]
        },
        "application/vnd.powerbuilder6": {
            source: "iana",
            extensions: ["pbd"]
        },
        "application/vnd.powerbuilder6-s": {
            source: "iana"
        },
        "application/vnd.powerbuilder7": {
            source: "iana"
        },
        "application/vnd.powerbuilder7-s": {
            source: "iana"
        },
        "application/vnd.powerbuilder75": {
            source: "iana"
        },
        "application/vnd.powerbuilder75-s": {
            source: "iana"
        },
        "application/vnd.preminet": {
            source: "iana"
        },
        "application/vnd.previewsystems.box": {
            source: "iana",
            extensions: ["box"]
        },
        "application/vnd.proteus.magazine": {
            source: "iana",
            extensions: ["mgz"]
        },
        "application/vnd.psfs": {
            source: "iana"
        },
        "application/vnd.publishare-delta-tree": {
            source: "iana",
            extensions: ["qps"]
        },
        "application/vnd.pvi.ptid1": {
            source: "iana",
            extensions: ["ptid"]
        },
        "application/vnd.pwg-multiplexed": {
            source: "iana"
        },
        "application/vnd.pwg-xhtml-print+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.qualcomm.brew-app-res": {
            source: "iana"
        },
        "application/vnd.quarantainenet": {
            source: "iana"
        },
        "application/vnd.quark.quarkxpress": {
            source: "iana",
            extensions: ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"]
        },
        "application/vnd.quobject-quoxdocument": {
            source: "iana"
        },
        "application/vnd.radisys.moml+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.radisys.msml+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.radisys.msml-audit+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.radisys.msml-audit-conf+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.radisys.msml-audit-conn+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.radisys.msml-audit-dialog+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.radisys.msml-audit-stream+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.radisys.msml-conf+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.radisys.msml-dialog+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.radisys.msml-dialog-base+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.radisys.msml-dialog-fax-detect+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.radisys.msml-dialog-group+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.radisys.msml-dialog-speech+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.radisys.msml-dialog-transform+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.rainstor.data": {
            source: "iana"
        },
        "application/vnd.rapid": {
            source: "iana"
        },
        "application/vnd.rar": {
            source: "iana",
            extensions: ["rar"]
        },
        "application/vnd.realvnc.bed": {
            source: "iana",
            extensions: ["bed"]
        },
        "application/vnd.recordare.musicxml": {
            source: "iana",
            extensions: ["mxl"]
        },
        "application/vnd.recordare.musicxml+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["musicxml"]
        },
        "application/vnd.renlearn.rlprint": {
            source: "iana"
        },
        "application/vnd.resilient.logic": {
            source: "iana"
        },
        "application/vnd.restful+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.rig.cryptonote": {
            source: "iana",
            extensions: ["cryptonote"]
        },
        "application/vnd.rim.cod": {
            source: "apache",
            extensions: ["cod"]
        },
        "application/vnd.rn-realmedia": {
            source: "apache",
            extensions: ["rm"]
        },
        "application/vnd.rn-realmedia-vbr": {
            source: "apache",
            extensions: ["rmvb"]
        },
        "application/vnd.route66.link66+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["link66"]
        },
        "application/vnd.rs-274x": {
            source: "iana"
        },
        "application/vnd.ruckus.download": {
            source: "iana"
        },
        "application/vnd.s3sms": {
            source: "iana"
        },
        "application/vnd.sailingtracker.track": {
            source: "iana",
            extensions: ["st"]
        },
        "application/vnd.sar": {
            source: "iana"
        },
        "application/vnd.sbm.cid": {
            source: "iana"
        },
        "application/vnd.sbm.mid2": {
            source: "iana"
        },
        "application/vnd.scribus": {
            source: "iana"
        },
        "application/vnd.sealed.3df": {
            source: "iana"
        },
        "application/vnd.sealed.csf": {
            source: "iana"
        },
        "application/vnd.sealed.doc": {
            source: "iana"
        },
        "application/vnd.sealed.eml": {
            source: "iana"
        },
        "application/vnd.sealed.mht": {
            source: "iana"
        },
        "application/vnd.sealed.net": {
            source: "iana"
        },
        "application/vnd.sealed.ppt": {
            source: "iana"
        },
        "application/vnd.sealed.tiff": {
            source: "iana"
        },
        "application/vnd.sealed.xls": {
            source: "iana"
        },
        "application/vnd.sealedmedia.softseal.html": {
            source: "iana"
        },
        "application/vnd.sealedmedia.softseal.pdf": {
            source: "iana"
        },
        "application/vnd.seemail": {
            source: "iana",
            extensions: ["see"]
        },
        "application/vnd.seis+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.sema": {
            source: "iana",
            extensions: ["sema"]
        },
        "application/vnd.semd": {
            source: "iana",
            extensions: ["semd"]
        },
        "application/vnd.semf": {
            source: "iana",
            extensions: ["semf"]
        },
        "application/vnd.shade-save-file": {
            source: "iana"
        },
        "application/vnd.shana.informed.formdata": {
            source: "iana",
            extensions: ["ifm"]
        },
        "application/vnd.shana.informed.formtemplate": {
            source: "iana",
            extensions: ["itp"]
        },
        "application/vnd.shana.informed.interchange": {
            source: "iana",
            extensions: ["iif"]
        },
        "application/vnd.shana.informed.package": {
            source: "iana",
            extensions: ["ipk"]
        },
        "application/vnd.shootproof+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.shopkick+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.shp": {
            source: "iana"
        },
        "application/vnd.shx": {
            source: "iana"
        },
        "application/vnd.sigrok.session": {
            source: "iana"
        },
        "application/vnd.simtech-mindmapper": {
            source: "iana",
            extensions: ["twd", "twds"]
        },
        "application/vnd.siren+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.smaf": {
            source: "iana",
            extensions: ["mmf"]
        },
        "application/vnd.smart.notebook": {
            source: "iana"
        },
        "application/vnd.smart.teacher": {
            source: "iana",
            extensions: ["teacher"]
        },
        "application/vnd.snesdev-page-table": {
            source: "iana"
        },
        "application/vnd.software602.filler.form+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["fo"]
        },
        "application/vnd.software602.filler.form-xml-zip": {
            source: "iana"
        },
        "application/vnd.solent.sdkm+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["sdkm", "sdkd"]
        },
        "application/vnd.spotfire.dxp": {
            source: "iana",
            extensions: ["dxp"]
        },
        "application/vnd.spotfire.sfs": {
            source: "iana",
            extensions: ["sfs"]
        },
        "application/vnd.sqlite3": {
            source: "iana"
        },
        "application/vnd.sss-cod": {
            source: "iana"
        },
        "application/vnd.sss-dtf": {
            source: "iana"
        },
        "application/vnd.sss-ntf": {
            source: "iana"
        },
        "application/vnd.stardivision.calc": {
            source: "apache",
            extensions: ["sdc"]
        },
        "application/vnd.stardivision.draw": {
            source: "apache",
            extensions: ["sda"]
        },
        "application/vnd.stardivision.impress": {
            source: "apache",
            extensions: ["sdd"]
        },
        "application/vnd.stardivision.math": {
            source: "apache",
            extensions: ["smf"]
        },
        "application/vnd.stardivision.writer": {
            source: "apache",
            extensions: ["sdw", "vor"]
        },
        "application/vnd.stardivision.writer-global": {
            source: "apache",
            extensions: ["sgl"]
        },
        "application/vnd.stepmania.package": {
            source: "iana",
            extensions: ["smzip"]
        },
        "application/vnd.stepmania.stepchart": {
            source: "iana",
            extensions: ["sm"]
        },
        "application/vnd.street-stream": {
            source: "iana"
        },
        "application/vnd.sun.wadl+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["wadl"]
        },
        "application/vnd.sun.xml.calc": {
            source: "apache",
            extensions: ["sxc"]
        },
        "application/vnd.sun.xml.calc.template": {
            source: "apache",
            extensions: ["stc"]
        },
        "application/vnd.sun.xml.draw": {
            source: "apache",
            extensions: ["sxd"]
        },
        "application/vnd.sun.xml.draw.template": {
            source: "apache",
            extensions: ["std"]
        },
        "application/vnd.sun.xml.impress": {
            source: "apache",
            extensions: ["sxi"]
        },
        "application/vnd.sun.xml.impress.template": {
            source: "apache",
            extensions: ["sti"]
        },
        "application/vnd.sun.xml.math": {
            source: "apache",
            extensions: ["sxm"]
        },
        "application/vnd.sun.xml.writer": {
            source: "apache",
            extensions: ["sxw"]
        },
        "application/vnd.sun.xml.writer.global": {
            source: "apache",
            extensions: ["sxg"]
        },
        "application/vnd.sun.xml.writer.template": {
            source: "apache",
            extensions: ["stw"]
        },
        "application/vnd.sus-calendar": {
            source: "iana",
            extensions: ["sus", "susp"]
        },
        "application/vnd.svd": {
            source: "iana",
            extensions: ["svd"]
        },
        "application/vnd.swiftview-ics": {
            source: "iana"
        },
        "application/vnd.sycle+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.syft+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.symbian.install": {
            source: "apache",
            extensions: ["sis", "sisx"]
        },
        "application/vnd.syncml+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0,
            extensions: ["xsm"]
        },
        "application/vnd.syncml.dm+wbxml": {
            source: "iana",
            charset: "UTF-8",
            extensions: ["bdm"]
        },
        "application/vnd.syncml.dm+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0,
            extensions: ["xdm"]
        },
        "application/vnd.syncml.dm.notification": {
            source: "iana"
        },
        "application/vnd.syncml.dmddf+wbxml": {
            source: "iana"
        },
        "application/vnd.syncml.dmddf+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0,
            extensions: ["ddf"]
        },
        "application/vnd.syncml.dmtnds+wbxml": {
            source: "iana"
        },
        "application/vnd.syncml.dmtnds+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0
        },
        "application/vnd.syncml.ds.notification": {
            source: "iana"
        },
        "application/vnd.tableschema+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.tao.intent-module-archive": {
            source: "iana",
            extensions: ["tao"]
        },
        "application/vnd.tcpdump.pcap": {
            source: "iana",
            extensions: ["pcap", "cap", "dmp"]
        },
        "application/vnd.think-cell.ppttc+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.tmd.mediaflex.api+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.tml": {
            source: "iana"
        },
        "application/vnd.tmobile-livetv": {
            source: "iana",
            extensions: ["tmo"]
        },
        "application/vnd.tri.onesource": {
            source: "iana"
        },
        "application/vnd.trid.tpt": {
            source: "iana",
            extensions: ["tpt"]
        },
        "application/vnd.triscape.mxs": {
            source: "iana",
            extensions: ["mxs"]
        },
        "application/vnd.trueapp": {
            source: "iana",
            extensions: ["tra"]
        },
        "application/vnd.truedoc": {
            source: "iana"
        },
        "application/vnd.ubisoft.webplayer": {
            source: "iana"
        },
        "application/vnd.ufdl": {
            source: "iana",
            extensions: ["ufd", "ufdl"]
        },
        "application/vnd.uiq.theme": {
            source: "iana",
            extensions: ["utz"]
        },
        "application/vnd.umajin": {
            source: "iana",
            extensions: ["umj"]
        },
        "application/vnd.unity": {
            source: "iana",
            extensions: ["unityweb"]
        },
        "application/vnd.uoml+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["uoml"]
        },
        "application/vnd.uplanet.alert": {
            source: "iana"
        },
        "application/vnd.uplanet.alert-wbxml": {
            source: "iana"
        },
        "application/vnd.uplanet.bearer-choice": {
            source: "iana"
        },
        "application/vnd.uplanet.bearer-choice-wbxml": {
            source: "iana"
        },
        "application/vnd.uplanet.cacheop": {
            source: "iana"
        },
        "application/vnd.uplanet.cacheop-wbxml": {
            source: "iana"
        },
        "application/vnd.uplanet.channel": {
            source: "iana"
        },
        "application/vnd.uplanet.channel-wbxml": {
            source: "iana"
        },
        "application/vnd.uplanet.list": {
            source: "iana"
        },
        "application/vnd.uplanet.list-wbxml": {
            source: "iana"
        },
        "application/vnd.uplanet.listcmd": {
            source: "iana"
        },
        "application/vnd.uplanet.listcmd-wbxml": {
            source: "iana"
        },
        "application/vnd.uplanet.signal": {
            source: "iana"
        },
        "application/vnd.uri-map": {
            source: "iana"
        },
        "application/vnd.valve.source.material": {
            source: "iana"
        },
        "application/vnd.vcx": {
            source: "iana",
            extensions: ["vcx"]
        },
        "application/vnd.vd-study": {
            source: "iana"
        },
        "application/vnd.vectorworks": {
            source: "iana"
        },
        "application/vnd.vel+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.verimatrix.vcas": {
            source: "iana"
        },
        "application/vnd.veritone.aion+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.veryant.thin": {
            source: "iana"
        },
        "application/vnd.ves.encrypted": {
            source: "iana"
        },
        "application/vnd.vidsoft.vidconference": {
            source: "iana"
        },
        "application/vnd.visio": {
            source: "iana",
            extensions: ["vsd", "vst", "vss", "vsw"]
        },
        "application/vnd.visionary": {
            source: "iana",
            extensions: ["vis"]
        },
        "application/vnd.vividence.scriptfile": {
            source: "iana"
        },
        "application/vnd.vsf": {
            source: "iana",
            extensions: ["vsf"]
        },
        "application/vnd.wap.sic": {
            source: "iana"
        },
        "application/vnd.wap.slc": {
            source: "iana"
        },
        "application/vnd.wap.wbxml": {
            source: "iana",
            charset: "UTF-8",
            extensions: ["wbxml"]
        },
        "application/vnd.wap.wmlc": {
            source: "iana",
            extensions: ["wmlc"]
        },
        "application/vnd.wap.wmlscriptc": {
            source: "iana",
            extensions: ["wmlsc"]
        },
        "application/vnd.webturbo": {
            source: "iana",
            extensions: ["wtb"]
        },
        "application/vnd.wfa.dpp": {
            source: "iana"
        },
        "application/vnd.wfa.p2p": {
            source: "iana"
        },
        "application/vnd.wfa.wsc": {
            source: "iana"
        },
        "application/vnd.windows.devicepairing": {
            source: "iana"
        },
        "application/vnd.wmc": {
            source: "iana"
        },
        "application/vnd.wmf.bootstrap": {
            source: "iana"
        },
        "application/vnd.wolfram.mathematica": {
            source: "iana"
        },
        "application/vnd.wolfram.mathematica.package": {
            source: "iana"
        },
        "application/vnd.wolfram.player": {
            source: "iana",
            extensions: ["nbp"]
        },
        "application/vnd.wordperfect": {
            source: "iana",
            extensions: ["wpd"]
        },
        "application/vnd.wqd": {
            source: "iana",
            extensions: ["wqd"]
        },
        "application/vnd.wrq-hp3000-labelled": {
            source: "iana"
        },
        "application/vnd.wt.stf": {
            source: "iana",
            extensions: ["stf"]
        },
        "application/vnd.wv.csp+wbxml": {
            source: "iana"
        },
        "application/vnd.wv.csp+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.wv.ssp+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.xacml+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.xara": {
            source: "iana",
            extensions: ["xar"]
        },
        "application/vnd.xfdl": {
            source: "iana",
            extensions: ["xfdl"]
        },
        "application/vnd.xfdl.webform": {
            source: "iana"
        },
        "application/vnd.xmi+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.xmpie.cpkg": {
            source: "iana"
        },
        "application/vnd.xmpie.dpkg": {
            source: "iana"
        },
        "application/vnd.xmpie.plan": {
            source: "iana"
        },
        "application/vnd.xmpie.ppkg": {
            source: "iana"
        },
        "application/vnd.xmpie.xlim": {
            source: "iana"
        },
        "application/vnd.yamaha.hv-dic": {
            source: "iana",
            extensions: ["hvd"]
        },
        "application/vnd.yamaha.hv-script": {
            source: "iana",
            extensions: ["hvs"]
        },
        "application/vnd.yamaha.hv-voice": {
            source: "iana",
            extensions: ["hvp"]
        },
        "application/vnd.yamaha.openscoreformat": {
            source: "iana",
            extensions: ["osf"]
        },
        "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["osfpvg"]
        },
        "application/vnd.yamaha.remote-setup": {
            source: "iana"
        },
        "application/vnd.yamaha.smaf-audio": {
            source: "iana",
            extensions: ["saf"]
        },
        "application/vnd.yamaha.smaf-phrase": {
            source: "iana",
            extensions: ["spf"]
        },
        "application/vnd.yamaha.through-ngn": {
            source: "iana"
        },
        "application/vnd.yamaha.tunnel-udpencap": {
            source: "iana"
        },
        "application/vnd.yaoweme": {
            source: "iana"
        },
        "application/vnd.yellowriver-custom-menu": {
            source: "iana",
            extensions: ["cmp"]
        },
        "application/vnd.youtube.yt": {
            source: "iana"
        },
        "application/vnd.zul": {
            source: "iana",
            extensions: ["zir", "zirz"]
        },
        "application/vnd.zzazz.deck+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["zaz"]
        },
        "application/voicexml+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["vxml"]
        },
        "application/voucher-cms+json": {
            source: "iana",
            compressible: !0
        },
        "application/vq-rtcpxr": {
            source: "iana"
        },
        "application/wasm": {
            source: "iana",
            compressible: !0,
            extensions: ["wasm"]
        },
        "application/watcherinfo+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["wif"]
        },
        "application/webpush-options+json": {
            source: "iana",
            compressible: !0
        },
        "application/whoispp-query": {
            source: "iana"
        },
        "application/whoispp-response": {
            source: "iana"
        },