/* Band B — Core learning algorithms. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"B1",band:"B",name:"Tabular & Temporal-Difference Learning",sum:"Learning values from experience without a model.",deps:["A1","A2"],
 overview:"Model-free learning estimates value functions directly from sampled experience. This region covers Monte Carlo methods, temporal-difference learning, SARSA and Q-learning, eligibility traces, and the off-policy corrections needed to learn about one policy while following another.",
 why:"TD learning is the engine inside nearly every modern RL algorithm, from DQN to actor-critic methods. Its bias, variance and stability tradeoffs explain many behaviors seen in deep RL.",
 subs:[
 ["Monte Carlo methods","learning from complete returns",[
  ["Monte Carlo prediction","Estimate state values by averaging returns observed after visiting a state. Unbiased but needs complete episodes."],
  ["First-visit vs. every-visit","Average returns from the first or from every visit to a state in an episode. Both converge but have different bias and variance."],
  ["Monte Carlo control","Improve the policy greedily with respect to estimated action values. Requires exploration to be correct."],
  ["Exploring starts","Begin episodes from random state-action pairs to ensure coverage. A simple but often unrealistic assumption."],
  ["ε-soft policies","Policies that give every action some probability. Maintain exploration during learning."],
  ["Importance sampling for off-policy MC","Reweight returns by the ratio of target to behavior policy probabilities. Unbiased but can have extreme variance."],
  ["Variance of returns","Long episodes with random rewards give noisy estimates. A reason to prefer bootstrapping."]]],
 ["Temporal-difference prediction","bootstrapping from the next state",[
  ["TD(0)","Update a value toward the reward plus the discounted value of the next state. Learns online and from incomplete episodes."],
  ["TD error","The difference between the bootstrapped target and the current estimate. The learning signal throughout RL, also linked to dopamine responses."],
  ["Bias–variance tradeoff in TD vs. MC","TD has lower variance but is biased by its estimates; Monte Carlo is unbiased but noisy. Intermediate methods interpolate."],
  ["n-step returns","Use several real rewards before bootstrapping. Balances bias and variance."],
  ["TD(λ) & eligibility traces","Blend all n-step returns with exponentially decaying weights, implemented via traces of recent states. Efficient credit assignment."],
  ["Forward & backward views","Two equivalent descriptions of TD(λ), one looking ahead at returns and one propagating errors backward. A mechanism versus a definition."],
  ["Batch TD & certainty equivalence","Repeated training on a fixed dataset converges to the maximum-likelihood model's value. Explains TD's data efficiency."]]],
 ["TD control","learning to act",[
  ["SARSA","On-policy TD control that updates using the action actually taken next. Learns the value of the exploring policy."],
  ["Q-learning","Off-policy TD control that bootstraps from the best next action. Converges to optimal values under coverage conditions."],
  ["Expected SARSA","Use the expectation over next actions rather than a sample. Lower variance than SARSA."],
  ["Double Q-learning","Use two estimators to reduce overestimation from maximizing noisy values. Basis of Double DQN."],
  ["Maximization bias","Taking the max of noisy estimates gives an upward-biased value. A systematic issue in value-based RL."],
  ["Cliff-walking example","Contrast of SARSA's safer path and Q-learning's riskier optimal path while exploring. Illustrates on- vs. off-policy behavior."],
  ["Convergence conditions","Visit every state-action pair infinitely often with suitable step sizes. The Robbins–Monro conditions."]]],
 ["Off-policy learning","learning about one policy while following another",[
  ["Behavior vs. target policy","The policy that generates data versus the one being evaluated. Separating them enables experience reuse."],
  ["Importance sampling ratio","Corrects for differing action probabilities. Can blow up over long horizons."],
  ["Per-decision importance sampling","Apply corrections step by step to reduce variance. Used in off-policy TD."],
  ["Tree backup & Retrace","Off-policy multi-step methods that avoid importance ratios or truncate them. Give stable off-policy learning."],
  ["V-trace","Truncated importance weighting used in distributed actor–learner systems. Handles policy lag."],
  ["The deadly triad","Combining function approximation, bootstrapping and off-policy training can diverge. A key source of instability."],
  ["Gradient TD methods","Algorithms with convergence guarantees under off-policy linear approximation. Include GTD2 and TDC."]]],
 ["Step sizes & implementation","practical details",[
  ["Learning rate schedules","Decrease step sizes over time for convergence or keep them constant for tracking. A tradeoff with non-stationarity."],
  ["Optimistic initialization","Start values high to encourage exploration. A simple heuristic in tabular tasks."],
  ["Replay in tabular settings","Reuse past transitions for further updates. Foundation for experience replay."],
  ["Reward shaping","Add auxiliary rewards to speed learning. Potential-based shaping preserves optimal policies."],
  ["Potential-based shaping","Add a difference of potentials of successive states to the reward. Provably leaves the optimal policy unchanged."],
  ["Discount factor choice","Larger values care about long-term effects but slow learning. A tunable part of the problem definition."],
  ["Evaluation protocols","Separate training from evaluation with fixed seeds and multiple runs. RL results are noisy."]]]
 ]},

{ref:"B2",band:"B",name:"Function Approximation & Value-Based Deep RL",sum:"Scaling value learning with neural networks.",deps:["B1"],
 overview:"Large or continuous state spaces require generalization. This region covers linear and neural approximation, the Deep Q-Network family that mastered Atari, and the ideas such as replay, target networks and distributional values that stabilize it.",
 why:"Value-based deep RL showed that a single algorithm could learn from raw pixels. Its failure modes inform how to debug any deep RL system.",
 subs:[
 ["Function approximation","generalizing across states",[
  ["Parametric value functions","Represent values with parameters learned by gradient descent. Allows generalization but breaks tabular guarantees."],
  ["Semi-gradient methods","Update parameters by treating the bootstrapped target as fixed. The standard approach and not a true gradient."],
  ["Linear approximation & features","Values as weighted sums of features such as tile coding. Well understood theoretically."],
  ["Tile coding & coarse coding","Overlapping feature grids that give local generalization. Classical features for control problems."],
  ["Mean squared value error","The objective weighted by how often states are visited. Defines what approximation is optimizing."],
  ["Least-squares TD & LSPI","Solve for the TD fixed point directly from data. Sample-efficient but costly with many features."],
  ["Neural network value functions","Deep networks as flexible approximators. Introduce instability and the need for tricks."]]],
 ["Deep Q-Networks","the Atari breakthrough",[
  ["DQN","Q-learning with a deep convolutional network, replay buffer and target network. First to learn many Atari games from pixels."],
  ["Experience replay","Store transitions and sample random minibatches. Breaks correlation and reuses data."],
  ["Target network","A slowly updated copy of the network used for bootstrap targets. Stabilizes learning."],
  ["Frame stacking & preprocessing","Combine recent frames to capture motion. Approximates the Markov state from images."],
  ["Reward clipping","Limit rewards to a fixed range for stable gradients. Changes the objective and can hide scale."],
  ["Huber loss & gradient clipping","Robust losses that limit large updates. Standard stabilizers."],
  ["Replay buffer size & staleness","Larger buffers reuse more but hold older, off-policy data. A key hyperparameter."]]],
 ["DQN improvements","the Rainbow components",[
  ["Double DQN","Select actions with the online network and evaluate with the target. Reduces overestimation."],
  ["Prioritized experience replay","Sample transitions with large TD error more often. Speeds learning and requires importance weights."],
  ["Dueling networks","Separate value and advantage streams in the architecture. Helps when many actions have similar value."],
  ["Noisy networks","Learned parameter noise replaces ε-greedy exploration. State-dependent exploration."],
  ["Multi-step returns in DQN","Use n-step targets for faster credit propagation. Interacts with off-policy data."],
  ["Distributional RL (C51, QR-DQN)","Learn the full distribution of returns rather than the mean. Gives richer learning signals."],
  ["Rainbow","Combination of six DQN extensions. Showed the improvements are complementary."]]],
 ["Scaling & distributed value learning","using more compute",[
  ["Ape-X & distributed replay","Many actors generate data for a central learner with shared prioritized replay. Large throughput gains."],
  ["R2D2 & recurrent value functions","Add recurrence and handle stored hidden states. Needed under partial observability."],
  ["Agent57","Combines exploration bonuses, adaptive discounting and meta-control to beat humans on all Atari games. A culmination of value-based approaches."],
  ["Data-efficient RL (DER, SPR)","Methods using augmentation and self-supervision to learn from limited interaction. Narrow the sample-efficiency gap."],
  ["Big batch & high replay ratio","Many updates per environment step. Boosts efficiency but invites overfitting."],
  ["Plasticity loss","Networks lose ability to learn over training. Addressed by resets and regularization."],
  ["Scaling laws in RL","Studies of how performance changes with model size and compute. Less predictable than in supervised learning."]]],
 ["Continuous actions with values","extending Q-learning",[
  ["Continuous action spaces","Actions as real vectors, such as torques. Make maximizing over actions nontrivial."],
  ["DDPG","Deterministic actor trained through a Q-function critic, with replay and target networks. First deep off-policy method for continuous control."],
  ["TD3","Twin critics, delayed actor updates and target smoothing. Fixes DDPG's overestimation and brittleness."],
  ["Soft Actor-Critic (SAC)","Maximum-entropy off-policy actor-critic with automatic temperature tuning. Strong, sample-efficient default."],
  ["Maximum-entropy RL","Reward policy randomness in addition to return. Improves exploration and robustness."],
  ["Normalized advantage functions","Structure the Q-function so its maximum is analytic. An alternative to an actor."],
  ["Action discretization","Convert continuous actions to bins for use with discrete algorithms. Simple but suffers in high dimensions."]]]
 ]},

{ref:"B3",band:"B",name:"Policy Gradient & Actor-Critic",sum:"Optimizing policies directly.",deps:["B1"],
 overview:"Policy-gradient methods adjust policy parameters in the direction that increases expected return. This region covers the policy-gradient theorem, REINFORCE, baselines and advantage estimation, actor-critic architectures, and trust-region and clipped methods like TRPO and PPO.",
 why:"Policy gradients handle continuous and stochastic actions naturally and are the basis of PPO, the workhorse for robotics, games and RLHF. Variance reduction and step-size control are the key engineering issues.",
 subs:[
 ["Policy gradient basics","gradient ascent on return",[
  ["Parameterized policies","Policies defined by parameters, such as softmax or Gaussian heads. Differentiable for optimization."],
  ["Policy gradient theorem","The gradient of expected return is an expectation of the score function times the return. Gives a gradient without differentiating dynamics."],
  ["REINFORCE","Monte Carlo policy gradient using sampled returns. Unbiased but high variance."],
  ["Score function (likelihood ratio) estimator","Gradient of log probability weighted by reward. The general trick behind REINFORCE."],
  ["Baselines","Subtract a state-dependent term from returns to cut variance without bias. Usually a learned value function."],
  ["Reparameterization gradient","Differentiate through sampled actions when the dynamics or critic are differentiable. Lower variance than score function."],
  ["Natural gradient","Scale gradients by the inverse Fisher information so steps are measured in policy space. More stable updates."]]],
 ["Actor-critic methods","combining value and policy",[
  ["Actor and critic","The actor selects actions and the critic evaluates them. The critic gives lower-variance learning signals."],
  ["Advantage actor-critic (A2C)","Use the advantage computed from a learned value as the policy-gradient weight. Synchronous baseline."],
  ["A3C","Asynchronous parallel actors updating shared parameters. Popularized parallel deep RL."],
  ["Generalized advantage estimation (GAE)","Exponentially weighted mix of n-step advantages with parameter λ. Controls the bias–variance tradeoff."],
  ["Entropy regularization","Bonus for keeping the policy stochastic. Prevents premature convergence."],
  ["Shared vs. separate networks","Whether actor and critic share layers. Affects stability and compute."],
  ["Compatible function approximation","Conditions under which an approximate critic gives the exact policy gradient. Theoretical link between the two components."]]],
 ["Trust-region & clipped methods","stable policy updates",[
  ["Policy performance bounds","Lower bounds on improvement from a policy update, depending on divergence between old and new. Motivation for trust regions."],
  ["TRPO","Maximize a surrogate objective under a KL-divergence constraint. Monotonic improvement in theory; expensive in practice."],
  ["Proximal policy optimization (PPO)","Clip the probability ratio so updates stay close to the old policy. Simple, robust and widely used."],
  ["Clipped surrogate objective","The PPO loss that removes incentive for large ratio changes. Approximates a trust region."],
  ["KL penalty variants","Add an adaptive KL term rather than clipping. An alternative PPO form."],
  ["Mini-batch epochs & data reuse","Multiple gradient passes on each batch. Gains efficiency but risks drifting off-policy."],
  ["PPO implementation details","Advantage normalization, value clipping, learning-rate annealing and orthogonal init matter greatly. Often decide results."]]],
 ["Deterministic & off-policy policy gradients","other lineages",[
  ["Deterministic policy gradient","Gradient for deterministic policies through the Q-function. Basis of DDPG."],
  ["Off-policy actor-critic","Learn from replayed data with corrections. Improves sample efficiency."],
  ["ACER & IMPALA","Scalable actor-critic with importance corrections. Support large distributed training."],
  ["Maximum a posteriori policy optimization (MPO)","Expectation-maximization style updates with KL constraints. Stable across tasks."],
  ["Evolution strategies","Estimate gradients by perturbing parameters and evaluating returns. A parallelizable alternative to backpropagation."],
  ["Black-box & derivative-free optimization","CMA-ES and random search for policy parameters. Competitive on small problems."],
  ["Policy gradient with Q-values (Q-Prop)","Combine control variates from critics with on-policy gradients. Cuts variance."]]],
 ["Practical issues","what goes wrong",[
  ["Reward scaling & normalization","Normalizing rewards or returns stabilizes gradients. Often essential."],
  ["Observation normalization","Running statistics for inputs. Helps continuous control."],
  ["Hyperparameter sensitivity","Results vary widely with seeds and settings. A recognized reproducibility problem."],
  ["Reproducibility in deep RL","Differences in implementation, seeds and evaluation change conclusions. Calls for multiple seeds and reporting intervals."],
  ["Credit assignment over long horizons","Gradient variance grows with horizon. Motivates discounting and shorter effective horizons."],
  ["Local optima & collapse","Policies can converge to poor behaviors or lose entropy. Monitored via entropy and KL."],
  ["Diagnostics & logging","Track value loss, entropy, KL, explained variance. Core debugging tools."]]]
 ]}
);
