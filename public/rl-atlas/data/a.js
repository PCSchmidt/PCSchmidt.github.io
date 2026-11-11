/* Band A — Bedrock. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"A1",band:"A",name:"Decision Problems & MDPs",sum:"The formal language of sequential decision-making under uncertainty.",deps:[],
 overview:"Reinforcement learning studies an agent that acts, observes consequences and tries to maximize cumulative reward. This region covers the Markov decision process that formalizes it, the value functions and Bellman equations that characterize optimal behavior, and the variations such as partial observability and continuous time that arise in practice.",
 why:"Every RL algorithm is a way of solving or approximating an MDP. Being exact about states, actions, rewards, discounting and the Markov assumption prevents the most common modeling mistakes, such as rewards that do not encode the goal.",
 subs:[
 ["The MDP framework","the standard model",[
  ["Agent–environment interaction","At each step the agent observes a state, chooses an action and receives a reward and a new state. The loop that every RL problem shares."],
  ["Markov decision process","A tuple of states, actions, transition probabilities, rewards and a discount factor. The standard mathematical model of sequential decisions."],
  ["Markov property","The future depends on the past only through the current state. When it fails, the state must be redefined or memory added."],
  ["State, observation & action spaces","What the agent knows and what it can do, discrete or continuous. Their design strongly affects learnability."],
  ["Transition dynamics","The probabilities of next states given state and action. Usually unknown in RL, which is what makes it learning."],
  ["Reward function","A scalar signal defining the goal. The reward hypothesis says all goals can be expressed as maximizing expected cumulative reward."],
  ["Episodic vs. continuing tasks","Tasks with a clear end versus ones that go on indefinitely. Determines how returns are defined."]]],
 ["Returns, policies & values","what is being optimized",[
  ["Return & discounting","The sum of future rewards, usually weighted by a discount factor below one. Discounting expresses preference for sooner reward and keeps sums finite."],
  ["Policy","A rule mapping states to actions or to a distribution over actions. The thing an RL agent ultimately produces."],
  ["State-value function","Expected return from a state when following a policy. Measures how good it is to be in a state."],
  ["Action-value function (Q)","Expected return from taking an action in a state and then following a policy. Lets an agent compare actions without a model."],
  ["Advantage function","How much better an action is than the policy's average action in a state. Used to reduce variance in policy-gradient methods."],
  ["Optimal policy & value","A policy achieving the highest value in every state. At least one deterministic optimal policy exists in a finite MDP."],
  ["Average-reward formulation","Optimize reward per step rather than discounted sum. Suited to continuing tasks."]]],
 ["Bellman equations","the recursive structure",[
  ["Bellman expectation equation","The value of a state equals the expected immediate reward plus discounted value of the next state, under a policy. The basis of policy evaluation."],
  ["Bellman optimality equation","The optimal value equals the best action's expected reward plus discounted optimal next value. Optimal policies satisfy it."],
  ["Bellman operator & contraction","The operator that maps value estimates to improved ones, shrinking errors by the discount factor. Guarantees convergence of value iteration."],
  ["Bootstrapping","Updating an estimate using other estimates rather than complete returns. Source of both efficiency and instability in RL."],
  ["Dynamic programming principle","Optimal decisions can be built from optimal solutions of subproblems. The idea behind value iteration and many planning algorithms."],
  ["Temporal consistency","Value estimates at consecutive steps must agree through the reward. Violations drive learning."],
  ["Existence & uniqueness of solutions","Under standard conditions the optimal value function is unique. Provides targets for algorithms."]]],
 ["Extensions of the model","beyond the basic MDP",[
  ["Partially observable MDP (POMDP)","The agent sees only noisy observations and must track a belief over states. Realistic for robots and dialogue but hard to solve."],
  ["Belief states & memory","Summarize history in a belief or recurrent state. Restores the Markov property."],
  ["Semi-Markov & options","Actions that last variable time. Foundation of hierarchical RL."],
  ["Continuous-time & continuous-state problems","Control problems with differential dynamics. Connect RL to optimal control."],
  ["Constrained MDP","Maximize reward subject to expected cost limits. Model safety constraints."],
  ["Multi-objective MDP","Several reward signals traded off. Yields Pareto fronts of policies."],
  ["Contextual & non-stationary MDPs","Dynamics that vary with context or drift in time. Common in real deployments."]]],
 ["RL vs. neighboring fields","where it sits",[
  ["RL vs. supervised learning","RL gets evaluative feedback on actions taken, not correct answers, and its data depends on its own behavior. Credit assignment and exploration are the added difficulties."],
  ["RL vs. optimal control","Control usually assumes a known model; RL learns from interaction. Many methods are shared."],
  ["RL vs. bandits","Bandits have no state transitions or long-term effects. They are the simplest RL setting."],
  ["Credit assignment","Determining which past actions caused a reward. A central challenge when rewards are delayed."],
  ["Sample efficiency","How much experience an algorithm needs. The main practical cost of RL."],
  ["On-policy vs. off-policy","Learn from data generated by the current policy or by another. Off-policy methods reuse data but are less stable."],
  ["Model-free vs. model-based","Learn values and policies directly, or learn and use a model of dynamics. A fundamental design split."]]]
 ]},

{ref:"A2",band:"A",name:"Dynamic Programming & Planning",sum:"Solving MDPs exactly when the model is known.",deps:["A1"],
 overview:"When transition probabilities and rewards are known, an optimal policy can be computed without interaction. This region covers policy evaluation, policy and value iteration, linear-programming and approximate formulations, and search-based planning such as Monte Carlo tree search.",
 why:"Dynamic programming defines what learning algorithms are trying to approximate, and planning methods are used inside model-based RL and systems like AlphaZero. Understanding them clarifies what is hard about the unknown-model case.",
 subs:[
 ["Exact dynamic programming","classical algorithms",[
  ["Policy evaluation","Compute the value of a fixed policy by solving or iterating the Bellman expectation equation. A building block of other methods."],
  ["Policy improvement","Make the policy greedy with respect to its value function. Guaranteed not to make it worse."],
  ["Policy iteration","Alternate evaluation and improvement until the policy stops changing. Converges in few iterations for many problems."],
  ["Value iteration","Repeatedly apply the Bellman optimality operator to the value function. Simple and guaranteed to converge."],
  ["Asynchronous & prioritized sweeps","Update states in any order, focusing on those with large errors. Speeds up computation."],
  ["Generalized policy iteration","The common pattern in which evaluation and improvement interact at any granularity. Underlies nearly all RL methods."],
  ["Computational complexity","Exact methods scale with the number of states and are hampered by the curse of dimensionality. Motivates approximation."]]],
 ["Alternative formulations","other ways to solve",[
  ["Linear programming formulation","Compute optimal values as the solution of a linear program. Allows constraints and duality arguments."],
  ["Finite-horizon & backward induction","Solve from the last step backward. Used in scheduling and optimal stopping."],
  ["Stochastic shortest path","Goal-reaching problems with costs. Common in navigation and logistics."],
  ["LQR as a special case","Linear dynamics with quadratic cost have closed-form solutions. A bridge to control theory."],
  ["Optimal stopping","Decide when to stop a process to maximize reward. Appears in finance and sequential testing."],
  ["Partially observable planning","Solve POMDPs through value functions over beliefs. Approximations like point-based methods are required."],
  ["Inventory & queueing applications","Classical operations research uses of dynamic programming. Early industrial MDPs."]]],
 ["Approximate dynamic programming","scaling up",[
  ["Curse of dimensionality","State spaces grow exponentially with variables. Exact tabular methods fail."],
  ["Value function approximation","Represent values with a parameterized function such as a neural network. Enables generalization across states."],
  ["Approximate value & policy iteration","Perform the update steps with learned approximators. Errors compound and need analysis."],
  ["Fitted Q-iteration","Repeatedly regress Q-values on bootstrapped targets using a batch of data. The basis of offline and deep RL."],
  ["Linear function approximation & features","Value as a weighted sum of hand-designed features. Allows tractable analysis."],
  ["Rollout algorithms","Improve a base policy by simulating outcomes of actions. A simple and powerful planning technique."],
  ["Error bounds for approximation","Theory connecting approximation error to policy quality. Shows how errors accumulate over the horizon."]]],
 ["Search-based planning","lookahead with a model",[
  ["Forward search & expectimax","Expand a tree of actions and outcomes to a limited depth. Exact for small branching."],
  ["Monte Carlo tree search (MCTS)","Build a search tree using random rollouts and statistics, balancing exploration and exploitation. Foundation of strong game-playing programs."],
  ["Upper confidence bounds for trees (UCT)","Select actions in the tree by optimism under uncertainty. The standard MCTS selection rule."],
  ["Sparse sampling","Plan with a generative model, with cost independent of the number of states. Gives near-optimal guarantees."],
  ["Heuristic search (A*, LAO*)","Use heuristics to focus on promising states. Used in deterministic and stochastic planning."],
  ["Learned heuristics & priors in search","Neural networks guiding search, as in AlphaZero. Combine learning and planning."],
  ["Model predictive control as planning","Replan over a short horizon every step. Robust to model error."]]],
 ["Planning with learned or imperfect models","when the model is wrong",[
  ["Model error & compounding","Errors in predicted dynamics grow with planning depth. Limit the useful horizon."],
  ["Dyna architecture","Mix real experience with simulated experience from a learned model. A simple way to combine learning and planning."],
  ["Planning in latent space","Plan using compact learned representations. Used by MuZero and Dreamer."],
  ["Robust planning","Optimize against worst-case or uncertain models. Protects against model mismatch."],
  ["Uncertainty-aware planning","Use ensembles or Bayesian models to avoid exploiting model errors. A standard model-based RL safeguard."],
  ["Replanning","Recompute plans as new information arrives. Reduces the effect of errors."],
  ["Planning vs. reactive policies","Deliberate lookahead versus a trained reflex. Hybrids use both."]]]
 ]},

{ref:"A3",band:"A",name:"Bandits & Exploration",sum:"The exploration–exploitation tradeoff in its simplest form.",deps:["A1"],
 overview:"Before sequential decisions, there is the single-step problem of choosing among options with unknown payoffs. Multi-armed bandits isolate the exploration–exploitation tradeoff and provide the algorithms and regret theory later reused in full RL, recommendation systems and online experimentation.",
 why:"Bandit algorithms are widely deployed for ad selection, recommendations and adaptive experiments. Their analysis of regret introduces the language used to judge any learning-while-acting algorithm.",
 subs:[
 ["Problem setting","learning while acting",[
  ["Multi-armed bandit","Repeatedly choose among options with unknown reward distributions to maximize total reward. The minimal exploration problem."],
  ["Exploration vs. exploitation","Trying new options to learn versus using the best known. The central dilemma of RL."],
  ["Regret","The difference between the reward of the best fixed option and what the algorithm earned. The standard performance measure."],
  ["Stochastic vs. adversarial bandits","Rewards drawn from fixed distributions or chosen by an adversary. Require different algorithms and guarantees."],
  ["Best-arm identification","Find the best option with as few samples as possible, ignoring cumulative reward. Used in testing and tuning."],
  ["Pure exploration","Learning without regard to reward during the process. Contrasts with regret minimization."],
  ["Cumulative vs. simple regret","Total loss during learning versus loss of the final choice. Different goals lead to different algorithms."]]],
 ["Algorithms","strategies for exploring",[
  ["ε-greedy","Choose the best option most of the time and a random one with small probability. Simple but wasteful."],
  ["Optimism in the face of uncertainty","Act as though uncertain options are as good as plausible. The principle behind confidence-bound methods."],
  ["Upper confidence bound (UCB)","Pick the option with the highest estimate plus an uncertainty bonus. Achieves logarithmic regret."],
  ["Thompson sampling","Sample a plausible model from the posterior and act greedily for it. Strong in practice and simple to implement."],
  ["Softmax / Boltzmann exploration","Choose options with probability increasing in estimated value. Smooth control over randomness."],
  ["EXP3 & adversarial algorithms","Randomized weights that handle adversarial rewards. Provide worst-case guarantees."],
  ["Gittins index","Optimal solution for a discounted Bayesian bandit. Elegant but limited in scope."]]],
 ["Contextual & structured bandits","using side information",[
  ["Contextual bandits","Choose an action given a context such as user features. Used for personalization."],
  ["LinUCB & linear bandits","Assume rewards are linear in features and build confidence ellipsoids. Standard contextual method."],
  ["Off-policy evaluation","Estimate how a new policy would perform using logged data. Uses importance weighting and doubly robust estimators."],
  ["Combinatorial bandits","Choose sets of items, such as a slate of recommendations. Large action spaces need structure."],
  ["Dueling & preference bandits","Receive only comparisons between options. Link to learning from human feedback."],
  ["Non-stationary bandits","Rewards drift over time. Require forgetting or change detection."],
  ["Bandits with knapsack constraints","Resource limits on actions. Model budgeted advertising."]]],
 ["Theory","what can be guaranteed",[
  ["Lower bounds on regret","Minimum regret any algorithm must suffer. Show which algorithms are optimal."],
  ["Concentration inequalities","Hoeffding and Bernstein bounds underlying confidence intervals. The core analytical tool."],
  ["Bayesian vs. frequentist regret","Average over a prior or worst case over problems. Different perspectives on performance."],
  ["Information-directed sampling","Choose actions balancing regret and information gained. A unifying framework."],
  ["Sample complexity","Number of samples needed to reach a given accuracy. Important for best-arm identification."],
  ["Minimax optimality","Algorithms that are optimal in the worst case. A standard theoretical target."],
  ["From bandits to RL regret","Extending analysis to state transitions. Shows the extra difficulty of long horizons."]]],
 ["Applications","bandits in practice",[
  ["A/B testing vs. bandits","Fixed experiments versus adaptive allocation. Adaptive methods reduce cost of poor options but complicate inference."],
  ["Recommendation & ad selection","Choose content to maximize clicks or engagement. Primary commercial uses."],
  ["Clinical trials & adaptive designs","Allocate patients to better treatments as evidence accrues. Raises ethical and statistical questions."],
  ["Hyperparameter tuning & Bayesian optimization","Treat configurations as arms with noisy outcomes. Related to Gaussian-process bandits."],
  ["Online learning to rank","Learn orderings from user clicks. Needs bias handling."],
  ["Dynamic pricing","Set prices while learning demand. A revenue-focused bandit."],
  ["Resource allocation in systems","Choose configurations or routes. Used in networking and compilers."]]]
 ]}
);
