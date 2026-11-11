/* Band C — Computation & Optimization. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"C1",band:"C",name:"Numerical Analysis & Scientific Computing",sum:"Getting accurate answers from finite-precision machines.",deps:["A2","A3"],
 overview:"Computers store numbers approximately and perform finite steps. This region covers floating-point arithmetic and error, stable algorithms for linear algebra, root finding and interpolation, numerical integration and differentiation, and solvers for differential equations, with a focus on accuracy, stability and cost.",
 why:"Silent numerical problems cause NaNs, unstable training and wrong results that look plausible. Knowing why softmax is computed with a shift, why mixed precision needs loss scaling, or why a solver diverges comes from this region.",
 subs:[
 ["Floating-point & error","how computers hold numbers",[
  ["Floating-point representation","Numbers stored as a sign, exponent and mantissa with finite precision. Understanding it explains rounding, overflow and why 0.1 + 0.2 is not exactly 0.3."],
  ["Machine epsilon & rounding error","The smallest relative gap near one, which bounds the error of each operation. Errors accumulate across millions of steps."],
  ["Catastrophic cancellation","Subtracting nearly equal numbers wipes out significant digits. It is why naive variance and log-sum-exp formulas fail."],
  ["Forward & backward error","Forward error compares the answer to the truth; backward error asks which nearby problem the answer solves exactly. A backward-stable algorithm is as good as can be expected."],
  ["Low-precision formats (FP16, BF16, FP8)","Reduced-precision number formats that speed up training and cut memory. They require care with range, scaling and accumulation."],
  ["Conditioning vs. stability","Conditioning is a property of the problem and stability of the algorithm. A good algorithm cannot rescue an ill-conditioned problem."]]],
 ["Numerical linear algebra","matrices on a machine",[
  ["Stable factorizations (QR, SVD)","Orthogonal methods that avoid amplifying errors. They are preferred over normal equations for least squares."],
  ["Iterative solvers (conjugate gradient)","Methods that approach the solution step by step using only matrix–vector products. They are essential for huge sparse systems."],
  ["Preconditioning","Transforming a system so iterations converge faster. Adaptive optimizers act like diagonal preconditioners."],
  ["Eigenvalue algorithms","Methods like power iteration and QR iteration for spectra. Power iteration underlies PageRank and spectral norm estimation."],
  ["Krylov subspace methods","Build solutions from repeated applications of a matrix. Lanczos and GMRES scale to very large problems."],
  ["Sparse & banded storage","Representations that store only nonzeros or structured bands. They make graph and grid problems tractable."],
  ["Cost of linear algebra (flops & memory)","Operation counts and data movement. Modern speed is often limited by memory bandwidth, not arithmetic."]]],
 ["Root finding & interpolation","solving and approximating functions",[
  ["Bisection & fixed-point iteration","Reliable but slow methods for solving equations. Their convergence is guaranteed under mild conditions."],
  ["Newton's method","Uses the derivative to converge quadratically near a root. Applied to gradients, it becomes Newton's method for optimization."],
  ["Secant & quasi-Newton ideas","Approximate derivatives from past steps. They give fast convergence without computing second derivatives."],
  ["Polynomial interpolation","Fitting a polynomial through points. High degrees on evenly spaced points can oscillate wildly, known as Runge's phenomenon."],
  ["Splines","Piecewise polynomials joined smoothly. They give stable, flexible curve fitting and smoothing."],
  ["Chebyshev approximation","Using specific nodes and polynomials to minimize worst-case error. A model for near-optimal function approximation."],
  ["Radial basis & kernel interpolation","Interpolating with distance-based functions. Closely related to kernel methods and Gaussian processes."]]],
 ["Numerical calculus","derivatives and integrals by computer",[
  ["Finite differences","Approximating derivatives from function values. Used to check gradients, with truncation and rounding errors to balance."],
  ["Automatic differentiation","Exact derivatives of a program by applying the chain rule to its operations. Forward mode is cheap for few inputs and reverse mode (backpropagation) for few outputs."],
  ["Quadrature rules","Approximating integrals by weighted sums of function values. Trapezoid, Simpson and Gaussian quadrature trade effort for accuracy."],
  ["Adaptive integration","Refining where the function changes quickly. Gives accurate results with minimal evaluations."],
  ["Monte Carlo integration","Estimating integrals using random samples. The only practical option in high dimensions, with error shrinking like one over the square root of samples."],
  ["Symbolic vs. numeric computation","Exact algebraic manipulation versus approximate evaluation. Each suits different tasks, and tools combine them."]]],
 ["Solving differential equations","time-stepping and grids",[
  ["Euler & Runge–Kutta methods","Step-by-step solvers for ODEs of increasing accuracy. Runge–Kutta is the default in scientific software and neural ODE solvers."],
  ["Stability & step size","A solver can blow up if steps are too large. Stability regions limit the usable step for stiff equations."],
  ["Implicit methods","Solve an equation at each step for greater stability. Needed for stiff systems at the price of solving linear systems."],
  ["Symplectic integrators","Methods that preserve the geometry of Hamiltonian dynamics. Used in molecular dynamics and Hamiltonian Monte Carlo."],
  ["Finite element & spectral methods","Approximating PDE solutions with local pieces or global basis functions. Staples of engineering and weather modeling."],
  ["Convergence order & error control","How fast error shrinks with step size, and how solvers choose steps automatically. Lets you trust a numerical result."],
  ["Verification & validation","Checking that equations are solved correctly and that the model matches reality. Distinct steps that both matter for simulations."]]]
 ]},

{ref:"C2",band:"C",name:"Optimization",sum:"Finding the best choice under constraints. The engine behind training.",deps:["A2","A3","C1"],
 overview:"Optimization means minimizing or maximizing an objective. This region covers problem formulation, convex analysis and duality, first- and second-order algorithms, constrained and structured methods, stochastic optimization used in machine learning, and the nonconvex landscapes of deep networks.",
 why:"Training a model is solving an optimization problem. Understanding convexity, conditioning, step sizes and duality tells you when a solver will succeed, why a loss plateau appears and how to choose among methods.",
 subs:[
 ["Formulation & convexity","posing the problem",[
  ["Objectives, constraints & feasible sets","What is minimized, what must hold and which points are allowed. A good formulation decides whether the problem is easy or hard."],
  ["Convex sets & functions","Convex problems have no spurious local minima, so any local solution is global. Recognizing convexity is the most valuable skill in optimization."],
  ["Optimality conditions","Zero gradient for unconstrained problems and KKT conditions for constrained ones. They characterize solutions and stopping criteria."],
  ["Strong convexity & smoothness","Bounds on curvature from below and above. Their ratio, the condition number, sets how fast gradient methods converge."],
  ["Subgradients & nonsmooth functions","Generalized gradients for functions with kinks, like ReLU or L1 penalties. Allow optimization of nondifferentiable objectives."],
  ["Relaxation","Replacing a hard problem with an easier convex one. Gives bounds and practical approximations for discrete problems."]]],
 ["Duality & constrained optimization","the other side of the problem",[
  ["Lagrangian & dual problem","Folding constraints into the objective with multipliers to get a dual problem that bounds the primal. Often easier to solve and informative."],
  ["Strong duality & Slater's condition","When the primal and dual optimum coincide. Holds for most convex problems and underlies support vector machine theory."],
  ["KKT conditions","First-order requirements involving multipliers and complementary slackness. They identify which constraints are active."],
  ["Linear programming","Linear objective and constraints over a polytope. Solved by simplex or interior-point methods and central to operations research."],
  ["Quadratic & conic programming","Objectives and constraints with quadratics or cones, including second-order cone and semidefinite programs. They model many robust and relaxation problems."],
  ["Penalty & barrier methods","Handling constraints by adding costs that grow near violation. Foundations of interior-point methods."],
  ["ADMM & splitting methods","Breaking a problem into pieces that are solved separately and reconciled. Scales to distributed and structured problems."]]],
 ["Gradient-based algorithms","moving downhill",[
  ["Gradient descent","Step against the gradient with a chosen step size. Simple, and the basis of nearly all training."],
  ["Convergence rates","How fast error falls: sublinear for general convex, linear for strongly convex. They predict how many iterations are needed."],
  ["Momentum & acceleration","Adding velocity to smooth and speed progress. Nesterov's method is provably optimal for smooth convex problems."],
  ["Line search & trust regions","Choosing step lengths adaptively or restricting steps to where the model is reliable. Provide robust convergence."],
  ["Newton & quasi-Newton (BFGS, L-BFGS)","Use curvature to take better steps. Quasi-Newton methods approximate the Hessian cheaply from gradient history."],
  ["Conjugate gradient","Uses conjugate directions to solve quadratic problems quickly. Efficient for large problems without storing a Hessian."],
  ["Proximal methods","Handle a nonsmooth term, such as L1, by applying a proximal step. Behind ISTA, FISTA and many sparse recovery algorithms."],
  ["Coordinate descent","Updating one variable at a time. Fast for lasso and other problems with separable structure."]]],
 ["Stochastic & large-scale","optimization with data",[
  ["Stochastic gradient descent","Using gradients on random mini-batches. Cheap steps with noise that often helps generalization."],
  ["Step-size schedules","Decreasing or warmed-up learning rates. Needed because the noise prevents convergence with a fixed step."],
  ["Adaptive methods (Adagrad, RMSProp, Adam)","Per-parameter scaling using gradient history. Work well on ill-scaled problems and are the default for deep learning."],
  ["Variance reduction (SVRG, SAGA)","Lowering gradient noise to get faster convergence. Offer linear rates on finite-sum problems."],
  ["Distributed & asynchronous optimization","Splitting computation across machines. Faces communication cost and stale gradient tradeoffs."],
  ["Batch size & gradient noise","Larger batches reduce noise but can hurt generalization and need scaled learning rates. A central practical tradeoff."],
  ["Second-order for deep learning","Approximate curvature methods like K-FAC and Shampoo. Can speed up training but cost more per step."]]],
 ["Nonconvex & discrete optimization","the hard cases",[
  ["Local minima & saddle points","In high dimensions saddles are more common than bad local minima. Noise and momentum help escape them."],
  ["Loss landscapes","The geometry of the objective over parameters. Wide flat minima are associated with better generalization."],
  ["Implicit regularization","Optimizers' own biases select particular solutions among many. Gradient descent tends toward minimum-norm solutions in linear problems."],
  ["Integer programming & branch-and-bound","Optimization with discrete variables, solved by systematic search with bounds. Powers scheduling, routing and planning."],
  ["Combinatorial optimization & NP-hardness","Problems like the traveling salesman, where exact solutions are costly. Use approximation algorithms and heuristics."],
  ["Metaheuristics","Simulated annealing, genetic algorithms and similar search strategies. Useful when gradients are unavailable."],
  ["Bayesian & black-box optimization","Optimizing expensive functions using a surrogate model. Standard for hyperparameter tuning."]]]
 ]},

{ref:"C3",band:"C",name:"Stochastic Processes & Simulation",sum:"Randomness unfolding over time, and computing with random samples.",deps:["B1","C1"],
 overview:"A stochastic process is a collection of random variables indexed by time or space. This region covers Markov chains, Poisson and renewal processes, continuous-time processes such as Brownian motion, martingales, and the Monte Carlo and MCMC methods that use random simulation to compute answers.",
 why:"Sequential decision-making, language modeling, queueing, finance and Bayesian inference are stochastic processes. MCMC and Monte Carlo are how many intractable integrals are computed in practice.",
 subs:[
 ["Markov chains","memoryless dynamics",[
  ["Markov property","The future depends on the past only through the present state. It makes long sequences tractable and underlies HMMs and reinforcement learning."],
  ["Transition matrices","Probabilities of moving between states, with each row summing to one. Matrix powers give multi-step behavior."],
  ["Stationary distribution","A distribution unchanged by the dynamics. The long-run fraction of time spent in each state, which PageRank estimates."],
  ["Irreducibility & periodicity","Whether all states communicate and whether returns follow a cycle. They decide if a chain converges to a unique stationary law."],
  ["Mixing time & spectral gap","How fast a chain forgets its start. A larger gap in the transition matrix means faster convergence, critical for sampling."],
  ["Absorbing chains & hitting times","Chains with terminal states and the time to reach them. Used for expected duration and success probabilities."],
  ["Hidden Markov models","Markov chains observed through noisy emissions. The forward–backward and Viterbi algorithms infer hidden states."]]],
 ["Point & jump processes","events over time",[
  ["Poisson process","Random events at a constant rate with independent gaps. A standard model for arrivals and rare events."],
  ["Exponential waiting times","Gaps between Poisson events follow an exponential distribution, which has no memory. Links counts and times."],
  ["Renewal processes","Events with general independent gaps. They model replacement and recurrence problems."],
  ["Queueing theory","Mathematics of waiting lines, with arrival and service processes. Used for capacity planning of servers and systems."],
  ["Hawkes & self-exciting processes","Events that raise the rate of future events. Model bursts like earthquakes, trades and social cascades."],
  ["Continuous-time Markov chains","Markov processes with exponential holding times. Describe reaction networks and system reliability."]]],
 ["Continuous-time processes","noise in continuous time",[
  ["Brownian motion","A continuous random path with independent Gaussian increments. The mathematical model of diffusion and the noise in SDEs."],
  ["Itô calculus","Rules for integrating with respect to Brownian motion, differing from ordinary calculus by a correction term. Required to write and solve SDEs."],
  ["Ornstein–Uhlenbeck process","A noisy process pulled back to a mean. Models mean-reverting quantities and appears in diffusion models."],
  ["Gaussian processes","Collections of variables jointly Gaussian, defined by a mean and a kernel. A flexible prior over functions used for regression and optimization."],
  ["Langevin dynamics","Gradient flow plus noise, whose stationary law is a target distribution. Basis of score-based sampling and noisy optimization."],
  ["Diffusion processes & generators","Processes described by drift and noise, with a generator operator giving their evolution. Connect SDEs to PDEs."],
  ["Lévy processes & jumps","Processes with independent increments including sudden jumps. Capture heavy-tailed shocks."]]],
 ["Martingales & stopping","fair games and decisions",[
  ["Martingales","Processes whose expected next value equals the current one. Model fair games and give powerful convergence and bounds."],
  ["Stopping times","Random times decided using only past information. Frame when to stop an experiment or exercise an option."],
  ["Optional stopping theorem","Under conditions, you cannot beat a fair game by choosing when to stop. Gives exact results for hitting probabilities."],
  ["Azuma–Hoeffding & martingale bounds","Concentration inequalities for dependent sequences. Used in the analysis of online learning and stochastic algorithms."],
  ["Convergence of stochastic approximation","Theory showing noisy iterative updates, like SGD, converge under step-size conditions. The Robbins–Monro conditions are the classic example."],
  ["Random walks","Sums of random steps, in one or many dimensions. Basic model of diffusion and of exploration."]]],
 ["Simulation & Monte Carlo","computing with randomness",[
  ["Pseudorandom generators","Deterministic algorithms producing sequences that look random. Quality and reproducibility with seeds matter for experiments."],
  ["Monte Carlo estimation","Averaging random samples to approximate an expectation. Error shrinks with the square root of the sample count regardless of dimension."],
  ["Importance sampling","Sampling from an easier distribution and reweighting. Reduces variance when well chosen and fails with poor weights."],
  ["Variance reduction","Antithetic variates, control variates and stratification to lower estimator variance. Same accuracy with fewer samples."],
  ["Markov chain Monte Carlo","Building a chain whose stationary distribution is the target and sampling along it. Makes Bayesian posteriors computable."],
  ["Metropolis–Hastings & Gibbs sampling","Core MCMC algorithms using accept–reject steps or conditional sampling. Foundations of probabilistic programming."],
  ["Hamiltonian Monte Carlo","MCMC that uses gradients and simulated dynamics to make long, efficient moves. The engine of Stan and many Bayesian tools."],
  ["Sequential Monte Carlo (particle filters)","Using weighted particles to track a changing distribution. Handles nonlinear state estimation."],
  ["Convergence diagnostics","Checks such as R-hat and effective sample size for whether MCMC has converged. Necessary before trusting a posterior."]]]
 ]}
);
