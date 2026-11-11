/* Band C — Learning Highlands. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"C1",band:"C",name:"Machine Learning",sum:"Learning predictive models from examples. The statistical core of modern AI.",deps:["A2"],
 overview:"Instead of writing rules, machine learning fits a model to examples and uses it on new data. This region is the classical toolkit: supervised methods that learn from labels, unsupervised methods that find structure, the data practice that decides most of the quality, alternative learning setups, and the theory and evaluation that tell you whether a model will generalize. The separate Atlas of Machine Learning covers this territory in depth.",
 why:"Even in the era of large neural networks, gradient-boosted trees still win many tabular problems, and every AI system is judged by the evaluation habits taught here: honest splits, calibrated metrics and awareness of leakage.",
 subs:[
 ["Supervised learning","learn from labeled examples",[
  ["Linear & logistic regression","Models that predict a number or a class probability from a weighted sum of features. They are fast, interpretable baselines that are often hard to beat on small, clean data."],
  ["Decision trees","Models that split data by a sequence of feature questions to reach a prediction. They are easy to read and handle mixed data types, but a single tree overfits."],
  ["Random forests","Averages many decision trees trained on random subsets of data and features. The averaging cuts variance, giving strong accuracy with little tuning."],
  ["Gradient boosting","Builds trees one at a time, each correcting the previous errors (XGBoost, LightGBM, CatBoost). It is the most reliable method for structured, tabular data."],
  ["Support vector machines","Classifiers that find the boundary with the widest margin between classes, using kernels to handle curved boundaries. Popular before deep learning, still useful on small datasets."],
  ["k-nearest neighbors","Predicts from the labels of the k most similar stored examples. It needs no training, but is slow at prediction time and depends heavily on the distance measure."],
  ["Naive Bayes","A probabilistic classifier that assumes features are independent given the class. The assumption is wrong but the method is fast and works surprisingly well for text."]
 ]],
 ["Unsupervised learning","structure without labels",[
  ["k-means","Partitions data into k clusters by repeatedly assigning points to the nearest center and recomputing centers. It is simple and scalable, but assumes round clusters of similar size."],
  ["Hierarchical clustering","Builds a tree of nested clusters by merging or splitting groups. It shows structure at many scales and needs no preset number of clusters."],
  ["PCA","Principal component analysis finds the orthogonal directions of greatest variance and projects data onto the top few. It compresses data and removes noise."],
  ["t-SNE & UMAP","Nonlinear methods that map high-dimensional data to two or three dimensions for visualization, keeping similar points close. Useful for looking at embeddings, but distances between clusters should not be over-read."],
  ["Anomaly detection","Flagging examples that differ from normal behavior, using density, distance or reconstruction error. It is used in fraud, security and equipment monitoring, where anomalies are rare and rarely labeled."]
 ]],
 ["Data practice","where quality is won",[
  ["Feature engineering","Turning raw data into inputs that expose the signal, such as ratios, aggregates and time features. It is often where tabular models gain most, and deep models automate part of it."],
  ["Train/validation/test splits","Dividing data so a model is fit on one part, tuned on another and judged on a final held-out part. The test set is only trustworthy if it is never used for decisions."],
  ["Data leakage","Information from outside the training context sneaking into features or splits, such as future data or duplicated records. It produces inflated scores that collapse in deployment."],
  ["Class imbalance","When one class is far rarer than the others, as in fraud. Accuracy becomes misleading, so you use resampling, class weights and metrics such as precision–recall."],
  ["Labeling & annotation","Producing the ground-truth labels models learn from, by people, rules or models. Label quality and agreement between annotators set a ceiling on model quality."],
  ["Synthetic data","Artificially generated examples used to fill gaps, protect privacy or cover rare cases. It helps when real data is scarce, but a model trained mostly on synthetic data inherits the generator's blind spots."]
 ]],
 ["Learning paradigms","other ways to supervise",[
  ["Semi-supervised learning","Using a small labeled set with a large unlabeled one, for example by pseudo-labeling confident predictions. It cuts annotation cost."],
  ["Self-supervised learning","Creating the training signal from the data itself, such as predicting masked words or the next token. It is how foundation models learn from unlabeled text, images and audio."],
  ["Transfer learning","Reusing a model trained on one task as the starting point for another. It lets small teams get strong results with little data and is standard practice in vision and language."],
  ["Active learning","The model picks which unlabeled examples a human should label next, usually the ones it is most uncertain about. It reduces the labeling needed for a given accuracy."],
  ["Online & continual learning","Updating a model as data arrives, without retraining from scratch. The hard part is avoiding catastrophic forgetting of earlier knowledge."],
  ["Federated learning","Training a shared model across many devices or sites without moving the raw data to a central place. It is used where data is private or regulated."],
  ["Meta-learning","Learning how to learn: training across many tasks so a new one can be picked up from a few examples. It is the research root of few-shot and in-context learning."]
 ]],
 ["Theory & evaluation","does it generalize",[
  ["Bias–variance tradeoff","Error splits into bias (a model too simple to fit) and variance (too sensitive to the training sample). It is the classic frame for choosing model complexity, though very large networks complicate it."],
  ["Regularization","Constraining a model, through penalties, early stopping or dropout, so it cannot memorize noise. It trades a little training accuracy for better performance on new data."],
  ["Cross-validation","Estimating performance by repeatedly training on part of the data and testing on the rest. It gives a steadier estimate than a single split when data is limited."],
  ["Calibration","Whether predicted probabilities match actual frequencies: of cases given 80%, about 80% should be positive. It matters when scores drive decisions, not just rankings."],
  ["PAC learning","A formal framework that asks how many examples guarantee a model is probably approximately correct. It gives sample-complexity bounds, though they are usually loose for real networks."],
  ["Causal inference","Estimating the effect of an intervention, not just correlations, using experiments or careful adjustment for confounders. It is needed whenever a model's output will change the thing it predicts."]
 ]]
]},
{ref:"C2",band:"C",name:"Deep & Generative Models",sum:"Large differentiable networks that learn their own representations and can generate new data.",deps:["C1","A2"],
 overview:"Deep learning stacks many differentiable layers and trains them end to end with gradients, so the network learns features rather than being handed them. The region covers how networks train, the architectures that suit different data (convolutions, recurrence, attention, transformers), the generative families that produce images, audio and text, the effects of scale, and the representations the networks learn.",
 why:"Nearly every headline AI capability of the last decade comes from here. Transformers and diffusion models, in particular, are the substrate of language models, image and video generation, and much of robotics.",
 subs:[
 ["Network fundamentals","how deep nets train",[
  ["Multilayer perceptrons","Layers of weighted sums followed by nonlinearities. They are universal function approximators, and still form the feed-forward blocks inside transformers."],
  ["Backpropagation","Applying the chain rule backward through a network to compute how each weight affected the loss. It is the algorithm that makes training deep models tractable."],
  ["Activation functions","The nonlinearity after each layer (ReLU, GELU, SiLU). Without it, stacked layers collapse to a single linear map; the choice affects gradient flow and training speed."],
  ["SGD & Adam","Stochastic gradient descent updates weights from small batches of data; Adam adds per-parameter adaptive step sizes and momentum. AdamW is the default optimizer for most large models."],
  ["Normalization","Layers such as batch norm, layer norm and RMSNorm rescale activations to keep training stable and allow higher learning rates. Layer norm and RMSNorm are standard in transformers."],
  ["Dropout","Randomly zeroing units during training so the network cannot rely on any one. It acts as a regularizer, though large language models often use little or none."],
  ["Residual connections","Skip paths that add a layer's input to its output. They let gradients flow through very deep networks and are in nearly every modern architecture."]
 ]],
 ["Architectures","structure for the data",[
  ["Convolutional networks","Layers that slide small learned filters across an image so the same pattern detector is reused everywhere. They built the first wave of computer vision success."],
  ["Recurrent networks & LSTM","Networks that process a sequence step by step while carrying a hidden state, with LSTM gates easing long-range memory. They dominated sequence modeling until transformers, but are hard to parallelize."],
  ["Attention","A mechanism in which each position computes weights over all others and takes a weighted mix of their values. It lets a model use whatever context is relevant regardless of distance."],
  ["Transformers","Architectures built from attention and feed-forward blocks, processed in parallel across a sequence. Introduced in 2017, they are the basis of large language models and most modern vision and audio models."],
  ["Mixture of experts","A layer with many specialist sub-networks where a router sends each token to only a few. It raises total parameters without raising per-token compute."],
  ["State-space models","Sequence models such as Mamba that carry a compact state updated at each step, with cost linear in sequence length. They are a leading alternative to attention for very long inputs."],
  ["Graph neural networks","Networks that pass messages along the edges of a graph to learn from relational data. They are used on molecules, social networks and knowledge graphs."],
  ["Autoencoders","Networks that compress an input to a small code and reconstruct it. They learn compact representations and are the base of variational autoencoders."]
 ]],
 ["Generative families","sampling new data",[
  ["Variational autoencoders","Autoencoders trained so the code follows a smooth probability distribution, allowing new samples by decoding random codes. They give a principled latent space but tend to produce blurrier output."],
  ["GANs","Generative adversarial networks pit a generator against a discriminator that tries to spot fakes. They produce sharp images but are unstable to train and prone to mode collapse."],
  ["Diffusion models","Learn to reverse a gradual noising process, generating data by denoising from pure noise step by step. They power most state-of-the-art image and video generators."],
  ["Normalizing flows","Invertible transformations that map simple noise to data while keeping exact likelihoods. They allow precise density estimation, but constrain the architecture."],
  ["Autoregressive models","Generate one element at a time, each conditioned on those before it. Language models work this way, and the approach extends to images, audio and code."],
  ["Energy-based models","Assign a low energy to likely data and sample by finding low-energy states. They are flexible and general but expensive to train and sample."],
  ["Flow matching","Trains a model to predict a velocity field that carries noise to data along smooth paths. It simplifies and often speeds up diffusion-style generation."]
 ]],
 ["Scale","why bigger works",[
  ["Scaling laws","Empirical rules showing that loss falls smoothly as a power law in model size, data and compute. They let labs forecast the payoff from a larger training run before paying for it."],
  ["Emergent abilities","Capabilities that appear to switch on only at larger scale, such as multi-step arithmetic. Some are real thresholds in behavior, while others partly reflect how the capability is measured."],
  ["Compute-optimal training","The finding (the Chinchilla result) that for a fixed budget, parameters and training tokens should grow together. It showed many early large models were undertrained on data."],
  ["Pretraining data curation","Selecting, filtering and deduplicating the corpus a model learns from. Quality and mix of data often matter as much as quantity."],
  ["Test-time compute","Spending more computation at inference, through longer reasoning or multiple samples, to get better answers. It is a second scaling axis alongside training scale."]
 ]],
 ["Representation","what networks learn",[
  ["Embeddings","Dense vectors that place words, images or items so that similar things are close together. They are the shared currency of search, recommendation and retrieval."],
  ["Contrastive learning","Training a model to pull matching pairs together and push others apart, as in CLIP's image–text pairs. It learns useful representations without hand labels."],
  ["Latent spaces","The compressed internal coordinate space of a model, where directions can correspond to meaningful attributes. Generative models sample and edit by moving through it."],
  ["Fine-tuning","Continuing training of a pretrained model on a narrower dataset to specialize it. Low-rank methods such as LoRA make it cheap by updating only small added matrices."],
  ["Mechanistic interpretability","Reverse-engineering the circuits and features inside a network to explain how it computes. It aims at an understanding good enough to verify and debug large models."]
 ]]
]},
{ref:"C3",band:"C",name:"Reinforcement Learning",sum:"Learning to act from reward, bridging planning and learning.",deps:["B3","C1"],
 overview:"Reinforcement learning trains an agent by trial and error: it acts, receives rewards, and adjusts its behavior to maximize long-run return. It is the learning counterpart of planning. The region covers the basic framework, value-based and policy-based methods, approaches that learn or use a model of the world, and the harder settings (offline data, other agents, safety, human feedback) that matter in practice.",
 why:"RL produced the game-playing breakthroughs, trains robot controllers, and now shapes language models through human-feedback and verifiable-reward training. It is also where reward misspecification, and therefore alignment problems, are easiest to see.",
 subs:[
 ["Foundations","the trial-and-error frame",[
  ["Rewards & returns","A reward is the scalar feedback after each step; the return is the discounted sum of future rewards the agent tries to maximize. Defining the reward is the real specification of the task."],
  ["Bellman equations","Recursive relations stating that the value of a state equals the immediate reward plus the discounted value of what follows. Nearly all value-based RL is built on them."],
  ["Exploration vs. exploitation","The tension between using what the agent already knows and trying actions that might be better. Too little exploration locks in a poor policy; too much wastes reward."],
  ["Credit assignment","Working out which earlier actions were responsible for a later reward. It is hard when rewards are delayed, and is a core difficulty of long-horizon tasks."],
  ["Reward shaping","Adding intermediate rewards to guide learning toward a goal. It speeds up training but can create loopholes the agent exploits instead of the intended goal."],
  ["Bandits","The one-step version of RL: pick among options with unknown payoffs. They model A/B testing and recommendation, and isolate the exploration problem in its purest form."]
 ]],
 ["Value-based methods","learn what states are worth",[
  ["TD learning","Temporal-difference learning updates a value estimate toward the reward plus the estimate of the next state, learning during the episode rather than at its end. It is the central idea of practical RL."],
  ["Q-learning","Learns the value of each action in each state and acts greedily on it. It learns the optimal policy even while the agent explores off-policy."],
  ["DQN","Deep Q-network: Q-learning with a neural network, which in 2015 learned to play Atari games from pixels. It stabilized training with a replay buffer and a target network."],
  ["Experience replay","Storing past transitions and training on random samples of them. It reuses data and breaks the correlation between consecutive steps, and is key to stable off-policy learning."]
 ]],
 ["Policy-based methods","learn the policy directly",[
  ["REINFORCE","The basic policy-gradient algorithm: increase the probability of actions in proportion to the return that followed. It is simple and unbiased, but has high variance."],
  ["Actor–critic","Pairs a policy (actor) with a learned value function (critic) that lowers the variance of the gradient. Most modern policy methods follow this layout."],
  ["PPO","Proximal policy optimization limits how far each update can move the policy, which keeps training stable. It is a default RL algorithm and has been used in RLHF for language models."],
  ["GRPO","Group relative policy optimization scores several sampled answers to the same prompt against each other, removing the separate critic. It is used to train reasoning models with verifiable rewards."],
  ["SAC","Soft actor–critic maximizes reward plus policy entropy, which encourages exploration and robustness. It is a strong off-policy method for continuous control in robotics."]
 ]],
 ["Model-based & search","imagination and lookahead",[
  ["Model-based RL","The agent learns a model of how the environment responds and plans or trains inside it. It needs far fewer real interactions, but model errors compound."],
  ["MuZero","DeepMind's agent that learns a model of only what matters for planning (value, policy, reward) without being told the rules, then searches with it. It matched AlphaZero in board games and also did well on Atari."],
  ["Dreamer","A family of agents that learn a compact latent world model and train their policy on imagined rollouts. It achieves strong sample efficiency across many control tasks."],
  ["AlphaZero-style self-play","Training a network by playing against itself, using tree search to improve each move and the network to guide the search. It reached superhuman play in chess, shogi and Go from rules alone."]
 ]],
 ["Beyond the basics","harder settings",[
  ["Offline RL","Learning a policy from a fixed dataset of past interactions, with no new exploration. It suits domains where trial and error is unsafe or costly, but suffers from distribution shift."],
  ["Imitation learning","Learning a policy by copying expert demonstrations, as in behavior cloning. It is simple and sample-efficient, but errors compound when the agent drifts from the demonstrated states."],
  ["Inverse RL","Inferring the reward function that explains observed expert behavior. It offers a way to learn objectives from demonstration rather than writing them by hand."],
  ["Hierarchical RL","Learning reusable sub-skills (options) and a higher-level policy that chooses among them. It addresses long horizons by acting at multiple time scales."],
  ["Multi-agent RL","Several learning agents interacting, cooperating or competing. The environment is non-stationary from each agent's view, which complicates learning and links to game theory."],
  ["Safe RL","Learning while respecting constraints, such as never entering unsafe states. It matters for physical systems, where unrestricted exploration can cause damage."],
  ["RLHF & verifiable rewards","Reinforcement learning from human feedback trains a reward model on human preferences and optimizes against it; reward from verifiable outcomes (a unit test, a math answer) skips the learned model. Both are central to post-training language models."],
  ["Sim-to-real transfer","Training in simulation and deploying on a physical robot, usually with randomized conditions so the policy is robust. It is the practical route to robot learning, limited by the simulation gap."]
 ]]
]}
);
