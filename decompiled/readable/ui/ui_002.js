/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:38.088Z
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 2/53
 * Lines: 8993 - 10492 (1500 lines)
 * Original file: cli.js
 */

        "application/widget": {
            source: "iana",
            extensions: ["wgt"]
        },
        "application/winhlp": {
            source: "apache",
            extensions: ["hlp"]
        },
        "application/wita": {
            source: "iana"
        },
        "application/wordperfect5.1": {
            source: "iana"
        },
        "application/wsdl+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["wsdl"]
        },
        "application/wspolicy+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["wspolicy"]
        },
        "application/x-7z-compressed": {
            source: "apache",
            compressible: !1,
            extensions: ["7z"]
        },
        "application/x-abiword": {
            source: "apache",
            extensions: ["abw"]
        },
        "application/x-ace-compressed": {
            source: "apache",
            extensions: ["ace"]
        },
        "application/x-amf": {
            source: "apache"
        },
        "application/x-apple-diskimage": {
            source: "apache",
            extensions: ["dmg"]
        },
        "application/x-arj": {
            compressible: !1,
            extensions: ["arj"]
        },
        "application/x-authorware-bin": {
            source: "apache",
            extensions: ["aab", "x32", "u32", "vox"]
        },
        "application/x-authorware-map": {
            source: "apache",
            extensions: ["aam"]
        },
        "application/x-authorware-seg": {
            source: "apache",
            extensions: ["aas"]
        },
        "application/x-bcpio": {
            source: "apache",
            extensions: ["bcpio"]
        },
        "application/x-bdoc": {
            compressible: !1,
            extensions: ["bdoc"]
        },
        "application/x-bittorrent": {
            source: "apache",
            extensions: ["torrent"]
        },
        "application/x-blorb": {
            source: "apache",
            extensions: ["blb", "blorb"]
        },
        "application/x-bzip": {
            source: "apache",
            compressible: !1,
            extensions: ["bz"]
        },
        "application/x-bzip2": {
            source: "apache",
            compressible: !1,
            extensions: ["bz2", "boz"]
        },
        "application/x-cbr": {
            source: "apache",
            extensions: ["cbr", "cba", "cbt", "cbz", "cb7"]
        },
        "application/x-cdlink": {
            source: "apache",
            extensions: ["vcd"]
        },
        "application/x-cfs-compressed": {
            source: "apache",
            extensions: ["cfs"]
        },
        "application/x-chat": {
            source: "apache",
            extensions: ["chat"]
        },
        "application/x-chess-pgn": {
            source: "apache",
            extensions: ["pgn"]
        },
        "application/x-chrome-extension": {
            extensions: ["crx"]
        },
        "application/x-cocoa": {
            source: "nginx",
            extensions: ["cco"]
        },
        "application/x-compress": {
            source: "apache"
        },
        "application/x-conference": {
            source: "apache",
            extensions: ["nsc"]
        },
        "application/x-cpio": {
            source: "apache",
            extensions: ["cpio"]
        },
        "application/x-csh": {
            source: "apache",
            extensions: ["csh"]
        },
        "application/x-deb": {
            compressible: !1
        },
        "application/x-debian-package": {
            source: "apache",
            extensions: ["deb", "udeb"]
        },
        "application/x-dgc-compressed": {
            source: "apache",
            extensions: ["dgc"]
        },
        "application/x-director": {
            source: "apache",
            extensions: ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"]
        },
        "application/x-doom": {
            source: "apache",
            extensions: ["wad"]
        },
        "application/x-dtbncx+xml": {
            source: "apache",
            compressible: !0,
            extensions: ["ncx"]
        },
        "application/x-dtbook+xml": {
            source: "apache",
            compressible: !0,
            extensions: ["dtb"]
        },
        "application/x-dtbresource+xml": {
            source: "apache",
            compressible: !0,
            extensions: ["res"]
        },
        "application/x-dvi": {
            source: "apache",
            compressible: !1,
            extensions: ["dvi"]
        },
        "application/x-envoy": {
            source: "apache",
            extensions: ["evy"]
        },
        "application/x-eva": {
            source: "apache",
            extensions: ["eva"]
        },
        "application/x-font-bdf": {
            source: "apache",
            extensions: ["bdf"]
        },
        "application/x-font-dos": {
            source: "apache"
        },
        "application/x-font-framemaker": {
            source: "apache"
        },
        "application/x-font-ghostscript": {
            source: "apache",
            extensions: ["gsf"]
        },
        "application/x-font-libgrx": {
            source: "apache"
        },
        "application/x-font-linux-psf": {
            source: "apache",
            extensions: ["psf"]
        },
        "application/x-font-pcf": {
            source: "apache",
            extensions: ["pcf"]
        },
        "application/x-font-snf": {
            source: "apache",
            extensions: ["snf"]
        },
        "application/x-font-speedo": {
            source: "apache"
        },
        "application/x-font-sunos-news": {
            source: "apache"
        },
        "application/x-font-type1": {
            source: "apache",
            extensions: ["pfa", "pfb", "pfm", "afm"]
        },
        "application/x-font-vfont": {
            source: "apache"
        },
        "application/x-freearc": {
            source: "apache",
            extensions: ["arc"]
        },
        "application/x-futuresplash": {
            source: "apache",
            extensions: ["spl"]
        },
        "application/x-gca-compressed": {
            source: "apache",
            extensions: ["gca"]
        },
        "application/x-glulx": {
            source: "apache",
            extensions: ["ulx"]
        },
        "application/x-gnumeric": {
            source: "apache",
            extensions: ["gnumeric"]
        },
        "application/x-gramps-xml": {
            source: "apache",
            extensions: ["gramps"]
        },
        "application/x-gtar": {
            source: "apache",
            extensions: ["gtar"]
        },
        "application/x-gzip": {
            source: "apache"
        },
        "application/x-hdf": {
            source: "apache",
            extensions: ["hdf"]
        },
        "application/x-httpd-php": {
            compressible: !0,
            extensions: ["php"]
        },
        "application/x-install-instructions": {
            source: "apache",
            extensions: ["install"]
        },
        "application/x-iso9660-image": {
            source: "apache",
            extensions: ["iso"]
        },
        "application/x-iwork-keynote-sffkey": {
            extensions: ["key"]
        },
        "application/x-iwork-numbers-sffnumbers": {
            extensions: ["numbers"]
        },
        "application/x-iwork-pages-sffpages": {
            extensions: ["pages"]
        },
        "application/x-java-archive-diff": {
            source: "nginx",
            extensions: ["jardiff"]
        },
        "application/x-java-jnlp-file": {
            source: "apache",
            compressible: !1,
            extensions: ["jnlp"]
        },
        "application/x-javascript": {
            compressible: !0
        },
        "application/x-keepass2": {
            extensions: ["kdbx"]
        },
        "application/x-latex": {
            source: "apache",
            compressible: !1,
            extensions: ["latex"]
        },
        "application/x-lua-bytecode": {
            extensions: ["luac"]
        },
        "application/x-lzh-compressed": {
            source: "apache",
            extensions: ["lzh", "lha"]
        },
        "application/x-makeself": {
            source: "nginx",
            extensions: ["run"]
        },
        "application/x-mie": {
            source: "apache",
            extensions: ["mie"]
        },
        "application/x-mobipocket-ebook": {
            source: "apache",
            extensions: ["prc", "mobi"]
        },
        "application/x-mpegurl": {
            compressible: !1
        },
        "application/x-ms-application": {
            source: "apache",
            extensions: ["application"]
        },
        "application/x-ms-shortcut": {
            source: "apache",
            extensions: ["lnk"]
        },
        "application/x-ms-wmd": {
            source: "apache",
            extensions: ["wmd"]
        },
        "application/x-ms-wmz": {
            source: "apache",
            extensions: ["wmz"]
        },
        "application/x-ms-xbap": {
            source: "apache",
            extensions: ["xbap"]
        },
        "application/x-msaccess": {
            source: "apache",
            extensions: ["mdb"]
        },
        "application/x-msbinder": {
            source: "apache",
            extensions: ["obd"]
        },
        "application/x-mscardfile": {
            source: "apache",
            extensions: ["crd"]
        },
        "application/x-msclip": {
            source: "apache",
            extensions: ["clp"]
        },
        "application/x-msdos-program": {
            extensions: ["exe"]
        },
        "application/x-msdownload": {
            source: "apache",
            extensions: ["exe", "dll", "com", "bat", "msi"]
        },
        "application/x-msmediaview": {
            source: "apache",
            extensions: ["mvb", "m13", "m14"]
        },
        "application/x-msmetafile": {
            source: "apache",
            extensions: ["wmf", "wmz", "emf", "emz"]
        },
        "application/x-msmoney": {
            source: "apache",
            extensions: ["mny"]
        },
        "application/x-mspublisher": {
            source: "apache",
            extensions: ["pub"]
        },
        "application/x-msschedule": {
            source: "apache",
            extensions: ["scd"]
        },
        "application/x-msterminal": {
            source: "apache",
            extensions: ["trm"]
        },
        "application/x-mswrite": {
            source: "apache",
            extensions: ["wri"]
        },
        "application/x-netcdf": {
            source: "apache",
            extensions: ["nc", "cdf"]
        },
        "application/x-ns-proxy-autoconfig": {
            compressible: !0,
            extensions: ["pac"]
        },
        "application/x-nzb": {
            source: "apache",
            extensions: ["nzb"]
        },
        "application/x-perl": {
            source: "nginx",
            extensions: ["pl", "pm"]
        },
        "application/x-pilot": {
            source: "nginx",
            extensions: ["prc", "pdb"]
        },
        "application/x-pkcs12": {
            source: "apache",
            compressible: !1,
            extensions: ["p12", "pfx"]
        },
        "application/x-pkcs7-certificates": {
            source: "apache",
            extensions: ["p7b", "spc"]
        },
        "application/x-pkcs7-certreqresp": {
            source: "apache",
            extensions: ["p7r"]
        },
        "application/x-pki-message": {
            source: "iana"
        },
        "application/x-rar-compressed": {
            source: "apache",
            compressible: !1,
            extensions: ["rar"]
        },
        "application/x-redhat-package-manager": {
            source: "nginx",
            extensions: ["rpm"]
        },
        "application/x-research-info-systems": {
            source: "apache",
            extensions: ["ris"]
        },
        "application/x-sea": {
            source: "nginx",
            extensions: ["sea"]
        },
        "application/x-sh": {
            source: "apache",
            compressible: !0,
            extensions: ["sh"]
        },
        "application/x-shar": {
            source: "apache",
            extensions: ["shar"]
        },
        "application/x-shockwave-flash": {
            source: "apache",
            compressible: !1,
            extensions: ["swf"]
        },
        "application/x-silverlight-app": {
            source: "apache",
            extensions: ["xap"]
        },
        "application/x-sql": {
            source: "apache",
            extensions: ["sql"]
        },
        "application/x-stuffit": {
            source: "apache",
            compressible: !1,
            extensions: ["sit"]
        },
        "application/x-stuffitx": {
            source: "apache",
            extensions: ["sitx"]
        },
        "application/x-subrip": {
            source: "apache",
            extensions: ["srt"]
        },
        "application/x-sv4cpio": {
            source: "apache",
            extensions: ["sv4cpio"]
        },
        "application/x-sv4crc": {
            source: "apache",
            extensions: ["sv4crc"]
        },
        "application/x-t3vm-image": {
            source: "apache",
            extensions: ["t3"]
        },
        "application/x-tads": {
            source: "apache",
            extensions: ["gam"]
        },
        "application/x-tar": {
            source: "apache",
            compressible: !0,
            extensions: ["tar"]
        },
        "application/x-tcl": {
            source: "apache",
            extensions: ["tcl", "tk"]
        },
        "application/x-tex": {
            source: "apache",
            extensions: ["tex"]
        },
        "application/x-tex-tfm": {
            source: "apache",
            extensions: ["tfm"]
        },
        "application/x-texinfo": {
            source: "apache",
            extensions: ["texinfo", "texi"]
        },
        "application/x-tgif": {
            source: "apache",
            extensions: ["obj"]
        },
        "application/x-ustar": {
            source: "apache",
            extensions: ["ustar"]
        },
        "application/x-virtualbox-hdd": {
            compressible: !0,
            extensions: ["hdd"]
        },
        "application/x-virtualbox-ova": {
            compressible: !0,
            extensions: ["ova"]
        },
        "application/x-virtualbox-ovf": {
            compressible: !0,
            extensions: ["ovf"]
        },
        "application/x-virtualbox-vbox": {
            compressible: !0,
            extensions: ["vbox"]
        },
        "application/x-virtualbox-vbox-extpack": {
            compressible: !1,
            extensions: ["vbox-extpack"]
        },
        "application/x-virtualbox-vdi": {
            compressible: !0,
            extensions: ["vdi"]
        },
        "application/x-virtualbox-vhd": {
            compressible: !0,
            extensions: ["vhd"]
        },
        "application/x-virtualbox-vmdk": {
            compressible: !0,
            extensions: ["vmdk"]
        },
        "application/x-wais-source": {
            source: "apache",
            extensions: ["src"]
        },
        "application/x-web-app-manifest+json": {
            compressible: !0,
            extensions: ["webapp"]
        },
        "application/x-www-form-urlencoded": {
            source: "iana",
            compressible: !0
        },
        "application/x-x509-ca-cert": {
            source: "iana",
            extensions: ["der", "crt", "pem"]
        },
        "application/x-x509-ca-ra-cert": {
            source: "iana"
        },
        "application/x-x509-next-ca-cert": {
            source: "iana"
        },
        "application/x-xfig": {
            source: "apache",
            extensions: ["fig"]
        },
        "application/x-xliff+xml": {
            source: "apache",
            compressible: !0,
            extensions: ["xlf"]
        },
        "application/x-xpinstall": {
            source: "apache",
            compressible: !1,
            extensions: ["xpi"]
        },
        "application/x-xz": {
            source: "apache",
            extensions: ["xz"]
        },
        "application/x-zmachine": {
            source: "apache",
            extensions: ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"]
        },
        "application/x400-bp": {
            source: "iana"
        },
        "application/xacml+xml": {
            source: "iana",
            compressible: !0
        },
        "application/xaml+xml": {
            source: "apache",
            compressible: !0,
            extensions: ["xaml"]
        },
        "application/xcap-att+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["xav"]
        },
        "application/xcap-caps+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["xca"]
        },
        "application/xcap-diff+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["xdf"]
        },
        "application/xcap-el+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["xel"]
        },
        "application/xcap-error+xml": {
            source: "iana",
            compressible: !0
        },
        "application/xcap-ns+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["xns"]
        },
        "application/xcon-conference-info+xml": {
            source: "iana",
            compressible: !0
        },
        "application/xcon-conference-info-diff+xml": {
            source: "iana",
            compressible: !0
        },
        "application/xenc+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["xenc"]
        },
        "application/xhtml+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["xhtml", "xht"]
        },
        "application/xhtml-voice+xml": {
            source: "apache",
            compressible: !0
        },
        "application/xliff+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["xlf"]
        },
        "application/xml": {
            source: "iana",
            compressible: !0,
            extensions: ["xml", "xsl", "xsd", "rng"]
        },
        "application/xml-dtd": {
            source: "iana",
            compressible: !0,
            extensions: ["dtd"]
        },
        "application/xml-external-parsed-entity": {
            source: "iana"
        },
        "application/xml-patch+xml": {
            source: "iana",
            compressible: !0
        },
        "application/xmpp+xml": {
            source: "iana",
            compressible: !0
        },
        "application/xop+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["xop"]
        },
        "application/xproc+xml": {
            source: "apache",
            compressible: !0,
            extensions: ["xpl"]
        },
        "application/xslt+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["xsl", "xslt"]
        },
        "application/xspf+xml": {
            source: "apache",
            compressible: !0,
            extensions: ["xspf"]
        },
        "application/xv+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["mxml", "xhvml", "xvml", "xvm"]
        },
        "application/yang": {
            source: "iana",
            extensions: ["yang"]
        },
        "application/yang-data+json": {
            source: "iana",
            compressible: !0
        },
        "application/yang-data+xml": {
            source: "iana",
            compressible: !0
        },
        "application/yang-patch+json": {
            source: "iana",
            compressible: !0
        },
        "application/yang-patch+xml": {
            source: "iana",
            compressible: !0
        },
        "application/yin+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["yin"]
        },
        "application/zip": {
            source: "iana",
            compressible: !1,
            extensions: ["zip"]
        },
        "application/zlib": {
            source: "iana"
        },
        "application/zstd": {
            source: "iana"
        },
        "audio/1d-interleaved-parityfec": {
            source: "iana"
        },
        "audio/32kadpcm": {
            source: "iana"
        },
        "audio/3gpp": {
            source: "iana",
            compressible: !1,
            extensions: ["3gpp"]
        },
        "audio/3gpp2": {
            source: "iana"
        },
        "audio/aac": {
            source: "iana"
        },
        "audio/ac3": {
            source: "iana"
        },
        "audio/adpcm": {
            source: "apache",
            extensions: ["adp"]
        },
        "audio/amr": {
            source: "iana",
            extensions: ["amr"]
        },
        "audio/amr-wb": {
            source: "iana"
        },
        "audio/amr-wb+": {
            source: "iana"
        },
        "audio/aptx": {
            source: "iana"
        },
        "audio/asc": {
            source: "iana"
        },
        "audio/atrac-advanced-lossless": {
            source: "iana"
        },
        "audio/atrac-x": {
            source: "iana"
        },
        "audio/atrac3": {
            source: "iana"
        },
        "audio/basic": {
            source: "iana",
            compressible: !1,
            extensions: ["au", "snd"]
        },
        "audio/bv16": {
            source: "iana"
        },
        "audio/bv32": {
            source: "iana"
        },
        "audio/clearmode": {
            source: "iana"
        },
        "audio/cn": {
            source: "iana"
        },
        "audio/dat12": {
            source: "iana"
        },
        "audio/dls": {
            source: "iana"
        },
        "audio/dsr-es201108": {
            source: "iana"
        },
        "audio/dsr-es202050": {
            source: "iana"
        },
        "audio/dsr-es202211": {
            source: "iana"
        },
        "audio/dsr-es202212": {
            source: "iana"
        },
        "audio/dv": {
            source: "iana"
        },
        "audio/dvi4": {
            source: "iana"
        },
        "audio/eac3": {
            source: "iana"
        },
        "audio/encaprtp": {
            source: "iana"
        },
        "audio/evrc": {
            source: "iana"
        },
        "audio/evrc-qcp": {
            source: "iana"
        },
        "audio/evrc0": {
            source: "iana"
        },
        "audio/evrc1": {
            source: "iana"
        },
        "audio/evrcb": {
            source: "iana"
        },
        "audio/evrcb0": {
            source: "iana"
        },
        "audio/evrcb1": {
            source: "iana"
        },
        "audio/evrcnw": {
            source: "iana"
        },
        "audio/evrcnw0": {
            source: "iana"
        },
        "audio/evrcnw1": {
            source: "iana"
        },
        "audio/evrcwb": {
            source: "iana"
        },
        "audio/evrcwb0": {
            source: "iana"
        },
        "audio/evrcwb1": {
            source: "iana"
        },
        "audio/evs": {
            source: "iana"
        },
        "audio/flexfec": {
            source: "iana"
        },
        "audio/fwdred": {
            source: "iana"
        },
        "audio/g711-0": {
            source: "iana"
        },
        "audio/g719": {
            source: "iana"
        },
        "audio/g722": {
            source: "iana"
        },
        "audio/g7221": {
            source: "iana"
        },
        "audio/g723": {
            source: "iana"
        },
        "audio/g726-16": {
            source: "iana"
        },
        "audio/g726-24": {
            source: "iana"
        },
        "audio/g726-32": {
            source: "iana"
        },
        "audio/g726-40": {
            source: "iana"
        },
        "audio/g728": {
            source: "iana"
        },
        "audio/g729": {
            source: "iana"
        },
        "audio/g7291": {
            source: "iana"
        },
        "audio/g729d": {
            source: "iana"
        },
        "audio/g729e": {
            source: "iana"
        },
        "audio/gsm": {
            source: "iana"
        },
        "audio/gsm-efr": {
            source: "iana"
        },
        "audio/gsm-hr-08": {
            source: "iana"
        },
        "audio/ilbc": {
            source: "iana"
        },
        "audio/ip-mr_v2.5": {
            source: "iana"
        },
        "audio/isac": {
            source: "apache"
        },
        "audio/l16": {
            source: "iana"
        },
        "audio/l20": {
            source: "iana"
        },
        "audio/l24": {
            source: "iana",
            compressible: !1
        },
        "audio/l8": {
            source: "iana"
        },
        "audio/lpc": {
            source: "iana"
        },
        "audio/melp": {
            source: "iana"
        },
        "audio/melp1200": {
            source: "iana"
        },
        "audio/melp2400": {
            source: "iana"
        },
        "audio/melp600": {
            source: "iana"
        },
        "audio/mhas": {
            source: "iana"
        },
        "audio/midi": {
            source: "apache",
            extensions: ["mid", "midi", "kar", "rmi"]
        },
        "audio/mobile-xmf": {
            source: "iana",
            extensions: ["mxmf"]
        },
        "audio/mp3": {
            compressible: !1,
            extensions: ["mp3"]
        },
        "audio/mp4": {
            source: "iana",
            compressible: !1,
            extensions: ["m4a", "mp4a"]
        },
        "audio/mp4a-latm": {
            source: "iana"
        },
        "audio/mpa": {
            source: "iana"
        },
        "audio/mpa-robust": {
            source: "iana"
        },
        "audio/mpeg": {
            source: "iana",
            compressible: !1,
            extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"]
        },
        "audio/mpeg4-generic": {
            source: "iana"
        },
        "audio/musepack": {
            source: "apache"
        },
        "audio/ogg": {
            source: "iana",
            compressible: !1,
            extensions: ["oga", "ogg", "spx", "opus"]
        },
        "audio/opus": {
            source: "iana"
        },
        "audio/parityfec": {
            source: "iana"
        },
        "audio/pcma": {
            source: "iana"
        },
        "audio/pcma-wb": {
            source: "iana"
        },
        "audio/pcmu": {
            source: "iana"
        },
        "audio/pcmu-wb": {
            source: "iana"
        },
        "audio/prs.sid": {
            source: "iana"
        },
        "audio/qcelp": {
            source: "iana"
        },
        "audio/raptorfec": {
            source: "iana"
        },
        "audio/red": {
            source: "iana"
        },
        "audio/rtp-enc-aescm128": {
            source: "iana"
        },
        "audio/rtp-midi": {
            source: "iana"
        },
        "audio/rtploopback": {
            source: "iana"
        },
        "audio/rtx": {
            source: "iana"
        },
        "audio/s3m": {
            source: "apache",
            extensions: ["s3m"]
        },
        "audio/scip": {
            source: "iana"
        },
        "audio/silk": {
            source: "apache",
            extensions: ["sil"]
        },
        "audio/smv": {
            source: "iana"
        },
        "audio/smv-qcp": {
            source: "iana"
        },
        "audio/smv0": {
            source: "iana"
        },
        "audio/sofa": {
            source: "iana"
        },
        "audio/sp-midi": {
            source: "iana"
        },
        "audio/speex": {
            source: "iana"
        },
        "audio/t140c": {
            source: "iana"
        },
        "audio/t38": {
            source: "iana"
        },
        "audio/telephone-event": {
            source: "iana"
        },
        "audio/tetra_acelp": {
            source: "iana"
        },
        "audio/tetra_acelp_bb": {
            source: "iana"
        },
        "audio/tone": {
            source: "iana"
        },
        "audio/tsvcis": {
            source: "iana"
        },
        "audio/uemclip": {
            source: "iana"
        },
        "audio/ulpfec": {
            source: "iana"
        },
        "audio/usac": {
            source: "iana"
        },
        "audio/vdvi": {
            source: "iana"
        },
        "audio/vmr-wb": {
            source: "iana"
        },
        "audio/vnd.3gpp.iufp": {
            source: "iana"
        },
        "audio/vnd.4sb": {
            source: "iana"
        },
        "audio/vnd.audiokoz": {
            source: "iana"
        },
        "audio/vnd.celp": {
            source: "iana"
        },
        "audio/vnd.cisco.nse": {
            source: "iana"
        },
        "audio/vnd.cmles.radio-events": {
            source: "iana"
        },
        "audio/vnd.cns.anp1": {
            source: "iana"
        },
        "audio/vnd.cns.inf1": {
            source: "iana"
        },
        "audio/vnd.dece.audio": {
            source: "iana",
            extensions: ["uva", "uvva"]
        },
        "audio/vnd.digital-winds": {
            source: "iana",
            extensions: ["eol"]
        },
        "audio/vnd.dlna.adts": {
            source: "iana"
        },
        "audio/vnd.dolby.heaac.1": {
            source: "iana"
        },
        "audio/vnd.dolby.heaac.2": {
            source: "iana"
        },
        "audio/vnd.dolby.mlp": {
            source: "iana"
        },
        "audio/vnd.dolby.mps": {
            source: "iana"
        },
        "audio/vnd.dolby.pl2": {
            source: "iana"
        },
        "audio/vnd.dolby.pl2x": {
            source: "iana"
        },
        "audio/vnd.dolby.pl2z": {
            source: "iana"
        },
        "audio/vnd.dolby.pulse.1": {
            source: "iana"
        },
        "audio/vnd.dra": {
            source: "iana",
            extensions: ["dra"]
        },
        "audio/vnd.dts": {
            source: "iana",
            extensions: ["dts"]
        },
        "audio/vnd.dts.hd": {
            source: "iana",
            extensions: ["dtshd"]
        },
        "audio/vnd.dts.uhd": {
            source: "iana"
        },
        "audio/vnd.dvb.file": {
            source: "iana"
        },
        "audio/vnd.everad.plj": {
            source: "iana"
        },
        "audio/vnd.hns.audio": {
            source: "iana"
        },
        "audio/vnd.lucent.voice": {
            source: "iana",
            extensions: ["lvp"]
        },
        "audio/vnd.ms-playready.media.pya": {
            source: "iana",
            extensions: ["pya"]
        },
        "audio/vnd.nokia.mobile-xmf": {
            source: "iana"
        },
        "audio/vnd.nortel.vbk": {
            source: "iana"
        },
        "audio/vnd.nuera.ecelp4800": {
            source: "iana",
            extensions: ["ecelp4800"]
        },
        "audio/vnd.nuera.ecelp7470": {
            source: "iana",
            extensions: ["ecelp7470"]
        },
        "audio/vnd.nuera.ecelp9600": {
            source: "iana",
            extensions: ["ecelp9600"]
        },
        "audio/vnd.octel.sbc": {
            source: "iana"
        },
        "audio/vnd.presonus.multitrack": {
            source: "iana"
        },
        "audio/vnd.qcelp": {
            source: "iana"
        },
        "audio/vnd.rhetorex.32kadpcm": {
            source: "iana"
        },
        "audio/vnd.rip": {
            source: "iana",
            extensions: ["rip"]
        },
        "audio/vnd.rn-realaudio": {
            compressible: !1
        },
        "audio/vnd.sealedmedia.softseal.mpeg": {
            source: "iana"
        },
        "audio/vnd.vmx.cvsd": {
            source: "iana"
        },
        "audio/vnd.wave": {
            compressible: !1
        },
        "audio/vorbis": {
            source: "iana",
            compressible: !1
        },
        "audio/vorbis-config": {
            source: "iana"
        },
        "audio/wav": {
            compressible: !1,
            extensions: ["wav"]
        },
        "audio/wave": {
            compressible: !1,
            extensions: ["wav"]
        },
        "audio/webm": {
            source: "apache",
            compressible: !1,
            extensions: ["weba"]
        },
        "audio/x-aac": {
            source: "apache",
            compressible: !1,
            extensions: ["aac"]
        },
        "audio/x-aiff": {
            source: "apache",
            extensions: ["aif", "aiff", "aifc"]
        },
        "audio/x-caf": {
            source: "apache",
            compressible: !1,
            extensions: ["caf"]
        },
        "audio/x-flac": {
            source: "apache",
            extensions: ["flac"]
        },
        "audio/x-m4a": {
            source: "nginx",
            extensions: ["m4a"]
        },
        "audio/x-matroska": {
            source: "apache",
            extensions: ["mka"]
        },
        "audio/x-mpegurl": {
            source: "apache",
            extensions: ["m3u"]
        },
        "audio/x-ms-wax": {
            source: "apache",
            extensions: ["wax"]
        },
        "audio/x-ms-wma": {
            source: "apache",
            extensions: ["wma"]
        },
        "audio/x-pn-realaudio": {
            source: "apache",
            extensions: ["ram", "ra"]
        },
        "audio/x-pn-realaudio-plugin": {
            source: "apache",
            extensions: ["rmp"]
        },
        "audio/x-realaudio": {
            source: "nginx",
            extensions: ["ra"]
        },
        "audio/x-tta": {
            source: "apache"
        },
        "audio/x-wav": {
            source: "apache",
            extensions: ["wav"]
        },
        "audio/xm": {
            source: "apache",
            extensions: ["xm"]
        },
        "chemical/x-cdx": {
            source: "apache",
            extensions: ["cdx"]
        },
        "chemical/x-cif": {
            source: "apache",
            extensions: ["cif"]
        },
        "chemical/x-cmdf": {
            source: "apache",
            extensions: ["cmdf"]
        },
        "chemical/x-cml": {
            source: "apache",
            extensions: ["cml"]
        },
        "chemical/x-csml": {
            source: "apache",
            extensions: ["csml"]
        },
        "chemical/x-pdb": {
            source: "apache"
        },
        "chemical/x-xyz": {
            source: "apache",
            extensions: ["xyz"]
        },
        "font/collection": {
            source: "iana",
            extensions: ["ttc"]
        },
        "font/otf": {
            source: "iana",
            compressible: !0,
            extensions: ["otf"]
        },
        "font/sfnt": {
            source: "iana"
        },
        "font/ttf": {
            source: "iana",
            compressible: !0,
            extensions: ["ttf"]
        },
        "font/woff": {
            source: "iana",
            extensions: ["woff"]
        },
        "font/woff2": {
            source: "iana",
            extensions: ["woff2"]
        },
        "image/aces": {
            source: "iana",
            extensions: ["exr"]
        },
        "image/apng": {
            compressible: !1,
            extensions: ["apng"]
        },
        "image/avci": {
            source: "iana",
            extensions: ["avci"]
        },
        "image/avcs": {
            source: "iana",
            extensions: ["avcs"]
        },
        "image/avif": {
            source: "iana",
            compressible: !1,
            extensions: ["avif"]
        },
        "image/bmp": {
            source: "iana",
            compressible: !0,
            extensions: ["bmp"]
        },
        "image/cgm": {
            source: "iana",
            extensions: ["cgm"]
        },
        "image/dicom-rle": {
            source: "iana",
            extensions: ["drle"]
        },
        "image/emf": {
            source: "iana",
            extensions: ["emf"]
        },
        "image/fits": {
            source: "iana",
            extensions: ["fits"]
        },
        "image/g3fax": {
            source: "iana",
            extensions: ["g3"]
        },
        "image/gif": {
            source: "iana",
            compressible: !1,
            extensions: ["gif"]
        },
        "image/heic": {
            source: "iana",
            extensions: ["heic"]
        },
        "image/heic-sequence": {
            source: "iana",
            extensions: ["heics"]
        },
        "image/heif": {
            source: "iana",
            extensions: ["heif"]
        },
        "image/heif-sequence": {
            source: "iana",
            extensions: ["heifs"]
        },
        "image/hej2k": {
            source: "iana",
            extensions: ["hej2"]
        },
        "image/hsj2": {
            source: "iana",
            extensions: ["hsj2"]
        },
        "image/ief": {
            source: "iana",
            extensions: ["ief"]
        },
        "image/jls": {
            source: "iana",
            extensions: ["jls"]
        },
        "image/jp2": {
            source: "iana",
            compressible: !1,
            extensions: ["jp2", "jpg2"]
        },
        "image/jpeg": {
            source: "iana",
            compressible: !1,
            extensions: ["jpeg", "jpg", "jpe"]
        },
        "image/jph": {
            source: "iana",
            extensions: ["jph"]
        },
        "image/jphc": {
            source: "iana",
            extensions: ["jhc"]
        },