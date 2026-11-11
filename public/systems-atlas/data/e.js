/* Band E — Governance, platforms and practice. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"E1",band:"E",name:"Security, Privacy & Governance",sum:"Protecting data, models and users.",deps:["A2","C2","D1"],
 overview:"AI systems add new assets and attack surfaces: training data, model weights, prompts and outputs. This region covers security fundamentals, ML-specific threats, privacy techniques, compliance, and governance processes.",
 why:"A breach, leak or compliance failure can end a deployment regardless of model quality. Engineers who build controls in early avoid expensive rework and earn trust from security and legal teams.",
 subs:[
 ["Security fundamentals","protecting infrastructure",[
  ["Identity & access management","Control who and what can access resources. Least privilege is the guiding rule."],
  ["Secrets management","Store keys and tokens securely, not in code. Rotate regularly."],
  ["Network segmentation & zero trust","Do not trust any network location by default. Limit lateral movement."],
  ["Encryption at rest and in transit","Protect stored and moving data. Baseline requirement."],
  ["Supply-chain security","Verify dependencies, images and model files. Malicious packages and pickled models are real risks."],
  ["Audit logs & monitoring","Record access and changes. Support investigation and compliance."],
  ["Vulnerability management","Scan and patch software and containers. Continuous process."]]],
 ["ML-specific threats","attacks on models",[
  ["Data poisoning & backdoors","Corrupt training data to implant behavior. Hard to detect afterwards."],
  ["Adversarial examples","Inputs crafted to fool a model. Relevant for vision and security systems."],
  ["Model extraction & theft","Copy a model through queries or exfiltrate weights. Protect with access controls and rate limits."],
  ["Membership inference & training data extraction","Determine whether data was in training or recover it from outputs. Privacy risk, notably for large models."],
  ["Prompt injection & jailbreaks","Manipulate LLM behavior through input text. Leading application-layer threat."],
  ["Agent and tool abuse","Exploit permissions given to agents. Needs sandboxing and approvals."],
  ["Threat modeling (STRIDE, MITRE ATLAS)","Structured analysis of AI attack paths. Guides defenses."]]],
 ["Privacy engineering","protecting people's data",[
  ["Data minimization & retention limits","Collect and keep only what is needed. Reduces exposure."],
  ["Anonymization & pseudonymization","Remove or mask identifiers. Re-identification is a persistent risk."],
  ["Differential privacy","Add calibrated noise so individual records have bounded influence. Provable privacy for training and statistics."],
  ["Federated learning","Train across devices or sites without centralizing data. Reduces data movement."],
  ["Secure enclaves & confidential computing","Run workloads in hardware-isolated memory. Protect data in use."],
  ["Consent & purpose limitation","Use data only as agreed. Legal and ethical basis."],
  ["Right to deletion and machine unlearning","Remove an individual's influence from models. Technically difficult."]]],
 ["Compliance & regulation","rules that apply",[
  ["GDPR & data protection law","Rules on personal data in the EU and similar laws elsewhere. Affect data pipelines and model use."],
  ["EU AI Act & risk tiers","Regulation categorizing AI systems by risk with obligations for high-risk ones. Shapes documentation and testing."],
  ["NIST AI Risk Management Framework","Voluntary US framework for managing AI risk. Common reference."],
  ["Sector rules (HIPAA, financial, defense)","Industry-specific compliance. Impose data handling and audit requirements."],
  ["SOC 2 & ISO standards (27001, 42001)","Certifications for security and AI management systems. Often required by customers."],
  ["Data residency & sovereignty","Keep data within jurisdictions. Constrains region choice."],
  ["Export controls & model access","Restrictions on hardware and model distribution. Relevant for global deployment."]]],
 ["Governance processes","accountability in practice",[
  ["Model risk management","Assess, validate and monitor models in regulated settings. Includes independent review."],
  ["Impact assessments","Evaluate effects on people before deployment. Required in some laws."],
  ["Documentation: model cards & system cards","Describe capabilities, limits and testing. Support transparency."],
  ["Approval gates & review boards","Formal decision points before release. Balance speed and safety."],
  ["Bias and fairness audits","Measure and mitigate disparate outcomes. Ongoing, not one-time."],
  ["Provenance & content authenticity","Track origin of data and generated content. Includes watermarking and C2PA."],
  ["Incident disclosure & user recourse","Report incidents openly and offer users a way to seek remedy. Builds trust and meets legal duties."]]]
 ]},

{ref:"E2",band:"E",name:"Platforms, Cloud & Organization",sum:"The ecosystems and teams that deliver AI systems.",deps:["A1","C2"],
 overview:"AI delivery depends on platforms and how teams are organized. This region covers cloud and platform ecosystems, internal ML platforms, build-versus-buy decisions, team structures, and the skills and practices of effective AI engineering organizations.",
 why:"Technical choices are constrained by cloud, budget and team capacity. Understanding these helps an engineer propose designs that an organization can actually run.",
 subs:[
 ["Cloud AI ecosystems","what is available",[
  ["AWS (SageMaker, Bedrock)","Amazon's ML platform and managed foundation-model service. Broad infrastructure."],
  ["Google Cloud (Vertex AI, TPUs)","Google's ML platform and accelerators. Strong data tooling."],
  ["Microsoft Azure (Azure ML, OpenAI Service)","Microsoft's ML and hosted model offerings. Common in enterprises."],
  ["Databricks & Snowflake","Data platforms adding ML and LLM features. Lakehouse-centric."],
  ["Model hubs & open-weight ecosystems","Hugging Face and open models for self-hosting. Expand options."],
  ["Foundation model API providers","Hosted frontier models via API. Fastest start; limited control."],
  ["Government and secure cloud environments","Isolated regions for regulated workloads. Constrain available services."]]],
 ["Internal ML platforms","self-service for teams",[
  ["Platform as a product","Treat internal tools as products with users and roadmaps. Improves adoption."],
  ["Golden paths & templates","Opinionated defaults for common workflows. Speed delivery with consistency."],
  ["Self-service training and deployment","Teams launch jobs without ticket queues. Reduces friction."],
  ["Multi-tenancy, quotas & chargeback","Share infrastructure with fair allocation and cost accounting. Needed at scale."],
  ["Notebook and development environments","Managed workspaces with data access and GPUs. Developer productivity."],
  ["Shared feature, model and prompt catalogs","Discoverable shared assets that teams can reuse. Reduces duplicated work."],
  ["Platform metrics (lead time, adoption)","Measure the platform's effectiveness. DORA-style metrics."]]],
 ["Decisions & tradeoffs","choosing wisely",[
  ["Build vs. buy vs. open source","Weigh control, cost, speed and risk. No single right answer."],
  ["Vendor lock-in & portability","Dependency on proprietary services. Mitigate with open formats and abstraction."],
  ["Start simple: baselines before complexity","Try rules and linear models first. Often sufficient."],
  ["ROI and business case for AI","Estimate value against full cost. Prevent projects with no payoff."],
  ["Technical risk assessment","Identify data, feasibility and operational risks early. Informs go or no-go."],
  ["Architecture reviews & trade-off analysis","Compare alternatives against criteria. Document reasoning."],
  ["Time to value","Speed of first useful release. Often favors managed services."]]],
 ["Teams & roles","who does what",[
  ["ML engineer, data engineer & platform engineer","Complementary roles across modeling, data and infrastructure. Boundaries vary by company."],
  ["Embedded vs. centralized ML teams","Teams inside products or a shared group. Different coordination costs."],
  ["Product management for AI","Define problems, metrics and acceptable error. Distinct from ordinary product work."],
  ["Domain experts & labelers","Subject specialists shaping data and evaluation. Critical in specialized fields."],
  ["Security, legal & compliance partnership","Involve early. Prevents late-stage blocks."],
  ["Hiring, onboarding & skills development","Build capability systematically. Important in fast-moving fields."],
  ["Communication with stakeholders","Explain uncertainty and tradeoffs plainly. Core engineering skill."]]],
 ["Delivery practices","how work gets done",[
  ["Agile and iterative delivery for ML","Short cycles with experiments and checkpoints. Adapted for uncertainty."],
  ["Spike and prototype to production path","Validate feasibility quickly, then harden. Avoid shipping prototypes as is."],
  ["Documentation & knowledge sharing","Keep decisions findable. Reduce bus factor."],
  ["Project scoping & milestones for ML","Define success metrics and kill criteria. Handle research uncertainty."],
  ["Technical leadership & mentoring","Guide design choices and develop other engineers. Multiplies a team's impact."],
  ["Open-source contribution & community","Use and improve shared tools. Influence direction and attract talent."],
  ["Staying current","Track papers, releases and tooling. Necessary but selective."]]]
 ]},

{ref:"E3",band:"E",name:"Reference Architectures & Open Problems",sum:"Complete system patterns and unsolved engineering questions.",deps:["B1","C1","D1","D3"],
 overview:"Individual techniques come together in recognizable system designs. This region sketches reference architectures for common AI products, then lists open problems in evaluation, efficiency, reliability and the engineering of increasingly autonomous systems.",
 why:"Seeing complete designs shows how the pieces trade off against each other and gives a vocabulary for design interviews and reviews. The open problems point to where engineering practice is still being written.",
 subs:[
 ["Classic ML system designs","predictive products",[
  ["Recommendation system architecture","Candidate generation, ranking and re-ranking with feature stores and feedback loops. Multi-stage by necessity."],
  ["Fraud detection pipeline","Streaming features, low-latency scoring and human review. Needs fast adaptation to adversaries."],
  ["Search and ranking system","Retrieval, learning to rank and online experiments. Blends IR and ML."],
  ["Demand forecasting platform","Batch pipelines with hierarchical forecasts and monitoring. Often not deep learning."],
  ["Computer vision inspection system","Camera ingestion, edge inference, review queue and retraining loop. Constrained by latency and data."],
  ["Ads and bidding system","Real-time prediction under strict latency and budget. Calibration is vital."],
  ["Batch scoring and decision engine","Scheduled scoring feeding downstream actions. Simple and common."]]],
 ["Generative AI system designs","LLM-based products",[
  ["RAG chatbot architecture","Ingestion, index, retrieval, generation, guardrails and evaluation. The default enterprise pattern."],
  ["Coding assistant architecture","Context from repositories, model routing and execution feedback. Latency-sensitive."],
  ["Agentic workflow platform","Planner, tools, memory, sandbox and approval layers. Durable orchestration required."],
  ["Document processing pipeline","OCR, extraction, validation and human review. Mixes models and rules."],
  ["Multimodal and voice assistants","Streaming speech, vision and language with tight latency. Complex pipelines."],
  ["LLM gateway & platform","Central routing, quotas, logging and safety for many applications. Common platform building block."],
  ["Fine-tuning and evaluation factory","Data curation, training, eval and deployment as a loop. Industrializes customization."]]],
 ["Design method","how to think through a system",[
  ["Clarify requirements & constraints","Define users, scale, latency, quality and cost. First step of any design."],
  ["Choose metrics: offline, online, business","Connect model measures to outcomes. Prevent optimizing the wrong thing."],
  ["Back-of-envelope sizing","Estimate traffic, storage and compute. Reveals feasibility."],
  ["Data flow and component diagram","Sketch sources, pipelines, stores and services. Aligns the team."],
  ["Failure and tradeoff discussion","Examine what breaks and what is sacrificed. Marks real expertise."],
  ["Iterative rollout plan","Phase delivery with measurement. Reduces risk."],
  ["Cost, security & compliance review","Check non-functional requirements. Often skipped, then regretted."]]],
 ["Open engineering problems","where practice is unsettled",[
  ["Evaluating non-deterministic and agentic systems","No consensus on reliable, cheap evaluation. Central to LLMOps."],
  ["Reliability of foundation-model dependencies","Provider changes can alter behavior silently. Calls for versioning and contracts."],
  ["Efficient long-context and memory systems","Cost grows with context. Active research and engineering."],
  ["Energy and sustainability of AI","Growing power demand. Efficiency becomes strategic."],
  ["Testing and verification of learned components","Few guarantees for ML in critical systems. Links to safety assurance."],
  ["Data-centric tooling maturity","Data quality tools lag model tools. Opportunity area."],
  ["Autonomous operations (AIOps) and self-healing systems","Using AI to run AI systems. Promising and risky."]]],
 ["Learning path","building competence",[
  ["Build and deploy a small end-to-end model","Own the full lifecycle once. Teaches integration issues."],
  ["Operate something real","On-call experience builds judgment. Transfers to any stack."],
  ["Read postmortems and architecture write-ups","Learn from others' failures. Free education."],
  ["Reproduce a published training or serving setup","Gain depth on one stack. Reveals hidden details."],
  ["Contribute to an open-source serving or MLOps tool","Learn from real codebases. Build reputation."],
  ["Certifications and structured courses","Cloud and ML credentials. Useful for signaling and coverage."],
  ["Portfolio presentation of systems work","Show design, tradeoffs and measured results. Distinguishes engineers from model builders."]]]
 ]}
);
