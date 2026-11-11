/* Band D — Frontier. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"D1",band:"D",name:"Language & Foundation Models",sum:"Systems that read, write and reason in natural language, and the general-purpose models behind them.",deps:["C2","B2"],
 overview:"Language AI moved from hand-built grammars and statistical taggers to large pretrained models that can be steered with a prompt. This region covers the classical toolkit, how language models are pretrained, the post-training steps that turn a base model into an assistant, the systems built around models (retrieval, tools, structured output), multimodal extensions, and how these systems are evaluated.",
 why:"Language models are the interface layer of most current AI products and the reasoning engine inside agents. Knowing how they are built and where they fail (hallucination, contamination, brittle evaluation) is the core of using them responsibly.",
 subs:[
 ["Classical NLP","pre-neural toolkit",[
  ["Tokenization","Splitting text into units (words, subwords or characters) a model can process. Choices here affect vocabulary size, multilingual fairness and how well numbers and code are handled."],
  ["Part-of-speech tagging","Labeling each word as noun, verb and so on. It was a standard preprocessing step and a classic sequence-labeling task for hidden Markov models."],
  ["Parsing","Recovering the grammatical structure of a sentence as a tree or dependency graph. It supported translation and information extraction before end-to-end neural models."],
  ["Named entity recognition","Finding and typing names of people, places, organizations and dates in text. It remains the first step of many extraction pipelines, including intelligence analysis."],
  ["Machine translation","Automatically translating between languages, which moved from rules to statistical phrase models to neural sequence-to-sequence models and then to transformers."],
  ["Word embeddings","Word2Vec and GloVe represent each word as a vector learned from co-occurrence, so related words sit close together. They introduced the idea of dense learned representations for text."]
 ]],
 ["Language models","from n-grams to LLMs",[
  ["N-gram models","Predict the next word from counts of the previous n−1 words. They are the simplest language model and a baseline that shows why long-range context needs neural methods."],
  ["Masked language models","Models such as BERT trained to fill in hidden words using context on both sides. They produce strong text representations for classification and search."],
  ["Causal language models","Models such as GPT trained to predict the next token from those before it. Scaled up and instruction-tuned, this recipe produces today's chat assistants."],
  ["Encoder–decoder models","Architectures such as T5 in which an encoder reads the input and a decoder writes the output. They suit translation and summarization, where input and output are distinct."],
  ["Subword tokenizers","Methods such as byte-pair encoding and SentencePiece that build a vocabulary of frequent word pieces. They handle rare words without an unbounded vocabulary."],
  ["Long-context methods","Techniques such as position-encoding extensions, sparse or sliding attention and efficient caching that let models read very long inputs. Long context helps, but models still use the middle of a long input less reliably."]
 ]],
 ["Post-training","making a base model useful",[
  ["Supervised fine-tuning","Training a base model on curated examples of desired prompts and responses. It teaches format and basic helpfulness before preference-based tuning."],
  ["Instruction tuning","Fine-tuning on many tasks phrased as natural-language instructions. It is why a model can follow a request it never saw as a training task."],
  ["RLHF","Reinforcement learning from human feedback: people rank outputs, a reward model learns those preferences, and the language model is optimized against it. It aligned early assistants toward helpful, harmless replies."],
  ["DPO","Direct preference optimization trains on preference pairs directly with a simple loss, skipping the separate reward model and RL loop. It is simpler and more stable than classic RLHF."],
  ["Constitutional AI","Anthropic's method in which a model critiques and revises its own outputs against written principles, and AI-generated preferences supplement human ones. It reduces reliance on human labeling for harmlessness."],
  ["Reasoning models & chain of thought","Models trained, often with reinforcement learning on verifiable answers, to produce extended step-by-step reasoning before answering. Spending more tokens on thinking improves results on math, code and planning."],
  ["Distillation","Training a smaller model to imitate a larger one's outputs. It delivers much of the capability at a fraction of the inference cost."]
 ]],
 ["Using language models","systems around the model",[
  ["Prompt engineering","Designing instructions, examples and context to get reliable output without changing the model. It is fragile, so prompts should be tested like code."],
  ["Retrieval-augmented generation","Fetching relevant documents at query time and placing them in the prompt so the answer is grounded in them. It keeps knowledge current and citable without retraining."],
  ["Vector search","Finding items whose embeddings are nearest to a query's embedding, typically with approximate indexes. It is the retrieval step in most RAG systems."],
  ["Tool use & function calling","The model emits a structured call to an external function, such as a search, calculator or database, and reads the result. It extends models beyond what is in their weights."],
  ["Structured output","Constraining a model to produce valid JSON or a schema, by prompting or by restricting decoding. It makes model output safe to feed into other software."],
  ["Model Context Protocol","An open protocol that lets applications expose tools and data to models in a standard way. It reduces the custom glue needed to connect models to external systems."],
  ["Context management","Deciding what goes into a model's limited context window: summaries, retrieved passages, tool results and history. Poor management, not model capability, is a common cause of agent failures."]
 ]],
 ["Multimodal foundation models","one model, many inputs",[
  ["Vision-language models","Models that take images with text and answer or describe in language. They underlie image question answering, captioning and screenshot understanding."],
  ["Audio-language models","Models that accept speech or sound along with text, and can transcribe, reason about or respond to audio. They enable natural voice assistants."],
  ["Video understanding","Models that reason over sequences of frames to describe events, answer questions and locate moments. The computational cost grows quickly with length."],
  ["Document & chart understanding","Models that read layouts, tables, forms and plots rather than plain text. They are applied to invoices, reports and scientific papers."]
 ]],
 ["Evaluation","measuring capability",[
  ["Benchmarks","Standard tests such as MMLU for knowledge, GPQA for expert science and SWE-bench for software tasks. They allow comparison, but saturate quickly and can be gamed."],
  ["LLM-as-judge","Using a language model to grade other outputs against a rubric. It scales evaluation cheaply, but carries biases such as favoring longer answers or its own style."],
  ["Hallucination & factuality","A model producing fluent statements that are false or unsupported. Grounding, retrieval and calibrated abstention reduce it, but do not eliminate it."],
  ["Contamination","Benchmark questions leaking into training data, so scores reflect memory rather than ability. It is why fresh, held-out and private test sets matter."],
  ["Human preference evaluation","Collecting side-by-side judgments from people, as in arena-style leaderboards. It captures usability that automatic metrics miss, but can reward style over correctness."]
 ]]
]},
{ref:"D2",band:"D",name:"Perception",sum:"Turning raw signals (pixels, sound, sensor streams) into understanding.",deps:["C2"],
 overview:"Perception converts raw signals into structured information a system can act on. It includes computer vision for images and video, geometric methods for depth and 3D structure, speech and audio processing, the fusion of many sensors beyond cameras, and generative media that synthesizes images, video and voice.",
 why:"Perception is the input end of every embodied or monitoring system, from a drone's camera to satellite imagery to ship tracking. It is also where deepfakes and provenance problems arise, since the same models that analyze media can fabricate it.",
 subs:[
 ["Computer vision","images and video",[
  ["Image classification","Assigning a label to a whole image. The ImageNet benchmark made it the testbed of deep learning, and pretrained classifiers are the starting point for many other vision tasks."],
  ["Object detection","Finding and boxing each object in an image with a class label, with families such as YOLO (fast, single pass) and DETR (transformer-based). It is core to surveillance, driving and inspection."],
  ["Semantic & instance segmentation","Labeling every pixel by class (semantic) or separating each individual object (instance). It gives precise shapes for medical imaging, mapping and robotics."],
  ["Segment Anything","Meta's promptable segmentation model that outlines an object from a click or box, with no task-specific training. It made general-purpose segmentation a foundation-model capability."],
  ["Pose estimation","Locating body or object keypoints such as joints. It is used in sports analysis, human–robot interaction and activity recognition."],
  ["Object tracking","Following the same object across video frames and keeping its identity through occlusion. It is essential for surveillance, driving and sports analytics."],
  ["Face recognition","Verifying or identifying people by learned face embeddings compared by distance. It is accurate but raises serious privacy, bias and misuse concerns."]
 ]],
 ["3D & geometry","depth and structure",[
  ["Stereo & depth estimation","Recovering distance from two views or predicting depth from a single image. It gives a robot or vehicle a sense of how far things are."],
  ["Structure from motion","Reconstructing 3D structure and camera positions from a set of overlapping photos. It underlies photogrammetry and mapping from drone imagery."],
  ["SLAM","Simultaneous localization and mapping: building a map of an unknown space while tracking position within it. It is how robots and AR devices navigate without GPS."],
  ["Point clouds & LiDAR","Sets of 3D points, often from laser scanners, that capture the geometry of a scene. Neural methods segment and detect objects directly in point clouds."],
  ["Neural radiance fields","A neural representation of a scene learned from photos that can render it from new viewpoints. It started a wave of photorealistic 3D capture."],
  ["3D Gaussian splatting","Represents a scene as many 3D Gaussian blobs that can be rendered in real time. It is faster than radiance fields and is spreading into mapping and simulation."]
 ]],
 ["Speech & audio","sound",[
  ["Spectrograms & MFCCs","Time–frequency pictures of sound, and compact features derived from them. They are the standard inputs for audio models, which often treat the spectrogram like an image."],
  ["Speech recognition","Converting spoken audio to text. Large models trained on huge multilingual corpora (such as Whisper) made accurate, robust transcription widely available."],
  ["Speaker identification","Recognizing who is speaking from voice characteristics. It supports security and diarization, and is also a privacy concern."],
  ["Text-to-speech","Synthesizing natural speech from text. Neural methods produce near-human voices with control over style and emotion."],
  ["Audio event detection","Spotting sounds such as gunshots, machinery faults or alarms in an audio stream. It is used in monitoring, safety and bioacoustics."]
 ]],
 ["Sensing & fusion","beyond cameras",[
  ["Radar & sonar","Active sensors that use radio waves or sound to detect range and motion, working in dark, fog or water where cameras fail. ML is used to classify targets and clean up noisy returns."],
  ["Sensor fusion","Combining several sensors, such as camera, LiDAR, radar and inertial units, into a single, more reliable estimate. Kalman-style filters and learned fusion each cover the weaknesses of single sensors."],
  ["Remote sensing","Analyzing satellite and aerial imagery for land use, change, damage and activity. Large archives and foundation models have made global monitoring practical."],
  ["AIS & trajectory analysis","Using ship position broadcasts and other movement tracks to model normal routes and detect anomalies, such as loitering or switching off transponders. It is a staple of maritime domain awareness."],
  ["Time-series anomaly detection","Flagging unusual patterns in sensor streams over time. It is used for equipment health, network security and monitoring physical systems."],
  ["Signal processing","Classical filtering, transforms and estimation applied to raw signals before or alongside learned models. It remains important for radio, radar and audio pipelines."]
 ]],
 ["Generative media","synthesis",[
  ["Text-to-image","Models, mostly diffusion-based, that generate images from a written description. They are used in design and illustration, and also raise copyright and misinformation questions."],
  ["Text-to-video","Models that generate short video clips from text or images. Consistency across time, physics and length are the main open challenges."],
  ["Image editing & inpainting","Changing parts of an image, such as removing an object or filling a region, guided by text. It brings generative power to everyday photo editing."],
  ["Voice cloning","Synthesizing speech in a specific person's voice from a short sample. It has legitimate uses in accessibility and creative work, and enables fraud and impersonation."],
  ["Deepfake detection","Techniques that identify synthetic or manipulated media from artifacts or inconsistencies. It is an arms race, since generators improve against detectors."],
  ["Content provenance","Standards such as C2PA that attach signed records of how a piece of media was created and edited. Provenance aims at proving what is authentic rather than chasing fakes."]
 ]]
]},
{ref:"D3",band:"D",name:"Agents & Embodiment",sum:"Systems that pursue goals by acting: software agents, robots and teams of both.",deps:["B3","C3","D1"],
 overview:"An agent perceives, decides and acts in pursuit of a goal. The region starts from the classical definitions of agents, then covers language-model agents that use tools and keep memory, multi-agent systems in which many actors coordinate or compete, robotics where agents have bodies, and the autonomy of vehicles and platforms that operate with limited human control.",
 why:"The shift from models that answer to systems that act is the main change in applied AI. Reliability, oversight and evaluation of agents, in software and in the physical world, is now a central engineering and policy problem.",
 subs:[
 ["Agent foundations","what an agent is",[
  ["Perceive–decide–act loop","The basic cycle of an agent: sense the environment, choose an action, act, and repeat. Every agent architecture, from a thermostat to a language-model agent, is a variation on it."],
  ["Rational agents","Agents that choose the action expected to maximize their performance measure given what they know. Rationality is relative to the goal and information, not omniscience."],
  ["Goal- and utility-based agents","Goal-based agents act to reach a target state; utility-based agents weigh trade-offs among outcomes by expected value. They generalize reflex agents that merely react."],
  ["Reactive vs. deliberative","Reactive agents map situations directly to actions quickly; deliberative agents build plans from a model of the world. Practical systems usually layer both."],
  ["Subsumption architecture","Rodney Brooks's layered design for robots in which simple behaviors run in parallel and higher layers override lower ones. It argued for intelligence built bottom-up from interaction rather than central planning."],
  ["BDI architectures","Beliefs–desires–intentions models agents as holding beliefs about the world, desires to achieve, and intentions they commit to. It is a classic framework for programmable rational agents."]
 ]],
 ["LLM agents","language models that act",[
  ["ReAct","A pattern in which a model alternates between reasoning in text and taking actions such as tool calls, observing results each time. It is the template for most tool-using agents."],
  ["Planning with LLMs","Using a language model to decompose a goal into steps, choose among them and revise. It is flexible but unreliable on long horizons, so it is often paired with search or verification."],
  ["Reflection & self-critique","Having a model review and revise its own work before finalizing. It helps, but a model grading its own output is biased toward approving it."],
  ["Agent memory","Mechanisms that persist information beyond one context window: summaries, notes and retrieved records. It gives agents continuity across long tasks and sessions."],
  ["Computer & browser use","Agents that operate software by viewing the screen and issuing clicks and keystrokes, or by driving a browser. They can work with any application, but are slower and riskier than direct APIs."],
  ["Coding agents","Agents that read a codebase, edit files, run tests and iterate toward a fix or feature. They are the most mature agent application, with test suites providing a clear feedback signal."],
  ["Agent harnesses & evaluators","The scaffolding around a model that runs tools, enforces rules and checks results. Separating the agent that generates work from an independent evaluator that grades it avoids the inflated self-assessment of a model checking its own output."],
  ["Agent benchmarks","Tests of whole tasks completed with tools, such as software engineering or web navigation tasks. They measure end-to-end ability, but results are sensitive to scaffolding, cost and environment details."]
 ]],
 ["Multi-agent systems","many actors",[
  ["Coordination & negotiation","Protocols by which agents share tasks, resolve conflicts and agree on outcomes. Contract-net bidding and negotiation protocols are classic examples."],
  ["Auctions & markets","Allocating tasks or resources among agents through bidding, using prices as signals. They give decentralized coordination with good efficiency properties."],
  ["Swarms","Large groups of simple agents or robots that produce collective behavior from local rules. They are resilient to individual failures and are studied for drones and search tasks."],
  ["Emergent communication","Agents trained together developing their own signaling protocols to solve a shared task. It is studied to understand how language-like systems arise."],
  ["Debate & agent ensembles","Several model instances proposing, criticizing or voting on answers. It can improve accuracy and surface errors, at higher cost, and is also proposed as an oversight method."],
  ["Orchestrator–worker patterns","A lead agent breaks a task into pieces, delegates them to worker agents and merges the results. It parallelizes work and isolates context, at the price of coordination overhead."]
 ]],
 ["Robotics","agents with bodies",[
  ["Kinematics & dynamics","The geometry of a robot's motion and the forces that produce it. They give the equations that control and planning algorithms rely on."],
  ["Motion planning","Finding a collision-free path through a robot's configuration space, with methods such as RRT and trajectory optimization. It is the geometric counterpart of symbolic planning."],
  ["Control","Algorithms that make a robot follow a desired motion despite disturbances. PID is the ubiquitous basic method and model predictive control (MPC) optimizes over a short future horizon."],
  ["Grasping & manipulation","Picking up and handling objects of varied shape and material. It is among the hardest robotics problems because of contact, uncertainty and the need for fine touch."],
  ["Locomotion","Walking, running or moving over terrain with legs, wheels or tracks. Reinforcement learning in simulation has produced agile legged robots."],
  ["Teleoperation & demonstration data","Collecting examples of skilled motion by remotely driving a robot or recording human demonstrations. It supplies training data for imitation-learned robot policies."],
  ["Vision-language-action models","Foundation models that take camera images and an instruction in language and output robot actions. They aim at general-purpose robots that follow plain instructions."]
 ]],
 ["Autonomy","systems that run on their own",[
  ["Autonomous vehicles","Cars and trucks that perceive, plan and drive with little or no human input. They combine perception, prediction and planning under very high safety requirements."],
  ["UAVs & drones","Uncrewed aircraft ranging from hobby quadcopters to military platforms. Autonomy covers navigation, target recognition and mission execution, often with intermittent communication."],
  ["Maritime autonomy","Surface and underwater vessels that navigate, avoid collision and carry out missions at sea. Limited bandwidth and harsh conditions push intelligence onto the vehicle."],
  ["Levels of autonomy","Scales (like SAE levels for driving) describing how much a system does versus the human, from assistance to full autonomy. They give a shared language for responsibility and certification."],
  ["Human–machine teaming","Designing humans and autonomous systems to work together, with clear roles, shared awareness and appropriate trust. It treats the human as part of the system, not an afterthought."],
  ["Fault detection & recovery","Noticing when a component or behavior has gone wrong and switching to a safe mode or recovery action. It is required for any system that must operate without constant supervision."]
 ]]
]}
);
