/* Band C — Shipping: serving, MLOps delivery, and monitoring. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"C1",band:"C",name:"Model Serving & Inference Infrastructure",sum:"Running models for real traffic.",deps:["A1","A3","B2"],
 overview:"Serving turns a trained model into a reliable service. This region covers serving patterns, inference runtimes and optimization, batching, LLM-specific serving techniques, and deployment topologies from cloud to edge.",
 why:"Inference is where models meet users and where most ongoing cost accrues. Latency, throughput and cost per request are decided by serving architecture as much as by the model itself.",
 subs:[
 ["Serving patterns","how predictions are delivered",[
  ["Online (real-time) inference","Respond to individual requests within milliseconds to seconds. Used for interactive products."],
  ["Batch inference","Score large datasets on a schedule. Cheaper and simpler when latency is not required."],
  ["Streaming inference","Predict continuously on event streams. Used for fraud and monitoring."],
  ["Model-as-a-service vs. embedded model","Call a remote endpoint or ship the model in the app. Tradeoffs in latency, privacy and update speed."],
  ["Precomputation & caching","Compute predictions ahead of time or reuse results. Cheapest way to cut latency."],
  ["Multi-model & ensemble serving","Route requests across models or combine them. Increases complexity and cost."],
  ["Serverless & scale-to-zero inference","Run on demand without idle capacity. Cold starts hurt latency."]]],
 ["Inference runtimes & optimization","making one model fast",[
  ["Model export formats (ONNX, TorchScript, SavedModel)","Portable model representations. Decouple training from serving."],
  ["TensorRT, OpenVINO & vendor runtimes","Optimizing compilers for specific hardware. Fuse layers and select kernels."],
  ["Quantization (PTQ, QAT)","Use lower-precision weights and activations after or during training. Cuts memory, latency and cost."],
  ["Pruning & sparsity","Remove unimportant weights. Gains need hardware support."],
  ["Knowledge distillation","Train a small model to mimic a large one. Common route to cheap serving."],
  ["Graph optimization & operator fusion","Rewrite computation graphs for fewer memory passes. Basic compiler gains."],
  ["Warm-up & cold-start handling","Pre-load and pre-compile models. Avoid slow first requests."]]],
 ["Batching & concurrency","using hardware efficiently",[
  ["Dynamic batching","Group concurrent requests into one forward pass. Raises throughput at modest latency cost."],
  ["Continuous (in-flight) batching","Add and remove sequences from a batch at each generation step. Key to high LLM throughput."],
  ["Request queuing & scheduling","Order requests by priority or deadline. Controls tail latency."],
  ["Model instances & GPU concurrency","Run several copies or streams per device. Improves utilization for small models."],
  ["Triton Inference Server & BentoML","General serving frameworks with batching and multi-model support. Common production choices."],
  ["Autoscaling on custom metrics","Scale replicas by queue depth or GPU load rather than CPU. Matches accelerator workloads."],
  ["Load shedding & admission control","Reject excess work to protect latency. Prevent cascading overload."]]],
 ["LLM inference systems","special challenges of generation",[
  ["Prefill vs. decode phases","Prompt processing is compute-bound; token generation is memory-bound. Optimized separately."],
  ["KV cache","Stored attention keys and values for generated tokens. Dominates memory in long-context serving."],
  ["PagedAttention & vLLM","Manage KV cache in pages to avoid fragmentation. Raises batch sizes and throughput."],
  ["Speculative decoding","A small draft model proposes tokens that the large model verifies in parallel. Lowers latency without changing outputs."],
  ["Prefix & prompt caching","Reuse computation for shared prompt prefixes. Cuts cost for long system prompts and documents."],
  ["Tensor-parallel & disaggregated serving","Split models across GPUs or separate prefill and decode pools. Used for large models."],
  ["Inference engines (vLLM, TensorRT-LLM, SGLang, llama.cpp)","Specialized runtimes for LLMs. Differ in features and hardware support."]]],
 ["Deployment topologies","where inference runs",[
  ["Regional deployment & multi-region","Place models near users and for resilience. Balances latency and cost."],
  ["Edge & on-device inference","Run on phones, vehicles or gateways. Offers privacy and low latency with tight limits."],
  ["Hybrid cloud–edge routing","Send easy requests to small local models and hard ones to the cloud. Reduces cost."],
  ["Model gateways & routers","A single entry point handling auth, routing and fallback. Standard in multi-model setups."],
  ["GPU pooling & multi-tenant clusters","Share accelerators across teams and models. Higher utilization with isolation concerns."],
  ["Managed inference endpoints","Cloud services that host models. Trade control for convenience."],
  ["Self-hosting vs. API providers","Run your own models or call hosted ones. Depends on cost, control and compliance."]]]
 ]},

{ref:"C2",band:"C",name:"MLOps: Delivery & Lifecycle",sum:"CI/CD, registries and safe rollouts for models.",deps:["B1","B3","C1"],
 overview:"MLOps applies DevOps practices to machine learning. This region covers automated pipelines for training and deployment, model registries, release strategies, retraining triggers and maturity models of ML operations.",
 why:"A model that cannot be retrained, versioned and rolled back safely becomes a liability. Mature delivery practice shortens the path from improvement to production and limits the damage of bad releases.",
 subs:[
 ["CI/CD for ML","automating the path to production",[
  ["Continuous training (CT)","Automated retraining on new data. Adds a loop beyond ordinary CI/CD."],
  ["Training pipelines","Orchestrated steps from data validation to evaluation and registration. Make retraining routine."],
  ["Pipeline orchestration (Kubeflow, Vertex, SageMaker Pipelines)","Managed or open frameworks for ML workflows. Provide caching and lineage."],
  ["Automated evaluation gates","Block promotion unless metrics and tests pass. Enforce quality."],
  ["GitOps for ML","Declare desired deployments in version control. Auditable and reversible."],
  ["Environment promotion (dev, staging, prod)","Move artifacts through increasing realism. Catches environment-specific issues."],
  ["Infrastructure and pipeline testing","Test the delivery system itself. Prevents silent breakages."]]],
 ["Registries & artifacts","tracking what ships",[
  ["Model registry","Versioned store of models with stages and metadata. Source of truth for deployment."],
  ["Model versioning & lineage","Link versions to data, code and metrics. Needed for audit and rollback."],
  ["Stage transitions & approvals","Staging, production and archived states with sign-off. Governance mechanism."],
  ["Model packaging & signatures","Bundle weights, code and input-output schemas. Prevent interface mismatch."],
  ["Container images & artifact repositories","Store built images and dependencies. Ensure repeatable deployment."],
  ["Prompt and config registries","Version prompts, parameters and retrieval settings. Needed for LLM applications."],
  ["Dataset and feature versions in registries","Tie models to training inputs. Complete lineage."]]],
 ["Release strategies","deploying safely",[
  ["Shadow deployment","Run a new model on live traffic without affecting users. Compare outputs risk-free."],
  ["Canary releases","Send a small share of traffic to the new version and watch metrics. Limit blast radius."],
  ["Blue–green deployment","Switch traffic between two full environments. Enables instant rollback."],
  ["A/B testing & interleaving in releases","Randomized exposure to measure impact. Confirms business value."],
  ["Gradual rollout & feature flags","Control exposure by flag or percentage. Decouple deploy from release."],
  ["Rollback & version pinning","Return to a known good model quickly. Must be rehearsed."],
  ["Multi-armed bandit rollouts","Adaptively shift traffic toward better variants. Faster learning than fixed splits."]]],
 ["Retraining & lifecycle","keeping models current",[
  ["Retraining triggers","Schedule-based, drift-based or performance-based. Balance freshness and cost."],
  ["Champion–challenger","Continually compare a candidate to the deployed model. Basis of safe updates."],
  ["Online and incremental learning","Update models continuously from streams. Powerful but riskier."],
  ["Model retirement & deprecation","Decommission old models and consumers. Reduces maintenance burden."],
  ["Backward compatibility of outputs","Keep scores and schemas stable for downstream users. Avoid breakage."],
  ["Feedback loops & delayed labels","Collect ground truth after the fact and handle lag. Needed to measure real accuracy."],
  ["Human-in-the-loop review","Route uncertain cases to people. Improves quality and generates labels."]]],
 ["Maturity & organization","how teams operate",[
  ["MLOps maturity levels","Stages from manual processes to full automation. Frame roadmaps."],
  ["ML platform engineering","Internal platforms offering self-service tools. Reduce duplicated effort."],
  ["Roles: data scientist, ML engineer, SRE","Different responsibilities along the lifecycle. Clear ownership prevents gaps."],
  ["Hidden technical debt in ML systems","Glue code, pipeline jungles and entangled features. A classic warning from industry experience."],
  ["ML test score & production readiness","Checklists for readiness of ML systems. Guide reviews."],
  ["Build vs. buy for ML tooling","Weigh in-house platforms against managed products. Depends on scale and skills."],
  ["Managed platforms (SageMaker, Vertex AI, Azure ML, Databricks)","Cloud ML suites. Speed adoption with lock-in."]]]
 ]},

{ref:"C3",band:"C",name:"Monitoring, Observability & Drift",sum:"Knowing when a deployed model is going wrong.",deps:["B1","C1"],
 overview:"Models degrade silently as the world changes. This region covers system and model monitoring, data and concept drift detection, quality measurement without labels, alerting, and debugging production behavior.",
 why:"Unlike ordinary software, an ML system can be fully healthy by every infrastructure metric and still give wrong answers. Monitoring that links data, predictions and outcomes is how that is caught.",
 subs:[
 ["Observability fundamentals","seeing inside services",[
  ["Metrics, logs & traces","The three pillars of observability. Provide counts, events and request paths."],
  ["Golden signals (latency, traffic, errors, saturation)","Four core service health indicators. Starting dashboards for any endpoint."],
  ["Distributed tracing (OpenTelemetry)","Follow a request across services. Locates latency in multi-stage pipelines."],
  ["GPU and hardware telemetry","Utilization, memory, temperature and errors. Used for capacity and fault detection."],
  ["Service level indicators & objectives (SLIs, SLOs)","Measured quality targets for a service. Basis of reliability management."],
  ["Error budgets","Allowed unreliability under an SLO. Governs release pace."],
  ["Alerting design & alert fatigue","Page only on actionable symptoms. Too many alerts are ignored."]]],
 ["Model & data monitoring","watching predictions",[
  ["Prediction & input distribution monitoring","Track statistics of features and outputs. Early indicator of change."],
  ["Data quality monitoring","Check nulls, ranges and schema in production. Catch pipeline breakage."],
  ["Performance monitoring with delayed labels","Compute accuracy once ground truth arrives. True quality measure."],
  ["Proxy metrics without labels","Use confidence, agreement or business signals as stand-ins. Provide earlier warning."],
  ["Slice and cohort monitoring","Track subgroups separately. Averages hide localized failures."],
  ["Fairness monitoring","Measure disparities over time. Part of responsible operation."],
  ["Monitoring tools (Evidently, Arize, WhyLabs)","Specialized platforms for ML observability. Reduce custom work."]]],
 ["Drift detection","when the world changes",[
  ["Covariate (data) drift","Input distribution shifts. May or may not hurt accuracy."],
  ["Label (prior) shift","Class frequencies change. Affects calibration."],
  ["Concept drift","The relationship between inputs and outputs changes. Requires retraining."],
  ["Statistical tests (KS, chi-square, PSI)","Compare distributions between reference and current windows. Common detection tools."],
  ["Divergence measures (KL, Jensen–Shannon, Wasserstein)","Quantify distribution difference. Choice affects sensitivity."],
  ["Embedding drift","Compare representation distributions for text or images. Handles unstructured data."],
  ["Reference windows & thresholds","Choose baselines and alert limits. Control false alarms."]]],
 ["Debugging production models","finding root causes",[
  ["Prediction logging & replay","Store inputs and outputs for later analysis. Allow reproduction of incidents."],
  ["Explainability in production (SHAP, attribution)","Explain individual predictions. Support debugging and trust."],
  ["Error analysis & slicing","Cluster failures to find patterns. Guides data collection."],
  ["Incident response for ML","Triage, mitigate, roll back and postmortem. Adapted from SRE practice."],
  ["Feedback and user signals","Use corrections, clicks and complaints as signals. Cheap, noisy labels."],
  ["Canary analysis & regression detection","Compare releases on real traffic. Detect regressions early."],
  ["Data and model lineage in debugging","Trace a bad prediction to data, code and model version. Speeds root-cause work."]]],
 ["Business & outcome monitoring","does it matter",[
  ["Business KPIs vs. model metrics","Link technical quality to revenue or user outcomes. Ultimate success measure."],
  ["Long-term & delayed effects","Impacts appear after weeks or months. Hard to attribute."],
  ["Feedback loops & performative effects","Predictions change the data they will be trained on. Can cause drift or bias."],
  ["Cost monitoring & unit economics","Track cost per prediction or user. Essential for sustainability."],
  ["Model usage analytics","Who calls which model, how often. Guides capacity and deprecation."],
  ["Compliance and audit logging","Retain records of decisions and versions. Required in regulated settings."],
  ["Dashboards for stakeholders","Communicate health simply to non-engineers. Align expectations."]]]
 ]}
);
