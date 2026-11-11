/* Band A — Bedrock: the engineering foundations under production AI. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"A1",band:"A",name:"Software & Systems Foundations",sum:"The general engineering base that ML systems stand on.",deps:[],
 overview:"Production AI is mostly ordinary software engineering with unusual components. This region covers the distributed-systems ideas, APIs, concurrency, containers and infrastructure practices that every ML platform inherits.",
 why:"Most outages in ML systems come from the surrounding software, not the model. Fluency in these basics lets an ML engineer reason about latency, failure and scale instead of treating infrastructure as a black box.",
 subs:[
 ["Distributed systems basics","why many machines are hard",[
  ["Latency vs. throughput","Time per request versus requests per unit time. Optimizing one often costs the other, which shapes every serving decision."],
  ["CAP theorem & consistency models","Under network partitions a system must trade consistency against availability. Determines how feature stores and metadata services behave."],
  ["Replication & sharding","Copy data for durability and split it for scale. Used in vector databases, feature stores and checkpoint storage."],
  ["Consensus & coordination","Protocols such as Raft and services like ZooKeeper that agree on state. Underlie schedulers and cluster managers."],
  ["Idempotency & exactly-once semantics","Operations that are safe to repeat. Essential for retrying data and training jobs without duplicating effects."],
  ["Backpressure & queues","Slow consumers signal producers to slow down, or buffer in queues. Prevents overload in streaming and inference pipelines."],
  ["Fallacies of distributed computing","Assumptions such as a reliable network that fail in practice. A checklist for design reviews."]]],
 ["Services & APIs","how components talk",[
  ["REST, gRPC & protocol buffers","Request styles and a binary schema-based protocol. gRPC is common for low-latency model serving."],
  ["Schema evolution & versioning","Changing interfaces without breaking clients. Matters for model input and output contracts."],
  ["Microservices vs. monoliths","Many small deployable services versus one unit. A tradeoff between team autonomy and operational complexity."],
  ["Service discovery & load balancing","Find service instances and spread traffic. Required for scaling inference replicas."],
  ["Streaming protocols (SSE, WebSockets)","Push partial results to clients as they are generated. How LLM token streaming reaches users."],
  ["Message brokers (Kafka, Pub/Sub)","Durable logs and queues connecting producers to consumers. Backbone of event and feature pipelines."],
  ["Rate limiting & quotas","Cap request rates per client. Protects shared GPU capacity and controls spend."]]],
 ["Concurrency & performance","using hardware well",[
  ["Threads, processes & the GIL","Parallel execution models and Python's interpreter lock. Why Python data loaders use multiple processes."],
  ["Async I/O","Overlap waiting on network or disk with other work. Used in API gateways and batching servers."],
  ["Profiling & flame graphs","Measure where time is spent before optimizing. Basic discipline for performance work."],
  ["Memory hierarchy & cache effects","Registers, caches, RAM and disk have very different speeds. Explains why data layout and batching matter."],
  ["Vectorization & SIMD","Apply one operation to many values at once. Foundation of numerical performance."],
  ["Zero-copy & serialization costs","Avoid copying and parsing data between components. A frequent hidden cost in pipelines."],
  ["Amdahl's law","Speedup is limited by the serial fraction. Bounds gains from parallelizing training or preprocessing."]]],
 ["Containers & infrastructure","packaging and running software",[
  ["Containers & Docker images","Isolated, reproducible runtime bundles. The unit of deployment for most ML workloads."],
  ["Kubernetes","Cluster orchestrator that schedules containers and restarts them on failure. Common substrate for serving and training."],
  ["Infrastructure as code","Declare infrastructure in versioned files with tools like Terraform. Makes environments reproducible and reviewable."],
  ["GPU scheduling & device plugins","Expose accelerators to containers and place jobs on them. Needs special handling beyond CPU scheduling."],
  ["Virtual machines, bare metal & serverless","Different isolation and management levels. Choice affects cold starts, cost and control."],
  ["Cloud primitives (compute, storage, network, IAM)","Core building blocks of cloud platforms. All ML platforms are assembled from them."],
  ["Reproducible builds & dependency pinning","Lock versions so builds are identical. Prevents silent drift in library behavior."]]],
 ["Engineering practice","habits that scale",[
  ["Testing pyramid","Many unit tests, fewer integration tests, fewest end-to-end tests. Adapted for data and model code."],
  ["Code review & trunk-based development","Small reviewed changes merged often. Reduces integration risk."],
  ["Continuous integration","Automatically build and test every change. Foundation of MLOps pipelines."],
  ["Technical debt","Shortcuts that slow later work. ML systems accumulate hidden debt through data and glue code."],
  ["Design docs & architecture decision records","Written rationale for system choices. Preserve context for future maintainers."],
  ["Observability basics (logs, metrics, traces)","Three signals for understanding running systems. Applied again to models in monitoring."],
  ["Runbooks & on-call","Documented response steps and rotating responsibility. Part of owning a service in production."]]]
 ]},

{ref:"A2",band:"A",name:"Data Fundamentals & Storage",sum:"How data is represented, stored and made trustworthy.",deps:["A1"],
 overview:"Data is the raw material of every ML system. This region covers data formats, storage layers, warehouses and lakehouses, schemas and contracts, and the basics of quality and lineage.",
 why:"Models inherit the strengths and flaws of their data, and data bugs are among the most expensive to find late. Good storage and quality foundations make everything downstream cheaper.",
 subs:[
 ["Formats & serialization","how data is laid out",[
  ["Row vs. columnar formats","Row stores keep whole records together; columnar stores keep each field together. Columnar suits analytics and training scans."],
  ["Parquet & ORC","Compressed columnar file formats with schemas and statistics. The standard for tabular ML data."],
  ["Arrow & in-memory columnar data","A shared memory layout enabling zero-copy exchange between tools. Used by pandas, Polars and Spark."],
  ["JSON, CSV & Avro","Text and row-based formats with differing schema support. Common at system boundaries."],
  ["TFRecord, WebDataset & sharded formats","Sequential shard files built for streaming training data. Reduce small-file overhead."],
  ["Compression & encoding","Trade CPU time for smaller storage and faster I/O. Choices affect training throughput."],
  ["Embedding and tensor storage","Persist vectors and arrays efficiently. Needed for retrieval and caching."]]],
 ["Storage systems","where data lives",[
  ["Object storage (S3, GCS)","Cheap, durable, scalable storage accessed by key. Default home for datasets and checkpoints."],
  ["Block & file storage","Disk-like volumes and shared file systems. Used when low-latency or POSIX access is needed."],
  ["Distributed file systems (HDFS, Lustre)","Parallel file systems for high-throughput access. Common in HPC training clusters."],
  ["Relational databases & SQL","Structured tables with transactions. Source of truth for many applications."],
  ["NoSQL & key-value stores","Flexible or low-latency stores like Redis, DynamoDB and Cassandra. Serve online features."],
  ["Vector databases & ANN indexes","Stores optimized for similarity search over embeddings. Backbone of retrieval systems."],
  ["Hot, warm & cold tiers","Match storage cost to access frequency. A main lever for storage spend."]]],
 ["Warehouses, lakes & lakehouses","analytical platforms",[
  ["Data warehouse","Curated, structured analytical store queried with SQL. Source for training tables and reports."],
  ["Data lake","Raw data in open formats on object storage. Flexible but needs governance."],
  ["Lakehouse & table formats (Delta, Iceberg, Hudi)","Add transactions, schema and time travel to lake files. Allow reproducible snapshots of training data."],
  ["Time travel & snapshots","Query a table as of an earlier point. Reproduces past training sets."],
  ["Partitioning & clustering","Organize files for pruned scans. Cuts query cost and latency."],
  ["Medallion architecture (bronze, silver, gold)","Layers from raw to refined data. A common organizing pattern."],
  ["Query engines (Spark, Trino, DuckDB)","Systems that run SQL and dataframe jobs at various scales. Choice depends on data size and latency."]]],
 ["Schemas, contracts & lineage","knowing what the data is",[
  ["Schema & schema registry","Formal description of fields and types, centrally managed. Catches breaking changes early."],
  ["Data contracts","Agreements between producers and consumers about structure and semantics. Prevent upstream changes from silently breaking models."],
  ["Data catalog & metadata","Searchable inventory of datasets with owners and descriptions. Makes data discoverable."],
  ["Data lineage","Trace where data came from and what depends on it. Essential for debugging and compliance."],
  ["Slowly changing dimensions","Track how reference data changes over time. Prevents leakage when building historical features."],
  ["Master data & entity resolution","Reconcile records that refer to the same entity. Quality of joins depends on it."],
  ["Data versioning (DVC, lakeFS)","Version datasets like code. Link models to the exact data used."]]],
 ["Data quality","trusting what you have",[
  ["Validation & expectations","Assert properties such as ranges and null rates. Libraries include Great Expectations and Pandera."],
  ["Missing, duplicate & outlier handling","Basic cleaning tasks with modeling consequences. Policies must be consistent between training and serving."],
  ["Label quality & annotation pipelines","Process for obtaining reliable labels, with guidelines and review. Often the main bottleneck."],
  ["Inter-annotator agreement","Statistical measure of labeler consistency. Signals ambiguous tasks."],
  ["Data freshness & completeness SLAs","Targets for how current and whole data must be. Monitored like service levels."],
  ["Data leakage","Information from the target or future entering features. Gives optimistic offline results and failures in production."],
  ["Sampling & dataset splits","Create representative train, validation and test sets with time-aware splitting where needed. Governs evaluation validity."]]]
 ]},

{ref:"A3",band:"A",name:"Compute, Hardware & Networking",sum:"Accelerators, memory and interconnect that set the limits.",deps:["A1"],
 overview:"AI workloads are bound by arithmetic throughput, memory capacity and bandwidth, and communication between devices. This region covers GPUs and other accelerators, memory systems, interconnects and the capacity-planning vocabulary used to size systems.",
 why:"Cost and latency engineering both start from hardware limits. Knowing whether a workload is compute-bound, memory-bound or network-bound tells you which optimizations can help.",
 subs:[
 ["Accelerators","the compute engines",[
  ["GPU architecture","Many parallel cores with high-bandwidth memory, organized into streaming multiprocessors. The dominant AI accelerator."],
  ["Tensor cores & matrix units","Hardware that multiplies small matrix tiles per cycle at low precision. Source of most deep learning throughput."],
  ["TPUs & custom ASICs","Accelerators designed for dense tensor math, such as Google TPU and AWS Trainium. Trade flexibility for efficiency."],
  ["CPUs & vector extensions","General processors with AVX and AMX. Adequate for small models and preprocessing."],
  ["NPUs & edge accelerators","Low-power inference chips in phones and devices. Constrain model size and operators."],
  ["FPGAs","Reconfigurable chips for fixed pipelines. Used in some low-latency inference."],
  ["Accelerator generations & roofline","Each generation raises FLOPs and bandwidth unevenly. The roofline model shows which limit binds."]]],
 ["Memory & precision","the other bottleneck",[
  ["HBM & memory bandwidth","Stacked memory delivering terabytes per second. Often limits inference, especially decoding."],
  ["Memory capacity & model footprint","Parameters, activations, optimizer state and caches all need memory. Determines how many devices a model needs."],
  ["Arithmetic intensity","FLOPs performed per byte moved. Low-intensity operations are memory-bound."],
  ["Mixed precision (FP16, BF16, FP8)","Lower-precision formats for speed and memory. Need scaling to preserve accuracy."],
  ["Integer & 4-bit formats","INT8, INT4 and FP4 weights for inference. Cut memory and cost with small quality loss."],
  ["Unified & host memory, offloading","Spill tensors to CPU memory or disk. Enables larger models at lower speed."],
  ["Memory fragmentation & allocators","Wasted GPU memory due to allocation patterns. A cause of out-of-memory failures."]]],
 ["Interconnect & networking","moving data between devices",[
  ["NVLink & NVSwitch","High-bandwidth links between GPUs in a node. Make tensor parallelism practical."],
  ["InfiniBand & RoCE","Fast cluster networks with RDMA. Used for multi-node training."],
  ["PCIe & host–device transfers","The link between CPU and accelerator. A bottleneck for data loading."],
  ["Collective communication (all-reduce, all-gather)","Operations that combine data across devices. Core of distributed training."],
  ["NCCL & collective libraries","Optimized GPU communication software. Hardware-aware."],
  ["Network topology (fat-tree, rail-optimized)","Layout of switches and links. Affects scaling efficiency."],
  ["Bandwidth vs. latency in clusters","Large transfers are bandwidth-bound; small messages are latency-bound. Guides parallelism choices."]]],
 ["Capacity & performance modeling","sizing systems",[
  ["FLOPs accounting (6ND rule)","Estimate training compute from parameters and tokens. Used to budget runs."],
  ["Model FLOPs utilization (MFU)","Fraction of peak hardware FLOPs actually used for model math. Headline efficiency metric."],
  ["Roofline analysis","Plot performance against intensity to identify limits. Directs optimization effort."],
  ["Throughput and goodput","Raw output versus useful output after failures and waste. Goodput captures real efficiency."],
  ["Queuing theory & utilization","Latency rises sharply as utilization approaches capacity. Why headroom matters."],
  ["Benchmarking (MLPerf)","Standardized workloads for comparing systems. Useful but not identical to your workload."],
  ["Back-of-envelope estimation","Quick calculations of memory, compute and cost. Core skill in design reviews."]]],
 ["Infrastructure options","where compute comes from",[
  ["On-demand, reserved & spot capacity","Pricing tiers trading flexibility for cost. Spot is cheap but preemptible."],
  ["GPU clusters & neoclouds","Dedicated accelerator providers beside hyperscalers. Availability often decides choice."],
  ["On-premises vs. cloud","Own hardware versus rented. Depends on utilization and data constraints."],
  ["Job schedulers (Slurm, Kubernetes, Ray)","Systems placing workloads on shared resources. Different strengths for HPC and cloud-native teams."],
  ["Multi-tenancy & GPU sharing (MIG, time-slicing)","Divide a GPU among workloads. Improves utilization for small models."],
  ["Power, cooling & datacenter limits","Energy and heat cap what can be deployed. Increasingly a strategic constraint."],
  ["Sustainability & carbon accounting","Measure emissions of training and serving. Influences region and scheduling choices."]]]
 ]}
);
