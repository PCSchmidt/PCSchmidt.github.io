/* Band D — Structure & Geometry. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"D1",band:"D",name:"Fourier Analysis, Signals & Information",sum:"Decomposing signals into frequencies, and measuring and compressing information.",deps:["A2","A3","B1"],
 overview:"Many signals are easier to understand as combinations of waves, and many questions about data are questions about information. This region covers Fourier and related transforms, sampling and filtering, compressed sensing, and information theory including entropy, coding and the limits of compression and communication.",
 why:"Convolutions, spectrograms, positional encodings and frequency-domain methods all come from Fourier analysis, while cross-entropy, KL divergence and mutual information come from information theory. Both explain how much structure a model can extract from data.",
 subs:[
 ["Fourier analysis","frequency decomposition",[
  ["Fourier series","Representing a periodic function as a sum of sines and cosines. The original idea of splitting a signal into pure frequencies."],
  ["Fourier transform","Extends the idea to non-periodic signals, mapping a function of time to a function of frequency. Converts convolution into multiplication."],
  ["Discrete Fourier transform & FFT","The finite, sampled version and its fast algorithm costing n log n. The FFT makes frequency analysis and fast convolution practical."],
  ["Convolution theorem","Convolution in time equals multiplication in frequency. Explains why large convolutions can be computed quickly and how CNN filters act."],
  ["Uncertainty principle","A signal cannot be sharply localized in both time and frequency. Sets limits on time–frequency resolution."],
  ["Spectral analysis & power spectrum","Examining how energy is distributed over frequency. Used for audio features, vibration monitoring and time-series diagnosis."],
  ["Fourier features & positional encodings","Sines and cosines of varied frequency used to give models a sense of position or high-frequency detail. Appear in transformers and implicit neural representations."]]],
 ["Signals & filtering","processing data streams",[
  ["Linear time-invariant systems","Systems whose output is a convolution of the input with an impulse response. Foundation of filtering and of convolutional layers."],
  ["Sampling & the Nyquist theorem","A band-limited signal can be recovered if sampled at more than twice its highest frequency. Undersampling creates aliasing."],
  ["Filters (low-pass, high-pass, band-pass)","Operations that keep or remove frequency ranges. Smoothing and edge detection are filters."],
  ["Z-transform","The discrete-time analogue of the Laplace transform. Used to analyze digital filters and recurrence relations."],
  ["Wavelets","Localized waves for analysis at multiple scales. Capture transient features that Fourier analysis blurs and inspired multiscale networks."],
  ["Short-time Fourier transform & spectrograms","Fourier analysis over sliding windows to show how frequency content changes. The standard input for speech and audio models."],
  ["Wiener & matched filtering","Optimal filters for recovering signals from noise. Early forms of statistical estimation."]]],
 ["Sparsity & compressed sensing","recovering more from less",[
  ["Sparse representations","Signals described by a few nonzero coefficients in the right basis. Underpin compression and denoising."],
  ["L1 minimization","Replacing a counting penalty with the sum of absolute values to promote sparsity convexly. The lasso is an example."],
  ["Compressed sensing","Recovering sparse signals from far fewer measurements than the Nyquist rate suggests. Rests on randomness and incoherent measurement."],
  ["Restricted isometry property","A condition ensuring measurements preserve the geometry of sparse vectors. Guarantees recovery."],
  ["Dictionary learning","Learning the basis in which data are sparse. A precursor of learned features."],
  ["Inverse problems & regularization","Recovering causes from effects when the forward map is ill-conditioned. Tikhonov and sparsity penalties stabilize it."]]],
 ["Information theory","measuring uncertainty",[
  ["Entropy","The average surprise of a distribution, measured in bits or nats. It is the minimum average code length for the source."],
  ["Cross-entropy","Average surprise when the true distribution is scored by a model's. The standard classification loss."],
  ["KL divergence","A measure of how one distribution differs from another, zero only when they match. Appears in variational inference, distillation and RL regularization."],
  ["Mutual information","How much knowing one variable reduces uncertainty about another. Used for feature selection and representation learning objectives."],
  ["Data-processing inequality","Processing data cannot increase information about the source. A foundational limit on what any pipeline can recover."],
  ["Jensen–Shannon & f-divergences","Families of divergences measuring distribution difference. Behind GAN objectives and robust comparisons."],
  ["Maximum entropy principle","Choose the least-committal distribution consistent with constraints. Yields exponential family models and softmax."],
  ["Fisher information & information geometry","Fisher information defines a metric on the space of distributions. Gives the natural gradient."]]],
 ["Coding & communication","limits of compression and transmission",[
  ["Source coding theorem","Data cannot be compressed below its entropy without loss. The theoretical limit that compression algorithms approach."],
  ["Huffman & arithmetic coding","Practical codes achieving near-entropy compression. Behind file formats and token-level compression."],
  ["Channel capacity (Shannon)","The maximum reliable rate over a noisy channel. Reliable communication is possible below it and impossible above."],
  ["Error-correcting codes","Adding structured redundancy so errors can be detected and fixed. Hamming, Reed–Solomon and LDPC codes are in everyday use."],
  ["Rate–distortion theory","The tradeoff between compression rate and allowed error. Frames lossy compression and the information bottleneck."],
  ["Kolmogorov complexity & MDL","Shortest description length as a measure of structure. Minimum description length turns model selection into compression."]]]
 ]},

{ref:"D2",band:"D",name:"Graphs, Networks & Discrete Optimization",sum:"Mathematics of relationships, connectivity and combinatorial structure.",deps:["A1","A3","B1"],
 overview:"A graph records which things are related. This region covers graph basics and traversal, shortest paths and flows, spectral graph theory, random graphs and network science, and the algorithms and complexity theory that govern what can be computed efficiently on discrete structures.",
 why:"Social networks, road maps, molecules, knowledge graphs and the computation graph of a neural network are all graphs. Spectral methods and message passing underlie graph neural networks and clustering.",
 subs:[
 ["Graph fundamentals","vertices and edges",[
  ["Graphs, digraphs & weights","Vertices joined by edges that may be directed or weighted. The general model for relational data."],
  ["Adjacency & incidence matrices","Representing a graph as a matrix. Lets linear algebra answer graph questions."],
  ["Paths, cycles & connectivity","Ways to move through a graph and whether parts are linked. Connectivity decides whether information can flow."],
  ["Trees & spanning trees","Connected graphs with no cycles and trees that touch every vertex. Minimal spanning trees give cheap networks and clustering."],
  ["Bipartite graphs & matching","Graphs with two vertex groups and edges only between them. Matching models assignment problems."],
  ["Planarity & coloring","Whether a graph can be drawn without crossings and how many colors it needs. Basis for scheduling and map problems."],
  ["Directed acyclic graphs","Directed graphs without cycles, with a valid ordering. Model dependencies, computation graphs and causal structure."]]],
 ["Algorithms on graphs","efficient traversal and paths",[
  ["BFS & DFS","The two basic traversals, level by level or deep first. Foundations for finding components, cycles and orderings."],
  ["Shortest paths (Dijkstra, Bellman–Ford)","Algorithms finding least-cost routes. Dijkstra handles nonnegative weights and Bellman–Ford allows negative ones."],
  ["Minimum spanning tree algorithms","Kruskal and Prim build cheapest connected networks. Used in clustering and network design."],
  ["Topological sort","Ordering a DAG so dependencies come first. Determines execution order in pipelines and backpropagation."],
  ["Dynamic programming on graphs","Solving subproblems once and reusing them. The method behind Viterbi, edit distance and value iteration."],
  ["Graph search heuristics (A*)","Guided search using an estimate of remaining cost. Efficient for pathfinding and planning."]]],
 ["Flows & combinatorial optimization","moving things through networks",[
  ["Max-flow min-cut theorem","The largest flow equals the smallest cut capacity. Applies to image segmentation, matching and network reliability."],
  ["Linear programming duality for flows","Flow problems are linear programs with a dual interpretation. Gives certificates of optimality."],
  ["Assignment & transportation problems","Matching supply to demand at minimum cost. Underlie optimal transport in discrete form."],
  ["Matching algorithms","Methods like the Hungarian algorithm and blossom algorithm. Used for pairing items in tracking and recommendations."],
  ["Traveling salesman & vehicle routing","Find short tours through many locations. Classic NP-hard problems with heuristic and exact methods."],
  ["NP-completeness & approximation","Classes of problems believed to require exponential time, and methods to get near-optimal answers with guarantees. Tell you when to stop looking for exact solutions."],
  ["Submodularity","A diminishing-returns property of set functions. Greedy algorithms have guarantees, useful for sensor placement and summarization."]]],
 ["Spectral graph theory","graphs through eigenvalues",[
  ["Graph Laplacian","A matrix capturing how a function varies across edges. Its quadratic form measures smoothness over the graph."],
  ["Eigenvalues of graphs","The spectrum reveals connectivity, bottlenecks and number of components. The second-smallest Laplacian eigenvalue measures how well-connected a graph is."],
  ["Spectral clustering","Using Laplacian eigenvectors to partition a graph. Finds clusters that k-means misses."],
  ["Cheeger inequality","Relates the best graph cut to the spectral gap. Links combinatorial and spectral quantities."],
  ["Random walks on graphs","Random movement along edges and its mixing speed. Basis for PageRank and graph embeddings."],
  ["Graph signal processing","Fourier analysis for data defined on graph nodes, using Laplacian eigenvectors as the basis. Gives the theory behind graph convolutions."],
  ["Message passing & graph neural networks","Nodes repeatedly aggregate neighbors' information. Expressiveness is bounded by the Weisfeiler–Leman test."]]],
 ["Networks & random graphs","structure at scale",[
  ["Erdős–Rényi random graphs","Graphs with each edge present independently. Show sharp thresholds like sudden appearance of a giant component."],
  ["Small-world & scale-free networks","Models with short paths and clustering, or heavy-tailed degrees. Capture features of real social and technical networks."],
  ["Centrality measures","Scores of node importance such as degree, betweenness and eigenvector centrality. PageRank is a variant."],
  ["Community detection","Finding densely connected groups. Modularity and stochastic block models are common approaches."],
  ["Stochastic block models","Probabilistic models of graphs with latent groups. A basis for theory about when communities are detectable."],
  ["Epidemics & diffusion on networks","How contagion or information spreads along edges. Depends on network structure and thresholds."],
  ["Knowledge graphs & link prediction","Graphs of entities and typed relations, and predicting missing edges. Combine symbolic structure with learned embeddings."]]]
 ]},

{ref:"D3",band:"D",name:"Geometry, Topology & Manifolds",sum:"Shape, space and curvature, from data clouds to curved parameter spaces.",deps:["A2","A3"],
 overview:"High-dimensional data often lie near lower-dimensional curved sets, and parameter spaces have their own geometry. This region covers metric and topological spaces, differential geometry and manifolds, optimal transport, information geometry, and topological data analysis.",
 why:"The manifold hypothesis, natural gradients, Wasserstein distances, equivariant networks and persistent homology all come from geometry and topology. They provide the right notion of distance and shape for data and models.",
 subs:[
 ["Metric & topological spaces","distance and nearness",[
  ["Metric spaces","Sets with a distance satisfying positivity, symmetry and the triangle inequality. The setting for comparing data points."],
  ["Open sets & topology","A way to define nearness and continuity without distances. Captures qualitative shape."],
  ["Compactness & completeness","Compact sets behave like finite ones, and complete spaces have no missing limits. They guarantee existence of optima and convergence."],
  ["Normed & Banach spaces","Vector spaces with a notion of length where limits exist. The setting for function approximation and stability analysis."],
  ["Hilbert spaces","Complete inner-product spaces with geometry like Euclidean space. Kernel methods work in reproducing kernel Hilbert spaces."],
  ["Metrics on distributions","Distances such as total variation, Wasserstein and maximum mean discrepancy. Different choices change what training objectives can see."],
  ["Curse of dimensionality","In high dimensions, volume concentrates and distances become similar. Challenges nearest-neighbor methods and density estimation."]]],
 ["Differential geometry","curved spaces",[
  ["Manifolds","Spaces that look flat locally but may be curved globally. Data and parameters are often modeled as lying on manifolds."],
  ["Tangent spaces & vector fields","Local linear approximations of a manifold at each point. Where gradients and velocities live."],
  ["Riemannian metrics & geodesics","A way to measure lengths on a manifold and the shortest paths along it. Basis for geometry-aware optimization and interpolation."],
  ["Curvature","How much a space bends. Determines how paths spread apart or converge."],
  ["Lie groups & Lie algebras","Continuous symmetry groups and their infinitesimal generators. Describe rotations and poses in robotics and equivariant networks."],
  ["Manifold hypothesis","The idea that real data lie near a low-dimensional manifold in a large space. Justifies dimensionality reduction and generative modeling."],
  ["Manifold learning (Isomap, UMAP, diffusion maps)","Algorithms that recover low-dimensional structure from neighborhoods. Used for visualization and feature extraction."],
  ["Optimization on manifolds","Gradient methods constrained to curved sets like orthogonal matrices or the sphere. Used for orthogonal weights and low-rank constraints."]]],
 ["Optimal transport","moving distributions",[
  ["Monge & Kantorovich problems","Finding the cheapest way to move one distribution of mass to another. The Kantorovich form allows splitting mass."],
  ["Wasserstein distance","The minimal transport cost between distributions. Unlike KL divergence, it stays meaningful for distributions with disjoint support."],
  ["Sinkhorn algorithm","Entropy-regularized transport computed by alternating normalizations. Makes optimal transport fast enough for machine learning."],
  ["Wasserstein GANs","Use Wasserstein distance as the training signal. Give smoother gradients than the original GAN loss."],
  ["Gradient flows in probability space","Evolving distributions along the steepest descent of an energy. Connects the Fokker–Planck equation, diffusion and sampling."],
  ["Flow matching & transport maps","Learning maps that carry noise to data. A modern foundation for generative modeling."]]],
 ["Information & statistical geometry","the geometry of models",[
  ["Statistical manifolds","Families of distributions viewed as a curved space with the Fisher metric. Gives geometry to parameter spaces."],
  ["Natural gradient","Steepest descent measured with the Fisher metric, invariant to parameterization. Motivates K-FAC and related methods."],
  ["Exponential family geometry","Dually flat structure with natural and expectation parameters. Explains why many estimation problems are convex."],
  ["Bregman divergences","Distance-like measures from a convex function, including KL and squared error. Used in mirror descent and clustering."],
  ["Mirror descent","Gradient steps in a geometry matched to the problem, such as the probability simplex. Gives multiplicative-weights updates."],
  ["Hyperbolic & non-Euclidean embeddings","Embedding hierarchies in curved spaces where volume grows exponentially. Efficient for trees and taxonomies."]]],
 ["Topological data analysis","the shape of data",[
  ["Simplicial complexes","Building shape from points, edges, triangles and higher analogues. The combinatorial model for topology of data."],
  ["Homology & Betti numbers","Counts of connected components, loops and voids. Summaries of shape that ignore stretching."],
  ["Persistent homology","Tracking features as a distance scale grows to separate real structure from noise. The main tool of topological data analysis."],
  ["Persistence diagrams & barcodes","Summaries of when features appear and vanish. Can be turned into vectors for learning."],
  ["Mapper algorithm","Building a simplified graph that summarizes the shape of high-dimensional data. Used for exploration."],
  ["Topology in learning","Using topological features or constraints in models and analysis of what networks represent. An active research direction."]]]
 ]}
);
