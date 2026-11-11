/* Band D — Frontier. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"D1",band:"D",name:"Training & Improving Agents",sum:"Teaching models to act well, beyond prompting.",deps:["A2","B3"],
 overview:"Prompting and harness design go far, but the strongest agents are also trained for the job. This region covers learning from trajectories, reinforcement learning with verifiable rewards, reward design and process supervision, and the ways agents can improve from their own experience.",
 why:"Reinforcement learning on agentic tasks is a main driver of recent gains in coding and tool use. Understanding rewards, environments and their pitfalls is central to building and judging trained agents.",
 subs:[
 ["Learning from demonstrations","imitation first",[
  ["Supervised fine-tuning on trajectories","Train on recorded sequences of actions and results from good runs. A common first stage that teaches tool formats and basic behavior."],
  ["Behavior cloning","Imitate expert actions directly. Simple but suffers when the agent drifts into situations the experts never showed."],
  ["Distribution shift in agents","Agents encounter states unlike their training data after their own mistakes. A core reason imitation alone falls short."],
  ["Synthetic trajectory generation","Use strong models to produce training traces, filtered for success. Scales data cheaply but inherits teacher errors."],
  ["Rejection sampling & filtering","Keep only successful trajectories for training. A simple, effective improvement loop."],
  ["Data quality for agent training","Clean, correct and diverse traces matter more than volume. Noisy traces teach bad habits."],
  ["Tool-use datasets","Collections of calls with arguments and results. Used to teach function-calling formats."]]],
 ["Reinforcement learning for agents","learning from outcomes",[
  ["RL with verifiable rewards","Train on tasks where success can be checked automatically, such as passing tests or correct answers. Produces strong reasoning and coding."],
  ["Policy-gradient methods (PPO, GRPO)","Algorithms updating the model toward higher-reward behavior. GRPO compares groups of samples and avoids a separate value model."],
  ["Environments & gyms","Simulated or sandboxed tasks the agent practices in. The quality and diversity of environments limits what is learned."],
  ["Long-horizon credit assignment","Deciding which of many steps deserve credit for a final outcome. Difficult when rewards are sparse."],
  ["Multi-turn RL","Optimize across entire interactions rather than single replies. Needed for agents that use tools over many steps."],
  ["Exploration","Trying varied approaches to find better strategies. Without it models settle on narrow behaviors."],
  ["Reward hacking in agents","Exploiting loopholes in the environment or tests rather than solving the task. A serious practical issue to design against."]]],
 ["Rewards & feedback","what we optimize",[
  ["Outcome rewards","Score only the final result. Simple and hard to game when verification is solid, but sparse."],
  ["Process rewards","Score intermediate steps. Give denser guidance, though step labels are costly and imperfect."],
  ["Reward models & LLM judges","Learned or prompted scorers of quality. Needed for tasks without automatic checks and open to exploitation."],
  ["Rubrics & checklists as rewards","Break quality into explicit criteria that are scored. More transparent than a single scalar."],
  ["Human preference feedback","Rankings from people used to train models. Costly and shaped by annotator biases."],
  ["AI feedback & self-play","Models critique or compete against copies. Scales feedback but risks shared blind spots."],
  ["Verifier quality","A reward is only as trustworthy as its verifier. Weak tests train models to pass tests instead of solve problems."]]],
 ["Self-improvement","agents that get better with use",[
  ["Learning from experience","Store lessons from past runs and apply them later. Can happen through memory or training."],
  ["Self-refinement loops","Generate, critique and revise. Gains depend on reliable critique signals."],
  ["Skill libraries","Save working procedures as reusable skills. Let an agent build capability over time."],
  ["Automated prompt & workflow optimization","Search over prompts and structures using evaluation scores. Reduces manual tuning."],
  ["Online learning & adaptation","Update from live feedback. Raises safety and stability concerns."],
  ["Evolutionary & open-ended methods","Evolve agent designs or code and keep improvements. A research direction with promising early results."],
  ["Limits of self-improvement","Without external verification, loops can reinforce errors. Grounded checks are essential."]]],
 ["Training considerations","practical matters",[
  ["Cost of agentic RL","Rollouts with tools are slow and expensive. Infrastructure for parallel environments is central."],
  ["Environment fidelity","Training tasks should resemble deployment. Mismatches cause brittle agents."],
  ["Capability vs. safety tradeoffs in training","Optimizing for task success can erode other behaviors. Must be tracked with separate evaluations."],
  ["Catastrophic forgetting","New training can erase earlier skills. Mix old data and test broadly."],
  ["Evaluation contamination","Training on test tasks inflates scores. Keep benchmarks held out."],
  ["Open vs. closed training recipes","Open-weight models allow custom tuning for agents. Closed models rely on prompting and harness design."],
  ["Small specialized agents","Fine-tuned small models can beat larger ones on narrow tasks. Cheaper to run."]]]
 ]},

{ref:"D2",band:"D",name:"Domain Agents",sum:"Agentic systems built for specific kinds of work.",deps:["B1","B2","C3"],
 overview:"General principles meet specific tasks. This region surveys the main application families of agents, such as coding, research, data analysis, computer operation, enterprise workflows and science, and what each demands in tools, verification and oversight.",
 why:"Domains differ in how easily success can be checked and how costly mistakes are. Coding has tests; open research does not. That difference largely decides how autonomous an agent can safely be.",
 subs:[
 ["Coding agents","software engineering",[
  ["Coding agent loop","Read code, plan, edit files, run tests and iterate. Strong feedback from compilers and tests makes this a leading use case."],
  ["Repository navigation & search","Find relevant files and symbols in large codebases. Often the hardest part of real tasks."],
  ["Test-driven & verification-first workflows","Write or use tests to define and check success. Guards against plausible but wrong changes."],
  ["Code review & PR agents","Review diffs, suggest fixes and open pull requests. Need clear rules for what they may merge."],
  ["SWE-bench & software benchmarks","Tests of resolving real repository issues. Useful but narrow, and results depend on harness details."],
  ["Terminal & IDE integration","Run in the developer's own tools. Shape the review and permission experience."],
  ["Risks of generated code","Subtle bugs, insecure patterns and dependency issues. Require human review and testing."]]],
 ["Research & knowledge agents","finding and synthesizing",[
  ["Deep research agents","Plan searches, read many sources and write cited reports. Often use multi-agent fan-out for breadth."],
  ["Source evaluation & citation","Judge reliability and attribute claims. Critical to avoid confident misinformation."],
  ["Literature review & scientific assistants","Survey papers and extract findings. Speed up scholarly work but need verification."],
  ["Question answering over enterprise data","Combine retrieval with permissions. Must respect who may see what."],
  ["Report generation","Assemble findings into structured documents. Quality depends on grounding and editing."],
  ["Fact-checking loops","Verify claims against sources. A major defense against hallucination."],
  ["Handling conflicting evidence","Present disagreements instead of picking silently. A mark of trustworthy research."]]],
 ["Computer & workflow agents","operating software",[
  ["Computer-use agents","Operate graphical interfaces to complete tasks. Broad reach with lower reliability and higher risk."],
  ["Browser agents","Navigate sites to book, buy or fill forms. Exposed to untrusted pages and prompt injection."],
  ["Customer support agents","Resolve tickets using knowledge and account tools. Escalation to humans is a design requirement."],
  ["Business process automation","Replace brittle scripted flows with agents handling variation. Need audit trails."],
  ["Personal assistants","Manage email, calendar and tasks. Act with sensitive access, so permissions are crucial."],
  ["Data analysis & BI agents","Query data, run analysis and chart results. Correct definitions and verification matter."],
  ["Document processing & extraction","Read forms, contracts and reports into structured data. Accuracy checks are required."]]],
 ["Science, engineering & specialized fields","high-expertise domains",[
  ["Scientific discovery agents","Propose hypotheses, run experiments and analyze results. Tied to labs or simulators for feedback."],
  ["Chemistry & biology agents","Use specialized tools for molecules and sequences. Raise biosecurity considerations."],
  ["Mathematics & proof agents","Combine models with formal verifiers. Correctness is checkable, enabling strong results."],
  ["Engineering design & simulation agents","Drive simulators and optimization tools. Constraints and physics must be enforced."],
  ["Healthcare agents","Assist with documentation and triage under strict oversight. Regulated and high-stakes."],
  ["Legal & compliance agents","Review documents against rules. Need accuracy and confidentiality."],
  ["Finance & operations agents","Reconcile, forecast and flag anomalies. Controls and audit are mandatory."]]],
 ["Government, defense & regulated settings","constraints shape design",[
  ["Air-gapped and restricted deployments","Agents may run with no internet and controlled model transfer. Tooling and updates must fit these limits."],
  ["Data classification & access control","Agents must respect levels of sensitivity and need-to-know. Enforced outside the model."],
  ["Auditability & accountability","Every action traceable to a decision and a responsible person. A baseline requirement."],
  ["Analyst-support agents","Triage, summarize and cross-reference large volumes of information. Human judgment remains final."],
  ["Human oversight requirements","Policies requiring approval for consequential actions. Shape autonomy levels."],
  ["Assurance & test and evaluation","Evidence an agent behaves reliably in intended conditions. Extends classical T&E to learned, adaptive systems."],
  ["Procurement and ATO considerations","Systems must meet security authorization before use. Affect model and tool choices."]]]
 ]},

{ref:"D3",band:"D",name:"Interoperability & Ecosystem",sum:"Standards, identity and economics for a world of many agents and tools.",deps:["B1","C2"],
 overview:"As agents multiply, they need common ways to discover each other, prove who they are, exchange work and pay for services. This region covers emerging protocols, identity and authorization, marketplaces and distribution, and the broader shift toward software designed for agents as users.",
 why:"The ecosystem layer determines which agents can work together and under what trust. Standards reduce lock-in and integration cost, and identity and authorization are what make delegation safe.",
 subs:[
 ["Protocols & standards","shared languages",[
  ["Model Context Protocol","A widely adopted standard for connecting agents to tools and data. Reduces custom integration work."],
  ["Agent2Agent protocol","A standard for agents to discover capabilities and exchange tasks. Targets cross-vendor agent collaboration."],
  ["Agent cards & capability discovery","Machine-readable descriptions of what an agent can do and how to reach it. Enable routing without hard-coding."],
  ["Open standards governance","Standards maintained by foundations or communities. Affect long-term stability and neutrality."],
  ["Tool and API description formats","OpenAPI, JSON Schema and similar. The base layer on which agents build."],
  ["Versioning & compatibility","Protocols evolve, so clients and servers must negotiate versions. Cause quiet breakage if ignored."],
  ["Context-sharing formats","Common ways to package instructions, skills and memory. Make capabilities portable."]]],
 ["Identity, trust & authorization","who may do what",[
  ["Agent identity","A verifiable identity for an agent, separate from the user it serves. Needed for accountability."],
  ["Delegated authorization (OAuth-style)","Users grant agents limited, revocable access to their accounts. The standard pattern for acting on someone's behalf."],
  ["Scoped & short-lived credentials","Tokens limited in power and time. Reduce harm if leaked."],
  ["Authenticating tool servers","Verify that a server is what it claims. Guards against impersonation."],
  ["Consent & intent verification","Confirm that an action reflects what the user actually wanted. Important for purchases and messages."],
  ["Non-human identities in enterprises","Service accounts and agents managed like workers. Need lifecycle, review and revocation."],
  ["Trust between agents","How one agent decides to rely on another's output. Based on provenance, reputation and verification."]]],
 ["Distribution & marketplaces","how capabilities spread",[
  ["Tool and server registries","Catalogs for discovering integrations. Create convenience and supply-chain risk."],
  ["Skill and plugin marketplaces","Shared packages of capabilities. Need review and signing."],
  ["Agent marketplaces","Places to find and hire specialized agents. Pricing and quality assurance are still developing."],
  ["Supply-chain security for agent components","Malicious or compromised tools and skills. Treat third-party components like dependencies."],
  ["Licensing & terms of use","What agents may access and do under provider terms. Affect scraping and automation."],
  ["Open source vs. proprietary agents","Tradeoffs in control, cost and capability. Many systems mix both."],
  ["Versioned, auditable capability packages","Bundles with pinned versions and manifests. Support reproducibility."]]],
 ["Economics & payments","the market for agent work",[
  ["Agentic commerce","Agents shopping and transacting for users. Requires payment authorization and fraud controls."],
  ["Micropayments for tools & data","Pay-per-call access for agent consumers. Enables metered services."],
  ["Pricing models","Per token, per task or per outcome. Align cost with value delivered."],
  ["Cost of autonomy vs. human labor","Compare agent cost and error rates to people. Includes review and correction time."],
  ["Productivity measurement","Assess real gains, not demos. Often smaller and more uneven than expected."],
  ["Labor & organizational impact","Changes to roles and workflows. A major social and management question."],
  ["Concentration & lock-in","Dependence on few model and platform providers. Standards and open weights offer mitigation."]]],
 ["Software for agents","designing for agent users",[
  ["Agent-friendly APIs & docs","Clear, machine-readable interfaces and documentation. Improve agent success."],
  ["llms.txt & machine-readable sites","Conventions for presenting content to models. Reduce parsing errors."],
  ["Agent-readable web & structured data","Markup that conveys meaning without scraping. Helps agents act reliably."],
  ["Bot management & verification","Sites distinguishing helpful agents from abuse. Early norms are forming."],
  ["Observability for agent traffic","Understand how agents use a service. Informs product design."],
  ["Human–agent interfaces","Ways for people to delegate, review and steer. The UX of oversight is a design frontier."],
  ["Interop testing","Verify that agents and tools work across vendors. Catch protocol mismatches."]]]
 ]}
);
