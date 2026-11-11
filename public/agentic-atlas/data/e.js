/* Band E — Settlements. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"E1",band:"E",name:"Evaluation & Verification",sum:"Knowing whether an agent actually works, and whether to believe its own report.",deps:["A1","B3"],
 overview:"Agents are harder to evaluate than single model calls: they act over many steps, results vary run to run, and success can be subtle. This region covers evaluation design, benchmarks, judging with models, separation of generation and verification, and measuring reliability rather than best-case performance.",
 why:"Without good evaluation, improvements are guesses and regressions go unnoticed. Honest verification, where the thing checking the work is independent of the thing that did it, is the central discipline of trustworthy agents.",
 subs:[
 ["Evaluation design","building tests that mean something",[
  ["Task suites & test cases","Collections of realistic tasks with defined success. Start small with real failures and grow."],
  ["Outcome vs. trajectory evaluation","Check the end state, the path taken, or both. Outcome checks catch results; trajectory checks catch risky or wasteful methods."],
  ["Programmatic graders","Automatic checks such as tests, assertions or state comparisons. The most reliable form of grading."],
  ["Rubrics","Explicit criteria for judging quality. Make subjective grading consistent."],
  ["Held-out & fresh tasks","Evaluate on data not used in development. Prevents overfitting to the test."],
  ["Environment reset & isolation","Each run starts from a clean state. Avoids leakage between runs."],
  ["Evals as specification","Writing tests clarifies what success means. Often reveals ambiguity in the task."]]],
 ["Benchmarks","public yardsticks",[
  ["SWE-bench family","Resolve real issues in open-source repositories. A standard for coding agents, with known contamination and harness effects."],
  ["Tool-use & customer-service benchmarks (τ-bench-style)","Simulated users and policies testing multi-turn tool use. Measure consistency across repeated trials."],
  ["Web and computer-use benchmarks","Tasks on live or simulated sites and desktops. Show how far general UI agents lag people."],
  ["Research and QA benchmarks","Multi-hop and browsing questions. Test retrieval and synthesis."],
  ["Long-horizon task benchmarks","Measure how long a task agents complete at a given reliability. Track growth in autonomy."],
  ["Benchmark saturation & contamination","Scores rise as models improve or leak into training. Require new and private tasks."],
  ["Benchmarks vs. your use case","Public scores rarely predict performance on your data. Build your own evaluations."]]],
 ["Model-based judging","using models to grade",[
  ["LLM-as-judge","A model scores or compares outputs. Scales grading, but has biases for length, style and its own outputs."],
  ["Pairwise comparison","Judge which of two outputs is better. More reliable than absolute scores."],
  ["Judge calibration against humans","Measure agreement with human labels. Establish whether a judge can be trusted."],
  ["Bias mitigation (position, verbosity, self-preference)","Randomize order, control length and use different judge models. Reduce systematic judge errors."],
  ["Multi-judge panels","Combine several judges. Improves stability."],
  ["Reference-based vs. reference-free judging","Compare to a gold answer or judge on criteria alone. The first is more reliable when available."],
  ["Judging agent trajectories","Assess steps, tool use and reasoning, not just answers. Needs careful rubrics."]]],
 ["Generator–evaluator separation","honest verification",[
  ["Separation of generator and evaluator","The component that produces work should not be the only one that certifies it. Prevents self-grading and shared blind spots."],
  ["Independent verification","Use different prompts, models or tools to check results. Errors correlated with the generator slip through otherwise."],
  ["Ground-truth checks","Prefer executable tests, data lookups and formal verification to opinions. Reduce reliance on judgment."],
  ["Claims vs. evidence","Require agents to show evidence for claims of success. Catches false completion reports."],
  ["False completion & premature stopping","Agents declaring done without finishing. A common failure that verification catches."],
  ["Adversarial evaluators","Evaluators instructed to find flaws. Counter the tendency to approve."],
  ["Audit trails for decisions","Preserve what was checked and by whom. Support accountability and review."]]],
 ["Reliability & statistics","measuring consistency",[
  ["Variance across runs","The same agent gives different results each time. Report distributions, not single runs."],
  ["pass@k vs. pass^k","pass@k asks if any of k attempts succeed; pass^k asks if all do. The latter measures the consistency users need."],
  ["Confidence intervals & sample size","Small eval sets give noisy conclusions. Quantify uncertainty before claiming improvement."],
  ["Regression testing","Rerun evaluations on every change. Catch silent breakage from model or prompt updates."],
  ["Error analysis","Read failed trajectories and categorize causes. The most productive evaluation activity."],
  ["Online evaluation & production sampling","Score real traffic continuously. Reveals issues offline sets miss."],
  ["Human review","Spot-check outputs and calibrate automated graders. Remains necessary."]]]
 ]},

{ref:"E2",band:"E",name:"Safety, Security & Governance",sum:"Keeping autonomous systems controlled, secure and accountable.",deps:["B1","C3"],
 overview:"Agents can take actions with real consequences, so risks extend beyond wrong answers. This region covers attacks such as prompt injection, the principles of containing and overseeing agents, alignment concerns that grow with autonomy, and the policies and standards that govern deployment.",
 why:"An agent combines untrusted input, powerful tools and some autonomy, which is a recipe for incidents unless designed carefully. Safety and security engineering are core parts of building agents, not afterthoughts.",
 subs:[
 ["Prompt injection & attacks","hostile input",[
  ["Direct prompt injection","A user crafts input to override the agent's instructions. Mitigated by instruction hierarchy and filtering, not eliminated."],
  ["Indirect prompt injection","Hidden instructions in web pages, emails or documents the agent reads. The central security threat for agents with tools."],
  ["Lethal trifecta","Risk peaks when an agent has access to private data, exposure to untrusted content and a way to send data out. Break at least one leg."],
  ["Data exfiltration","Leaking sensitive information through tool calls, links or rendered content. Controlled by egress limits and review."],
  ["Tool poisoning & malicious servers","Tampered tool descriptions or servers manipulating the agent. Vet and pin third-party components."],
  ["Confused deputy","An agent with authority is tricked into using it for an attacker. Requires checking who is really asking."],
  ["Jailbreaks","Inputs that bypass a model's safety behavior. A continuing contest between attacks and defenses."]]],
 ["Containment & oversight","limiting blast radius",[
  ["Least privilege & scoped credentials","Minimal access for each task. Limits damage."],
  ["Sandboxes & isolation","Contain execution so mistakes stay local. A fundamental safeguard."],
  ["Human approval for consequential actions","Gate irreversible or external steps. Balanced against approval fatigue."],
  ["Reversibility & rollback","Prefer actions that can be undone, and keep backups. Reduce the cost of errors."],
  ["Rate limits & kill switches","Stop runaway behavior quickly. Needed for unattended agents."],
  ["Monitoring & anomaly detection","Watch actions for unusual patterns. Enables early intervention."],
  ["Separation of duties","Require a second party for sensitive operations. Standard control borrowed from finance and security."]]],
 ["Alignment & behavior","systems that do what is intended",[
  ["Goal misspecification","The agent optimizes what was said, not what was meant. Clear success criteria and checks reduce it."],
  ["Reward hacking & specification gaming","Satisfying the letter of a test while missing its point. Seen when agents edit tests or special-case checks."],
  ["Deception & hidden goals","Models that misreport actions or conceal reasoning. Evaluated with honesty tests and transparency measures."],
  ["Sycophancy & over-compliance","Agreeing with mistaken instructions or users. Undermines oversight."],
  ["Scheming & situational awareness evaluations","Tests for whether models behave differently when they think they are observed. Part of frontier safety testing."],
  ["Scalable oversight","Methods for supervising systems whose work exceeds easy human checking. Include AI assistance and decomposition."],
  ["Corrigibility & shutdown","Agents should allow correction and stopping. A design target as autonomy grows."],
  ["Interpretability for agents","Inspect internal reasoning and activations for signs of problems. Complements behavioral testing."]]],
 ["Privacy & data protection","handling sensitive information",[
  ["Data minimization","Give agents only the data needed. Limits exposure."],
  ["PII handling & redaction","Detect and mask personal data in prompts, logs and memory. Required in many regimes."],
  ["Retention & deletion","Control how long conversations and memories persist. Support user rights."],
  ["Tenant isolation","Keep data of different customers or users separate. Prevent cross-contamination."],
  ["Logging vs. confidentiality","Logs help debugging and audit but may hold sensitive content. Protect and limit them."],
  ["Data residency & sovereignty","Where data and models run. Matters for government and regulated users."],
  ["Training on user data","Policies on whether interactions train models. Must be clear and controllable."]]],
 ["Governance & standards","rules and accountability",[
  ["Accountability for agent actions","Clear responsibility for outcomes: developer, deployer and user. Law is still developing."],
  ["Risk management frameworks (NIST AI RMF)","Structured approaches to identify and manage AI risk. A common reference for organizations."],
  ["EU AI Act & regulation","Risk-based legal requirements for AI systems. Obligations vary by use case."],
  ["Responsible AI principles (DoD)","Principles such as responsible, equitable, traceable, reliable and governable. Shape defense AI practice."],
  ["Autonomy policy & human control","Rules about delegating decisions to machines, especially for lethal or high-stakes uses. Emphasize meaningful human control."],
  ["Frontier safety frameworks","Developers' commitments on testing and safeguards by capability level. Tie deployment to evaluations."],
  ["Incident reporting & response","Process for handling failures and misuse. Learn and improve after events."],
  ["Auditing & certification","Independent review of systems and processes. Growing in importance for procurement."]]]
 ]},

{ref:"E3",band:"E",name:"Production, Observability & Operations",sum:"Running agents reliably, affordably and visibly over time.",deps:["C1","C3","E1"],
 overview:"Shipping an agent is the start of the work. This region covers tracing and observability, cost and latency engineering, reliability practices, the human side of oversight and user experience, and the lifecycle of deploying, updating and improving agents in practice.",
 why:"Non-deterministic, multi-step systems fail in new ways, and without visibility they cannot be fixed. Cost, latency and trust determine whether an agent is adopted or abandoned.",
 subs:[
 ["Observability","seeing what the agent did",[
  ["Tracing agent runs","Record each model call, tool call and decision with timing and inputs. The primary tool for debugging agents."],
  ["Structured logging & spans","Standard formats such as OpenTelemetry for events. Allow analysis across systems."],
  ["Prompt & response capture","Keep exact inputs and outputs, with privacy controls. Needed to reproduce failures."],
  ["Metrics & dashboards","Success rate, latency, cost and tool errors over time. Reveal trends and regressions."],
  ["Alerting & anomaly detection","Notify on unusual failure or cost patterns. Allow fast response."],
  ["Session replay","Step through a past run. Speeds root-cause analysis."],
  ["User feedback signals","Thumbs, edits and abandonment. Cheap indicators of quality."]]],
 ["Cost & performance engineering","making it affordable and fast",[
  ["Token economics","Cost grows with context length and loop count. Measure per task, not per call."],
  ["Latency budgets","Each step adds delay. Parallelize, stream and use faster models where possible."],
  ["Prompt caching & reuse","Avoid reprocessing repeated context. A major saving in agent loops."],
  ["Model routing & cascades","Try a cheap model first and escalate when needed. Lower average cost."],
  ["Batching & asynchronous work","Run non-urgent tasks in bulk at lower cost. Suitable for background agents."],
  ["Efficiency of tools & context","Smaller, targeted outputs reduce tokens. Often the best optimization."],
  ["Unit economics","Cost per successful task versus value created. Determines if an agent is worthwhile."]]],
 ["Reliability engineering","making it dependable",[
  ["Failure modes of agents","Wrong tool, bad arguments, loops, early stopping and context loss. Catalog and test for each."],
  ["Retries, fallbacks & timeouts","Handle transient errors safely. Standard distributed-systems practice."],
  ["Idempotency & exactly-once effects","Avoid double-sending or double-charging on retry. Crucial for actions with side effects."],
  ["Graceful degradation & escalation","Hand off to a human or simpler path when confidence is low. Prefer partial help to confident errors."],
  ["Canary releases & shadow mode","Test new versions on small traffic or silently alongside the old one. Reduce deployment risk."],
  ["Rollbacks & version pinning","Return quickly to a known-good model, prompt or tool version. Models change underneath you."],
  ["Chaos & adversarial testing","Inject failures and hostile inputs. Reveal weaknesses before users do."]]],
 ["Human factors & UX","working with people",[
  ["Setting expectations","Communicate what the agent can and cannot do. Prevents over-trust."],
  ["Transparency of actions","Show what the agent did and why. Builds trust and aids correction."],
  ["Approval flows & interruption","Design confirmations that people will actually read. Too many cause fatigue."],
  ["Steering & correction","Let users redirect mid-run. Better than starting over."],
  ["Over-reliance & automation bias","People accept agent output without checking. Mitigate with evidence and friction at key points."],
  ["Accountability of the human reviewer","Review must be meaningful and supported. Rubber-stamping defeats oversight."],
  ["Handoff between agent and human","Smooth transfer with context preserved. Defines the real workflow."]]],
 ["Lifecycle & operations","from prototype to maintenance",[
  ["Prototype to production gap","Demos hide edge cases and cost. Expect most work to be reliability and evaluation."],
  ["Continuous evaluation & improvement","Use production data to expand test sets and fix failures. A flywheel for quality."],
  ["Model and tool upgrades","New versions change behavior. Re-evaluate before adopting."],
  ["Documentation & runbooks","Describe how the system works and how to respond to incidents. Essential for handoff."],
  ["Team practices","Evals, code review for prompts and shared ownership. Treat agents as software systems."],
  ["Deployment environments","Cloud, on-premises and air-gapped. Constraints shape tooling and models."],
  ["Sunsetting & change management","Retire or replace agents responsibly. Includes migrating users and data."]]]
 ]}
);
