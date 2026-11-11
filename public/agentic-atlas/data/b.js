/* Band B — Core Capabilities. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"B1",band:"B",name:"Tool Use & Environment Interfaces",sum:"How agents reach beyond text to read, compute and act in the world.",deps:["A1","A2"],
 overview:"Tools turn a language model into something that can look things up, run code, edit files, call services and operate software. This region covers the mechanics of tool calling, the standard protocols for exposing tools, code execution, browsing and computer use, and the design of interfaces that agents can use reliably.",
 why:"An agent is only as capable as its tools and only as safe as their boundaries. Interface design, error messages and permissions determine most of how an agent behaves in practice.",
 subs:[
 ["Tool calling mechanics","how a call happens",[
  ["Tool definition (schema)","A name, description and typed parameters describing what a tool does. The model reads it to decide when and how to call it."],
  ["Call–execute–observe cycle","The model requests a call, the application runs it and returns the result, and the model continues. The basic heartbeat of an agent."],
  ["Tool selection","Choosing which tool to use for a step. Degrades as the number of tools grows."],
  ["Argument generation & validation","The model fills in parameters, which the application should validate. Malformed or malicious arguments are common failure points."],
  ["Parallel & sequential calls","Independent calls can run together; dependent ones must wait. Planning for parallelism cuts latency."],
  ["Tool results as untrusted input","Returned content may contain errors or hostile text. Treat it as data, not instructions."],
  ["Forcing or restricting tool use","Require a specific tool or forbid tools for a step. Gives control in workflows."]]],
 ["Protocols & ecosystems","standard ways to expose tools",[
  ["Model Context Protocol (MCP)","An open protocol for connecting models to tools, data and prompts through servers. Lets one integration work across many clients."],
  ["MCP servers & clients","Servers expose capabilities; clients, such as an agent application, connect and use them. The split decouples tool builders from agent builders."],
  ["Resources, tools & prompts (MCP primitives)","Data to read, actions to perform and reusable templates. The three kinds of things an MCP server can offer."],
  ["OpenAPI & REST tool wrappers","Describe web APIs so agents can call them. A common way to bring existing services in."],
  ["Local vs. remote tool servers","Local servers run on the user's machine; remote ones are hosted. The choice affects trust and authentication."],
  ["Authentication & OAuth for tools","Tools act with a user's or service's credentials. Scoped, revocable access is essential."],
  ["Tool registries & discovery","Directories of available tools. Raise trust and supply-chain questions."]]],
 ["Code & computation","letting agents compute",[
  ["Code execution tool","Run code the model writes to calculate, transform data or test ideas. Turns fuzzy reasoning into exact computation."],
  ["Sandboxing","Run untrusted code in an isolated environment with limited access. Required for safe code execution."],
  ["Code as action","Express multi-step actions as a program rather than separate calls. Can be more compact and powerful."],
  ["File system & shell access","Read, write and run commands in a workspace. The basis of coding agents, and risky without limits."],
  ["Data analysis & notebooks","Agents query data and plot results. Bound by correctness checks on the code they write."],
  ["Package & dependency management","Agents install and import libraries. A security and reproducibility concern."],
  ["Long-running processes & timeouts","Handle commands that take a long time or hang. Agents need to poll, cancel and bound runtime."]]],
 ["Web & computer use","acting through interfaces made for humans",[
  ["Web search & fetch","Query the internet and read pages. Provides fresh information but untrusted content."],
  ["Browser automation","Navigate, click and fill forms with DOM or accessibility-tree access. Works on sites without APIs."],
  ["Computer use","Operate a desktop through screenshots and mouse and keyboard actions. General but slower and less reliable than APIs."],
  ["Accessibility trees vs. pixels","Structured page descriptions are more precise than screenshots. Many systems combine both."],
  ["Grounding actions to UI elements","Map an intent such as click Save to exact coordinates or element IDs. A main source of computer-use errors."],
  ["Authentication & session handling","Agents may act as a logged-in user. Needs clear consent and limited scope."],
  ["Robustness to changing interfaces","Sites change layout and block bots. Agents must handle surprises."]]],
 ["Interface design principles","building tools agents can use",[
  ["Agent–computer interface (ACI)","The agent's equivalent of a user interface. Effort spent on it pays off as much as on prompts."],
  ["Clear errors that guide recovery","Return actionable messages when a call fails. Helps the agent correct itself instead of repeating mistakes."],
  ["Idempotency & safe retries","Calls that can be repeated without harm. Allow retry without duplicating effects."],
  ["Dry-run & preview modes","Show what would change before applying. Supports review of risky actions."],
  ["Pagination & result limits","Return manageable slices of large results. Protects the context window."],
  ["Rate limits & quotas","Bound usage of external services. Prevent runaway loops from causing costs or bans."],
  ["Testing tools with the model","Run many example calls and observe mistakes. Revise schemas based on real behavior."]]]
 ]},

{ref:"B2",band:"B",name:"Memory & Knowledge",sum:"How agents retain, retrieve and use information beyond a single context window.",deps:["A2","A3"],
 overview:"Models forget everything between calls and can hold only so much at once. Memory systems extend an agent's reach across a long task and across sessions, from the working context to external stores. This region covers kinds of memory, retrieval-augmented generation, structured knowledge and the practical problems of keeping memory useful.",
 why:"Long-running and personalized agents depend on remembering the right things at the right time. Poor memory causes repeated mistakes, contradictions and bloated context.",
 subs:[
 ["Kinds of memory","a useful taxonomy",[
  ["Working memory (context window)","What the model holds right now. Fast and limited, and everything else must be loaded into it to be used."],
  ["Short-term / session memory","State carried across steps in one task. Held in conversation history, scratchpads or files."],
  ["Long-term memory","Information persisting across sessions, such as preferences and learned facts. Requires an external store."],
  ["Episodic memory","Records of specific past events or trajectories. Lets agents recall what worked before."],
  ["Semantic memory","General facts and knowledge about the user or domain. Typically stored as notes or a knowledge base."],
  ["Procedural memory","Instructions and skills for how to do things. Stored as prompts, rules or reusable skills."],
  ["Parametric vs. non-parametric knowledge","Knowledge in model weights versus in external stores. External knowledge is updatable and inspectable."]]],
 ["Retrieval-augmented generation","fetching relevant knowledge",[
  ["RAG pipeline","Retrieve relevant documents for a query and include them in the prompt. Grounds answers in sources and keeps knowledge current."],
  ["Chunking","Splitting documents into pieces for indexing. Chunk size and boundaries strongly affect retrieval quality."],
  ["Embeddings & vector search","Represent text as vectors and find nearest matches. The core of semantic retrieval."],
  ["Hybrid search (BM25 + vectors)","Combine keyword and semantic search. More robust than either alone."],
  ["Reranking","Reorder retrieved candidates with a stronger model. Improves precision before the prompt."],
  ["Query rewriting & expansion","Reformulate the user's question for better retrieval. Helpful for ambiguous or multi-part queries."],
  ["Agentic RAG","The agent decides when and what to retrieve, and iterates. Handles complex questions better than one-shot retrieval."],
  ["Citations & grounding checks","Link claims to sources and verify support. Reduces and exposes hallucination."]]],
 ["Structured knowledge","beyond text chunks",[
  ["Knowledge graphs","Entities and relations stored as a graph. Support multi-hop questions that chunk search misses."],
  ["GraphRAG","Build a graph from documents and retrieve over it. Helps with questions about themes across a corpus."],
  ["Databases & SQL tools","Let agents query structured data. Precise and verifiable, with permission controls."],
  ["Ontologies & schemas","Shared definitions of concepts and fields. Keep data consistent across tools."],
  ["Semantic layers","Business definitions that sit above raw tables. Reduce misinterpretation of metrics."],
  ["Entity resolution","Recognizing that different records refer to the same thing. Necessary for reliable joins and memory."],
  ["Temporal knowledge","Facts valid for certain periods. Prevents using outdated information."]]],
 ["Agent memory systems","remembering over time",[
  ["Scratchpads & notes files","The agent writes progress and plans to files and rereads them. A simple, effective persistent memory."],
  ["Memory tools (read/write/search)","Expose memory as tools the agent calls. Lets it decide what to store and recall."],
  ["Summarization memory","Condense history into summaries. Saves tokens but risks losing details."],
  ["Reflection & consolidation","Periodically distill experiences into higher-level lessons. Mirrors how people form general knowledge."],
  ["Memory indexing & decay","Rank memories by relevance, recency and importance, and let stale ones fade. Keeps stores useful."],
  ["Shared memory across agents","Common store used by several agents. Enables coordination and creates consistency problems."],
  ["Project files as memory (e.g., instruction files)","Persisted repository documents describing conventions and goals. Loaded at start to orient the agent."]]],
 ["Memory hazards","what goes wrong",[
  ["Stale or wrong memories","Outdated or incorrect stored facts mislead later steps. Need update and expiry rules."],
  ["Memory poisoning","Malicious or mistaken content written into memory that persists. A security concern for shared or user-editable memory."],
  ["Privacy & retention","Stored personal data must be governed. Include deletion and access controls."],
  ["Over-retrieval & noise","Pulling too much irrelevant memory dilutes the prompt. Precision matters more than recall."],
  ["Contradictions","Conflicting memories cause inconsistent behavior. Resolve by recency, source or confirmation."],
  ["Overfitting to the past","Rigid reliance on old patterns when conditions change. Keep memory advisory, not binding."],
  ["Evaluating memory","Test recall, relevance and harm over long horizons. Few standard benchmarks exist."]]]
 ]},

{ref:"B3",band:"B",name:"Reasoning & Planning",sum:"How agents decide what to do next and how to get to a goal.",deps:["A2","A3"],
 overview:"Between a goal and an action lies planning: breaking tasks down, choosing steps, checking progress and correcting course. This region covers reasoning-and-acting patterns, explicit planning, search over alternatives, reflection and self-correction, and where learned reasoning meets classical planning.",
 why:"The quality of planning and recovery determines whether an agent finishes long tasks. Different patterns trade flexibility, cost and predictability, and the right one depends on the task.",
 subs:[
 ["Reason-and-act patterns","interleaving thought and action",[
  ["ReAct","Alternate reasoning steps with tool actions, feeding results back into the next thought. The template behind many agent loops."],
  ["Plan-and-execute","Write a plan first, then carry out its steps, replanning as needed. Cheaper and easier to inspect than step-by-step improvisation."],
  ["Reflexion & verbal feedback","After a failed attempt, write a lesson and use it on the next try. Improves performance without weight updates."],
  ["Think-act-observe cadence","Short reasoning between actions keeps behavior grounded. Long unobserved plans drift from reality."],
  ["Todo lists & progress tracking","The agent maintains a task list and updates it. Keeps long work organized and visible to users."],
  ["Replanning on failure","Detect that a step failed or assumptions changed and revise. A hallmark of robust agents."],
  ["Goal decomposition","Break a big objective into subgoals. Works best when subgoals can be verified."]]],
 ["Search & deliberate reasoning","exploring alternatives",[
  ["Tree of thoughts","Explore several reasoning branches and evaluate them. Helps on problems needing lookahead."],
  ["Best-of-n & rejection sampling","Generate several candidates and select the best by a verifier. Simple use of extra compute."],
  ["Monte Carlo tree search with LLMs","Use simulated rollouts to pick among actions. Powerful when states can be evaluated."],
  ["Self-consistency","Sample multiple reasoning paths and take the majority. Reliable for problems with checkable answers."],
  ["Verifiers & reward models for search","Score partial or final solutions to guide selection. Quality of the verifier limits the gains."],
  ["Process vs. outcome supervision","Reward correct steps or only correct answers. Process rewards give finer guidance."],
  ["Cost of deliberation","More search means more tokens and time. Use it selectively on hard steps."]]],
 ["Reflection & self-correction","catching one's own errors",[
  ["Self-critique","The model reviews its own output. Helps with concrete criteria, but models often miss their own errors."],
  ["External verification","Check work with tests, code, calculators or retrieval. More dependable than self-assessment."],
  ["Test-driven agent loops","Write or run tests and iterate until they pass. A strong feedback signal for code."],
  ["Generator–evaluator separation","Use a separate model or pass with different instructions to judge work. Reduces shared blind spots compared with self-review."],
  ["Debate & cross-examination","Multiple model instances argue or question each other. Can surface errors, at higher cost."],
  ["Error taxonomies","Classify failures such as wrong tool, wrong plan or misread result. Guide targeted fixes."],
  ["Knowing when to ask","Recognize uncertainty and request clarification. Better than guessing on ambiguous tasks."]]],
 ["Classical planning & hybrids","symbolic methods return",[
  ["PDDL & symbolic planners","Formal languages and solvers for planning with explicit states and actions. Provide guarantees LLMs lack."],
  ["LLM + planner hybrids","Have a model translate a task into a formal problem and a solver find the plan. Combines flexible language with sound search."],
  ["Hierarchical task networks","Decompose tasks by predefined methods. A structured way to encode expertise."],
  ["Constraint solvers & optimization","Delegate scheduling and allocation to exact solvers. Better than model guesswork for such problems."],
  ["Program synthesis & code as plan","Express the plan as a program to be executed and verified. Precise and reusable."],
  ["State machines & behavior trees","Explicit control structures with model calls at nodes. Add predictability to agent behavior."],
  ["Simulation & world models for planning","Predict outcomes before acting. Lowers risk in costly environments."]]],
 ["Long-horizon behavior","staying on track over many steps",[
  ["Error accumulation","Small mistakes compound across steps, so success falls quickly with length. A central limit on autonomy."],
  ["Checkpoints & verification gates","Validate progress at milestones before continuing. Catch drift early."],
  ["Context resets & handoffs","Restart with a summary or notes when the window is full. Needs well-designed state transfer."],
  ["Time horizon of tasks","The length of task an agent can complete at a given reliability. A useful measure of progress."],
  ["Goal drift & reward hacking","Agents pursuing a proxy or abandoning the true aim. Needs clear success criteria and checks."],
  ["Persistence vs. giving up","Balance trying alternatives with escalating to a human. Both extremes waste effort."],
  ["Resumability & durable state","Save progress so a crashed run continues. Essential for tasks lasting hours."]]]
 ]}
);
