/* Band B — Symbolic Lowlands. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"B1",band:"B",name:"Search & Problem Solving",sum:"Treating a problem as a space of states and finding a path or an assignment through it.",deps:["A2"],
 overview:"Classical AI frames many problems as search: a set of states, actions that move between them, and a goal. Uninformed and heuristic search find paths, local and evolutionary search improve candidate solutions when the path does not matter, constraint solvers find assignments that satisfy rules, and adversarial search handles opponents. These methods are exact where they can be and heuristic where they must be.",
 why:"Search is the engine inside route planners, game players, schedulers, SAT and SMT solvers, and the test-time reasoning loops of newer systems. It is also the clearest case of the bitter lesson: more computation makes it better.",
 subs:[
 ["Uninformed search","no guidance",[
  ["Breadth-first search","Expands all states at depth d before depth d+1. It finds the shortest path in an unweighted graph but needs memory proportional to the whole frontier, which grows exponentially."],
  ["Depth-first search","Follows one branch as deep as possible before backing up. It uses little memory, but it can wander forever in deep or infinite spaces and does not guarantee a shortest path."],
  ["Uniform-cost search","Always expands the cheapest-so-far node, so it finds the lowest-cost path when action costs vary. It is Dijkstra's algorithm viewed as search."],
  ["Iterative deepening","Runs depth-limited depth-first search with an increasing limit. It combines breadth-first's completeness with depth-first's small memory, and is standard when the answer depth is unknown."]
 ]],
 ["Informed search","with heuristics",[
  ["A*","Expands the node with the lowest cost-so-far plus estimated cost-to-go. With an admissible heuristic it returns an optimal path, and it is the default algorithm for route finding and game pathfinding."],
  ["Admissible & consistent heuristics","A heuristic is admissible if it never overestimates the true remaining cost, and consistent if it also obeys a triangle inequality. These properties are what guarantee A* optimality and let it avoid re-expanding nodes."],
  ["IDA*","Iterative-deepening A*: repeated depth-first searches bounded by an increasing f-cost. It keeps A*'s optimality while using memory linear in the path length, which matters for puzzles with huge state spaces."],
  ["Weighted A*","Inflates the heuristic by a factor to search faster at the price of a bounded suboptimality. It is used when a good-enough plan quickly beats a perfect plan late."],
  ["Pattern databases","Precomputed lookup tables of exact costs for abstracted versions of a problem, used as strong admissible heuristics. They made optimal solving of puzzles like the 15-puzzle and Rubik's cube practical."]
 ]],
 ["Local & global optimization","when the path doesn't matter",[
  ["Hill climbing","Repeatedly move to the best neighboring solution until none is better. It is fast and simple but gets stuck in local optima, so it is usually combined with random restarts."],
  ["Simulated annealing","Hill climbing that sometimes accepts worse moves, with the probability falling over time like a cooling metal. It can escape local optima and is used in layout, scheduling and design problems."],
  ["Tabu search","Local search that remembers recently visited solutions and forbids returning to them. The memory pushes the search out of cycles and shallow local optima."],
  ["Genetic algorithms","Maintain a population of candidate solutions and improve it through selection, crossover and mutation. They suit problems with no gradient or a rough search landscape, such as design and scheduling."],
  ["Evolution strategies","Population-based optimizers that perturb real-valued parameters and move toward the better samples. They have been used as a scalable alternative to gradient methods for tuning neural policies."],
  ["Swarm intelligence","Optimization inspired by collective behavior, such as particle swarm optimization and ant colony optimization. Many simple agents share information to find good solutions, notably for routing."],
  ["Neuroevolution","Evolving the weights or structure of neural networks rather than training them with gradients. It is useful where reward is sparse or non-differentiable, and was an early route to discovering architectures."]
 ]],
 ["Constraint satisfaction","variables, domains, constraints",[
  ["CSP formulation","Casting a problem as variables, their possible values and constraints between them (a Sudoku grid, a timetable). Once stated this way, general-purpose solvers can be applied without custom code."],
  ["Backtracking search","Assign variables one at a time and retreat when a constraint is violated. Combined with variable-ordering heuristics it is the basic algorithm of constraint solving."],
  ["Constraint propagation","Using constraints to prune impossible values from variable domains before and during search, with arc consistency as the standard form. It can shrink the search space dramatically."],
  ["SAT solvers","Programs that decide whether a Boolean formula can be made true. Modern conflict-driven clause learning (CDCL) solvers handle millions of variables and are used for hardware verification, planning and cryptanalysis."],
  ["SMT solvers","Satisfiability modulo theories extends SAT with arithmetic, arrays and other theories. They are the workhorse of program verification, symbolic execution and automated reasoning about code."],
  ["Integer programming","Optimizing a linear objective where some variables must be whole numbers. Mixed-integer solvers handle scheduling, assignment and logistics at industrial scale."]
 ]],
 ["Adversarial search","games against opponents",[
  ["Alpha–beta pruning","An optimization of minimax that skips branches that cannot affect the final decision. With good move ordering it roughly doubles the searchable depth, which powered chess engines."],
  ["Monte Carlo tree search","Builds a game tree by repeatedly simulating random playouts and focusing effort on promising moves. It transformed Go programs and is the search used with learned networks in AlphaGo and AlphaZero."],
  ["Opening books & endgame tables","Precomputed knowledge for the start and end of games: stored best opening lines, and exhaustively solved endgame positions. They show how lookup complements search."],
  ["Imperfect-information games","Games like poker where players hide information. Counterfactual regret minimization (CFR) approaches equilibrium play, and it underlies superhuman poker systems."],
  ["Game-playing milestones","Deep Blue beat the chess champion in 1997, AlphaGo beat a top Go player in 2016, and later systems mastered poker and StarCraft. Each combined search with the best available evaluation, handcrafted or learned."]
 ]]
]},
{ref:"B2",band:"B",name:"Knowledge & Reasoning",sum:"Representing what is known so a system can draw conclusions from it.",deps:["A2"],
 overview:"A knowledge-based system keeps an explicit model of the world and reasons over it. The field covers how to write knowledge down (ontologies, graphs, frames), how to infer from it (chaining, theorem proving, logic programming), how to handle uncertainty (Bayesian and temporal models), what expert systems taught us, and how to check that a reasoning system is correct.",
 why:"Explicit knowledge is auditable and exact, which learned models are not. Knowledge graphs, rule engines, verifiers and proof assistants remain essential wherever a conclusion must be explained or guaranteed, and they are increasingly paired with language models.",
 subs:[
 ["Representation","ways to write knowledge down",[
  ["Semantic networks","Graphs whose nodes are concepts and whose edges are relations such as is-a and part-of. They were an early, intuitive representation and the ancestor of modern knowledge graphs."],
  ["Frames & scripts","Structured templates with slots and default values for typical objects or situations, like a restaurant visit. They organize common-sense expectations, and live on in object-oriented modeling."],
  ["Ontologies","Formal, shared vocabularies that define the classes of things in a domain and the relations among them. They let separate data sources agree on meaning, and are used in medicine, defense and enterprise data integration."],
  ["Knowledge graphs","Large networks of entities and typed relationships, stored as triples such as (Lisbon, capital-of, Portugal). They power search panels and recommendation, and increasingly ground language models in verified facts."],
  ["RDF & OWL","W3C standards: RDF stores facts as subject–predicate–object triples, and OWL adds a description-logic vocabulary for classes and constraints. Together they underpin semantic-web data and reasoners."],
  ["Taxonomies","Hierarchies of categories, usually by is-a relations. They are simpler than ontologies and are used for classification, tagging and navigation."]
 ]],
 ["Inference","deriving new facts",[
  ["Forward chaining","Start from known facts and apply rules to derive everything that follows. It suits monitoring and production systems that react as new data arrives."],
  ["Backward chaining","Start from a goal and work backward to find rules and facts that support it. It is goal-directed and efficient for diagnosis-style questions, and is how Prolog answers queries."],
  ["Theorem proving","Mechanically searching for a proof that a statement follows from axioms. Automated provers handle well-defined domains, and they are the engine behind hardware and software verification."],
  ["Rule engines","Software that matches facts against if–then rules and fires those that apply (Drools, CLIPS). They keep business logic explicit and auditable."],
  ["Datalog","A restricted logic-programming language of rules over facts, evaluated bottom-up. It is guaranteed to terminate and is used for program analysis, graph queries and knowledge-graph reasoning."],
  ["Logic programming","Programs written as logical facts and rules, run by search and unification, as in Prolog. It expresses search and symbolic reasoning tasks concisely."],
  ["Answer set programming","A declarative paradigm for hard combinatorial problems, where you describe the constraints and a solver returns stable models. It is used in planning, configuration and scheduling."]
 ]],
 ["Probabilistic reasoning","uncertain knowledge",[
  ["Bayesian networks","Directed graphs where nodes are variables and edges are probabilistic dependencies. They compute updated beliefs given evidence, and are used for diagnosis, risk and decision support."],
  ["Markov random fields","Undirected graphical models in which variables interact through local potentials. They suit symmetric dependencies such as pixels in an image or spatial data."],
  ["Hidden Markov models","Models of a sequence driven by an unobserved state that evolves as a Markov chain. They were the standard tool in speech recognition, tagging and tracking before neural sequence models."],
  ["Kalman filters","Recursive estimators that fuse noisy measurements with a motion model to track a state, optimal for linear systems with Gaussian noise. They run in navigation, radar tracking and robotics."],
  ["Particle filters","Represent a belief about a state with many weighted samples, so they track nonlinear, non-Gaussian systems. They are used in robot localization and target tracking."],
  ["Probabilistic programming","Languages (Stan, PyMC, Pyro) where you write a generative model as code and the system performs inference. They make Bayesian modeling accessible without hand-deriving algorithms."],
  ["Markov logic networks","Combine first-order logic with probabilistic weights, so rules can be soft rather than absolute. They were an influential attempt to join symbolic structure with uncertainty."]
 ]],
 ["Expert systems","encoded human expertise",[
  ["Rule-based expert systems","Programs that encode a specialist's knowledge as if–then rules and apply them to reach advice. Examples such as MYCIN matched physicians in narrow tasks."],
  ["Knowledge engineering","The craft of interviewing experts and turning their know-how into formal rules. It proved slow and expensive, the so-called knowledge acquisition bottleneck that pushed the field toward learning from data."],
  ["Case-based reasoning","Solving a new problem by retrieving and adapting the solution to a similar past case. It is used in help desks and legal and medical analogy, and relates to nearest-neighbor methods."],
  ["Truth maintenance","Mechanisms that record why each belief is held so that conclusions can be withdrawn when their supports change. It keeps large rule bases consistent."],
  ["Explanation facilities","The ability to show which rules and facts led to a conclusion. It was a selling point of expert systems and remains a template for what explainable AI should offer."]
 ]],
 ["Commonsense & verification","reasoning that must be right",[
  ["Commonsense knowledge bases","Hand-built or crowdsourced collections of everyday facts, such as Cyc and ConceptNet. They attempt to give systems the background knowledge people take for granted."],
  ["Formal verification","Proving mathematically that a system meets its specification for all inputs, not just those tested. It is applied to chips, operating-system kernels and safety-critical software."],
  ["Model checking","Exhaustively exploring a system's reachable states to check a temporal-logic property, and producing a counterexample trace if it fails. It is used for protocols and hardware."],
  ["Interactive theorem provers","Tools such as Lean and Coq in which a human and machine build machine-checked proofs together. They are now a target for AI, where a model proposes steps and the checker guarantees correctness."],
  ["Neuro-symbolic reasoning","Hybrids that combine neural networks for perception or proposal with symbolic components for logic, search or checking. They aim to get learning's flexibility and symbolic reasoning's reliability."],
  ["Program synthesis","Automatically generating a program from a specification or examples. Classical approaches search a space of programs; modern ones have language models propose code and tests or verifiers filter it."]
 ]]
]},
{ref:"B3",band:"B",name:"Planning & Decision-Making",sum:"Choosing sequences of actions to reach goals, with or without uncertainty.",deps:["B1","A2"],
 overview:"Planning asks which sequence of actions will turn the current situation into a desired one. Classical planning assumes a known, deterministic world and uses search; structured planning adds hierarchy, time and resources; decision-making under uncertainty uses Markov decision processes and their relatives; and operations research supplies the optimization machinery for routing and scheduling at scale.",
 why:"Any system that acts must plan, whether it is a robot, a logistics network or an LLM agent decomposing a task. Reinforcement learning and agent frameworks are largely new ways to attack the problems defined here.",
 subs:[
 ["Classical planning","deterministic worlds",[
  ["STRIPS","The 1971 planning formalism in which each action has preconditions and add/delete effects on a set of facts. It is the template for how most planning problems are still represented."],
  ["PDDL","The Planning Domain Definition Language, a standard syntax for describing a domain's actions and a problem's initial state and goal. It lets planners be compared on shared benchmarks."],
  ["Planning graphs","A layered structure of which facts and actions are reachable at each step, used by Graphplan and as a source of heuristics. It exposes conflicts early and prunes the search."],
  ["Heuristic planners","Planners such as FF and Fast Downward that search the state space guided by domain-independent heuristics from a relaxed version of the problem. They dominate modern planning competitions."],
  ["State-space vs. plan-space","State-space planners search over world states; plan-space planners search over partial plans and refine them. The first scales better in practice and is far more common today."]
 ]],
 ["Structured planning","scale and abstraction",[
  ["Hierarchical task networks","Plans built by decomposing high-level tasks into subtasks using domain-specific methods, much as people plan. They scale well and embed expert knowledge in the plan structure."],
  ["Temporal planning & scheduling","Planning with action durations, deadlines and concurrent actions, often with limited resources. It is the core of mission planning, manufacturing and spacecraft operations."],
  ["Task & motion planning","Combining high-level symbolic task choices with geometric motion planning that checks they are physically feasible. It is how a robot decides to open a drawer and also finds the arm path to do it."],
  ["Plan repair & replanning","Adjusting a plan when execution diverges from expectation, rather than starting over. It matters because real environments change and actions fail."],
  ["Multi-agent planning","Coordinating plans among several agents who may cooperate or compete. It covers fleet routing, team tasking and robot swarms, and brings in communication and conflict resolution."]
 ]],
 ["Decisions under uncertainty","probabilistic worlds",[
  ["Markov decision processes","A model of sequential decision-making with states, actions, stochastic transitions and rewards. It is the standard formal setting for reinforcement learning and probabilistic planning."],
  ["POMDPs","Partially observable MDPs, where the agent sees only noisy observations and must maintain a belief over the true state. They are the realistic model for robots and dialogue, but are very hard to solve exactly."],
  ["Value & policy iteration","Dynamic-programming algorithms that compute optimal values or policies for a known MDP by repeated updates. They are the exact baselines that learning methods approximate."],
  ["Influence diagrams","Bayesian networks extended with decision and utility nodes, giving a graphical way to pick actions that maximize expected utility. They are used in decision analysis and risk assessment."],
  ["Multi-criteria decision analysis","Methods for choosing among options that trade off several objectives, using weights, outranking or Pareto fronts. They support procurement, siting and course-of-action analysis."],
  ["Robust decision-making","Choosing actions that perform acceptably across many plausible scenarios rather than the single most likely one. It is used when the model itself is uncertain, as in defense and climate planning."]
 ]],
 ["Routing & operations","applied optimization",[
  ["Shortest-path algorithms","Dijkstra's algorithm and its relatives find least-cost routes through weighted graphs. They run inside every navigation system and are the base case that A* accelerates."],
  ["Vehicle routing","Assigning stops to vehicles and ordering them to minimize cost under capacity and time-window constraints. It is NP-hard and solved in practice with heuristics and metaheuristics."],
  ["Constraint programming","Modeling a combinatorial problem with rich constraints and letting a solver propagate and search. It excels at scheduling and timetabling with many interacting rules."],
  ["Mixed-integer programming","Linear optimization with some whole-number variables, solved by branch-and-bound with strong commercial solvers. It is the standard tool for production planning and logistics."],
  ["Simulation & digital twins","Executable models of a real system used to test plans and policies before applying them. They provide the environment for training and evaluating planners and learning agents."]
 ]]
]}
);
