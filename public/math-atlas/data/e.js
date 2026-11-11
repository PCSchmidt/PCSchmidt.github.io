/* Band E — Applied Modeling. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"E1",band:"E",name:"Control, Estimation & Modeling",sum:"Turning mathematical models into systems that sense, predict and steer.",deps:["B3","C1","D1"],
 overview:"Engineering systems must estimate hidden states from noisy measurements and choose inputs that drive behavior to a goal. This region covers mathematical modeling practice, state-space models, feedback control and stability, optimal and model-predictive control, and state estimation with Kalman and particle filters.",
 why:"Robots, aircraft, autonomous vehicles and industrial processes all rely on these methods, and they are the classical counterpart to reinforcement learning. Model-based control and estimation are what keeps learned components safe and grounded in physics.",
 subs:[
 ["Mathematical modeling","from problem to equations",[
  ["Modeling process","Define the question, choose variables, state assumptions, build and test the model. Most failures come from unstated or wrong assumptions."],
  ["Dimensional analysis & scaling","Using units to simplify equations and find dimensionless groups. Reveals what really controls behavior."],
  ["Conservation laws & first principles","Models built from conserved mass, energy or momentum. Provide structure that data-driven models can lack."],
  ["Parameter identification","Estimating unknown constants from measurements. Requires the data to excite the system enough to be identifiable."],
  ["Sensitivity analysis","How outputs change with inputs or parameters. Shows which uncertainties matter."],
  ["Model validation & uncertainty","Comparing predictions with held-out data and quantifying error. Establishes where a model can be trusted."],
  ["Surrogate & reduced-order models","Cheap approximations of expensive simulations. Neural networks and projection methods make real-time prediction feasible."]]],
 ["State-space & systems","a standard language",[
  ["State-space models","Describe a system by state, input, output and update equations. A unified form for linear and nonlinear dynamics."],
  ["Transfer functions","Input–output relations in the frequency domain. A classical tool for analyzing linear systems."],
  ["Controllability & observability","Whether inputs can steer all states, and whether outputs reveal them. Test whether control or estimation is possible at all."],
  ["Linearization around operating points","Approximating nonlinear systems locally by linear ones. Basis of most practical control design."],
  ["Discretization","Converting continuous dynamics to sampled steps. Required for digital controllers and filters."],
  ["System identification","Learning dynamics models from input–output data. The classical route to data-driven control."]]],
 ["Feedback control","staying on target",[
  ["Feedback & stability","Using measurements to correct behavior, and ensuring the loop does not oscillate or diverge. Stability is the first requirement."],
  ["PID control","Proportional, integral and derivative terms acting on the error. The most widely used controller in industry."],
  ["Root locus & Bode analysis","Graphical tools for seeing how gains and frequency affect stability and response. Give design intuition."],
  ["Pole placement & state feedback","Choosing feedback gains to set closed-loop dynamics. Possible when the system is controllable."],
  ["Robust control & margins","Designing for uncertainty in the model. Gain and phase margins measure how much error can be tolerated."],
  ["Lyapunov-based control","Using energy-like functions to prove stability of nonlinear controllers. Supports safety guarantees for learned policies."],
  ["Control barrier functions","Constraints that keep a system inside a safe set. Used to filter learned actions for safety."]]],
 ["Optimal & predictive control","best inputs over time",[
  ["Linear quadratic regulator","The optimal feedback for linear dynamics with quadratic cost. Solved with a Riccati equation and widely used."],
  ["Dynamic programming & Bellman equation","Recursive characterization of optimal decisions. The same principle underlies reinforcement learning."],
  ["Pontryagin's maximum principle","Necessary conditions for optimal control of continuous systems. Basis of trajectory optimization."],
  ["Model predictive control","Repeatedly solving a finite-horizon optimization and applying the first action. Handles constraints, common in robotics and process control."],
  ["Trajectory optimization","Computing a whole motion plan that satisfies dynamics and constraints. Used for legged robots and spacecraft."],
  ["Relation to reinforcement learning","Control assumes a known model while RL learns from interaction. Model-based RL combines them."]]],
 ["State estimation","inferring what we can't see",[
  ["Kalman filter","Optimal recursive estimator for linear Gaussian systems, alternating prediction and update. The workhorse of navigation and tracking."],
  ["Extended & unscented Kalman filters","Versions for nonlinear systems using linearization or sigma points. Standard in GPS/inertial fusion."],
  ["Particle filters","Represent the state distribution by weighted samples. Handle non-Gaussian, nonlinear problems."],
  ["Sensor fusion","Combining multiple noisy sensors into one estimate. Weights each by its reliability."],
  ["Smoothing & moving-horizon estimation","Using past and future data to refine estimates. Gives better accuracy when delay is acceptable."],
  ["Simultaneous localization and mapping","Estimating a robot's pose while building a map. A joint estimation problem solved with filters or graph optimization."],
  ["Observer design","Dynamical systems that reconstruct state from outputs. The deterministic counterpart of the Kalman filter."]]]
 ]},

{ref:"E2",band:"E",name:"Game Theory, Decisions & Operations Research",sum:"Choosing well when resources are limited, outcomes are uncertain and other agents respond.",deps:["B1","C2","D2"],
 overview:"Decision problems combine objectives, uncertainty and interaction. This region covers decision-making under uncertainty, linear and integer programming in operations research, game theory and mechanism design, and sequential decision models like Markov decision processes and bandits.",
 why:"Evaluating a system or policy often means choosing under uncertainty, and multi-agent AI needs equilibrium thinking. Operations research methods solve real scheduling, routing and allocation problems faster than learning alone.",
 subs:[
 ["Decision theory","rational choice under uncertainty",[
  ["Expected utility","Choosing the action with the highest probability-weighted value. The standard model of rational decision-making."],
  ["Risk attitudes","Whether a decision-maker prefers or avoids variance. Captured by concave or convex utility functions."],
  ["Value of information","What it is worth to learn more before deciding. Guides data collection and experimentation."],
  ["Decision trees & influence diagrams","Structured representations of choices, chances and outcomes. Make complex decisions explicit."],
  ["Loss functions & Bayes risk","Costs of errors and the rule minimizing expected cost. Connects classification thresholds to costs."],
  ["Minimax & robust decisions","Choosing the action with the best worst case. Appropriate when probabilities are unknown."],
  ["Multi-criteria decision analysis","Trading off several objectives. Pareto fronts show the set of non-dominated choices."]]],
 ["Operations research","optimizing real systems",[
  ["Linear & integer programming in practice","Modeling allocation, blending and scheduling as linear or integer programs. Commercial solvers solve large instances reliably."],
  ["Network flow models","Transportation, assignment and shortest-path problems on networks. Solved exactly and efficiently."],
  ["Scheduling & timetabling","Assigning tasks to times and resources. Constraint programming and integer programming are common tools."],
  ["Inventory & supply chain models","Balancing holding costs and stockouts under uncertain demand. Newsvendor and base-stock policies are classic."],
  ["Queueing & capacity planning","Using queue models to size systems for target wait times. Applies to servers, hospitals and call centers."],
  ["Simulation modeling","Discrete-event simulation of complex systems. Used when analytic formulas are not available."],
  ["Stochastic & robust programming","Optimization with uncertain data using scenarios or uncertainty sets. Produces solutions that hold up to variation."]]],
 ["Game theory","interacting decision-makers",[
  ["Normal-form games & Nash equilibrium","Strategies where no player gains by changing alone. The central solution concept."],
  ["Dominance & best response","Strategies that always beat others, and the best reply to others' play. Used to simplify games."],
  ["Mixed strategies & minimax theorem","Randomizing play, and the result that zero-sum games have a value. Underlies adversarial training and GAN analysis."],
  ["Extensive-form & sequential games","Games with moves over time and information. Solved by backward induction and counterfactual regret minimization."],
  ["Repeated games & cooperation","Long-run interaction allows cooperation through threats of retaliation. Explains tit-for-tat and reputation."],
  ["Bayesian games","Games with hidden information about players. Model auctions and negotiation."],
  ["Evolutionary game theory","Strategy frequencies that evolve by success. Models learning dynamics in populations."],
  ["Computing equilibria","Algorithms for finding equilibria, including PPAD-hardness in general. Limits what can be expected of multi-agent learning."]]],
 ["Mechanism design & social choice","designing the rules",[
  ["Mechanism design","Creating rules so self-interested participants reach a desired outcome. The engineering side of game theory."],
  ["Auctions","Formats such as first-price, second-price and combinatorial auctions. Ad markets and spectrum sales run on them."],
  ["Incentive compatibility","Designing so truthful reporting is best. The revelation principle simplifies the design space."],
  ["Voting & social choice","Aggregating preferences into group decisions. Arrow's theorem shows no perfect system exists."],
  ["Fair division & matching markets","Allocating goods or pairing parties fairly and stably. Stable matching is used for residencies and school assignment."],
  ["Algorithmic game theory","Studying efficiency of equilibria and computation together. The price of anarchy measures loss from selfish behavior."]]],
 ["Sequential decisions","acting over time",[
  ["Markov decision processes","Decision problems with states, actions, transitions and rewards. The standard model for planning and reinforcement learning."],
  ["Bellman optimality & value iteration","Recursive equations for optimal value and algorithms that solve them by iteration. Converges by a contraction argument."],
  ["Policy iteration","Alternating evaluation and improvement of a policy. Often converges in few steps."],
  ["Partially observable MDPs","Decisions when the state is hidden and tracked as a belief. Powerful but computationally hard."],
  ["Multi-armed bandits","Choosing among options with unknown payoffs, balancing exploring and exploiting. Regret bounds quantify learning speed."],
  ["Optimal stopping","Deciding when to act, as in the secretary problem. Applies to experiments and trading."],
  ["Stochastic games","Multi-agent MDPs where outcomes depend on all players. The setting for multi-agent reinforcement learning."]]]
 ]},

{ref:"E3",band:"E",name:"Mathematics of Machine Learning",sum:"The theory that explains why learning works and where it fails.",deps:["B2","C2","D1","D3"],
 overview:"Learning theory turns the tools of the earlier regions into guarantees about models trained on data. This region covers statistical learning bounds, kernel and Gaussian process methods, high-dimensional statistics, the theory of deep networks, and generative and probabilistic modeling mathematics.",
 why:"Theory tells you how much data you need, why overparameterized networks generalize, what a model can represent and which assumptions break. It lets you read ML papers critically and know what a result does and does not guarantee.",
 subs:[
 ["Statistical learning theory","generalization guarantees",[
  ["Empirical risk minimization","Choose the model that does best on training data. Theory asks when this also does well on new data."],
  ["PAC learning","Framework for learning with high probability to within a tolerance. Gives sample-complexity bounds."],
  ["VC dimension","A measure of a hypothesis class's capacity by the largest set it can shatter. Predicts generalization for classical models."],
  ["Rademacher complexity","Capacity measured by ability to fit random labels. Gives data-dependent generalization bounds."],
  ["Uniform convergence & generalization bounds","Showing training and true error are close for every model in a class at once. Basis for classical guarantees."],
  ["Bias–variance tradeoff","Error splits into systematic and sampling-related parts. Frames the choice of model complexity."],
  ["No free lunch & inductive bias","No algorithm is best on all problems, so assumptions matter. Explains why architecture and priors encode knowledge."],
  ["PAC-Bayes & stability","Bounds based on distributions over models or on sensitivity to one data point. Applicable to modern, large models."]]],
 ["Kernels & function spaces","learning with similarity",[
  ["Kernels & feature maps","A function giving inner products in a possibly infinite feature space. Lets linear methods fit nonlinear patterns."],
  ["Reproducing kernel Hilbert spaces","Function spaces defined by a kernel, where evaluation is an inner product. The representer theorem keeps solutions finite."],
  ["Support vector machines","Maximum-margin classifiers solved via convex duality. A prime example of theory guiding an algorithm."],
  ["Gaussian process regression","A kernel-based Bayesian method giving predictions with uncertainty. Costs cubic time in data size."],
  ["Random features & Nyström","Approximating kernels with finite features. Make kernel methods scale."],
  ["Neural tangent kernel","Describes wide networks trained by gradient descent as kernel methods. A first theory of why training works."],
  ["Universal approximation","Networks with enough units can approximate continuous functions. Says what is representable, not what is learnable."]]],
 ["High-dimensional statistics","when features outnumber samples",[
  ["Sparse recovery & lasso theory","Conditions under which an L1 penalty identifies the right features. Shows when sparse structure can be found."],
  ["Random matrix theory","The spectra of large random matrices. Predicts behavior of covariance estimates and of weight matrices."],
  ["Covariance estimation","Estimating large covariances from few samples with shrinkage or structure. Poor estimates hurt PCA and discriminant methods."],
  ["Dimension reduction guarantees","Johnson–Lindenstrauss shows random projections preserve distances. Justifies random projections and sketching."],
  ["Minimax rates","The best worst-case error any method can achieve. Tells you when a method is as good as possible."],
  ["Double descent & benign overfitting","Test error can fall again beyond the interpolation point, and interpolating models can generalize. Revises the classical bias–variance story."]]],
 ["Theory of deep learning","what we know about networks",[
  ["Expressivity & depth","How network size and depth affect the functions represented. Some functions need exponentially fewer units with depth."],
  ["Optimization landscape of networks","Properties of the loss surface for deep models. Overparameterization makes many minima connected and good."],
  ["Implicit bias of gradient descent","The solution gradient descent selects among many that fit data. Often the one with smallest norm or maximum margin."],
  ["Mean-field & infinite-width limits","Analyzing networks as the number of units grows. Reveals feature-learning versus lazy training regimes."],
  ["Scaling laws","Empirical power-law relations of loss to data, parameters and compute. Guide allocation of resources."],
  ["Attention & transformer theory","Analyses of what attention can compute and learn. Includes expressivity and in-context learning results."],
  ["Generalization puzzles","Why huge networks that can memorize still generalize. Remains partly open."]]],
 ["Probabilistic & generative modeling","the mathematics of generation",[
  ["Latent variable models & EM","Models with hidden variables fit by alternating expectation and maximization. Basis of mixtures and many generative models."],
  ["Variational inference & ELBO","Approximating a posterior by optimizing a lower bound on evidence. The foundation of variational autoencoders."],
  ["Score matching & diffusion","Learning the gradient of the log density and reversing a noising SDE. The mathematics of diffusion models."],
  ["Normalizing flows","Invertible maps with tractable Jacobians for exact density. Use change of variables."],
  ["Energy-based models","Define probability through an energy function with an intractable normalizer. Trained with contrastive or score methods."],
  ["Causal inference foundations","Structural models and do-calculus for reasoning about interventions. Separates prediction from effect estimation."],
  ["Information bottleneck","Learning representations that keep relevant information and compress the rest. Offers a theoretical view of representation learning."]]]
 ]}
);
