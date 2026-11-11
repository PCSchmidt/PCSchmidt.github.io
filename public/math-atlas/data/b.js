/* Band B — Core Methods. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"B1",band:"B",name:"Probability Theory",sum:"The mathematics of uncertainty, from coin flips to measure-theoretic foundations.",deps:["A1","A2"],
 overview:"Probability assigns numbers to uncertain events and gives rules for combining them. This region covers the axioms, random variables and their distributions, expectation and moments, relationships between variables, and the limit theorems that explain why averages behave predictably.",
 why:"Every statistical and machine-learning method has a probabilistic model behind it, explicit or not. Loss functions are negative log-likelihoods, regularizers are priors, and generalization guarantees are probability bounds.",
 subs:[
 ["Foundations","what probability is",[
  ["Sample space & events","The set of possible outcomes and the subsets of interest. Defining the space carefully avoids paradoxes and makes conditional reasoning precise."],
  ["Kolmogorov axioms","Three rules — nonnegativity, total mass one and additivity — from which all of probability follows. They make probability a measure."],
  ["Conditional probability","The probability of an event given that another occurred. It is how new evidence updates beliefs and underlies every sequential model."],
  ["Independence & conditional independence","Events that give no information about each other, possibly given a third. Conditional independence is the assumption that makes naive Bayes and graphical models tractable."],
  ["Bayes' theorem","Reverses a conditional probability using the prior and the likelihood. It is the basis of Bayesian inference and classification with generative models."],
  ["Law of total probability","Breaking an event into cases by a partition. It is the rule for marginalizing out hidden variables."],
  ["Measure-theoretic probability","Defining probability as a measure on a sigma-algebra. It rigorously handles continuous variables and limits and is needed for advanced proofs."]]],
 ["Random variables & distributions","describing uncertain quantities",[
  ["Random variables","Functions mapping outcomes to numbers. Features, labels and model outputs are modeled as random variables."],
  ["PMF, PDF & CDF","Ways to specify a distribution: probabilities of values, density, and cumulative probability. Likelihoods are built from densities and quantiles from CDFs."],
  ["Bernoulli, binomial & Poisson","Core discrete distributions for yes/no outcomes, counts of successes and rare-event counts. They model classification labels and arrival counts."],
  ["Gaussian distribution","The bell curve, fixed by mean and variance, and its multivariate form with a covariance matrix. It is central because of the central limit theorem and its convenient algebra."],
  ["Exponential family","A broad class of distributions with a shared form and sufficient statistics. It gives generalized linear models and conjugate priors."],
  ["Heavy tails & power laws","Distributions where extreme values are far more likely than a Gaussian predicts. They matter for financial returns, network degrees and outlier-prone data."],
  ["Mixtures","Distributions formed by randomly choosing among components. They model clusters and multimodal data, and are fit with EM."],
  ["Transformation of variables","Finding the distribution of a function of a random variable using the Jacobian. It is the basis of normalizing flows and reparameterization."]]],
 ["Expectation & moments","summarizing distributions",[
  ["Expectation","The probability-weighted average of a quantity. Risk, loss and many quantities in learning are expectations."],
  ["Variance & covariance","Measures of spread and of how two variables move together. The covariance matrix describes the shape of multivariate data."],
  ["Correlation vs. dependence","Correlation captures only linear association, and zero correlation does not mean independence. Nonlinear dependence needs other measures."],
  ["Moment generating functions","A transform whose derivatives give moments and which characterizes many distributions. It is the tool behind Chernoff bounds."],
  ["Conditional expectation","The best prediction of one variable given another, in mean-squared error. Regression estimates it directly."],
  ["Law of total variance","Splits variance into the average within-group variance plus the variance of group means. It explains bias–variance style decompositions."],
  ["Entropy & expectation of log","Entropy is the expected negative log-probability. It links probability to information theory and to cross-entropy loss."]]],
 ["Multivariate distributions","several variables together",[
  ["Joint, marginal & conditional","The full distribution, the distribution of a subset, and the distribution given observed values. Inference consists of moving between these."],
  ["Multivariate Gaussian","A joint bell curve defined by a mean vector and covariance matrix. Its marginals and conditionals are again Gaussian, which makes Kalman filters and Gaussian processes work."],
  ["Covariance & precision matrices","The covariance matrix and its inverse. Zeros in the precision matrix encode conditional independence in a Gaussian graphical model."],
  ["Copulas","A way to separate marginal distributions from their dependence structure. Used to model dependence in finance and risk."],
  ["Dirichlet & multinomial","Distributions for categorical counts and probability vectors. They underlie topic models and softmax outputs viewed probabilistically."],
  ["Sampling from distributions","Methods like inverse transform and rejection sampling to generate random draws. They are the basis of simulation and generative modeling."]]],
 ["Limit theorems & inequalities","why averages behave",[
  ["Law of large numbers","Sample averages converge to the true mean as data grows. It justifies estimating expectations from samples."],
  ["Central limit theorem","Properly scaled sums tend to a Gaussian regardless of the original distribution. It justifies confidence intervals and many approximations."],
  ["Markov & Chebyshev inequalities","Simple bounds on how likely a variable is to be far from its mean. They are the starting point for concentration results."],
  ["Chernoff & Hoeffding bounds","Exponentially small bounds on deviations of averages. They give the sample-size guarantees of learning theory."],
  ["Convergence modes","Almost sure, in probability and in distribution convergence. They define exactly what ‘the estimate converges’ means."],
  ["Concentration of measure","In high dimension, smooth functions of many independent variables are nearly constant. It explains surprising high-dimensional geometry, like distances between random points becoming similar."]]]
 ]},

{ref:"B2",band:"B",name:"Statistics & Inference",sum:"Drawing reliable conclusions from limited, noisy data.",deps:["B1","A3"],
 overview:"Statistics connects data to models. This region covers estimation, uncertainty quantification, hypothesis testing, linear and generalized models, the Bayesian alternative, and experimental design, with attention to when results can be trusted.",
 why:"A model's number means little without an error bar or a comparison. Good statistical habits prevent false discoveries, mis-specified models and misleading evaluations, and Bayesian methods are the principled language for uncertainty in ML.",
 subs:[
 ["Estimation","finding parameters from data",[
  ["Estimators, bias & variance","An estimator is a rule mapping data to a parameter guess. Its bias and variance combine into the error that tradeoffs like regularization manage."],
  ["Maximum likelihood","Choosing parameters that make the observed data most probable. Most training losses, such as cross-entropy and squared error, are maximum likelihood in disguise."],
  ["Method of moments","Matching sample and model moments. A simple, sometimes suboptimal alternative that gives initial values or closed forms."],
  ["Fisher information & Cramér–Rao","Fisher information measures how much data say about a parameter, and the Cramér–Rao bound limits any unbiased estimator's variance. It also defines the natural gradient."],
  ["Sufficiency & consistency","A sufficient statistic keeps all information about a parameter, and a consistent estimator converges to the truth. They define what can be reduced without loss."],
  ["Shrinkage & James–Stein","Biasing estimates toward a central value can lower total error. It is the statistical root of regularization."],
  ["Robust estimation","Estimators resistant to outliers, such as the median or Huber loss. They keep fits stable when the data contain errors."]]],
 ["Uncertainty & intervals","how sure are we",[
  ["Sampling distributions","The distribution of an estimate across repeated samples. It is the basis of standard errors and confidence intervals."],
  ["Confidence intervals","A procedure producing ranges that cover the true value a stated fraction of the time. They are often misread as probability statements about one interval."],
  ["Bootstrap","Resampling the data to approximate the sampling distribution. It gives uncertainty for complicated statistics without formulas."],
  ["Prediction vs. confidence intervals","One concerns the parameter, the other a future observation. Prediction intervals are wider and matter for decisions."],
  ["Delta method","Approximating the variance of a function of an estimate with its derivative. A fast way to get standard errors for derived quantities."],
  ["Conformal prediction","A distribution-free method to build prediction sets with guaranteed coverage. A practical way to wrap any model with calibrated uncertainty."]]],
 ["Hypothesis testing","deciding between claims",[
  ["Null & alternative hypotheses","The default claim and the claim of interest. The framework controls how often you wrongly reject the default."],
  ["P-values","The probability of seeing data at least as extreme as observed if the null were true. They do not give the probability the null is true."],
  ["Type I & II errors, power","False positives, false negatives and the chance to detect a true effect. Power analysis chooses sample sizes before an experiment."],
  ["t-tests, chi-square & ANOVA","Standard tests for comparing means, counts and groups. They remain the baseline for comparing model results with proper uncertainty."],
  ["Multiple comparisons","Testing many hypotheses inflates false positives. Corrections like Bonferroni and false discovery rate control that when comparing many models or features."],
  ["Permutation tests","Testing by shuffling labels to build a null distribution. Needs few assumptions and suits comparing classifiers."],
  ["Likelihood ratio, Wald & score tests","Three related ways to test parameters from a likelihood. They connect testing to the geometry of the log-likelihood."]]],
 ["Regression & linear models","relating variables",[
  ["Ordinary least squares","Fitting a linear model by minimizing squared errors. Its geometry as a projection gives clear results about fit and variance."],
  ["Gauss–Markov theorem","Under simple assumptions, least squares is the best linear unbiased estimator. It says when OLS is optimal and by what standard."],
  ["Regularized regression","Ridge and lasso add penalties on coefficient size, trading bias for lower variance. They are the standard defense against overfitting."],
  ["Generalized linear models","Extending regression to non-Gaussian outcomes through a link function. Logistic and Poisson regression are examples."],
  ["Diagnostics & multicollinearity","Checking residuals, leverage and correlated predictors. They reveal when coefficients are unstable or the model is wrong."],
  ["Model selection (AIC, BIC, cross-validation)","Criteria balancing fit and complexity. They guard against choosing a model that only memorizes the sample."],
  ["Mixed & hierarchical models","Models with group-level effects, sharing strength across groups. They handle repeated measures and nested data."]]],
 ["Bayesian inference","probability as belief",[
  ["Priors, likelihood & posterior","The prior encodes beliefs before data, the likelihood links parameters to data and the posterior combines them. Regularization is a prior in disguise."],
  ["Conjugate priors","Priors that keep the posterior in the same family, giving closed-form updates. Beta–binomial and Gaussian–Gaussian are standard cases."],
  ["Credible intervals","Ranges holding a stated posterior probability. They directly state what many people want confidence intervals to say."],
  ["Posterior predictive","The distribution of new data averaged over parameter uncertainty. It is the right object for prediction under uncertainty."],
  ["Empirical Bayes","Estimating prior parameters from the data itself. A practical bridge between frequentist and Bayesian methods."],
  ["Bayesian model comparison","Weighing models by their marginal likelihood. It automatically penalizes unneeded complexity."]]],
 ["Experiments & causality","from data to decisions",[
  ["Randomized experiments & A/B tests","Randomly assigning treatments to measure causal effects. The gold standard for comparing system changes."],
  ["Sampling design","How data are collected determines what can be concluded. Biased sampling breaks otherwise sound methods."],
  ["Confounding & causal graphs","A hidden factor affecting both cause and outcome. Diagrams of causal structure show which variables to adjust for."],
  ["Propensity scores & matching","Adjusting observational comparisons to resemble randomized ones. Used when experiments are impossible."],
  ["Sequential testing & bandits","Updating decisions as data arrive without inflating errors. They allow stopping early and balancing exploration."]]]
 ]},

{ref:"B3",band:"B",name:"Differential Equations & Dynamical Systems",sum:"Describing how quantities change over time and space.",deps:["A2","A3"],
 overview:"Differential equations express laws of change. This region covers ordinary equations and their solution methods, linear systems and stability, nonlinear behavior such as bifurcations and chaos, partial differential equations for fields, and the discrete-time maps used in iterative algorithms.",
 why:"Physical, biological and economic processes are modeled this way, and so are many learning methods: gradient descent can be viewed as a flow, neural ODEs make networks continuous, and diffusion models rely on stochastic differential equations.",
 subs:[
 ["Ordinary differential equations","change in one variable",[
  ["First-order equations","Equations relating a quantity to its rate of change. Exponential growth and decay and logistic growth are the standard models."],
  ["Separable & linear methods","Techniques that reduce an equation to integrals or use integrating factors. They give closed-form solutions to the simplest models."],
  ["Higher-order & constant-coefficient equations","Second-order systems like oscillators with characteristic polynomials. They describe vibration, circuits and damping."],
  ["Existence & uniqueness","Conditions guaranteeing a solution and only one. Lipschitz dynamics ensure a trajectory is well defined, including for neural ODEs."],
  ["Initial & boundary value problems","Specifying conditions at one time or at two ends. They determine how a problem is posed and solved numerically."],
  ["Laplace transform","Turns differential equations into algebraic ones. A staple of control engineering and circuit analysis."]]],
 ["Linear systems & stability","behavior near equilibrium",[
  ["Linear systems x' = Ax","Systems whose rate of change is a matrix times the state. Solved with the matrix exponential and eigenvalues."],
  ["Matrix exponential","The generalization of the scalar exponential to matrices. It gives exact solutions of linear systems and underlies state-space models."],
  ["Equilibria & phase portraits","Rest points and the trajectories around them. They summarize qualitative behavior without solving the equations."],
  ["Stability & Lyapunov functions","An energy-like function that decreases along trajectories proves stability. It certifies convergence of gradient flows and control laws."],
  ["Eigenvalue criteria","Negative real parts of eigenvalues indicate stable linear systems. A stability check that appears in recurrent network analysis."],
  ["Stiff systems","Systems with widely different time scales that force tiny steps in simple solvers. They need implicit methods."]]],
 ["Nonlinear dynamics","richer behavior",[
  ["Linearization","Approximating a nonlinear system near an equilibrium by its Jacobian. It predicts local stability."],
  ["Bifurcations","Qualitative changes in behavior as a parameter varies. They explain sudden transitions like onset of oscillation or training instability."],
  ["Limit cycles","Isolated closed orbits that systems settle into. They model sustained oscillations such as heartbeats and circuits."],
  ["Chaos & Lyapunov exponents","Sensitive dependence on initial conditions, measured by exponents. It limits long-term prediction in weather and some learned dynamics."],
  ["Gradient flows","Continuous-time versions of gradient descent following the steepest descent path. A bridge between optimization and dynamics."],
  ["Hamiltonian & conservative systems","Systems that conserve energy and phase-space volume. They underlie Hamiltonian Monte Carlo and physics-informed models."]]],
 ["Partial differential equations","fields in space and time",[
  ["Heat, wave & Laplace equations","The canonical PDEs for diffusion, propagation and steady states. Each gives a template for a class of behavior."],
  ["Boundary & initial conditions","Constraints that select a physical solution. Mis-specified conditions make a problem ill-posed."],
  ["Separation of variables & Fourier methods","Solving PDEs by expanding in eigenfunctions or sine waves. It links PDEs to Fourier analysis."],
  ["Well-posedness","A solution exists, is unique and depends continuously on data. Ill-posed inverse problems need regularization."],
  ["Finite difference & finite element methods","Discretizing space to solve PDEs on computers. Core methods of simulation and engineering."],
  ["Physics-informed neural networks","Networks trained to satisfy a PDE residual as well as data. A way to combine physical laws with learning."],
  ["Reaction–diffusion & transport","Models of spreading and interacting quantities. They describe pattern formation, epidemics and fluid mixing."]]],
 ["Discrete & stochastic dynamics","iteration and noise",[
  ["Difference equations & iterated maps","Updates from one step to the next. Every iterative algorithm is a discrete dynamical system."],
  ["Fixed points & contraction mapping","A point the map leaves unchanged, with convergence guaranteed if the map shrinks distances. It underlies value iteration and many convergence proofs."],
  ["Stochastic differential equations","Differential equations driven by random noise. They model diffusion models, Langevin sampling and noisy dynamics."],
  ["Brownian motion","The continuous random walk. The basic noise source for stochastic dynamics and finance models."],
  ["Fokker–Planck equation","A PDE for how the probability density of an SDE evolves. It connects stochastic paths to the distributions they produce."],
  ["Neural ODEs","Networks defined by a learned differential equation integrated over time. They give memory-efficient and continuous-depth models."]]]
 ]}
);
