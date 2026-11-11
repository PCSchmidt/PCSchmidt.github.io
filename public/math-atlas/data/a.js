/* Band A — Bedrock. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"A1",band:"A",name:"Proof, Sets & Discrete Structures",sum:"The language of precise mathematical statements and the objects that counting and computation rest on.",deps:[],
 overview:"Applied mathematics still depends on stating things exactly. This region covers how claims are built from logic and sets, the proof techniques used to establish them, the counting and number-theoretic tools used everywhere in algorithms, and the abstract algebraic structures (groups, rings, fields) that give vocabulary to symmetry and to linear algebra.",
 why:"Reading a paper, checking an algorithm's correctness, or understanding why a method has a guarantee all require comfort with definitions, quantifiers and proof. Combinatorics and algebra also show up directly in coding theory, cryptography and symmetry-aware neural networks.",
 subs:[
 ["Logic & sets","the grammar of mathematics",[
  ["Propositions & quantifiers","Statements that are true or false, combined with ‘for all’ and ‘there exists’. Getting quantifier order right is the difference between a uniform guarantee and a weaker one that holds only pointwise, which matters constantly in convergence and generalization claims."],
  ["Sets, relations & functions","Collections of objects and the rules that connect them. A function's domain, codomain, injectivity and surjectivity decide whether it can be inverted, which is the first question to ask about any map between data spaces."],
  ["Equivalence relations","A rule that splits a set into classes of ‘same’ things. It underlies clustering as a partition, quotient spaces, and the idea that some data differences should be ignored."],
  ["Cardinality","A way of comparing the sizes of sets, finite or infinite. It separates countable from uncountable collections, which explains why a function space is far larger than any list of examples."],
  ["Partial orders & lattices","Ways of ranking items when not every pair is comparable. Lattices appear in program analysis, formal concept analysis and in how knowledge hierarchies are organized."]]],
 ["Proof techniques","how claims get established",[
  ["Direct proof & contradiction","Showing a claim follows from assumptions, or showing its denial is impossible. Contradiction is the standard way to prove optimality and impossibility results."],
  ["Induction","Proving a statement for all natural numbers from a base case and a step. It is the basis for correctness proofs of recursive algorithms and for results about layer-by-layer network depth."],
  ["Pigeonhole & counting arguments","Reasoning that forces collisions or bounds from sizes alone. Used to show compression limits and to prove that some learning problems need a minimum amount of data."],
  ["Construction & counterexample","Proving existence by building an object, or disproving a claim with one case. Counterexamples are how you learn where a plausible-sounding method breaks."],
  ["Reading a proof","Skill of identifying hypotheses, the key idea and where each assumption is used. In applied work it tells you which assumptions of a published guarantee your data actually violates."]]],
 ["Combinatorics","counting without listing",[
  ["Permutations & combinations","Counting orderings and selections. They size search spaces and appear in sampling, cross-validation splits and in normalizing constants of discrete distributions."],
  ["Binomial coefficients","Counts of choosing k items from n. They appear in binomial and hypergeometric distributions and in the expansion of polynomial features."],
  ["Inclusion–exclusion","A way to count a union by adding sets and correcting for overlap. It underlies exact probability calculations for ‘at least one’ events."],
  ["Generating functions","Encoding a sequence as the coefficients of a power series to solve counting and recurrence problems. Probability generating functions are the same idea applied to distributions."],
  ["Recurrence relations","Equations defining each term from earlier ones. Solving them gives the running time of divide-and-conquer algorithms and closed forms for sequences."],
  ["Ramsey & extremal ideas","Results saying that large enough structures must contain some pattern. They give worst-case limits for graph and coding problems."]]],
 ["Number theory & discrete math","integers and modular worlds",[
  ["Divisibility & primes","Facts about how integers divide each other. Prime structure is the foundation of public-key cryptography and of hashing strategies."],
  ["Modular arithmetic","Arithmetic that wraps around at a modulus. It powers hashing, cyclic structures, random-number generators and cryptographic protocols."],
  ["Euclidean algorithm","A fast method to find the greatest common divisor. It is also how modular inverses are computed in cryptography and coding."],
  ["Finite fields","Number systems with finitely many elements where all arithmetic works. They are the working arithmetic of error-correcting codes and elliptic-curve cryptography."],
  ["Boolean algebra","The mathematics of true/false values and logical operations. It is the model for digital circuits, SAT problems and the logic of decision trees."]]],
 ["Abstract algebra","structure and symmetry",[
  ["Groups","Sets with an operation that can be combined, undone and has an identity. Symmetries of an object form a group, which is how rotation and permutation invariance are described."],
  ["Rings & fields","Systems with addition and multiplication, with fields also allowing division. Real and complex numbers and finite fields are all fields, and polynomial rings underlie algebraic coding."],
  ["Group actions & invariance","How a group transforms a space. Equivariant networks are built so that applying a transformation to the input transforms the output in a matching way."],
  ["Homomorphisms","Maps that preserve structure. They formalize when two representations of data carry the same information about an operation."],
  ["Vector spaces as modules","The abstract setting for linear algebra, with scalars from any field. It clarifies which results depend on real numbers and which hold more generally."]]]
 ]},

{ref:"A2",band:"A",name:"Calculus & Real Analysis",sum:"Limits, change and accumulation, made rigorous.",deps:[],
 overview:"Calculus supplies derivatives and integrals; analysis explains when they behave. This region covers limits and continuity, differentiation in one and many variables, integration, sequences and series, and the notions of convergence and function spaces that tell you when an approximation can be trusted.",
 why:"Every training algorithm is built on derivatives, every probability density is an integral, and every proof of convergence is an analysis argument. Knowing the conditions under which a limit may be exchanged with an integral or a derivative prevents silent errors in derivations.",
 subs:[
 ["Limits & continuity","the foundation of calculus",[
  ["Limits","The value a quantity approaches as an input approaches a point. All derivatives, integrals and convergence statements are defined through limits."],
  ["Epsilon–delta definition","The precise way to say a limit exists, by controlling the error for any tolerance. It trains the habit of stating exactly how close is close enough."],
  ["Continuity","A function with no jumps, so small input changes cause small output changes. Continuity of a loss is the minimal condition for local reasoning about training."],
  ["Uniform continuity & Lipschitz","Bounds on how fast a function can change. A Lipschitz constant controls sensitivity to input noise and the stable step size of gradient methods."],
  ["Intermediate & extreme value theorems","Guarantees that continuous functions hit intermediate values and attain maxima on closed intervals. They are why optimization over a compact set has a solution."]]],
 ["Differentiation","rates of change",[
  ["Derivative","The best linear approximation of a function near a point. Backpropagation computes derivatives of a loss with respect to parameters."],
  ["Chain, product & quotient rules","Rules for differentiating combinations of functions. The chain rule is the mathematical core of backpropagation."],
  ["Mean value theorem","Links the average rate of change over an interval to the instantaneous rate somewhere inside it. It underlies error bounds for approximations and step-size analysis."],
  ["Taylor expansion","Approximating a function near a point by a polynomial built from its derivatives. Gradient descent uses first-order Taylor models and Newton's method uses second-order ones."],
  ["L'Hôpital & asymptotics","Tools for evaluating indeterminate limits and comparing growth rates. Big-O and little-o notation come from this language."],
  ["Convex functions & Jensen","A function lying below its chords has a single basin and satisfies Jensen's inequality. This is the source of many bounds, including the evidence lower bound in variational inference."]]],
 ["Multivariable calculus","many inputs at once",[
  ["Partial derivatives & gradient","Rates of change along each coordinate, collected into a vector pointing uphill. The gradient is the central object of optimization."],
  ["Jacobian & Hessian","The matrix of first derivatives of a vector function, and the matrix of second derivatives of a scalar one. The Hessian describes curvature and decides whether a stationary point is a minimum, maximum or saddle."],
  ["Directional derivatives","Rate of change in any chosen direction. They explain why the gradient is the direction of steepest ascent."],
  ["Multivariable chain rule","Derivatives through compositions of vector functions, written as products of Jacobians. Automatic differentiation is an efficient implementation of it."],
  ["Implicit function theorem","Conditions under which an equation defines one variable as a function of others, with a formula for its derivative. It enables differentiating through optimization layers and equilibria."],
  ["Lagrange multipliers","A way to optimize under equality constraints by adding multiplier variables. They give the first-order conditions used in constrained optimization and SVM theory."]]],
 ["Integration","accumulation",[
  ["Riemann & Lebesgue integrals","Two definitions of area under a curve; the Lebesgue integral handles far more functions and is the foundation of modern probability."],
  ["Fundamental theorem of calculus","Connects derivatives and integrals as inverse operations. It lets a cumulative distribution function and its density determine each other."],
  ["Change of variables","Rewriting an integral in new coordinates with a Jacobian determinant factor. It is the principle behind normalizing flows and transforming probability densities."],
  ["Improper integrals","Integrals over unbounded regions or near singularities. They define normalizing constants of heavy-tailed densities and test whether moments exist."],
  ["Multiple integrals & Fubini","Integrating over several variables and swapping the order when allowed. Marginalizing a joint distribution relies on it."],
  ["Gaussian integral","The integral of a bell curve, which equals the square root of pi. It fixes the normalizing constant of the normal distribution and powers many closed-form results."]]],
 ["Sequences, series & convergence","infinite processes",[
  ["Sequences & limits","Ordered lists and the values they approach. Iterative algorithms produce sequences, and convergence analysis asks whether and how fast they approach a solution."],
  ["Infinite series","Sums of infinitely many terms. They define expansions like exponentials and trigonometric functions and appear in discounted rewards."],
  ["Convergence tests","Criteria such as ratio and comparison tests for deciding whether a series converges. Useful when checking that an expected value exists."],
  ["Power series & analytic functions","Functions equal to their Taylor series within a radius. Moment generating functions and many special functions are of this type."],
  ["Pointwise vs. uniform convergence","Whether a sequence of functions converges at each point, or at the same rate everywhere. Only uniform convergence preserves continuity and allows swapping limits with integrals."],
  ["Dominated & monotone convergence","Theorems giving conditions to swap a limit and an integral. They justify moving derivatives inside expectations, as in the score-function gradient estimator."]]]
 ]},

{ref:"A3",band:"A",name:"Linear Algebra",sum:"The mathematics of vectors, matrices and linear maps. The workhorse of data and models.",deps:[],
 overview:"Data become vectors and matrices, models become linear maps plus nonlinearities, and many hard problems reduce to linear systems. This region covers vector spaces, matrices and their factorizations, spectral theory, inner product geometry and the numerical behavior of linear computations.",
 why:"Almost every ML algorithm is, internally, linear algebra. Understanding rank, conditioning and spectra explains why models underfit, why training is unstable and why low-rank tricks like LoRA work.",
 subs:[
 ["Vector spaces & linear maps","the setting",[
  ["Vector spaces & subspaces","Collections closed under addition and scaling. Feature spaces, embeddings and the set of solutions to a homogeneous system are all subspaces."],
  ["Linear independence, basis & dimension","A basis is a minimal set that spans a space, and its size is the dimension. It tells you how many degrees of freedom a representation really has."],
  ["Linear maps & matrices","Functions preserving addition and scaling, written as matrices once a basis is chosen. A neural layer's linear part is one such map."],
  ["Rank & nullity","The dimension of the output space a matrix reaches, and of the inputs it collapses to zero. Rank-deficient data matrices mean redundant features and non-unique solutions."],
  ["Change of basis","Re-expressing vectors and maps in another coordinate system. Many algorithms, such as PCA and Fourier transforms, are choices of a better basis."],
  ["Four fundamental subspaces","The column, row, null and left null spaces of a matrix. Together they give a complete picture of what a linear system can and cannot do."]]],
 ["Linear systems","solving Ax = b",[
  ["Gaussian elimination","Row operations that reduce a system to triangular form. It is the basic algorithm for solving small to medium linear systems."],
  ["LU & Cholesky factorization","Factoring a matrix into triangular pieces so repeated solves are cheap. Cholesky applies to symmetric positive definite matrices, like covariance matrices."],
  ["Least squares & normal equations","Finding the vector that best fits an overdetermined system in the squared-error sense. Linear regression is exactly this."],
  ["Pseudoinverse","A generalized inverse that gives the minimum-norm least-squares solution for any matrix. It handles rank-deficient and underdetermined problems."],
  ["Condition number","A measure of how much errors in the input are amplified in the solution. A large condition number signals unstable computations and slow gradient convergence."],
  ["Sparse & structured systems","Matrices with mostly zeros or special patterns that allow fast solves. They appear in graphs, finite-difference grids and large regression problems."]]],
 ["Orthogonality & inner products","geometry",[
  ["Inner products & norms","Ways to measure alignment and length. Cosine similarity and distances between embeddings are built from them."],
  ["Orthogonality","Perpendicular vectors with zero inner product. Orthogonal features carry non-redundant information and orthogonal matrices preserve lengths."],
  ["Projections","Mapping a vector to its closest point in a subspace. Regression is projection of the target onto the column space of the features."],
  ["Gram–Schmidt & QR","A process that builds an orthonormal basis, giving the QR factorization. QR is the numerically stable route to least squares."],
  ["Orthogonal & unitary matrices","Matrices that rotate or reflect without changing lengths. Orthogonal initialization helps keep signals from exploding or vanishing in deep networks."],
  ["Cauchy–Schwarz & triangle inequalities","Bounds relating inner products and norms. They are used throughout proofs of convergence and similarity bounds."]]],
 ["Spectral theory","eigenvalues and decompositions",[
  ["Eigenvalues & eigenvectors","Directions a matrix only stretches, and by how much. They reveal stability, dominant modes and principal directions of variance."],
  ["Diagonalization","Writing a matrix in a basis where it only scales. It makes matrix powers and exponentials easy and describes linear dynamics."],
  ["Spectral theorem","Symmetric matrices have real eigenvalues and orthogonal eigenvectors. It justifies PCA and the analysis of quadratic forms."],
  ["Singular value decomposition","Factors any matrix into rotations and a scaling. It gives best low-rank approximations, the pseudoinverse and the basis of PCA, recommenders and LoRA."],
  ["Positive definite matrices","Symmetric matrices whose quadratic form is always positive. Covariance matrices, kernels and the Hessian at a minimum are of this type."],
  ["Jordan form & non-normal matrices","What happens when a matrix cannot be diagonalized. Non-normal behavior can cause transient growth in dynamics even when all eigenvalues suggest decay."],
  ["Perron–Frobenius","For positive matrices, a dominant positive eigenvector exists. It explains PageRank and the long-run behavior of Markov chains."]]],
 ["Matrix calculus & tensors","derivatives and higher-order data",[
  ["Matrix derivatives","Rules for differentiating scalar functions of matrices, such as the gradient of a trace or log-determinant. Needed to derive closed-form estimators and training updates."],
  ["Kronecker & Hadamard products","Different ways to multiply matrices elementwise or in block form. They appear in structured covariance and efficient approximations of the Hessian."],
  ["Tensors & multilinear maps","Multi-dimensional arrays that generalize matrices. Batches of images and attention scores are tensors, and tensor contractions are the core operations."],
  ["Low-rank approximation","Replacing a matrix with a product of thin factors. It compresses models and data and underlies matrix factorization and parameter-efficient tuning."],
  ["Tensor decompositions","Generalizations of the SVD to tensors, such as CP and Tucker. They compress layers and uncover latent structure in multiway data."],
  ["Randomized linear algebra","Using random projections to approximate big matrices quickly. It makes SVD and regression feasible at large scale with controlled error."]]]
 ]}
);
