/* Band A — Bedrock. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"A1",band:"A",name:"Agent Concepts & Architectures",sum:"What an agent is, the loop it runs, and the classic designs behind it.",deps:[],
 overview:"An agent is a system that perceives an environment, decides what to do and acts, repeatedly, in pursuit of a goal. This region covers the formal idea of an agent from classical AI, how modern language-model agents instantiate it, the spectrum from fixed workflows to open-ended autonomy, and the design questions that follow.",
 why:"The word agent is used loosely. A clear definition and a vocabulary for degrees of autonomy keep design decisions honest: most successful systems use the least autonomy that does the job.",
 subs:[
 ["Defining agents","what counts as an agent",[
  ["Agent (classical definition)","An entity that senses its environment through percepts and acts on it through actuators. This perceive–decide–act framing predates language models and still applies."],
  ["Rational agent","One that chooses the action expected to maximize its performance measure given what it knows. Rationality is relative to goals, information and compute, not perfection."],
  ["LLM agent","A system where a language model decides which actions to take, usually by choosing tools in a loop until it judges the task complete. The model is the controller; code provides tools and boundaries."],
  ["Environment","Everything the agent acts on and observes: files, websites, APIs, users or a simulator. Its properties, such as observability and determinism, shape agent design."],
  ["Goals, tasks & success criteria","What the agent is trying to achieve and how completion is judged. Vague criteria are the most common cause of agents that wander or stop early."],
  ["Agentic vs. non-agentic","A single model call answers once; an agentic system iterates with feedback from actions. The difference is a loop with state and consequences."],
  ["Agency & autonomy","The degree to which a system pursues goals and chooses its own steps without direction. Higher autonomy gives flexibility but harder verification."]]],
 ["The agent loop","the core control cycle",[
  ["Perceive–decide–act loop","Observe, choose an action, execute and observe the result, repeating. Every agent architecture is a variation on this cycle."],
  ["Observation & action spaces","What the agent can see and what it can do. Narrow, well-designed spaces make agents more reliable than broad ones."],
  ["Stopping conditions","Rules for when the loop ends: goal met, budget used, error or human handoff. Without them agents loop forever or quit prematurely."],
  ["State & trajectory","The accumulated record of observations and actions so far. The trajectory is what you inspect to debug and evaluate."],
  ["Feedback signals","Results from tools, tests, users or environments that tell the agent how it is doing. Grounded feedback is what separates agents from open-loop generation."],
  ["Error handling & recovery","Responding to failed calls and wrong turns. Robust agents retry, replan or escalate instead of compounding errors."],
  ["Step and budget limits","Caps on iterations, tokens, time and cost. Essential guardrails for unattended runs."]]],
 ["Autonomy spectrum","from scripts to open-ended agents",[
  ["Workflows vs. agents","Workflows follow code-defined paths with model calls at fixed steps; agents let the model decide the path dynamically. Workflows are more predictable, agents more flexible."],
  ["Augmented LLM","A model enhanced with retrieval, tools and memory. The basic building block from which agentic systems are assembled."],
  ["Levels of autonomy","Scales describing how much the system decides versus a human, from suggesting to acting independently. Borrowed from self-driving and used to set oversight."],
  ["Human-in-the-loop","A person approves or reviews key actions. Appropriate where errors are costly or irreversible."],
  ["Human-on-the-loop","A person monitors and can intervene but does not approve each step. A middle ground that scales supervision."],
  ["Simplest thing that works","Start with a single call, add retrieval or tools, and add autonomy only when measurements show it helps. A guiding design rule."],
  ["Task horizon","How many steps and how long a task runs. Reliability falls as horizon grows because errors compound."]]],
 ["Classical architectures","designs older than LLMs",[
  ["Reactive agents","Map percepts directly to actions with no internal model. Fast and robust in simple environments."],
  ["Deliberative agents","Maintain a world model and plan before acting. Handle complex goals at the cost of speed."],
  ["BDI (belief–desire–intention)","Agents modeled by what they believe, want and have committed to. A long-standing framework for goal-directed behavior."],
  ["Subsumption architecture","Layered behaviors where higher layers override lower reflexes. Influential in robotics."],
  ["Blackboard systems","Shared workspace where specialist modules post and read contributions. An ancestor of shared-memory multi-agent designs."],
  ["Utility-based agents","Choose actions by expected utility across uncertain outcomes. Connects agents to decision theory."],
  ["Cognitive architectures (SOAR, ACT-R)","Unified models of memory, reasoning and learning. Inspire modern memory and planning modules."]]],
 ["Design questions","choices every agent makes",[
  ["Single agent vs. multi-agent","One agent with many tools is simpler; several specialists add parallelism and separation of concerns at a coordination cost. Choose multi only when it clearly pays."],
  ["Where to put intelligence","Decide what logic lives in code, in prompts and in the model. Deterministic code is cheaper and more reliable for anything that can be specified."],
  ["Tool granularity","Few general tools or many specific ones. Affects accuracy, token use and ease of control."],
  ["Autonomy vs. verifiability","More freedom makes outcomes harder to check. Design verification alongside capability."],
  ["Latency, cost & quality tradeoffs","More steps and bigger models improve quality but cost time and money. Budget each deliberately."],
  ["Reversibility of actions","Distinguish safe reads from risky writes. Gate irreversible actions."],
  ["Transparency of behavior","Make plans and actions inspectable. Trust and debugging depend on it."]]]
 ]},

{ref:"A2",band:"A",name:"Language Models as the Substrate",sum:"The capabilities and limits of the models that power agents.",deps:[],
 overview:"Agent behavior is bounded by the model underneath. This region covers how language models generate text, how they follow instructions and call tools, what reasoning models add, and the weaknesses such as hallucination and limited context that agent designers must engineer around.",
 why:"Knowing what a model can reliably do tells you where to rely on it and where to add checks, code or retrieval. Many agent failures are model limitations in disguise.",
 subs:[
 ["How models generate","the basics",[
  ["Next-token prediction","The model repeatedly predicts the next token given what came before. Everything an agent does is built on this loop of generation."],
  ["Tokens & context window","Text is split into tokens, and the model can attend to only a fixed window of them. The window bounds how much history, documents and tool output fit."],
  ["Sampling & temperature","Controls randomness in generation. Lower values give more deterministic behavior, usually preferred for tool use."],
  ["System, user & assistant roles","Messages carry roles that set instructions, requests and prior replies. The system prompt defines persistent behavior."],
  ["Stateless calls","Each model call sees only what is sent. Memory and continuity must be supplied by the application."],
  ["Caching & prefix reuse","Repeated prompt prefixes can be cached to cut cost and latency. Shapes how prompts are structured in loops."],
  ["Streaming","Receiving output as it is generated. Improves perceived latency and lets systems act early."]]],
 ["Instruction following & structured output","getting usable responses",[
  ["Instruction tuning","Post-training that teaches models to follow directions. Why chat models respond to requests instead of just continuing text."],
  ["Structured outputs & JSON mode","Constrain responses to a schema. Makes outputs machine-readable and parseable."],
  ["Constrained decoding","Force valid output at the token level using grammars. Guarantees format at some flexibility cost."],
  ["Function / tool calling","The model emits a structured request naming a tool and arguments for the application to run. The mechanism that lets models act."],
  ["Schema design for arguments","Clear names, types and descriptions improve call accuracy. Tool schemas are part of the prompt."],
  ["Parallel tool calls","Request several independent calls at once. Cuts latency for fan-out work."],
  ["Output validation & retries","Check responses against rules and ask again on failure. A basic reliability layer."]]],
 ["Reasoning capabilities","thinking before answering",[
  ["Chain-of-thought","Having the model write intermediate steps improves accuracy on multi-step problems. The basis of most agent planning."],
  ["Reasoning models","Models trained to produce long internal reasoning before answering. Stronger on hard planning and coding at higher cost and latency."],
  ["Extended thinking & budgets","Allocating how much reasoning a call may use. Trades quality against time and tokens."],
  ["Test-time compute scaling","Spending more computation at inference, via longer reasoning or sampling many answers. A second lever beyond model size."],
  ["Self-consistency & majority voting","Sample several answers and pick the most common. Boosts reliability on verifiable tasks."],
  ["Faithfulness of reasoning","Written reasoning may not reflect what actually drove the answer. Treat it as helpful evidence, not proof."],
  ["Interleaved thinking with tool use","Reason between tool calls using their results. Lets plans adapt to new information."]]],
 ["Limits & failure modes","where models fall short",[
  ["Hallucination","Confident but unsupported statements. Reduced by grounding in sources and verification, never eliminated."],
  ["Context rot & long-context limits","Quality can degrade as the window fills with irrelevant material. More context is not always better."],
  ["Lost in the middle","Information in the middle of a long input is used less reliably. Place key facts early or late."],
  ["Sycophancy","Tendency to agree with or flatter the user. Undermines honest evaluation and review."],
  ["Brittleness to phrasing","Small wording changes can change behavior. Test prompts across variations."],
  ["Compounding errors","A small mistake early can derail later steps. Long tasks need checkpoints and verification."],
  ["Overconfidence & poor calibration","Models often cannot tell when they are wrong. External checks beat self-assessment."],
  ["Nondeterminism","The same input can produce different outputs. Evaluate over many runs."]]],
 ["Model selection & routing","choosing the right model",[
  ["Capability tiers","Larger models reason better but cost more and run slower. Match tier to step difficulty."],
  ["Model routing","Send easy steps to small models and hard ones to large models. Cuts cost with little quality loss."],
  ["Small models for subtasks","Classification, extraction and formatting often suit cheap models. Reserve large ones for planning."],
  ["Open vs. hosted models","Open weights allow control and private deployment; hosted models offer frontier capability. Constraints like air-gapping can decide."],
  ["Fine-tuning for agents","Tune a model on trajectories or tool use. Helps narrow, high-volume tasks."],
  ["Context and output limits","Maximum input and output sizes differ by model. Affects how work is chunked."],
  ["Model upgrades & regressions","New versions change behavior. Keep evaluations to catch regressions."]]]
 ]},

{ref:"A3",band:"A",name:"Prompting & Context Engineering",sum:"Deciding what the model sees at each step.",deps:["A2"],
 overview:"What a model does depends on what is in its context. Prompt engineering is writing good instructions; context engineering is the broader practice of choosing, ordering and trimming everything the model sees: instructions, tools, retrieved knowledge, history and results.",
 why:"For agents running many steps, context management is the main lever for quality and cost. Most improvements to a working agent come from better context rather than a different model.",
 subs:[
 ["Writing instructions","the prompt itself",[
  ["System prompt design","Define role, goals, constraints and style once. A well-structured system prompt is the agent's standing policy."],
  ["Clarity & specificity","State what to do, what done looks like and what to avoid. Ambiguity causes most prompt failures."],
  ["Examples (few-shot)","Show input–output examples to demonstrate format and judgment. Often more effective than lengthy description."],
  ["Structure with delimiters & tags","Separate instructions, data and examples clearly, for instance with XML-style tags. Helps models parse sections and resist confusion."],
  ["Role & persona prompting","Assign a role or expertise. Shapes tone and focus modestly."],
  ["Positive vs. negative instructions","Say what to do rather than only what not to do. Negatives can anchor the unwanted behavior."],
  ["Prompt iteration & versioning","Treat prompts as code with versions and tests. Changes are measured, not assumed."]]],
 ["Context engineering","managing the whole window",[
  ["Context as a scarce resource","Every token competes for attention and costs money. The aim is the smallest set of high-signal tokens that achieves the goal."],
  ["Just-in-time retrieval","Load information when needed through tools instead of preloading everything. Keeps context lean."],
  ["Context compaction & summarization","Condense older history into a summary as the window fills. Extends long tasks at some loss of detail."],
  ["Context editing & pruning","Remove stale tool output and dead ends. Prevents clutter from drowning relevant facts."],
  ["Ordering & placement","Position matters: put key instructions and facts where the model attends best. Large documents go before questions."],
  ["Structured note-taking","The agent writes notes to external files and reads them back later. A simple form of persistent memory."],
  ["Isolating context with subagents","Give subtasks their own clean windows and return only summaries. Keeps the main thread focused."]]],
 ["Tool & instruction design","interfaces for models",[
  ["Tool descriptions as prompts","The name, description and parameter docs are read by the model. Write them like documentation for a new colleague."],
  ["Minimal, non-overlapping toolsets","Too many or ambiguous tools confuse selection. Fewer, distinct tools perform better."],
  ["Informative tool responses","Return concise, relevant results with clear errors. Output design is part of tool design."],
  ["Token-efficient outputs","Paginate, filter and truncate large results. Prevent one call from flooding the context."],
  ["Poka-yoke tool design","Make mistakes hard, for example by requiring absolute paths. Reduces avoidable errors."],
  ["Naming & namespacing","Consistent prefixes group related tools. Aids selection in large sets."],
  ["Examples and edge cases in tool docs","Show usage patterns and limits. Improves correct calling."]]],
 ["Prompting techniques","patterns that help",[
  ["Chain-of-thought prompting","Ask for step-by-step reasoning. Improves multi-step accuracy."],
  ["Plan-then-act prompting","Request a plan before execution. Makes behavior inspectable and correctable."],
  ["Self-critique & revision prompts","Ask the model to review and improve its draft. Works best with concrete criteria."],
  ["Prompt chaining","Split a task into sequential calls, each with a focused prompt. Trades latency for accuracy."],
  ["Meta-prompting","Use a model to write or refine prompts. Speeds iteration but needs evaluation."],
  ["Prefilling & output priming","Start the response to steer format. Useful for strict structure."],
  ["Instruction hierarchy","Rank system, developer and user instructions and treat tool outputs as data. A defense against conflicting or injected instructions."]]],
 ["Evaluating prompts","knowing if a change helped",[
  ["Eval sets for prompts","A fixed set of cases with expected behavior. The only reliable way to compare versions."],
  ["Regression testing","Rerun evaluations after every change. Catches fixes that break other cases."],
  ["A/B testing prompts","Compare versions on live or replayed traffic. Reveals real effects."],
  ["Prompt sensitivity analysis","Test paraphrases and format changes. Shows how brittle a prompt is."],
  ["Cost–quality curves","Plot quality against tokens and price. Guides how much context to include."],
  ["Prompt injection testing","Include adversarial content in tests. Checks that data cannot override instructions."],
  ["Observability of prompts","Log full prompts and outputs. Necessary to debug behavior after the fact."]]]
 ]}
);
