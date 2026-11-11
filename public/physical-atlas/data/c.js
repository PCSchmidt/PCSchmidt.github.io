/* Band C — Planning, Control & Learning. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"C1",band:"C",name:"Motion Planning & Navigation",sum:"Deciding where to go and how to move there without collisions, within the robot's limits.",deps:["A1","B3"],
 overview:"Planning turns a goal into a feasible, safe motion. This region covers planning in configuration space, graph and sampling-based planners, trajectory optimization, navigation stacks for mobile robots and vehicles, and behavior and decision layers on top.",
 why:"Planners must respect geometry, dynamics, uncertainty and other agents in real time. Their completeness, optimality and speed tradeoffs decide how a system behaves in tight or crowded spaces.",
 subs:[
 ["Planning foundations","the problem",[
  ["Configuration space","The space of all robot poses, in which obstacles become forbidden regions. Reduces a robot to a point for planning."],
  ["Path vs. trajectory","A path is a geometric curve; a trajectory adds time and velocity. Planners often compute paths first, then trajectories."],
  ["Holonomic vs. nonholonomic constraints","Whether a robot can move in any direction instantly. Cars and many wheeled robots cannot slide sideways."],
  ["Collision checking","Test whether a configuration or motion hits an obstacle. Usually the dominant cost in planning."],
  ["Completeness & optimality","Whether a planner always finds a solution when one exists, and whether it is the best. Sampling methods offer probabilistic or asymptotic versions."],
  ["Kinodynamic planning","Plan with dynamics and input limits included. Needed for fast or underactuated systems."],
  ["Planning under uncertainty","Account for sensing and motion errors. Leads to POMDPs and belief-space planning."]]],
 ["Search & sampling-based planners","finding paths",[
  ["Grid search (Dijkstra, A*)","Graph search over a discretized space. Optimal and simple, limited by dimension."],
  ["D* & incremental replanning","Reuse previous search results when the map changes. Efficient for navigation in changing environments."],
  ["Probabilistic roadmaps (PRM)","Sample configurations and connect them in a reusable graph. Good for repeated queries in static scenes."],
  ["Rapidly-exploring random trees (RRT, RRT*)","Grow a tree toward random samples. Handle high dimensions, and RRT* converges toward optimal paths."],
  ["Lattice & state-lattice planners","Search over precomputed motion primitives. Common for vehicles with kinematic limits."],
  ["Hybrid A*","A* that carries continuous vehicle state. Used for parking and low-speed maneuvering."],
  ["Learned heuristics & sampling","Use neural networks to guide search. Speeds up planning in complex spaces."]]],
 ["Trajectory optimization","smooth, feasible motion",[
  ["Optimization-based planning","Formulate motion as minimizing a cost under constraints. Produces smooth, dynamically feasible trajectories."],
  ["CHOMP & TrajOpt","Optimize trajectories using obstacle costs or sequential convex programs. Widely used for arms."],
  ["Minimum-jerk & polynomial trajectories","Smooth curves with bounded derivatives. Basis for quadrotor and arm motion."],
  ["Direct collocation & shooting","Transcribe dynamics into an optimization problem. Standard for complex dynamic motions."],
  ["Differential flatness","Systems where trajectories map to simple outputs and their derivatives. Simplifies planning for quadrotors."],
  ["Time-optimal path parameterization","Choose speeds along a path subject to limits. Gives fast execution within torque bounds."],
  ["Model predictive path integral & sampling MPC","Sample many rollouts and average the best. Works with arbitrary costs and learned models."]]],
 ["Navigation systems","getting from A to B",[
  ["Navigation stack","Layers of global planner, local planner and controller using costmaps. The standard mobile-robot architecture (e.g., Nav2)."],
  ["Costmaps","Grids encoding obstacle and inflation costs. Convert sensor data into planning inputs."],
  ["Local planners (DWA, TEB, MPC)","Compute short-term safe commands that follow the global path. React to dynamic obstacles."],
  ["Obstacle avoidance & collision avoidance","Methods like velocity obstacles and control barrier functions for dynamic agents. Provide reactive safety."],
  ["Coverage & exploration","Plan to cover an area or discover unknown space. Used in inspection, mapping and search."],
  ["Social navigation","Move among people with norms and comfort. Requires predicting human motion."],
  ["Recovery behaviors","Actions when stuck, such as backing up or replanning. Needed for long deployments."]]],
 ["Behavior & mission planning","higher-level decisions",[
  ["Behavior trees & state machines","Structured ways to sequence and switch behaviors. Readable, modular and widely used."],
  ["Task planning (PDDL, HTN)","Symbolic planning of action sequences. Combined with motion planning in task-and-motion planning."],
  ["Task and motion planning","Jointly choose symbolic actions and feasible motions. Hard but essential for manipulation sequences."],
  ["Route & mission planning","Global routes, waypoints and objectives. For vehicles, aircraft and vessels."],
  ["Decision-making under uncertainty (MDP, POMDP)","Probabilistic models of choices and outcomes. Basis of autonomous driving behavior planners."],
  ["Rules of the road & constraints","Encode traffic laws and operating rules. Often as formal logic or cost terms."],
  ["Mission re-planning & contingency","Adapt to failures and new information. Includes safe return and abort modes."]]]
 ]},

{ref:"C2",band:"C",name:"Learned Control & Robot Learning",sum:"Using data and experience to produce robot behavior, and carrying it from simulation to hardware.",deps:["A3","C1"],
 overview:"Instead of engineering every behavior, robots can learn policies from demonstrations and trial and error. This region covers imitation and reinforcement learning for control, model-based approaches, domain randomization and sim-to-real transfer, and the data and infrastructure that make robot learning practical.",
 why:"Learning has produced agile locomotion and dexterous skills hard to hand-design, but real robots are expensive, slow and fragile. Understanding the reality gap and data costs is central to using learning responsibly on hardware.",
 subs:[
 ["Imitation learning","learning from demonstrations",[
  ["Behavior cloning","Supervised learning of actions from expert demonstrations. Simple and effective, but errors compound when the robot leaves the demonstrated distribution."],
  ["DAgger & interactive imitation","Collect expert corrections on the learner's own states. Reduce compounding errors."],
  ["Action chunking & diffusion policies","Predict short sequences of actions, sometimes with diffusion models, to capture multimodal behavior. Strong results in manipulation."],
  ["Teleoperation data collection","Humans drive the robot to record demonstrations, with devices like leader arms or VR. Data quantity and quality are the bottleneck."],
  ["Learning from video & human demonstrations","Extract skills from videos of people. Cheaper data but a mismatch in embodiment."],
  ["Inverse reinforcement learning","Infer the reward behind demonstrations. Generalizes beyond copied actions."],
  ["Multimodality & covariate shift","Demonstrations contain multiple valid behaviors and drift from training states. Policy classes must represent both."]]],
 ["Reinforcement learning for control","learning by trial",[
  ["Policy gradient & actor–critic for robotics","On-policy methods like PPO and off-policy methods like SAC. The standard tools for training control policies."],
  ["Reward design","Specifying what counts as success and shaping progress. Poor rewards produce exploits and unnatural motion."],
  ["Sample efficiency","The number of interactions needed to learn. Critical on real hardware."],
  ["Model-based RL for robots","Learn dynamics and plan or optimize with them. More sample-efficient than model-free."],
  ["Learning locomotion with RL","Train legged robots in simulation to walk and run robustly. A landmark success of sim-to-real."],
  ["Safe & constrained RL","Respect safety limits during learning. Necessary on hardware."],
  ["Residual & hybrid policies","Learn corrections on top of a classical controller. Combine reliability with adaptivity."]]],
 ["Sim-to-real transfer","bridging the reality gap",[
  ["Reality gap","Differences between simulation and the real world in dynamics, sensing and appearance. Policies tuned to simulation can fail on hardware."],
  ["Domain randomization","Vary physical parameters and visuals during training so the policy is robust to them. The most widely used transfer technique."],
  ["System identification & domain adaptation","Make simulation match reality by measuring parameters, or adapt the policy online. Narrow the gap from both sides."],
  ["Teacher–student & privileged learning","Train a policy with privileged simulator information, then distill it to one using only onboard sensors. Standard for legged robots."],
  ["Real-to-sim & digital twins","Build simulation from real scans and measurements. Improve fidelity."],
  ["Fine-tuning on hardware","Adapt a simulation-trained policy with limited real data. Practical final step."],
  ["Observation noise & latency randomization","Include sensor noise and delays in training. Prevent brittle behavior from idealized inputs."]]],
 ["World models & model-based learning","predicting consequences",[
  ["Learned dynamics models","Neural networks predicting next states from actions. Allow planning and imagination."],
  ["World models & latent planning","Learn compact representations and rollout predictions in latent space (e.g., Dreamer). Support efficient decision-making."],
  ["Video prediction as a simulator","Generative video models predicting outcomes of actions. Promising but physically imperfect."],
  ["Model error & compounding","Prediction errors grow over long rollouts. Methods like ensembles limit exploitation of model errors."],
  ["Uncertainty-aware models","Estimate when the model is unreliable. Allow cautious planning."],
  ["Physics-informed & hybrid models","Combine learned components with known physics. Improve data efficiency and generalization."],
  ["Meta-learning & adaptation","Learn to adapt quickly to new conditions such as payload or terrain. Provides robustness."]]],
 ["Robot learning infrastructure","making it practical",[
  ["Robot datasets","Collections of demonstrations across tasks and robots. Scale and diversity drive generalization."],
  ["Simulation platforms (Isaac, MuJoCo, PyBullet)","Physics engines for training and testing. Differ in speed, accuracy and GPU support."],
  ["Massively parallel simulation","Run thousands of environments on a GPU. Cuts training time from days to minutes."],
  ["Evaluation of learned policies","Test success rates over many trials and variations. Robot evaluation is costly and noisy."],
  ["Resets & autonomous data collection","Automate returning to start states. Allows long unattended learning."],
  ["Reproducibility on hardware","Differences in robots and setups complicate comparison. Standard benchmarks help."],
  ["Hardware safety during learning","Torque limits, workspace bounds and e-stops. Prevent damage while exploring."]]]
 ]},

{ref:"C3",band:"C",name:"Manipulation & Locomotion",sum:"Interacting with objects and moving through terrain: arms, hands, legs and wheels.",deps:["A1","A3","C1"],
 overview:"Physical interaction is where robotics is hardest. This region covers grasping and dexterous manipulation, contact-rich tasks, legged and aerial and marine locomotion, and mobile manipulation that combines movement with handling.",
 why:"Most valuable robot tasks involve touching or carrying things or traversing rough terrain. Contact, uncertainty and balance make these problems qualitatively harder than free-space motion.",
 subs:[
 ["Grasping","picking things up",[
  ["Grasp planning","Choose gripper poses that securely hold an object. Based on geometry, friction and learned models."],
  ["Force & form closure","Conditions for holding an object using friction or geometry. Theoretical basis of grasp stability."],
  ["Learned grasping (Dex-Net, GraspNet)","Neural networks predicting grasp success from images or point clouds. Work on novel objects."],
  ["Suction & soft grippers","Alternatives to fingers for packaging and delicate items. Common in logistics."],
  ["Bin picking & clutter","Pick items from piles with occlusion. A central industrial problem."],
  ["Tactile feedback in grasping","Use touch to detect slip and adjust. Improves reliability."],
  ["Pose estimation of objects","Estimate 6D object pose for grasping and placement. Errors directly cause failures."]]],
 ["Dexterous & contact-rich manipulation","skilled handling",[
  ["In-hand manipulation","Reorient objects within a hand. Requires fine contact control; learned with simulation and RL."],
  ["Insertion & assembly","Fit parts together with tight tolerances. Rely on compliance and force sensing."],
  ["Contact modeling & planning","Reason about making and breaking contacts. Hard because of discontinuous dynamics."],
  ["Deformable object manipulation","Cloth, rope and food change shape. Difficult to model and perceive."],
  ["Tool use","Use objects as extensions of the hand. Needs understanding of geometry and function."],
  ["Bimanual manipulation","Coordinate two arms. Enables tasks like folding and assembly."],
  ["Learning manipulation from demonstrations","Generalist policies trained on teleoperated data. A fast-moving area."]]],
 ["Legged & humanoid locomotion","walking and running",[
  ["Zero-moment point & balance","A criterion for stable walking. Classic basis for humanoid gait."],
  ["Centroidal & reduced-order models","Simplify the dynamics of a whole body into a few quantities. Make real-time planning possible."],
  ["Gait & contact scheduling","Decide when each foot touches the ground. Fundamental to legged motion."],
  ["Model predictive control for legged robots","Optimize body motion and contact forces ahead in time. Used in many quadrupeds."],
  ["Learned locomotion policies","RL-trained walking over rough terrain with proprioception and vision. Robust and increasingly standard."],
  ["Humanoid whole-body control","Coordinate arms, legs and torso. Aimed at general-purpose robots."],
  ["Terrain perception for legs","Estimate footholds and slope. Needed for stairs and rubble."]]],
 ["Aerial & marine locomotion","moving through fluids",[
  ["Multirotor control","Attitude and position control of quadrotors, often cascaded loops. Mature and widely deployed."],
  ["Fixed-wing & VTOL autonomy","Autopilots for efficient long-range flight and hybrid vehicles. Face wind and airspace rules."],
  ["Agile & vision-based flight","High-speed flight using onboard perception. Active research with learned policies."],
  ["Underwater vehicles (AUV, ROV)","Autonomous or remotely operated submersibles. Limited communication and GNSS."],
  ["Surface vessel autonomy","Navigation and collision avoidance at sea under maritime rules. Includes COLREG compliance."],
  ["Swarms of vehicles","Many simple vehicles cooperating. Offer robustness and coverage."],
  ["Environmental disturbances","Wind, waves and currents. Controllers must compensate."]]],
 ["Mobile manipulation & whole systems","moving and handling",[
  ["Mobile manipulators","A manipulator on a mobile base. Extends reach and enables household and warehouse tasks."],
  ["Navigation and manipulation coordination","Decide where to stand to reach an object. Couples planning layers."],
  ["Long-horizon task execution","Chain many skills toward a goal. Reliability of each step multiplies."],
  ["Failure recovery in manipulation","Detect dropped objects and retry. Essential for deployment."],
  ["Human–robot collaboration","Share workspace and tasks safely. Requires intent prediction and compliance."],
  ["Warehouse & logistics robotics","Picking, sorting and transporting goods. The largest commercial use of manipulation."],
  ["Field robotics","Agriculture, construction, mining and inspection in unstructured environments. Robustness matters most."]]]
 ]}
);
