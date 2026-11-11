/* Band D — Frontier: LLMOps, cost and latency, reliability. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"D1",band:"D",name:"LLMOps & Generative AI Systems",sum:"Operating applications built on foundation models.",deps:["C1","C2","C3"],
 overview:"LLM applications add prompts, retrieval, tools and non-deterministic outputs to the engineering stack. This region covers prompt and context management, RAG infrastructure, evaluation of generative systems, guardrails, and the operational patterns of agentic applications.",
 why:"Most new AI products are built on foundation models, where quality cannot be asserted by a single accuracy number. Evaluation, guardrails and observability are the production disciplines that make these systems dependable.",
 subs:[
 ["Prompt & context engineering as systems work","managing the inputs",[
  ["Prompt versioning & templates","Treat prompts as versioned artifacts with tests. Changes can alter behavior as much as code."],
  ["Context window management","Select and order content to fit token limits. Affects quality and cost."],
  ["Prompt caching & compression","Reuse static prefixes and shorten inputs. Reduce latency and spend."],
  ["Structured outputs & schema-constrained decoding","Force valid JSON or grammar-conforming output. Make results machine-consumable."],
  ["Prompt injection & input handling","Untrusted text can override instructions. A primary security risk for LLM apps."],
  ["System prompts & policy layers","Persistent instructions that define behavior. Need governance and testing."],
  ["Model routing & fallback chains","Choose models by task difficulty and fall back on failure. Balance quality and cost."]]],
 ["Retrieval-augmented generation infrastructure","grounding with data",[
  ["Ingestion & chunking pipelines","Parse, split and embed documents into an index. Chunking choices strongly affect retrieval."],
  ["Embedding model selection & versioning","Embeddings must match between index and query. Changing models requires reindexing."],
  ["Vector search & hybrid retrieval","Combine dense similarity with keyword search. Improves recall."],
  ["Reranking","A second-stage model reorders candidates for relevance. Raises precision at some latency."],
  ["Index freshness & incremental updates","Keep the index current with sources. Staleness leads to wrong answers."],
  ["Access control in retrieval","Respect document permissions at query time. Prevent data leaks."],
  ["RAG failure modes","Missed retrieval, irrelevant context, or ignored context. Diagnosed by evaluating retrieval and generation separately."]]],
 ["Evaluating generative systems","measuring open-ended quality",[
  ["Evaluation datasets & golden sets","Curated examples with expected behavior. Foundation of regression testing."],
  ["LLM-as-judge","Use a model to grade outputs against a rubric. Scalable but biased and must be calibrated."],
  ["Reference-based vs. reference-free metrics","Compare to gold answers or judge on qualities directly. Each has blind spots."],
  ["RAG evaluation (faithfulness, relevance, context recall)","Metrics specific to grounded generation. Frameworks like RAGAS provide them."],
  ["Human evaluation & preference collection","People rate or compare outputs. Gold standard, expensive."],
  ["Continuous evaluation in CI","Run eval suites on every prompt or model change. Prevent regressions."],
  ["Online evaluation & production sampling","Score live traffic samples. Find issues offline sets miss."]]],
 ["Guardrails & safety layers","controlling behavior",[
  ["Input and output filters","Classifiers that block or modify unsafe content. Add layered defense."],
  ["PII detection & redaction","Remove personal data before storage or model calls. Reduces privacy risk."],
  ["Hallucination mitigation","Grounding, citations and verification steps. Lower but do not eliminate errors."],
  ["Policy enforcement & moderation","Apply organizational rules to content. Tailored to product."],
  ["Jailbreak and adversarial testing","Probe for bypasses with red-team prompts. Ongoing practice."],
  ["Tool permission boundaries","Limit what agents can do and require approval for risky actions. Core of agent safety."],
  ["Refusal handling & user messaging","Respond gracefully when blocking. Affects experience."]]],
 ["Agentic application operations","running multi-step LLM systems",[
  ["Tracing for LLM applications","Record each call, tool use and retrieval in a trace. Tools include LangSmith, Langfuse and Phoenix."],
  ["Tool and API reliability","Agents depend on external services that fail. Need retries and timeouts."],
  ["Long-running & asynchronous agent jobs","Persist state across steps and failures. Use durable workflow engines."],
  ["Cost control for agent loops","Cap steps and tokens to prevent runaway spend. Essential safeguard."],
  ["Evaluation of trajectories","Judge whole task completion, not single replies. Harder but more meaningful."],
  ["Model Context Protocol & tool standards","Common interface connecting models to tools and data. Reduces integration work."],
  ["Human approval workflows","Pause for review before consequential actions. Balance autonomy and safety."]]]
 ]},

{ref:"D2",band:"D",name:"Cost & Latency Engineering",sum:"Making AI systems fast and affordable.",deps:["A3","B2","C1"],
 overview:"Cost and latency are product constraints, not afterthoughts. This region covers unit economics, latency budgeting and tail behavior, model-level and system-level optimizations, caching, and capacity management.",
 why:"AI features can be technically excellent and economically unviable. Engineers who can reason about cost per request and p99 latency decide what can actually ship at scale.",
 subs:[
 ["Unit economics","what things cost",[
  ["Cost per request, token or user","Normalize spend to a unit the business understands. Basis of pricing and budgeting."],
  ["Training vs. inference cost","One-time versus recurring. Inference usually dominates for successful products."],
  ["Token pricing & input–output asymmetry","Providers charge differently for input and output tokens. Shapes prompt and output design."],
  ["Total cost of ownership","Include engineering, storage, networking and idle capacity. Often larger than GPU rent."],
  ["Utilization & idle capacity","Reserved GPUs earn nothing when idle. Primary hidden cost."],
  ["FinOps for AI","Allocate, monitor and optimize cloud spend. Tagging and showback by team."],
  ["Margin analysis for AI products","Compare revenue with serving cost per customer. Reveals unprofitable usage."]]],
 ["Latency engineering","speed as a requirement",[
  ["Latency budgets","Allocate a time limit across pipeline stages. Guides where to optimize."],
  ["Percentiles & tail latency (p95, p99)","Averages hide slow outliers. Users feel the tail."],
  ["Time to first token vs. inter-token latency","Responsiveness and streaming speed for LLMs. Different bottlenecks."],
  ["Queueing delay under load","Wait time grows rapidly near saturation. Often exceeds compute time."],
  ["Network and cold-start overheads","Connection setup and model loading. Significant for small requests."],
  ["Hedged requests & tail-at-scale tactics","Send duplicates or timeouts to cut outliers. From large-scale systems practice."],
  ["Perceived latency & streaming UX","Show progress and partial results. Improves experience without lowering real latency."]]],
 ["Model-level optimization","cheaper computation per answer",[
  ["Smaller & distilled models","Use the smallest model that meets quality. Biggest single cost lever."],
  ["Quantization for serving","Lower precision weights and caches. Cut memory and cost."],
  ["Mixture-of-experts sparsity","Activate only part of the model per token. More capability per FLOP."],
  ["Speculative decoding & multi-token prediction","Generate several tokens per step. Reduce latency."],
  ["Efficient attention variants","Grouped-query, sliding-window and linear attention. Shrink KV cache and compute."],
  ["Prompt shortening & output limits","Cut tokens without losing quality. Linear cost savings."],
  ["Cascades & routing","Try cheap models first and escalate when uncertain. Large savings with quality control."]]],
 ["System-level optimization","smarter infrastructure",[
  ["Semantic & exact-match caching","Return stored answers for repeated or similar requests. Eliminate calls entirely."],
  ["Batching and utilization tuning","Larger batches amortize weight loading. Tradeoff with latency."],
  ["Autoscaling & scheduling policies","Match capacity to demand. Predictive scaling avoids cold starts."],
  ["Spot and preemptible capacity","Use cheaper interruptible machines for batch work. Needs checkpointing."],
  ["Disaggregated prefill and decode","Separate pools tuned for each phase. Improves utilization."],
  ["Request prioritization & tiering","Serve premium or interactive traffic first. Lower-priority work fills gaps."],
  ["Batch APIs & off-peak processing","Discounted asynchronous processing. Good for non-urgent jobs."]]],
 ["Capacity planning & tradeoffs","deciding how much",[
  ["Load testing & benchmarking","Measure throughput and latency under realistic traffic. Reveals limits before users do."],
  ["Demand forecasting","Predict traffic to provision capacity. Include launches and seasonality."],
  ["Headroom & overprovisioning","Spare capacity for spikes and failures. Costs money, buys reliability."],
  ["Quality–cost–latency tradeoff curves","Plot options on the Pareto frontier. Make choices explicit."],
  ["Build vs. API economics","Break-even volume for self-hosting. Depends on utilization."],
  ["Vendor lock-in & multi-provider strategy","Abstract providers to keep leverage. Adds complexity."],
  ["Optimization priorities (measure first)","Profile, then fix the largest contributor. Avoid premature optimization."]]]
 ]},

{ref:"D3",band:"D",name:"Reliability & Resilience Patterns",sum:"Designing AI systems that fail gracefully.",deps:["A1","C1","C3"],
 overview:"Production AI systems fail in many ways: hardware, dependencies, data, and model behavior. This region covers reliability engineering concepts, resilience patterns, graceful degradation, testing for failure, and operations practices from site reliability engineering adapted to ML.",
 why:"Reliability is what users and businesses actually experience. Patterns such as timeouts, fallbacks and circuit breakers keep a model outage or degraded answer from becoming a product outage.",
 subs:[
 ["Reliability fundamentals","concepts and targets",[
  ["Availability & the nines","Fraction of time a service works, expressed as 99.9% and so on. Each added nine costs much more."],
  ["Failure modes & effects analysis","Systematically list how parts can fail and the consequences. Prioritizes defenses."],
  ["Single points of failure","Components whose failure stops the system. Found and removed in design review."],
  ["Mean time to detect and recover","Measures of operational responsiveness. Recovery speed often matters more than prevention."],
  ["Blast radius & fault isolation","Limit how far a failure spreads using cells and bulkheads. Lowers impact."],
  ["Reliability of ML-specific failures","Silent wrong answers rather than crashes. Need quality as well as uptime checks."],
  ["Service dependencies & dependency graphs","Know what depends on what. Basis for impact analysis."]]],
 ["Resilience patterns","code and architecture defenses",[
  ["Timeouts & retries with backoff","Bound waiting and retry with jittered delays. Prevent hangs and retry storms."],
  ["Circuit breakers","Stop calling a failing dependency until it recovers. Prevent cascading failure."],
  ["Bulkheads & resource isolation","Separate pools so one workload cannot starve others. Contain noisy neighbors."],
  ["Fallback models & default answers","Serve a simpler model or heuristic when the primary fails. Maintain service."],
  ["Graceful degradation","Reduce features rather than fail completely. Important for AI-heavy products."],
  ["Redundancy & failover","Duplicate components across zones or regions. Core availability mechanism."],
  ["Load shedding & backpressure","Reject or delay work to stay healthy. Protect critical paths."]]],
 ["Testing for failure","finding problems early",[
  ["Chaos engineering","Inject failures deliberately to test resilience. Builds confidence in recovery."],
  ["Load, stress & soak testing","Test peak load and long duration. Reveal leaks and bottlenecks."],
  ["Game days & disaster recovery drills","Practice responding to outages. Validate runbooks."],
  ["Regression suites for models","Fixed test sets that guard against quality loss. Run before every release."],
  ["Adversarial and edge-case testing","Test unusual inputs and attacks. Expose brittle behavior."],
  ["Canary checks and synthetic probes","Continuous end-to-end tests of live systems. Detect outages early."],
  ["Data fault injection","Corrupt or delay inputs to test pipelines and models. Reveal weak validation."]]],
 ["Operations & incident management","running the system",[
  ["On-call & escalation","Rotating responsibility with clear paths. Basic operational structure."],
  ["Incident response process","Detect, triage, mitigate, communicate and resolve. Roles and timelines reduce chaos."],
  ["Blameless postmortems","Analyze causes without blaming individuals. Produce lasting fixes."],
  ["Change management & release safety","Control and review production changes. Most incidents follow changes."],
  ["SRE practice for ML (SLOs on quality)","Set objectives for accuracy and latency together. Extends SRE to models."],
  ["Runbooks & automation","Documented, automated responses. Reduce recovery time."],
  ["Toil reduction","Automate repetitive manual work. Frees engineers for reliability improvements."]]],
 ["Data & model reliability","trustworthy intelligence",[
  ["Upstream data outages","Late or missing data breaks pipelines and features. Need fallbacks and alerts."],
  ["Model rollback & safe defaults","Revert to a previous version fast. Requires retained artifacts."],
  ["Uncertainty & abstention","Models that decline when unsure. Route to humans or defaults."],
  ["Output validation & consistency checks","Verify outputs against schemas and rules. Catch bad generations."],
  ["Determinism and versioned dependencies","Pin models, tokenizers and libraries. Prevent unexpected behavior changes, including silent provider model updates."],
  ["Provider outages & multi-vendor failover","Handle failures of external model APIs. Use routing and caching."],
  ["Disaster recovery for data and models","Backups, replication and recovery objectives (RPO and RTO). Plan for region loss."]]]
 ]}
);
