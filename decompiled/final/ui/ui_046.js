/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: ui_046.js
 * 处理时间: 2025-12-09T03:41:39.518Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * en       (  1x) AGENT_OUTPUT_TOOL = "AgentOutputTool"
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 46/53
 * Lines: 360346 - 361842 (1497 lines)
 * Original file: cli.js
 */

            "gamma;": 947,
            "gammad;": 989,
            "gap;": 10886,
            "gbreve;": 287,
            "gcirc;": 285,
            "gcy;": 1075,
            "gdot;": 289,
            "ge;": 8805,
            "gel;": 8923,
            "geq;": 8805,
            "geqq;": 8807,
            "geqslant;": 10878,
            "ges;": 10878,
            "gescc;": 10921,
            "gesdot;": 10880,
            "gesdoto;": 10882,
            "gesdotol;": 10884,
            "gesl;": [8923, 65024],
            "gesles;": 10900,
            "gfr;": [55349, 56612],
            "gg;": 8811,
            "ggg;": 8921,
            "gimel;": 8503,
            "gjcy;": 1107,
            "gl;": 8823,
            "glE;": 10898,
            "gla;": 10917,
            "glj;": 10916,
            "gnE;": 8809,
            "gnap;": 10890,
            "gnapprox;": 10890,
            "gne;": 10888,
            "gneq;": 10888,
            "gneqq;": 8809,
            "gnsim;": 8935,
            "gopf;": [55349, 56664],
            "grave;": 96,
            "gscr;": 8458,
            "gsim;": 8819,
            "gsime;": 10894,
            "gsiml;": 10896,
            gt: 62,
            "gt;": 62,
            "gtcc;": 10919,
            "gtcir;": 10874,
            "gtdot;": 8919,
            "gtlPar;": 10645,
            "gtquest;": 10876,
            "gtrapprox;": 10886,
            "gtrarr;": 10616,
            "gtrdot;": 8919,
            "gtreqless;": 8923,
            "gtreqqless;": 10892,
            "gtrless;": 8823,
            "gtrsim;": 8819,
            "gvertneqq;": [8809, 65024],
            "gvnE;": [8809, 65024],
            "hArr;": 8660,
            "hairsp;": 8202,
            "half;": 189,
            "hamilt;": 8459,
            "hardcy;": 1098,
            "harr;": 8596,
            "harrcir;": 10568,
            "harrw;": 8621,
            "hbar;": 8463,
            "hcirc;": 293,
            "hearts;": 9829,
            "heartsuit;": 9829,
            "hellip;": 8230,
            "hercon;": 8889,
            "hfr;": [55349, 56613],
            "hksearow;": 10533,
            "hkswarow;": 10534,
            "hoarr;": 8703,
            "homtht;": 8763,
            "hookleftarrow;": 8617,
            "hookrightarrow;": 8618,
            "hopf;": [55349, 56665],
            "horbar;": 8213,
            "hscr;": [55349, 56509],
            "hslash;": 8463,
            "hstrok;": 295,
            "hybull;": 8259,
            "hyphen;": 8208,
            iacute: 237,
            "iacute;": 237,
            "ic;": 8291,
            icirc: 238,
            "icirc;": 238,
            "icy;": 1080,
            "iecy;": 1077,
            iexcl: 161,
            "iexcl;": 161,
            "iff;": 8660,
            "ifr;": [55349, 56614],
            igrave: 236,
            "igrave;": 236,
            "ii;": 8520,
            "iiiint;": 10764,
            "iiint;": 8749,
            "iinfin;": 10716,
            "iiota;": 8489,
            "ijlig;": 307,
            "imacr;": 299,
            "image;": 8465,
            "imagline;": 8464,
            "imagpart;": 8465,
            "imath;": 305,
            "imof;": 8887,
            "imped;": 437,
            "in;": 8712,
            "incare;": 8453,
            "infin;": 8734,
            "infintie;": 10717,
            "inodot;": 305,
            "int;": 8747,
            "intcal;": 8890,
            "integers;": 8484,
            "intercal;": 8890,
            "intlarhk;": 10775,
            "intprod;": 10812,
            "iocy;": 1105,
            "iogon;": 303,
            "iopf;": [55349, 56666],
            "iota;": 953,
            "iprod;": 10812,
            iquest: 191,
            "iquest;": 191,
            "iscr;": [55349, 56510],
            "isin;": 8712,
            "isinE;": 8953,
            "isindot;": 8949,
            "isins;": 8948,
            "isinsv;": 8947,
            "isinv;": 8712,
            "it;": 8290,
            "itilde;": 297,
            "iukcy;": 1110,
            iuml: 239,
            "iuml;": 239,
            "jcirc;": 309,
            "jcy;": 1081,
            "jfr;": [55349, 56615],
            "jmath;": 567,
            "jopf;": [55349, 56667],
            "jscr;": [55349, 56511],
            "jsercy;": 1112,
            "jukcy;": 1108,
            "kappa;": 954,
            "kappav;": 1008,
            "kcedil;": 311,
            "kcy;": 1082,
            "kfr;": [55349, 56616],
            "kgreen;": 312,
            "khcy;": 1093,
            "kjcy;": 1116,
            "kopf;": [55349, 56668],
            "kscr;": [55349, 56512],
            "lAarr;": 8666,
            "lArr;": 8656,
            "lAtail;": 10523,
            "lBarr;": 10510,
            "lE;": 8806,
            "lEg;": 10891,
            "lHar;": 10594,
            "lacute;": 314,
            "laemptyv;": 10676,
            "lagran;": 8466,
            "lambda;": 955,
            "lang;": 10216,
            "langd;": 10641,
            "langle;": 10216,
            "lap;": 10885,
            laquo: 171,
            "laquo;": 171,
            "larr;": 8592,
            "larrb;": 8676,
            "larrbfs;": 10527,
            "larrfs;": 10525,
            "larrhk;": 8617,
            "larrlp;": 8619,
            "larrpl;": 10553,
            "larrsim;": 10611,
            "larrtl;": 8610,
            "lat;": 10923,
            "latail;": 10521,
            "late;": 10925,
            "lates;": [10925, 65024],
            "lbarr;": 10508,
            "lbbrk;": 10098,
            "lbrace;": 123,
            "lbrack;": 91,
            "lbrke;": 10635,
            "lbrksld;": 10639,
            "lbrkslu;": 10637,
            "lcaron;": 318,
            "lcedil;": 316,
            "lceil;": 8968,
            "lcub;": 123,
            "lcy;": 1083,
            "ldca;": 10550,
            "ldquo;": 8220,
            "ldquor;": 8222,
            "ldrdhar;": 10599,
            "ldrushar;": 10571,
            "ldsh;": 8626,
            "le;": 8804,
            "leftarrow;": 8592,
            "leftarrowtail;": 8610,
            "leftharpoondown;": 8637,
            "leftharpoonup;": 8636,
            "leftleftarrows;": 8647,
            "leftrightarrow;": 8596,
            "leftrightarrows;": 8646,
            "leftrightharpoons;": 8651,
            "leftrightsquigarrow;": 8621,
            "leftthreetimes;": 8907,
            "leg;": 8922,
            "leq;": 8804,
            "leqq;": 8806,
            "leqslant;": 10877,
            "les;": 10877,
            "lescc;": 10920,
            "lesdot;": 10879,
            "lesdoto;": 10881,
            "lesdotor;": 10883,
            "lesg;": [8922, 65024],
            "lesges;": 10899,
            "lessapprox;": 10885,
            "lessdot;": 8918,
            "lesseqgtr;": 8922,
            "lesseqqgtr;": 10891,
            "lessgtr;": 8822,
            "lesssim;": 8818,
            "lfisht;": 10620,
            "lfloor;": 8970,
            "lfr;": [55349, 56617],
            "lg;": 8822,
            "lgE;": 10897,
            "lhard;": 8637,
            "lharu;": 8636,
            "lharul;": 10602,
            "lhblk;": 9604,
            "ljcy;": 1113,
            "ll;": 8810,
            "llarr;": 8647,
            "llcorner;": 8990,
            "llhard;": 10603,
            "lltri;": 9722,
            "lmidot;": 320,
            "lmoust;": 9136,
            "lmoustache;": 9136,
            "lnE;": 8808,
            "lnap;": 10889,
            "lnapprox;": 10889,
            "lne;": 10887,
            "lneq;": 10887,
            "lneqq;": 8808,
            "lnsim;": 8934,
            "loang;": 10220,
            "loarr;": 8701,
            "lobrk;": 10214,
            "longleftarrow;": 10229,
            "longleftrightarrow;": 10231,
            "longmapsto;": 10236,
            "longrightarrow;": 10230,
            "looparrowleft;": 8619,
            "looparrowright;": 8620,
            "lopar;": 10629,
            "lopf;": [55349, 56669],
            "loplus;": 10797,
            "lotimes;": 10804,
            "lowast;": 8727,
            "lowbar;": 95,
            "loz;": 9674,
            "lozenge;": 9674,
            "lozf;": 10731,
            "lpar;": 40,
            "lparlt;": 10643,
            "lrarr;": 8646,
            "lrcorner;": 8991,
            "lrhar;": 8651,
            "lrhard;": 10605,
            "lrm;": 8206,
            "lrtri;": 8895,
            "lsaquo;": 8249,
            "lscr;": [55349, 56513],
            "lsh;": 8624,
            "lsim;": 8818,
            "lsime;": 10893,
            "lsimg;": 10895,
            "lsqb;": 91,
            "lsquo;": 8216,
            "lsquor;": 8218,
            "lstrok;": 322,
            lt: 60,
            "lt;": 60,
            "ltcc;": 10918,
            "ltcir;": 10873,
            "ltdot;": 8918,
            "lthree;": 8907,
            "ltimes;": 8905,
            "ltlarr;": 10614,
            "ltquest;": 10875,
            "ltrPar;": 10646,
            "ltri;": 9667,
            "ltrie;": 8884,
            "ltrif;": 9666,
            "lurdshar;": 10570,
            "luruhar;": 10598,
            "lvertneqq;": [8808, 65024],
            "lvnE;": [8808, 65024],
            "mDDot;": 8762,
            macr: 175,
            "macr;": 175,
            "male;": 9794,
            "malt;": 10016,
            "maltese;": 10016,
            "map;": 8614,
            "mapsto;": 8614,
            "mapstodown;": 8615,
            "mapstoleft;": 8612,
            "mapstoup;": 8613,
            "marker;": 9646,
            "mcomma;": 10793,
            "mcy;": 1084,
            "mdash;": 8212,
            "measuredangle;": 8737,
            "mfr;": [55349, 56618],
            "mho;": 8487,
            micro: 181,
            "micro;": 181,
            "mid;": 8739,
            "midast;": 42,
            "midcir;": 10992,
            middot: 183,
            "middot;": 183,
            "minus;": 8722,
            "minusb;": 8863,
            "minusd;": 8760,
            "minusdu;": 10794,
            "mlcp;": 10971,
            "mldr;": 8230,
            "mnplus;": 8723,
            "models;": 8871,
            "mopf;": [55349, 56670],
            "mp;": 8723,
            "mscr;": [55349, 56514],
            "mstpos;": 8766,
            "mu;": 956,
            "multimap;": 8888,
            "mumap;": 8888,
            "nGg;": [8921, 824],
            "nGt;": [8811, 8402],
            "nGtv;": [8811, 824],
            "nLeftarrow;": 8653,
            "nLeftrightarrow;": 8654,
            "nLl;": [8920, 824],
            "nLt;": [8810, 8402],
            "nLtv;": [8810, 824],
            "nRightarrow;": 8655,
            "nVDash;": 8879,
            "nVdash;": 8878,
            "nabla;": 8711,
            "nacute;": 324,
            "nang;": [8736, 8402],
            "nap;": 8777,
            "napE;": [10864, 824],
            "napid;": [8779, 824],
            "napos;": 329,
            "napprox;": 8777,
            "natur;": 9838,
            "natural;": 9838,
            "naturals;": 8469,
            nbsp: 160,
            "nbsp;": 160,
            "nbump;": [8782, 824],
            "nbumpe;": [8783, 824],
            "ncap;": 10819,
            "ncaron;": 328,
            "ncedil;": 326,
            "ncong;": 8775,
            "ncongdot;": [10861, 824],
            "ncup;": 10818,
            "ncy;": 1085,
            "ndash;": 8211,
            "ne;": 8800,
            "neArr;": 8663,
            "nearhk;": 10532,
            "nearr;": 8599,
            "nearrow;": 8599,
            "nedot;": [8784, 824],
            "nequiv;": 8802,
            "nesear;": 10536,
            "nesim;": [8770, 824],
            "nexist;": 8708,
            "nexists;": 8708,
            "nfr;": [55349, 56619],
            "ngE;": [8807, 824],
            "nge;": 8817,
            "ngeq;": 8817,
            "ngeqq;": [8807, 824],
            "ngeqslant;": [10878, 824],
            "nges;": [10878, 824],
            "ngsim;": 8821,
            "ngt;": 8815,
            "ngtr;": 8815,
            "nhArr;": 8654,
            "nharr;": 8622,
            "nhpar;": 10994,
            "ni;": 8715,
            "nis;": 8956,
            "nisd;": 8954,
            "niv;": 8715,
            "njcy;": 1114,
            "nlArr;": 8653,
            "nlE;": [8806, 824],
            "nlarr;": 8602,
            "nldr;": 8229,
            "nle;": 8816,
            "nleftarrow;": 8602,
            "nleftrightarrow;": 8622,
            "nleq;": 8816,
            "nleqq;": [8806, 824],
            "nleqslant;": [10877, 824],
            "nles;": [10877, 824],
            "nless;": 8814,
            "nlsim;": 8820,
            "nlt;": 8814,
            "nltri;": 8938,
            "nltrie;": 8940,
            "nmid;": 8740,
            "nopf;": [55349, 56671],
            not: 172,
            "not;": 172,
            "notin;": 8713,
            "notinE;": [8953, 824],
            "notindot;": [8949, 824],
            "notinva;": 8713,
            "notinvb;": 8951,
            "notinvc;": 8950,
            "notni;": 8716,
            "notniva;": 8716,
            "notnivb;": 8958,
            "notnivc;": 8957,
            "npar;": 8742,
            "nparallel;": 8742,
            "nparsl;": [11005, 8421],
            "npart;": [8706, 824],
            "npolint;": 10772,
            "npr;": 8832,
            "nprcue;": 8928,
            "npre;": [10927, 824],
            "nprec;": 8832,
            "npreceq;": [10927, 824],
            "nrArr;": 8655,
            "nrarr;": 8603,
            "nrarrc;": [10547, 824],
            "nrarrw;": [8605, 824],
            "nrightarrow;": 8603,
            "nrtri;": 8939,
            "nrtrie;": 8941,
            "nsc;": 8833,
            "nsccue;": 8929,
            "nsce;": [10928, 824],
            "nscr;": [55349, 56515],
            "nshortmid;": 8740,
            "nshortparallel;": 8742,
            "nsim;": 8769,
            "nsime;": 8772,
            "nsimeq;": 8772,
            "nsmid;": 8740,
            "nspar;": 8742,
            "nsqsube;": 8930,
            "nsqsupe;": 8931,
            "nsub;": 8836,
            "nsubE;": [10949, 824],
            "nsube;": 8840,
            "nsubset;": [8834, 8402],
            "nsubseteq;": 8840,
            "nsubseteqq;": [10949, 824],
            "nsucc;": 8833,
            "nsucceq;": [10928, 824],
            "nsup;": 8837,
            "nsupE;": [10950, 824],
            "nsupe;": 8841,
            "nsupset;": [8835, 8402],
            "nsupseteq;": 8841,
            "nsupseteqq;": [10950, 824],
            "ntgl;": 8825,
            ntilde: 241,
            "ntilde;": 241,
            "ntlg;": 8824,
            "ntriangleleft;": 8938,
            "ntrianglelefteq;": 8940,
            "ntriangleright;": 8939,
            "ntrianglerighteq;": 8941,
            "nu;": 957,
            "num;": 35,
            "numero;": 8470,
            "numsp;": 8199,
            "nvDash;": 8877,
            "nvHarr;": 10500,
            "nvap;": [8781, 8402],
            "nvdash;": 8876,
            "nvge;": [8805, 8402],
            "nvgt;": [62, 8402],
            "nvinfin;": 10718,
            "nvlArr;": 10498,
            "nvle;": [8804, 8402],
            "nvlt;": [60, 8402],
            "nvltrie;": [8884, 8402],
            "nvrArr;": 10499,
            "nvrtrie;": [8885, 8402],
            "nvsim;": [8764, 8402],
            "nwArr;": 8662,
            "nwarhk;": 10531,
            "nwarr;": 8598,
            "nwarrow;": 8598,
            "nwnear;": 10535,
            "oS;": 9416,
            oacute: 243,
            "oacute;": 243,
            "oast;": 8859,
            "ocir;": 8858,
            ocirc: 244,
            "ocirc;": 244,
            "ocy;": 1086,
            "odash;": 8861,
            "odblac;": 337,
            "odiv;": 10808,
            "odot;": 8857,
            "odsold;": 10684,
            "oelig;": 339,
            "ofcir;": 10687,
            "ofr;": [55349, 56620],
            "ogon;": 731,
            ograve: 242,
            "ograve;": 242,
            "ogt;": 10689,
            "ohbar;": 10677,
            "ohm;": 937,
            "oint;": 8750,
            "olarr;": 8634,
            "olcir;": 10686,
            "olcross;": 10683,
            "oline;": 8254,
            "olt;": 10688,
            "omacr;": 333,
            "omega;": 969,
            "omicron;": 959,
            "omid;": 10678,
            "ominus;": 8854,
            "oopf;": [55349, 56672],
            "opar;": 10679,
            "operp;": 10681,
            "oplus;": 8853,
            "or;": 8744,
            "orarr;": 8635,
            "ord;": 10845,
            "order;": 8500,
            "orderof;": 8500,
            ordf: 170,
            "ordf;": 170,
            ordm: 186,
            "ordm;": 186,
            "origof;": 8886,
            "oror;": 10838,
            "orslope;": 10839,
            "orv;": 10843,
            "oscr;": 8500,
            oslash: 248,
            "oslash;": 248,
            "osol;": 8856,
            otilde: 245,
            "otilde;": 245,
            "otimes;": 8855,
            "otimesas;": 10806,
            ouml: 246,
            "ouml;": 246,
            "ovbar;": 9021,
            "par;": 8741,
            para: 182,
            "para;": 182,
            "parallel;": 8741,
            "parsim;": 10995,
            "parsl;": 11005,
            "part;": 8706,
            "pcy;": 1087,
            "percnt;": 37,
            "period;": 46,
            "permil;": 8240,
            "perp;": 8869,
            "pertenk;": 8241,
            "pfr;": [55349, 56621],
            "phi;": 966,
            "phiv;": 981,
            "phmmat;": 8499,
            "phone;": 9742,
            "pi;": 960,
            "pitchfork;": 8916,
            "piv;": 982,
            "planck;": 8463,
            "planckh;": 8462,
            "plankv;": 8463,
            "plus;": 43,
            "plusacir;": 10787,
            "plusb;": 8862,
            "pluscir;": 10786,
            "plusdo;": 8724,
            "plusdu;": 10789,
            "pluse;": 10866,
            plusmn: 177,
            "plusmn;": 177,
            "plussim;": 10790,
            "plustwo;": 10791,
            "pm;": 177,
            "pointint;": 10773,
            "popf;": [55349, 56673],
            pound: 163,
            "pound;": 163,
            "pr;": 8826,
            "prE;": 10931,
            "prap;": 10935,
            "prcue;": 8828,
            "pre;": 10927,
            "prec;": 8826,
            "precapprox;": 10935,
            "preccurlyeq;": 8828,
            "preceq;": 10927,
            "precnapprox;": 10937,
            "precneqq;": 10933,
            "precnsim;": 8936,
            "precsim;": 8830,
            "prime;": 8242,
            "primes;": 8473,
            "prnE;": 10933,
            "prnap;": 10937,
            "prnsim;": 8936,
            "prod;": 8719,
            "profalar;": 9006,
            "profline;": 8978,
            "profsurf;": 8979,
            "prop;": 8733,
            "propto;": 8733,
            "prsim;": 8830,
            "prurel;": 8880,
            "pscr;": [55349, 56517],
            "psi;": 968,
            "puncsp;": 8200,
            "qfr;": [55349, 56622],
            "qint;": 10764,
            "qopf;": [55349, 56674],
            "qprime;": 8279,
            "qscr;": [55349, 56518],
            "quaternions;": 8461,
            "quatint;": 10774,
            "quest;": 63,
            "questeq;": 8799,
            quot: 34,
            "quot;": 34,
            "rAarr;": 8667,
            "rArr;": 8658,
            "rAtail;": 10524,
            "rBarr;": 10511,
            "rHar;": 10596,
            "race;": [8765, 817],
            "racute;": 341,
            "radic;": 8730,
            "raemptyv;": 10675,
            "rang;": 10217,
            "rangd;": 10642,
            "range;": 10661,
            "rangle;": 10217,
            raquo: 187,
            "raquo;": 187,
            "rarr;": 8594,
            "rarrap;": 10613,
            "rarrb;": 8677,
            "rarrbfs;": 10528,
            "rarrc;": 10547,
            "rarrfs;": 10526,
            "rarrhk;": 8618,
            "rarrlp;": 8620,
            "rarrpl;": 10565,
            "rarrsim;": 10612,
            "rarrtl;": 8611,
            "rarrw;": 8605,
            "ratail;": 10522,
            "ratio;": 8758,
            "rationals;": 8474,
            "rbarr;": 10509,
            "rbbrk;": 10099,
            "rbrace;": 125,
            "rbrack;": 93,
            "rbrke;": 10636,
            "rbrksld;": 10638,
            "rbrkslu;": 10640,
            "rcaron;": 345,
            "rcedil;": 343,
            "rceil;": 8969,
            "rcub;": 125,
            "rcy;": 1088,
            "rdca;": 10551,
            "rdldhar;": 10601,
            "rdquo;": 8221,
            "rdquor;": 8221,
            "rdsh;": 8627,
            "real;": 8476,
            "realine;": 8475,
            "realpart;": 8476,
            "reals;": 8477,
            "rect;": 9645,
            reg: 174,
            "reg;": 174,
            "rfisht;": 10621,
            "rfloor;": 8971,
            "rfr;": [55349, 56623],
            "rhard;": 8641,
            "rharu;": 8640,
            "rharul;": 10604,
            "rho;": 961,
            "rhov;": 1009,
            "rightarrow;": 8594,
            "rightarrowtail;": 8611,
            "rightharpoondown;": 8641,
            "rightharpoonup;": 8640,
            "rightleftarrows;": 8644,
            "rightleftharpoons;": 8652,
            "rightrightarrows;": 8649,
            "rightsquigarrow;": 8605,
            "rightthreetimes;": 8908,
            "ring;": 730,
            "risingdotseq;": 8787,
            "rlarr;": 8644,
            "rlhar;": 8652,
            "rlm;": 8207,
            "rmoust;": 9137,
            "rmoustache;": 9137,
            "rnmid;": 10990,
            "roang;": 10221,
            "roarr;": 8702,
            "robrk;": 10215,
            "ropar;": 10630,
            "ropf;": [55349, 56675],
            "roplus;": 10798,
            "rotimes;": 10805,
            "rpar;": 41,
            "rpargt;": 10644,
            "rppolint;": 10770,
            "rrarr;": 8649,
            "rsaquo;": 8250,
            "rscr;": [55349, 56519],
            "rsh;": 8625,
            "rsqb;": 93,
            "rsquo;": 8217,
            "rsquor;": 8217,
            "rthree;": 8908,
            "rtimes;": 8906,
            "rtri;": 9657,
            "rtrie;": 8885,
            "rtrif;": 9656,
            "rtriltri;": 10702,
            "ruluhar;": 10600,
            "rx;": 8478,
            "sacute;": 347,
            "sbquo;": 8218,
            "sc;": 8827,
            "scE;": 10932,
            "scap;": 10936,
            "scaron;": 353,
            "sccue;": 8829,
            "sce;": 10928,
            "scedil;": 351,
            "scirc;": 349,
            "scnE;": 10934,
            "scnap;": 10938,
            "scnsim;": 8937,
            "scpolint;": 10771,
            "scsim;": 8831,
            "scy;": 1089,
            "sdot;": 8901,
            "sdotb;": 8865,
            "sdote;": 10854,
            "seArr;": 8664,
            "searhk;": 10533,
            "searr;": 8600,
            "searrow;": 8600,
            sect: 167,
            "sect;": 167,
            "semi;": 59,
            "seswar;": 10537,
            "setminus;": 8726,
            "setmn;": 8726,
            "sext;": 10038,
            "sfr;": [55349, 56624],
            "sfrown;": 8994,
            "sharp;": 9839,
            "shchcy;": 1097,
            "shcy;": 1096,
            "shortmid;": 8739,
            "shortparallel;": 8741,
            shy: 173,
            "shy;": 173,
            "sigma;": 963,
            "sigmaf;": 962,
            "sigmav;": 962,
            "sim;": 8764,
            "simdot;": 10858,
            "sime;": 8771,
            "simeq;": 8771,
            "simg;": 10910,
            "simgE;": 10912,
            "siml;": 10909,
            "simlE;": 10911,
            "simne;": 8774,
            "simplus;": 10788,
            "simrarr;": 10610,
            "slarr;": 8592,
            "smallsetminus;": 8726,
            "smashp;": 10803,
            "smeparsl;": 10724,
            "smid;": 8739,
            "smile;": 8995,
            "smt;": 10922,
            "smte;": 10924,
            "smtes;": [10924, 65024],
            "softcy;": 1100,
            "sol;": 47,
            "solb;": 10692,
            "solbar;": 9023,
            "sopf;": [55349, 56676],
            "spades;": 9824,
            "spadesuit;": 9824,
            "spar;": 8741,
            "sqcap;": 8851,
            "sqcaps;": [8851, 65024],
            "sqcup;": 8852,
            "sqcups;": [8852, 65024],
            "sqsub;": 8847,
            "sqsube;": 8849,
            "sqsubset;": 8847,
            "sqsubseteq;": 8849,
            "sqsup;": 8848,
            "sqsupe;": 8850,
            "sqsupset;": 8848,
            "sqsupseteq;": 8850,
            "squ;": 9633,
            "square;": 9633,
            "squarf;": 9642,
            "squf;": 9642,
            "srarr;": 8594,
            "sscr;": [55349, 56520],
            "ssetmn;": 8726,
            "ssmile;": 8995,
            "sstarf;": 8902,
            "star;": 9734,
            "starf;": 9733,
            "straightepsilon;": 1013,
            "straightphi;": 981,
            "strns;": 175,
            "sub;": 8834,
            "subE;": 10949,
            "subdot;": 10941,
            "sube;": 8838,
            "subedot;": 10947,
            "submult;": 10945,
            "subnE;": 10955,
            "subne;": 8842,
            "subplus;": 10943,
            "subrarr;": 10617,
            "subset;": 8834,
            "subseteq;": 8838,
            "subseteqq;": 10949,
            "subsetneq;": 8842,
            "subsetneqq;": 10955,
            "subsim;": 10951,
            "subsub;": 10965,
            "subsup;": 10963,
            "succ;": 8827,
            "succapprox;": 10936,
            "succcurlyeq;": 8829,
            "succeq;": 10928,
            "succnapprox;": 10938,
            "succneqq;": 10934,
            "succnsim;": 8937,
            "succsim;": 8831,
            "sum;": 8721,
            "sung;": 9834,
            sup1: 185,
            "sup1;": 185,
            sup2: 178,
            "sup2;": 178,
            sup3: 179,
            "sup3;": 179,
            "sup;": 8835,
            "supE;": 10950,
            "supdot;": 10942,
            "supdsub;": 10968,
            "supe;": 8839,
            "supedot;": 10948,
            "suphsol;": 10185,
            "suphsub;": 10967,
            "suplarr;": 10619,
            "supmult;": 10946,
            "supnE;": 10956,
            "supne;": 8843,
            "supplus;": 10944,
            "supset;": 8835,
            "supseteq;": 8839,
            "supseteqq;": 10950,
            "supsetneq;": 8843,
            "supsetneqq;": 10956,
            "supsim;": 10952,
            "supsub;": 10964,
            "supsup;": 10966,
            "swArr;": 8665,
            "swarhk;": 10534,
            "swarr;": 8601,
            "swarrow;": 8601,
            "swnwar;": 10538,
            szlig: 223,
            "szlig;": 223,
            "target;": 8982,
            "tau;": 964,
            "tbrk;": 9140,
            "tcaron;": 357,
            "tcedil;": 355,
            "tcy;": 1090,
            "tdot;": 8411,
            "telrec;": 8981,
            "tfr;": [55349, 56625],
            "there4;": 8756,
            "therefore;": 8756,
            "theta;": 952,
            "thetasym;": 977,
            "thetav;": 977,
            "thickapprox;": 8776,
            "thicksim;": 8764,
            "thinsp;": 8201,
            "thkap;": 8776,
            "thksim;": 8764,
            thorn: 254,
            "thorn;": 254,
            "tilde;": 732,
            times: 215,
            "times;": 215,
            "timesb;": 8864,
            "timesbar;": 10801,
            "timesd;": 10800,
            "tint;": 8749,
            "toea;": 10536,
            "top;": 8868,
            "topbot;": 9014,
            "topcir;": 10993,
            "topf;": [55349, 56677],
            "topfork;": 10970,
            "tosa;": 10537,
            "tprime;": 8244,
            "trade;": 8482,
            "triangle;": 9653,
            "triangledown;": 9663,
            "triangleleft;": 9667,
            "trianglelefteq;": 8884,
            "triangleq;": 8796,
            "triangleright;": 9657,
            "trianglerighteq;": 8885,
            "tridot;": 9708,
            "trie;": 8796,
            "triminus;": 10810,
            "triplus;": 10809,
            "trisb;": 10701,
            "tritime;": 10811,
            "trpezium;": 9186,
            "tscr;": [55349, 56521],
            "tscy;": 1094,
            "tshcy;": 1115,
            "tstrok;": 359,
            "twixt;": 8812,
            "twoheadleftarrow;": 8606,
            "twoheadrightarrow;": 8608,
            "uArr;": 8657,
            "uHar;": 10595,
            uacute: 250,
            "uacute;": 250,
            "uarr;": 8593,
            "ubrcy;": 1118,
            "ubreve;": 365,
            ucirc: 251,
            "ucirc;": 251,
            "ucy;": 1091,
            "udarr;": 8645,
            "udblac;": 369,
            "udhar;": 10606,
            "ufisht;": 10622,
            "ufr;": [55349, 56626],
            ugrave: 249,
            "ugrave;": 249,
            "uharl;": 8639,
            "uharr;": 8638,
            "uhblk;": 9600,
            "ulcorn;": 8988,
            "ulcorner;": 8988,
            "ulcrop;": 8975,
            "ultri;": 9720,
            "umacr;": 363,
            uml: 168,
            "uml;": 168,
            "uogon;": 371,
            "uopf;": [55349, 56678],
            "uparrow;": 8593,
            "updownarrow;": 8597,
            "upharpoonleft;": 8639,
            "upharpoonright;": 8638,
            "uplus;": 8846,
            "upsi;": 965,
            "upsih;": 978,
            "upsilon;": 965,
            "upuparrows;": 8648,
            "urcorn;": 8989,
            "urcorner;": 8989,
            "urcrop;": 8974,
            "uring;": 367,
            "urtri;": 9721,
            "uscr;": [55349, 56522],
            "utdot;": 8944,
            "utilde;": 361,
            "utri;": 9653,
            "utrif;": 9652,
            "uuarr;": 8648,
            uuml: 252,
            "uuml;": 252,
            "uwangle;": 10663,
            "vArr;": 8661,
            "vBar;": 10984,
            "vBarv;": 10985,
            "vDash;": 8872,
            "vangrt;": 10652,
            "varepsilon;": 1013,
            "varkappa;": 1008,
            "varnothing;": 8709,
            "varphi;": 981,
            "varpi;": 982,
            "varpropto;": 8733,
            "varr;": 8597,
            "varrho;": 1009,
            "varsigma;": 962,
            "varsubsetneq;": [8842, 65024],
            "varsubsetneqq;": [10955, 65024],
            "varsupsetneq;": [8843, 65024],
            "varsupsetneqq;": [10956, 65024],
            "vartheta;": 977,
            "vartriangleleft;": 8882,
            "vartriangleright;": 8883,
            "vcy;": 1074,
            "vdash;": 8866,
            "vee;": 8744,
            "veebar;": 8891,
            "veeeq;": 8794,
            "vellip;": 8942,
            "verbar;": 124,
            "vert;": 124,
            "vfr;": [55349, 56627],
            "vltri;": 8882,
            "vnsub;": [8834, 8402],
            "vnsup;": [8835, 8402],
            "vopf;": [55349, 56679],
            "vprop;": 8733,
            "vrtri;": 8883,
            "vscr;": [55349, 56523],
            "vsubnE;": [10955, 65024],
            "vsubne;": [8842, 65024],
            "vsupnE;": [10956, 65024],
            "vsupne;": [8843, 65024],
            "vzigzag;": 10650,
            "wcirc;": 373,
            "wedbar;": 10847,
            "wedge;": 8743,
            "wedgeq;": 8793,
            "weierp;": 8472,
            "wfr;": [55349, 56628],
            "wopf;": [55349, 56680],
            "wp;": 8472,
            "wr;": 8768,
            "wreath;": 8768,
            "wscr;": [55349, 56524],
            "xcap;": 8898,
            "xcirc;": 9711,
            "xcup;": 8899,
            "xdtri;": 9661,
            "xfr;": [55349, 56629],
            "xhArr;": 10234,
            "xharr;": 10231,
            "xi;": 958,
            "xlArr;": 10232,
            "xlarr;": 10229,
            "xmap;": 10236,
            "xnis;": 8955,
            "xodot;": 10752,
            "xopf;": [55349, 56681],
            "xoplus;": 10753,
            "xotime;": 10754,
            "xrArr;": 10233,
            "xrarr;": 10230,
            "xscr;": [55349, 56525],
            "xsqcup;": 10758,
            "xuplus;": 10756,
            "xutri;": 9651,
            "xvee;": 8897,
            "xwedge;": 8896,
            yacute: 253,
            "yacute;": 253,
            "yacy;": 1103,
            "ycirc;": 375,
            "ycy;": 1099,
            yen: 165,
            "yen;": 165,
            "yfr;": [55349, 56630],
            "yicy;": 1111,
            "yopf;": [55349, 56682],
            "yscr;": [55349, 56526],
            "yucy;": 1102,
            yuml: 255,
            "yuml;": 255,
            "zacute;": 378,
            "zcaron;": 382,
            "zcy;": 1079,
            "zdot;": 380,
            "zeetrf;": 8488,
            "zeta;": 950,
            "zfr;": [55349, 56631],
            "zhcy;": 1078,
            "zigrarr;": 8669,
            "zopf;": [55349, 56683],
            "zscr;": [55349, 56527],
            "zwj;": 8205,
            "zwnj;": 8204
        },
        pg2 = /(A(?:Elig;?|MP;?|acute;?|breve;|c(?:irc;?|y;)|fr;|grave;?|lpha;|macr;|nd;|o(?:gon;|pf;)|pplyFunction;|ring;?|s(?:cr;|sign;)|tilde;?|uml;?)|B(?:a(?:ckslash;|r(?:v;|wed;))|cy;|e(?:cause;|rnoullis;|ta;)|fr;|opf;|reve;|scr;|umpeq;)|C(?:Hcy;|OPY;?|a(?:cute;|p(?:;|italDifferentialD;)|yleys;)|c(?:aron;|edil;?|irc;|onint;)|dot;|e(?:dilla;|nterDot;)|fr;|hi;|ircle(?:Dot;|Minus;|Plus;|Times;)|lo(?:ckwiseContourIntegral;|seCurly(?:DoubleQuote;|Quote;))|o(?:lon(?:;|e;)|n(?:gruent;|int;|tourIntegral;)|p(?:f;|roduct;)|unterClockwiseContourIntegral;)|ross;|scr;|up(?:;|Cap;))|D(?:D(?:;|otrahd;)|Jcy;|Scy;|Zcy;|a(?:gger;|rr;|shv;)|c(?:aron;|y;)|el(?:;|ta;)|fr;|i(?:a(?:critical(?:Acute;|Do(?:t;|ubleAcute;)|Grave;|Tilde;)|mond;)|fferentialD;)|o(?:pf;|t(?:;|Dot;|Equal;)|uble(?:ContourIntegral;|Do(?:t;|wnArrow;)|L(?:eft(?:Arrow;|RightArrow;|Tee;)|ong(?:Left(?:Arrow;|RightArrow;)|RightArrow;))|Right(?:Arrow;|Tee;)|Up(?:Arrow;|DownArrow;)|VerticalBar;)|wn(?:Arrow(?:;|Bar;|UpArrow;)|Breve;|Left(?:RightVector;|TeeVector;|Vector(?:;|Bar;))|Right(?:TeeVector;|Vector(?:;|Bar;))|Tee(?:;|Arrow;)|arrow;))|s(?:cr;|trok;))|E(?:NG;|TH;?|acute;?|c(?:aron;|irc;?|y;)|dot;|fr;|grave;?|lement;|m(?:acr;|pty(?:SmallSquare;|VerySmallSquare;))|o(?:gon;|pf;)|psilon;|qu(?:al(?:;|Tilde;)|ilibrium;)|s(?:cr;|im;)|ta;|uml;?|x(?:ists;|ponentialE;))|F(?:cy;|fr;|illed(?:SmallSquare;|VerySmallSquare;)|o(?:pf;|rAll;|uriertrf;)|scr;)|G(?:Jcy;|T;?|amma(?:;|d;)|breve;|c(?:edil;|irc;|y;)|dot;|fr;|g;|opf;|reater(?:Equal(?:;|Less;)|FullEqual;|Greater;|Less;|SlantEqual;|Tilde;)|scr;|t;)|H(?:ARDcy;|a(?:cek;|t;)|circ;|fr;|ilbertSpace;|o(?:pf;|rizontalLine;)|s(?:cr;|trok;)|ump(?:DownHump;|Equal;))|I(?:Ecy;|Jlig;|Ocy;|acute;?|c(?:irc;?|y;)|dot;|fr;|grave;?|m(?:;|a(?:cr;|ginaryI;)|plies;)|n(?:t(?:;|e(?:gral;|rsection;))|visible(?:Comma;|Times;))|o(?:gon;|pf;|ta;)|scr;|tilde;|u(?:kcy;|ml;?))|J(?:c(?:irc;|y;)|fr;|opf;|s(?:cr;|ercy;)|ukcy;)|K(?:Hcy;|Jcy;|appa;|c(?:edil;|y;)|fr;|opf;|scr;)|L(?:Jcy;|T;?|a(?:cute;|mbda;|ng;|placetrf;|rr;)|c(?:aron;|edil;|y;)|e(?:ft(?:A(?:ngleBracket;|rrow(?:;|Bar;|RightArrow;))|Ceiling;|Do(?:ubleBracket;|wn(?:TeeVector;|Vector(?:;|Bar;)))|Floor;|Right(?:Arrow;|Vector;)|T(?:ee(?:;|Arrow;|Vector;)|riangle(?:;|Bar;|Equal;))|Up(?:DownVector;|TeeVector;|Vector(?:;|Bar;))|Vector(?:;|Bar;)|arrow;|rightarrow;)|ss(?:EqualGreater;|FullEqual;|Greater;|Less;|SlantEqual;|Tilde;))|fr;|l(?:;|eftarrow;)|midot;|o(?:ng(?:Left(?:Arrow;|RightArrow;)|RightArrow;|left(?:arrow;|rightarrow;)|rightarrow;)|pf;|wer(?:LeftArrow;|RightArrow;))|s(?:cr;|h;|trok;)|t;)|M(?:ap;|cy;|e(?:diumSpace;|llintrf;)|fr;|inusPlus;|opf;|scr;|u;)|N(?:Jcy;|acute;|c(?:aron;|edil;|y;)|e(?:gative(?:MediumSpace;|Thi(?:ckSpace;|nSpace;)|VeryThinSpace;)|sted(?:GreaterGreater;|LessLess;)|wLine;)|fr;|o(?:Break;|nBreakingSpace;|pf;|t(?:;|C(?:ongruent;|upCap;)|DoubleVerticalBar;|E(?:lement;|qual(?:;|Tilde;)|xists;)|Greater(?:;|Equal;|FullEqual;|Greater;|Less;|SlantEqual;|Tilde;)|Hump(?:DownHump;|Equal;)|Le(?:ftTriangle(?:;|Bar;|Equal;)|ss(?:;|Equal;|Greater;|Less;|SlantEqual;|Tilde;))|Nested(?:GreaterGreater;|LessLess;)|Precedes(?:;|Equal;|SlantEqual;)|R(?:everseElement;|ightTriangle(?:;|Bar;|Equal;))|S(?:quareSu(?:bset(?:;|Equal;)|perset(?:;|Equal;))|u(?:bset(?:;|Equal;)|cceeds(?:;|Equal;|SlantEqual;|Tilde;)|perset(?:;|Equal;)))|Tilde(?:;|Equal;|FullEqual;|Tilde;)|VerticalBar;))|scr;|tilde;?|u;)|O(?:Elig;|acute;?|c(?:irc;?|y;)|dblac;|fr;|grave;?|m(?:acr;|ega;|icron;)|opf;|penCurly(?:DoubleQuote;|Quote;)|r;|s(?:cr;|lash;?)|ti(?:lde;?|mes;)|uml;?|ver(?:B(?:ar;|rac(?:e;|ket;))|Parenthesis;))|P(?:artialD;|cy;|fr;|hi;|i;|lusMinus;|o(?:incareplane;|pf;)|r(?:;|ecedes(?:;|Equal;|SlantEqual;|Tilde;)|ime;|o(?:duct;|portion(?:;|al;)))|s(?:cr;|i;))|Q(?:UOT;?|fr;|opf;|scr;)|R(?:Barr;|EG;?|a(?:cute;|ng;|rr(?:;|tl;))|c(?:aron;|edil;|y;)|e(?:;|verse(?:E(?:lement;|quilibrium;)|UpEquilibrium;))|fr;|ho;|ight(?:A(?:ngleBracket;|rrow(?:;|Bar;|LeftArrow;))|Ceiling;|Do(?:ubleBracket;|wn(?:TeeVector;|Vector(?:;|Bar;)))|Floor;|T(?:ee(?:;|Arrow;|Vector;)|riangle(?:;|Bar;|Equal;))|Up(?:DownVector;|TeeVector;|Vector(?:;|Bar;))|Vector(?:;|Bar;)|arrow;)|o(?:pf;|undImplies;)|rightarrow;|s(?:cr;|h;)|uleDelayed;)|S(?:H(?:CHcy;|cy;)|OFTcy;|acute;|c(?:;|aron;|edil;|irc;|y;)|fr;|hort(?:DownArrow;|LeftArrow;|RightArrow;|UpArrow;)|igma;|mallCircle;|opf;|q(?:rt;|uare(?:;|Intersection;|Su(?:bset(?:;|Equal;)|perset(?:;|Equal;))|Union;))|scr;|tar;|u(?:b(?:;|set(?:;|Equal;))|c(?:ceeds(?:;|Equal;|SlantEqual;|Tilde;)|hThat;)|m;|p(?:;|erset(?:;|Equal;)|set;)))|T(?:HORN;?|RADE;|S(?:Hcy;|cy;)|a(?:b;|u;)|c(?:aron;|edil;|y;)|fr;|h(?:e(?:refore;|ta;)|i(?:ckSpace;|nSpace;))|ilde(?:;|Equal;|FullEqual;|Tilde;)|opf;|ripleDot;|s(?:cr;|trok;))|U(?:a(?:cute;?|rr(?:;|ocir;))|br(?:cy;|eve;)|c(?:irc;?|y;)|dblac;|fr;|grave;?|macr;|n(?:der(?:B(?:ar;|rac(?:e;|ket;))|Parenthesis;)|ion(?:;|Plus;))|o(?:gon;|pf;)|p(?:Arrow(?:;|Bar;|DownArrow;)|DownArrow;|Equilibrium;|Tee(?:;|Arrow;)|arrow;|downarrow;|per(?:LeftArrow;|RightArrow;)|si(?:;|lon;))|ring;|scr;|tilde;|uml;?)|V(?:Dash;|bar;|cy;|dash(?:;|l;)|e(?:e;|r(?:bar;|t(?:;|ical(?:Bar;|Line;|Separator;|Tilde;))|yThinSpace;))|fr;|opf;|scr;|vdash;)|W(?:circ;|edge;|fr;|opf;|scr;)|X(?:fr;|i;|opf;|scr;)|Y(?:Acy;|Icy;|Ucy;|acute;?|c(?:irc;|y;)|fr;|opf;|scr;|uml;)|Z(?:Hcy;|acute;|c(?:aron;|y;)|dot;|e(?:roWidthSpace;|ta;)|fr;|opf;|scr;)|a(?:acute;?|breve;|c(?:;|E;|d;|irc;?|ute;?|y;)|elig;?|f(?:;|r;)|grave;?|l(?:e(?:fsym;|ph;)|pha;)|m(?:a(?:cr;|lg;)|p;?)|n(?:d(?:;|and;|d;|slope;|v;)|g(?:;|e;|le;|msd(?:;|a(?:a;|b;|c;|d;|e;|f;|g;|h;))|rt(?:;|vb(?:;|d;))|s(?:ph;|t;)|zarr;))|o(?:gon;|pf;)|p(?:;|E;|acir;|e;|id;|os;|prox(?:;|eq;))|ring;?|s(?:cr;|t;|ymp(?:;|eq;))|tilde;?|uml;?|w(?:conint;|int;))|b(?:Not;|a(?:ck(?:cong;|epsilon;|prime;|sim(?:;|eq;))|r(?:vee;|wed(?:;|ge;)))|brk(?:;|tbrk;)|c(?:ong;|y;)|dquo;|e(?:caus(?:;|e;)|mptyv;|psi;|rnou;|t(?:a;|h;|ween;))|fr;|ig(?:c(?:ap;|irc;|up;)|o(?:dot;|plus;|times;)|s(?:qcup;|tar;)|triangle(?:down;|up;)|uplus;|vee;|wedge;)|karow;|l(?:a(?:ck(?:lozenge;|square;|triangle(?:;|down;|left;|right;))|nk;)|k(?:1(?:2;|4;)|34;)|ock;)|n(?:e(?:;|quiv;)|ot;)|o(?:pf;|t(?:;|tom;)|wtie;|x(?:D(?:L;|R;|l;|r;)|H(?:;|D;|U;|d;|u;)|U(?:L;|R;|l;|r;)|V(?:;|H;|L;|R;|h;|l;|r;)|box;|d(?:L;|R;|l;|r;)|h(?:;|D;|U;|d;|u;)|minus;|plus;|times;|u(?:L;|R;|l;|r;)|v(?:;|H;|L;|R;|h;|l;|r;)))|prime;|r(?:eve;|vbar;?)|s(?:cr;|emi;|im(?:;|e;)|ol(?:;|b;|hsub;))|u(?:ll(?:;|et;)|mp(?:;|E;|e(?:;|q;))))|c(?:a(?:cute;|p(?:;|and;|brcup;|c(?:ap;|up;)|dot;|s;)|r(?:et;|on;))|c(?:a(?:ps;|ron;)|edil;?|irc;|ups(?:;|sm;))|dot;|e(?:dil;?|mptyv;|nt(?:;|erdot;|))|fr;|h(?:cy;|eck(?:;|mark;)|i;)|ir(?:;|E;|c(?:;|eq;|le(?:arrow(?:left;|right;)|d(?:R;|S;|ast;|circ;|dash;)))|e;|fnint;|mid;|scir;)|lubs(?:;|uit;)|o(?:lon(?:;|e(?:;|q;))|m(?:ma(?:;|t;)|p(?:;|fn;|le(?:ment;|xes;)))|n(?:g(?:;|dot;)|int;)|p(?:f;|rod;|y(?:;|sr;|)))|r(?:arr;|oss;)|s(?:cr;|u(?:b(?:;|e;)|p(?:;|e;)))|tdot;|u(?:darr(?:l;|r;)|e(?:pr;|sc;)|larr(?:;|p;)|p(?:;|brcap;|c(?:ap;|up;)|dot;|or;|s;)|r(?:arr(?:;|m;)|ly(?:eq(?:prec;|succ;)|vee;|wedge;)|ren;?|vearrow(?:left;|right;))|vee;|wed;)|w(?:conint;|int;)|ylcty;)|d(?:Arr;|Har;|a(?:gger;|leth;|rr;|sh(?:;|v;))|b(?:karow;|lac;)|c(?:aron;|y;)|d(?:;|a(?:gger;|rr;)|otseq;)|e(?:g;?|lta;|mptyv;)|f(?:isht;|r;)|har(?:l;|r;)|i(?:am(?:;|ond(?:;|suit;)|s;)|e;|gamma;|sin;|v(?:;|ide(?:;|ontimes;|)|onx;))|jcy;|lc(?:orn;|rop;)|o(?:llar;|pf;|t(?:;|eq(?:;|dot;)|minus;|plus;|square;)|ublebarwedge;|wn(?:arrow;|downarrows;|harpoon(?:left;|right;)))|r(?:bkarow;|c(?:orn;|rop;))|s(?:c(?:r;|y;)|ol;|trok;)|t(?:dot;|ri(?:;|f;))|u(?:arr;|har;)|wangle;|z(?:cy;|igrarr;))|e(?:D(?:Dot;|ot;)|a(?:cute;?|ster;)|c(?:aron;|ir(?:;|c;?)|olon;|y;)|dot;|e;|f(?:Dot;|r;)|g(?:;|rave;?|s(?:;|dot;))|l(?:;|inters;|l;|s(?:;|dot;))|m(?:acr;|pty(?:;|set;|v;)|sp(?:1(?:3;|4;)|;))|n(?:g;|sp;)|o(?:gon;|pf;)|p(?:ar(?:;|sl;)|lus;|si(?:;|lon;|v;))|q(?:c(?:irc;|olon;)|s(?:im;|lant(?:gtr;|less;))|u(?:als;|est;|iv(?:;|DD;))|vparsl;)|r(?:Dot;|arr;)|s(?:cr;|dot;|im;)|t(?:a;|h;?)|u(?:ml;?|ro;)|x(?:cl;|ist;|p(?:ectation;|onentiale;)))|f(?:allingdotseq;|cy;|emale;|f(?:ilig;|l(?:ig;|lig;)|r;)|ilig;|jlig;|l(?:at;|lig;|tns;)|nof;|o(?:pf;|r(?:all;|k(?:;|v;)))|partint;|r(?:a(?:c(?:1(?:2;?|3;|4;?|5;|6;|8;)|2(?:3;|5;)|3(?:4;?|5;|8;)|45;|5(?:6;|8;)|78;)|sl;)|own;)|scr;)|g(?:E(?:;|l;)|a(?:cute;|mma(?:;|d;)|p;)|breve;|c(?:irc;|y;)|dot;|e(?:;|l;|q(?:;|q;|slant;)|s(?:;|cc;|dot(?:;|o(?:;|l;))|l(?:;|es;)))|fr;|g(?:;|g;)|imel;|jcy;|l(?:;|E;|a;|j;)|n(?:E;|ap(?:;|prox;)|e(?:;|q(?:;|q;))|sim;)|opf;|rave;|s(?:cr;|im(?:;|e;|l;))|t(?:;|c(?:c;|ir;)|dot;|lPar;|quest;|r(?:a(?:pprox;|rr;)|dot;|eq(?:less;|qless;)|less;|sim;)|)|v(?:ertneqq;|nE;))|h(?:Arr;|a(?:irsp;|lf;|milt;|r(?:dcy;|r(?:;|cir;|w;)))|bar;|circ;|e(?:arts(?:;|uit;)|llip;|rcon;)|fr;|ks(?:earow;|warow;)|o(?:arr;|mtht;|ok(?:leftarrow;|rightarrow;)|pf;|rbar;)|s(?:cr;|lash;|trok;)|y(?:bull;|phen;))|i(?:acute;?|c(?:;|irc;?|y;)|e(?:cy;|xcl;?)|f(?:f;|r;)|grave;?|i(?:;|i(?:int;|nt;)|nfin;|ota;)|jlig;|m(?:a(?:cr;|g(?:e;|line;|part;)|th;)|of;|ped;)|n(?:;|care;|fin(?:;|tie;)|odot;|t(?:;|cal;|e(?:gers;|rcal;)|larhk;|prod;))|o(?:cy;|gon;|pf;|ta;)|prod;|quest;?|s(?:cr;|in(?:;|E;|dot;|s(?:;|v;)|v;))|t(?:;|ilde;)|u(?:kcy;|ml;?))|j(?:c(?:irc;|y;)|fr;|math;|opf;|s(?:cr;|ercy;)|ukcy;)|k(?:appa(?:;|v;)|c(?:edil;|y;)|fr;|green;|hcy;|jcy;|opf;|scr;)|l(?:A(?:arr;|rr;|tail;)|Barr;|E(?:;|g;)|Har;|a(?:cute;|emptyv;|gran;|mbda;|ng(?:;|d;|le;)|p;|quo;?|rr(?:;|b(?:;|fs;)|fs;|hk;|lp;|pl;|sim;|tl;)|t(?:;|ail;|e(?:;|s;)))|b(?:arr;|brk;|r(?:ac(?:e;|k;)|k(?:e;|sl(?:d;|u;))))|c(?:aron;|e(?:dil;|il;)|ub;|y;)|d(?:ca;|quo(?:;|r;)|r(?:dhar;|ushar;)|sh;)|e(?:;|ft(?:arrow(?:;|tail;)|harpoon(?:down;|up;)|leftarrows;|right(?:arrow(?:;|s;)|harpoons;|squigarrow;)|threetimes;)|g;|q(?:;|q;|slant;)|s(?:;|cc;|dot(?:;|o(?:;|r;))|g(?:;|es;)|s(?:approx;|dot;|eq(?:gtr;|qgtr;)|gtr;|sim;)))|f(?:isht;|loor;|r;)|g(?:;|E;)|h(?:ar(?:d;|u(?:;|l;))|blk;)|jcy;|l(?:;|arr;|corner;|hard;|tri;)|m(?:idot;|oust(?:;|ache;))|n(?:E;|ap(?:;|prox;)|e(?:;|q(?:;|q;))|sim;)|o(?:a(?:ng;|rr;)|brk;|ng(?:left(?:arrow;|rightarrow;)|mapsto;|rightarrow;)|oparrow(?:left;|right;)|p(?:ar;|f;|lus;)|times;|w(?:ast;|bar;)|z(?:;|enge;|f;))|par(?:;|lt;)|r(?:arr;|corner;|har(?:;|d;)|m;|tri;)|s(?:aquo;|cr;|h;|im(?:;|e;|g;)|q(?:b;|uo(?:;|r;))|trok;)|t(?:;|c(?:c;|ir;)|dot;|hree;|imes;|larr;|quest;|r(?:Par;|i(?:;|e;|f;))|)|ur(?:dshar;|uhar;)|v(?:ertneqq;|nE;))|m(?:DDot;|a(?:cr;?|l(?:e;|t(?:;|ese;))|p(?:;|sto(?:;|down;|left;|up;))|rker;)|c(?:omma;|y;)|dash;|easuredangle;|fr;|ho;|i(?:cro;?|d(?:;|ast;|cir;|dot;?)|nus(?:;|b;|d(?:;|u;)))|l(?:cp;|dr;)|nplus;|o(?:dels;|pf;)|p;|s(?:cr;|tpos;)|u(?:;|ltimap;|map;))|n(?:G(?:g;|t(?:;|v;))|L(?:eft(?:arrow;|rightarrow;)|l;|t(?:;|v;))|Rightarrow;|V(?:Dash;|dash;)|a(?:bla;|cute;|ng;|p(?:;|E;|id;|os;|prox;)|tur(?:;|al(?:;|s;)))|b(?:sp;?|ump(?:;|e;))|c(?:a(?:p;|ron;)|edil;|ong(?:;|dot;)|up;|y;)|dash;|e(?:;|Arr;|ar(?:hk;|r(?:;|ow;))|dot;|quiv;|s(?:ear;|im;)|xist(?:;|s;))|fr;|g(?:E;|e(?:;|q(?:;|q;|slant;)|s;)|sim;|t(?:;|r;))|h(?:Arr;|arr;|par;)|i(?:;|s(?:;|d;)|v;)|jcy;|l(?:Arr;|E;|arr;|dr;|e(?:;|ft(?:arrow;|rightarrow;)|q(?:;|q;|slant;)|s(?:;|s;))|sim;|t(?:;|ri(?:;|e;)))|mid;|o(?:pf;|t(?:;|in(?:;|E;|dot;|v(?:a;|b;|c;))|ni(?:;|v(?:a;|b;|c;))|))|p(?:ar(?:;|allel;|sl;|t;)|olint;|r(?:;|cue;|e(?:;|c(?:;|eq;))))|r(?:Arr;|arr(?:;|c;|w;)|ightarrow;|tri(?:;|e;))|s(?:c(?:;|cue;|e;|r;)|hort(?:mid;|parallel;)|im(?:;|e(?:;|q;))|mid;|par;|qsu(?:be;|pe;)|u(?:b(?:;|E;|e;|set(?:;|eq(?:;|q;)))|cc(?:;|eq;)|p(?:;|E;|e;|set(?:;|eq(?:;|q;)))))|t(?:gl;|ilde;?|lg;|riangle(?:left(?:;|eq;)|right(?:;|eq;)))|u(?:;|m(?:;|ero;|sp;))|v(?:Dash;|Harr;|ap;|dash;|g(?:e;|t;)|infin;|l(?:Arr;|e;|t(?:;|rie;))|r(?:Arr;|trie;)|sim;)|w(?:Arr;|ar(?:hk;|r(?:;|ow;))|near;))|o(?:S;|a(?:cute;?|st;)|c(?:ir(?:;|c;?)|y;)|d(?:ash;|blac;|iv;|ot;|sold;)|elig;|f(?:cir;|r;)|g(?:on;|rave;?|t;)|h(?:bar;|m;)|int;|l(?:arr;|c(?:ir;|ross;)|ine;|t;)|m(?:acr;|ega;|i(?:cron;|d;|nus;))|opf;|p(?:ar;|erp;|lus;)|r(?:;|arr;|d(?:;|er(?:;|of;)|f;?|m;?)|igof;|or;|slope;|v;)|s(?:cr;|lash;?|ol;)|ti(?:lde;?|mes(?:;|as;))|uml;?|vbar;)|p(?:ar(?:;|a(?:;|llel;|)|s(?:im;|l;)|t;)|cy;|er(?:cnt;|iod;|mil;|p;|tenk;)|fr;|h(?:i(?:;|v;)|mmat;|one;)|i(?:;|tchfork;|v;)|l(?:an(?:ck(?:;|h;)|kv;)|us(?:;|acir;|b;|cir;|d(?:o;|u;)|e;|mn;?|sim;|two;))|m;|o(?:intint;|pf;|und;?)|r(?:;|E;|ap;|cue;|e(?:;|c(?:;|approx;|curlyeq;|eq;|n(?:approx;|eqq;|sim;)|sim;))|ime(?:;|s;)|n(?:E;|ap;|sim;)|o(?:d;|f(?:alar;|line;|surf;)|p(?:;|to;))|sim;|urel;)|s(?:cr;|i;)|uncsp;)|q(?:fr;|int;|opf;|prime;|scr;|u(?:at(?:ernions;|int;)|est(?:;|eq;)|ot;?))|r(?:A(?:arr;|rr;|tail;)|Barr;|Har;|a(?:c(?:e;|ute;)|dic;|emptyv;|ng(?:;|d;|e;|le;)|quo;?|rr(?:;|ap;|b(?:;|fs;)|c;|fs;|hk;|lp;|pl;|sim;|tl;|w;)|t(?:ail;|io(?:;|nals;)))|b(?:arr;|brk;|r(?:ac(?:e;|k;)|k(?:e;|sl(?:d;|u;))))|c(?:aron;|e(?:dil;|il;)|ub;|y;)|d(?:ca;|ldhar;|quo(?:;|r;)|sh;)|e(?:al(?:;|ine;|part;|s;)|ct;|g;?)|f(?:isht;|loor;|r;)|h(?:ar(?:d;|u(?:;|l;))|o(?:;|v;))|i(?:ght(?:arrow(?:;|tail;)|harpoon(?:down;|up;)|left(?:arrows;|harpoons;)|rightarrows;|squigarrow;|threetimes;)|ng;|singdotseq;)|l(?:arr;|har;|m;)|moust(?:;|ache;)|nmid;|o(?:a(?:ng;|rr;)|brk;|p(?:ar;|f;|lus;)|times;)|p(?:ar(?:;|gt;)|polint;)|rarr;|s(?:aquo;|cr;|h;|q(?:b;|uo(?:;|r;)))|t(?:hree;|imes;|ri(?:;|e;|f;|ltri;))|uluhar;|x;)|s(?:acute;|bquo;|c(?:;|E;|a(?:p;|ron;)|cue;|e(?:;|dil;)|irc;|n(?:E;|ap;|sim;)|polint;|sim;|y;)|dot(?:;|b;|e;)|e(?:Arr;|ar(?:hk;|r(?:;|ow;))|ct;?|mi;|swar;|tm(?:inus;|n;)|xt;)|fr(?:;|own;)|h(?:arp;|c(?:hcy;|y;)|ort(?:mid;|parallel;)|y;?)|i(?:gma(?:;|f;|v;)|m(?:;|dot;|e(?:;|q;)|g(?:;|E;)|l(?:;|E;)|ne;|plus;|rarr;))|larr;|m(?:a(?:llsetminus;|shp;)|eparsl;|i(?:d;|le;)|t(?:;|e(?:;|s;)))|o(?:ftcy;|l(?:;|b(?:;|ar;))|pf;)|pa(?:des(?:;|uit;)|r;)|q(?:c(?:ap(?:;|s;)|up(?:;|s;))|su(?:b(?:;|e;|set(?:;|eq;))|p(?:;|e;|set(?:;|eq;)))|u(?:;|ar(?:e;|f;)|f;))|rarr;|s(?:cr;|etmn;|mile;|tarf;)|t(?:ar(?:;|f;)|r(?:aight(?:epsilon;|phi;)|ns;))|u(?:b(?:;|E;|dot;|e(?:;|dot;)|mult;|n(?:E;|e;)|plus;|rarr;|s(?:et(?:;|eq(?:;|q;)|neq(?:;|q;))|im;|u(?:b;|p;)))|cc(?:;|approx;|curlyeq;|eq;|n(?:approx;|eqq;|sim;)|sim;)|m;|ng;|p(?:1;?|2;?|3;?|;|E;|d(?:ot;|sub;)|e(?:;|dot;)|hs(?:ol;|ub;)|larr;|mult;|n(?:E;|e;)|plus;|s(?:et(?:;|eq(?:;|q;)|neq(?:;|q;))|im;|u(?:b;|p;))))|w(?:Arr;|ar(?:hk;|r(?:;|ow;))|nwar;)|zlig;?)|t(?:a(?:rget;|u;)|brk;|c(?:aron;|edil;|y;)|dot;|elrec;|fr;|h(?:e(?:re(?:4;|fore;)|ta(?:;|sym;|v;))|i(?:ck(?:approx;|sim;)|nsp;)|k(?:ap;|sim;)|orn;?)|i(?:lde;|mes(?:;|b(?:;|ar;)|d;|)|nt;)|o(?:ea;|p(?:;|bot;|cir;|f(?:;|ork;))|sa;)|prime;|r(?:ade;|i(?:angle(?:;|down;|left(?:;|eq;)|q;|right(?:;|eq;))|dot;|e;|minus;|plus;|sb;|time;)|pezium;)|s(?:c(?:r;|y;)|hcy;|trok;)|w(?:ixt;|ohead(?:leftarrow;|rightarrow;)))|u(?:Arr;|Har;|a(?:cute;?|rr;)|br(?:cy;|eve;)|c(?:irc;?|y;)|d(?:arr;|blac;|har;)|f(?:isht;|r;)|grave;?|h(?:ar(?:l;|r;)|blk;)|l(?:c(?:orn(?:;|er;)|rop;)|tri;)|m(?:acr;|l;?)|o(?:gon;|pf;)|p(?:arrow;|downarrow;|harpoon(?:left;|right;)|lus;|si(?:;|h;|lon;)|uparrows;)|r(?:c(?:orn(?:;|er;)|rop;)|ing;|tri;)|scr;|t(?:dot;|ilde;|ri(?:;|f;))|u(?:arr;|ml;?)|wangle;)|v(?:Arr;|Bar(?:;|v;)|Dash;|a(?:ngrt;|r(?:epsilon;|kappa;|nothing;|p(?:hi;|i;|ropto;)|r(?:;|ho;)|s(?:igma;|u(?:bsetneq(?:;|q;)|psetneq(?:;|q;)))|t(?:heta;|riangle(?:left;|right;))))|cy;|dash;|e(?:e(?:;|bar;|eq;)|llip;|r(?:bar;|t;))|fr;|ltri;|nsu(?:b;|p;)|opf;|prop;|rtri;|s(?:cr;|u(?:bn(?:E;|e;)|pn(?:E;|e;)))|zigzag;)|w(?:circ;|e(?:d(?:bar;|ge(?:;|q;))|ierp;)|fr;|opf;|p;|r(?:;|eath;)|scr;)|x(?:c(?:ap;|irc;|up;)|dtri;|fr;|h(?:Arr;|arr;)|i;|l(?:Arr;|arr;)|map;|nis;|o(?:dot;|p(?:f;|lus;)|time;)|r(?:Arr;|arr;)|s(?:cr;|qcup;)|u(?:plus;|tri;)|vee;|wedge;)|y(?:ac(?:ute;?|y;)|c(?:irc;|y;)|en;?|fr;|icy;|opf;|scr;|u(?:cy;|ml;?))|z(?:acute;|c(?:aron;|y;)|dot;|e(?:etrf;|ta;)|fr;|hcy;|igrarr;|opf;|scr;|w(?:j;|nj;)))|[\s\S]/g,
        Na5 = 32,
        La5 = /[^\r"&\u0000]+/g,
        Ma5 = /[^\r'&\u0000]+/g,
        Oa5 = /[^\r\t\n\f &>\u0000]+/g,
        Ra5 = /[^\r\t\n\f \/>A-Z\u0000]+/g,
        Ta5 = /[^\r\t\n\f \/=>A-Z\u0000]+/g,
        Pa5 = /[^\]\r\u0000\uffff]*/g,
        ja5 = /[^&<\r\u0000\uffff]*/g,
        lg2 = /[^<\r\u0000\uffff]*/g,
        Sa5 = /[^\r\u0000\uffff]*/g,
        ig2 = /(?:(\/)?([a-z]+)>)|[\s\S]/g,
        ng2 = /(?:([-a-z]+)[ \t\n\f]*=[ \t\n\f]*('[^'&\r\u0000]*'|"[^"&\r\u0000]*"|[^\t\n\r\f "&'\u0000>][^&> \t\n\r\f\u0000]*[ \t\n\f]))|[\s\S]/g,
        N31 = /[^\x09\x0A\x0C\x0D\x20]/,
        ZG0 = /[^\x09\x0A\x0C\x0D\x20]/g,
        _a5 = /[^\x00\x09\x0A\x0C\x0D\x20]/,
        S0A = /^[\x09\x0A\x0C\x0D\x20]+/,
        L31 = /\x00/g;

    function VC(A) {
        var Q = 16384;
        if (A.length < Q) return String.fromCharCode.apply(String, A);
        var B = "";
        for (var G = 0; G < A.length; G += Q) B += String.fromCharCode.apply(String, A.slice(G, G + Q));
        return B
    }

    function ka5(A) {
        var Q = [];
        for (var B = 0; B < A.length; B++) Q[B] = A.charCodeAt(B);
        return Q
    }

    function c7(A, Q) {
        if (typeof Q === "string") return A.namespaceURI === h9.HTML && A.localName === Q;
        var B = Q[A.namespaceURI];
        return B && B[A.localName]
    }

    function ag2(A) {
        return c7(A, Iu2)
    }

    function sg2(A) {
        if (c7(A, Yu2)) return !0;
        if (A.namespaceURI === h9.MATHML && A.localName === "annotation-xml") {
            var Q = A.getAttribute("encoding");
            if (Q) Q = Q.toLowerCase();
            if (Q === "text/html" || Q === "application/xhtml+xml") return !0
        }
        return !1
    }

    function ya5(A) {
        if (A in dg2) return dg2[A];
        else return A
    }

    function rg2(A) {
        for (var Q = 0, B = A.length; Q < B; Q++)
            if (A[Q][0] in mg2) A[Q][0] = mg2[A[Q][0]]
    }

    function og2(A) {
        for (var Q = 0, B = A.length; Q < B; Q++)
            if (A[Q][0] === "definitionurl") {
                A[Q][0] = "definitionURL";
                break
            }
    }

    function IG0(A) {
        for (var Q = 0, B = A.length; Q < B; Q++)
            if (A[Q][0] in ug2) A[Q].push(ug2[A[Q][0]])
    }

    function tg2(A, Q) {
        for (var B = 0, G = A.length; B < G; B++) {
            var Z = A[B][0],
                I = A[B][1];
            if (Q.hasAttribute(Z)) continue;
            Q._setAttribute(Z, I)
        }
    }
    x3.ElementStack = function() {
        this.elements = [], this.top = null
    };
    x3.ElementStack.prototype.push = function(A) {
        this.elements.push(A), this.top = A
    };
    x3.ElementStack.prototype.pop = function(A) {
        this.elements.pop(), this.top = this.elements[this.elements.length - 1]
    };
    x3.ElementStack.prototype.popTag = function(A) {
        for (var Q = this.elements.length - 1; Q > 0; Q--) {
            var B = this.elements[Q];
            if (c7(B, A)) break
        }
        this.elements.length = Q, this.top = this.elements[Q - 1]
    };
    x3.ElementStack.prototype.popElementType = function(A) {
        for (var Q = this.elements.length - 1; Q > 0; Q--)
            if (this.elements[Q] instanceof A) break;
        this.elements.length = Q, this.top = this.elements[Q - 1]
    };
    x3.ElementStack.prototype.popElement = function(A) {
        for (var Q = this.elements.length - 1; Q > 0; Q--)
            if (this.elements[Q] === A) break;
        this.elements.length = Q, this.top = this.elements[Q - 1]
    };
    x3.ElementStack.prototype.removeElement = function(A) {
        if (this.top === A) this.pop();
        else {
            var Q = this.elements.lastIndexOf(A);
            if (Q !== -1) this.elements.splice(Q, 1)
        }
    };
    x3.ElementStack.prototype.clearToContext = function(A) {
        for (var Q = this.elements.length - 1; Q > 0; Q--)
            if (c7(this.elements[Q], A)) break;
        this.elements.length = Q + 1, this.top = this.elements[Q]
    };
    x3.ElementStack.prototype.contains = function(A) {
        return this.inSpecificScope(A, Object.create(null))
    };
    x3.ElementStack.prototype.inSpecificScope = function(A, Q) {
        for (var B = this.elements.length - 1; B >= 0; B--) {
            var G = this.elements[B];
            if (c7(G, A)) return !0;
            if (c7(G, Q)) return !1
        }
        return !1
    };
    x3.ElementStack.prototype.elementInSpecificScope = function(A, Q) {
        for (var B = this.elements.length - 1; B >= 0; B--) {
            var G = this.elements[B];
            if (G === A) return !0;
            if (c7(G, Q)) return !1
        }
        return !1
    };
    x3.ElementStack.prototype.elementTypeInSpecificScope = function(A, Q) {
        for (var B = this.elements.length - 1; B >= 0; B--) {
            var G = this.elements[B];
            if (G instanceof A) return !0;
            if (c7(G, Q)) return !1
        }
        return !1
    };
    x3.ElementStack.prototype.inScope = function(A) {
        return this.inSpecificScope(A, Py)
    };
    x3.ElementStack.prototype.elementInScope = function(A) {
        return this.elementInSpecificScope(A, Py)
    };
    x3.ElementStack.prototype.elementTypeInScope = function(A) {
        return this.elementTypeInSpecificScope(A, Py)
    };
    x3.ElementStack.prototype.inButtonScope = function(A) {
        return this.inSpecificScope(A, WG0)
    };
    x3.ElementStack.prototype.inListItemScope = function(A) {
        return this.inSpecificScope(A, R31)
    };
    x3.ElementStack.prototype.inTableScope = function(A) {
        return this.inSpecificScope(A, Zu2)
    };
    x3.ElementStack.prototype.inSelectScope = function(A) {
        for (var Q = this.elements.length - 1; Q >= 0; Q--) {
            var B = this.elements[Q];
            if (B.namespaceURI !== h9.HTML) return !1;
            var G = B.localName;
            if (G === A) return !0;
            if (G !== "optgroup" && G !== "option") return !1
        }
        return !1
    };
    x3.ElementStack.prototype.generateImpliedEndTags = function(A, Q) {
        var B = Q ? Bu2 : Qu2;
        for (var G = this.elements.length - 1; G >= 0; G--) {
            var Z = this.elements[G];
            if (A && c7(Z, A)) break;
            if (!c7(this.elements[G], B)) break
        }
        this.elements.length = G + 1, this.top = this.elements[G]
    };
    x3.ActiveFormattingElements = function() {
        this.list = [], this.attrs = []
    };
    x3.ActiveFormattingElements.prototype.MARKER = {
        localName: "|"
    };
    x3.ActiveFormattingElements.prototype.insertMarker = function() {
        this.list.push(this.MARKER), this.attrs.push(this.MARKER)
    };
    x3.ActiveFormattingElements.prototype.push = function(A, Q) {
        var B = 0;
        for (var G = this.list.length - 1; G >= 0; G--) {
            if (this.list[G] === this.MARKER) break;
            if (Y(A, this.list[G], this.attrs[G])) {
                if (B++, B === 3) {
                    this.list.splice(G, 1), this.attrs.splice(G, 1);
                    break
                }
            }
        }
        this.list.push(A);
        var Z = [];
        for (var I = 0; I < Q.length; I++) Z[I] = Q[I];
        this.attrs.push(Z);

        function Y(J, W, X) {
            if (J.localName !== W.localName) return !1;
            if (J._numattrs !== X.length) return !1;
            for (var F = 0, V = X.length; F < V; F++) {
                var K = X[F][0],
                    D = X[F][1];
                if (!J.hasAttribute(K)) return !1;
                if (J.getAttribute(K) !== D) return !1
            }
            return !0
        }
    };
    x3.ActiveFormattingElements.prototype.clearToMarker = function() {
        for (var A = this.list.length - 1; A >= 0; A--)
            if (this.list[A] === this.MARKER) break;
        if (A < 0) A = 0;
        this.list.length = A, this.attrs.length = A
    };
    x3.ActiveFormattingElements.prototype.findElementByTag = function(A) {
        for (var Q = this.list.length - 1; Q >= 0; Q--) {
            var B = this.list[Q];
            if (B === this.MARKER) break;
            if (B.localName === A) return B
        }
        return null
    };
    x3.ActiveFormattingElements.prototype.indexOf = function(A) {
        return this.list.lastIndexOf(A)
    };
    x3.ActiveFormattingElements.prototype.remove = function(A) {
        var Q = this.list.lastIndexOf(A);
        if (Q !== -1) this.list.splice(Q, 1), this.attrs.splice(Q, 1)
    };
    x3.ActiveFormattingElements.prototype.replace = function(A, Q, B) {
        var G = this.list.lastIndexOf(A);
        if (G !== -1) this.list[G] = Q, this.attrs[G] = B
    };
    x3.ActiveFormattingElements.prototype.insertAfter = function(A, Q) {
        var B = this.list.lastIndexOf(A);
        if (B !== -1) this.list.splice(B, 0, Q), this.attrs.splice(B, 0, Q)
    };

    function x3(A, Q, B) {
        var G = null,
            Z = 0,
            I = 0,
            Y = !1,
            J = !1,
            W = 0,
            X = [],
            F = "",
            V = !0,
            K = 0,
            D = C1,
            H, C, E = "",
            z = "",
            w = [],
            N = "",
            q = "",
            R = [],
            P = [],
            y = [],
            v = [],
            x = [],
            p = !1,
            u = oD,
            o = null,
            l = [],
            k = new x3.ElementStack,
            d = new x3.ActiveFormattingElements,
            QA = Q !== void 0,
            IA = null,
            HA = null,
            wA = !0;
        if (Q) wA = Q.ownerDocument._scripting_enabled;
        if (B && B.scripting_enabled === !1) wA = !1;
        var KA = !0,
            SA = !1,
            sA, NA, qA = [],
            DA = !1,
            yA = !1,
            rA = {
                document: function() {
                    return K1
                },
                _asDocumentFragment: function() {
                    var CA = K1.createDocumentFragment(),
                        MA = K1.firstChild;
                    while (MA.hasChildNodes()) CA.appendChild(MA.firstChild);
                    return CA
                },
                pause: function() {
                    K++
                },
                resume: function() {
                    K--, this.parse("")
                },
                parse: function(CA, MA, H1) {
                    var X0;
                    if (K > 0) return F += CA, !0;
                    if (W === 0) {
                        if (F) CA = F + CA, F = "";
                        if (MA) CA += "￿", Y = !0;
                        if (G = CA, Z = CA.length, I = 0, V) {
                            if (V = !1, G.charCodeAt(0) === 65279) I = 1
                        }
                        W++, X0 = zA(H1), F = G.substring(I, Z), W--
                    } else {
                        if (W++, X.push(G, Z, I), G = CA, Z = CA.length, I = 0, zA(), X0 = !1, F = G.substring(I, Z), I = X.pop(), Z = X.pop(), G = X.pop(), F) G = F + G.substring(I), Z = G.length, I = 0, F = "";
                        W--
                    }
                    return X0
                }
            },
            K1 = new Da5(!0, A);
        if (K1._parser = rA, K1._scripting_enabled = wA, Q) {
            if (Q.ownerDocument._quirks) K1._quirks = !0;
            if (Q.ownerDocument._limitedQuirks) K1._limitedQuirks = !0;
            if (Q.namespaceURI === h9.HTML) switch (Q.localName) {
                case "title":
                case "textarea":
                    D = O1;
                    break;
                case "style":
                case "xmp":
                case "iframe":
                case "noembed":
                case "noframes":
                case "script":
                case "plaintext":
                    D = oQ;
                    break
            }
            var WA = K1.createElement("html");
            if (K1._appendChild(WA), k.push(WA), Q instanceof d7.HTMLTemplateElement) l.push(RK);
            DG();
            for (var XA = Q; XA !== null; XA = XA.parentElement)
                if (XA instanceof d7.HTMLFormElement) {
                    HA = XA;
                    break
                }
        }

        function zA(CA) {
            var MA, H1, X0, z0;
            while (I < Z) {
                if (K > 0 || CA && CA()) return !0;