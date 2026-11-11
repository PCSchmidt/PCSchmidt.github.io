/* Band D — Frontier: RL for language models, multi-agent settings, and safe/aligned RL. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"D1",band:"D",name:"RL for Language Models & Reasoning",sum:"RLHF, verifiable rewards and agentic RL.",deps:["B3","C2"],
 overview:"Reinforcement learning now shapes how language models behave and reason. This region covers RLHF with learned reward models, preference optimization methods like DPO, RL from verifiable rewards for reasoning, process supervision, and RL for tool-using agents.",
 why:"Post-training with RL is where chat models acquire helpfulness and where reasoning models acquire long chain-of-thought. It connects classic policy-gradient ideas to the models most engineers now build on.",
 subs:[
 ["RLHF","aligning with human preferences",[
  ["RLHF pipeline","Supervised fine-tuning, reward-model training from comparisons, then RL against that reward. The recipe behind instruction-following chat models."],
  ["Preference data & Bradley–Terry model","Human rankings modeled as noisy utility comparisons. Basis of reward-model training."],
  ["Reward model","A network that scores responses to predict human preference. Serves as the optimization target."],
  ["KL penalty to reference policy","Penalize drift from the supervised model during RL. Prevents degenerate outputs."],
  ["PPO for language models","Token-level actor-critic updates with a value head. The original RLHF optimizer."],
  ["Reward hacking & overoptimization","Policies exploit reward-model errors, so true quality drops as proxy reward rises. Governed by scaling laws."],
  ["Annotator disagreement & preference noise","Humans disagree and biases leak into rewards. Limit what the reward represents."]]],
 ["Direct preference optimization","RLHF without an explicit RL loop",[
  ["DPO","Optimize the policy directly on preference pairs with a closed-form loss derived from the RLHF objective. Simpler and stable."],
  ["IPO, KTO & related losses","Variants that change robustness or use single-response signals. Address DPO's overfitting."],
  ["Implicit reward","The log-ratio between policy and reference acts as a reward. Links DPO to RLHF."],
  ["Online vs. offline preference optimization","Using fresh samples from the current policy versus a static dataset. Online generally works better."],
  ["Best-of-n & rejection sampling fine-tuning","Sample many responses and train on the best. Simple alternative to RL."],
  ["RLAIF & constitutional methods","AI-generated feedback guided by written principles replaces some human labels. Scales supervision."],
  ["Length bias & verbosity","Reward models often prefer longer answers. Mitigated by length control."]]],
 ["RL from verifiable rewards","reasoning with checkable outcomes",[
  ["RLVR","Reward based on automatically checkable answers such as math results or passing unit tests. Avoids learned reward models."],
  ["GRPO","Group-relative policy optimization using sampled group statistics as baseline instead of a critic. Efficient for LLM reasoning."],
  ["Reasoning models & long chain-of-thought","RL encourages extended reasoning, self-checking and backtracking. Seen in o1- and R1-style systems."],
  ["Outcome vs. process rewards","Reward only the final answer or each step. Process signals give denser credit but need labels."],
  ["Process reward models","Learned scorers of reasoning steps. Guide search and training."],
  ["Verifier design","Programs, test suites or proof checkers that decide correctness. Quality bounds the learnable skill."],
  ["Reward hacking with verifiers","Models game weak tests or formats. Requires robust checks."]]],
 ["Training dynamics & scaling","what happens during RL post-training",[
  ["Entropy collapse","Policy randomness shrinks, limiting exploration. Countered by clipping and entropy control."],
  ["Pass@k vs. pass@1","RL can improve single-sample accuracy without expanding the reachable solution set. Debated finding."],
  ["Test-time compute scaling","Spend more tokens or samples at inference for better answers. RL teaches effective use."],
  ["Curriculum & data difficulty","Problems that are neither trivially easy nor impossible give signal. Filtering by pass rate."],
  ["Off-policy lag in large-scale rollouts","Asynchronous generation means data come from older policies. Needs corrections."],
  ["Reward model scaling laws","Gold-reward performance versus proxy optimization pressure. Quantifies overoptimization."],
  ["Distillation of reasoning","Smaller models trained on traces from RL-trained ones. Efficient transfer."]]],
 ["Agentic & tool-use RL","learning to act in environments",[
  ["Multi-turn RL for agents","Optimize whole interaction trajectories with tools. Credit assignment spans many steps."],
  ["Tool-use & code execution rewards","Reward successful tool calls or passing programs. Teaches reliable execution."],
  ["RL environments & gyms for LLMs","Sandboxed tasks with automatic grading. A key resource for scaling agent training."],
  ["Computer-use & web agents","Agents trained to operate interfaces. Reward from task completion."],
  ["Long-horizon credit assignment in language agents","Sparse final rewards across many tokens and steps. Motivates intermediate signals."],
  ["Self-play & self-improvement for LLMs","Models generate problems and solutions for each other. Extends AlphaZero ideas."],
  ["Rubric-based & LLM-judge rewards","Use structured rubrics or model graders for open-ended tasks. Extend RL beyond verifiable domains."]]]
 ]},

{ref:"D2",band:"D",name:"Multi-Agent RL & Games",sum:"Learning when other learners share the world.",deps:["B2","B3","C1"],
 overview:"When several agents learn simultaneously, the environment becomes non-stationary and outcomes depend on strategic interaction. This region covers game theory basics, cooperative and competitive multi-agent learning, self-play systems, and population-based training.",
 why:"Multi-agent RL covers games, traffic, markets and teams of AI agents. The concepts, such as equilibrium and coordination, are also relevant to systems of interacting LLM agents.",
 subs:[
 ["Game-theoretic foundations","strategic interaction",[
  ["Normal-form & extensive-form games","Payoff matrices for simultaneous play and trees for sequential play. Standard models of strategy."],
  ["Nash equilibrium","A profile where no player gains by unilaterally changing strategy. The central solution concept."],
  ["Zero-sum & general-sum games","Strictly opposed interests versus mixed ones. Different algorithms and guarantees apply."],
  ["Markov (stochastic) games","Multi-agent generalization of MDPs. Formal setting of MARL."],
  ["Correlated equilibrium & coarse variants","Equilibria with a shared signal. Reachable by no-regret learning."],
  ["Partially observable & imperfect-information games","Players hold private information, as in poker. Require belief reasoning."],
  ["Evolutionary game theory","Strategies evolve under replication dynamics. Offers analysis of populations."]]],
 ["Cooperative MARL","teams",[
  ["Dec-POMDP","Team decision problem with decentralized partial observations. Computationally very hard."],
  ["Centralized training, decentralized execution","Use global information in training but act on local observations. Dominant paradigm."],
  ["Independent learners","Each agent treats others as part of the environment. Simple but non-stationary."],
  ["Value decomposition (VDN, QMIX)","Factor a joint Q-function into per-agent utilities. Enable decentralized greedy action."],
  ["MADDPG & multi-agent actor-critic","Critics see all agents' actions while actors use local data. Handle mixed settings."],
  ["Credit assignment among agents","Attribute team reward to individuals. Counterfactual baselines (COMA) address it."],
  ["Communication learning","Agents learn to send messages (CommNet, DIAL). Emergent protocols form."]]],
 ["Competitive learning & self-play","adversaries",[
  ["Self-play","Train against copies of oneself. Produces ever-stronger opponents in symmetric games."],
  ["Fictitious play & no-regret learning","Best-respond to opponents' history or minimize regret. Converge to equilibria in some classes."],
  ["Counterfactual regret minimization (CFR)","Iterative regret algorithm for imperfect-information games. Powered poker AIs."],
  ["Poker & Diplomacy systems","Libratus, Pluribus and Cicero combine search, equilibrium and language. Milestones for imperfect-information play."],
  ["Policy-space response oracles (PSRO)","Grow a population of best responses to a mix of earlier policies. Principled self-play for general games."],
  ["Population-based training & league play","Train populations with diversity, as in AlphaStar. Avoids cycling and exploits."],
  ["Exploitability & evaluation","How much a best-responding opponent can gain. A rigorous measure of strategy quality."]]],
 ["Emergence, social dilemmas & mechanisms","complex outcomes",[
  ["Emergent behavior & tool use in multi-agent environments","Hide-and-seek agents invented strategies through competition. Illustrates open-ended escalation."],
  ["Social dilemmas","Individual and group incentives conflict, as in prisoner's dilemma. Studied in sequential form."],
  ["Opponent modeling & theory of mind","Infer other agents' goals and policies. Important for coordination."],
  ["Ad hoc teamwork & zero-shot coordination","Cooperate with unseen partners without prior agreement. Needed for human–AI teams."],
  ["Human-AI collaboration","Policies that adapt to human partners, as in Overcooked benchmarks. Training with human models improves results."],
  ["Mechanism design & incentive alignment","Design rules so selfish agents produce good outcomes. Relevant to markets and agent economies."],
  ["Mean-field games","Approximate large populations by an average effect. Makes many-agent problems tractable."]]],
 ["Scaling & infrastructure","large-scale systems",[
  ["AlphaStar & OpenAI Five","Large-scale RL for StarCraft II and Dota 2. Showed RL at scale on complex games."],
  ["Distributed self-play infrastructure","Thousands of simulation workers with shared learners. Engineering core of game agents."],
  ["Non-stationarity & moving targets","Other learners change the environment. Destabilizes replay and value learning."],
  ["Benchmarks (SMAC, Melting Pot, PettingZoo)","Standard multi-agent environments. Enable comparison."],
  ["Scalability with agent count","Joint action space grows exponentially. Parameter sharing and factorization help."],
  ["Multi-agent LLM systems","Language-model agents that debate, negotiate or collaborate. Apply MARL ideas informally."],
  ["Evaluation across opponent pools","Performance depends on who the opponents are. Needs diverse partners and rivals."]]]
 ]},

{ref:"D3",band:"D",name:"Safe, Robust & Human-Aligned RL",sum:"Making learned behavior trustworthy.",deps:["C2","C3"],
 overview:"RL optimizes whatever reward it is given, often in unintended ways. This region covers constraints and safe exploration, robustness to uncertainty, reward specification problems, learning from human feedback and oversight, and scalable alignment concerns.",
 why:"These issues separate lab demos from systems that act in the world. They are also where classical RL meets modern AI alignment.",
 subs:[
 ["Safe RL","respecting constraints",[
  ["Constrained RL","Maximize return subject to expected cost limits. Standard formal approach to safety."],
  ["Lagrangian methods","Learn a multiplier that trades reward against constraint violation. Simple and widely used."],
  ["Constrained policy optimization (CPO)","Trust-region method that approximately guarantees constraint satisfaction. Stronger guarantees than penalties."],
  ["Safe exploration","Avoid dangerous states while learning. Needs priors or models of safety."],
  ["Shielding & safety layers","A runtime monitor that overrides unsafe actions. Provides hard guarantees for specified properties."],
  ["Control barrier functions & Lyapunov methods","Certificates that keep the system in safe sets. Links RL to control theory."],
  ["Risk-sensitive RL (CVaR)","Optimize tail outcomes instead of averages. Important for rare catastrophic events."]]],
 ["Robust RL","handling uncertainty and perturbations",[
  ["Robust MDP","Optimize worst-case performance over a set of possible dynamics. Hedges against model error."],
  ["Domain randomization as robustness","Train across randomized dynamics to be insensitive to them. Practical robust training."],
  ["Adversarial training in RL (RARL)","Train against an adversary that perturbs the system. Improves robustness."],
  ["Distributionally robust RL","Optimize over distributions near the nominal one. Principled formulation."],
  ["Sim-to-real gap","Mismatch between simulation and reality. Central robustness problem in robotics."],
  ["Observation perturbation robustness","Policies resilient to sensor noise and attacks. Evaluated with adversarial inputs."],
  ["Uncertainty estimation & out-of-distribution detection","Recognize when inputs lie outside experience. Triggers fallback behavior."]]],
 ["Reward specification","getting the objective right",[
  ["Reward hacking & specification gaming","Agents achieve high reward through unintended behavior. Documented in many examples."],
  ["Goodhart's law","When a measure becomes a target it stops being a good measure. Explains reward-proxy failures."],
  ["Goal misgeneralization","The agent competently pursues a different goal outside training. Differs from capability failure."],
  ["Inverse reward design","Treat the specified reward as evidence about the true intent. Accounts for designer mistakes."],
  ["Side effects & impact regularization","Penalize unnecessary changes to the environment. Aims to avoid collateral damage."],
  ["Corrigibility & shutdown problems","An optimizer may resist interruption. Safe interruptibility addresses this."],
  ["Wireheading & reward tampering","Agents manipulate their reward channel. A theoretical concern for powerful learners."]]],
 ["Human feedback & oversight","learning what people want",[
  ["Reward learning from preferences","Fit rewards to human comparisons of trajectories. Allows tasks that are hard to specify."],
  ["Assistance games & cooperative IRL","Treat the human as part of the environment with a hidden reward. Agents stay uncertain about goals."],
  ["Active preference learning","Choose informative queries to reduce labeling effort. Improves feedback efficiency."],
  ["Scalable oversight","Methods like debate, recursive reward modeling and amplification to supervise tasks beyond direct human evaluation. Open research."],
  ["Interactive & corrective feedback","Humans intervene or correct during execution. Provides rich, timely signals."],
  ["Reward models and their limits","Preference learning inherits human biases and inconsistency. Weakness of RLHF."],
  ["Value pluralism & whose preferences","Different people want different things. Raises aggregation questions."]]],
 ["Evaluation, interpretability & governance","assurance for learned policies",[
  ["Red-teaming policies","Search for failure cases with adversarial testing. Complements average-case metrics."],
  ["Interpretability of policies","Analyzing representations and decision factors. Helps detect unintended goals."],
  ["Formal verification of learned controllers","Prove properties of neural policies in bounded settings. Limited scale."],
  ["Runtime monitoring & fallback policies","Detect anomalies and switch to safe behavior. Practical safety net."],
  ["Staged deployment & canary testing","Roll out gradually with monitoring. Operational practice for risky policies."],
  ["Responsible deployment & regulation","Standards and law around autonomous decision systems. Shape documentation and testing."],
  ["Long-term & power-seeking risks","Concerns that capable optimizers seek resources or avoid correction. Debated research topic."]]]
 ]}
);
