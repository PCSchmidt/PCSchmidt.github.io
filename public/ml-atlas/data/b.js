/* Band B — Lowlands. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"B1",band:"B",name:"Unsupervised Learning",sum:"Finding structure in data with no labels.",deps:["A1","A2"],
 overview:"Unsupervised learning works with inputs alone and looks for the shape of the data: natural groups (clustering), a smaller set of coordinates that keeps the important variation (dimensionality reduction), what normal looks like so unusual points stand out (density and anomaly detection), and items that occur together (patterns and topics).",
 why:"Most real data is unlabeled. These methods are how you explore it, compress it, segment it and flag anomalies before anyone has paid for labels.",
 subs:[
 ["Clustering","grouping similar points",[
  ["k-means","Splits data into k groups by repeatedly assigning points to the nearest center and moving each center to its group's mean. Fast and simple, but assumes round, similar-sized clusters and needs k chosen in advance."],
  ["k-medoids","Like k-means but each center must be an actual data point. More robust to outliers and works with any distance measure."],
  ["Hierarchical clustering","Builds a tree of nested clusters by repeatedly merging (or splitting) the closest groups. The tree (dendrogram) lets you choose the number of clusters afterward."],
  ["DBSCAN","Density-based clustering: groups points packed closely together and labels isolated points as noise. Finds clusters of any shape without setting k."],
  ["HDBSCAN","A hierarchical version of DBSCAN that handles clusters of varying density and needs less tuning. A strong default for exploratory clustering, including on spatial tracks."],
  ["Gaussian mixture models","Model the data as a blend of several Gaussian distributions, giving each point a probability of belonging to each cluster. Soft clustering, fit with expectation–maximization."],
  ["Spectral clustering","Clusters using eigenvectors of a similarity graph between points. Finds non-convex clusters that k-means misses."],
  ["Mean shift","Moves each point toward the densest nearby region until points settle on density peaks, which become cluster centers. Finds the number of clusters automatically."],
  ["Cluster validity (silhouette)","Scores for how good a clustering is without labels. The silhouette compares how close each point is to its own cluster versus the nearest other one."]]],
 ["Dimensionality reduction","fewer, better coordinates",[
  ["PCA","Principal component analysis finds the orthogonal directions of greatest variance and projects data onto the top few. Used to compress, denoise and visualize data and to remove correlated features."],
  ["Kernel PCA","PCA performed in a kernel feature space, so it can capture nonlinear structure that plain PCA flattens."],
  ["ICA","Independent component analysis separates a signal into statistically independent sources, as in separating voices in a mixed recording."],
  ["Factor analysis","Explains observed variables as combinations of a few hidden factors plus noise. Common in psychometrics and survey analysis."],
  ["NMF","Non-negative matrix factorization breaks data into additive, non-negative parts. Produces interpretable components, such as topics in text or parts of faces."],
  ["t-SNE","A visualization method that places similar points near each other in 2-D or 3-D. Good at revealing clusters but distorts global distances, so axis positions mean little."],
  ["UMAP","A faster alternative to t-SNE that preserves more global structure. Widely used to visualize embeddings."],
  ["Isomap","Reduces dimensions while preserving distances measured along the data's curved surface (geodesic distance) rather than straight lines."],
  ["Autoencoders","Neural networks trained to compress input into a small code and reconstruct it. The code is a learned low-dimensional representation, and high reconstruction error flags anomalies."],
  ["Random projections","Projecting data onto random directions. Surprisingly preserves distances well (Johnson–Lindenstrauss lemma) and is very cheap."]]],
 ["Density & anomalies","what is normal, what is not",[
  ["Kernel density estimation","Estimates the probability density by placing a small bump on each data point and summing them. Low-density regions indicate rare or anomalous points."],
  ["Isolation forest","Detects anomalies by how quickly random splits isolate a point. Outliers get isolated in few splits. Fast and effective on tabular data."],
  ["One-class SVM","Learns a boundary around normal data only; anything outside is flagged as an anomaly."],
  ["Local outlier factor","Compares a point's local density to that of its neighbors. Catches points that are unusual relative to their own neighborhood."],
  ["Novelty detection","Detecting new kinds of data not seen in a clean training set, as opposed to outliers within a contaminated set. Key for monitoring and security."]]],
 ["Patterns & topics","co-occurrence structure",[
  ["Association rules (Apriori)","Finds rules like 'customers who buy A also buy B' with support and confidence measures. Apriori prunes the search using the fact that subsets of frequent itemsets are also frequent."],
  ["Market basket analysis","Applying association rules to purchase data to find products bought together, used in recommendations and store layout."],
  ["Topic models (LDA)","Latent Dirichlet allocation treats each document as a mix of topics and each topic as a mix of words, discovering themes in a corpus without labels."],
  ["Latent semantic analysis","Applies SVD to a term–document matrix to find latent concepts, so documents with related but different words still match."]]]
]},
{ref:"B2",band:"B",name:"Probabilistic & Causal Modeling",sum:"Models that represent uncertainty explicitly and reason about cause and effect.",deps:["A1"],
 overview:"These methods write down an explicit probabilistic story of how data is generated, then reason backward from observations to hidden quantities. Graphical models encode which variables depend on which; sequential models track hidden state over time; Bayesian inference returns full distributions instead of single answers; and causal inference asks what would happen under an intervention rather than what is merely correlated.",
 why:"Use these when you need calibrated uncertainty, have little data but strong domain knowledge, are tracking something through noisy sensors, or must answer 'what if we change X?'",
 subs:[
 ["Graphical models","structured joint distributions",[
  ["Bayesian networks","Directed acyclic graphs where each node is a variable and arrows show direct dependence. They factor a complex joint distribution into simple local pieces and support diagnostic reasoning."],
  ["Markov random fields","Undirected graphs describing which variables directly influence each other. Used in image denoising, spatial statistics and segmentation."],
  ["Factor graphs","A bipartite graph of variables and the factors linking them. A common representation for running inference algorithms like belief propagation."],
  ["Conditional random fields","Discriminative graphical models for labeling sequences, such as tagging each word in a sentence, where neighboring labels influence each other."],
  ["d-separation","A graphical rule for reading off which variables are conditionally independent in a Bayesian network. Also central to identifying confounders in causal graphs."]]],
 ["Sequential models","latent state over time",[
  ["Hidden Markov models","A hidden state follows a Markov chain and emits noisy observations. Classic for speech, gesture and activity recognition and for inferring behavior modes from tracks."],
  ["Kalman filter","The optimal estimator for a linear system with Gaussian noise. Fuses a motion model with noisy measurements to track position and velocity, as in radar, GPS and AIS tracking."],
  ["Particle filters","Track a hidden state with a cloud of weighted samples. Handles nonlinear motion and non-Gaussian noise where the Kalman filter breaks down."],
  ["State-space models","A general framework of hidden state evolving over time plus observations of it. Includes Kalman filters and HMMs, and inspired modern deep sequence models like Mamba."],
  ["Viterbi algorithm","Dynamic programming that finds the single most likely sequence of hidden states in an HMM."],
  ["Forward–backward","Computes the probability of each hidden state at each time step given the whole observation sequence. Used for smoothing and for training HMMs."]]],
 ["Bayesian inference","posteriors, not points",[
  ["Priors & conjugacy","A prior encodes belief before seeing data. A conjugate prior gives a posterior in the same family, so updates have a closed form (e.g. Beta prior with Bernoulli data)."],
  ["Bayesian linear regression","Linear regression that returns a distribution over the weights and therefore a predictive interval for each prediction, widening where data is scarce."],
  ["Hierarchical models","Bayesian models with parameters shared across groups, such as per-site effects drawn from a common distribution. Small groups borrow strength from large ones."],
  ["Gaussian processes","A distribution over functions defined by a kernel. Gives smooth predictions with uncertainty bands, ideal for small datasets and as the engine of Bayesian optimization."],
  ["Bayesian optimization","Optimizing an expensive black-box function by fitting a surrogate model (often a GP) and choosing the next point to try where improvement is most likely. Widely used for hyperparameter tuning."],
  ["Probabilistic programming (Stan, PyMC, Pyro)","Languages where you write the generative model as code and the system performs inference automatically."]]],
 ["Approximate inference","when exact math is intractable",[
  ["Expectation–maximization","Alternates between estimating hidden variables given parameters (E-step) and updating parameters given those estimates (M-step). Fits mixtures and HMMs."],
  ["MCMC","Markov chain Monte Carlo draws samples from a complex posterior by running a random walk whose long-run distribution is that posterior. Accurate but can be slow."],
  ["Metropolis–Hastings","The basic MCMC algorithm: propose a move, accept it with a probability that depends on how much more likely the new point is."],
  ["Gibbs sampling","MCMC that updates one variable at a time from its conditional distribution given all others. Simple when those conditionals are easy."],
  ["Hamiltonian Monte Carlo","MCMC that uses gradients to make long, efficient moves through parameter space. The engine inside Stan and PyMC."],
  ["Variational inference","Turns inference into optimization by fitting a simpler distribution as close as possible to the true posterior. Faster than MCMC and scales to large models such as VAEs."],
  ["ELBO","The evidence lower bound, the objective maximized in variational inference and VAEs. It balances fitting the data against staying close to the prior."],
  ["Belief propagation","Message passing between nodes of a graphical model to compute marginal probabilities. Exact on trees, approximate (loopy BP) on graphs with cycles."]]],
 ["Causal inference","from correlation to intervention",[
  ["Potential outcomes","The Rubin framework: each unit has an outcome under treatment and under control, but only one is observed. Causal effects are differences between these potential outcomes."],
  ["Structural causal models","Pearl's framework: a causal graph plus equations for how each variable is produced. Lets you reason about interventions and counterfactuals."],
  ["do-calculus","Rules for computing the effect of an intervention, written P(Y | do(X)), from observational data when the causal graph allows it."],
  ["Confounding","A variable that influences both the treatment and the outcome, creating a misleading correlation. Controlling for confounders is the central challenge of observational causal work."],
  ["Propensity scores","The probability of receiving treatment given covariates. Matching or weighting on it balances groups so treated and untreated units are comparable."],
  ["Instrumental variables","A variable that affects the treatment but affects the outcome only through it. Allows causal estimates even with unmeasured confounding."],
  ["Difference-in-differences","Compares the before-and-after change in a treated group to the change in an untreated group, cancelling out shared trends."],
  ["Uplift modeling","Predicts the incremental effect of an action on each individual, such as who will respond to an offer only because they received it."],
  ["Causal discovery","Algorithms (PC, GES, NOTEARS) that try to infer the causal graph itself from data, usually under strong assumptions."],
  ["A/B testing","Randomized controlled experiments in products. Randomization removes confounding, making them the gold standard for measuring causal impact."]]]
]},
{ref:"B3",band:"B",name:"Learning Paradigms",sum:"Ways of training that change what supervision, data or deployment look like.",deps:["A3","C1"],
 overview:"Standard supervised learning assumes plenty of labels, one fixed task, all data in one place and a world that does not change. Each paradigm here relaxes one of those assumptions: learning from few or no labels, reusing knowledge across tasks, learning continuously as data arrives, or training without centralizing sensitive data.",
 why:"Real projects rarely meet the textbook assumptions. These paradigms are how foundation models are built and adapted, and how ML runs on private or distributed data.",
 subs:[
 ["Less supervision","learning from cheap signals",[
  ["Semi-supervised learning","Training with a small labeled set plus a large unlabeled set, using the unlabeled data's structure to improve the decision boundary."],
  ["Self-training & pseudo-labeling","A model labels unlabeled data with its confident predictions, then retrains on them. Simple and effective, but errors can reinforce themselves."],
  ["Self-supervised learning","Creating a training signal from the data itself, such as predicting a hidden word or a missing image patch. It is how foundation models learn from unlabeled data at scale."],
  ["Contrastive learning (SimCLR, MoCo)","Learning representations by pulling together two views of the same example and pushing apart views of different examples. Powers CLIP and many vision encoders."],
  ["Masked modeling","Hiding parts of the input and training the model to reconstruct them, as in BERT for text and MAE for images. A dominant self-supervised objective."],
  ["Weak supervision","Using noisy, programmatic or indirect labels instead of hand labels, accepting lower label quality in exchange for scale."]]],
 ["Reuse & adaptation","carrying knowledge across tasks",[
  ["Transfer learning","Reusing a model trained on one task or dataset as the starting point for another. The reason a pretrained model plus a few thousand examples often beats training from scratch."],
  ["Fine-tuning","Continuing to train a pretrained model on task-specific data, updating all or some of its weights."],
  ["Domain adaptation","Adapting a model trained on one data distribution (the source) to perform on a different one (the target), such as from daytime to night imagery or one sensor to another."],
  ["Multi-task learning","Training one model on several related tasks at once so shared structure helps each task."],
  ["Meta-learning (MAML)","Learning to learn: training across many tasks so the model can adapt to a new task from a few examples. MAML learns an initialization that fine-tunes quickly."],
  ["Few-shot & zero-shot learning","Performing a new task from only a handful of examples (few-shot) or none, just a description (zero-shot). Large pretrained models made both practical."],
  ["In-context learning","A large language model picking up a task from examples placed in its prompt, with no weight updates."]]],
 ["Data over time","learning that doesn't stop",[
  ["Online learning","Updating a model one example or small batch at a time as data streams in, rather than retraining on a fixed dataset."],
  ["Continual learning","Learning a sequence of tasks or data shifts over time while keeping earlier skills."],
  ["Catastrophic forgetting","A neural network losing previously learned abilities when trained on new data. The central problem continual learning tries to solve."],
  ["Active learning","The model chooses which unlabeled examples a human should label next, usually the most uncertain or informative ones, to get the most accuracy per label."],
  ["Curriculum learning","Presenting training examples from easy to hard, as in human teaching, which can speed up and stabilize training."]]],
 ["Distributed & private","data that can't move",[
  ["Federated learning","Training a shared model across many devices or organizations without moving raw data. Each site trains locally and sends only updates to be combined."],
  ["Split learning","Dividing a network so the first layers run where the data lives and only intermediate activations are shared."],
  ["Differential privacy in training","Adding calibrated noise to gradients (as in DP-SGD) so the trained model reveals almost nothing about any single training record."],
  ["Secure aggregation","Cryptographic protocols that let a server sum model updates from many clients without seeing any individual update."]]]
]}
);
