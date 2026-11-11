/* Band C — Beyond the basic loop: models, offline data, exploration and structure. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"C1",band:"C",name:"Model-Based RL & Planning",sum:"Learning a model of the world and using it to act.",deps:["A2","B2","B3"],
 overview:"Model-based RL learns dynamics and reward models and uses them for planning or for generating synthetic experience. This region covers model learning, Dyna-style methods, model predictive control with learned models, world models in latent space, and the MuZero and Dreamer families.",
 why:"Models promise far better sample efficiency, which matters when real interaction is costly, as with robots. The challenge is that model errors compound, so the design question is how to use models safely.",
 subs:[
 ["Learning dynamics models","predicting what happens next",[
  ["Forward dynamics model","Predict the next state from the current state and action. The core component of model-based RL."],
  ["Probabilistic & ensemble models","Capture uncertainty with distributions or ensembles of networks. Separate model uncertainty from noise."],
  ["Aleatoric vs. epistemic uncertainty","Irreducible randomness versus lack of data. Only the latter should drive exploration or caution."],
  ["Gaussian-process dynamics (PILCO)","Data-efficient policy search with propagated uncertainty. Works on small, low-dimensional systems."],
  ["Reward & termination models","Learn the reward and episode-end signals along with dynamics. Needed for full planning."],
  ["Multi-step prediction & rollout error","Errors compound over predicted steps. Training for long horizons mitigates this."],
  ["Model-based vs. model-free tradeoffs","Models are sample-efficient but biased; model-free methods are robust but data hungry. Hybrid systems blend them."]]],
 ["Using models for learning","synthetic experience",[
  ["Dyna","Interleave real updates with updates from model-generated transitions. The original integrated architecture."],
  ["MBPO","Short model rollouts branched from real states feed an off-policy learner. Limits error accumulation."],
  ["Model-based value expansion (MVE, STEVE)","Use model rollouts to improve value targets. Reduces bias with learned models."],
  ["Imagination-augmented agents","Agents that consume model predictions as input. Learn how much to trust the model."],
  ["Model exploitation","Policies learn to exploit errors in the model rather than the real world. Countered by uncertainty penalties."],
  ["Short-horizon rollouts","Limit predicted trajectory length to curb compounding error. Common practical choice."],
  ["Gradient through models (SVG, analytic gradients)","Backpropagate through differentiable models to improve policies. Efficient when the model is accurate."]]],
 ["Planning with learned models","online decision-making",[
  ["Model predictive control (MPC)","Optimize an action sequence over a horizon, execute the first action, then replan. Robust and widely used."],
  ["Random shooting & CEM","Sample action sequences and refine around the best. Simple derivative-free planners."],
  ["PETS","Probabilistic ensemble models with trajectory sampling and MPC. A strong deep model-based baseline."],
  ["MPPI","Path-integral approach weighting sampled trajectories by cost. Popular on GPUs for robotics."],
  ["TD-MPC","Latent model with a learned value and policy used inside MPC. Efficient continuous control."],
  ["Trajectory optimization & iLQR","Gradient-based optimization of trajectories using dynamics. Connects to classical control."],
  ["Receding horizon & terminal values","Truncate planning with a learned value at the end. Balances compute and foresight."]]],
 ["World models & latent dynamics","learning in imagination",[
  ["World models","Learn a compact model of observations and dynamics and train policies inside it. Introduced for car racing and Doom tasks."],
  ["Latent state-space models","Dynamics in a learned low-dimensional space rather than pixels. Cheaper and more robust."],
  ["PlaNet","Plan in latent space from pixels with a recurrent state-space model. Early success in pixel control."],
  ["Dreamer (V1–V3)","Learn behaviors entirely from imagined latent rollouts using actor-critic. Works across many domains with one configuration."],
  ["Recurrent state-space model (RSSM)","Combines deterministic recurrence with stochastic latents. Core Dreamer component."],
  ["Reconstruction-free & contrastive models","Learn representations without decoding pixels. Focus on task-relevant features."],
  ["Video prediction & foundation world models","Large generative models of video used as simulators. Linking to embodied AI."]]],
 ["Search plus learning","planning in discrete problems",[
  ["AlphaGo & AlphaZero","Combine neural policy and value networks with MCTS, trained by self-play. Reached superhuman board-game play."],
  ["MuZero","Learn a latent model of only what planning needs (reward, value, policy) and search with it. Masters games without known rules."],
  ["EfficientZero","MuZero with self-supervised consistency and value-prefix learning. Improves sample efficiency."],
  ["Policy improvement via search","Use search results as training targets for the policy. Expert iteration style."],
  ["Expert iteration","Alternate between search producing better decisions and learning to imitate them. Underlies AlphaZero."],
  ["Self-play curricula","Opponents of matched strength give natural curricula. Core of game-playing RL."],
  ["Test-time search in language models","Using search and verification at inference to improve answers. A modern echo of AlphaZero ideas."]]]
 ]},

{ref:"C2",band:"C",name:"Offline RL & Imitation",sum:"Learning to act from fixed data and demonstrations.",deps:["B2","B3"],
 overview:"When online interaction is costly or dangerous, agents must learn from logged data or expert demonstrations. This region covers behavior cloning and its failure modes, inverse RL and adversarial imitation, offline RL with conservatism against out-of-distribution actions, and off-policy evaluation.",
 why:"Most real systems have logs, not simulators. Offline RL and imitation are how robotics, recommendation and dialogue systems use existing data, and the distribution-shift issues they expose also appear in LLM post-training.",
 subs:[
 ["Imitation learning","learning from demonstrations",[
  ["Behavior cloning","Supervised learning of actions from expert states. Simple and strong but suffers compounding errors."],
  ["Distribution shift & compounding errors","Small mistakes lead to states unseen in the data, causing larger mistakes. The central weakness of cloning."],
  ["DAgger","Iteratively query the expert on states visited by the learner and aggregate data. Corrects distribution shift."],
  ["Multimodal demonstrations","Experts may act differently in the same state. Need mixture, diffusion or transformer policies."],
  ["Diffusion policies","Generate actions by denoising, capturing multimodality. State of the art for visuomotor imitation."],
  ["Action chunking","Predict sequences of actions at once. Reduces compounding error and jitter."],
  ["Learning from observation","Imitate from demonstrations without action labels. Needed when only videos are available."]]],
 ["Inverse RL & adversarial imitation","inferring goals",[
  ["Inverse reinforcement learning","Infer the reward function that explains expert behavior. Yields transferable goals."],
  ["Maximum-entropy IRL","Choose the reward that makes expert trajectories most likely under a max-entropy policy. Resolves ambiguity."],
  ["Apprenticeship learning","Match the expert's feature expectations. An early IRL formulation."],
  ["GAIL","Train a policy against a discriminator that distinguishes expert from agent behavior. Imitation without explicit reward."],
  ["Adversarial inverse RL (AIRL)","Recover a reward that transfers across dynamics using adversarial training. Improves generalization."],
  ["Reward ambiguity","Many rewards explain the same behavior. A fundamental identifiability problem."],
  ["Preference-based reward learning","Learn rewards from human comparisons rather than demonstrations. Basis of RLHF."]]],
 ["Offline (batch) RL","learning from fixed datasets",[
  ["Offline RL problem","Learn the best policy from a static dataset without further interaction. Differs from imitation by seeking better than the data."],
  ["Distributional shift & extrapolation error","Value estimates for unseen actions are unreliable and get exploited. The core obstacle."],
  ["Batch-constrained methods (BCQ)","Restrict the policy to actions likely under the data. Prevents out-of-distribution queries."],
  ["Conservative Q-learning (CQL)","Penalize Q-values for out-of-distribution actions. Gives lower-bound value estimates."],
  ["Implicit Q-learning (IQL)","Learn values with expectile regression, avoiding action queries outside the data. Simple and stable."],
  ["Behavior-regularized actor-critic (TD3+BC, BRAC)","Add a penalty keeping the policy close to the behavior policy. Easy to implement."],
  ["Decision Transformer","Cast offline RL as sequence modeling conditioned on desired return. Uses transformers instead of value learning."]]],
 ["Model-based & uncertainty-aware offline RL","using models cautiously",[
  ["MOPO & MOReL","Penalize rewards by model uncertainty and plan in the pessimistic model. Principled offline model-based RL."],
  ["Pessimism principle","Prefer actions whose value is supported by data. Core idea for safe offline learning."],
  ["Dataset quality & coverage","Performance depends on diversity and optimality of logged data. Benchmarks like D4RL vary these."],
  ["Offline-to-online fine-tuning","Pretrain from data and then improve with limited interaction. Avoids initial performance collapse."],
  ["Return-conditioned & goal-conditioned learning","Condition on outcomes and learn to reach them. Hindsight relabeling extends data."],
  ["Trajectory stitching","Combine pieces of suboptimal trajectories to form better ones. Something value learning does and cloning does not."],
  ["Benchmarks (D4RL, RL Unplugged)","Standard offline datasets. Allow comparison of methods."]]],
 ["Off-policy evaluation","judging a policy without deploying it",[
  ["Off-policy evaluation (OPE)","Estimate a new policy's value from data collected by another. Essential before deployment."],
  ["Importance sampling estimators","Reweight returns by action probability ratios. Unbiased but high variance."],
  ["Direct method (model-based OPE)","Fit a model or Q-function and evaluate the policy in it. Biased when the model is wrong."],
  ["Doubly robust estimation","Combine model and importance weights so either being correct suffices. Lowers variance."],
  ["Fitted Q evaluation","Learn the policy's Q-function with regression. A common OPE baseline."],
  ["Confidence intervals & high-confidence OPE","Bounds that guarantee performance with high probability. Support safe policy improvement."],
  ["Counterfactual risk minimization","Learn policies from logged bandit feedback while controlling variance. Used in recommendation."]]]
 ]},

{ref:"C3",band:"C",name:"Exploration, Hierarchy & Generalization",sum:"Getting RL to work on hard, sparse and varied problems.",deps:["A3","B2","B3"],
 overview:"Real tasks have sparse rewards, long horizons and variation between environments. This region covers intrinsic motivation, hierarchical RL, goal-conditioned learning, curricula, meta-learning, transfer and generalization across tasks.",
 why:"These ideas are how RL escapes toy settings. They also underlie open-ended agents, skill libraries for robots and generalist policies.",
 subs:[
 ["Exploration in deep RL","finding rewards",[
  ["Sparse-reward problem","Rewards appear rarely, so random exploration rarely finds them. Montezuma's Revenge is the classic case."],
  ["Count-based & pseudo-count exploration","Bonus for rarely visited states, estimated through density models or hashing. Extends tabular optimism."],
  ["Intrinsic curiosity module (ICM)","Reward the agent for prediction error of its forward model. Drives exploration without extrinsic reward."],
  ["Random network distillation (RND)","Bonus from error predicting a fixed random network's output. Robust novelty signal."],
  ["Noisy-TV problem","Unpredictable noise attracts prediction-error curiosity indefinitely. A known failure mode."],
  ["Go-Explore","Remember promising states, return to them and explore from there. Solved hard Atari games."],
  ["Posterior sampling for RL (PSRL) & bootstrapped DQN","Sample a plausible model or Q-function and follow it for an episode. Deep, temporally consistent exploration."]]],
 ["Hierarchical RL","temporal abstraction",[
  ["Options framework","Temporally extended actions with initiation, policy and termination. Formal basis of hierarchy."],
  ["Feudal & goal-based hierarchies","A manager sets goals for a worker. Separates timescales."],
  ["Option-critic","Learn options end-to-end with policy gradients. Discovers useful skills."],
  ["Skill discovery (DIAYN, VALOR)","Learn diverse skills by maximizing mutual information between skills and states. Unsupervised repertoire building."],
  ["Subgoal discovery","Identify bottleneck states as natural subgoals. Helps in navigation tasks."],
  ["Temporal abstraction benefits","Faster credit assignment and exploration. Valuable on long-horizon tasks."],
  ["Hierarchical imitation & language-conditioned skills","Compose learned skills through instructions. Links RL to LLM planners."]]],
 ["Goal-conditioned RL","one agent, many goals",[
  ["Goal-conditioned policies","Policy takes a goal as input and learns to reach it. Provides dense learning signal."],
  ["Universal value function approximators","Value functions generalizing across goals. Enable shared learning."],
  ["Hindsight experience replay (HER)","Relabel failed trajectories as successes for the goal actually reached. Makes sparse-reward goal tasks learnable."],
  ["Reward-free & unsupervised RL","Pretrain behavior without task reward, then adapt quickly. Analogous to self-supervised learning."],
  ["Successor features & representations","Decompose value into dynamics-dependent features and reward weights. Enable rapid transfer to new rewards."],
  ["Contrastive goal-reaching","Learn goal-conditioned values through contrastive representations. Simplifies value learning."],
  ["Automatic curricula (asymmetric self-play, POET)","Generate tasks of suitable difficulty. Produce open-ended learning."]]],
 ["Meta-RL & transfer","learning to learn",[
  ["Meta reinforcement learning","Train across tasks so adaptation to new tasks is fast. Inspired by few-shot learning."],
  ["MAML for RL","Learn initial parameters that adapt in a few gradient steps. Gradient-based meta-learning."],
  ["RL² & memory-based meta-RL","Recurrent policies that learn within their hidden state. Implement adaptation without gradients."],
  ["In-context RL","Transformers that improve their behavior from history in context. Algorithm distillation is an example."],
  ["Transfer learning in RL","Reuse policies, values or representations across tasks. Reduce cost of new tasks."],
  ["Multi-task RL","Train a single agent on several tasks. Can help or cause gradient interference."],
  ["Policy distillation","Compress policies into one network via supervised learning. Combines specialists."]]],
 ["Generalization & robustness","beyond the training environment",[
  ["Generalization gap in RL","Policies overfit to training levels and fail on new ones. Shown by procedurally generated benchmarks."],
  ["Procgen & CoinRun","Benchmarks with procedurally generated levels. Measure generalization."],
  ["Domain randomization","Vary simulator parameters so policies cope with real-world differences. A standard sim-to-real technique."],
  ["Data augmentation in RL (RAD, DrQ)","Random crops and shifts of image observations. Big gains in pixel-based control."],
  ["Representation learning for RL","Auxiliary losses such as contrastive or reconstruction objectives. Improve efficiency."],
  ["Invariance & causal representations","Features that ignore irrelevant variation. Improve out-of-distribution performance."],
  ["Adversarial robustness","Policies vulnerable to small observation perturbations or adversarial opponents. Spurs robust training."]]]
 ]}
);
