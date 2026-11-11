/* Band B — Building: data pipelines, training at scale, and development workflow. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"B1",band:"B",name:"Data Pipelines & Feature Management",sum:"Turning raw data into reliable training and serving inputs.",deps:["A1","A2"],
 overview:"Pipelines move and transform data from sources to models. This region covers batch and streaming processing, orchestration, feature engineering and feature stores, and the training-serving consistency problem.",
 why:"The most common production ML bug is a mismatch between how features were computed for training and how they are computed at serving time. Solid pipeline design removes that class of failure.",
 subs:[
 ["Batch & streaming processing","moving and transforming data",[
  ["ETL vs. ELT","Transform before loading or load first and transform in the warehouse. Modern stacks favor ELT."],
  ["Batch processing (Spark, Beam)","Process bounded datasets in scheduled jobs. Simple and efficient for training sets."],
  ["Stream processing (Flink, Kafka Streams)","Continuously process unbounded event streams. Needed for fresh features and real-time models."],
  ["Lambda & Kappa architectures","Combine batch and stream layers or use streams only. Aim to avoid duplicated logic."],
  ["Event time, windows & watermarks","Handle out-of-order events by assigning them to time windows. Core to correct streaming aggregates."],
  ["Change data capture (CDC)","Stream database changes to downstream systems. Keeps stores in sync."],
  ["Exactly-once processing","Guarantee each event affects results once. Hard to achieve end to end."]]],
 ["Orchestration","coordinating jobs",[
  ["Workflow DAGs","Tasks with dependencies run in order. Standard model for pipelines."],
  ["Airflow, Dagster & Prefect","Orchestrators for scheduling, retries and monitoring. Choice shapes developer experience."],
  ["Retries, backfills & idempotent tasks","Re-run failed or historical jobs safely. Require deterministic, repeatable steps."],
  ["Data-aware scheduling","Trigger work when upstream data arrives rather than by clock. Reduces stale or empty runs."],
  ["Pipeline testing & staging","Validate pipelines on samples before production. Catch schema and logic errors."],
  ["SLAs & alerting for pipelines","Monitor lateness and failure. Tied to model freshness."],
  ["Declarative pipelines & dbt","Define transformations as versioned SQL models. Brings software practices to analytics."]]],
 ["Feature engineering","making signals for models",[
  ["Feature transformations","Scaling, encoding, bucketing and aggregation. Must be reproduced identically at serving."],
  ["Categorical & high-cardinality encoding","One-hot, target and hashed or learned embeddings. Tradeoffs in memory and leakage."],
  ["Time-window aggregates","Counts and averages over recent periods. Staple features in fraud and recommendation."],
  ["Point-in-time correctness","Join features as they were known at the prediction time. Prevents future leakage in training sets."],
  ["Embeddings as features","Learned vector representations reused downstream. Require versioning with the model that made them."],
  ["Text, image & multimodal preprocessing","Tokenization, resizing and augmentation. Often a throughput bottleneck."],
  ["Feature selection & importance","Remove unhelpful or costly features. Reduces serving cost."]]],
 ["Feature stores","shared, consistent features",[
  ["Feature store concept","A system managing feature definitions, offline storage and online serving. Aims for reuse and consistency."],
  ["Offline vs. online store","Large historical store for training and low-latency store for inference. Kept in sync by materialization."],
  ["Materialization & backfill","Compute and load feature values into stores. Controls freshness and cost."],
  ["Feast, Tecton & managed stores","Open-source and commercial options. Differ in streaming and governance support."],
  ["Feature registry & ownership","Catalog of features with definitions and owners. Enables reuse across teams."],
  ["Feature freshness & TTL","How old a value may be at serving. Stale features degrade predictions."],
  ["On-demand features","Compute features at request time from request data. Needed when values cannot be precomputed."]]],
 ["Training–serving consistency","avoiding skew",[
  ["Training–serving skew","Differences between training and production inputs or code. A leading cause of silent model degradation."],
  ["Shared transformation code","Use the same logic in both paths. Simplest defense against skew."],
  ["Logging served features","Record exact inputs at prediction time. Allows training on what the model actually saw."],
  ["Shadow comparison of features","Compare online and offline values. Detects drift between paths."],
  ["Schema enforcement at serving","Validate request fields and types. Prevents malformed inputs."],
  ["Data validation in pipelines (TFDV)","Compute statistics and detect anomalies against a baseline. Gate bad data before training."],
  ["Reproducible datasets","Pin queries, snapshots and code versions. Allow exact retraining."]]]
 ]},

{ref:"B2",band:"B",name:"Training at Scale",sum:"Distributed training, efficiency and fault tolerance.",deps:["A3","B1"],
 overview:"Large models and datasets require splitting work across many accelerators. This region covers data, tensor, pipeline and sharded parallelism, memory-saving techniques, efficient data loading, and fault tolerance for long-running jobs.",
 why:"Training cost is dominated by how well hardware is kept busy. Knowing the parallelism strategies and their communication costs determines whether a run is feasible and affordable.",
 subs:[
 ["Parallelism strategies","splitting the work",[
  ["Data parallelism","Replicate the model and split batches, averaging gradients. The simplest and most common approach."],
  ["Tensor (model) parallelism","Split individual layers across devices. Needs fast interconnect inside a node."],
  ["Pipeline parallelism","Place consecutive layers on different devices and stream micro-batches. Trades bubbles for memory savings."],
  ["Sequence & context parallelism","Split long sequences across devices. Enables long-context training."],
  ["Expert parallelism for MoE","Distribute experts across devices and route tokens. Adds all-to-all communication."],
  ["3D and 4D parallelism","Combine data, tensor, pipeline and other schemes. Used for the largest models."],
  ["Parallelism mapping to topology","Put chatty parallel groups on fast links. Key to scaling efficiency."]]],
 ["Sharding & memory optimization","fitting models in memory",[
  ["ZeRO","Shard optimizer state, gradients and parameters across data-parallel workers. Cuts memory per device."],
  ["FSDP","PyTorch fully sharded data parallelism that gathers parameters when needed. Standard way to train large models."],
  ["Activation checkpointing","Recompute activations in backward pass instead of storing them. Trades compute for memory."],
  ["Gradient accumulation","Sum gradients over several micro-batches before updating. Simulates larger batch sizes."],
  ["Optimizer state offloading","Move states to CPU or NVMe. Allows larger models at a speed cost."],
  ["Mixed-precision training & loss scaling","Compute in low precision while keeping master weights in higher. Standard for speed and memory."],
  ["Parameter-efficient fine-tuning (LoRA)","Train small adapter weights instead of the full model. Greatly lowers memory and storage."]]],
 ["Data loading & throughput","feeding accelerators",[
  ["Input pipeline bottlenecks","Slow loading leaves GPUs idle. Often the first thing to fix."],
  ["Prefetching, caching & parallel workers","Overlap loading with computation. Standard throughput techniques."],
  ["Streaming datasets from object storage","Read shards directly during training. Avoids copying large datasets."],
  ["Shuffling at scale","Randomize order across shards and workers. Affects convergence and reproducibility."],
  ["Deduplication & filtering","Remove duplicates and low-quality items. Improves efficiency and quality."],
  ["Tokenization pipelines & packing","Pre-tokenize and pack sequences to avoid padding. Increases utilization."],
  ["Data mixtures & curriculum","Weight sources and order of examples. Strong lever on model behavior."]]],
 ["Frameworks & tooling","what teams use",[
  ["PyTorch & torch.distributed","Dominant framework with distributed primitives. Basis for most research and production."],
  ["JAX & XLA","Functional framework with compiler-driven parallelism. Used heavily on TPUs."],
  ["DeepSpeed, Megatron-LM & NeMo","Libraries implementing large-scale parallelism recipes. Reference implementations."],
  ["Hugging Face Accelerate & Trainer","Higher-level wrappers for multi-device training. Lower barrier to entry."],
  ["Ray Train & distributed orchestration","Run training jobs on elastic clusters. Integrates with data and tuning."],
  ["Compilers (torch.compile, XLA, Triton)","Fuse operations and generate efficient kernels. Raise utilization without model changes."],
  ["Kernel fusion & FlashAttention","Combine operations and avoid memory round trips. Major speedups for transformers."]]],
 ["Reliability of long runs","surviving failures",[
  ["Checkpointing strategies","Periodically save state to resume after failure. Frequency trades overhead against lost work."],
  ["Asynchronous & sharded checkpoints","Write without stalling training and across many files. Needed at large scale."],
  ["Elastic & fault-tolerant training","Continue after losing or adding workers. Important on spot capacity."],
  ["Hardware failure rates","Large clusters see frequent GPU, link and node faults. Plan for failures as normal."],
  ["Loss spikes & divergence handling","Instabilities in large runs; remedies include rollback and skipping batches. Require monitoring."],
  ["Silent data corruption","Hardware faults that produce wrong results unnoticed. Detected through checksums and redundancy."],
  ["Straggler detection","Slow workers hold back synchronous steps. Found by per-rank timing."]]],
 ["Efficiency & tuning","getting more per dollar",[
  ["Batch size and learning rate scaling","Larger batches need adjusted learning rates and warmup. Limits to useful scale exist."],
  ["Scaling laws & compute-optimal training","Relations between loss, parameters, data and compute. Guide budget allocation."],
  ["Hyperparameter search at scale","Random, Bayesian and population methods. Costly without early stopping."],
  ["Early stopping & successive halving","Stop poorly performing trials early and give the budget to promising ones. Saves substantial compute."],
  ["Profiling training runs","Use traces to find idle time and communication stalls. Starting point for tuning."],
  ["Overlapping communication and computation","Start gradient exchange while backward pass continues. Hides network cost."],
  ["Cost per token or per sample trained","Normalized training cost metric. Basis for comparisons."]]]
 ]},

{ref:"B3",band:"B",name:"Experimentation, Reproducibility & Development Workflow",sum:"Managing the messy iteration loop of ML work.",deps:["A1","A2"],
 overview:"Model development is empirical and iterative. This region covers experiment tracking, reproducibility, evaluation discipline, notebooks to production code, and the workflow tools that keep a team's results trustworthy.",
 why:"Without tracking and reproducibility, teams cannot explain why a model changed or recover a good one. Disciplined workflow is what turns experiments into assets.",
 subs:[
 ["Experiment tracking","recording what was tried",[
  ["Experiment tracker (MLflow, W&B, Neptune)","Log parameters, metrics, artifacts and code versions for each run. Make results comparable."],
  ["Run metadata & lineage","Link runs to data, code and environment. Allow reconstruction."],
  ["Metric logging & dashboards","Visualize training progress. Used for debugging and comparison."],
  ["Artifact management","Store checkpoints, plots and datasets for each run. Keep outputs findable."],
  ["Hyperparameter sweeps","Systematic exploration of configurations. Integrated with trackers."],
  ["Run comparison & leaderboards","Rank experiments by chosen metrics. Needs consistent evaluation."],
  ["Notes, tags & experiment hygiene","Annotate intent and outcome. Prevent repeated work."]]],
 ["Reproducibility","getting the same result again",[
  ["Random seeds & nondeterminism","Seeds fix randomness, but GPU kernels and parallelism can still vary. Perfect reproducibility is costly."],
  ["Environment capture","Record library versions and hardware. Containers and lock files do this."],
  ["Configuration management (Hydra, YAML)","Separate settings from code and version them. Make experiments declarative."],
  ["Data and code versioning together","Pin commit and dataset snapshot. Required for audits."],
  ["Deterministic data pipelines","Fix order and splits. Avoid accidental differences."],
  ["Reproducibility vs. replicability","Same code and data versus independent confirmation. Different standards."],
  ["Reporting variance across seeds","Run several seeds and give intervals. Prevents overclaiming."]]],
 ["Evaluation discipline","honest measurement",[
  ["Offline metrics & proxy alignment","Metrics computed on held-out data. May not reflect online business impact."],
  ["Validation vs. test sets","Tune on validation, report on untouched test. Prevents overfitting to the benchmark."],
  ["Slice-based evaluation","Measure performance across subgroups or conditions. Reveals hidden failures."],
  ["Baselines & ablations","Compare against simple references and remove components. Essential for credible gains."],
  ["Online experimentation (A/B testing)","Randomized comparison in production. The ultimate test of impact."],
  ["Counterfactual & interleaving evaluation","Methods for ranking and recommendation tests. Higher sensitivity."],
  ["Test-set contamination","Evaluation data leaking into training. Especially problematic for large web-trained models."]]],
 ["From notebook to production","making work durable",[
  ["Notebooks vs. modules","Exploration in notebooks, logic in tested modules. Smooths hand-off."],
  ["Project structure & packaging","Organized repos with installable packages. Enable reuse."],
  ["Pipelines as code","Convert experiments into orchestrated steps. Allow scheduled retraining."],
  ["Unit and property tests for ML code","Test transformations and invariants. Catch silent errors."],
  ["Model and data tests","Check behavior on canonical cases and metrics thresholds. Gate releases."],
  ["Code quality tooling","Linting, typing and formatting. Reduce defects."],
  ["Working with research code","Adapt prototypes for production. Requires refactoring and validation."]]],
 ["Collaboration & knowledge","team practices",[
  ["Model cards & documentation","Describe intended use, data and limits. Support responsible handoff."],
  ["Datasheets for datasets","Document how data was collected and its limits. Improve transparency."],
  ["Reviews of experiments and results","Peer scrutiny of methodology. Catches errors."],
  ["Knowledge bases & postmortems","Record lessons from failures. Build institutional memory."],
  ["Shared compute and quota management","Allocate scarce GPUs fairly. Reduces conflict."],
  ["Research-to-production handoff","Define criteria for promotion. Avoids throwing models over the wall."],
  ["Responsible experimentation","Consider ethics, privacy and bias in studies. Increasingly required."]]]
 ]}
);
