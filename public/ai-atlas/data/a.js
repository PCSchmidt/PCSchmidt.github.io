/* Band A — Foundations. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"A1",band:"A",name:"History & Philosophy",sum:"What counts as intelligence, and how the field got to where it is.",deps:[],
 overview:"Artificial intelligence began as a 1950s proposal that thinking could be described precisely enough for a machine to simulate it. The field has since moved through symbolic reasoning, expert systems, statistical learning and deep learning, each wave reacting to the limits of the last. Alongside the engineering sits a long philosophical argument about whether a program can understand, what intelligence even is, and how it should be measured.",
 why:"Most current debates (do language models understand, is scale enough, what is AGI) are rerun versions of older ones. Knowing the history lets you tell a new problem from an old one wearing new vocabulary.",
 subs:[
 ["Origins","the founding ideas",[
  ["Turing test","Alan Turing's 1950 proposal to replace the question “can machines think?” with a behavioral test: can a judge, conversing by text, tell the machine from a person? It framed AI as an observable-performance problem and is still the reference point for debates about chatbots."],
  ["Dartmouth workshop","The 1956 summer workshop, organized by John McCarthy, Marvin Minsky, Nathaniel Rochester and Claude Shannon, that named the field “artificial intelligence” and set its founding conjecture: every aspect of learning or intelligence can in principle be described precisely enough to simulate."],
  ["Cybernetics","Norbert Wiener's 1940s study of control and communication through feedback in animals and machines. It supplied AI with the idea of goal-seeking systems that correct themselves from error, which returns today in control theory and reinforcement learning."],
  ["Logic Theorist & GPS","Early programs by Newell, Simon and Shaw. Logic Theorist (1956) proved theorems from Principia Mathematica; the General Problem Solver (1957) separated a general search procedure from problem-specific knowledge using means–ends analysis. They set the pattern of AI as symbolic search."],
  ["Perceptron","Frank Rosenblatt's 1958 trainable single-layer classifier, the first neural network that learned its weights from examples. Minsky and Papert's 1969 analysis showed a single layer could not represent functions like XOR, which cooled neural research for years."],
  ["Church–Turing thesis","The claim that anything effectively computable can be computed by a Turing machine. It underlies AI's assumption that mental processes, if they can be described as procedures at all, can run on an ordinary digital computer."]
 ]],
 ["Cycles of the field","booms, winters and shifts",[
  ["Symbolic era","The 1950s to 1980s approach, sometimes called good old-fashioned AI, in which intelligence is explicit symbols and rules manipulated by search and logic. It produced theorem provers, planners and expert systems, and struggled with perception and common sense."],
  ["AI winters","Periods of collapsed funding and enthusiasm after inflated promises: the first in the mid-1970s after critical reviews such as the Lighthill report, the second in the late 1980s and early 1990s when expert systems and Lisp-machine markets fell apart. They explain the field's wariness about hype."],
  ["Expert system boom","The 1980s commercial wave built on hand-coded if–then rules from human specialists, such as MYCIN for diagnosis and XCON for configuring computers. They worked in narrow domains but were costly to build and brittle outside them."],
  ["Statistical turn","The 1990s shift from hand-written rules to probabilistic models learned from data: hidden Markov models, Bayesian networks, support vector machines. It made speech recognition and translation practical and made empirical benchmarks the field's currency."],
  ["Deep learning revolution","The post-2012 era, marked by AlexNet winning ImageNet, in which large neural networks trained on GPUs overtook hand-engineered features in vision, speech and then language. It turned data and compute into the main drivers of progress."],
  ["Foundation-model era","The period starting around 2018 to 2020 in which one very large pretrained model (BERT, GPT-3, later ChatGPT and its successors) is adapted to many tasks through prompting or fine-tuning, replacing a separate model per task."],
  ["Bitter lesson","Rich Sutton's 2019 essay arguing that across 70 years, general methods that scale with computation (search and learning) beat approaches that build in human knowledge. It is the field's most-cited argument for scale, and its limits are still debated."]
 ]],
 ["Philosophy of mind","can machines think",[
  ["Chinese room","John Searle's 1980 thought experiment: a person who follows rules to manipulate Chinese symbols can produce correct answers without understanding Chinese. He argued symbol manipulation alone is not understanding, a point routinely raised about language models."],
  ["Functionalism","The view that a mental state is defined by what it does (its causal role), not what it is made of. It is the philosophical license for AI: if the right functional organization can be implemented in silicon, it counts as the same kind of mind."],
  ["Symbol grounding problem","Stevan Harnad's 1990 question of how symbols in a system acquire meaning beyond their relations to other symbols. It motivates grounding language in perception and action, and is a standard objection to text-only models."],
  ["Frame problem","The difficulty, noted by McCarthy and Hayes in 1969, of specifying what stays unchanged when an action occurs without listing every irrelevant fact. It exposed how hard common-sense reasoning is for logic-based systems."],
  ["Moravec's paradox","The observation that tasks hard for humans (chess, algebra) are easy for computers while tasks any toddler manages (walking, grasping, recognizing faces) are very hard. It explains why robotics and perception lagged symbolic reasoning."],
  ["Embodied cognition","The thesis that intelligence depends on having a body acting in an environment, not just on abstract computation. It underlies work in robotics and sensorimotor learning and is a counterweight to purely disembodied models."]
 ]],
 ["Defining intelligence","how to measure it",[
  ["Narrow vs. general AI","Narrow AI performs one task or a bounded set (translation, chess, fraud scoring); general AI would handle an open-ended range of tasks with transfer between them. Real systems sit on a spectrum, and where the line falls is contested."],
  ["AGI","Artificial general intelligence: a system matching or exceeding human capability across most cognitively demanding tasks. There is no agreed definition or test, so claims about it depend heavily on which tasks and which humans are used as the standard."],
  ["Intelligence as optimization","The view, common in AI and decision theory, that an intelligent agent is one that effectively steers the world toward its goals across many environments. It makes intelligence measurable but separates it from what the goals are, which is the root of alignment concerns."],
  ["ARC-style abstraction tests","Benchmarks such as François Chollet's ARC, which give a few examples of a visual pattern and ask the solver to infer the rule on a new case. They aim to test fluid, skill-acquisition ability rather than memorized knowledge."]
 ]]
]},
{ref:"A2",band:"A",name:"Logic, Math & Computation",sum:"The formal tools used to state and solve AI problems.",deps:[],
 overview:"AI problems are stated in a handful of formal languages. Logic expresses facts and valid inference, probability and statistics express uncertainty, linear algebra and calculus underpin learning and optimization, computational complexity tells you what can be solved in practice, and game and decision theory formalize choosing among actions and interacting with other agents.",
 why:"These formalisms decide what an AI system can guarantee. Whether a problem is decidable, tractable, convex, or has an equilibrium determines whether you can solve it exactly, approximately, or not at all.",
 subs:[
 ["Logic","precise reasoning",[
  ["Propositional logic","A logic of true/false statements joined by AND, OR, NOT and IMPLIES. It is the basis of SAT solving and of circuit and constraint reasoning; its limitation is that it cannot talk about objects or relations."],
  ["First-order logic","Adds objects, predicates and the quantifiers “for all” and “there exists”, so you can say things like every bird that is not a penguin flies. It is the standard language for knowledge representation and automated theorem proving."],
  ["Modal & temporal logic","Extensions that reason about necessity, knowledge, belief or time (always, eventually, until). They are used to specify agent beliefs and to state properties of systems for verification."],
  ["Description logics","A family of decidable fragments of first-order logic designed for describing concepts and their relations. They are the formal basis of OWL ontologies and of reasoners that classify concepts automatically."],
  ["Non-monotonic reasoning","Reasoning in which adding information can retract earlier conclusions (the bird flies, until you learn it is a penguin). It captures defaults and common sense, which classical logic cannot."],
  ["Fuzzy logic","A logic with degrees of truth between 0 and 1, so “warm” can be partly true. It was widely used in control systems and still appears where vague human categories must drive decisions."],
  ["Resolution & unification","Resolution is a single inference rule that refutes a set of clauses to prove a goal; unification finds substitutions that make two logical terms identical. Together they power Prolog and many theorem provers."]
 ]],
 ["Probability & statistics","uncertainty in numbers",[
  ["Bayes' theorem","The rule for updating a belief given evidence: posterior is proportional to likelihood times prior. It is the core of probabilistic reasoning in AI, from spam filters to Bayesian networks."],
  ["Random variables","Quantities whose values are uncertain and described by a distribution. AI models treat inputs, hidden states and outcomes as random variables so they can reason about what they do not know."],
  ["Maximum likelihood","Choosing model parameters that make the observed data most probable. Most loss functions in machine learning, including cross-entropy and squared error, are maximum-likelihood objectives in disguise."],
  ["Markov chains","Processes where the next state depends only on the current one. They model language at the simplest level, underlie hidden Markov models and reinforcement learning, and drive sampling methods like MCMC."],
  ["Information theory","Shannon's framework for quantifying information with entropy, cross-entropy and mutual information. It supplies the loss functions and compression view used throughout modern AI, including language-model perplexity."]
 ]],
 ["Linear algebra & calculus","the numerical toolbox",[
  ["Vectors & matrices","Ordered lists of numbers and grids of numbers. Data points, embeddings and network weights are vectors and matrices, so almost all of modern AI is arithmetic on them."],
  ["SVD","Singular value decomposition factors a matrix into rotation, scaling and rotation. It gives low-rank approximations used in compression, recommenders and the idea behind low-rank fine-tuning."],
  ["Gradients & Jacobians","The gradient points in the direction a function increases fastest; the Jacobian collects all first derivatives of a vector function. Training a network means following the negative gradient of its loss."],
  ["Convexity","A function is convex if any chord lies above its graph, which guarantees that a local minimum is global. Classical methods (SVMs, logistic regression) are convex; deep networks are not, and train well anyway."],
  ["Automatic differentiation","Software that computes exact derivatives of any program by applying the chain rule mechanically. It is what lets frameworks train arbitrary architectures without anyone deriving gradients by hand."]
 ]],
 ["Computation & complexity","what is feasible",[
  ["Turing machines","The abstract model of a computer: a tape, a head and a rule table. It defines what computation means, and thus what any AI system can and cannot do in principle."],
  ["Computability & the halting problem","Some questions no algorithm can answer for all inputs, such as whether an arbitrary program halts. It sets hard limits on automatic verification and on perfectly general program analysis."],
  ["P vs. NP","P problems are solvable in polynomial time; NP problems have solutions that are quick to check. It is unknown whether they are equal, but planning, scheduling and constraint solving are NP-hard in general, which is why AI leans on heuristics."],
  ["NP-hardness","A problem is NP-hard if every problem in NP reduces to it, so no efficient exact algorithm is expected. Recognizing it tells you to switch to approximation, heuristics or special-case structure."],
  ["Approximation algorithms","Polynomial-time methods with a proven bound on how far their answer can be from optimal. They offer guarantees where exact solutions are out of reach, in routing and resource allocation for example."],
  ["Anytime algorithms","Algorithms that can be stopped at any moment and return the best answer found so far, improving with more time. They suit real-time AI where a decision is needed by a deadline."],
  ["Kolmogorov complexity","The length of the shortest program that produces a string. It formalizes simplicity and compression, and underlies Occam's-razor arguments for why simpler explanations generalize, though it is uncomputable."]
 ]],
 ["Game & decision theory","rational choice",[
  ["Utility theory","A way to express preferences as numbers so an agent can pick the action with highest expected utility. It is the standard definition of a rational agent and the source of reward functions in reinforcement learning."],
  ["Nash equilibrium","A set of strategies in which no player gains by changing only their own. It is the basic solution concept for multi-agent systems, though finding one is computationally hard and equilibria are not always unique."],
  ["Minimax","Choosing the move that minimizes the worst-case loss against an opponent who is also optimizing. It is the foundation of classical game-playing programs such as chess engines."],
  ["Mechanism design","Designing rules of a game so self-interested agents produce a desired outcome, as in auctions. It is applied in ad markets, resource allocation, and incentive design for multi-agent AI."],
  ["Bounded rationality","Herbert Simon's idea that real decision makers have limited information and computation, so they satisfice rather than optimize. It is the justification for heuristics and anytime methods in practical AI."]
 ]]
]},
{ref:"A3",band:"A",name:"Minds & Cognition",sum:"What biology and psychology suggest about building intelligent systems.",deps:[],
 overview:"Brains and minds are the only working examples of general intelligence, so AI keeps borrowing from them. Cognitive science offers models of memory, attention and reasoning; neuroscience offers neurons, learning rules and architectures; developmental work shows what children know before they are taught; and human factors studies how people actually work with automated systems.",
 why:"Many AI ideas (neural networks, attention, memory, curriculum learning) came from here, and many limits of current systems (common sense, sample efficiency, trust) are most clearly stated in these terms.",
 subs:[
 ["Cognitive science","models of thinking",[
  ["Working memory","The small, short-lived store where a person holds the information currently in use. It inspired the idea of a limited context or scratchpad in AI systems, and it is the human counterpart of an LLM's context window."],
  ["Attention","The selective focus of processing on relevant information while ignoring the rest. Psychology's version motivated attention mechanisms in neural networks, which learn which inputs to weight for each output."],
  ["Dual-process thinking","The model of a fast, automatic mode (System 1) and a slow, deliberate one (System 2). It is a common frame for describing pattern-matching models versus search and reasoning, including reasoning-trained language models."],
  ["Mental models","Internal simulations people use to predict how a situation will unfold. They are the human analogue of the world models that AI planners and model-based reinforcement learners build."],
  ["Cognitive architectures","Unified software theories of the mind, such as SOAR and ACT-R, that combine memory, perception and decision modules. They are early attempts at general agents and still inform agent design."],
  ["Theory of mind","The ability to attribute beliefs, desires and intentions to others and predict their behavior. It matters for negotiation, collaboration and deception in multi-agent AI, and is a frequent test of language models."],
  ["Analogy","Mapping the structure of a familiar situation onto a new one. Humans transfer knowledge this way with very little data, and it remains a hard target for AI systems."]
 ]],
 ["Neuroscience","inspiration from brains",[
  ["Neurons & synapses","Brain cells that integrate electrical inputs and pass signals across weighted connections. Artificial neurons are a drastic simplification of this: a weighted sum and a nonlinearity."],
  ["Hebbian learning","Donald Hebb's rule that connections strengthen when the cells on both sides fire together. It is the oldest biologically inspired learning rule and the ancestor of many unsupervised and associative-memory methods."],
  ["Visual cortex","The brain's layered system for vision, with simple edge detectors feeding progressively more complex ones. Hubel and Wiesel's findings directly inspired the convolutional neural network."],
  ["Hippocampus & memory","The brain region that rapidly stores episodes and replays them to the cortex for long-term consolidation. It inspired experience replay in reinforcement learning and complementary-learning-systems ideas for avoiding forgetting."],
  ["Predictive coding","A theory that the brain constantly predicts its inputs and learns from prediction errors. It is a biologically motivated alternative view of learning and a precursor to self-supervised prediction."],
  ["Spiking neural networks","Networks whose units communicate by discrete spikes over time rather than continuous values. They are more brain-like and energy-efficient on suitable hardware but harder to train."],
  ["Neuromorphic computing","Chips designed around neuron-like, event-driven computation (such as Intel's Loihi). They aim for very low power for sensing and edge tasks, and remain a niche compared with GPUs."]
 ]],
 ["Development & language","how minds acquire skills",[
  ["Language acquisition","How children learn language from limited, noisy input with no explicit grammar lessons. The comparison with models trained on trillions of words highlights how much more data-efficient human learning is."],
  ["Intuitive physics","Infants' early expectations that objects persist, fall and do not pass through each other. Tests built on these expectations show where video and language models still lack a grounded model of the world."],
  ["Common sense","The broad background knowledge about everyday objects, people and causes that humans take for granted. Its absence was a central failing of classical AI, and it remains hard to measure in modern models."],
  ["Innate priors","Built-in structure that lets learning succeed from little data. The debate over how much to build in versus learn is the nature-versus-nurture argument of AI, and architectures like convolutions are a type of prior."]
 ]],
 ["Human factors","people in the loop",[
  ["Trust in automation","How much people rely on an automated system relative to its true reliability. Over-trust leads to missed errors and under-trust wastes capability, so calibration matters as much as accuracy."],
  ["Situation awareness","An operator's perception of what is happening, understanding of what it means and projection of what comes next. Poorly designed automation erodes it, which is a central concern in aviation and military AI."],
  ["Cognitive load","The mental effort a task demands of a person. Good AI assistance reduces load; poor interfaces and unexplained outputs add to it."],
  ["Decision biases","Systematic errors in human judgment such as anchoring and confirmation bias. They affect both how people label training data and how they interpret AI recommendations."]
 ]]
]}
);
