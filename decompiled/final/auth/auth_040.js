/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_040.js
 * 处理时间: 2025-12-09T03:41:36.795Z
 * 变量映射: 0 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 40/61
 * Lines: 192673 - 194169 (1497 lines)
 * Original file: cli.js
 */

    var CM = mu1(),
        IHB = "aws.lambda.invoked_arn",
        YHB = "db.system",
        JHB = "db.connection_string",
        WHB = "db.user",
        XHB = "db.jdbc.driver_classname",
        FHB = "db.name",
        VHB = "db.statement",
        KHB = "db.operation",
        DHB = "db.mssql.instance_name",
        HHB = "db.cassandra.keyspace",
        CHB = "db.cassandra.page_size",
        EHB = "db.cassandra.consistency_level",
        zHB = "db.cassandra.table",
        UHB = "db.cassandra.idempotence",
        $HB = "db.cassandra.speculative_execution_count",
        wHB = "db.cassandra.coordinator.id",
        qHB = "db.cassandra.coordinator.dc",
        NHB = "db.hbase.namespace",
        LHB = "db.redis.database_index",
        MHB = "db.mongodb.collection",
        OHB = "db.sql.table",
        RHB = "exception.type",
        THB = "exception.message",
        PHB = "exception.stacktrace",
        jHB = "exception.escaped",
        SHB = "faas.trigger",
        _HB = "faas.execution",
        kHB = "faas.document.collection",
        yHB = "faas.document.operation",
        xHB = "faas.document.time",
        vHB = "faas.document.name",
        bHB = "faas.time",
        fHB = "faas.cron",
        hHB = "faas.coldstart",
        gHB = "faas.invoked_name",
        uHB = "faas.invoked_provider",
        mHB = "faas.invoked_region",
        dHB = "net.transport",
        cHB = "net.peer.ip",
        pHB = "net.peer.port",
        lHB = "net.peer.name",
        iHB = "net.host.ip",
        nHB = "net.host.port",
        aHB = "net.host.name",
        sHB = "net.host.connection.type",
        rHB = "net.host.connection.subtype",
        oHB = "net.host.carrier.name",
        tHB = "net.host.carrier.mcc",
        eHB = "net.host.carrier.mnc",
        ACB = "net.host.carrier.icc",
        QCB = "peer.service",
        BCB = "enduser.id",
        GCB = "enduser.role",
        ZCB = "enduser.scope",
        ICB = "thread.id",
        YCB = "thread.name",
        JCB = "code.function",
        WCB = "code.namespace",
        XCB = "code.filepath",
        FCB = "code.lineno",
        VCB = "http.method",
        KCB = "http.url",
        DCB = "http.target",
        HCB = "http.host",
        CCB = "http.scheme",
        ECB = "http.status_code",
        zCB = "http.flavor",
        UCB = "http.user_agent",
        $CB = "http.request_content_length",
        wCB = "http.request_content_length_uncompressed",
        qCB = "http.response_content_length",
        NCB = "http.response_content_length_uncompressed",
        LCB = "http.server_name",
        MCB = "http.route",
        OCB = "http.client_ip",
        RCB = "aws.dynamodb.table_names",
        TCB = "aws.dynamodb.consumed_capacity",
        PCB = "aws.dynamodb.item_collection_metrics",
        jCB = "aws.dynamodb.provisioned_read_capacity",
        SCB = "aws.dynamodb.provisioned_write_capacity",
        _CB = "aws.dynamodb.consistent_read",
        kCB = "aws.dynamodb.projection",
        yCB = "aws.dynamodb.limit",
        xCB = "aws.dynamodb.attributes_to_get",
        vCB = "aws.dynamodb.index_name",
        bCB = "aws.dynamodb.select",
        fCB = "aws.dynamodb.global_secondary_indexes",
        hCB = "aws.dynamodb.local_secondary_indexes",
        gCB = "aws.dynamodb.exclusive_start_table",
        uCB = "aws.dynamodb.table_count",
        mCB = "aws.dynamodb.scan_forward",
        dCB = "aws.dynamodb.segment",
        cCB = "aws.dynamodb.total_segments",
        pCB = "aws.dynamodb.count",
        lCB = "aws.dynamodb.scanned_count",
        iCB = "aws.dynamodb.attribute_definitions",
        nCB = "aws.dynamodb.global_secondary_index_updates",
        aCB = "messaging.system",
        sCB = "messaging.destination",
        rCB = "messaging.destination_kind",
        oCB = "messaging.temp_destination",
        tCB = "messaging.protocol",
        eCB = "messaging.protocol_version",
        AEB = "messaging.url",
        QEB = "messaging.message_id",
        BEB = "messaging.conversation_id",
        GEB = "messaging.message_payload_size_bytes",
        ZEB = "messaging.message_payload_compressed_size_bytes",
        IEB = "messaging.operation",
        YEB = "messaging.consumer_id",
        JEB = "messaging.rabbitmq.routing_key",
        WEB = "messaging.kafka.message_key",
        XEB = "messaging.kafka.consumer_group",
        FEB = "messaging.kafka.client_id",
        VEB = "messaging.kafka.partition",
        KEB = "messaging.kafka.tombstone",
        DEB = "rpc.system",
        HEB = "rpc.service",
        CEB = "rpc.method",
        EEB = "rpc.grpc.status_code",
        zEB = "rpc.jsonrpc.version",
        UEB = "rpc.jsonrpc.request_id",
        $EB = "rpc.jsonrpc.error_code",
        wEB = "rpc.jsonrpc.error_message",
        qEB = "message.type",
        NEB = "message.id",
        LEB = "message.compressed_size",
        MEB = "message.uncompressed_size";
    aUB.SEMATTRS_AWS_LAMBDA_INVOKED_ARN = IHB;
    aUB.SEMATTRS_DB_SYSTEM = YHB;
    aUB.SEMATTRS_DB_CONNECTION_STRING = JHB;
    aUB.SEMATTRS_DB_USER = WHB;
    aUB.SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = XHB;
    aUB.SEMATTRS_DB_NAME = FHB;
    aUB.SEMATTRS_DB_STATEMENT = VHB;
    aUB.SEMATTRS_DB_OPERATION = KHB;
    aUB.SEMATTRS_DB_MSSQL_INSTANCE_NAME = DHB;
    aUB.SEMATTRS_DB_CASSANDRA_KEYSPACE = HHB;
    aUB.SEMATTRS_DB_CASSANDRA_PAGE_SIZE = CHB;
    aUB.SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = EHB;
    aUB.SEMATTRS_DB_CASSANDRA_TABLE = zHB;
    aUB.SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = UHB;
    aUB.SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = $HB;
    aUB.SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = wHB;
    aUB.SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = qHB;
    aUB.SEMATTRS_DB_HBASE_NAMESPACE = NHB;
    aUB.SEMATTRS_DB_REDIS_DATABASE_INDEX = LHB;
    aUB.SEMATTRS_DB_MONGODB_COLLECTION = MHB;
    aUB.SEMATTRS_DB_SQL_TABLE = OHB;
    aUB.SEMATTRS_EXCEPTION_TYPE = RHB;
    aUB.SEMATTRS_EXCEPTION_MESSAGE = THB;
    aUB.SEMATTRS_EXCEPTION_STACKTRACE = PHB;
    aUB.SEMATTRS_EXCEPTION_ESCAPED = jHB;
    aUB.SEMATTRS_FAAS_TRIGGER = SHB;
    aUB.SEMATTRS_FAAS_EXECUTION = _HB;
    aUB.SEMATTRS_FAAS_DOCUMENT_COLLECTION = kHB;
    aUB.SEMATTRS_FAAS_DOCUMENT_OPERATION = yHB;
    aUB.SEMATTRS_FAAS_DOCUMENT_TIME = xHB;
    aUB.SEMATTRS_FAAS_DOCUMENT_NAME = vHB;
    aUB.SEMATTRS_FAAS_TIME = bHB;
    aUB.SEMATTRS_FAAS_CRON = fHB;
    aUB.SEMATTRS_FAAS_COLDSTART = hHB;
    aUB.SEMATTRS_FAAS_INVOKED_NAME = gHB;
    aUB.SEMATTRS_FAAS_INVOKED_PROVIDER = uHB;
    aUB.SEMATTRS_FAAS_INVOKED_REGION = mHB;
    aUB.SEMATTRS_NET_TRANSPORT = dHB;
    aUB.SEMATTRS_NET_PEER_IP = cHB;
    aUB.SEMATTRS_NET_PEER_PORT = pHB;
    aUB.SEMATTRS_NET_PEER_NAME = lHB;
    aUB.SEMATTRS_NET_HOST_IP = iHB;
    aUB.SEMATTRS_NET_HOST_PORT = nHB;
    aUB.SEMATTRS_NET_HOST_NAME = aHB;
    aUB.SEMATTRS_NET_HOST_CONNECTION_TYPE = sHB;
    aUB.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = rHB;
    aUB.SEMATTRS_NET_HOST_CARRIER_NAME = oHB;
    aUB.SEMATTRS_NET_HOST_CARRIER_MCC = tHB;
    aUB.SEMATTRS_NET_HOST_CARRIER_MNC = eHB;
    aUB.SEMATTRS_NET_HOST_CARRIER_ICC = ACB;
    aUB.SEMATTRS_PEER_SERVICE = QCB;
    aUB.SEMATTRS_ENDUSER_ID = BCB;
    aUB.SEMATTRS_ENDUSER_ROLE = GCB;
    aUB.SEMATTRS_ENDUSER_SCOPE = ZCB;
    aUB.SEMATTRS_THREAD_ID = ICB;
    aUB.SEMATTRS_THREAD_NAME = YCB;
    aUB.SEMATTRS_CODE_FUNCTION = JCB;
    aUB.SEMATTRS_CODE_NAMESPACE = WCB;
    aUB.SEMATTRS_CODE_FILEPATH = XCB;
    aUB.SEMATTRS_CODE_LINENO = FCB;
    aUB.SEMATTRS_HTTP_METHOD = VCB;
    aUB.SEMATTRS_HTTP_URL = KCB;
    aUB.SEMATTRS_HTTP_TARGET = DCB;
    aUB.SEMATTRS_HTTP_HOST = HCB;
    aUB.SEMATTRS_HTTP_SCHEME = CCB;
    aUB.SEMATTRS_HTTP_STATUS_CODE = ECB;
    aUB.SEMATTRS_HTTP_FLAVOR = zCB;
    aUB.SEMATTRS_HTTP_USER_AGENT = UCB;
    aUB.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = $CB;
    aUB.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = wCB;
    aUB.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = qCB;
    aUB.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = NCB;
    aUB.SEMATTRS_HTTP_SERVER_NAME = LCB;
    aUB.SEMATTRS_HTTP_ROUTE = MCB;
    aUB.SEMATTRS_HTTP_CLIENT_IP = OCB;
    aUB.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = RCB;
    aUB.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = TCB;
    aUB.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = PCB;
    aUB.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = jCB;
    aUB.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = SCB;
    aUB.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = _CB;
    aUB.SEMATTRS_AWS_DYNAMODB_PROJECTION = kCB;
    aUB.SEMATTRS_AWS_DYNAMODB_LIMIT = yCB;
    aUB.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = xCB;
    aUB.SEMATTRS_AWS_DYNAMODB_INDEX_NAME = vCB;
    aUB.SEMATTRS_AWS_DYNAMODB_SELECT = bCB;
    aUB.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = fCB;
    aUB.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = hCB;
    aUB.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = gCB;
    aUB.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = uCB;
    aUB.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = mCB;
    aUB.SEMATTRS_AWS_DYNAMODB_SEGMENT = dCB;
    aUB.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = cCB;
    aUB.SEMATTRS_AWS_DYNAMODB_COUNT = pCB;
    aUB.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = lCB;
    aUB.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = iCB;
    aUB.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = nCB;
    aUB.SEMATTRS_MESSAGING_SYSTEM = aCB;
    aUB.SEMATTRS_MESSAGING_DESTINATION = sCB;
    aUB.SEMATTRS_MESSAGING_DESTINATION_KIND = rCB;
    aUB.SEMATTRS_MESSAGING_TEMP_DESTINATION = oCB;
    aUB.SEMATTRS_MESSAGING_PROTOCOL = tCB;
    aUB.SEMATTRS_MESSAGING_PROTOCOL_VERSION = eCB;
    aUB.SEMATTRS_MESSAGING_URL = AEB;
    aUB.SEMATTRS_MESSAGING_MESSAGE_ID = QEB;
    aUB.SEMATTRS_MESSAGING_CONVERSATION_ID = BEB;
    aUB.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = GEB;
    aUB.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = ZEB;
    aUB.SEMATTRS_MESSAGING_OPERATION = IEB;
    aUB.SEMATTRS_MESSAGING_CONSUMER_ID = YEB;
    aUB.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = JEB;
    aUB.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = WEB;
    aUB.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = XEB;
    aUB.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = FEB;
    aUB.SEMATTRS_MESSAGING_KAFKA_PARTITION = VEB;
    aUB.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = KEB;
    aUB.SEMATTRS_RPC_SYSTEM = DEB;
    aUB.SEMATTRS_RPC_SERVICE = HEB;
    aUB.SEMATTRS_RPC_METHOD = CEB;
    aUB.SEMATTRS_RPC_GRPC_STATUS_CODE = EEB;
    aUB.SEMATTRS_RPC_JSONRPC_VERSION = zEB;
    aUB.SEMATTRS_RPC_JSONRPC_REQUEST_ID = UEB;
    aUB.SEMATTRS_RPC_JSONRPC_ERROR_CODE = $EB;
    aUB.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = wEB;
    aUB.SEMATTRS_MESSAGE_TYPE = qEB;
    aUB.SEMATTRS_MESSAGE_ID = NEB;
    aUB.SEMATTRS_MESSAGE_COMPRESSED_SIZE = LEB;
    aUB.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = MEB;
    aUB.SemanticAttributes = (0, CM.createConstMap)([IHB, YHB, JHB, WHB, XHB, FHB, VHB, KHB, DHB, HHB, CHB, EHB, zHB, UHB, $HB, wHB, qHB, NHB, LHB, MHB, OHB, RHB, THB, PHB, jHB, SHB, _HB, kHB, yHB, xHB, vHB, bHB, fHB, hHB, gHB, uHB, mHB, dHB, cHB, pHB, lHB, iHB, nHB, aHB, sHB, rHB, oHB, tHB, eHB, ACB, QCB, BCB, GCB, ZCB, ICB, YCB, JCB, WCB, XCB, FCB, VCB, KCB, DCB, HCB, CCB, ECB, zCB, UCB, $CB, wCB, qCB, NCB, LCB, MCB, OCB, RCB, TCB, PCB, jCB, SCB, _CB, kCB, yCB, xCB, vCB, bCB, fCB, hCB, gCB, uCB, mCB, dCB, cCB, pCB, lCB, iCB, nCB, aCB, sCB, rCB, oCB, tCB, eCB, AEB, QEB, BEB, GEB, ZEB, IEB, YEB, JEB, WEB, XEB, FEB, VEB, KEB, DEB, HEB, CEB, EEB, zEB, UEB, $EB, wEB, qEB, NEB, LEB, MEB]);
    var OEB = "other_sql",
        REB = "mssql",
        TEB = "mysql",
        PEB = "oracle",
        jEB = "db2",
        SEB = "postgresql",
        _EB = "redshift",
        kEB = "hive",
        yEB = "cloudscape",
        xEB = "hsqldb",
        vEB = "progress",
        bEB = "maxdb",
        fEB = "hanadb",
        hEB = "ingres",
        gEB = "firstsql",
        uEB = "edb",
        mEB = "cache",
        dEB = "adabas",
        cEB = "firebird",
        pEB = "derby",
        lEB = "filemaker",
        iEB = "informix",
        nEB = "instantdb",
        aEB = "interbase",
        sEB = "mariadb",
        rEB = "netezza",
        oEB = "pervasive",
        tEB = "pointbase",
        eEB = "sqlite",
        AzB = "sybase",
        QzB = "teradata",
        BzB = "vertica",
        GzB = "h2",
        ZzB = "coldfusion",
        IzB = "cassandra",
        YzB = "hbase",
        JzB = "mongodb",
        WzB = "redis",
        XzB = "couchbase",
        FzB = "couchdb",
        VzB = "cosmosdb",
        KzB = "dynamodb",
        DzB = "neo4j",
        HzB = "geode",
        CzB = "elasticsearch",
        EzB = "memcached",
        zzB = "cockroachdb";
    aUB.DBSYSTEMVALUES_OTHER_SQL = OEB;
    aUB.DBSYSTEMVALUES_MSSQL = REB;
    aUB.DBSYSTEMVALUES_MYSQL = TEB;
    aUB.DBSYSTEMVALUES_ORACLE = PEB;
    aUB.DBSYSTEMVALUES_DB2 = jEB;
    aUB.DBSYSTEMVALUES_POSTGRESQL = SEB;
    aUB.DBSYSTEMVALUES_REDSHIFT = _EB;
    aUB.DBSYSTEMVALUES_HIVE = kEB;
    aUB.DBSYSTEMVALUES_CLOUDSCAPE = yEB;
    aUB.DBSYSTEMVALUES_HSQLDB = xEB;
    aUB.DBSYSTEMVALUES_PROGRESS = vEB;
    aUB.DBSYSTEMVALUES_MAXDB = bEB;
    aUB.DBSYSTEMVALUES_HANADB = fEB;
    aUB.DBSYSTEMVALUES_INGRES = hEB;
    aUB.DBSYSTEMVALUES_FIRSTSQL = gEB;
    aUB.DBSYSTEMVALUES_EDB = uEB;
    aUB.DBSYSTEMVALUES_CACHE = mEB;
    aUB.DBSYSTEMVALUES_ADABAS = dEB;
    aUB.DBSYSTEMVALUES_FIREBIRD = cEB;
    aUB.DBSYSTEMVALUES_DERBY = pEB;
    aUB.DBSYSTEMVALUES_FILEMAKER = lEB;
    aUB.DBSYSTEMVALUES_INFORMIX = iEB;
    aUB.DBSYSTEMVALUES_INSTANTDB = nEB;
    aUB.DBSYSTEMVALUES_INTERBASE = aEB;
    aUB.DBSYSTEMVALUES_MARIADB = sEB;
    aUB.DBSYSTEMVALUES_NETEZZA = rEB;
    aUB.DBSYSTEMVALUES_PERVASIVE = oEB;
    aUB.DBSYSTEMVALUES_POINTBASE = tEB;
    aUB.DBSYSTEMVALUES_SQLITE = eEB;
    aUB.DBSYSTEMVALUES_SYBASE = AzB;
    aUB.DBSYSTEMVALUES_TERADATA = QzB;
    aUB.DBSYSTEMVALUES_VERTICA = BzB;
    aUB.DBSYSTEMVALUES_H2 = GzB;
    aUB.DBSYSTEMVALUES_COLDFUSION = ZzB;
    aUB.DBSYSTEMVALUES_CASSANDRA = IzB;
    aUB.DBSYSTEMVALUES_HBASE = YzB;
    aUB.DBSYSTEMVALUES_MONGODB = JzB;
    aUB.DBSYSTEMVALUES_REDIS = WzB;
    aUB.DBSYSTEMVALUES_COUCHBASE = XzB;
    aUB.DBSYSTEMVALUES_COUCHDB = FzB;
    aUB.DBSYSTEMVALUES_COSMOSDB = VzB;
    aUB.DBSYSTEMVALUES_DYNAMODB = KzB;
    aUB.DBSYSTEMVALUES_NEO4J = DzB;
    aUB.DBSYSTEMVALUES_GEODE = HzB;
    aUB.DBSYSTEMVALUES_ELASTICSEARCH = CzB;
    aUB.DBSYSTEMVALUES_MEMCACHED = EzB;
    aUB.DBSYSTEMVALUES_COCKROACHDB = zzB;
    aUB.DbSystemValues = (0, CM.createConstMap)([OEB, REB, TEB, PEB, jEB, SEB, _EB, kEB, yEB, xEB, vEB, bEB, fEB, hEB, gEB, uEB, mEB, dEB, cEB, pEB, lEB, iEB, nEB, aEB, sEB, rEB, oEB, tEB, eEB, AzB, QzB, BzB, GzB, ZzB, IzB, YzB, JzB, WzB, XzB, FzB, VzB, KzB, DzB, HzB, CzB, EzB, zzB]);
    var UzB = "all",
        $zB = "each_quorum",
        wzB = "quorum",
        qzB = "local_quorum",
        NzB = "one",
        LzB = "two",
        MzB = "three",
        OzB = "local_one",
        RzB = "any",
        TzB = "serial",
        PzB = "local_serial";
    aUB.DBCASSANDRACONSISTENCYLEVELVALUES_ALL = UzB;
    aUB.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = $zB;
    aUB.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = wzB;
    aUB.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = qzB;
    aUB.DBCASSANDRACONSISTENCYLEVELVALUES_ONE = NzB;
    aUB.DBCASSANDRACONSISTENCYLEVELVALUES_TWO = LzB;
    aUB.DBCASSANDRACONSISTENCYLEVELVALUES_THREE = MzB;
    aUB.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = OzB;
    aUB.DBCASSANDRACONSISTENCYLEVELVALUES_ANY = RzB;
    aUB.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = TzB;
    aUB.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = PzB;
    aUB.DbCassandraConsistencyLevelValues = (0, CM.createConstMap)([UzB, $zB, wzB, qzB, NzB, LzB, MzB, OzB, RzB, TzB, PzB]);
    var jzB = "datasource",
        SzB = "http",
        _zB = "pubsub",
        kzB = "timer",
        yzB = "other";
    aUB.FAASTRIGGERVALUES_DATASOURCE = jzB;
    aUB.FAASTRIGGERVALUES_HTTP = SzB;
    aUB.FAASTRIGGERVALUES_PUBSUB = _zB;
    aUB.FAASTRIGGERVALUES_TIMER = kzB;
    aUB.FAASTRIGGERVALUES_OTHER = yzB;
    aUB.FaasTriggerValues = (0, CM.createConstMap)([jzB, SzB, _zB, kzB, yzB]);
    var xzB = "insert",
        vzB = "edit",
        bzB = "delete";
    aUB.FAASDOCUMENTOPERATIONVALUES_INSERT = xzB;
    aUB.FAASDOCUMENTOPERATIONVALUES_EDIT = vzB;
    aUB.FAASDOCUMENTOPERATIONVALUES_DELETE = bzB;
    aUB.FaasDocumentOperationValues = (0, CM.createConstMap)([xzB, vzB, bzB]);
    var fzB = "alibaba_cloud",
        hzB = "aws",
        gzB = "azure",
        uzB = "gcp";
    aUB.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = fzB;
    aUB.FAASINVOKEDPROVIDERVALUES_AWS = hzB;
    aUB.FAASINVOKEDPROVIDERVALUES_AZURE = gzB;
    aUB.FAASINVOKEDPROVIDERVALUES_GCP = uzB;
    aUB.FaasInvokedProviderValues = (0, CM.createConstMap)([fzB, hzB, gzB, uzB]);
    var mzB = "ip_tcp",
        dzB = "ip_udp",
        czB = "ip",
        pzB = "unix",
        lzB = "pipe",
        izB = "inproc",
        nzB = "other";
    aUB.NETTRANSPORTVALUES_IP_TCP = mzB;
    aUB.NETTRANSPORTVALUES_IP_UDP = dzB;
    aUB.NETTRANSPORTVALUES_IP = czB;
    aUB.NETTRANSPORTVALUES_UNIX = pzB;
    aUB.NETTRANSPORTVALUES_PIPE = lzB;
    aUB.NETTRANSPORTVALUES_INPROC = izB;
    aUB.NETTRANSPORTVALUES_OTHER = nzB;
    aUB.NetTransportValues = (0, CM.createConstMap)([mzB, dzB, czB, pzB, lzB, izB, nzB]);
    var azB = "wifi",
        szB = "wired",
        rzB = "cell",
        ozB = "unavailable",
        tzB = "unknown";
    aUB.NETHOSTCONNECTIONTYPEVALUES_WIFI = azB;
    aUB.NETHOSTCONNECTIONTYPEVALUES_WIRED = szB;
    aUB.NETHOSTCONNECTIONTYPEVALUES_CELL = rzB;
    aUB.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = ozB;
    aUB.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = tzB;
    aUB.NetHostConnectionTypeValues = (0, CM.createConstMap)([azB, szB, rzB, ozB, tzB]);
    var ezB = "gprs",
        AUB = "edge",
        QUB = "umts",
        BUB = "cdma",
        GUB = "evdo_0",
        ZUB = "evdo_a",
        IUB = "cdma2000_1xrtt",
        YUB = "hsdpa",
        JUB = "hsupa",
        WUB = "hspa",
        XUB = "iden",
        FUB = "evdo_b",
        VUB = "lte",
        KUB = "ehrpd",
        DUB = "hspap",
        HUB = "gsm",
        CUB = "td_scdma",
        EUB = "iwlan",
        zUB = "nr",
        UUB = "nrnsa",
        $UB = "lte_ca";
    aUB.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = ezB;
    aUB.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = AUB;
    aUB.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = QUB;
    aUB.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = BUB;
    aUB.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = GUB;
    aUB.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = ZUB;
    aUB.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = IUB;
    aUB.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = YUB;
    aUB.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = JUB;
    aUB.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = WUB;
    aUB.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = XUB;
    aUB.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = FUB;
    aUB.NETHOSTCONNECTIONSUBTYPEVALUES_LTE = VUB;
    aUB.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = KUB;
    aUB.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = DUB;
    aUB.NETHOSTCONNECTIONSUBTYPEVALUES_GSM = HUB;
    aUB.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = CUB;
    aUB.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = EUB;
    aUB.NETHOSTCONNECTIONSUBTYPEVALUES_NR = zUB;
    aUB.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = UUB;
    aUB.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = $UB;
    aUB.NetHostConnectionSubtypeValues = (0, CM.createConstMap)([ezB, AUB, QUB, BUB, GUB, ZUB, IUB, YUB, JUB, WUB, XUB, FUB, VUB, KUB, DUB, HUB, CUB, EUB, zUB, UUB, $UB]);
    var wUB = "1.0",
        qUB = "1.1",
        NUB = "2.0",
        LUB = "SPDY",
        MUB = "QUIC";
    aUB.HTTPFLAVORVALUES_HTTP_1_0 = wUB;
    aUB.HTTPFLAVORVALUES_HTTP_1_1 = qUB;
    aUB.HTTPFLAVORVALUES_HTTP_2_0 = NUB;
    aUB.HTTPFLAVORVALUES_SPDY = LUB;
    aUB.HTTPFLAVORVALUES_QUIC = MUB;
    aUB.HttpFlavorValues = {
        HTTP_1_0: wUB,
        HTTP_1_1: qUB,
        HTTP_2_0: NUB,
        SPDY: LUB,
        QUIC: MUB
    };
    var OUB = "queue",
        RUB = "topic";
    aUB.MESSAGINGDESTINATIONKINDVALUES_QUEUE = OUB;
    aUB.MESSAGINGDESTINATIONKINDVALUES_TOPIC = RUB;
    aUB.MessagingDestinationKindValues = (0, CM.createConstMap)([OUB, RUB]);
    var TUB = "receive",
        PUB = "process";
    aUB.MESSAGINGOPERATIONVALUES_RECEIVE = TUB;
    aUB.MESSAGINGOPERATIONVALUES_PROCESS = PUB;
    aUB.MessagingOperationValues = (0, CM.createConstMap)([TUB, PUB]);
    var jUB = 0,
        SUB = 1,
        _UB = 2,
        kUB = 3,
        yUB = 4,
        xUB = 5,
        vUB = 6,
        bUB = 7,
        fUB = 8,
        hUB = 9,
        gUB = 10,
        uUB = 11,
        mUB = 12,
        dUB = 13,
        cUB = 14,
        pUB = 15,
        lUB = 16;
    aUB.RPCGRPCSTATUSCODEVALUES_OK = jUB;
    aUB.RPCGRPCSTATUSCODEVALUES_CANCELLED = SUB;
    aUB.RPCGRPCSTATUSCODEVALUES_UNKNOWN = _UB;
    aUB.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = kUB;
    aUB.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = yUB;
    aUB.RPCGRPCSTATUSCODEVALUES_NOT_FOUND = xUB;
    aUB.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = vUB;
    aUB.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = bUB;
    aUB.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = fUB;
    aUB.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = hUB;
    aUB.RPCGRPCSTATUSCODEVALUES_ABORTED = gUB;
    aUB.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = uUB;
    aUB.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = mUB;
    aUB.RPCGRPCSTATUSCODEVALUES_INTERNAL = dUB;
    aUB.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = cUB;
    aUB.RPCGRPCSTATUSCODEVALUES_DATA_LOSS = pUB;
    aUB.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = lUB;
    aUB.RpcGrpcStatusCodeValues = {
        OK: jUB,
        CANCELLED: SUB,
        UNKNOWN: _UB,
        INVALID_ARGUMENT: kUB,
        DEADLINE_EXCEEDED: yUB,
        NOT_FOUND: xUB,
        ALREADY_EXISTS: vUB,
        PERMISSION_DENIED: bUB,
        RESOURCE_EXHAUSTED: fUB,
        FAILED_PRECONDITION: hUB,
        ABORTED: gUB,
        OUT_OF_RANGE: uUB,
        UNIMPLEMENTED: mUB,
        INTERNAL: dUB,
        UNAVAILABLE: cUB,
        DATA_LOSS: pUB,
        UNAUTHENTICATED: lUB
    };
    var iUB = "SENT",
        nUB = "RECEIVED";
    aUB.MESSAGETYPEVALUES_SENT = iUB;
    aUB.MESSAGETYPEVALUES_RECEIVED = nUB;
    aUB.MessageTypeValues = (0, CM.createConstMap)([iUB, nUB])
});
var B$B = U((ft) => {
    var IX6 = ft && ft.__createBinding || (Object.create ? function(A, Q, B, G) {
            if (G === void 0) G = B;
            var Z = Object.getOwnPropertyDescriptor(Q, B);
            if (!Z || ("get" in Z ? !Q.__esModule : Z.writable || Z.configurable)) Z = {
                enumerable: !0,
                get: function() {
                    return Q[B]
                }
            };
            Object.defineProperty(A, G, Z)
        } : function(A, Q, B, G) {
            if (G === void 0) G = B;
            A[G] = Q[B]
        }),
        YX6 = ft && ft.__exportStar || function(A, Q) {
            for (var B in A)
                if (B !== "default" && !Object.prototype.hasOwnProperty.call(Q, B)) IX6(Q, A, B)
        };
    Object.defineProperty(ft, "__esModule", {
        value: !0
    });
    YX6(Q$B(), ft)
});
var _qB = U((TqB) => {
    Object.defineProperty(TqB, "__esModule", {
        value: !0
    });
    TqB.SEMRESATTRS_K8S_STATEFULSET_NAME = TqB.SEMRESATTRS_K8S_STATEFULSET_UID = TqB.SEMRESATTRS_K8S_DEPLOYMENT_NAME = TqB.SEMRESATTRS_K8S_DEPLOYMENT_UID = TqB.SEMRESATTRS_K8S_REPLICASET_NAME = TqB.SEMRESATTRS_K8S_REPLICASET_UID = TqB.SEMRESATTRS_K8S_CONTAINER_NAME = TqB.SEMRESATTRS_K8S_POD_NAME = TqB.SEMRESATTRS_K8S_POD_UID = TqB.SEMRESATTRS_K8S_NAMESPACE_NAME = TqB.SEMRESATTRS_K8S_NODE_UID = TqB.SEMRESATTRS_K8S_NODE_NAME = TqB.SEMRESATTRS_K8S_CLUSTER_NAME = TqB.SEMRESATTRS_HOST_IMAGE_VERSION = TqB.SEMRESATTRS_HOST_IMAGE_ID = TqB.SEMRESATTRS_HOST_IMAGE_NAME = TqB.SEMRESATTRS_HOST_ARCH = TqB.SEMRESATTRS_HOST_TYPE = TqB.SEMRESATTRS_HOST_NAME = TqB.SEMRESATTRS_HOST_ID = TqB.SEMRESATTRS_FAAS_MAX_MEMORY = TqB.SEMRESATTRS_FAAS_INSTANCE = TqB.SEMRESATTRS_FAAS_VERSION = TqB.SEMRESATTRS_FAAS_ID = TqB.SEMRESATTRS_FAAS_NAME = TqB.SEMRESATTRS_DEVICE_MODEL_NAME = TqB.SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = TqB.SEMRESATTRS_DEVICE_ID = TqB.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = TqB.SEMRESATTRS_CONTAINER_IMAGE_TAG = TqB.SEMRESATTRS_CONTAINER_IMAGE_NAME = TqB.SEMRESATTRS_CONTAINER_RUNTIME = TqB.SEMRESATTRS_CONTAINER_ID = TqB.SEMRESATTRS_CONTAINER_NAME = TqB.SEMRESATTRS_AWS_LOG_STREAM_ARNS = TqB.SEMRESATTRS_AWS_LOG_STREAM_NAMES = TqB.SEMRESATTRS_AWS_LOG_GROUP_ARNS = TqB.SEMRESATTRS_AWS_LOG_GROUP_NAMES = TqB.SEMRESATTRS_AWS_EKS_CLUSTER_ARN = TqB.SEMRESATTRS_AWS_ECS_TASK_REVISION = TqB.SEMRESATTRS_AWS_ECS_TASK_FAMILY = TqB.SEMRESATTRS_AWS_ECS_TASK_ARN = TqB.SEMRESATTRS_AWS_ECS_LAUNCHTYPE = TqB.SEMRESATTRS_AWS_ECS_CLUSTER_ARN = TqB.SEMRESATTRS_AWS_ECS_CONTAINER_ARN = TqB.SEMRESATTRS_CLOUD_PLATFORM = TqB.SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = TqB.SEMRESATTRS_CLOUD_REGION = TqB.SEMRESATTRS_CLOUD_ACCOUNT_ID = TqB.SEMRESATTRS_CLOUD_PROVIDER = void 0;
    TqB.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = TqB.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = TqB.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = TqB.CLOUDPLATFORMVALUES_AZURE_AKS = TqB.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = TqB.CLOUDPLATFORMVALUES_AZURE_VM = TqB.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = TqB.CLOUDPLATFORMVALUES_AWS_LAMBDA = TqB.CLOUDPLATFORMVALUES_AWS_EKS = TqB.CLOUDPLATFORMVALUES_AWS_ECS = TqB.CLOUDPLATFORMVALUES_AWS_EC2 = TqB.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = TqB.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = TqB.CloudProviderValues = TqB.CLOUDPROVIDERVALUES_GCP = TqB.CLOUDPROVIDERVALUES_AZURE = TqB.CLOUDPROVIDERVALUES_AWS = TqB.CLOUDPROVIDERVALUES_ALIBABA_CLOUD = TqB.SemanticResourceAttributes = TqB.SEMRESATTRS_WEBENGINE_DESCRIPTION = TqB.SEMRESATTRS_WEBENGINE_VERSION = TqB.SEMRESATTRS_WEBENGINE_NAME = TqB.SEMRESATTRS_TELEMETRY_AUTO_VERSION = TqB.SEMRESATTRS_TELEMETRY_SDK_VERSION = TqB.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = TqB.SEMRESATTRS_TELEMETRY_SDK_NAME = TqB.SEMRESATTRS_SERVICE_VERSION = TqB.SEMRESATTRS_SERVICE_INSTANCE_ID = TqB.SEMRESATTRS_SERVICE_NAMESPACE = TqB.SEMRESATTRS_SERVICE_NAME = TqB.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = TqB.SEMRESATTRS_PROCESS_RUNTIME_VERSION = TqB.SEMRESATTRS_PROCESS_RUNTIME_NAME = TqB.SEMRESATTRS_PROCESS_OWNER = TqB.SEMRESATTRS_PROCESS_COMMAND_ARGS = TqB.SEMRESATTRS_PROCESS_COMMAND_LINE = TqB.SEMRESATTRS_PROCESS_COMMAND = TqB.SEMRESATTRS_PROCESS_EXECUTABLE_PATH = TqB.SEMRESATTRS_PROCESS_EXECUTABLE_NAME = TqB.SEMRESATTRS_PROCESS_PID = TqB.SEMRESATTRS_OS_VERSION = TqB.SEMRESATTRS_OS_NAME = TqB.SEMRESATTRS_OS_DESCRIPTION = TqB.SEMRESATTRS_OS_TYPE = TqB.SEMRESATTRS_K8S_CRONJOB_NAME = TqB.SEMRESATTRS_K8S_CRONJOB_UID = TqB.SEMRESATTRS_K8S_JOB_NAME = TqB.SEMRESATTRS_K8S_JOB_UID = TqB.SEMRESATTRS_K8S_DAEMONSET_NAME = TqB.SEMRESATTRS_K8S_DAEMONSET_UID = void 0;
    TqB.TelemetrySdkLanguageValues = TqB.TELEMETRYSDKLANGUAGEVALUES_WEBJS = TqB.TELEMETRYSDKLANGUAGEVALUES_RUBY = TqB.TELEMETRYSDKLANGUAGEVALUES_PYTHON = TqB.TELEMETRYSDKLANGUAGEVALUES_PHP = TqB.TELEMETRYSDKLANGUAGEVALUES_NODEJS = TqB.TELEMETRYSDKLANGUAGEVALUES_JAVA = TqB.TELEMETRYSDKLANGUAGEVALUES_GO = TqB.TELEMETRYSDKLANGUAGEVALUES_ERLANG = TqB.TELEMETRYSDKLANGUAGEVALUES_DOTNET = TqB.TELEMETRYSDKLANGUAGEVALUES_CPP = TqB.OsTypeValues = TqB.OSTYPEVALUES_Z_OS = TqB.OSTYPEVALUES_SOLARIS = TqB.OSTYPEVALUES_AIX = TqB.OSTYPEVALUES_HPUX = TqB.OSTYPEVALUES_DRAGONFLYBSD = TqB.OSTYPEVALUES_OPENBSD = TqB.OSTYPEVALUES_NETBSD = TqB.OSTYPEVALUES_FREEBSD = TqB.OSTYPEVALUES_DARWIN = TqB.OSTYPEVALUES_LINUX = TqB.OSTYPEVALUES_WINDOWS = TqB.HostArchValues = TqB.HOSTARCHVALUES_X86 = TqB.HOSTARCHVALUES_PPC64 = TqB.HOSTARCHVALUES_PPC32 = TqB.HOSTARCHVALUES_IA64 = TqB.HOSTARCHVALUES_ARM64 = TqB.HOSTARCHVALUES_ARM32 = TqB.HOSTARCHVALUES_AMD64 = TqB.AwsEcsLaunchtypeValues = TqB.AWSECSLAUNCHTYPEVALUES_FARGATE = TqB.AWSECSLAUNCHTYPEVALUES_EC2 = TqB.CloudPlatformValues = TqB.CLOUDPLATFORMVALUES_GCP_APP_ENGINE = TqB.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = TqB.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = TqB.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = void 0;
    var ht = mu1(),
        G$B = "cloud.provider",
        Z$B = "cloud.account.id",
        I$B = "cloud.region",
        Y$B = "cloud.availability_zone",
        J$B = "cloud.platform",
        W$B = "aws.ecs.container.arn",
        X$B = "aws.ecs.cluster.arn",
        F$B = "aws.ecs.launchtype",
        V$B = "aws.ecs.task.arn",
        K$B = "aws.ecs.task.family",
        D$B = "aws.ecs.task.revision",
        H$B = "aws.eks.cluster.arn",
        C$B = "aws.log.group.names",
        E$B = "aws.log.group.arns",
        z$B = "aws.log.stream.names",
        U$B = "aws.log.stream.arns",
        $$B = "container.name",
        w$B = "container.id",
        q$B = "container.runtime",
        N$B = "container.image.name",
        L$B = "container.image.tag",
        M$B = "deployment.environment",
        O$B = "device.id",
        R$B = "device.model.identifier",
        T$B = "device.model.name",
        P$B = "faas.name",
        j$B = "faas.id",
        S$B = "faas.version",
        _$B = "faas.instance",
        k$B = "faas.max_memory",
        y$B = "host.id",
        x$B = "host.name",
        v$B = "host.type",
        b$B = "host.arch",
        f$B = "host.image.name",
        h$B = "host.image.id",
        g$B = "host.image.version",
        u$B = "k8s.cluster.name",
        m$B = "k8s.node.name",
        d$B = "k8s.node.uid",
        c$B = "k8s.namespace.name",
        p$B = "k8s.pod.uid",
        l$B = "k8s.pod.name",
        i$B = "k8s.container.name",
        n$B = "k8s.replicaset.uid",
        a$B = "k8s.replicaset.name",
        s$B = "k8s.deployment.uid",
        r$B = "k8s.deployment.name",
        o$B = "k8s.statefulset.uid",
        t$B = "k8s.statefulset.name",
        e$B = "k8s.daemonset.uid",
        AwB = "k8s.daemonset.name",
        QwB = "k8s.job.uid",
        BwB = "k8s.job.name",
        GwB = "k8s.cronjob.uid",
        ZwB = "k8s.cronjob.name",
        IwB = "os.type",
        YwB = "os.description",
        JwB = "os.name",
        WwB = "os.version",
        XwB = "process.pid",
        FwB = "process.executable.name",
        VwB = "process.executable.path",
        KwB = "process.command",
        DwB = "process.command_line",
        HwB = "process.command_args",
        CwB = "process.owner",
        EwB = "process.runtime.name",
        zwB = "process.runtime.version",
        UwB = "process.runtime.description",
        $wB = "service.name",
        wwB = "service.namespace",
        qwB = "service.instance.id",
        NwB = "service.version",
        LwB = "telemetry.sdk.name",
        MwB = "telemetry.sdk.language",
        OwB = "telemetry.sdk.version",
        RwB = "telemetry.auto.version",
        TwB = "webengine.name",
        PwB = "webengine.version",
        jwB = "webengine.description";
    TqB.SEMRESATTRS_CLOUD_PROVIDER = G$B;
    TqB.SEMRESATTRS_CLOUD_ACCOUNT_ID = Z$B;
    TqB.SEMRESATTRS_CLOUD_REGION = I$B;
    TqB.SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = Y$B;
    TqB.SEMRESATTRS_CLOUD_PLATFORM = J$B;
    TqB.SEMRESATTRS_AWS_ECS_CONTAINER_ARN = W$B;
    TqB.SEMRESATTRS_AWS_ECS_CLUSTER_ARN = X$B;
    TqB.SEMRESATTRS_AWS_ECS_LAUNCHTYPE = F$B;
    TqB.SEMRESATTRS_AWS_ECS_TASK_ARN = V$B;
    TqB.SEMRESATTRS_AWS_ECS_TASK_FAMILY = K$B;
    TqB.SEMRESATTRS_AWS_ECS_TASK_REVISION = D$B;
    TqB.SEMRESATTRS_AWS_EKS_CLUSTER_ARN = H$B;
    TqB.SEMRESATTRS_AWS_LOG_GROUP_NAMES = C$B;
    TqB.SEMRESATTRS_AWS_LOG_GROUP_ARNS = E$B;
    TqB.SEMRESATTRS_AWS_LOG_STREAM_NAMES = z$B;
    TqB.SEMRESATTRS_AWS_LOG_STREAM_ARNS = U$B;
    TqB.SEMRESATTRS_CONTAINER_NAME = $$B;
    TqB.SEMRESATTRS_CONTAINER_ID = w$B;
    TqB.SEMRESATTRS_CONTAINER_RUNTIME = q$B;
    TqB.SEMRESATTRS_CONTAINER_IMAGE_NAME = N$B;
    TqB.SEMRESATTRS_CONTAINER_IMAGE_TAG = L$B;
    TqB.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = M$B;
    TqB.SEMRESATTRS_DEVICE_ID = O$B;
    TqB.SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = R$B;
    TqB.SEMRESATTRS_DEVICE_MODEL_NAME = T$B;
    TqB.SEMRESATTRS_FAAS_NAME = P$B;
    TqB.SEMRESATTRS_FAAS_ID = j$B;
    TqB.SEMRESATTRS_FAAS_VERSION = S$B;
    TqB.SEMRESATTRS_FAAS_INSTANCE = _$B;
    TqB.SEMRESATTRS_FAAS_MAX_MEMORY = k$B;
    TqB.SEMRESATTRS_HOST_ID = y$B;
    TqB.SEMRESATTRS_HOST_NAME = x$B;
    TqB.SEMRESATTRS_HOST_TYPE = v$B;
    TqB.SEMRESATTRS_HOST_ARCH = b$B;
    TqB.SEMRESATTRS_HOST_IMAGE_NAME = f$B;
    TqB.SEMRESATTRS_HOST_IMAGE_ID = h$B;
    TqB.SEMRESATTRS_HOST_IMAGE_VERSION = g$B;
    TqB.SEMRESATTRS_K8S_CLUSTER_NAME = u$B;
    TqB.SEMRESATTRS_K8S_NODE_NAME = m$B;
    TqB.SEMRESATTRS_K8S_NODE_UID = d$B;
    TqB.SEMRESATTRS_K8S_NAMESPACE_NAME = c$B;
    TqB.SEMRESATTRS_K8S_POD_UID = p$B;
    TqB.SEMRESATTRS_K8S_POD_NAME = l$B;
    TqB.SEMRESATTRS_K8S_CONTAINER_NAME = i$B;
    TqB.SEMRESATTRS_K8S_REPLICASET_UID = n$B;
    TqB.SEMRESATTRS_K8S_REPLICASET_NAME = a$B;
    TqB.SEMRESATTRS_K8S_DEPLOYMENT_UID = s$B;
    TqB.SEMRESATTRS_K8S_DEPLOYMENT_NAME = r$B;
    TqB.SEMRESATTRS_K8S_STATEFULSET_UID = o$B;
    TqB.SEMRESATTRS_K8S_STATEFULSET_NAME = t$B;
    TqB.SEMRESATTRS_K8S_DAEMONSET_UID = e$B;
    TqB.SEMRESATTRS_K8S_DAEMONSET_NAME = AwB;
    TqB.SEMRESATTRS_K8S_JOB_UID = QwB;
    TqB.SEMRESATTRS_K8S_JOB_NAME = BwB;
    TqB.SEMRESATTRS_K8S_CRONJOB_UID = GwB;
    TqB.SEMRESATTRS_K8S_CRONJOB_NAME = ZwB;
    TqB.SEMRESATTRS_OS_TYPE = IwB;
    TqB.SEMRESATTRS_OS_DESCRIPTION = YwB;
    TqB.SEMRESATTRS_OS_NAME = JwB;
    TqB.SEMRESATTRS_OS_VERSION = WwB;
    TqB.SEMRESATTRS_PROCESS_PID = XwB;
    TqB.SEMRESATTRS_PROCESS_EXECUTABLE_NAME = FwB;
    TqB.SEMRESATTRS_PROCESS_EXECUTABLE_PATH = VwB;
    TqB.SEMRESATTRS_PROCESS_COMMAND = KwB;
    TqB.SEMRESATTRS_PROCESS_COMMAND_LINE = DwB;
    TqB.SEMRESATTRS_PROCESS_COMMAND_ARGS = HwB;
    TqB.SEMRESATTRS_PROCESS_OWNER = CwB;
    TqB.SEMRESATTRS_PROCESS_RUNTIME_NAME = EwB;
    TqB.SEMRESATTRS_PROCESS_RUNTIME_VERSION = zwB;
    TqB.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = UwB;
    TqB.SEMRESATTRS_SERVICE_NAME = $wB;
    TqB.SEMRESATTRS_SERVICE_NAMESPACE = wwB;
    TqB.SEMRESATTRS_SERVICE_INSTANCE_ID = qwB;
    TqB.SEMRESATTRS_SERVICE_VERSION = NwB;
    TqB.SEMRESATTRS_TELEMETRY_SDK_NAME = LwB;
    TqB.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = MwB;
    TqB.SEMRESATTRS_TELEMETRY_SDK_VERSION = OwB;
    TqB.SEMRESATTRS_TELEMETRY_AUTO_VERSION = RwB;
    TqB.SEMRESATTRS_WEBENGINE_NAME = TwB;
    TqB.SEMRESATTRS_WEBENGINE_VERSION = PwB;
    TqB.SEMRESATTRS_WEBENGINE_DESCRIPTION = jwB;
    TqB.SemanticResourceAttributes = (0, ht.createConstMap)([G$B, Z$B, I$B, Y$B, J$B, W$B, X$B, F$B, V$B, K$B, D$B, H$B, C$B, E$B, z$B, U$B, $$B, w$B, q$B, N$B, L$B, M$B, O$B, R$B, T$B, P$B, j$B, S$B, _$B, k$B, y$B, x$B, v$B, b$B, f$B, h$B, g$B, u$B, m$B, d$B, c$B, p$B, l$B, i$B, n$B, a$B, s$B, r$B, o$B, t$B, e$B, AwB, QwB, BwB, GwB, ZwB, IwB, YwB, JwB, WwB, XwB, FwB, VwB, KwB, DwB, HwB, CwB, EwB, zwB, UwB, $wB, wwB, qwB, NwB, LwB, MwB, OwB, RwB, TwB, PwB, jwB]);
    var SwB = "alibaba_cloud",
        _wB = "aws",
        kwB = "azure",
        ywB = "gcp";
    TqB.CLOUDPROVIDERVALUES_ALIBABA_CLOUD = SwB;
    TqB.CLOUDPROVIDERVALUES_AWS = _wB;
    TqB.CLOUDPROVIDERVALUES_AZURE = kwB;
    TqB.CLOUDPROVIDERVALUES_GCP = ywB;
    TqB.CloudProviderValues = (0, ht.createConstMap)([SwB, _wB, kwB, ywB]);
    var xwB = "alibaba_cloud_ecs",
        vwB = "alibaba_cloud_fc",
        bwB = "aws_ec2",
        fwB = "aws_ecs",
        hwB = "aws_eks",
        gwB = "aws_lambda",
        uwB = "aws_elastic_beanstalk",
        mwB = "azure_vm",
        dwB = "azure_container_instances",
        cwB = "azure_aks",
        pwB = "azure_functions",
        lwB = "azure_app_service",
        iwB = "gcp_compute_engine",
        nwB = "gcp_cloud_run",
        awB = "gcp_kubernetes_engine",
        swB = "gcp_cloud_functions",
        rwB = "gcp_app_engine";
    TqB.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = xwB;
    TqB.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = vwB;
    TqB.CLOUDPLATFORMVALUES_AWS_EC2 = bwB;
    TqB.CLOUDPLATFORMVALUES_AWS_ECS = fwB;
    TqB.CLOUDPLATFORMVALUES_AWS_EKS = hwB;
    TqB.CLOUDPLATFORMVALUES_AWS_LAMBDA = gwB;
    TqB.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = uwB;
    TqB.CLOUDPLATFORMVALUES_AZURE_VM = mwB;
    TqB.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = dwB;
    TqB.CLOUDPLATFORMVALUES_AZURE_AKS = cwB;
    TqB.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = pwB;
    TqB.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = lwB;
    TqB.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = iwB;
    TqB.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = nwB;
    TqB.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = awB;
    TqB.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = swB;
    TqB.CLOUDPLATFORMVALUES_GCP_APP_ENGINE = rwB;
    TqB.CloudPlatformValues = (0, ht.createConstMap)([xwB, vwB, bwB, fwB, hwB, gwB, uwB, mwB, dwB, cwB, pwB, lwB, iwB, nwB, awB, swB, rwB]);
    var owB = "ec2",
        twB = "fargate";
    TqB.AWSECSLAUNCHTYPEVALUES_EC2 = owB;
    TqB.AWSECSLAUNCHTYPEVALUES_FARGATE = twB;
    TqB.AwsEcsLaunchtypeValues = (0, ht.createConstMap)([owB, twB]);
    var ewB = "amd64",
        AqB = "arm32",
        QqB = "arm64",
        BqB = "ia64",
        GqB = "ppc32",
        ZqB = "ppc64",
        IqB = "x86";
    TqB.HOSTARCHVALUES_AMD64 = ewB;
    TqB.HOSTARCHVALUES_ARM32 = AqB;
    TqB.HOSTARCHVALUES_ARM64 = QqB;
    TqB.HOSTARCHVALUES_IA64 = BqB;
    TqB.HOSTARCHVALUES_PPC32 = GqB;
    TqB.HOSTARCHVALUES_PPC64 = ZqB;
    TqB.HOSTARCHVALUES_X86 = IqB;
    TqB.HostArchValues = (0, ht.createConstMap)([ewB, AqB, QqB, BqB, GqB, ZqB, IqB]);
    var YqB = "windows",
        JqB = "linux",
        WqB = "darwin",
        XqB = "freebsd",
        FqB = "netbsd",
        VqB = "openbsd",
        KqB = "dragonflybsd",
        DqB = "hpux",
        HqB = "aix",
        CqB = "solaris",
        EqB = "z_os";
    TqB.OSTYPEVALUES_WINDOWS = YqB;
    TqB.OSTYPEVALUES_LINUX = JqB;
    TqB.OSTYPEVALUES_DARWIN = WqB;
    TqB.OSTYPEVALUES_FREEBSD = XqB;
    TqB.OSTYPEVALUES_NETBSD = FqB;
    TqB.OSTYPEVALUES_OPENBSD = VqB;
    TqB.OSTYPEVALUES_DRAGONFLYBSD = KqB;
    TqB.OSTYPEVALUES_HPUX = DqB;
    TqB.OSTYPEVALUES_AIX = HqB;
    TqB.OSTYPEVALUES_SOLARIS = CqB;
    TqB.OSTYPEVALUES_Z_OS = EqB;
    TqB.OsTypeValues = (0, ht.createConstMap)([YqB, JqB, WqB, XqB, FqB, VqB, KqB, DqB, HqB, CqB, EqB]);
    var zqB = "cpp",
        UqB = "dotnet",
        $qB = "erlang",
        wqB = "go",
        qqB = "java",
        NqB = "nodejs",
        LqB = "php",
        MqB = "python",
        OqB = "ruby",
        RqB = "webjs";
    TqB.TELEMETRYSDKLANGUAGEVALUES_CPP = zqB;
    TqB.TELEMETRYSDKLANGUAGEVALUES_DOTNET = UqB;
    TqB.TELEMETRYSDKLANGUAGEVALUES_ERLANG = $qB;
    TqB.TELEMETRYSDKLANGUAGEVALUES_GO = wqB;
    TqB.TELEMETRYSDKLANGUAGEVALUES_JAVA = qqB;
    TqB.TELEMETRYSDKLANGUAGEVALUES_NODEJS = NqB;
    TqB.TELEMETRYSDKLANGUAGEVALUES_PHP = LqB;
    TqB.TELEMETRYSDKLANGUAGEVALUES_PYTHON = MqB;
    TqB.TELEMETRYSDKLANGUAGEVALUES_RUBY = OqB;
    TqB.TELEMETRYSDKLANGUAGEVALUES_WEBJS = RqB;
    TqB.TelemetrySdkLanguageValues = (0, ht.createConstMap)([zqB, UqB, $qB, wqB, qqB, NqB, LqB, MqB, OqB, RqB])
});
var kqB = U((gt) => {
    var vV6 = gt && gt.__createBinding || (Object.create ? function(A, Q, B, G) {
            if (G === void 0) G = B;
            var Z = Object.getOwnPropertyDescriptor(Q, B);
            if (!Z || ("get" in Z ? !Q.__esModule : Z.writable || Z.configurable)) Z = {
                enumerable: !0,
                get: function() {
                    return Q[B]
                }
            };
            Object.defineProperty(A, G, Z)
        } : function(A, Q, B, G) {
            if (G === void 0) G = B;
            A[G] = Q[B]
        }),
        bV6 = gt && gt.__exportStar || function(A, Q) {
            for (var B in A)
                if (B !== "default" && !Object.prototype.hasOwnProperty.call(Q, B)) vV6(Q, A, B)
        };
    Object.defineProperty(gt, "__esModule", {
        value: !0
    });
    bV6(_qB(), gt)
});
var fqB = U((yqB) => {
    Object.defineProperty(yqB, "__esModule", {
        value: !0
    });
    yqB.ATTR_EXCEPTION_TYPE = yqB.ATTR_EXCEPTION_STACKTRACE = yqB.ATTR_EXCEPTION_MESSAGE = yqB.ATTR_EXCEPTION_ESCAPED = yqB.ERROR_TYPE_VALUE_OTHER = yqB.ATTR_ERROR_TYPE = yqB.DOTNET_GC_HEAP_GENERATION_VALUE_POH = yqB.DOTNET_GC_HEAP_GENERATION_VALUE_LOH = yqB.DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 = yqB.DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 = yqB.DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 = yqB.ATTR_DOTNET_GC_HEAP_GENERATION = yqB.DB_SYSTEM_NAME_VALUE_POSTGRESQL = yqB.DB_SYSTEM_NAME_VALUE_MYSQL = yqB.DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER = yqB.DB_SYSTEM_NAME_VALUE_MARIADB = yqB.ATTR_DB_SYSTEM_NAME = yqB.ATTR_DB_STORED_PROCEDURE_NAME = yqB.ATTR_DB_RESPONSE_STATUS_CODE = yqB.ATTR_DB_QUERY_TEXT = yqB.ATTR_DB_QUERY_SUMMARY = yqB.ATTR_DB_OPERATION_NAME = yqB.ATTR_DB_OPERATION_BATCH_SIZE = yqB.ATTR_DB_NAMESPACE = yqB.ATTR_DB_COLLECTION_NAME = yqB.ATTR_CODE_STACKTRACE = yqB.ATTR_CODE_LINE_NUMBER = yqB.ATTR_CODE_FUNCTION_NAME = yqB.ATTR_CODE_FILE_PATH = yqB.ATTR_CODE_COLUMN_NUMBER = yqB.ATTR_CLIENT_PORT = yqB.ATTR_CLIENT_ADDRESS = yqB.ATTR_ASPNETCORE_USER_IS_AUTHENTICATED = yqB.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS = yqB.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE = yqB.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS = yqB.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK = yqB.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED = yqB.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED = yqB.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER = yqB.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER = yqB.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED = yqB.ATTR_ASPNETCORE_RATE_LIMITING_RESULT = yqB.ATTR_ASPNETCORE_RATE_LIMITING_POLICY = yqB.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE = yqB.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED = yqB.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED = yqB.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED = yqB.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED = yqB.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT = void 0;
    yqB.OTEL_STATUS_CODE_VALUE_ERROR = yqB.ATTR_OTEL_STATUS_CODE = yqB.ATTR_OTEL_SCOPE_VERSION = yqB.ATTR_OTEL_SCOPE_NAME = yqB.NETWORK_TYPE_VALUE_IPV6 = yqB.NETWORK_TYPE_VALUE_IPV4 = yqB.ATTR_NETWORK_TYPE = yqB.NETWORK_TRANSPORT_VALUE_UNIX = yqB.NETWORK_TRANSPORT_VALUE_UDP = yqB.NETWORK_TRANSPORT_VALUE_TCP = yqB.NETWORK_TRANSPORT_VALUE_QUIC = yqB.NETWORK_TRANSPORT_VALUE_PIPE = yqB.ATTR_NETWORK_TRANSPORT = yqB.ATTR_NETWORK_PROTOCOL_VERSION = yqB.ATTR_NETWORK_PROTOCOL_NAME = yqB.ATTR_NETWORK_PEER_PORT = yqB.ATTR_NETWORK_PEER_ADDRESS = yqB.ATTR_NETWORK_LOCAL_PORT = yqB.ATTR_NETWORK_LOCAL_ADDRESS = yqB.JVM_THREAD_STATE_VALUE_WAITING = yqB.JVM_THREAD_STATE_VALUE_TIMED_WAITING = yqB.JVM_THREAD_STATE_VALUE_TERMINATED = yqB.JVM_THREAD_STATE_VALUE_RUNNABLE = yqB.JVM_THREAD_STATE_VALUE_NEW = yqB.JVM_THREAD_STATE_VALUE_BLOCKED = yqB.ATTR_JVM_THREAD_STATE = yqB.ATTR_JVM_THREAD_DAEMON = yqB.JVM_MEMORY_TYPE_VALUE_NON_HEAP = yqB.JVM_MEMORY_TYPE_VALUE_HEAP = yqB.ATTR_JVM_MEMORY_TYPE = yqB.ATTR_JVM_MEMORY_POOL_NAME = yqB.ATTR_JVM_GC_NAME = yqB.ATTR_JVM_GC_ACTION = yqB.ATTR_HTTP_ROUTE = yqB.ATTR_HTTP_RESPONSE_STATUS_CODE = yqB.ATTR_HTTP_RESPONSE_HEADER = yqB.ATTR_HTTP_REQUEST_RESEND_COUNT = yqB.ATTR_HTTP_REQUEST_METHOD_ORIGINAL = yqB.HTTP_REQUEST_METHOD_VALUE_TRACE = yqB.HTTP_REQUEST_METHOD_VALUE_PUT = yqB.HTTP_REQUEST_METHOD_VALUE_POST = yqB.HTTP_REQUEST_METHOD_VALUE_PATCH = yqB.HTTP_REQUEST_METHOD_VALUE_OPTIONS = yqB.HTTP_REQUEST_METHOD_VALUE_HEAD = yqB.HTTP_REQUEST_METHOD_VALUE_GET = yqB.HTTP_REQUEST_METHOD_VALUE_DELETE = yqB.HTTP_REQUEST_METHOD_VALUE_CONNECT = yqB.HTTP_REQUEST_METHOD_VALUE_OTHER = yqB.ATTR_HTTP_REQUEST_METHOD = yqB.ATTR_HTTP_REQUEST_HEADER = void 0;
    yqB.ATTR_USER_AGENT_ORIGINAL = yqB.ATTR_URL_SCHEME = yqB.ATTR_URL_QUERY = yqB.ATTR_URL_PATH = yqB.ATTR_URL_FULL = yqB.ATTR_URL_FRAGMENT = yqB.ATTR_TELEMETRY_SDK_VERSION = yqB.ATTR_TELEMETRY_SDK_NAME = yqB.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = yqB.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT = yqB.TELEMETRY_SDK_LANGUAGE_VALUE_RUST = yqB.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY = yqB.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON = yqB.TELEMETRY_SDK_LANGUAGE_VALUE_PHP = yqB.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = yqB.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA = yqB.TELEMETRY_SDK_LANGUAGE_VALUE_GO = yqB.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG = yqB.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET = yqB.TELEMETRY_SDK_LANGUAGE_VALUE_CPP = yqB.ATTR_TELEMETRY_SDK_LANGUAGE = yqB.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS = yqB.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS = yqB.SIGNALR_TRANSPORT_VALUE_LONG_POLLING = yqB.ATTR_SIGNALR_TRANSPORT = yqB.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT = yqB.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE = yqB.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN = yqB.ATTR_SIGNALR_CONNECTION_STATUS = yqB.ATTR_SERVICE_VERSION = yqB.ATTR_SERVICE_NAME = yqB.ATTR_SERVER_PORT = yqB.ATTR_SERVER_ADDRESS = yqB.ATTR_OTEL_STATUS_DESCRIPTION = yqB.OTEL_STATUS_CODE_VALUE_OK = void 0;
    yqB.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT = "aspnetcore.diagnostics.exception.result";
    yqB.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED = "aborted";
    yqB.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED = "handled";
    yqB.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED = "skipped";
    yqB.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED = "unhandled";
    yqB.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE = "aspnetcore.diagnostics.handler.type";
    yqB.ATTR_ASPNETCORE_RATE_LIMITING_POLICY = "aspnetcore.rate_limiting.policy";
    yqB.ATTR_ASPNETCORE_RATE_LIMITING_RESULT = "aspnetcore.rate_limiting.result";
    yqB.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED = "acquired";
    yqB.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER = "endpoint_limiter";
    yqB.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER = "global_limiter";
    yqB.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED = "request_canceled";
    yqB.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED = "aspnetcore.request.is_unhandled";
    yqB.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK = "aspnetcore.routing.is_fallback";
    yqB.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS = "aspnetcore.routing.match_status";
    yqB.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE = "failure";
    yqB.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS = "success";
    yqB.ATTR_ASPNETCORE_USER_IS_AUTHENTICATED = "aspnetcore.user.is_authenticated";
    yqB.ATTR_CLIENT_ADDRESS = "client.address";
    yqB.ATTR_CLIENT_PORT = "client.port";
    yqB.ATTR_CODE_COLUMN_NUMBER = "code.column.number";
    yqB.ATTR_CODE_FILE_PATH = "code.file.path";
    yqB.ATTR_CODE_FUNCTION_NAME = "code.function.name";
    yqB.ATTR_CODE_LINE_NUMBER = "code.line.number";
    yqB.ATTR_CODE_STACKTRACE = "code.stacktrace";
    yqB.ATTR_DB_COLLECTION_NAME = "db.collection.name";
    yqB.ATTR_DB_NAMESPACE = "db.namespace";
    yqB.ATTR_DB_OPERATION_BATCH_SIZE = "db.operation.batch.size";
    yqB.ATTR_DB_OPERATION_NAME = "db.operation.name";
    yqB.ATTR_DB_QUERY_SUMMARY = "db.query.summary";
    yqB.ATTR_DB_QUERY_TEXT = "db.query.text";
    yqB.ATTR_DB_RESPONSE_STATUS_CODE = "db.response.status_code";
    yqB.ATTR_DB_STORED_PROCEDURE_NAME = "db.stored_procedure.name";
    yqB.ATTR_DB_SYSTEM_NAME = "db.system.name";
    yqB.DB_SYSTEM_NAME_VALUE_MARIADB = "mariadb";
    yqB.DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER = "microsoft.sql_server";
    yqB.DB_SYSTEM_NAME_VALUE_MYSQL = "mysql";
    yqB.DB_SYSTEM_NAME_VALUE_POSTGRESQL = "postgresql";
    yqB.ATTR_DOTNET_GC_HEAP_GENERATION = "dotnet.gc.heap.generation";
    yqB.DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 = "gen0";
    yqB.DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 = "gen1";
    yqB.DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 = "gen2";
    yqB.DOTNET_GC_HEAP_GENERATION_VALUE_LOH = "loh";
    yqB.DOTNET_GC_HEAP_GENERATION_VALUE_POH = "poh";
    yqB.ATTR_ERROR_TYPE = "error.type";
    yqB.ERROR_TYPE_VALUE_OTHER = "_OTHER";
    yqB.ATTR_EXCEPTION_ESCAPED = "exception.escaped";
    yqB.ATTR_EXCEPTION_MESSAGE = "exception.message";
    yqB.ATTR_EXCEPTION_STACKTRACE = "exception.stacktrace";
    yqB.ATTR_EXCEPTION_TYPE = "exception.type";
    var fV6 = (A) => `http.request.header.${A}`;
    yqB.ATTR_HTTP_REQUEST_HEADER = fV6;
    yqB.ATTR_HTTP_REQUEST_METHOD = "http.request.method";
    yqB.HTTP_REQUEST_METHOD_VALUE_OTHER = "_OTHER";
    yqB.HTTP_REQUEST_METHOD_VALUE_CONNECT = "CONNECT";
    yqB.HTTP_REQUEST_METHOD_VALUE_DELETE = "DELETE";
    yqB.HTTP_REQUEST_METHOD_VALUE_GET = "GET";
    yqB.HTTP_REQUEST_METHOD_VALUE_HEAD = "HEAD";
    yqB.HTTP_REQUEST_METHOD_VALUE_OPTIONS = "OPTIONS";
    yqB.HTTP_REQUEST_METHOD_VALUE_PATCH = "PATCH";
    yqB.HTTP_REQUEST_METHOD_VALUE_POST = "POST";
    yqB.HTTP_REQUEST_METHOD_VALUE_PUT = "PUT";
    yqB.HTTP_REQUEST_METHOD_VALUE_TRACE = "TRACE";
    yqB.ATTR_HTTP_REQUEST_METHOD_ORIGINAL = "http.request.method_original";
    yqB.ATTR_HTTP_REQUEST_RESEND_COUNT = "http.request.resend_count";
    var hV6 = (A) => `http.response.header.${A}`;
    yqB.ATTR_HTTP_RESPONSE_HEADER = hV6;
    yqB.ATTR_HTTP_RESPONSE_STATUS_CODE = "http.response.status_code";
    yqB.ATTR_HTTP_ROUTE = "http.route";
    yqB.ATTR_JVM_GC_ACTION = "jvm.gc.action";
    yqB.ATTR_JVM_GC_NAME = "jvm.gc.name";
    yqB.ATTR_JVM_MEMORY_POOL_NAME = "jvm.memory.pool.name";
    yqB.ATTR_JVM_MEMORY_TYPE = "jvm.memory.type";
    yqB.JVM_MEMORY_TYPE_VALUE_HEAP = "heap";
    yqB.JVM_MEMORY_TYPE_VALUE_NON_HEAP = "non_heap";
    yqB.ATTR_JVM_THREAD_DAEMON = "jvm.thread.daemon";
    yqB.ATTR_JVM_THREAD_STATE = "jvm.thread.state";
    yqB.JVM_THREAD_STATE_VALUE_BLOCKED = "blocked";
    yqB.JVM_THREAD_STATE_VALUE_NEW = "new";
    yqB.JVM_THREAD_STATE_VALUE_RUNNABLE = "runnable";
    yqB.JVM_THREAD_STATE_VALUE_TERMINATED = "terminated";
    yqB.JVM_THREAD_STATE_VALUE_TIMED_WAITING = "timed_waiting";
    yqB.JVM_THREAD_STATE_VALUE_WAITING = "waiting";
    yqB.ATTR_NETWORK_LOCAL_ADDRESS = "network.local.address";
    yqB.ATTR_NETWORK_LOCAL_PORT = "network.local.port";
    yqB.ATTR_NETWORK_PEER_ADDRESS = "network.peer.address";
    yqB.ATTR_NETWORK_PEER_PORT = "network.peer.port";
    yqB.ATTR_NETWORK_PROTOCOL_NAME = "network.protocol.name";
    yqB.ATTR_NETWORK_PROTOCOL_VERSION = "network.protocol.version";
    yqB.ATTR_NETWORK_TRANSPORT = "network.transport";
    yqB.NETWORK_TRANSPORT_VALUE_PIPE = "pipe";
    yqB.NETWORK_TRANSPORT_VALUE_QUIC = "quic";
    yqB.NETWORK_TRANSPORT_VALUE_TCP = "tcp";
    yqB.NETWORK_TRANSPORT_VALUE_UDP = "udp";
    yqB.NETWORK_TRANSPORT_VALUE_UNIX = "unix";
    yqB.ATTR_NETWORK_TYPE = "network.type";
    yqB.NETWORK_TYPE_VALUE_IPV4 = "ipv4";
    yqB.NETWORK_TYPE_VALUE_IPV6 = "ipv6";
    yqB.ATTR_OTEL_SCOPE_NAME = "otel.scope.name";
    yqB.ATTR_OTEL_SCOPE_VERSION = "otel.scope.version";
    yqB.ATTR_OTEL_STATUS_CODE = "otel.status_code";
    yqB.OTEL_STATUS_CODE_VALUE_ERROR = "ERROR";
    yqB.OTEL_STATUS_CODE_VALUE_OK = "OK";
    yqB.ATTR_OTEL_STATUS_DESCRIPTION = "otel.status_description";
    yqB.ATTR_SERVER_ADDRESS = "server.address";
    yqB.ATTR_SERVER_PORT = "server.port";
    yqB.ATTR_SERVICE_NAME = "service.name";
    yqB.ATTR_SERVICE_VERSION = "service.version";
    yqB.ATTR_SIGNALR_CONNECTION_STATUS = "signalr.connection.status";
    yqB.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN = "app_shutdown";
    yqB.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE = "normal_closure";
    yqB.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT = "timeout";
    yqB.ATTR_SIGNALR_TRANSPORT = "signalr.transport";
    yqB.SIGNALR_TRANSPORT_VALUE_LONG_POLLING = "long_polling";
    yqB.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS = "server_sent_events";
    yqB.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS = "web_sockets";
    yqB.ATTR_TELEMETRY_SDK_LANGUAGE = "telemetry.sdk.language";
    yqB.TELEMETRY_SDK_LANGUAGE_VALUE_CPP = "cpp";
    yqB.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET = "dotnet";
    yqB.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG = "erlang";
    yqB.TELEMETRY_SDK_LANGUAGE_VALUE_GO = "go";
    yqB.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA = "java";
    yqB.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = "nodejs";
    yqB.TELEMETRY_SDK_LANGUAGE_VALUE_PHP = "php";
    yqB.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON = "python";
    yqB.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY = "ruby";
    yqB.TELEMETRY_SDK_LANGUAGE_VALUE_RUST = "rust";
    yqB.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT = "swift";
    yqB.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = "webjs";
    yqB.ATTR_TELEMETRY_SDK_NAME = "telemetry.sdk.name";
    yqB.ATTR_TELEMETRY_SDK_VERSION = "telemetry.sdk.version";
    yqB.ATTR_URL_FRAGMENT = "url.fragment";
    yqB.ATTR_URL_FULL = "url.full";
    yqB.ATTR_URL_PATH = "url.path";
    yqB.ATTR_URL_QUERY = "url.query";
    yqB.ATTR_URL_SCHEME = "url.scheme";
    yqB.ATTR_USER_AGENT_ORIGINAL = "user_agent.original"
});
var mqB = U((hqB) => {
    Object.defineProperty(hqB, "__esModule", {
        value: !0
    });
    hqB.METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS = hqB.METRIC_KESTREL_UPGRADED_CONNECTIONS = hqB.METRIC_KESTREL_TLS_HANDSHAKE_DURATION = hqB.METRIC_KESTREL_REJECTED_CONNECTIONS = hqB.METRIC_KESTREL_QUEUED_REQUESTS = hqB.METRIC_KESTREL_QUEUED_CONNECTIONS = hqB.METRIC_KESTREL_CONNECTION_DURATION = hqB.METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES = hqB.METRIC_KESTREL_ACTIVE_CONNECTIONS = hqB.METRIC_JVM_THREAD_COUNT = hqB.METRIC_JVM_MEMORY_USED_AFTER_LAST_GC = hqB.METRIC_JVM_MEMORY_USED = hqB.METRIC_JVM_MEMORY_LIMIT = hqB.METRIC_JVM_MEMORY_COMMITTED = hqB.METRIC_JVM_GC_DURATION = hqB.METRIC_JVM_CPU_TIME = hqB.METRIC_JVM_CPU_RECENT_UTILIZATION = hqB.METRIC_JVM_CPU_COUNT = hqB.METRIC_JVM_CLASS_UNLOADED = hqB.METRIC_JVM_CLASS_LOADED = hqB.METRIC_JVM_CLASS_COUNT = hqB.METRIC_HTTP_SERVER_REQUEST_DURATION = hqB.METRIC_HTTP_CLIENT_REQUEST_DURATION = hqB.METRIC_DOTNET_TIMER_COUNT = hqB.METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT = hqB.METRIC_DOTNET_THREAD_POOL_THREAD_COUNT = hqB.METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH = hqB.METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET = hqB.METRIC_DOTNET_PROCESS_CPU_TIME = hqB.METRIC_DOTNET_PROCESS_CPU_COUNT = hqB.METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS = hqB.METRIC_DOTNET_JIT_COMPILED_METHODS = hqB.METRIC_DOTNET_JIT_COMPILED_IL_SIZE = hqB.METRIC_DOTNET_JIT_COMPILATION_TIME = hqB.METRIC_DOTNET_GC_PAUSE_TIME = hqB.METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE = hqB.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE = hqB.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE = hqB.METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED = hqB.METRIC_DOTNET_GC_COLLECTIONS = hqB.METRIC_DOTNET_EXCEPTIONS = hqB.METRIC_DOTNET_ASSEMBLY_COUNT = hqB.METRIC_DB_CLIENT_OPERATION_DURATION = hqB.METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS = hqB.METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS = hqB.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION = hqB.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE = hqB.METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS = hqB.METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES = hqB.METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS = void 0;
    hqB.METRIC_SIGNALR_SERVER_CONNECTION_DURATION = void 0;
    hqB.METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS = "aspnetcore.diagnostics.exceptions";
    hqB.METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES = "aspnetcore.rate_limiting.active_request_leases";
    hqB.METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS = "aspnetcore.rate_limiting.queued_requests";
    hqB.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE = "aspnetcore.rate_limiting.request.time_in_queue";
    hqB.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION = "aspnetcore.rate_limiting.request_lease.duration";
    hqB.METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS = "aspnetcore.rate_limiting.requests";
    hqB.METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS = "aspnetcore.routing.match_attempts";
    hqB.METRIC_DB_CLIENT_OPERATION_DURATION = "db.client.operation.duration";
    hqB.METRIC_DOTNET_ASSEMBLY_COUNT = "dotnet.assembly.count";
    hqB.METRIC_DOTNET_EXCEPTIONS = "dotnet.exceptions";
    hqB.METRIC_DOTNET_GC_COLLECTIONS = "dotnet.gc.collections";
    hqB.METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED = "dotnet.gc.heap.total_allocated";
    hqB.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE = "dotnet.gc.last_collection.heap.fragmentation.size";
    hqB.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE = "dotnet.gc.last_collection.heap.size";
    hqB.METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE = "dotnet.gc.last_collection.memory.committed_size";
    hqB.METRIC_DOTNET_GC_PAUSE_TIME = "dotnet.gc.pause.time";
    hqB.METRIC_DOTNET_JIT_COMPILATION_TIME = "dotnet.jit.compilation.time";
    hqB.METRIC_DOTNET_JIT_COMPILED_IL_SIZE = "dotnet.jit.compiled_il.size";
    hqB.METRIC_DOTNET_JIT_COMPILED_METHODS = "dotnet.jit.compiled_methods";
    hqB.METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS = "dotnet.monitor.lock_contentions";
    hqB.METRIC_DOTNET_PROCESS_CPU_COUNT = "dotnet.process.cpu.count";
    hqB.METRIC_DOTNET_PROCESS_CPU_TIME = "dotnet.process.cpu.time";
    hqB.METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET = "dotnet.process.memory.working_set";
    hqB.METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH = "dotnet.thread_pool.queue.length";
    hqB.METRIC_DOTNET_THREAD_POOL_THREAD_COUNT = "dotnet.thread_pool.thread.count";
    hqB.METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT = "dotnet.thread_pool.work_item.count";
    hqB.METRIC_DOTNET_TIMER_COUNT = "dotnet.timer.count";
    hqB.METRIC_HTTP_CLIENT_REQUEST_DURATION = "http.client.request.duration";
    hqB.METRIC_HTTP_SERVER_REQUEST_DURATION = "http.server.request.duration";
    hqB.METRIC_JVM_CLASS_COUNT = "jvm.class.count";
    hqB.METRIC_JVM_CLASS_LOADED = "jvm.class.loaded";
    hqB.METRIC_JVM_CLASS_UNLOADED = "jvm.class.unloaded";
    hqB.METRIC_JVM_CPU_COUNT = "jvm.cpu.count";
    hqB.METRIC_JVM_CPU_RECENT_UTILIZATION = "jvm.cpu.recent_utilization";
    hqB.METRIC_JVM_CPU_TIME = "jvm.cpu.time";
    hqB.METRIC_JVM_GC_DURATION = "jvm.gc.duration";
    hqB.METRIC_JVM_MEMORY_COMMITTED = "jvm.memory.committed";
    hqB.METRIC_JVM_MEMORY_LIMIT = "jvm.memory.limit";
    hqB.METRIC_JVM_MEMORY_USED = "jvm.memory.used";
    hqB.METRIC_JVM_MEMORY_USED_AFTER_LAST_GC = "jvm.memory.used_after_last_gc";
    hqB.METRIC_JVM_THREAD_COUNT = "jvm.thread.count";
    hqB.METRIC_KESTREL_ACTIVE_CONNECTIONS = "kestrel.active_connections";
    hqB.METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES = "kestrel.active_tls_handshakes";
    hqB.METRIC_KESTREL_CONNECTION_DURATION = "kestrel.connection.duration";
    hqB.METRIC_KESTREL_QUEUED_CONNECTIONS = "kestrel.queued_connections";
    hqB.METRIC_KESTREL_QUEUED_REQUESTS = "kestrel.queued_requests";
    hqB.METRIC_KESTREL_REJECTED_CONNECTIONS = "kestrel.rejected_connections";
    hqB.METRIC_KESTREL_TLS_HANDSHAKE_DURATION = "kestrel.tls_handshake.duration";
    hqB.METRIC_KESTREL_UPGRADED_CONNECTIONS = "kestrel.upgraded_connections";
    hqB.METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS = "signalr.server.active_connections";
    hqB.METRIC_SIGNALR_SERVER_CONNECTION_DURATION = "signalr.server.connection.duration"
});
var pqB = U((dqB) => {
    Object.defineProperty(dqB, "__esModule", {
        value: !0
    });
    dqB.EVENT_EXCEPTION = void 0;
    dqB.EVENT_EXCEPTION = "exception"
});
var ut = U((zT) => {
    var ZC6 = zT && zT.__createBinding || (Object.create ? function(A, Q, B, G) {
            if (G === void 0) G = B;
            var Z = Object.getOwnPropertyDescriptor(Q, B);
            if (!Z || ("get" in Z ? !Q.__esModule : Z.writable || Z.configurable)) Z = {
                enumerable: !0,
                get: function() {
                    return Q[B]
                }
            };
            Object.defineProperty(A, G, Z)
        } : function(A, Q, B, G) {
            if (G === void 0) G = B;
            A[G] = Q[B]
        }),
        C$A = zT && zT.__exportStar || function(A, Q) {
            for (var B in A)
                if (B !== "default" && !Object.prototype.hasOwnProperty.call(Q, B)) ZC6(Q, A, B)
        };
    Object.defineProperty(zT, "__esModule", {
        value: !0
    });
    C$A(B$B(), zT);
    C$A(kqB(), zT);
    C$A(fqB(), zT);
    C$A(mqB(), zT);
    C$A(pqB(), zT)
});
var nqB = U((lqB) => {
    Object.defineProperty(lqB, "__esModule", {
        value: !0
    });
    lqB.ATTR_PROCESS_RUNTIME_NAME = void 0;
    lqB.ATTR_PROCESS_RUNTIME_NAME = "process.runtime.name"
});
var rqB = U((aqB) => {
    Object.defineProperty(aqB, "__esModule", {
        value: !0
    });
    aqB.SDK_INFO = void 0;
    var IC6 = BHB(),
        FsA = ut(),
        YC6 = nqB();
    aqB.SDK_INFO = {
        [FsA.ATTR_TELEMETRY_SDK_NAME]: "opentelemetry",
        [YC6.ATTR_PROCESS_RUNTIME_NAME]: "node",
        [FsA.ATTR_TELEMETRY_SDK_LANGUAGE]: FsA.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS,
        [FsA.ATTR_TELEMETRY_SDK_VERSION]: IC6.VERSION
    }
});
var eqB = U((oqB) => {
    Object.defineProperty(oqB, "__esModule", {
        value: !0
    });
    oqB.unrefTimer = void 0;

    function JC6(A) {
        A.unref()
    }
    oqB.unrefTimer = JC6
});
var ANB = U((k_) => {
    Object.defineProperty(k_, "__esModule", {
        value: !0
    });
    k_.unrefTimer = k_.SDK_INFO = k_.otperformance = k_._globalThis = k_.getStringListFromEnv = k_.getNumberFromEnv = k_.getBooleanFromEnv = k_.getStringFromEnv = void 0;
    var VsA = nDB();
    Object.defineProperty(k_, "getStringFromEnv", {
        enumerable: !0,
        get: function() {
            return VsA.getStringFromEnv
        }
    });
    Object.defineProperty(k_, "getBooleanFromEnv", {
        enumerable: !0,
        get: function() {
            return VsA.getBooleanFromEnv
        }
    });
    Object.defineProperty(k_, "getNumberFromEnv", {
        enumerable: !0,
        get: function() {
            return VsA.getNumberFromEnv
        }
    });
    Object.defineProperty(k_, "getStringListFromEnv", {
        enumerable: !0,
        get: function() {
            return VsA.getStringListFromEnv
        }
    });
    var WC6 = rDB();
    Object.defineProperty(k_, "_globalThis", {
        enumerable: !0,
        get: function() {
            return WC6._globalThis
        }
    });
    var XC6 = eDB();
    Object.defineProperty(k_, "otperformance", {
        enumerable: !0,
        get: function() {
            return XC6.otperformance
        }
    });
    var FC6 = rqB();
    Object.defineProperty(k_, "SDK_INFO", {
        enumerable: !0,
        get: function() {
            return FC6.SDK_INFO
        }
    });
    var VC6 = eqB();
    Object.defineProperty(k_, "unrefTimer", {
        enumerable: !0,
        get: function() {
            return VC6.unrefTimer
        }
    })
});
var du1 = U((y_) => {
    Object.defineProperty(y_, "__esModule", {
        value: !0
    });
    y_.getStringListFromEnv = y_.getNumberFromEnv = y_.getStringFromEnv = y_.getBooleanFromEnv = y_.unrefTimer = y_.otperformance = y_._globalThis = y_.SDK_INFO = void 0;
    var Zp = ANB();
    Object.defineProperty(y_, "SDK_INFO", {
        enumerable: !0,
        get: function() {
            return Zp.SDK_INFO
        }
    });
    Object.defineProperty(y_, "_globalThis", {
        enumerable: !0,
        get: function() {
            return Zp._globalThis
        }
    });
    Object.defineProperty(y_, "otperformance", {
        enumerable: !0,
        get: function() {
            return Zp.otperformance
        }
    });
    Object.defineProperty(y_, "unrefTimer", {
        enumerable: !0,
        get: function() {
            return Zp.unrefTimer
        }
    });
    Object.defineProperty(y_, "getBooleanFromEnv", {
        enumerable: !0,
        get: function() {
            return Zp.getBooleanFromEnv
        }
    });
    Object.defineProperty(y_, "getStringFromEnv", {
        enumerable: !0,
        get: function() {
            return Zp.getStringFromEnv
        }
    });
    Object.defineProperty(y_, "getNumberFromEnv", {
        enumerable: !0,
        get: function() {
            return Zp.getNumberFromEnv
        }
    });
    Object.defineProperty(y_, "getStringListFromEnv", {
        enumerable: !0,
        get: function() {
            return Zp.getStringListFromEnv
        }
    })
});
var YNB = U((ZNB) => {
    Object.defineProperty(ZNB, "__esModule", {
        value: !0
    });
    ZNB.addHrTimes = ZNB.isTimeInput = ZNB.isTimeInputHrTime = ZNB.hrTimeToMicroseconds = ZNB.hrTimeToMilliseconds = ZNB.hrTimeToNanoseconds = ZNB.hrTimeToTimeStamp = ZNB.hrTimeDuration = ZNB.timeInputToHrTime = ZNB.hrTime = ZNB.getTimeOrigin = ZNB.millisToHrTime = void 0;
    var cu1 = du1(),
        QNB = 9,
        HC6 = 6,
        CC6 = Math.pow(10, HC6),
        KsA = Math.pow(10, QNB);

    function E$A(A) {
        let Q = A / 1000,
            B = Math.trunc(Q),
            G = Math.round(A % 1000 * CC6);
        return [B, G]
    }
    ZNB.millisToHrTime = E$A;

    function pu1() {
        let A = cu1.otperformance.timeOrigin;
        if (typeof A !== "number") {
            let Q = cu1.otperformance;
            A = Q.timing && Q.timing.fetchStart
        }
        return A
    }
    ZNB.getTimeOrigin = pu1;

    function BNB(A) {
        let Q = E$A(pu1()),
            B = E$A(typeof A === "number" ? A : cu1.otperformance.now());
        return GNB(Q, B)
    }
    ZNB.hrTime = BNB;

    function EC6(A) {
        if (lu1(A)) return A;
        else if (typeof A === "number")
            if (A < pu1()) return BNB(A);
            else return E$A(A);
        else if (A instanceof Date) return E$A(A.getTime());
        else throw TypeError("Invalid input type")
    }
    ZNB.timeInputToHrTime = EC6;

    function zC6(A, Q) {
        let B = Q[0] - A[0],
            G = Q[1] - A[1];
        if (G < 0) B -= 1, G += KsA;
        return [B, G]
    }
    ZNB.hrTimeDuration = zC6;

    function UC6(A) {
        let Q = QNB,
            B = `${"0".repeat(Q)}${A[1]}Z`,
            G = B.substring(B.length - Q - 1);
        return new Date(A[0] * 1000).toISOString().replace("000Z", G)
    }
    ZNB.hrTimeToTimeStamp = UC6;

    function $C6(A) {
        return A[0] * KsA + A[1]
    }
    ZNB.hrTimeToNanoseconds = $C6;

    function wC6(A) {
        return A[0] * 1000 + A[1] / 1e6
    }
    ZNB.hrTimeToMilliseconds = wC6;

    function qC6(A) {
        return A[0] * 1e6 + A[1] / 1000
    }
    ZNB.hrTimeToMicroseconds = qC6;

    function lu1(A) {
        return Array.isArray(A) && A.length === 2 && typeof A[0] === "number" && typeof A[1] === "number"
    }
    ZNB.isTimeInputHrTime = lu1;

    function NC6(A) {
        return lu1(A) || typeof A === "number" || A instanceof Date
    }
    ZNB.isTimeInput = NC6;

    function GNB(A, Q) {
        let B = [A[0] + Q[0], A[1] + Q[1]];
        if (B[1] >= KsA) B[1] -= KsA, B[0] += 1;
        return B
    }
    ZNB.addHrTimes = GNB
});
var WNB = U((JNB) => {
    Object.defineProperty(JNB, "__esModule", {
        value: !0
    });
    JNB.ExportResultCode = void 0;
    var xC6;
    (function(A) {
        A[A.SUCCESS = 0] = "SUCCESS", A[A.FAILED = 1] = "FAILED"
    })(xC6 = JNB.ExportResultCode || (JNB.ExportResultCode = {}))
});
var DNB = U((VNB) => {
    Object.defineProperty(VNB, "__esModule", {
        value: !0
    });
    VNB.CompositePropagator = void 0;
    var XNB = W9();
    class FNB {
        _propagators;
        _fields;
        constructor(A = {}) {
            this._propagators = A.propagators ?? [], this._fields = Array.from(new Set(this._propagators.map((Q) => typeof Q.fields === "function" ? Q.fields() : []).reduce((Q, B) => Q.concat(B), [])))
        }
        inject(A, Q, B) {
            for (let G of this._propagators) try {
                G.inject(A, Q, B)
            } catch (Z) {
                XNB.diag.warn(`Failed to inject with ${G.constructor.name}. Err: ${Z.message}`)
            }
        }
        extract(A, Q, B) {
            return this._propagators.reduce((G, Z) => {
                try {
                    return Z.extract(G, Q, B)
                } catch (I) {
                    XNB.diag.warn(`Failed to extract with ${Z.constructor.name}. Err: ${I.message}`)
                }
                return G
            }, A)
        }
        fields() {
            return this._fields.slice()
        }
    }
    VNB.CompositePropagator = FNB
});
var ENB = U((HNB) => {
    Object.defineProperty(HNB, "__esModule", {
        value: !0
    });
    HNB.validateValue = HNB.validateKey = void 0;
    var nu1 = "[_0-9a-z-*/]",
        vC6 = `[a-z]${nu1}{0,255}`,
        bC6 = `[a-z0-9]${nu1}{0,240}@[a-z]${nu1}{0,13}`,
        fC6 = new RegExp(`^(?:${vC6}|${bC6})$`),
        hC6 = /^[ -~]{0,255}[!-~]$/,
        gC6 = /,|=/;

    function uC6(A) {
        return fC6.test(A)
    }
    HNB.validateKey = uC6;

    function mC6(A) {
        return hC6.test(A) && !gC6.test(A)
    }
    HNB.validateValue = mC6
});
var su1 = U((qNB) => {
    Object.defineProperty(qNB, "__esModule", {
        value: !0
    });
    qNB.TraceState = void 0;
    var zNB = ENB(),
        UNB = 32,
        cC6 = 512,
        $NB = ",",
        wNB = "=";
    class au1 {
        _internalState = new Map;
        constructor(A) {
            if (A) this._parse(A)
        }
        set(A, Q) {
            let B = this._clone();
            if (B._internalState.has(A)) B._internalState.delete(A);
            return B._internalState.set(A, Q), B
        }
        unset(A) {
            let Q = this._clone();
            return Q._internalState.delete(A), Q
        }
        get(A) {
            return this._internalState.get(A)
        }
        serialize() {
            return this._keys().reduce((A, Q) => {
                return A.push(Q + wNB + this.get(Q)), A
            }, []).join($NB)
        }
        _parse(A) {
            if (A.length > cC6) return;
            if (this._internalState = A.split($NB).reverse().reduce((Q, B) => {
                    let G = B.trim(),
                        Z = G.indexOf(wNB);
                    if (Z !== -1) {
                        let I = G.slice(0, Z),
                            Y = G.slice(Z + 1, B.length);
                        if ((0, zNB.validateKey)(I) && (0, zNB.validateValue)(Y)) Q.set(I, Y)
                    }
                    return Q
                }, new Map), this._internalState.size > UNB) this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, UNB))
        }
        _keys() {
            return Array.from(this._internalState.keys()).reverse()
        }
        _clone() {
            let A = new au1;
            return A._internalState = new Map(this._internalState), A
        }
    }
    qNB.TraceState = au1
});
var TNB = U((ONB) => {
    Object.defineProperty(ONB, "__esModule", {
        value: !0
    });
    ONB.W3CTraceContextPropagator = ONB.parseTraceParent = ONB.TRACE_STATE_HEADER = ONB.TRACE_PARENT_HEADER = void 0;
    var DsA = W9(),
        pC6 = H$A(),
        lC6 = su1();
    ONB.TRACE_PARENT_HEADER = "traceparent";
    ONB.TRACE_STATE_HEADER = "tracestate";