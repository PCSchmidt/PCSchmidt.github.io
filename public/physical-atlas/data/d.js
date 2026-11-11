/* Band D — Frontier. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"D1",band:"D",name:"Embodied Foundation Models",sum:"Large pretrained models that see, understand language and output robot actions.",deps:["B2","C2"],
 overview:"Foundation-model ideas are moving from language and images into robot control. This region covers vision-language-action models, how actions are represented and generated, cross-embodiment pretraining and data scaling, and the use of language models for high-level planning on robots.",
 why:"Generalist robot policies promise to replace many hand-built skills with one adaptable model. Understanding their data needs, action representations and current limits helps separate credible progress from demos.",
 subs:[
 ["Vision-language-action models","one model from pixels to actions",[
  ["VLA model","A model that takes camera images and a language instruction and outputs robot actions. Builds on a pretrained vision-language model."],
  ["Action tokenization","Discretize continuous actions into tokens so a language-model decoder can generate them. Used by RT-2 and OpenVLA-style models."],
  ["Continuous action heads & flow matching","Generate smooth continuous actions with diffusion or flow-matching decoders. Used in models such as π0 for dexterous control."],
  ["Action chunking","Predict several future actions at once. Improves smoothness and reduces compounding error."],
  ["Co-training with web data","Mix robot data with internet vision-language data to retain semantic knowledge. Aids generalization to new objects and instructions."],
  ["Dual-system architectures","A slow reasoning model guides a fast control policy. Matches deliberation to real-time needs."],
  ["Language-conditioned policies","Behavior steered by natural-language commands. Provides flexible task specification."]]],
 ["Data & cross-embodiment learning","scale and diversity",[
  ["Open X-Embodiment & large robot datasets","Pooled demonstrations from many labs and robots. Allow training generalist policies."],
  ["Cross-embodiment transfer","One policy controlling different robot bodies. Limited by differing kinematics and sensors."],
  ["Teleoperation at scale","Fleets of operators collecting demonstrations. A costly but effective data source."],
  ["Human video & egocentric data","Learn from videos of people. Abundant but lacks robot actions."],
  ["Synthetic & simulation data","Generate training data in simulation. Needs transfer techniques."],
  ["Data quality & curation","Filter failed or noisy demonstrations. Quality can outweigh quantity."],
  ["Scaling laws for robotics","Whether performance rises predictably with data and model size. Early evidence, with robot data far scarcer than text."]]],
 ["Language models for robot planning","high-level reasoning",[
  ["LLM task planners (SayCan-style)","A language model proposes steps, scored by what the robot can actually do. Grounds plans in capabilities."],
  ["Code as policies","Language models write programs that call perception and control functions. Flexible and inspectable."],
  ["Scene graphs & grounding for LLMs","Provide structured descriptions of the environment to a planner. Connect language to the physical scene."],
  ["Replanning with feedback","Use success detection and error messages to revise plans. Improves robustness."],
  ["Hierarchical vision-language planning","Break instructions into subgoals executed by low-level skills. Common architecture for long tasks."],
  ["Failure modes of LLM planners","Ignoring physical constraints, hallucinated objects and unsafe steps. Require verification."],
  ["Reasoning about physics & space","Weakness of current models. Active research."]]],
 ["World models for embodied AI","predicting and imagining",[
  ["Action-conditioned video models","Predict future frames given actions. Used as learned simulators and planners."],
  ["Latent world models (JEPA, Dreamer)","Predict in compact representations rather than pixels. Efficient for planning and learning."],
  ["Planning with world models","Search over imagined futures to choose actions. Requires accurate long-horizon predictions."],
  ["Foundation world models","Large generative models serving as general simulators. Aim to supply data and training environments."],
  ["Physical plausibility","Generated video often breaks physics. A key limitation."],
  ["Evaluation inside world models","Use models to estimate policy performance cheaply. Risky if the model is wrong."],
  ["Spatial intelligence & 3D understanding","Models that reason about geometry and layout. Considered essential for embodied AI."]]],
 ["Evaluation & limits","what works today",[
  ["Generalization axes","New objects, scenes, instructions and embodiments. Policies still generalize narrowly."],
  ["Benchmarks for manipulation","Suites such as LIBERO, CALVIN and real-world evaluations. Simulation scores may not predict reality."],
  ["Real-robot evaluation","Repeated trials on hardware with careful protocols. Costly but the only reliable test."],
  ["Reliability & success rate","A policy that works 90% of the time is far from deployable. Industrial use needs much higher."],
  ["Speed & latency","Large models can be slow for control. Distillation and asynchronous inference help."],
  ["Safety of learned policies","Hard to predict or bound behavior. Needs runtime monitors and fallback."],
  ["Open problems","Data scarcity, long-horizon reliability and fine dexterity. Active research frontiers."]]]
 ]},

{ref:"D2",band:"D",name:"Simulation & Synthetic Data",sum:"Virtual worlds used to train, test and validate physical AI before and alongside real hardware.",deps:["A1","C2"],
 overview:"Simulation lets robots and vehicles gain experience cheaply and safely. This region covers physics engines and rendering, differentiable and GPU-parallel simulation, digital twins, synthetic data generation, and the use of simulation for testing and verification of autonomy.",
 why:"Real-world testing is slow, costly and dangerous, especially for rare events. Simulation is how most autonomy is trained and validated, so its fidelity and coverage directly bound how much can be trusted.",
 subs:[
 ["Physics engines & rendering","how simulators work",[
  ["Rigid-body physics engines","Software that simulates collisions and joints (MuJoCo, PhysX, Bullet). Differ in accuracy, contact handling and speed."],
  ["Contact solvers","Algorithms resolving forces between touching bodies. Choices cause large differences in behavior."],
  ["Photorealistic rendering","Generate camera images with realistic lighting and materials. Needed to train and test vision."],
  ["Sensor simulation (LiDAR, radar, IMU)","Model sensor physics and noise. Fidelity limits transfer of perception."],
  ["Soft-body, fluid & deformable simulation","Model cloth, liquids and flexible objects. More expensive and less accurate."],
  ["Time stepping & numerical stability","Choose step sizes and integrators. Instabilities create unrealistic motion."],
  ["Scene and asset libraries","Collections of 3D objects and environments. Provide diversity for training."]]],
 ["Scalable & differentiable simulation","speed and gradients",[
  ["GPU-parallel simulation (Isaac Gym/Lab, MJX)","Run thousands of environments simultaneously. Make large-scale RL practical."],
  ["Differentiable simulators","Provide gradients of outcomes with respect to actions or parameters. Enable gradient-based control and system identification."],
  ["Batched rollouts","Evaluate many trajectories at once. Powering sampling-based planning and training."],
  ["Hardware-in-the-loop simulation","Connect real controllers or sensors to a simulated world. Test embedded systems before deployment."],
  ["Co-simulation","Combine simulators for different domains such as vehicle, traffic and network. Needed for system-level testing."],
  ["Simulation speed vs. fidelity","Faster models are less accurate. Choose per purpose."],
  ["Cloud-scale simulation","Run millions of scenarios in parallel. Used for autonomous driving validation."]]],
 ["Digital twins & real-to-sim","mirroring reality",[
  ["Digital twin","A virtual replica of a physical system fed by real data. Used for monitoring, prediction and testing changes."],
  ["Scan-to-sim & photogrammetry","Convert real captures into simulation assets. Narrows the visual gap."],
  ["Neural reconstruction (NeRF, Gaussian splatting) for simulation","Build photorealistic environments from images. Increasingly used to re-simulate real drives."],
  ["Parameter identification for simulators","Tune physics parameters to match measurements. Improves transfer."],
  ["Scenario reconstruction from logs","Turn real incidents or data into replayable tests. Powerful for regression testing."],
  ["Fleet data to simulation loop","Use deployed vehicles' data to improve simulation and training. A flywheel for autonomy."],
  ["Limits of twins","Models are only as good as data and assumptions. Avoid overtrust."]]],
 ["Synthetic data generation","training data without collection",[
  ["Domain randomization for data","Randomize textures, lighting and objects. Provides robust training data."],
  ["Procedural scene generation","Algorithmically create varied environments. Cover many configurations."],
  ["Generative models for scenarios and data","Use diffusion and language models to produce scenes, scenarios and images. Rapidly expanding but need validation."],
  ["Labels for free","Simulation provides perfect depth, segmentation and poses. A key advantage."],
  ["Synthetic-to-real gap","Models trained on synthetic data may fail on real data. Mix real data and adapt."],
  ["Edge-case synthesis","Create rare dangerous situations on demand. Hard to collect in reality."],
  ["Privacy & licensing advantages","Synthetic data avoids personal information. Provenance still matters."]]],
 ["Simulation for testing & verification","building trust",[
  ["Scenario-based testing","Define situations and check behavior across them. Basis of autonomous vehicle validation."],
  ["Scenario languages (OpenSCENARIO)","Standard formats describing test scenarios. Enable sharing and regulation."],
  ["Adversarial scenario search","Automatically search for situations that cause failure. Finds weaknesses humans miss."],
  ["Coverage metrics","Measure which situations have been tested. Show gaps."],
  ["Statistical safety arguments","Estimate failure rates from simulated and real miles. Limited by realism."],
  ["Replay & regression","Rerun logged events against new software. Catch regressions."],
  ["Sim-based certification role","Regulators consider simulation evidence with limits. Must show validity of the simulator."]]]
 ]},

{ref:"D3",band:"D",name:"Autonomous Systems",sum:"Complete autonomous vehicles and platforms, and how their parts fit together.",deps:["B1","B3","C1"],
 overview:"Autonomy emerges from integrating sensing, estimation, planning, control and supervision on a specific platform. This region covers autonomy levels and architectures, driving, aerial, maritime, space and ground systems, multi-vehicle cooperation, and how humans supervise and team with autonomous machines.",
 why:"Real systems succeed or fail as integrated wholes. Architecture choices, degraded-mode behavior and human interfaces matter as much as any single algorithm.",
 subs:[
 ["Architectures & levels","structure of autonomy",[
  ["Sense–plan–act architecture","A pipeline from perception through planning to control. The classic layered design."],
  ["Modular vs. end-to-end","Separate engineered modules versus one learned model from sensors to controls. A central tradeoff in autonomy."],
  ["Levels of autonomy (SAE)","Scale from driver assistance to full automation. Define responsibility between human and system."],
  ["Operational design domain","The conditions under which a system is designed to operate. Safe autonomy depends on staying inside it or detecting when outside."],
  ["Supervisory & executive layers","Monitor health and switch modes. Provide oversight of learned components."],
  ["Degraded modes & minimal risk maneuvers","Safe fallback behavior when something fails. A requirement for deployment."],
  ["Compute & software architecture","Distribution across processors and networks. Affects latency and fault tolerance."]]],
 ["Road, air, sea & space","platform families",[
  ["Autonomous driving","Robotaxis and driver assistance combining sensing, maps, prediction and planning. The most intensively developed autonomy."],
  ["Unmanned aerial systems","Drones for inspection, delivery, mapping and defense. Constrained by endurance, airspace and communication."],
  ["Maritime autonomy","Surface and underwater vessels for survey, shipping and defense. Must follow collision rules and operate with limited communications."],
  ["Autonomous aircraft & optionally piloted systems","Autopilot and decision-making for flight. Strict certification environment."],
  ["Space robotics & autonomy","Rovers and spacecraft operating with communication delay. Need onboard decision-making."],
  ["Ground military & off-road autonomy","Unstructured terrain, adversaries and degraded GNSS. Differs from structured road driving."],
  ["Industrial & agricultural vehicles","Mining, farming and construction machines. Semi-structured sites with commercial value."]]],
 ["Multi-vehicle & distributed autonomy","teams of machines",[
  ["Swarm robotics","Many simple units achieving group goals. Robust and scalable, with emergent behavior."],
  ["Formation control & consensus","Coordinate relative positions or shared variables. Based on graph theory and control."],
  ["Task allocation & scheduling","Assign tasks among robots. Auction and optimization methods."],
  ["Multi-robot planning","Plan collision-free paths for many robots. Combinatorially hard at scale."],
  ["Communication-limited coordination","Cooperate with intermittent links. Common in air, sea and defense."],
  ["Collaborative perception","Share sensor data between vehicles. Extends range and robustness."],
  ["Heterogeneous teams","Air, ground and sea platforms cooperating. Use complementary capabilities."]]],
 ["Human–machine teaming","people in the system",[
  ["Supervisory control","A person monitors and directs autonomy at a high level. Common for drones and vessels."],
  ["Shared autonomy","Blend human and machine control. Assists operators without taking over."],
  ["Teleoperation & remote operations","Humans drive from afar with latency and limited sensing. Used as fallback and for training."],
  ["Trust & situation awareness","Operators must understand what the system is doing and why. Interface design is critical."],
  ["Handover & takeover","Transfer control between machine and human. Dangerous if the person is unprepared."],
  ["Explainable autonomy","Communicate intent and reasons for actions. Supports trust and oversight."],
  ["Operator workload & fatigue","Too many vehicles or alerts overwhelm people. Limits ratio of operators to machines."]]],
 ["Mission systems & operations","using autonomy in practice",[
  ["Mission planning & management","Plan routes, tasks and resources for a mission. Include contingencies."],
  ["Health monitoring & prognostics","Track component condition and predict failures. Enables maintenance and safe abort."],
  ["Logistics & fleet operations","Charging, maintenance and dispatch for many vehicles. A large part of the cost."],
  ["Communications-denied operations","Autonomy with no reliable link. Requires onboard decision-making."],
  ["Counter-autonomy & adversarial conditions","Jamming, spoofing and deception. Systems must remain safe and effective."],
  ["Concept of operations (CONOPS)","Describes how a system is used. Drives requirements."],
  ["Lessons from fielded programs","Deployments reveal edge cases and operations challenges. Feed back into design."]]]
 ]}
);
