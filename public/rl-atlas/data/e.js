/* Band E — Practice, applications and theory. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"E1",band:"E",name:"Practice & Engineering",sum:"Making RL work on real problems.",deps:["B2","B3"],
 overview:"RL is notoriously sensitive to implementation and setup. This region covers environment design, libraries and simulators, hyperparameters and debugging, evaluation and reproducibility, and the infrastructure for large-scale training.",
 why:"Most RL failures come from poorly specified environments, wrong rewards, or bugs hidden by noisy results. Good practice often matters more than choice of algorithm.",
 subs:[
 ["Environment design","defining the problem",[
  ["Gymnasium API","The standard interface of reset, step, observation, reward, termination and truncation. Lets algorithms plug into many environments."],
  ["Observation & action design","Choose what the agent sees and controls. Strongly affects learnability."],
  ["Reward design & testing","Verify rewards with simple policies and ablations. Poor rewards are the leading cause of failure."],
  ["Termination vs. truncation","Distinguish true end states from time limits. Incorrect handling biases values."],
  ["Action repeat & frame skip","Hold actions for several steps. Reduces effective horizon."],
  ["Wrappers & normalization","Composable modifications to observations and rewards. Standard practice."],
  ["Vectorized environments","Run many copies in parallel for throughput. Needed for on-policy methods."]]],
 ["Libraries & simulators","the toolchain",[
  ["Stable-Baselines3, CleanRL & RLlib","Reference implementations from simple to distributed. Starting points for experiments."],
  ["Brax, Isaac Lab & MuJoCo","Physics simulators, some GPU-accelerated. Make continuous control training fast."],
  ["JAX-based RL & end-to-end GPU training","Environments and learners on accelerators with no host transfer. Orders-of-magnitude speedups."],
  ["Atari ALE, DeepMind Control & Procgen","Common benchmark suites. Used to compare algorithms."],
  ["TRL, OpenRLHF & verl","Libraries for RL on language models. Handle rollout generation and policy updates."],
  ["Offline datasets & loaders","Standardized logged data. Support offline RL."],
  ["Experiment tracking","Log runs, seeds and configs with tools like Weights & Biases. Necessary for reproducibility."]]],
 ["Hyperparameters & debugging","getting it to learn",[
  ["Learning rate, batch size & discount tuning","Most influential settings. Sensitive to task."],
  ["Seeds & variance across runs","Results vary considerably between seeds. Report several."],
  ["Sanity-check environments","Trivial tasks to verify the implementation learns. First debugging step."],
  ["Value loss, entropy & explained variance diagnostics","Metrics that reveal critic quality and exploration. Standard monitoring."],
  ["Gradient and activation monitoring","Detect exploding or dead units. Common failure signals."],
  ["Overfitting to a single environment","Tuning to one benchmark yields misleading conclusions. Test broadly."],
  ["Automated hyperparameter search & AutoRL","Search or adapt hyperparameters during training. Population-based training is one form."]]],
 ["Evaluation & reproducibility","trusting results",[
  ["Learning curves & sample efficiency plots","Return versus environment steps. The usual comparison."],
  ["Statistical rigor (RLiable)","Interquartile mean, bootstrap intervals and performance profiles. More reliable than point estimates."],
  ["Deterministic vs. stochastic evaluation","Evaluate with the mean action or sampled actions. Affects reported scores."],
  ["Benchmark leakage & overfitting","Tuning on test environments inflates results. Use held-out tasks."],
  ["Compute and carbon reporting","Report resources used. Aids fair comparison."],
  ["Implementation details matter","Small code differences change performance. The 37 details of PPO study documents this."],
  ["Ablation studies","Remove components to find what matters. Essential for credible claims."]]],
 ["Infrastructure & systems","scaling training",[
  ["Actor–learner architectures","Separate data generation from gradient updates. Allow scaling to thousands of actors."],
  ["Replay buffers & data pipelines","Efficient storage and sampling of experience. Systems bottleneck for off-policy methods."],
  ["Asynchronous vs. synchronous training","Tradeoff between throughput and staleness. Affects stability."],
  ["Distributed rollouts for LLMs","Generation dominates cost in LLM RL. Specialized inference engines are used."],
  ["Checkpointing & fault tolerance","Long runs need recovery. Standard in large training."],
  ["Compute budgeting","Estimate environment steps needed before starting. Avoids wasted runs."],
  ["Simulation fidelity vs. speed","Faster approximate simulators allow more training. Balance with realism."]]]
 ]},

{ref:"E2",band:"E",name:"Applications",sum:"Where RL is used in practice.",deps:["C1","C2","D1"],
 overview:"RL has moved from games to products and science. This region surveys domains including games, robotics, recommendation and ads, operations and control, finance, science and engineering, and language-model training.",
 why:"Knowing where RL is actually deployed, and where simpler methods win, calibrates when it is the right tool and what data, simulators and safeguards are needed.",
 subs:[
 ["Games & simulations","where RL excelled",[
  ["Atari & board games","DQN on Atari and AlphaGo-line systems on Go, chess and shogi. Established deep RL."],
  ["Real-time strategy & esports","AlphaStar and OpenAI Five. Handle huge action spaces and long horizons."],
  ["Poker & imperfect information","Libratus and Pluribus. Combine RL with game solving."],
  ["Procedural content & game testing","Agents that playtest or generate levels. Practical industry use."],
  ["Game AI and non-player characters","Learned opponents and companions. Balance fun with strength."],
  ["Algorithm discovery (AlphaTensor, AlphaDev)","Treat discovery as a game. Found faster matrix multiplication and sorting routines."],
  ["Mathematics & theorem proving","RL guides search in formal systems. Related to AlphaProof."]]],
 ["Robotics & control","acting in the physical world",[
  ["Locomotion","Legged robots trained in simulation and transferred. Among the most successful RL deployments."],
  ["Dexterous manipulation","In-hand manipulation such as solving a Rubik's cube. Needs large-scale randomization."],
  ["Drone racing & aerial control","RL policies matching or beating human pilots. Showed RL controllers on agile systems."],
  ["Plasma and industrial control","Controlling tokamak plasma and cooling systems. Demonstrate RL for complex physical processes."],
  ["Autonomous driving","Planning and behavior policies with simulation. Mostly combined with other methods."],
  ["Autonomous racing (Gran Turismo Sophy)","Superhuman racing agent. Combined RL with careful reward design."],
  ["Sim-to-real & real-world fine-tuning","Bridge simulation and hardware. Key to deployment."]]],
 ["Recommendation, ads & operations","decisions at scale",[
  ["Recommender systems","Optimize long-term engagement with slate decisions. Use bandits and sometimes full RL."],
  ["Online advertising & bidding","Budgeted bidding and allocation. Rely on bandit and constrained RL."],
  ["Supply chain & inventory","Dynamic ordering and routing. Classic MDP applications."],
  ["Energy & data-center control","Cooling and grid management. Reported significant efficiency gains."],
  ["Network & resource scheduling","Congestion control, cluster scheduling and chip placement. Learned heuristics beat hand-tuned ones."],
  ["Dynamic pricing & revenue management","Adapt prices to demand. Combine forecasts and control."],
  ["Telecom and wireless optimization","Resource allocation in networks. Active research area."]]],
 ["Science, health & finance","high-stakes domains",[
  ["Drug and molecule design","Generate molecules optimized for properties. RL with generative models."],
  ["Treatment policies & dynamic treatment regimes","Learn sequential treatment strategies from records. Require careful off-policy evaluation."],
  ["Experimental design & lab automation","Choose experiments adaptively. Related to Bayesian optimization."],
  ["Portfolio & trading","Optimal execution and portfolio management. Hampered by non-stationarity and noisy data."],
  ["Chip design & compilers","Floorplanning and code optimization. Reported by industry research."],
  ["Education & personalization","Adaptive tutoring sequences. Use bandits and RL."],
  ["Climate and resource management","Control of energy, water and fisheries. Safety and fairness concerns."]]],
 ["Language & generative models","RL in the LLM stack",[
  ["Chat assistants","RLHF for helpfulness and harmlessness. The most widely used RL application."],
  ["Reasoning & math models","RL with verifiable rewards. Drives recent gains."],
  ["Coding agents","Reward from tests and execution in sandboxes. Strongly benefits from RL."],
  ["Image & diffusion model alignment","Fine-tune generators with reward feedback such as DDPO. Improve aesthetics and prompt fidelity."],
  ["Dialogue & negotiation","Learn conversation strategy for goals. Cicero combined language and planning."],
  ["Search & retrieval agents","Train agents to issue queries and use results. Reward by answer accuracy."],
  ["Recommendation with LLMs","Combine RL and language models in personalization. Emerging area."]]]
 ]},

{ref:"E3",band:"E",name:"Theory & Open Problems",sum:"What is proven and what is unsolved.",deps:["A1","A3","B1"],
 overview:"Theoretical RL asks how many samples are needed and when algorithms converge. This region covers sample complexity, function approximation theory, regret bounds, the offline and model-based theory, and the open problems of long-horizon credit assignment, generalization and scaling.",
 why:"Theory identifies what is fundamentally hard, such as exploration with large state spaces, and what assumptions make learning possible. It also frames the open questions that practitioners meet daily.",
 subs:[
 ["Sample complexity & regret","how much data",[
  ["PAC-MDP","Algorithms that find near-optimal policies with high probability in polynomially many samples. Formal efficiency notion."],
  ["Regret bounds for MDPs (UCRL, UCBVI)","Optimism-based algorithms with sublinear regret in tabular MDPs. Extend bandit analysis."],
  ["Generative model sample complexity","Samples needed when one can query any state. Gives baseline lower bounds."],
  ["Minimax lower bounds","Hardness results showing the dependence on states, actions and horizon. Delimit what algorithms can achieve."],
  ["Effect of the horizon","Sample needs grow with effective horizon. Motivates discount choice."],
  ["Lower bounds for exploration","Some problems need exponentially many samples without structure. Show need for assumptions."],
  ["Instance-dependent bounds","Complexity that depends on the specific MDP. More refined than worst case."]]],
 ["Function approximation theory","learning with generalization",[
  ["Linear MDPs","Transitions and rewards linear in known features. Allow efficient algorithms with approximation."],
  ["Bellman rank & eluder dimension","Complexity measures that capture when exploration is tractable. Unify many settings."],
  ["Realizability & Bellman completeness","Assumptions that the function class contains the target values. Needed for provable guarantees."],
  ["Exponential lower bounds without structure","Realizability alone does not suffice for efficiency. Highlights necessary assumptions."],
  ["Convergence of TD with function approximation","Guaranteed in on-policy linear case, can diverge off-policy. Formalizes the deadly triad."],
  ["Policy gradient convergence","Global convergence results under conditions such as softmax parameterization. Despite nonconvexity."],
  ["Neural tangent and overparameterization views","Analyzing deep RL in wide-network regimes. Early insight."]]],
 ["Offline & model-based theory","data and models",[
  ["Concentrability coefficients","Measure how well a dataset covers a target policy. Central to offline guarantees."],
  ["Pessimism provably helps","Conservative estimates yield guarantees with partial coverage. Theoretical basis of offline RL."],
  ["Off-policy evaluation limits","Variance lower bounds show hardness of long-horizon OPE. Curse of horizon."],
  ["Model-based sample efficiency","Models can be minimax optimal with simple plug-in approaches. Challenges folk wisdom."],
  ["Simulation lemma","Bounds value error given model error. Fundamental tool."],
  ["Imitation learning bounds","Cloning error grows quadratically with horizon; interactive methods linearly. Formalizes compounding errors."],
  ["Learning in POMDPs","Hardness and tractable subclasses. Information structure matters."]]],
 ["Connections & frameworks","unifying views",[
  ["Control as inference","Treat RL as probabilistic inference over trajectories. Underpins maximum-entropy methods."],
  ["Convex duality & linear programming view","Express optimal policies via occupancy measures. Basis of many offline algorithms."],
  ["Information theory in RL","Exploration and compression through mutual information. Appears in skill discovery."],
  ["Optimization landscape of policy gradients","Study of stationary points and rates. Relates to nonconvex optimization."],
  ["Mean-field & continuous-time limits","Analyze RL via differential equations. Link to stochastic control."],
  ["Neuroscience of RL","Dopamine as TD error, basal ganglia as actor-critic. Cross-disciplinary roots."],
  ["Economics & decision theory","Utility, risk and bounded rationality. Provide normative foundations."]]],
 ["Open problems","what is unsolved",[
  ["Sample-efficient exploration at scale","Principled exploration in rich observation spaces is unresolved. Practical methods are heuristic."],
  ["Long-horizon credit assignment","Attributing outcomes to decisions far back in time. Remains difficult."],
  ["Reliable generalization & transfer","Policies still fail outside training. Foundations are lacking."],
  ["Stable deep RL","Training remains sensitive and brittle. Needs better theory and defaults."],
  ["Reward specification & alignment","No general way to specify what we want. Active safety research."],
  ["Continual and lifelong RL","Learn indefinitely without forgetting or losing plasticity. Few mature methods."],
  ["Foundation models for decision-making","Pretrained generalist agents and their fine-tuning with RL. Rapidly evolving frontier."]]]
 ]}
);
