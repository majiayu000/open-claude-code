/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: process_001.js
 * 处理时间: 2025-12-09T03:41:38.091Z
 * 变量映射: 0 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 */

/**
 * Claude Code Decompiled
 * Category: process
 * File: 1/1
 * Lines: 312460 - 313958 (1499 lines)
 * Original file: cli.js
 */

                                extensions: [
                                    [1000, 536870911]
                                ],
                                nested: {
                                    Declaration: {
                                        fields: {
                                            number: {
                                                type: "int32",
                                                id: 1
                                            },
                                            fullName: {
                                                type: "string",
                                                id: 2
                                            },
                                            type: {
                                                type: "string",
                                                id: 3
                                            },
                                            reserved: {
                                                type: "bool",
                                                id: 5
                                            },
                                            repeated: {
                                                type: "bool",
                                                id: 6
                                            }
                                        },
                                        reserved: [
                                            [4, 4]
                                        ]
                                    },
                                    VerificationState: {
                                        values: {
                                            DECLARATION: 0,
                                            UNVERIFIED: 1
                                        }
                                    }
                                }
                            },
                            FieldDescriptorProto: {
                                edition: "proto2",
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    number: {
                                        type: "int32",
                                        id: 3
                                    },
                                    label: {
                                        type: "Label",
                                        id: 4
                                    },
                                    type: {
                                        type: "Type",
                                        id: 5
                                    },
                                    typeName: {
                                        type: "string",
                                        id: 6
                                    },
                                    extendee: {
                                        type: "string",
                                        id: 2
                                    },
                                    defaultValue: {
                                        type: "string",
                                        id: 7
                                    },
                                    oneofIndex: {
                                        type: "int32",
                                        id: 9
                                    },
                                    jsonName: {
                                        type: "string",
                                        id: 10
                                    },
                                    options: {
                                        type: "FieldOptions",
                                        id: 8
                                    },
                                    proto3Optional: {
                                        type: "bool",
                                        id: 17
                                    }
                                },
                                nested: {
                                    Type: {
                                        values: {
                                            TYPE_DOUBLE: 1,
                                            TYPE_FLOAT: 2,
                                            TYPE_INT64: 3,
                                            TYPE_UINT64: 4,
                                            TYPE_INT32: 5,
                                            TYPE_FIXED64: 6,
                                            TYPE_FIXED32: 7,
                                            TYPE_BOOL: 8,
                                            TYPE_STRING: 9,
                                            TYPE_GROUP: 10,
                                            TYPE_MESSAGE: 11,
                                            TYPE_BYTES: 12,
                                            TYPE_UINT32: 13,
                                            TYPE_ENUM: 14,
                                            TYPE_SFIXED32: 15,
                                            TYPE_SFIXED64: 16,
                                            TYPE_SINT32: 17,
                                            TYPE_SINT64: 18
                                        }
                                    },
                                    Label: {
                                        values: {
                                            LABEL_OPTIONAL: 1,
                                            LABEL_REPEATED: 3,
                                            LABEL_REQUIRED: 2
                                        }
                                    }
                                }
                            },
                            OneofDescriptorProto: {
                                edition: "proto2",
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    options: {
                                        type: "OneofOptions",
                                        id: 2
                                    }
                                }
                            },
                            EnumDescriptorProto: {
                                edition: "proto2",
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    value: {
                                        rule: "repeated",
                                        type: "EnumValueDescriptorProto",
                                        id: 2
                                    },
                                    options: {
                                        type: "EnumOptions",
                                        id: 3
                                    },
                                    reservedRange: {
                                        rule: "repeated",
                                        type: "EnumReservedRange",
                                        id: 4
                                    },
                                    reservedName: {
                                        rule: "repeated",
                                        type: "string",
                                        id: 5
                                    },
                                    visibility: {
                                        type: "SymbolVisibility",
                                        id: 6
                                    }
                                },
                                nested: {
                                    EnumReservedRange: {
                                        fields: {
                                            start: {
                                                type: "int32",
                                                id: 1
                                            },
                                            end: {
                                                type: "int32",
                                                id: 2
                                            }
                                        }
                                    }
                                }
                            },
                            EnumValueDescriptorProto: {
                                edition: "proto2",
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    number: {
                                        type: "int32",
                                        id: 2
                                    },
                                    options: {
                                        type: "EnumValueOptions",
                                        id: 3
                                    }
                                }
                            },
                            ServiceDescriptorProto: {
                                edition: "proto2",
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    method: {
                                        rule: "repeated",
                                        type: "MethodDescriptorProto",
                                        id: 2
                                    },
                                    options: {
                                        type: "ServiceOptions",
                                        id: 3
                                    }
                                }
                            },
                            MethodDescriptorProto: {
                                edition: "proto2",
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    inputType: {
                                        type: "string",
                                        id: 2
                                    },
                                    outputType: {
                                        type: "string",
                                        id: 3
                                    },
                                    options: {
                                        type: "MethodOptions",
                                        id: 4
                                    },
                                    clientStreaming: {
                                        type: "bool",
                                        id: 5
                                    },
                                    serverStreaming: {
                                        type: "bool",
                                        id: 6
                                    }
                                }
                            },
                            FileOptions: {
                                edition: "proto2",
                                fields: {
                                    javaPackage: {
                                        type: "string",
                                        id: 1
                                    },
                                    javaOuterClassname: {
                                        type: "string",
                                        id: 8
                                    },
                                    javaMultipleFiles: {
                                        type: "bool",
                                        id: 10
                                    },
                                    javaGenerateEqualsAndHash: {
                                        type: "bool",
                                        id: 20,
                                        options: {
                                            deprecated: !0
                                        }
                                    },
                                    javaStringCheckUtf8: {
                                        type: "bool",
                                        id: 27
                                    },
                                    optimizeFor: {
                                        type: "OptimizeMode",
                                        id: 9,
                                        options: {
                                            default: "SPEED"
                                        }
                                    },
                                    goPackage: {
                                        type: "string",
                                        id: 11
                                    },
                                    ccGenericServices: {
                                        type: "bool",
                                        id: 16
                                    },
                                    javaGenericServices: {
                                        type: "bool",
                                        id: 17
                                    },
                                    pyGenericServices: {
                                        type: "bool",
                                        id: 18
                                    },
                                    deprecated: {
                                        type: "bool",
                                        id: 23
                                    },
                                    ccEnableArenas: {
                                        type: "bool",
                                        id: 31,
                                        options: {
                                            default: !0
                                        }
                                    },
                                    objcClassPrefix: {
                                        type: "string",
                                        id: 36
                                    },
                                    csharpNamespace: {
                                        type: "string",
                                        id: 37
                                    },
                                    swiftPrefix: {
                                        type: "string",
                                        id: 39
                                    },
                                    phpClassPrefix: {
                                        type: "string",
                                        id: 40
                                    },
                                    phpNamespace: {
                                        type: "string",
                                        id: 41
                                    },
                                    phpMetadataNamespace: {
                                        type: "string",
                                        id: 44
                                    },
                                    rubyPackage: {
                                        type: "string",
                                        id: 45
                                    },
                                    features: {
                                        type: "FeatureSet",
                                        id: 50
                                    },
                                    uninterpretedOption: {
                                        rule: "repeated",
                                        type: "UninterpretedOption",
                                        id: 999
                                    }
                                },
                                extensions: [
                                    [1000, 536870911]
                                ],
                                reserved: [
                                    [42, 42],
                                    [38, 38], "php_generic_services"
                                ],
                                nested: {
                                    OptimizeMode: {
                                        values: {
                                            SPEED: 1,
                                            CODE_SIZE: 2,
                                            LITE_RUNTIME: 3
                                        }
                                    }
                                }
                            },
                            MessageOptions: {
                                edition: "proto2",
                                fields: {
                                    messageSetWireFormat: {
                                        type: "bool",
                                        id: 1
                                    },
                                    noStandardDescriptorAccessor: {
                                        type: "bool",
                                        id: 2
                                    },
                                    deprecated: {
                                        type: "bool",
                                        id: 3
                                    },
                                    mapEntry: {
                                        type: "bool",
                                        id: 7
                                    },
                                    deprecatedLegacyJsonFieldConflicts: {
                                        type: "bool",
                                        id: 11,
                                        options: {
                                            deprecated: !0
                                        }
                                    },
                                    features: {
                                        type: "FeatureSet",
                                        id: 12
                                    },
                                    uninterpretedOption: {
                                        rule: "repeated",
                                        type: "UninterpretedOption",
                                        id: 999
                                    }
                                },
                                extensions: [
                                    [1000, 536870911]
                                ],
                                reserved: [
                                    [4, 4],
                                    [5, 5],
                                    [6, 6],
                                    [8, 8],
                                    [9, 9]
                                ]
                            },
                            FieldOptions: {
                                edition: "proto2",
                                fields: {
                                    ctype: {
                                        type: "CType",
                                        id: 1,
                                        options: {
                                            default: "STRING"
                                        }
                                    },
                                    packed: {
                                        type: "bool",
                                        id: 2
                                    },
                                    jstype: {
                                        type: "JSType",
                                        id: 6,
                                        options: {
                                            default: "JS_NORMAL"
                                        }
                                    },
                                    lazy: {
                                        type: "bool",
                                        id: 5
                                    },
                                    unverifiedLazy: {
                                        type: "bool",
                                        id: 15
                                    },
                                    deprecated: {
                                        type: "bool",
                                        id: 3
                                    },
                                    weak: {
                                        type: "bool",
                                        id: 10,
                                        options: {
                                            deprecated: !0
                                        }
                                    },
                                    debugRedact: {
                                        type: "bool",
                                        id: 16
                                    },
                                    retention: {
                                        type: "OptionRetention",
                                        id: 17
                                    },
                                    targets: {
                                        rule: "repeated",
                                        type: "OptionTargetType",
                                        id: 19
                                    },
                                    editionDefaults: {
                                        rule: "repeated",
                                        type: "EditionDefault",
                                        id: 20
                                    },
                                    features: {
                                        type: "FeatureSet",
                                        id: 21
                                    },
                                    featureSupport: {
                                        type: "FeatureSupport",
                                        id: 22
                                    },
                                    uninterpretedOption: {
                                        rule: "repeated",
                                        type: "UninterpretedOption",
                                        id: 999
                                    }
                                },
                                extensions: [
                                    [1000, 536870911]
                                ],
                                reserved: [
                                    [4, 4],
                                    [18, 18]
                                ],
                                nested: {
                                    CType: {
                                        values: {
                                            STRING: 0,
                                            CORD: 1,
                                            STRING_PIECE: 2
                                        }
                                    },
                                    JSType: {
                                        values: {
                                            JS_NORMAL: 0,
                                            JS_STRING: 1,
                                            JS_NUMBER: 2
                                        }
                                    },
                                    OptionRetention: {
                                        values: {
                                            RETENTION_UNKNOWN: 0,
                                            RETENTION_RUNTIME: 1,
                                            RETENTION_SOURCE: 2
                                        }
                                    },
                                    OptionTargetType: {
                                        values: {
                                            TARGET_TYPE_UNKNOWN: 0,
                                            TARGET_TYPE_FILE: 1,
                                            TARGET_TYPE_EXTENSION_RANGE: 2,
                                            TARGET_TYPE_MESSAGE: 3,
                                            TARGET_TYPE_FIELD: 4,
                                            TARGET_TYPE_ONEOF: 5,
                                            TARGET_TYPE_ENUM: 6,
                                            TARGET_TYPE_ENUM_ENTRY: 7,
                                            TARGET_TYPE_SERVICE: 8,
                                            TARGET_TYPE_METHOD: 9
                                        }
                                    },
                                    EditionDefault: {
                                        fields: {
                                            edition: {
                                                type: "Edition",
                                                id: 3
                                            },
                                            value: {
                                                type: "string",
                                                id: 2
                                            }
                                        }
                                    },
                                    FeatureSupport: {
                                        fields: {
                                            editionIntroduced: {
                                                type: "Edition",
                                                id: 1
                                            },
                                            editionDeprecated: {
                                                type: "Edition",
                                                id: 2
                                            },
                                            deprecationWarning: {
                                                type: "string",
                                                id: 3
                                            },
                                            editionRemoved: {
                                                type: "Edition",
                                                id: 4
                                            }
                                        }
                                    }
                                }
                            },
                            OneofOptions: {
                                edition: "proto2",
                                fields: {
                                    features: {
                                        type: "FeatureSet",
                                        id: 1
                                    },
                                    uninterpretedOption: {
                                        rule: "repeated",
                                        type: "UninterpretedOption",
                                        id: 999
                                    }
                                },
                                extensions: [
                                    [1000, 536870911]
                                ]
                            },
                            EnumOptions: {
                                edition: "proto2",
                                fields: {
                                    allowAlias: {
                                        type: "bool",
                                        id: 2
                                    },
                                    deprecated: {
                                        type: "bool",
                                        id: 3
                                    },
                                    deprecatedLegacyJsonFieldConflicts: {
                                        type: "bool",
                                        id: 6,
                                        options: {
                                            deprecated: !0
                                        }
                                    },
                                    features: {
                                        type: "FeatureSet",
                                        id: 7
                                    },
                                    uninterpretedOption: {
                                        rule: "repeated",
                                        type: "UninterpretedOption",
                                        id: 999
                                    }
                                },
                                extensions: [
                                    [1000, 536870911]
                                ],
                                reserved: [
                                    [5, 5]
                                ]
                            },
                            EnumValueOptions: {
                                edition: "proto2",
                                fields: {
                                    deprecated: {
                                        type: "bool",
                                        id: 1
                                    },
                                    features: {
                                        type: "FeatureSet",
                                        id: 2
                                    },
                                    debugRedact: {
                                        type: "bool",
                                        id: 3
                                    },
                                    featureSupport: {
                                        type: "FieldOptions.FeatureSupport",
                                        id: 4
                                    },
                                    uninterpretedOption: {
                                        rule: "repeated",
                                        type: "UninterpretedOption",
                                        id: 999
                                    }
                                },
                                extensions: [
                                    [1000, 536870911]
                                ]
                            },
                            ServiceOptions: {
                                edition: "proto2",
                                fields: {
                                    features: {
                                        type: "FeatureSet",
                                        id: 34
                                    },
                                    deprecated: {
                                        type: "bool",
                                        id: 33
                                    },
                                    uninterpretedOption: {
                                        rule: "repeated",
                                        type: "UninterpretedOption",
                                        id: 999
                                    }
                                },
                                extensions: [
                                    [1000, 536870911]
                                ]
                            },
                            MethodOptions: {
                                edition: "proto2",
                                fields: {
                                    deprecated: {
                                        type: "bool",
                                        id: 33
                                    },
                                    idempotencyLevel: {
                                        type: "IdempotencyLevel",
                                        id: 34,
                                        options: {
                                            default: "IDEMPOTENCY_UNKNOWN"
                                        }
                                    },
                                    features: {
                                        type: "FeatureSet",
                                        id: 35
                                    },
                                    uninterpretedOption: {
                                        rule: "repeated",
                                        type: "UninterpretedOption",
                                        id: 999
                                    }
                                },
                                extensions: [
                                    [1000, 536870911]
                                ],
                                nested: {
                                    IdempotencyLevel: {
                                        values: {
                                            IDEMPOTENCY_UNKNOWN: 0,
                                            NO_SIDE_EFFECTS: 1,
                                            IDEMPOTENT: 2
                                        }
                                    }
                                }
                            },
                            UninterpretedOption: {
                                edition: "proto2",
                                fields: {
                                    name: {
                                        rule: "repeated",
                                        type: "NamePart",
                                        id: 2
                                    },
                                    identifierValue: {
                                        type: "string",
                                        id: 3
                                    },
                                    positiveIntValue: {
                                        type: "uint64",
                                        id: 4
                                    },
                                    negativeIntValue: {
                                        type: "int64",
                                        id: 5
                                    },
                                    doubleValue: {
                                        type: "double",
                                        id: 6
                                    },
                                    stringValue: {
                                        type: "bytes",
                                        id: 7
                                    },
                                    aggregateValue: {
                                        type: "string",
                                        id: 8
                                    }
                                },
                                nested: {
                                    NamePart: {
                                        fields: {
                                            namePart: {
                                                rule: "required",
                                                type: "string",
                                                id: 1
                                            },
                                            isExtension: {
                                                rule: "required",
                                                type: "bool",
                                                id: 2
                                            }
                                        }
                                    }
                                }
                            },
                            FeatureSet: {
                                edition: "proto2",
                                fields: {
                                    fieldPresence: {
                                        type: "FieldPresence",
                                        id: 1,
                                        options: {
                                            retention: "RETENTION_RUNTIME",
                                            targets: "TARGET_TYPE_FILE",
                                            "feature_support.edition_introduced": "EDITION_2023",
                                            "edition_defaults.edition": "EDITION_2023",
                                            "edition_defaults.value": "EXPLICIT"
                                        }
                                    },
                                    enumType: {
                                        type: "EnumType",
                                        id: 2,
                                        options: {
                                            retention: "RETENTION_RUNTIME",
                                            targets: "TARGET_TYPE_FILE",
                                            "feature_support.edition_introduced": "EDITION_2023",
                                            "edition_defaults.edition": "EDITION_PROTO3",
                                            "edition_defaults.value": "OPEN"
                                        }
                                    },
                                    repeatedFieldEncoding: {
                                        type: "RepeatedFieldEncoding",
                                        id: 3,
                                        options: {
                                            retention: "RETENTION_RUNTIME",
                                            targets: "TARGET_TYPE_FILE",
                                            "feature_support.edition_introduced": "EDITION_2023",
                                            "edition_defaults.edition": "EDITION_PROTO3",
                                            "edition_defaults.value": "PACKED"
                                        }
                                    },
                                    utf8Validation: {
                                        type: "Utf8Validation",
                                        id: 4,
                                        options: {
                                            retention: "RETENTION_RUNTIME",
                                            targets: "TARGET_TYPE_FILE",
                                            "feature_support.edition_introduced": "EDITION_2023",
                                            "edition_defaults.edition": "EDITION_PROTO3",
                                            "edition_defaults.value": "VERIFY"
                                        }
                                    },
                                    messageEncoding: {
                                        type: "MessageEncoding",
                                        id: 5,
                                        options: {
                                            retention: "RETENTION_RUNTIME",
                                            targets: "TARGET_TYPE_FILE",
                                            "feature_support.edition_introduced": "EDITION_2023",
                                            "edition_defaults.edition": "EDITION_LEGACY",
                                            "edition_defaults.value": "LENGTH_PREFIXED"
                                        }
                                    },
                                    jsonFormat: {
                                        type: "JsonFormat",
                                        id: 6,
                                        options: {
                                            retention: "RETENTION_RUNTIME",
                                            targets: "TARGET_TYPE_FILE",
                                            "feature_support.edition_introduced": "EDITION_2023",
                                            "edition_defaults.edition": "EDITION_PROTO3",
                                            "edition_defaults.value": "ALLOW"
                                        }
                                    },
                                    enforceNamingStyle: {
                                        type: "EnforceNamingStyle",
                                        id: 7,
                                        options: {
                                            retention: "RETENTION_SOURCE",
                                            targets: "TARGET_TYPE_METHOD",
                                            "feature_support.edition_introduced": "EDITION_2024",
                                            "edition_defaults.edition": "EDITION_2024",
                                            "edition_defaults.value": "STYLE2024"
                                        }
                                    },
                                    defaultSymbolVisibility: {
                                        type: "VisibilityFeature.DefaultSymbolVisibility",
                                        id: 8,
                                        options: {
                                            retention: "RETENTION_SOURCE",
                                            targets: "TARGET_TYPE_FILE",
                                            "feature_support.edition_introduced": "EDITION_2024",
                                            "edition_defaults.edition": "EDITION_2024",
                                            "edition_defaults.value": "EXPORT_TOP_LEVEL"
                                        }
                                    }
                                },
                                extensions: [
                                    [1000, 9994],
                                    [9995, 9999],
                                    [1e4, 1e4]
                                ],
                                reserved: [
                                    [999, 999]
                                ],
                                nested: {
                                    FieldPresence: {
                                        values: {
                                            FIELD_PRESENCE_UNKNOWN: 0,
                                            EXPLICIT: 1,
                                            IMPLICIT: 2,
                                            LEGACY_REQUIRED: 3
                                        }
                                    },
                                    EnumType: {
                                        values: {
                                            ENUM_TYPE_UNKNOWN: 0,
                                            OPEN: 1,
                                            CLOSED: 2
                                        }
                                    },
                                    RepeatedFieldEncoding: {
                                        values: {
                                            REPEATED_FIELD_ENCODING_UNKNOWN: 0,
                                            PACKED: 1,
                                            EXPANDED: 2
                                        }
                                    },
                                    Utf8Validation: {
                                        values: {
                                            UTF8_VALIDATION_UNKNOWN: 0,
                                            VERIFY: 2,
                                            NONE: 3
                                        }
                                    },
                                    MessageEncoding: {
                                        values: {
                                            MESSAGE_ENCODING_UNKNOWN: 0,
                                            LENGTH_PREFIXED: 1,
                                            DELIMITED: 2
                                        }
                                    },
                                    JsonFormat: {
                                        values: {
                                            JSON_FORMAT_UNKNOWN: 0,
                                            ALLOW: 1,
                                            LEGACY_BEST_EFFORT: 2
                                        }
                                    },
                                    EnforceNamingStyle: {
                                        values: {
                                            ENFORCE_NAMING_STYLE_UNKNOWN: 0,
                                            STYLE2024: 1,
                                            STYLE_LEGACY: 2
                                        }
                                    },
                                    VisibilityFeature: {
                                        fields: {},
                                        reserved: [
                                            [1, 536870911]
                                        ],
                                        nested: {
                                            DefaultSymbolVisibility: {
                                                values: {
                                                    DEFAULT_SYMBOL_VISIBILITY_UNKNOWN: 0,
                                                    EXPORT_ALL: 1,
                                                    EXPORT_TOP_LEVEL: 2,
                                                    LOCAL_ALL: 3,
                                                    STRICT: 4
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            FeatureSetDefaults: {
                                edition: "proto2",
                                fields: {
                                    defaults: {
                                        rule: "repeated",
                                        type: "FeatureSetEditionDefault",
                                        id: 1
                                    },
                                    minimumEdition: {
                                        type: "Edition",
                                        id: 4
                                    },
                                    maximumEdition: {
                                        type: "Edition",
                                        id: 5
                                    }
                                },
                                nested: {
                                    FeatureSetEditionDefault: {
                                        fields: {
                                            edition: {
                                                type: "Edition",
                                                id: 3
                                            },
                                            overridableFeatures: {
                                                type: "FeatureSet",
                                                id: 4
                                            },
                                            fixedFeatures: {
                                                type: "FeatureSet",
                                                id: 5
                                            }
                                        },
                                        reserved: [
                                            [1, 1],
                                            [2, 2], "features"
                                        ]
                                    }
                                }
                            },
                            SourceCodeInfo: {
                                edition: "proto2",
                                fields: {
                                    location: {
                                        rule: "repeated",
                                        type: "Location",
                                        id: 1
                                    }
                                },
                                extensions: [
                                    [536000000, 536000000]
                                ],
                                nested: {
                                    Location: {
                                        fields: {
                                            path: {
                                                rule: "repeated",
                                                type: "int32",
                                                id: 1,
                                                options: {
                                                    packed: !0
                                                }
                                            },
                                            span: {
                                                rule: "repeated",
                                                type: "int32",
                                                id: 2,
                                                options: {
                                                    packed: !0
                                                }
                                            },
                                            leadingComments: {
                                                type: "string",
                                                id: 3
                                            },
                                            trailingComments: {
                                                type: "string",
                                                id: 4
                                            },
                                            leadingDetachedComments: {
                                                rule: "repeated",
                                                type: "string",
                                                id: 6
                                            }
                                        }
                                    }
                                }
                            },
                            GeneratedCodeInfo: {
                                edition: "proto2",
                                fields: {
                                    annotation: {
                                        rule: "repeated",
                                        type: "Annotation",
                                        id: 1
                                    }
                                },
                                nested: {
                                    Annotation: {
                                        fields: {
                                            path: {
                                                rule: "repeated",
                                                type: "int32",
                                                id: 1,
                                                options: {
                                                    packed: !0
                                                }
                                            },
                                            sourceFile: {
                                                type: "string",
                                                id: 2
                                            },
                                            begin: {
                                                type: "int32",
                                                id: 3
                                            },
                                            end: {
                                                type: "int32",
                                                id: 4
                                            },
                                            semantic: {
                                                type: "Semantic",
                                                id: 5
                                            }
                                        },
                                        nested: {
                                            Semantic: {
                                                values: {
                                                    NONE: 0,
                                                    SET: 1,
                                                    ALIAS: 2
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            SymbolVisibility: {
                                edition: "proto2",
                                values: {
                                    VISIBILITY_UNSET: 0,
                                    VISIBILITY_LOCAL: 1,
                                    VISIBILITY_EXPORT: 2
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});
var FE2 = U((r8, XE2) => {
    var qq = T41();
    XE2.exports = r8 = qq.descriptor = qq.Root.fromJSON(N20()).lookup(".google.protobuf");
    var {
        Namespace: ZE2,
        Root: COA,
        Enum: Rh,
        Type: rk,
        Field: ui,
        MapField: rL5,
        OneOf: P41,
        Service: EOA,
        Method: j41
    } = qq;
    COA.fromDescriptor = function(Q) {
        if (typeof Q.length === "number") Q = r8.FileDescriptorSet.decode(Q);
        var B = new COA;
        if (Q.file) {
            var G, Z;
            for (var I = 0, Y; I < Q.file.length; ++I) {
                if (Z = B, (G = Q.file[I]).package && G.package.length) Z = B.define(G.package);
                var J = YM5(G);
                if (G.name && G.name.length) B.files.push(Z.filename = G.name);
                if (G.messageType)
                    for (Y = 0; Y < G.messageType.length; ++Y) Z.add(rk.fromDescriptor(G.messageType[Y], J));
                if (G.enumType)
                    for (Y = 0; Y < G.enumType.length; ++Y) Z.add(Rh.fromDescriptor(G.enumType[Y], J));
                if (G.extension)
                    for (Y = 0; Y < G.extension.length; ++Y) Z.add(ui.fromDescriptor(G.extension[Y], J));
                if (G.service)
                    for (Y = 0; Y < G.service.length; ++Y) Z.add(EOA.fromDescriptor(G.service[Y], J));
                var W = sYA(G.options, r8.FileOptions);
                if (W) {
                    var X = Object.keys(W);
                    for (Y = 0; Y < X.length; ++Y) Z.setOption(X[Y], W[X[Y]])
                }
            }
        }
        return B.resolveAll()
    };
    COA.prototype.toDescriptor = function(Q) {
        var B = r8.FileDescriptorSet.create();
        return IE2(this, B.file, Q), B
    };

    function IE2(A, Q, B) {
        var G = r8.FileDescriptorProto.create({
            name: A.filename || (A.fullName.substring(1).replace(/\./g, "_") || "root") + ".proto"
        });
        if (JM5(B, G), !(A instanceof COA)) G.package = A.fullName.substring(1);
        for (var Z = 0, I; Z < A.nestedArray.length; ++Z)
            if ((I = A._nestedArray[Z]) instanceof rk) G.messageType.push(I.toDescriptor(B));
            else if (I instanceof Rh) G.enumType.push(I.toDescriptor());
        else if (I instanceof ui) G.extension.push(I.toDescriptor(B));
        else if (I instanceof EOA) G.service.push(I.toDescriptor());
        else if (I instanceof ZE2) IE2(I, Q, B);
        if (G.options = rYA(A.options, r8.FileOptions), G.messageType.length + G.enumType.length + G.extension.length + G.service.length) Q.push(G)
    }
    var oL5 = 0;
    rk.fromDescriptor = function(Q, B, G) {
        if (typeof Q.length === "number") Q = r8.DescriptorProto.decode(Q);
        var Z = new rk(Q.name.length ? Q.name : "Type" + oL5++, sYA(Q.options, r8.MessageOptions)),
            I;
        if (!G) Z._edition = B;
        if (Q.oneofDecl)
            for (I = 0; I < Q.oneofDecl.length; ++I) Z.add(P41.fromDescriptor(Q.oneofDecl[I]));
        if (Q.field)
            for (I = 0; I < Q.field.length; ++I) {
                var Y = ui.fromDescriptor(Q.field[I], B, !0);
                if (Z.add(Y), Q.field[I].hasOwnProperty("oneofIndex")) Z.oneofsArray[Q.field[I].oneofIndex].add(Y)
            }
        if (Q.extension)
            for (I = 0; I < Q.extension.length; ++I) Z.add(ui.fromDescriptor(Q.extension[I], B, !0));
        if (Q.nestedType) {
            for (I = 0; I < Q.nestedType.length; ++I)
                if (Z.add(rk.fromDescriptor(Q.nestedType[I], B, !0)), Q.nestedType[I].options && Q.nestedType[I].options.mapEntry) Z.setOption("map_entry", !0)
        }
        if (Q.enumType)
            for (I = 0; I < Q.enumType.length; ++I) Z.add(Rh.fromDescriptor(Q.enumType[I], B, !0));
        if (Q.extensionRange && Q.extensionRange.length) {
            Z.extensions = [];
            for (I = 0; I < Q.extensionRange.length; ++I) Z.extensions.push([Q.extensionRange[I].start, Q.extensionRange[I].end])
        }
        if (Q.reservedRange && Q.reservedRange.length || Q.reservedName && Q.reservedName.length) {
            if (Z.reserved = [], Q.reservedRange)
                for (I = 0; I < Q.reservedRange.length; ++I) Z.reserved.push([Q.reservedRange[I].start, Q.reservedRange[I].end]);
            if (Q.reservedName)
                for (I = 0; I < Q.reservedName.length; ++I) Z.reserved.push(Q.reservedName[I])
        }
        return Z
    };
    rk.prototype.toDescriptor = function(Q) {
        var B = r8.DescriptorProto.create({
                name: this.name
            }),
            G;
        for (G = 0; G < this.fieldsArray.length; ++G) {
            var Z;
            if (B.field.push(Z = this._fieldsArray[G].toDescriptor(Q)), this._fieldsArray[G] instanceof rL5) {
                var I = L20(this._fieldsArray[G].keyType, this._fieldsArray[G].resolvedKeyType, !1),
                    Y = L20(this._fieldsArray[G].type, this._fieldsArray[G].resolvedType, !1),
                    J = Y === 11 || Y === 14 ? this._fieldsArray[G].resolvedType && WE2(this.parent, this._fieldsArray[G].resolvedType) || this._fieldsArray[G].type : void 0;
                B.nestedType.push(r8.DescriptorProto.create({
                    name: Z.typeName,
                    field: [r8.FieldDescriptorProto.create({
                        name: "key",
                        number: 1,
                        label: 1,
                        type: I
                    }), r8.FieldDescriptorProto.create({
                        name: "value",
                        number: 2,
                        label: 1,
                        type: Y,
                        typeName: J
                    })],
                    options: r8.MessageOptions.create({
                        mapEntry: !0
                    })
                }))
            }
        }
        for (G = 0; G < this.oneofsArray.length; ++G) B.oneofDecl.push(this._oneofsArray[G].toDescriptor());
        for (G = 0; G < this.nestedArray.length; ++G)
            if (this._nestedArray[G] instanceof ui) B.field.push(this._nestedArray[G].toDescriptor(Q));
            else if (this._nestedArray[G] instanceof rk) B.nestedType.push(this._nestedArray[G].toDescriptor(Q));
        else if (this._nestedArray[G] instanceof Rh) B.enumType.push(this._nestedArray[G].toDescriptor());
        if (this.extensions)
            for (G = 0; G < this.extensions.length; ++G) B.extensionRange.push(r8.DescriptorProto.ExtensionRange.create({
                start: this.extensions[G][0],
                end: this.extensions[G][1]
            }));
        if (this.reserved)
            for (G = 0; G < this.reserved.length; ++G)
                if (typeof this.reserved[G] === "string") B.reservedName.push(this.reserved[G]);
                else B.reservedRange.push(r8.DescriptorProto.ReservedRange.create({
                    start: this.reserved[G][0],
                    end: this.reserved[G][1]
                }));
        return B.options = rYA(this.options, r8.MessageOptions), B
    };
    var tL5 = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
    ui.fromDescriptor = function(Q, B, G) {
        if (typeof Q.length === "number") Q = r8.DescriptorProto.decode(Q);
        if (typeof Q.number !== "number") throw Error("missing field id");
        var Z;
        if (Q.typeName && Q.typeName.length) Z = Q.typeName;
        else Z = GM5(Q.type);
        var I;
        switch (Q.label) {
            case 1:
                I = void 0;
                break;
            case 2:
                I = "required";
                break;
            case 3:
                I = "repeated";
                break;
            default:
                throw Error("illegal label: " + Q.label)
        }
        var Y = Q.extendee;
        if (Q.extendee !== void 0) Y = Y.length ? Y : void 0;
        var J = new ui(Q.name.length ? Q.name : "field" + Q.number, Q.number, Z, I, Y);
        if (!G) J._edition = B;
        if (J.options = sYA(Q.options, r8.FieldOptions), Q.proto3_optional) J.options.proto3_optional = !0;
        if (Q.defaultValue && Q.defaultValue.length) {
            var W = Q.defaultValue;
            switch (W) {
                case "true":
                case "TRUE":
                    W = !0;
                    break;
                case "false":
                case "FALSE":
                    W = !1;
                    break;
                default:
                    var X = tL5.exec(W);
                    if (X) W = parseInt(W);
                    break
            }
            J.setOption("default", W)
        }
        if (ZM5(Q.type)) {
            if (B === "proto3") {
                if (Q.options && !Q.options.packed) J.setOption("packed", !1)
            } else if ((!B || B === "proto2") && Q.options && Q.options.packed) J.setOption("packed", !0)
        }
        return J
    };
    ui.prototype.toDescriptor = function(Q) {
        var B = r8.FieldDescriptorProto.create({
            name: this.name,
            number: this.id
        });
        if (this.map) B.type = 11, B.typeName = qq.util.ucFirst(this.name), B.label = 3;
        else {
            switch (B.type = L20(this.type, this.resolve().resolvedType, this.delimited)) {
                case 10:
                case 11:
                case 14:
                    B.typeName = this.resolvedType ? WE2(this.parent, this.resolvedType) : this.type;
                    break
            }
            if (this.rule === "repeated") B.label = 3;
            else if (this.required && Q === "proto2") B.label = 2;
            else B.label = 1
        }
        if (B.extendee = this.extensionField ? this.extensionField.parent.fullName : this.extend, this.partOf) {
            if ((B.oneofIndex = this.parent.oneofsArray.indexOf(this.partOf)) < 0) throw Error("missing oneof")
        }
        if (this.options) {
            if (B.options = rYA(this.options, r8.FieldOptions), this.options.default != null) B.defaultValue = String(this.options.default);
            if (this.options.proto3_optional) B.proto3_optional = !0
        }
        if (Q === "proto3") {
            if (!this.packed)(B.options || (B.options = r8.FieldOptions.create())).packed = !1
        } else if ((!Q || Q === "proto2") && this.packed)(B.options || (B.options = r8.FieldOptions.create())).packed = !0;
        return B
    };
    var eL5 = 0;
    Rh.fromDescriptor = function(Q, B, G) {
        if (typeof Q.length === "number") Q = r8.EnumDescriptorProto.decode(Q);
        var Z = {};
        if (Q.value)
            for (var I = 0; I < Q.value.length; ++I) {
                var Y = Q.value[I].name,
                    J = Q.value[I].number || 0;
                Z[Y && Y.length ? Y : "NAME" + J] = J
            }
        var W = new Rh(Q.name && Q.name.length ? Q.name : "Enum" + eL5++, Z, sYA(Q.options, r8.EnumOptions));
        if (!G) W._edition = B;
        return W
    };
    Rh.prototype.toDescriptor = function() {
        var Q = [];
        for (var B = 0, G = Object.keys(this.values); B < G.length; ++B) Q.push(r8.EnumValueDescriptorProto.create({
            name: G[B],
            number: this.values[G[B]]
        }));
        return r8.EnumDescriptorProto.create({
            name: this.name,
            value: Q,
            options: rYA(this.options, r8.EnumOptions)
        })
    };
    var AM5 = 0;
    P41.fromDescriptor = function(Q) {
        if (typeof Q.length === "number") Q = r8.OneofDescriptorProto.decode(Q);
        return new P41(Q.name && Q.name.length ? Q.name : "oneof" + AM5++)
    };
    P41.prototype.toDescriptor = function() {
        return r8.OneofDescriptorProto.create({
            name: this.name
        })
    };
    var QM5 = 0;
    EOA.fromDescriptor = function(Q, B, G) {
        if (typeof Q.length === "number") Q = r8.ServiceDescriptorProto.decode(Q);
        var Z = new EOA(Q.name && Q.name.length ? Q.name : "Service" + QM5++, sYA(Q.options, r8.ServiceOptions));
        if (!G) Z._edition = B;
        if (Q.method)
            for (var I = 0; I < Q.method.length; ++I) Z.add(j41.fromDescriptor(Q.method[I]));
        return Z
    };
    EOA.prototype.toDescriptor = function() {
        var Q = [];
        for (var B = 0; B < this.methodsArray.length; ++B) Q.push(this._methodsArray[B].toDescriptor());
        return r8.ServiceDescriptorProto.create({
            name: this.name,
            method: Q,
            options: rYA(this.options, r8.ServiceOptions)
        })
    };
    var BM5 = 0;
    j41.fromDescriptor = function(Q) {
        if (typeof Q.length === "number") Q = r8.MethodDescriptorProto.decode(Q);
        return new j41(Q.name && Q.name.length ? Q.name : "Method" + BM5++, "rpc", Q.inputType, Q.outputType, Boolean(Q.clientStreaming), Boolean(Q.serverStreaming), sYA(Q.options, r8.MethodOptions))
    };
    j41.prototype.toDescriptor = function() {
        return r8.MethodDescriptorProto.create({
            name: this.name,
            inputType: this.resolvedRequestType ? this.resolvedRequestType.fullName : this.requestType,
            outputType: this.resolvedResponseType ? this.resolvedResponseType.fullName : this.responseType,
            clientStreaming: this.requestStream,
            serverStreaming: this.responseStream,
            options: rYA(this.options, r8.MethodOptions)
        })
    };

    function GM5(A) {
        switch (A) {
            case 1:
                return "double";
            case 2:
                return "float";
            case 3:
                return "int64";
            case 4:
                return "uint64";
            case 5:
                return "int32";
            case 6:
                return "fixed64";
            case 7:
                return "fixed32";
            case 8:
                return "bool";
            case 9:
                return "string";
            case 12:
                return "bytes";
            case 13:
                return "uint32";
            case 15:
                return "sfixed32";
            case 16:
                return "sfixed64";
            case 17:
                return "sint32";
            case 18:
                return "sint64"
        }
        throw Error("illegal type: " + A)
    }

    function ZM5(A) {
        switch (A) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
                return !0
        }
        return !1
    }

    function L20(A, Q, B) {
        switch (A) {
            case "double":
                return 1;
            case "float":
                return 2;
            case "int64":
                return 3;
            case "uint64":
                return 4;
            case "int32":
                return 5;
            case "fixed64":
                return 6;
            case "fixed32":
                return 7;
            case "bool":
                return 8;
            case "string":
                return 9;
            case "bytes":
                return 12;
            case "uint32":
                return 13;
            case "sfixed32":
                return 15;
            case "sfixed64":
                return 16;
            case "sint32":
                return 17;
            case "sint64":
                return 18
        }
        if (Q instanceof Rh) return 14;
        if (Q instanceof rk) return B ? 10 : 11;
        throw Error("illegal type: " + A)
    }

    function YE2(A, Q) {
        var B = {};
        for (var G = 0, Z, I; G < Q.fieldsArray.length; ++G) {
            if ((I = (Z = Q._fieldsArray[G]).name) === "uninterpretedOption") continue;
            if (!Object.prototype.hasOwnProperty.call(A, I)) continue;
            var Y = IM5(I);
            if (Z.resolvedType instanceof rk) B[Y] = YE2(A[I], Z.resolvedType);
            else if (Z.resolvedType instanceof Rh) B[Y] = Z.resolvedType.valuesById[A[I]];
            else B[Y] = A[I]
        }
        return B
    }

    function sYA(A, Q) {
        if (!A) return;
        return YE2(Q.toObject(A), Q)
    }

    function JE2(A, Q) {
        var B = {},
            G = Object.keys(A);
        for (var Z = 0; Z < G.length; ++Z) {
            var I = G[Z],
                Y = qq.util.camelCase(I);
            if (!Object.prototype.hasOwnProperty.call(Q.fields, Y)) continue;
            var J = Q.fields[Y];
            if (J.resolvedType instanceof rk) B[Y] = JE2(A[I], J.resolvedType);
            else B[Y] = A[I];
            if (J.repeated && !Array.isArray(B[Y])) B[Y] = [B[Y]]
        }
        return B
    }

    function rYA(A, Q) {
        if (!A) return;
        return Q.fromObject(JE2(A, Q))
    }

    function WE2(A, Q) {
        var B = A.fullName.split("."),
            G = Q.fullName.split("."),
            Z = 0,
            I = 0,
            Y = G.length - 1;
        if (!(A instanceof COA) && Q instanceof ZE2)
            while (Z < B.length && I < Y && B[Z] === G[I]) {
                var J = Q.lookup(B[Z++], !0);
                if (J !== null && J !== Q) break;