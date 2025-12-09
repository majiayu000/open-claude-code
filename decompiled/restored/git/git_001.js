/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: git_001.js
 * 处理时间: 2025-12-09T03:37:24.604Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 1/34
 * Lines: 5996 - 7492 (1497 lines)
 * Original file: cli.js
 */

        "application/vnd.dvb.notif-aggregate-root+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.dvb.notif-container+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.dvb.notif-generic+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.dvb.notif-ia-msglist+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.dvb.notif-ia-registration-request+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.dvb.notif-ia-registration-response+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.dvb.notif-init+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.dvb.pfr": {
            source: "iana"
        },
        "application/vnd.dvb.service": {
            source: "iana",
            extensions: ["svc"]
        },
        "application/vnd.dxr": {
            source: "iana"
        },
        "application/vnd.dynageo": {
            source: "iana",
            extensions: ["geo"]
        },
        "application/vnd.dzr": {
            source: "iana"
        },
        "application/vnd.easykaraoke.cdgdownload": {
            source: "iana"
        },
        "application/vnd.ecdis-update": {
            source: "iana"
        },
        "application/vnd.ecip.rlp": {
            source: "iana"
        },
        "application/vnd.eclipse.ditto+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.ecowin.chart": {
            source: "iana",
            extensions: ["mag"]
        },
        "application/vnd.ecowin.filerequest": {
            source: "iana"
        },
        "application/vnd.ecowin.fileupdate": {
            source: "iana"
        },
        "application/vnd.ecowin.series": {
            source: "iana"
        },
        "application/vnd.ecowin.seriesrequest": {
            source: "iana"
        },
        "application/vnd.ecowin.seriesupdate": {
            source: "iana"
        },
        "application/vnd.efi.img": {
            source: "iana"
        },
        "application/vnd.efi.iso": {
            source: "iana"
        },
        "application/vnd.emclient.accessrequest+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.enliven": {
            source: "iana",
            extensions: ["nml"]
        },
        "application/vnd.enphase.envoy": {
            source: "iana"
        },
        "application/vnd.eprints.data+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.epson.esf": {
            source: "iana",
            extensions: ["esf"]
        },
        "application/vnd.epson.msf": {
            source: "iana",
            extensions: ["msf"]
        },
        "application/vnd.epson.quickanime": {
            source: "iana",
            extensions: ["qam"]
        },
        "application/vnd.epson.salt": {
            source: "iana",
            extensions: ["slt"]
        },
        "application/vnd.epson.ssf": {
            source: "iana",
            extensions: ["ssf"]
        },
        "application/vnd.ericsson.quickcall": {
            source: "iana"
        },
        "application/vnd.espass-espass+zip": {
            source: "iana",
            compressible: !1
        },
        "application/vnd.eszigno3+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["es3", "et3"]
        },
        "application/vnd.etsi.aoc+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.etsi.asic-e+zip": {
            source: "iana",
            compressible: !1
        },
        "application/vnd.etsi.asic-s+zip": {
            source: "iana",
            compressible: !1
        },
        "application/vnd.etsi.cug+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.etsi.iptvcommand+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.etsi.iptvdiscovery+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.etsi.iptvprofile+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.etsi.iptvsad-bc+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.etsi.iptvsad-cod+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.etsi.iptvsad-npvr+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.etsi.iptvservice+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.etsi.iptvsync+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.etsi.iptvueprofile+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.etsi.mcid+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.etsi.mheg5": {
            source: "iana"
        },
        "application/vnd.etsi.overload-control-policy-dataset+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.etsi.pstn+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.etsi.sci+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.etsi.simservs+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.etsi.timestamp-token": {
            source: "iana"
        },
        "application/vnd.etsi.tsl+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.etsi.tsl.der": {
            source: "iana"
        },
        "application/vnd.eu.kasparian.car+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.eudora.data": {
            source: "iana"
        },
        "application/vnd.evolv.ecig.profile": {
            source: "iana"
        },
        "application/vnd.evolv.ecig.settings": {
            source: "iana"
        },
        "application/vnd.evolv.ecig.theme": {
            source: "iana"
        },
        "application/vnd.exstream-empower+zip": {
            source: "iana",
            compressible: !1
        },
        "application/vnd.exstream-package": {
            source: "iana"
        },
        "application/vnd.ezpix-album": {
            source: "iana",
            extensions: ["ez2"]
        },
        "application/vnd.ezpix-package": {
            source: "iana",
            extensions: ["ez3"]
        },
        "application/vnd.f-secure.mobile": {
            source: "iana"
        },
        "application/vnd.familysearch.gedcom+zip": {
            source: "iana",
            compressible: !1
        },
        "application/vnd.fastcopy-disk-image": {
            source: "iana"
        },
        "application/vnd.fdf": {
            source: "iana",
            extensions: ["fdf"]
        },
        "application/vnd.fdsn.mseed": {
            source: "iana",
            extensions: ["mseed"]
        },
        "application/vnd.fdsn.seed": {
            source: "iana",
            extensions: ["seed", "dataless"]
        },
        "application/vnd.ffsns": {
            source: "iana"
        },
        "application/vnd.ficlab.flb+zip": {
            source: "iana",
            compressible: !1
        },
        "application/vnd.filmit.zfc": {
            source: "iana"
        },
        "application/vnd.fints": {
            source: "iana"
        },
        "application/vnd.firemonkeys.cloudcell": {
            source: "iana"
        },
        "application/vnd.flographit": {
            source: "iana",
            extensions: ["gph"]
        },
        "application/vnd.fluxtime.clip": {
            source: "iana",
            extensions: ["ftc"]
        },
        "application/vnd.font-fontforge-sfd": {
            source: "iana"
        },
        "application/vnd.framemaker": {
            source: "iana",
            extensions: ["fm", "frame", "maker", "book"]
        },
        "application/vnd.frogans.fnc": {
            source: "iana",
            extensions: ["fnc"]
        },
        "application/vnd.frogans.ltf": {
            source: "iana",
            extensions: ["ltf"]
        },
        "application/vnd.fsc.weblaunch": {
            source: "iana",
            extensions: ["fsc"]
        },
        "application/vnd.fujifilm.fb.docuworks": {
            source: "iana"
        },
        "application/vnd.fujifilm.fb.docuworks.binder": {
            source: "iana"
        },
        "application/vnd.fujifilm.fb.docuworks.container": {
            source: "iana"
        },
        "application/vnd.fujifilm.fb.jfi+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.fujitsu.oasys": {
            source: "iana",
            extensions: ["oas"]
        },
        "application/vnd.fujitsu.oasys2": {
            source: "iana",
            extensions: ["oa2"]
        },
        "application/vnd.fujitsu.oasys3": {
            source: "iana",
            extensions: ["oa3"]
        },
        "application/vnd.fujitsu.oasysgp": {
            source: "iana",
            extensions: ["fg5"]
        },
        "application/vnd.fujitsu.oasysprs": {
            source: "iana",
            extensions: ["bh2"]
        },
        "application/vnd.fujixerox.art-ex": {
            source: "iana"
        },
        "application/vnd.fujixerox.art4": {
            source: "iana"
        },
        "application/vnd.fujixerox.ddd": {
            source: "iana",
            extensions: ["ddd"]
        },
        "application/vnd.fujixerox.docuworks": {
            source: "iana",
            extensions: ["xdw"]
        },
        "application/vnd.fujixerox.docuworks.binder": {
            source: "iana",
            extensions: ["xbd"]
        },
        "application/vnd.fujixerox.docuworks.container": {
            source: "iana"
        },
        "application/vnd.fujixerox.hbpl": {
            source: "iana"
        },
        "application/vnd.fut-misnet": {
            source: "iana"
        },
        "application/vnd.futoin+cbor": {
            source: "iana"
        },
        "application/vnd.futoin+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.fuzzysheet": {
            source: "iana",
            extensions: ["fzs"]
        },
        "application/vnd.genomatix.tuxedo": {
            source: "iana",
            extensions: ["txd"]
        },
        "application/vnd.gentics.grd+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.geo+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.geocube+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.geogebra.file": {
            source: "iana",
            extensions: ["ggb"]
        },
        "application/vnd.geogebra.slides": {
            source: "iana"
        },
        "application/vnd.geogebra.tool": {
            source: "iana",
            extensions: ["ggt"]
        },
        "application/vnd.geometry-explorer": {
            source: "iana",
            extensions: ["gex", "gre"]
        },
        "application/vnd.geonext": {
            source: "iana",
            extensions: ["gxt"]
        },
        "application/vnd.geoplan": {
            source: "iana",
            extensions: ["g2w"]
        },
        "application/vnd.geospace": {
            source: "iana",
            extensions: ["g3w"]
        },
        "application/vnd.gerber": {
            source: "iana"
        },
        "application/vnd.globalplatform.card-content-mgt": {
            source: "iana"
        },
        "application/vnd.globalplatform.card-content-mgt-response": {
            source: "iana"
        },
        "application/vnd.gmx": {
            source: "iana",
            extensions: ["gmx"]
        },
        "application/vnd.google-apps.document": {
            compressible: !1,
            extensions: ["gdoc"]
        },
        "application/vnd.google-apps.presentation": {
            compressible: !1,
            extensions: ["gslides"]
        },
        "application/vnd.google-apps.spreadsheet": {
            compressible: !1,
            extensions: ["gsheet"]
        },
        "application/vnd.google-earth.kml+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["kml"]
        },
        "application/vnd.google-earth.kmz": {
            source: "iana",
            compressible: !1,
            extensions: ["kmz"]
        },
        "application/vnd.gov.sk.e-form+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.gov.sk.e-form+zip": {
            source: "iana",
            compressible: !1
        },
        "application/vnd.gov.sk.xmldatacontainer+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.grafeq": {
            source: "iana",
            extensions: ["gqf", "gqs"]
        },
        "application/vnd.gridmp": {
            source: "iana"
        },
        "application/vnd.groove-account": {
            source: "iana",
            extensions: ["gac"]
        },
        "application/vnd.groove-help": {
            source: "iana",
            extensions: ["ghf"]
        },
        "application/vnd.groove-identity-message": {
            source: "iana",
            extensions: ["gim"]
        },
        "application/vnd.groove-injector": {
            source: "iana",
            extensions: ["grv"]
        },
        "application/vnd.groove-tool-message": {
            source: "iana",
            extensions: ["gtm"]
        },
        "application/vnd.groove-tool-template": {
            source: "iana",
            extensions: ["tpl"]
        },
        "application/vnd.groove-vcard": {
            source: "iana",
            extensions: ["vcg"]
        },
        "application/vnd.hal+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.hal+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["hal"]
        },
        "application/vnd.handheld-entertainment+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["zmm"]
        },
        "application/vnd.hbci": {
            source: "iana",
            extensions: ["hbci"]
        },
        "application/vnd.hc+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.hcl-bireports": {
            source: "iana"
        },
        "application/vnd.hdt": {
            source: "iana"
        },
        "application/vnd.heroku+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.hhe.lesson-player": {
            source: "iana",
            extensions: ["les"]
        },
        "application/vnd.hl7cda+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0
        },
        "application/vnd.hl7v2+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0
        },
        "application/vnd.hp-hpgl": {
            source: "iana",
            extensions: ["hpgl"]
        },
        "application/vnd.hp-hpid": {
            source: "iana",
            extensions: ["hpid"]
        },
        "application/vnd.hp-hps": {
            source: "iana",
            extensions: ["hps"]
        },
        "application/vnd.hp-jlyt": {
            source: "iana",
            extensions: ["jlt"]
        },
        "application/vnd.hp-pcl": {
            source: "iana",
            extensions: ["pcl"]
        },
        "application/vnd.hp-pclxl": {
            source: "iana",
            extensions: ["pclxl"]
        },
        "application/vnd.httphone": {
            source: "iana"
        },
        "application/vnd.hydrostatix.sof-data": {
            source: "iana",
            extensions: ["sfd-hdstx"]
        },
        "application/vnd.hyper+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.hyper-item+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.hyperdrive+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.hzn-3d-crossword": {
            source: "iana"
        },
        "application/vnd.ibm.afplinedata": {
            source: "iana"
        },
        "application/vnd.ibm.electronic-media": {
            source: "iana"
        },
        "application/vnd.ibm.minipay": {
            source: "iana",
            extensions: ["mpy"]
        },
        "application/vnd.ibm.modcap": {
            source: "iana",
            extensions: ["afp", "listafp", "list3820"]
        },
        "application/vnd.ibm.rights-management": {
            source: "iana",
            extensions: ["irm"]
        },
        "application/vnd.ibm.secure-container": {
            source: "iana",
            extensions: ["sc"]
        },
        "application/vnd.iccprofile": {
            source: "iana",
            extensions: ["icc", "icm"]
        },
        "application/vnd.ieee.1905": {
            source: "iana"
        },
        "application/vnd.igloader": {
            source: "iana",
            extensions: ["igl"]
        },
        "application/vnd.imagemeter.folder+zip": {
            source: "iana",
            compressible: !1
        },
        "application/vnd.imagemeter.image+zip": {
            source: "iana",
            compressible: !1
        },
        "application/vnd.immervision-ivp": {
            source: "iana",
            extensions: ["ivp"]
        },
        "application/vnd.immervision-ivu": {
            source: "iana",
            extensions: ["ivu"]
        },
        "application/vnd.ims.imsccv1p1": {
            source: "iana"
        },
        "application/vnd.ims.imsccv1p2": {
            source: "iana"
        },
        "application/vnd.ims.imsccv1p3": {
            source: "iana"
        },
        "application/vnd.ims.lis.v2.result+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.ims.lti.v2.toolconsumerprofile+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.ims.lti.v2.toolproxy+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.ims.lti.v2.toolproxy.id+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.ims.lti.v2.toolsettings+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.ims.lti.v2.toolsettings.simple+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.informedcontrol.rms+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.informix-visionary": {
            source: "iana"
        },
        "application/vnd.infotech.project": {
            source: "iana"
        },
        "application/vnd.infotech.project+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.innopath.wamp.notification": {
            source: "iana"
        },
        "application/vnd.insors.igm": {
            source: "iana",
            extensions: ["igm"]
        },
        "application/vnd.intercon.formnet": {
            source: "iana",
            extensions: ["xpw", "xpx"]
        },
        "application/vnd.intergeo": {
            source: "iana",
            extensions: ["i2g"]
        },
        "application/vnd.intertrust.digibox": {
            source: "iana"
        },
        "application/vnd.intertrust.nncp": {
            source: "iana"
        },
        "application/vnd.intu.qbo": {
            source: "iana",
            extensions: ["qbo"]
        },
        "application/vnd.intu.qfx": {
            source: "iana",
            extensions: ["qfx"]
        },
        "application/vnd.iptc.g2.catalogitem+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.iptc.g2.conceptitem+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.iptc.g2.knowledgeitem+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.iptc.g2.newsitem+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.iptc.g2.newsmessage+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.iptc.g2.packageitem+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.iptc.g2.planningitem+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.ipunplugged.rcprofile": {
            source: "iana",
            extensions: ["rcprofile"]
        },
        "application/vnd.irepository.package+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["irp"]
        },
        "application/vnd.is-xpr": {
            source: "iana",
            extensions: ["xpr"]
        },
        "application/vnd.isac.fcs": {
            source: "iana",
            extensions: ["fcs"]
        },
        "application/vnd.iso11783-10+zip": {
            source: "iana",
            compressible: !1
        },
        "application/vnd.jam": {
            source: "iana",
            extensions: ["jam"]
        },
        "application/vnd.japannet-directory-service": {
            source: "iana"
        },
        "application/vnd.japannet-jpnstore-wakeup": {
            source: "iana"
        },
        "application/vnd.japannet-payment-wakeup": {
            source: "iana"
        },
        "application/vnd.japannet-registration": {
            source: "iana"
        },
        "application/vnd.japannet-registration-wakeup": {
            source: "iana"
        },
        "application/vnd.japannet-setstore-wakeup": {
            source: "iana"
        },
        "application/vnd.japannet-verification": {
            source: "iana"
        },
        "application/vnd.japannet-verification-wakeup": {
            source: "iana"
        },
        "application/vnd.jcp.javame.midlet-rms": {
            source: "iana",
            extensions: ["rms"]
        },
        "application/vnd.jisp": {
            source: "iana",
            extensions: ["jisp"]
        },
        "application/vnd.joost.joda-archive": {
            source: "iana",
            extensions: ["joda"]
        },
        "application/vnd.jsk.isdn-ngn": {
            source: "iana"
        },
        "application/vnd.kahootz": {
            source: "iana",
            extensions: ["ktz", "ktr"]
        },
        "application/vnd.kde.karbon": {
            source: "iana",
            extensions: ["karbon"]
        },
        "application/vnd.kde.kchart": {
            source: "iana",
            extensions: ["chrt"]
        },
        "application/vnd.kde.kformula": {
            source: "iana",
            extensions: ["kfo"]
        },
        "application/vnd.kde.kivio": {
            source: "iana",
            extensions: ["flw"]
        },
        "application/vnd.kde.kontour": {
            source: "iana",
            extensions: ["kon"]
        },
        "application/vnd.kde.kpresenter": {
            source: "iana",
            extensions: ["kpr", "kpt"]
        },
        "application/vnd.kde.kspread": {
            source: "iana",
            extensions: ["ksp"]
        },
        "application/vnd.kde.kword": {
            source: "iana",
            extensions: ["kwd", "kwt"]
        },
        "application/vnd.kenameaapp": {
            source: "iana",
            extensions: ["htke"]
        },
        "application/vnd.kidspiration": {
            source: "iana",
            extensions: ["kia"]
        },
        "application/vnd.kinar": {
            source: "iana",
            extensions: ["kne", "knp"]
        },
        "application/vnd.koan": {
            source: "iana",
            extensions: ["skp", "skd", "skt", "skm"]
        },
        "application/vnd.kodak-descriptor": {
            source: "iana",
            extensions: ["sse"]
        },
        "application/vnd.las": {
            source: "iana"
        },
        "application/vnd.las.las+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.las.las+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["lasxml"]
        },
        "application/vnd.laszip": {
            source: "iana"
        },
        "application/vnd.leap+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.liberty-request+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.llamagraphics.life-balance.desktop": {
            source: "iana",
            extensions: ["lbd"]
        },
        "application/vnd.llamagraphics.life-balance.exchange+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["lbe"]
        },
        "application/vnd.logipipe.circuit+zip": {
            source: "iana",
            compressible: !1
        },
        "application/vnd.loom": {
            source: "iana"
        },
        "application/vnd.lotus-1-2-3": {
            source: "iana",
            extensions: ["123"]
        },
        "application/vnd.lotus-approach": {
            source: "iana",
            extensions: ["apr"]
        },
        "application/vnd.lotus-freelance": {
            source: "iana",
            extensions: ["pre"]
        },
        "application/vnd.lotus-notes": {
            source: "iana",
            extensions: ["nsf"]
        },
        "application/vnd.lotus-organizer": {
            source: "iana",
            extensions: ["org"]
        },
        "application/vnd.lotus-screencam": {
            source: "iana",
            extensions: ["scm"]
        },
        "application/vnd.lotus-wordpro": {
            source: "iana",
            extensions: ["lwp"]
        },
        "application/vnd.macports.portpkg": {
            source: "iana",
            extensions: ["portpkg"]
        },
        "application/vnd.mapbox-vector-tile": {
            source: "iana",
            extensions: ["mvt"]
        },
        "application/vnd.marlin.drm.actiontoken+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.marlin.drm.conftoken+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.marlin.drm.license+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.marlin.drm.mdcf": {
            source: "iana"
        },
        "application/vnd.mason+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.maxar.archive.3tz+zip": {
            source: "iana",
            compressible: !1
        },
        "application/vnd.maxmind.maxmind-db": {
            source: "iana"
        },
        "application/vnd.mcd": {
            source: "iana",
            extensions: ["mcd"]
        },
        "application/vnd.medcalcdata": {
            source: "iana",
            extensions: ["mc1"]
        },
        "application/vnd.mediastation.cdkey": {
            source: "iana",
            extensions: ["cdkey"]
        },
        "application/vnd.meridian-slingshot": {
            source: "iana"
        },
        "application/vnd.mfer": {
            source: "iana",
            extensions: ["mwf"]
        },
        "application/vnd.mfmp": {
            source: "iana",
            extensions: ["mfm"]
        },
        "application/vnd.micro+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.micrografx.flo": {
            source: "iana",
            extensions: ["flo"]
        },
        "application/vnd.micrografx.igx": {
            source: "iana",
            extensions: ["igx"]
        },
        "application/vnd.microsoft.portable-executable": {
            source: "iana"
        },
        "application/vnd.microsoft.windows.thumbnail-cache": {
            source: "iana"
        },
        "application/vnd.miele+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.mif": {
            source: "iana",
            extensions: ["mif"]
        },
        "application/vnd.minisoft-hp3000-save": {
            source: "iana"
        },
        "application/vnd.mitsubishi.misty-guard.trustweb": {
            source: "iana"
        },
        "application/vnd.mobius.daf": {
            source: "iana",
            extensions: ["daf"]
        },
        "application/vnd.mobius.dis": {
            source: "iana",
            extensions: ["dis"]
        },
        "application/vnd.mobius.mbk": {
            source: "iana",
            extensions: ["mbk"]
        },
        "application/vnd.mobius.mqy": {
            source: "iana",
            extensions: ["mqy"]
        },
        "application/vnd.mobius.msl": {
            source: "iana",
            extensions: ["msl"]
        },
        "application/vnd.mobius.plc": {
            source: "iana",
            extensions: ["plc"]
        },
        "application/vnd.mobius.txf": {
            source: "iana",
            extensions: ["txf"]
        },
        "application/vnd.mophun.application": {
            source: "iana",
            extensions: ["mpn"]
        },
        "application/vnd.mophun.certificate": {
            source: "iana",
            extensions: ["mpc"]
        },
        "application/vnd.motorola.flexsuite": {
            source: "iana"
        },
        "application/vnd.motorola.flexsuite.adsi": {
            source: "iana"
        },
        "application/vnd.motorola.flexsuite.fis": {
            source: "iana"
        },
        "application/vnd.motorola.flexsuite.gotap": {
            source: "iana"
        },
        "application/vnd.motorola.flexsuite.kmr": {
            source: "iana"
        },
        "application/vnd.motorola.flexsuite.ttc": {
            source: "iana"
        },
        "application/vnd.motorola.flexsuite.wem": {
            source: "iana"
        },
        "application/vnd.motorola.iprm": {
            source: "iana"
        },
        "application/vnd.mozilla.xul+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["xul"]
        },
        "application/vnd.ms-3mfdocument": {
            source: "iana"
        },
        "application/vnd.ms-artgalry": {
            source: "iana",
            extensions: ["cil"]
        },
        "application/vnd.ms-asf": {
            source: "iana"
        },
        "application/vnd.ms-cab-compressed": {
            source: "iana",
            extensions: ["cab"]
        },
        "application/vnd.ms-color.iccprofile": {
            source: "apache"
        },
        "application/vnd.ms-excel": {
            source: "iana",
            compressible: !1,
            extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"]
        },
        "application/vnd.ms-excel.addin.macroenabled.12": {
            source: "iana",
            extensions: ["xlam"]
        },
        "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
            source: "iana",
            extensions: ["xlsb"]
        },
        "application/vnd.ms-excel.sheet.macroenabled.12": {
            source: "iana",
            extensions: ["xlsm"]
        },
        "application/vnd.ms-excel.template.macroenabled.12": {
            source: "iana",
            extensions: ["xltm"]
        },
        "application/vnd.ms-fontobject": {
            source: "iana",
            compressible: !0,
            extensions: ["eot"]
        },
        "application/vnd.ms-htmlhelp": {
            source: "iana",
            extensions: ["chm"]
        },
        "application/vnd.ms-ims": {
            source: "iana",
            extensions: ["ims"]
        },
        "application/vnd.ms-lrm": {
            source: "iana",
            extensions: ["lrm"]
        },
        "application/vnd.ms-office.activex+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.ms-officetheme": {
            source: "iana",
            extensions: ["thmx"]
        },
        "application/vnd.ms-opentype": {
            source: "apache",
            compressible: !0
        },
        "application/vnd.ms-outlook": {
            compressible: !1,
            extensions: ["msg"]
        },
        "application/vnd.ms-package.obfuscated-opentype": {
            source: "apache"
        },
        "application/vnd.ms-pki.seccat": {
            source: "apache",
            extensions: ["cat"]
        },
        "application/vnd.ms-pki.stl": {
            source: "apache",
            extensions: ["stl"]
        },
        "application/vnd.ms-playready.initiator+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.ms-powerpoint": {
            source: "iana",
            compressible: !1,
            extensions: ["ppt", "pps", "pot"]
        },
        "application/vnd.ms-powerpoint.addin.macroenabled.12": {
            source: "iana",
            extensions: ["ppam"]
        },
        "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
            source: "iana",
            extensions: ["pptm"]
        },
        "application/vnd.ms-powerpoint.slide.macroenabled.12": {
            source: "iana",
            extensions: ["sldm"]
        },
        "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
            source: "iana",
            extensions: ["ppsm"]
        },
        "application/vnd.ms-powerpoint.template.macroenabled.12": {
            source: "iana",
            extensions: ["potm"]
        },
        "application/vnd.ms-printdevicecapabilities+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.ms-printing.printticket+xml": {
            source: "apache",
            compressible: !0
        },
        "application/vnd.ms-printschematicket+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.ms-project": {
            source: "iana",
            extensions: ["mpp", "mpt"]
        },
        "application/vnd.ms-tnef": {
            source: "iana"
        },
        "application/vnd.ms-windows.devicepairing": {
            source: "iana"
        },
        "application/vnd.ms-windows.nwprinting.oob": {
            source: "iana"
        },
        "application/vnd.ms-windows.printerpairing": {
            source: "iana"
        },
        "application/vnd.ms-windows.wsd.oob": {
            source: "iana"
        },
        "application/vnd.ms-wmdrm.lic-chlg-req": {
            source: "iana"
        },
        "application/vnd.ms-wmdrm.lic-resp": {
            source: "iana"
        },
        "application/vnd.ms-wmdrm.meter-chlg-req": {
            source: "iana"
        },
        "application/vnd.ms-wmdrm.meter-resp": {
            source: "iana"
        },
        "application/vnd.ms-word.document.macroenabled.12": {
            source: "iana",
            extensions: ["docm"]
        },
        "application/vnd.ms-word.template.macroenabled.12": {
            source: "iana",
            extensions: ["dotm"]
        },
        "application/vnd.ms-works": {
            source: "iana",
            extensions: ["wps", "wks", "wcm", "wdb"]
        },
        "application/vnd.ms-wpl": {
            source: "iana",
            extensions: ["wpl"]
        },
        "application/vnd.ms-xpsdocument": {
            source: "iana",
            compressible: !1,
            extensions: ["xps"]
        },
        "application/vnd.msa-disk-image": {
            source: "iana"
        },
        "application/vnd.mseq": {
            source: "iana",
            extensions: ["mseq"]
        },
        "application/vnd.msign": {
            source: "iana"
        },
        "application/vnd.multiad.creator": {
            source: "iana"
        },
        "application/vnd.multiad.creator.cif": {
            source: "iana"
        },
        "application/vnd.music-niff": {
            source: "iana"
        },
        "application/vnd.musician": {
            source: "iana",
            extensions: ["mus"]
        },
        "application/vnd.muvee.style": {
            source: "iana",
            extensions: ["msty"]
        },
        "application/vnd.mynfc": {
            source: "iana",
            extensions: ["taglet"]
        },
        "application/vnd.nacamar.ybrid+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.ncd.control": {
            source: "iana"
        },
        "application/vnd.ncd.reference": {
            source: "iana"
        },
        "application/vnd.nearst.inv+json": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.nebumind.line": {
            source: "iana"
        },
        "application/vnd.nervana": {
            source: "iana"
        },
        "application/vnd.netfpx": {
            source: "iana"
        },
        "application/vnd.neurolanguage.nlu": {
            source: "iana",
            extensions: ["nlu"]
        },
        "application/vnd.nimn": {
            source: "iana"
        },
        "application/vnd.nintendo.nitro.rom": {
            source: "iana"
        },
        "application/vnd.nintendo.snes.rom": {
            source: "iana"
        },
        "application/vnd.nitf": {
            source: "iana",
            extensions: ["ntf", "nitf"]
        },
        "application/vnd.noblenet-directory": {
            source: "iana",
            extensions: ["nnd"]
        },
        "application/vnd.noblenet-sealer": {
            source: "iana",
            extensions: ["nns"]
        },
        "application/vnd.noblenet-web": {
            source: "iana",
            extensions: ["nnw"]
        },
        "application/vnd.nokia.catalogs": {
            source: "iana"
        },
        "application/vnd.nokia.conml+wbxml": {
            source: "iana"
        },
        "application/vnd.nokia.conml+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.nokia.iptv.config+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.nokia.isds-radio-presets": {
            source: "iana"
        },
        "application/vnd.nokia.landmark+wbxml": {
            source: "iana"
        },
        "application/vnd.nokia.landmark+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.nokia.landmarkcollection+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.nokia.n-gage.ac+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["ac"]
        },
        "application/vnd.nokia.n-gage.data": {
            source: "iana",
            extensions: ["ngdat"]
        },
        "application/vnd.nokia.n-gage.symbian.install": {
            source: "iana",
            extensions: ["n-gage"]
        },
        "application/vnd.nokia.ncd": {
            source: "iana"
        },
        "application/vnd.nokia.pcd+wbxml": {
            source: "iana"
        },
        "application/vnd.nokia.pcd+xml": {
            source: "iana",
            compressible: !0
        },
        "application/vnd.nokia.radio-preset": {
            source: "iana",
            extensions: ["rpst"]
        },
        "application/vnd.nokia.radio-presets": {
            source: "iana",
            extensions: ["rpss"]
        },
        "application/vnd.novadigm.edm": {
            source: "iana",
            extensions: ["edm"]
        },
        "application/vnd.novadigm.edx": {
            source: "iana",
            extensions: ["edx"]
        },
        "application/vnd.novadigm.ext": {
            source: "iana",
            extensions: ["ext"]
        },
        "application/vnd.ntt-local.content-share": {
            source: "iana"
        },
        "application/vnd.ntt-local.file-transfer": {
            source: "iana"
        },
        "application/vnd.ntt-local.ogw_remote-access": {
            source: "iana"
        },
        "application/vnd.ntt-local.sip-ta_remote": {
            source: "iana"
        },
        "application/vnd.ntt-local.sip-ta_tcp_stream": {
            source: "iana"
        },
        "application/vnd.oasis.opendocument.chart": {
            source: "iana",
            extensions: ["odc"]
        },
        "application/vnd.oasis.opendocument.chart-template": {
            source: "iana",
            extensions: ["otc"]
        },
        "application/vnd.oasis.opendocument.database": {
            source: "iana",
            extensions: ["odb"]
        },
        "application/vnd.oasis.opendocument.formula": {
            source: "iana",
            extensions: ["odf"]
        },
        "application/vnd.oasis.opendocument.formula-template": {
            source: "iana",
            extensions: ["odft"]
        },
        "application/vnd.oasis.opendocument.graphics": {
            source: "iana",
            compressible: !1,
            extensions: ["odg"]
        },
        "application/vnd.oasis.opendocument.graphics-template": {
            source: "iana",
            extensions: ["otg"]
        },
        "application/vnd.oasis.opendocument.image": {
            source: "iana",
            extensions: ["odi"]
        },
        "application/vnd.oasis.opendocument.image-template": {
            source: "iana",
            extensions: ["oti"]
        },
        "application/vnd.oasis.opendocument.presentation": {
            source: "iana",
            compressible: !1,
            extensions: ["odp"]
        },
        "application/vnd.oasis.opendocument.presentation-template": {
            source: "iana",
            extensions: ["otp"]
        },
        "application/vnd.oasis.opendocument.spreadsheet": {
            source: "iana",
            compressible: !1,
            extensions: ["ods"]
        },
        "application/vnd.oasis.opendocument.spreadsheet-template": {
            source: "iana",
            extensions: ["ots"]
        },
        "application/vnd.oasis.opendocument.text": {
            source: "iana",
            compressible: !1,
            extensions: ["odt"]
        },