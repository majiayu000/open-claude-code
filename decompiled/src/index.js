/**
 * Claude Code Decompiled Source
 * Version: 2.0.57
 * Total Lines: 450258
 * Total Files: 302
 *
 * Directory Structure:
 * - mcp/: 29 files (41888 lines)
 * - auth/: 61 files (91245 lines)
 * - git/: 34 files (50928 lines)
 * - ui/: 53 files (79314 lines)
 * - api/: 30 files (44656 lines)
 * - telemetry/: 14 files (20982 lines)
 * - config/: 9 files (13494 lines)
 * - lodash/: 5 files (7489 lines)
 * - fs/: 1 files (1498 lines)
 * - tools/: 25 files (37442 lines)
 * - prompts/: 10 files (14894 lines)
 * - commands/: 8 files (11976 lines)
 * - other/: 8 files (11992 lines)
 * - crypto/: 1 files (1499 lines)
 * - process/: 1 files (1499 lines)
 * - agents/: 13 files (19462 lines)
 */

const fileIndex = {
  "mcp": [
    {
      "file": "mcp_001.js",
      "startLine": 1,
      "endLine": 1498,
      "lineCount": 1498
    },
    {
      "file": "mcp_002.js",
      "startLine": 4496,
      "endLine": 5995,
      "lineCount": 1500
    },
    {
      "file": "mcp_003.js",
      "startLine": 31461,
      "endLine": 32937,
      "lineCount": 1477
    },
    {
      "file": "mcp_004.js",
      "startLine": 34436,
      "endLine": 35934,
      "lineCount": 1499
    },
    {
      "file": "mcp_005.js",
      "startLine": 141843,
      "endLine": 143259,
      "lineCount": 1417
    },
    {
      "file": "mcp_006.js",
      "startLine": 144760,
      "endLine": 146259,
      "lineCount": 1500
    },
    {
      "file": "mcp_007.js",
      "startLine": 158220,
      "endLine": 159718,
      "lineCount": 1499
    },
    {
      "file": "mcp_008.js",
      "startLine": 206140,
      "endLine": 207639,
      "lineCount": 1500
    },
    {
      "file": "mcp_009.js",
      "startLine": 266041,
      "endLine": 267540,
      "lineCount": 1500
    },
    {
      "file": "mcp_010.js",
      "startLine": 269036,
      "endLine": 270527,
      "lineCount": 1492
    },
    {
      "file": "mcp_011.js",
      "startLine": 276526,
      "endLine": 278025,
      "lineCount": 1500
    },
    {
      "file": "mcp_012.js",
      "startLine": 278026,
      "endLine": 279505,
      "lineCount": 1480
    },
    {
      "file": "mcp_013.js",
      "startLine": 279506,
      "endLine": 281001,
      "lineCount": 1496
    },
    {
      "file": "mcp_014.js",
      "startLine": 281002,
      "endLine": 282501,
      "lineCount": 1500
    },
    {
      "file": "mcp_015.js",
      "startLine": 289979,
      "endLine": 291478,
      "lineCount": 1500
    },
    {
      "file": "mcp_016.js",
      "startLine": 369334,
      "endLine": 370832,
      "lineCount": 1499
    },
    {
      "file": "mcp_017.js",
      "startLine": 387318,
      "endLine": 388817,
      "lineCount": 1500
    },
    {
      "file": "mcp_018.js",
      "startLine": 391818,
      "endLine": 393317,
      "lineCount": 1500
    },
    {
      "file": "mcp_019.js",
      "startLine": 405277,
      "endLine": 406776,
      "lineCount": 1500
    },
    {
      "file": "mcp_020.js",
      "startLine": 406777,
      "endLine": 408275,
      "lineCount": 1499
    },
    {
      "file": "mcp_021.js",
      "startLine": 408276,
      "endLine": 409773,
      "lineCount": 1498
    },
    {
      "file": "mcp_022.js",
      "startLine": 412772,
      "endLine": 414270,
      "lineCount": 1499
    },
    {
      "file": "mcp_023.js",
      "startLine": 417265,
      "endLine": 418764,
      "lineCount": 1500
    },
    {
      "file": "mcp_024.js",
      "startLine": 420243,
      "endLine": 421731,
      "lineCount": 1489
    },
    {
      "file": "mcp_025.js",
      "startLine": 421732,
      "endLine": 423225,
      "lineCount": 1494
    },
    {
      "file": "mcp_026.js",
      "startLine": 429222,
      "endLine": 430696,
      "lineCount": 1475
    },
    {
      "file": "mcp_027.js",
      "startLine": 438187,
      "endLine": 439686,
      "lineCount": 1500
    },
    {
      "file": "mcp_028.js",
      "startLine": 439687,
      "endLine": 441178,
      "lineCount": 1492
    },
    {
      "file": "mcp_029.js",
      "startLine": 450174,
      "endLine": 450258,
      "lineCount": 85
    }
  ],
  "auth": [
    {
      "file": "auth_001.js",
      "startLine": 1499,
      "endLine": 2998,
      "lineCount": 1500
    },
    {
      "file": "auth_002.js",
      "startLine": 2999,
      "endLine": 4495,
      "lineCount": 1497
    },
    {
      "file": "auth_003.js",
      "startLine": 11992,
      "endLine": 13491,
      "lineCount": 1500
    },
    {
      "file": "auth_004.js",
      "startLine": 13492,
      "endLine": 14989,
      "lineCount": 1498
    },
    {
      "file": "auth_005.js",
      "startLine": 14990,
      "endLine": 16489,
      "lineCount": 1500
    },
    {
      "file": "auth_006.js",
      "startLine": 61307,
      "endLine": 62806,
      "lineCount": 1500
    },
    {
      "file": "auth_007.js",
      "startLine": 62807,
      "endLine": 64299,
      "lineCount": 1493
    },
    {
      "file": "auth_008.js",
      "startLine": 70286,
      "endLine": 71785,
      "lineCount": 1500
    },
    {
      "file": "auth_009.js",
      "startLine": 73284,
      "endLine": 74778,
      "lineCount": 1495
    },
    {
      "file": "auth_010.js",
      "startLine": 74779,
      "endLine": 76276,
      "lineCount": 1498
    },
    {
      "file": "auth_011.js",
      "startLine": 76277,
      "endLine": 77775,
      "lineCount": 1499
    },
    {
      "file": "auth_012.js",
      "startLine": 77776,
      "endLine": 79275,
      "lineCount": 1500
    },
    {
      "file": "auth_013.js",
      "startLine": 79276,
      "endLine": 80775,
      "lineCount": 1500
    },
    {
      "file": "auth_014.js",
      "startLine": 82276,
      "endLine": 83772,
      "lineCount": 1497
    },
    {
      "file": "auth_015.js",
      "startLine": 85263,
      "endLine": 86762,
      "lineCount": 1500
    },
    {
      "file": "auth_016.js",
      "startLine": 86763,
      "endLine": 88261,
      "lineCount": 1499
    },
    {
      "file": "auth_017.js",
      "startLine": 88262,
      "endLine": 89713,
      "lineCount": 1452
    },
    {
      "file": "auth_018.js",
      "startLine": 89714,
      "endLine": 91209,
      "lineCount": 1496
    },
    {
      "file": "auth_019.js",
      "startLine": 91210,
      "endLine": 92703,
      "lineCount": 1494
    },
    {
      "file": "auth_020.js",
      "startLine": 94202,
      "endLine": 95698,
      "lineCount": 1497
    },
    {
      "file": "auth_021.js",
      "startLine": 97193,
      "endLine": 98690,
      "lineCount": 1498
    },
    {
      "file": "auth_022.js",
      "startLine": 100191,
      "endLine": 101689,
      "lineCount": 1499
    },
    {
      "file": "auth_023.js",
      "startLine": 106184,
      "endLine": 107682,
      "lineCount": 1499
    },
    {
      "file": "auth_024.js",
      "startLine": 110523,
      "endLine": 112013,
      "lineCount": 1491
    },
    {
      "file": "auth_025.js",
      "startLine": 114904,
      "endLine": 116392,
      "lineCount": 1489
    },
    {
      "file": "auth_026.js",
      "startLine": 117882,
      "endLine": 119375,
      "lineCount": 1494
    },
    {
      "file": "auth_027.js",
      "startLine": 119376,
      "endLine": 120875,
      "lineCount": 1500
    },
    {
      "file": "auth_028.js",
      "startLine": 120876,
      "endLine": 122374,
      "lineCount": 1499
    },
    {
      "file": "auth_029.js",
      "startLine": 123875,
      "endLine": 125374,
      "lineCount": 1500
    },
    {
      "file": "auth_030.js",
      "startLine": 125375,
      "endLine": 126870,
      "lineCount": 1496
    },
    {
      "file": "auth_031.js",
      "startLine": 128369,
      "endLine": 129868,
      "lineCount": 1500
    },
    {
      "file": "auth_032.js",
      "startLine": 132865,
      "endLine": 134357,
      "lineCount": 1493
    },
    {
      "file": "auth_033.js",
      "startLine": 137351,
      "endLine": 138846,
      "lineCount": 1496
    },
    {
      "file": "auth_034.js",
      "startLine": 143260,
      "endLine": 144759,
      "lineCount": 1500
    },
    {
      "file": "auth_035.js",
      "startLine": 152258,
      "endLine": 153719,
      "lineCount": 1462
    },
    {
      "file": "auth_036.js",
      "startLine": 153720,
      "endLine": 155219,
      "lineCount": 1500
    },
    {
      "file": "auth_037.js",
      "startLine": 156720,
      "endLine": 158219,
      "lineCount": 1500
    },
    {
      "file": "auth_038.js",
      "startLine": 173215,
      "endLine": 174712,
      "lineCount": 1498
    },
    {
      "file": "auth_039.js",
      "startLine": 191190,
      "endLine": 192672,
      "lineCount": 1483
    },
    {
      "file": "auth_040.js",
      "startLine": 192673,
      "endLine": 194169,
      "lineCount": 1497
    },
    {
      "file": "auth_041.js",
      "startLine": 212139,
      "endLine": 213632,
      "lineCount": 1494
    },
    {
      "file": "auth_042.js",
      "startLine": 218130,
      "endLine": 219616,
      "lineCount": 1487
    },
    {
      "file": "auth_043.js",
      "startLine": 240577,
      "endLine": 242076,
      "lineCount": 1500
    },
    {
      "file": "auth_044.js",
      "startLine": 243569,
      "endLine": 245063,
      "lineCount": 1495
    },
    {
      "file": "auth_045.js",
      "startLine": 245064,
      "endLine": 246563,
      "lineCount": 1500
    },
    {
      "file": "auth_046.js",
      "startLine": 248064,
      "endLine": 249563,
      "lineCount": 1500
    },
    {
      "file": "auth_047.js",
      "startLine": 249564,
      "endLine": 251063,
      "lineCount": 1500
    },
    {
      "file": "auth_048.js",
      "startLine": 251064,
      "endLine": 252563,
      "lineCount": 1500
    },
    {
      "file": "auth_049.js",
      "startLine": 252564,
      "endLine": 254057,
      "lineCount": 1494
    },
    {
      "file": "auth_050.js",
      "startLine": 254058,
      "endLine": 255557,
      "lineCount": 1500
    },
    {
      "file": "auth_051.js",
      "startLine": 255558,
      "endLine": 257057,
      "lineCount": 1500
    },
    {
      "file": "auth_052.js",
      "startLine": 257058,
      "endLine": 258557,
      "lineCount": 1500
    },
    {
      "file": "auth_053.js",
      "startLine": 258558,
      "endLine": 260045,
      "lineCount": 1488
    },
    {
      "file": "auth_054.js",
      "startLine": 260046,
      "endLine": 261544,
      "lineCount": 1499
    },
    {
      "file": "auth_055.js",
      "startLine": 294473,
      "endLine": 295972,
      "lineCount": 1500
    },
    {
      "file": "auth_056.js",
      "startLine": 304966,
      "endLine": 306464,
      "lineCount": 1499
    },
    {
      "file": "auth_057.js",
      "startLine": 306465,
      "endLine": 307960,
      "lineCount": 1496
    },
    {
      "file": "auth_058.js",
      "startLine": 315452,
      "endLine": 316937,
      "lineCount": 1486
    },
    {
      "file": "auth_059.js",
      "startLine": 316938,
      "endLine": 318435,
      "lineCount": 1498
    },
    {
      "file": "auth_060.js",
      "startLine": 375327,
      "endLine": 376826,
      "lineCount": 1500
    },
    {
      "file": "auth_061.js",
      "startLine": 381323,
      "endLine": 382822,
      "lineCount": 1500
    }
  ],
  "git": [
    {
      "file": "git_001.js",
      "startLine": 5996,
      "endLine": 7492,
      "lineCount": 1497
    },
    {
      "file": "git_002.js",
      "startLine": 56809,
      "endLine": 58306,
      "lineCount": 1498
    },
    {
      "file": "git_003.js",
      "startLine": 58307,
      "endLine": 59806,
      "lineCount": 1500
    },
    {
      "file": "git_004.js",
      "startLine": 59807,
      "endLine": 61306,
      "lineCount": 1500
    },
    {
      "file": "git_005.js",
      "startLine": 67298,
      "endLine": 68785,
      "lineCount": 1488
    },
    {
      "file": "git_006.js",
      "startLine": 68786,
      "endLine": 70285,
      "lineCount": 1500
    },
    {
      "file": "git_007.js",
      "startLine": 92704,
      "endLine": 94201,
      "lineCount": 1498
    },
    {
      "file": "git_008.js",
      "startLine": 101690,
      "endLine": 103189,
      "lineCount": 1500
    },
    {
      "file": "git_009.js",
      "startLine": 131369,
      "endLine": 132864,
      "lineCount": 1496
    },
    {
      "file": "git_010.js",
      "startLine": 134358,
      "endLine": 135857,
      "lineCount": 1500
    },
    {
      "file": "git_011.js",
      "startLine": 135858,
      "endLine": 137350,
      "lineCount": 1493
    },
    {
      "file": "git_012.js",
      "startLine": 138847,
      "endLine": 140346,
      "lineCount": 1500
    },
    {
      "file": "git_013.js",
      "startLine": 147759,
      "endLine": 149258,
      "lineCount": 1500
    },
    {
      "file": "git_014.js",
      "startLine": 149259,
      "endLine": 150758,
      "lineCount": 1500
    },
    {
      "file": "git_015.js",
      "startLine": 150759,
      "endLine": 152257,
      "lineCount": 1499
    },
    {
      "file": "git_016.js",
      "startLine": 155220,
      "endLine": 156719,
      "lineCount": 1500
    },
    {
      "file": "git_017.js",
      "startLine": 168716,
      "endLine": 170214,
      "lineCount": 1499
    },
    {
      "file": "git_018.js",
      "startLine": 182209,
      "endLine": 183702,
      "lineCount": 1494
    },
    {
      "file": "git_019.js",
      "startLine": 215132,
      "endLine": 216630,
      "lineCount": 1499
    },
    {
      "file": "git_020.js",
      "startLine": 237577,
      "endLine": 239076,
      "lineCount": 1500
    },
    {
      "file": "git_021.js",
      "startLine": 239077,
      "endLine": 240576,
      "lineCount": 1500
    },
    {
      "file": "git_022.js",
      "startLine": 272028,
      "endLine": 273525,
      "lineCount": 1498
    },
    {
      "file": "git_023.js",
      "startLine": 273526,
      "endLine": 275025,
      "lineCount": 1500
    },
    {
      "file": "git_024.js",
      "startLine": 297472,
      "endLine": 298970,
      "lineCount": 1499
    },
    {
      "file": "git_025.js",
      "startLine": 307961,
      "endLine": 309460,
      "lineCount": 1500
    },
    {
      "file": "git_026.js",
      "startLine": 313959,
      "endLine": 315451,
      "lineCount": 1493
    },
    {
      "file": "git_027.js",
      "startLine": 318436,
      "endLine": 319935,
      "lineCount": 1500
    },
    {
      "file": "git_028.js",
      "startLine": 319936,
      "endLine": 321428,
      "lineCount": 1493
    },
    {
      "file": "git_029.js",
      "startLine": 327427,
      "endLine": 328925,
      "lineCount": 1499
    },
    {
      "file": "git_030.js",
      "startLine": 342418,
      "endLine": 343917,
      "lineCount": 1500
    },
    {
      "file": "git_031.js",
      "startLine": 373833,
      "endLine": 375326,
      "lineCount": 1494
    },
    {
      "file": "git_032.js",
      "startLine": 376827,
      "endLine": 378324,
      "lineCount": 1498
    },
    {
      "file": "git_033.js",
      "startLine": 379825,
      "endLine": 381322,
      "lineCount": 1498
    },
    {
      "file": "git_034.js",
      "startLine": 385823,
      "endLine": 387317,
      "lineCount": 1495
    }
  ],
  "ui": [
    {
      "file": "ui_001.js",
      "startLine": 7493,
      "endLine": 8992,
      "lineCount": 1500
    },
    {
      "file": "ui_002.js",
      "startLine": 8993,
      "endLine": 10492,
      "lineCount": 1500
    },
    {
      "file": "ui_003.js",
      "startLine": 28478,
      "endLine": 29960,
      "lineCount": 1483
    },
    {
      "file": "ui_004.js",
      "startLine": 35935,
      "endLine": 37434,
      "lineCount": 1500
    },
    {
      "file": "ui_005.js",
      "startLine": 38843,
      "endLine": 40339,
      "lineCount": 1497
    },
    {
      "file": "ui_006.js",
      "startLine": 44818,
      "endLine": 46316,
      "lineCount": 1499
    },
    {
      "file": "ui_007.js",
      "startLine": 46317,
      "endLine": 47816,
      "lineCount": 1500
    },
    {
      "file": "ui_008.js",
      "startLine": 53810,
      "endLine": 55309,
      "lineCount": 1500
    },
    {
      "file": "ui_009.js",
      "startLine": 64300,
      "endLine": 65797,
      "lineCount": 1498
    },
    {
      "file": "ui_010.js",
      "startLine": 65798,
      "endLine": 67297,
      "lineCount": 1500
    },
    {
      "file": "ui_011.js",
      "startLine": 80776,
      "endLine": 82275,
      "lineCount": 1500
    },
    {
      "file": "ui_012.js",
      "startLine": 98691,
      "endLine": 100190,
      "lineCount": 1500
    },
    {
      "file": "ui_013.js",
      "startLine": 116393,
      "endLine": 117881,
      "lineCount": 1489
    },
    {
      "file": "ui_014.js",
      "startLine": 126871,
      "endLine": 128368,
      "lineCount": 1498
    },
    {
      "file": "ui_015.js",
      "startLine": 129869,
      "endLine": 131368,
      "lineCount": 1500
    },
    {
      "file": "ui_016.js",
      "startLine": 146260,
      "endLine": 147758,
      "lineCount": 1499
    },
    {
      "file": "ui_017.js",
      "startLine": 165716,
      "endLine": 167215,
      "lineCount": 1500
    },
    {
      "file": "ui_018.js",
      "startLine": 167216,
      "endLine": 168715,
      "lineCount": 1500
    },
    {
      "file": "ui_019.js",
      "startLine": 170215,
      "endLine": 171714,
      "lineCount": 1500
    },
    {
      "file": "ui_020.js",
      "startLine": 171715,
      "endLine": 173214,
      "lineCount": 1500
    },
    {
      "file": "ui_021.js",
      "startLine": 174713,
      "endLine": 176211,
      "lineCount": 1499
    },
    {
      "file": "ui_022.js",
      "startLine": 176212,
      "endLine": 177710,
      "lineCount": 1499
    },
    {
      "file": "ui_023.js",
      "startLine": 177711,
      "endLine": 179209,
      "lineCount": 1499
    },
    {
      "file": "ui_024.js",
      "startLine": 179210,
      "endLine": 180708,
      "lineCount": 1499
    },
    {
      "file": "ui_025.js",
      "startLine": 180709,
      "endLine": 182208,
      "lineCount": 1500
    },
    {
      "file": "ui_026.js",
      "startLine": 183703,
      "endLine": 185194,
      "lineCount": 1492
    },
    {
      "file": "ui_027.js",
      "startLine": 185195,
      "endLine": 186693,
      "lineCount": 1499
    },
    {
      "file": "ui_028.js",
      "startLine": 186694,
      "endLine": 188192,
      "lineCount": 1499
    },
    {
      "file": "ui_029.js",
      "startLine": 188193,
      "endLine": 189690,
      "lineCount": 1498
    },
    {
      "file": "ui_030.js",
      "startLine": 197166,
      "endLine": 198663,
      "lineCount": 1498
    },
    {
      "file": "ui_031.js",
      "startLine": 201662,
      "endLine": 203161,
      "lineCount": 1500
    },
    {
      "file": "ui_032.js",
      "startLine": 203162,
      "endLine": 204639,
      "lineCount": 1478
    },
    {
      "file": "ui_033.js",
      "startLine": 242077,
      "endLine": 243568,
      "lineCount": 1492
    },
    {
      "file": "ui_034.js",
      "startLine": 282502,
      "endLine": 283999,
      "lineCount": 1498
    },
    {
      "file": "ui_035.js",
      "startLine": 284000,
      "endLine": 285485,
      "lineCount": 1486
    },
    {
      "file": "ui_036.js",
      "startLine": 285486,
      "endLine": 286985,
      "lineCount": 1500
    },
    {
      "file": "ui_037.js",
      "startLine": 286986,
      "endLine": 288484,
      "lineCount": 1499
    },
    {
      "file": "ui_038.js",
      "startLine": 325928,
      "endLine": 327426,
      "lineCount": 1499
    },
    {
      "file": "ui_039.js",
      "startLine": 328926,
      "endLine": 330422,
      "lineCount": 1497
    },
    {
      "file": "ui_040.js",
      "startLine": 330423,
      "endLine": 331922,
      "lineCount": 1500
    },
    {
      "file": "ui_041.js",
      "startLine": 352916,
      "endLine": 354415,
      "lineCount": 1500
    },
    {
      "file": "ui_042.js",
      "startLine": 354416,
      "endLine": 355915,
      "lineCount": 1500
    },
    {
      "file": "ui_043.js",
      "startLine": 355916,
      "endLine": 357412,
      "lineCount": 1497
    },
    {
      "file": "ui_044.js",
      "startLine": 357413,
      "endLine": 358846,
      "lineCount": 1434
    },
    {
      "file": "ui_045.js",
      "startLine": 358847,
      "endLine": 360345,
      "lineCount": 1499
    },
    {
      "file": "ui_046.js",
      "startLine": 360346,
      "endLine": 361842,
      "lineCount": 1497
    },
    {
      "file": "ui_047.js",
      "startLine": 361843,
      "endLine": 363341,
      "lineCount": 1499
    },
    {
      "file": "ui_048.js",
      "startLine": 363342,
      "endLine": 364839,
      "lineCount": 1498
    },
    {
      "file": "ui_049.js",
      "startLine": 364840,
      "endLine": 366335,
      "lineCount": 1496
    },
    {
      "file": "ui_050.js",
      "startLine": 372333,
      "endLine": 373832,
      "lineCount": 1500
    },
    {
      "file": "ui_051.js",
      "startLine": 378325,
      "endLine": 379824,
      "lineCount": 1500
    },
    {
      "file": "ui_052.js",
      "startLine": 382823,
      "endLine": 384322,
      "lineCount": 1500
    },
    {
      "file": "ui_053.js",
      "startLine": 384323,
      "endLine": 385822,
      "lineCount": 1500
    }
  ],
  "api": [
    {
      "file": "api_001.js",
      "startLine": 10493,
      "endLine": 11991,
      "lineCount": 1499
    },
    {
      "file": "api_002.js",
      "startLine": 41830,
      "endLine": 43325,
      "lineCount": 1496
    },
    {
      "file": "api_003.js",
      "startLine": 55310,
      "endLine": 56808,
      "lineCount": 1499
    },
    {
      "file": "api_004.js",
      "startLine": 103190,
      "endLine": 104689,
      "lineCount": 1500
    },
    {
      "file": "api_005.js",
      "startLine": 107683,
      "endLine": 109022,
      "lineCount": 1340
    },
    {
      "file": "api_006.js",
      "startLine": 109023,
      "endLine": 110522,
      "lineCount": 1500
    },
    {
      "file": "api_007.js",
      "startLine": 112014,
      "endLine": 113404,
      "lineCount": 1391
    },
    {
      "file": "api_008.js",
      "startLine": 113405,
      "endLine": 114903,
      "lineCount": 1499
    },
    {
      "file": "api_009.js",
      "startLine": 140347,
      "endLine": 141842,
      "lineCount": 1496
    },
    {
      "file": "api_010.js",
      "startLine": 189691,
      "endLine": 191189,
      "lineCount": 1499
    },
    {
      "file": "api_011.js",
      "startLine": 195667,
      "endLine": 197165,
      "lineCount": 1499
    },
    {
      "file": "api_012.js",
      "startLine": 198664,
      "endLine": 200163,
      "lineCount": 1500
    },
    {
      "file": "api_013.js",
      "startLine": 200164,
      "endLine": 201661,
      "lineCount": 1498
    },
    {
      "file": "api_014.js",
      "startLine": 204640,
      "endLine": 206139,
      "lineCount": 1500
    },
    {
      "file": "api_015.js",
      "startLine": 210639,
      "endLine": 212138,
      "lineCount": 1500
    },
    {
      "file": "api_016.js",
      "startLine": 213633,
      "endLine": 215131,
      "lineCount": 1499
    },
    {
      "file": "api_017.js",
      "startLine": 216631,
      "endLine": 218129,
      "lineCount": 1499
    },
    {
      "file": "api_018.js",
      "startLine": 219617,
      "endLine": 221086,
      "lineCount": 1470
    },
    {
      "file": "api_019.js",
      "startLine": 221087,
      "endLine": 222586,
      "lineCount": 1500
    },
    {
      "file": "api_020.js",
      "startLine": 222587,
      "endLine": 224085,
      "lineCount": 1499
    },
    {
      "file": "api_021.js",
      "startLine": 224086,
      "endLine": 225584,
      "lineCount": 1499
    },
    {
      "file": "api_022.js",
      "startLine": 246564,
      "endLine": 248063,
      "lineCount": 1500
    },
    {
      "file": "api_023.js",
      "startLine": 261545,
      "endLine": 263044,
      "lineCount": 1500
    },
    {
      "file": "api_024.js",
      "startLine": 275026,
      "endLine": 276525,
      "lineCount": 1500
    },
    {
      "file": "api_025.js",
      "startLine": 324428,
      "endLine": 325927,
      "lineCount": 1500
    },
    {
      "file": "api_026.js",
      "startLine": 334921,
      "endLine": 336420,
      "lineCount": 1500
    },
    {
      "file": "api_027.js",
      "startLine": 336421,
      "endLine": 337920,
      "lineCount": 1500
    },
    {
      "file": "api_028.js",
      "startLine": 339419,
      "endLine": 340918,
      "lineCount": 1500
    },
    {
      "file": "api_029.js",
      "startLine": 393318,
      "endLine": 394813,
      "lineCount": 1496
    },
    {
      "file": "api_030.js",
      "startLine": 394814,
      "endLine": 396291,
      "lineCount": 1478
    }
  ],
  "telemetry": [
    {
      "file": "telemetry_001.js",
      "startLine": 16490,
      "endLine": 17989,
      "lineCount": 1500
    },
    {
      "file": "telemetry_002.js",
      "startLine": 17990,
      "endLine": 19487,
      "lineCount": 1498
    },
    {
      "file": "telemetry_003.js",
      "startLine": 29961,
      "endLine": 31460,
      "lineCount": 1500
    },
    {
      "file": "telemetry_004.js",
      "startLine": 161217,
      "endLine": 162716,
      "lineCount": 1500
    },
    {
      "file": "telemetry_005.js",
      "startLine": 194170,
      "endLine": 195666,
      "lineCount": 1497
    },
    {
      "file": "telemetry_006.js",
      "startLine": 264542,
      "endLine": 266040,
      "lineCount": 1499
    },
    {
      "file": "telemetry_007.js",
      "startLine": 267541,
      "endLine": 269035,
      "lineCount": 1495
    },
    {
      "file": "telemetry_008.js",
      "startLine": 298971,
      "endLine": 300467,
      "lineCount": 1497
    },
    {
      "file": "telemetry_009.js",
      "startLine": 300468,
      "endLine": 301967,
      "lineCount": 1500
    },
    {
      "file": "telemetry_010.js",
      "startLine": 301968,
      "endLine": 303467,
      "lineCount": 1500
    },
    {
      "file": "telemetry_011.js",
      "startLine": 303468,
      "endLine": 304965,
      "lineCount": 1498
    },
    {
      "file": "telemetry_012.js",
      "startLine": 321429,
      "endLine": 322928,
      "lineCount": 1500
    },
    {
      "file": "telemetry_013.js",
      "startLine": 322929,
      "endLine": 324427,
      "lineCount": 1499
    },
    {
      "file": "telemetry_014.js",
      "startLine": 340919,
      "endLine": 342417,
      "lineCount": 1499
    }
  ],
  "config": [
    {
      "file": "config_001.js",
      "startLine": 19488,
      "endLine": 20986,
      "lineCount": 1499
    },
    {
      "file": "config_002.js",
      "startLine": 25482,
      "endLine": 26979,
      "lineCount": 1498
    },
    {
      "file": "config_003.js",
      "startLine": 47817,
      "endLine": 49316,
      "lineCount": 1500
    },
    {
      "file": "config_004.js",
      "startLine": 309461,
      "endLine": 310960,
      "lineCount": 1500
    },
    {
      "file": "config_005.js",
      "startLine": 310961,
      "endLine": 312459,
      "lineCount": 1499
    },
    {
      "file": "config_006.js",
      "startLine": 343918,
      "endLine": 345417,
      "lineCount": 1500
    },
    {
      "file": "config_007.js",
      "startLine": 396292,
      "endLine": 397791,
      "lineCount": 1500
    },
    {
      "file": "config_008.js",
      "startLine": 397792,
      "endLine": 399291,
      "lineCount": 1500
    },
    {
      "file": "config_009.js",
      "startLine": 399292,
      "endLine": 400789,
      "lineCount": 1498
    }
  ],
  "lodash": [
    {
      "file": "lodash_001.js",
      "startLine": 20987,
      "endLine": 22483,
      "lineCount": 1497
    },
    {
      "file": "lodash_002.js",
      "startLine": 23982,
      "endLine": 25481,
      "lineCount": 1500
    },
    {
      "file": "lodash_003.js",
      "startLine": 26980,
      "endLine": 28477,
      "lineCount": 1498
    },
    {
      "file": "lodash_004.js",
      "startLine": 49317,
      "endLine": 50815,
      "lineCount": 1499
    },
    {
      "file": "lodash_005.js",
      "startLine": 50816,
      "endLine": 52310,
      "lineCount": 1495
    }
  ],
  "fs": [
    {
      "file": "fs_001.js",
      "startLine": 22484,
      "endLine": 23981,
      "lineCount": 1498
    }
  ],
  "tools": [
    {
      "file": "tools_001.js",
      "startLine": 32938,
      "endLine": 34435,
      "lineCount": 1498
    },
    {
      "file": "tools_002.js",
      "startLine": 40340,
      "endLine": 41829,
      "lineCount": 1490
    },
    {
      "file": "tools_003.js",
      "startLine": 52311,
      "endLine": 53809,
      "lineCount": 1499
    },
    {
      "file": "tools_004.js",
      "startLine": 159719,
      "endLine": 161216,
      "lineCount": 1498
    },
    {
      "file": "tools_005.js",
      "startLine": 162717,
      "endLine": 164215,
      "lineCount": 1499
    },
    {
      "file": "tools_006.js",
      "startLine": 164216,
      "endLine": 165715,
      "lineCount": 1500
    },
    {
      "file": "tools_007.js",
      "startLine": 263045,
      "endLine": 264541,
      "lineCount": 1497
    },
    {
      "file": "tools_008.js",
      "startLine": 288485,
      "endLine": 289978,
      "lineCount": 1494
    },
    {
      "file": "tools_009.js",
      "startLine": 291479,
      "endLine": 292978,
      "lineCount": 1500
    },
    {
      "file": "tools_010.js",
      "startLine": 292979,
      "endLine": 294472,
      "lineCount": 1494
    },
    {
      "file": "tools_011.js",
      "startLine": 337921,
      "endLine": 339418,
      "lineCount": 1498
    },
    {
      "file": "tools_012.js",
      "startLine": 345418,
      "endLine": 346916,
      "lineCount": 1499
    },
    {
      "file": "tools_013.js",
      "startLine": 348416,
      "endLine": 349915,
      "lineCount": 1500
    },
    {
      "file": "tools_014.js",
      "startLine": 349916,
      "endLine": 351415,
      "lineCount": 1500
    },
    {
      "file": "tools_015.js",
      "startLine": 351416,
      "endLine": 352915,
      "lineCount": 1500
    },
    {
      "file": "tools_016.js",
      "startLine": 366336,
      "endLine": 367835,
      "lineCount": 1500
    },
    {
      "file": "tools_017.js",
      "startLine": 367836,
      "endLine": 369333,
      "lineCount": 1498
    },
    {
      "file": "tools_018.js",
      "startLine": 402284,
      "endLine": 403776,
      "lineCount": 1493
    },
    {
      "file": "tools_019.js",
      "startLine": 411273,
      "endLine": 412771,
      "lineCount": 1499
    },
    {
      "file": "tools_020.js",
      "startLine": 430697,
      "endLine": 432193,
      "lineCount": 1497
    },
    {
      "file": "tools_021.js",
      "startLine": 432194,
      "endLine": 433691,
      "lineCount": 1498
    },
    {
      "file": "tools_022.js",
      "startLine": 433692,
      "endLine": 435188,
      "lineCount": 1497
    },
    {
      "file": "tools_023.js",
      "startLine": 435189,
      "endLine": 436687,
      "lineCount": 1499
    },
    {
      "file": "tools_024.js",
      "startLine": 444179,
      "endLine": 445675,
      "lineCount": 1497
    },
    {
      "file": "tools_025.js",
      "startLine": 445676,
      "endLine": 447173,
      "lineCount": 1498
    }
  ],
  "prompts": [
    {
      "file": "prompts_001.js",
      "startLine": 37435,
      "endLine": 38842,
      "lineCount": 1408
    },
    {
      "file": "prompts_002.js",
      "startLine": 43326,
      "endLine": 44817,
      "lineCount": 1492
    },
    {
      "file": "prompts_003.js",
      "startLine": 207640,
      "endLine": 209139,
      "lineCount": 1500
    },
    {
      "file": "prompts_004.js",
      "startLine": 209140,
      "endLine": 210638,
      "lineCount": 1499
    },
    {
      "file": "prompts_005.js",
      "startLine": 270528,
      "endLine": 272027,
      "lineCount": 1500
    },
    {
      "file": "prompts_006.js",
      "startLine": 331923,
      "endLine": 333421,
      "lineCount": 1499
    },
    {
      "file": "prompts_007.js",
      "startLine": 333422,
      "endLine": 334920,
      "lineCount": 1499
    },
    {
      "file": "prompts_008.js",
      "startLine": 346917,
      "endLine": 348415,
      "lineCount": 1499
    },
    {
      "file": "prompts_009.js",
      "startLine": 423226,
      "endLine": 424723,
      "lineCount": 1498
    },
    {
      "file": "prompts_010.js",
      "startLine": 442679,
      "endLine": 444178,
      "lineCount": 1500
    }
  ],
  "commands": [
    {
      "file": "commands_001.js",
      "startLine": 71786,
      "endLine": 73283,
      "lineCount": 1498
    },
    {
      "file": "commands_002.js",
      "startLine": 83773,
      "endLine": 85262,
      "lineCount": 1490
    },
    {
      "file": "commands_003.js",
      "startLine": 95699,
      "endLine": 97192,
      "lineCount": 1494
    },
    {
      "file": "commands_004.js",
      "startLine": 104690,
      "endLine": 106183,
      "lineCount": 1494
    },
    {
      "file": "commands_005.js",
      "startLine": 122375,
      "endLine": 123874,
      "lineCount": 1500
    },
    {
      "file": "commands_006.js",
      "startLine": 370833,
      "endLine": 372332,
      "lineCount": 1500
    },
    {
      "file": "commands_007.js",
      "startLine": 390318,
      "endLine": 391817,
      "lineCount": 1500
    },
    {
      "file": "commands_008.js",
      "startLine": 448674,
      "endLine": 450173,
      "lineCount": 1500
    }
  ],
  "other": [
    {
      "file": "other_001.js",
      "startLine": 225585,
      "endLine": 227083,
      "lineCount": 1499
    },
    {
      "file": "other_002.js",
      "startLine": 227084,
      "endLine": 228582,
      "lineCount": 1499
    },
    {
      "file": "other_003.js",
      "startLine": 228583,
      "endLine": 230081,
      "lineCount": 1499
    },
    {
      "file": "other_004.js",
      "startLine": 230082,
      "endLine": 231580,
      "lineCount": 1499
    },
    {
      "file": "other_005.js",
      "startLine": 231581,
      "endLine": 233079,
      "lineCount": 1499
    },
    {
      "file": "other_006.js",
      "startLine": 233080,
      "endLine": 234578,
      "lineCount": 1499
    },
    {
      "file": "other_007.js",
      "startLine": 234579,
      "endLine": 236077,
      "lineCount": 1499
    },
    {
      "file": "other_008.js",
      "startLine": 236078,
      "endLine": 237576,
      "lineCount": 1499
    }
  ],
  "crypto": [
    {
      "file": "crypto_001.js",
      "startLine": 295973,
      "endLine": 297471,
      "lineCount": 1499
    }
  ],
  "process": [
    {
      "file": "process_001.js",
      "startLine": 312460,
      "endLine": 313958,
      "lineCount": 1499
    }
  ],
  "agents": [
    {
      "file": "agents_001.js",
      "startLine": 388818,
      "endLine": 390317,
      "lineCount": 1500
    },
    {
      "file": "agents_002.js",
      "startLine": 400790,
      "endLine": 402283,
      "lineCount": 1494
    },
    {
      "file": "agents_003.js",
      "startLine": 403777,
      "endLine": 405276,
      "lineCount": 1500
    },
    {
      "file": "agents_004.js",
      "startLine": 409774,
      "endLine": 411272,
      "lineCount": 1499
    },
    {
      "file": "agents_005.js",
      "startLine": 414271,
      "endLine": 415764,
      "lineCount": 1494
    },
    {
      "file": "agents_006.js",
      "startLine": 415765,
      "endLine": 417264,
      "lineCount": 1500
    },
    {
      "file": "agents_007.js",
      "startLine": 418765,
      "endLine": 420242,
      "lineCount": 1478
    },
    {
      "file": "agents_008.js",
      "startLine": 424724,
      "endLine": 426222,
      "lineCount": 1499
    },
    {
      "file": "agents_009.js",
      "startLine": 426223,
      "endLine": 427722,
      "lineCount": 1500
    },
    {
      "file": "agents_010.js",
      "startLine": 427723,
      "endLine": 429221,
      "lineCount": 1499
    },
    {
      "file": "agents_011.js",
      "startLine": 436688,
      "endLine": 438186,
      "lineCount": 1499
    },
    {
      "file": "agents_012.js",
      "startLine": 441179,
      "endLine": 442678,
      "lineCount": 1500
    },
    {
      "file": "agents_013.js",
      "startLine": 447174,
      "endLine": 448673,
      "lineCount": 1500
    }
  ]
};

module.exports = { fileIndex };
