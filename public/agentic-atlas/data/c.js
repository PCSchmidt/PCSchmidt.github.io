/* Band C — System Patterns. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"C1",band:"C",name:"Workflow & Orchestration Patterns",sum:"Composing model calls and tools into reliable systems.",deps:["A1","B1","B3"],
 overview:"Most production agentic systems are compositions of a few well-understood patterns rather than a single free-roaming agent. This region covers the common workflow patterns, how to model state and control flow, the frameworks and durable-execution engines used to run them, and how to choose among them.",
 why:"Patterns give a shared vocabulary and predictable behavior. Choosing the right one, and keeping it simple, is usually the difference between a demo and something dependable.",
 subs:[
 ["Core workflow patterns","the building blocks",[
  ["Prompt chaining","Run a fixed sequence of calls, each handling one subtask and passing its output on, with optional checks between. Trades latency for accuracy."],
  ["Routing","Classify an input and send it to a specialized handler or model. Separates concerns and enables cheaper models for easy cases."],
  ["Parallelization (sectioning & voting)","Run independent subtasks at once, or run the same task several times and combine results. Speeds up work or raises confidence."],
  ["Orchestrator–workers","A central model breaks a task into subtasks dynamically and delegates them to workers. Suits tasks whose structure is not known in advance."],
  ["Evaluator–optimizer","One call produces a result and another critiques it, looping until accepted. Effective when clear criteria exist and iteration helps."],
  ["Gating & validation steps","Programmatic checks between stages. Stop bad outputs before they propagate."],
  ["Fan-out / fan-in","Spread work across many calls, then aggregate. Common for research and document processing."]]],
 ["State & control flow","modeling the process",[
  ["Agent state","The data carried through a run: messages, plans, intermediate results. Explicit state makes behavior debuggable."],
  ["State machines & graphs","Represent workflows as nodes and edges with conditions. Make control flow explicit and testable."],
  ["Conditional branching & loops","Choose next steps by results and repeat until done. Typically with a hard iteration cap."],
  ["Deterministic code vs. model decisions","Use code for anything that can be specified and the model for judgment. Reduces cost and variance."],
  ["Human approval nodes","Pause for a person to confirm or edit. Place at risky or ambiguous points."],
  ["Error edges & fallbacks","Defined paths for failure, such as retry, alternate model or escalation. Keep systems from stalling."],
  ["Idempotent steps","Steps safe to rerun. Simplify recovery after failures."]]],
 ["Frameworks & runtimes","tools for building",[
  ["Agent SDKs","Libraries providing loops, tool handling and tracing. Speed development but can hide behavior behind abstractions."],
  ["Graph-based frameworks (LangGraph-style)","Express workflows as stateful graphs with persistence. Suit complex, branching processes."],
  ["Role-based multi-agent frameworks","Define agents with roles and let them collaborate. Quick to prototype, harder to control."],
  ["Workflow engines (Temporal-style)","Run long processes with retries, timers and durable state. Bring distributed-systems reliability to agents."],
  ["Durable execution","Persist progress so a workflow survives crashes and resumes exactly. Essential for long-running agents."],
  ["Queues & event-driven triggers","Start agents from events such as messages or schedules. Support unattended operation."],
  ["Framework vs. raw API","Direct API calls give transparency; frameworks save boilerplate. Understand the underlying prompts either way."]]],
 ["Choosing a pattern","matching design to task",[
  ["When a single call suffices","Many tasks need only a well-prompted call with retrieval. Adding structure is a cost."],
  ["Predictable subtasks → workflow","If steps are known, encode them in code. Gain reliability and cost control."],
  ["Open-ended tasks → agent","If steps cannot be predicted, let the model decide within guardrails. Accept variance and verify results."],
  ["Latency & cost budgets","Each extra call adds time and expense. Set budgets and measure."],
  ["Reliability targets","Match pattern complexity to required success rate. Compound steps multiply failure probability."],
  ["Incremental complexity","Start simple and add structure when evaluation shows a need. Avoid premature architecture."],
  ["Reuse of proven patterns","Prefer well-known designs to novel ones. Easier to debug and hand off."]]],
 ["Operational concerns","running workflows in practice",[
  ["Retries, backoff & timeouts","Handle transient failures without duplicating effects. Standard in distributed systems and equally needed here."],
  ["Concurrency & rate limits","Run many calls without exceeding provider limits. Needs queues and throttling."],
  ["Caching intermediate results","Reuse earlier outputs to save cost. Careful with staleness."],
  ["Versioning workflows & prompts","Track changes and allow rollback. Needed for reproducibility."],
  ["Testing workflows end to end","Run full scenarios with realistic inputs and mocked tools. Catch integration failures."],
  ["Idempotency keys","Identifiers preventing duplicate actions on retry. Important for payments and writes."],
  ["Scheduling & long-running jobs","Run agents at intervals or over hours. Require state persistence and monitoring."]]]
 ]},

{ref:"C2",band:"C",name:"Multi-Agent Systems",sum:"Several agents working together, or against each other.",deps:["A1","C1"],
 overview:"Splitting work among multiple agents can add parallelism, specialization and independent checking, at the price of coordination overhead and new failure modes. This region covers when multiple agents help, common organizing patterns, how agents communicate, and the classical theory of cooperation and competition.",
 why:"Multi-agent designs power research, coding and simulation systems, but are often over-used. Knowing the real benefits and costs prevents complex systems that perform worse than a single well-built agent.",
 subs:[
 ["Why and when","benefits and costs",[
  ["Parallelism","Independent agents explore different parts of a problem at once. The clearest benefit for broad research tasks."],
  ["Specialization & separation of concerns","Each agent gets focused instructions, tools and context. Reduces confusion inside any one prompt."],
  ["Independent verification","A separate agent checks another's work without sharing its assumptions. Reduces correlated errors."],
  ["Context isolation","Subagents use their own windows and return summaries. Keeps the coordinator's context clean."],
  ["Coordination overhead","Messages, duplicated work and misaligned goals consume tokens and time. Multi-agent systems can use many times the tokens of a single agent."],
  ["When a single agent is better","Tightly coupled tasks that need shared context fare poorly when split. Many coding tasks fit here."],
  ["Scaling effort to complexity","Use more agents only for harder queries. Embed rules for how much effort a task deserves."]]],
 ["Organizing patterns","structures that work",[
  ["Orchestrator–subagent (lead and workers)","A lead agent plans and delegates to workers, then synthesizes. The most common production pattern."],
  ["Hierarchical teams","Managers and sub-managers delegating down several levels. Fit large tasks, with deeper coordination costs."],
  ["Peer-to-peer & swarm","Agents interact without a central controller, handing off or reacting to each other. Flexible but harder to predict."],
  ["Handoffs","One agent passes control and context to another better suited. A simple multi-agent primitive."],
  ["Pipelines (assembly line)","Agents process work in sequence, each adding a stage. Mirrors human processes."],
  ["Debate & adversarial roles","Agents argue positions to surface weaknesses. Improves reasoning in some tasks."],
  ["Generator–critic pairs","One agent proposes and another reviews. A minimal and effective form of separation."]]],
 ["Communication & coordination","how agents talk",[
  ["Message passing","Agents exchange natural-language or structured messages. Simple, but ambiguity can cause misunderstanding."],
  ["Shared state & blackboards","Agents read and write a common workspace such as files or a task board. Reduces message volume and supports asynchronous work."],
  ["Task delegation briefs","Clear objective, output format, tools and boundaries for each subagent. Vague delegation causes duplicated or off-target work."],
  ["Agent-to-agent protocols (A2A)","Standards for agents to discover and call each other across vendors. Enable interoperability."],
  ["Structured vs. free-form messages","Schemas reduce errors, free text adds flexibility. Mix as needed."],
  ["Conflict resolution","Rules for disagreements, such as voting or escalation. Needed when agents produce incompatible outputs."],
  ["Artifacts over messages","Pass results as files or documents rather than relaying text through a coordinator. Cuts loss and cost."]]],
 ["Theory & social behavior","foundations from game theory and cognition",[
  ["Cooperative vs. competitive settings","Agents may share a goal, have opposed goals or mix both. Determines the right algorithms."],
  ["Nash equilibrium & game theory","Analyze strategies where no agent benefits from changing alone. A basis for reasoning about interacting agents."],
  ["Negotiation & bargaining","Agents reach agreements over resources or terms. Tested in language-model negotiation settings."],
  ["Theory of mind in agents","Modeling what other agents believe and intend. Important for coordination and deception."],
  ["Emergent behavior","Group behavior not designed for, from simple interactions. Can be useful or hazardous."],
  ["Multi-agent reinforcement learning","Agents learn policies while others also learn. Faces non-stationarity and credit assignment problems."],
  ["Simulation of societies","Large populations of agents to study social dynamics. Fidelity and validation are open questions."]]],
 ["Failure modes","what goes wrong",[
  ["Miscommunication & misalignment","Agents interpret instructions differently and produce inconsistent work. Mitigated by structured briefs."],
  ["Duplicated or contradictory work","Several agents do the same thing or undo each other. Needs clear task boundaries."],
  ["Error propagation & cascading failure","A bad output from one agent is trusted by the next. Add validation between agents."],
  ["Collusion & groupthink","Agents reinforce each other's mistakes. Diverse roles and independent checks help."],
  ["Runaway cost","Many agents each looping can consume large budgets. Enforce global limits."],
  ["Debugging distributed behavior","Tracing which agent caused a failure is hard. Requires good tracing."],
  ["Security across agents","One compromised or injected agent can mislead the rest. Treat inter-agent messages as untrusted."]]]
 ]},

{ref:"C3",band:"C",name:"Agent Harness & Runtime",sum:"The engineering around the model: the loop, tools, permissions and environment it runs in.",deps:["B1","B2","C1"],
 overview:"A harness is everything except the model: the loop that calls it, the tools it can use, the context it manages, the sandbox it runs in and the rules that gate its actions. This region covers harness design, permissions and sandboxes, context and memory management inside a running agent, extensibility through skills and hooks, and cost and reliability controls.",
 why:"Two agents using the same model can perform very differently because of their harnesses. Safety, reliability and capability are mostly determined at this layer.",
 subs:[
 ["Harness design","the loop and its parts",[
  ["Agent harness","The code and configuration that wraps a model with a loop, tools, context handling and safeguards. Often the main source of an agent's quality."],
  ["Main loop","Call the model, run requested tools, append results, repeat until done. Small and simple loops are easier to trust."],
  ["System prompt & instruction files","Persistent guidance loaded at the start, such as project conventions. Orient the agent without retraining."],
  ["Subagents","Spawn helpers with separate context for focused subtasks. Keep the main thread lean and enable parallel work."],
  ["Skills","Packaged instructions and scripts the agent loads on demand. Add capabilities without bloating the base prompt."],
  ["Hooks & lifecycle events","Run custom code before or after steps, such as validating a command. Enforce policy deterministically."],
  ["Slash commands & user-defined workflows","Reusable prompts triggered by name. Standardize repeated procedures."]]],
 ["Permissions & sandboxing","limiting what the agent can do",[
  ["Principle of least privilege","Give the agent only the access its task needs. Limits damage from mistakes or attacks."],
  ["Permission modes & approvals","Ask the user before sensitive actions, allow-list safe ones and block others. Balances speed and safety."],
  ["Sandboxed execution","Contain code and commands in a restricted environment with limited files and network. The main technical safeguard for autonomous coding."],
  ["Network egress controls","Restrict which hosts the agent can reach. Prevents data exfiltration and unwanted downloads."],
  ["Secrets management","Keep credentials out of prompts and logs, and scope them narrowly. Agents can leak what they can see."],
  ["Destructive action guards","Confirm or block deletes, force pushes and production changes. Cheap protection against rare disasters."],
  ["Audit logs","Record every action with context. Support review and accountability."]]],
 ["Context & state management in the loop","keeping runs healthy",[
  ["Automatic compaction","Summarize earlier history when the window nears its limit. Allows long sessions."],
  ["Tool-result trimming","Clear or shorten old tool outputs. Frees context with little loss."],
  ["Persistent task state","Maintain todo lists and progress files outside the context. Survive resets and crashes."],
  ["Checkpoints & rollback","Snapshot work so changes can be undone. Makes experimentation safe."],
  ["Session resume & handoff","Continue work across sessions with preserved state. Needed for multi-day tasks."],
  ["Context budgeting","Track token use and allocate space to instructions, tools and history. Prevent silent truncation."],
  ["Parallel sessions & worktrees","Run several agents on separate copies of a workspace. Avoid conflicts between concurrent changes."]]],
 ["Extensibility","growing capabilities safely",[
  ["Plugins & extensions","Bundle tools, skills and commands for distribution. Allow teams to share capabilities."],
  ["MCP integration in the harness","Connect external tool servers at runtime. Add integrations without changing the core."],
  ["Custom tools","Add domain-specific functions with careful schemas. Often the highest-value addition."],
  ["Configuration layers (user, project, org)","Settings at different scopes with precedence. Let organizations enforce policy."],
  ["Prompt & tool versioning","Track changes to harness components. Enable reproducibility and rollbacks."],
  ["Headless & programmatic use","Run the agent from scripts or CI. Enables automation and scheduled work."],
  ["SDKs for building on a harness","Libraries to embed the loop in your own application. Reuse proven machinery."]]],
 ["Cost & reliability controls","running agents responsibly",[
  ["Token and cost budgets","Hard limits per run or per user. Prevent runaway spending."],
  ["Prompt caching","Reuse the processed prefix of repeated context. Cuts cost and latency in long loops."],
  ["Model fallbacks & routing","Switch models on failure or by difficulty. Improve resilience and cost."],
  ["Timeouts & watchdogs","Stop stuck steps and runs. Prevent silent hangs."],
  ["Graceful degradation","Return partial results or hand off to a human when limits hit. Better than failing outright."],
  ["Determinism aids","Lower temperature, fixed seeds and recorded tool results. Make runs easier to reproduce and debug."],
  ["Unattended operation","Design for runs with no human present: clear criteria, safe defaults and reports on completion. Requires conservative permissions."]]]
 ]}
);
