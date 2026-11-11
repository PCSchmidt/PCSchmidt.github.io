/* Band B — Perception & Estimation. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"B1",band:"B",name:"State Estimation & Sensor Fusion",sum:"Combining noisy, delayed measurements into a best estimate of what is happening.",deps:["A2","A3"],
 overview:"No single sensor tells a robot its true state. Estimation fuses motion models with measurements, weighing each by its uncertainty. This region covers Bayesian filtering, the Kalman family, particle filters, factor-graph smoothing and the practical fusion of inertial, visual, LiDAR and satellite data.",
 why:"The quality of the state estimate limits every downstream decision. Fusion also supplies the uncertainty that safe planning and monitoring require, so understanding it is essential for any autonomous system.",
 subs:[
 ["Bayesian filtering","the common framework",[
  ["State, process model & measurement model","The hidden quantities, how they evolve, and how sensors relate to them. Every estimator is built from these two models."],
  ["Bayes filter","Alternate predicting the state forward and correcting with each measurement. The general recursion that Kalman and particle filters implement."],
  ["Gaussian uncertainty & covariance","Represent belief by a mean and covariance. Convenient and often sufficient."],
  ["Observability","Whether the state can be determined from the measurements. Unobservable directions, like absolute heading from odometry, drift without correction."],
  ["Consistency & NEES","Check that the estimator's claimed uncertainty matches actual error. Overconfident filters are dangerous."],
  ["Outliers & robust updates","Reject or down-weight bad measurements. Prevent a single bad reading from corrupting the estimate."],
  ["Delayed & out-of-order measurements","Sensors report with latency and at different rates. Handle by buffering or retrodiction."]]],
 ["Kalman-family filters","the workhorses",[
  ["Kalman filter","Optimal recursive estimator for linear systems with Gaussian noise. Cheap, stable and extremely widely used."],
  ["Extended Kalman filter (EKF)","Linearizes nonlinear models at each step. The standard in navigation despite linearization error."],
  ["Unscented Kalman filter (UKF)","Propagates sample points to capture nonlinearity without derivatives. Often more accurate than the EKF."],
  ["Error-state Kalman filter","Estimate small errors around a nominal state, handling rotations cleanly. Standard in inertial navigation."],
  ["Information filter","Kalman filter in terms of inverse covariance. Convenient for combining many measurements."],
  ["Covariance tuning","Choosing process and measurement noise values. Often the main practical effort."],
  ["Complementary & alpha–beta filters","Simple fixed-gain blends of sensors, such as gyro and accelerometer. Cheap alternatives for small devices."]]],
 ["Nonparametric & smoothing methods","beyond Gaussians",[
  ["Particle filter","Represent belief by weighted samples. Handles non-Gaussian, multimodal problems like global localization."],
  ["Resampling & particle degeneracy","Duplicating good particles and dropping poor ones. Needed to avoid collapse onto a few samples."],
  ["Factor graphs","Represent estimation as a graph of variables and constraints. Underlie modern smoothing and SLAM."],
  ["Batch & fixed-lag smoothing","Optimize over a window of states, not just the latest. Gives better accuracy than filtering."],
  ["Nonlinear least squares (Gauss–Newton, Levenberg–Marquardt)","Optimization methods used to solve smoothing problems. Implemented in libraries like GTSAM and Ceres."],
  ["Marginalization","Remove old states while keeping their information. Keeps problem size bounded."],
  ["Moving-horizon estimation","Optimize states over a sliding window with constraints. A nonlinear alternative to Kalman filters."]]],
 ["Inertial & visual–inertial fusion","motion from many cues",[
  ["Inertial navigation","Integrate IMU measurements to track pose. Smooth and fast but drifts quickly alone."],
  ["IMU preintegration","Summarize many IMU samples between keyframes into one factor. Makes visual–inertial optimization efficient."],
  ["Visual–inertial odometry (VIO)","Fuse camera features with an IMU for accurate motion. Standard on drones and phones."],
  ["LiDAR–inertial odometry","Combine point-cloud registration with IMU. Robust, accurate localization in many environments."],
  ["Scale & gravity observability","A monocular camera cannot determine scale, but an IMU provides it. Shows how sensors complement each other."],
  ["Initialization","Estimating biases, gravity and scale at startup. A fragile phase that often decides robustness."],
  ["Wheel odometry & kinematic constraints","Add vehicle motion constraints to fusion. Improve ground-vehicle estimates."]]],
 ["Global positioning & multi-sensor systems","absolute references",[
  ["GNSS/INS integration","Fuse satellite positioning with inertial data. Provides continuous, drift-free navigation outdoors."],
  ["RTK & PPP corrections","Techniques raising GNSS accuracy to centimeters. Depend on a base station or correction service."],
  ["GNSS-denied navigation","Operate without satellite signals, using vision, LiDAR, terrain or other cues. Important for indoor, underwater and contested environments."],
  ["Jamming & spoofing resilience","Detect and withstand false or blocked GPS. A priority for defense and critical systems."],
  ["Terrain, map & magnetic matching","Localize by matching measurements to known maps. Alternative absolute references."],
  ["Multi-sensor architectures","Loosely coupled fusion combines outputs of separate estimators; tightly coupled fusion uses raw measurements. Tight coupling is more accurate and more complex."],
  ["Fault detection & integrity monitoring","Detect failed sensors and bound estimate error. Required in safety-critical navigation."]]]
 ]},

{ref:"B2",band:"B",name:"Perception for Autonomy",sum:"Turning raw sensor data into the objects, free space and scene understanding a vehicle or robot acts on.",deps:["A2"],
 overview:"Perception converts images, point clouds and radar returns into usable understanding: what objects exist, where they are, how they move and where it is safe to go. This region covers detection and segmentation, 3D and bird's-eye-view representations, tracking and prediction, and the challenges of operating outside the lab.",
 why:"Perception is often the most failure-prone part of autonomy because the world is open-ended. Knowing its representations, metrics and failure modes tells you where to demand redundancy and testing.",
 subs:[
 ["2D vision tasks","image understanding",[
  ["Object detection","Locate and classify objects in an image with boxes. Detectors like YOLO run in real time on edge hardware."],
  ["Semantic & instance segmentation","Label each pixel by class or by individual object. Give finer geometry than boxes."],
  ["Depth estimation","Infer distance from one or two images. Learned monocular depth gives useful but scale-uncertain cues."],
  ["Optical flow","Estimate pixel motion between frames. Supports motion analysis and self-supervision."],
  ["Keypoints, features & matching","Detect and describe repeatable points to relate images. Foundations of SLAM and structure from motion."],
  ["Vision foundation models","Large pretrained encoders such as DINO and SAM. Provide strong features and zero-shot segmentation for robotics."],
  ["Domain shift in vision","Lighting, weather and sensor changes degrade performance. A leading cause of field failures."]]],
 ["3D perception","geometry from LiDAR, radar and cameras",[
  ["Point-cloud processing","Filtering, downsampling and registering 3D points. Basic tools for LiDAR data."],
  ["3D object detection","Predict oriented 3D boxes from LiDAR or cameras. Core of autonomous driving perception."],
  ["Bird's-eye-view (BEV) representation","Project features onto a top-down grid shared by sensors. A common space for fusion and planning."],
  ["Occupancy grids & occupancy networks","Predict which cells of space are occupied or free. Represent arbitrary obstacles that boxes miss."],
  ["Radar perception","Detect and track objects using range and Doppler velocity. Robust in poor weather."],
  ["Multi-modal fusion (camera–LiDAR–radar)","Combine sensors for redundancy and accuracy. Done at the raw, feature or object level."],
  ["Point-cloud registration (ICP, NDT)","Align scans to estimate relative motion or map position. Used in LiDAR odometry and localization."]]],
 ["Tracking & prediction","objects over time",[
  ["Multi-object tracking","Associate detections across frames into persistent tracks. Combines motion models and appearance."],
  ["Data association","Decide which detection corresponds to which track. Wrong matches cause identity switches."],
  ["Motion prediction","Forecast where other agents will go, as multiple likely futures. Needed to plan safely around people and vehicles."],
  ["Intent & interaction modeling","Account for agents reacting to each other. Important in dense traffic and crowds."],
  ["Uncertainty in perception outputs","Report confidence for objects and positions. Planning needs it to act safely."],
  ["Tracking-by-detection vs. end-to-end","Separate modules versus joint learned pipelines. A major architectural debate."],
  ["Scene flow & dynamic maps","Estimate 3D motion of the environment. Separates static structure from moving objects."]]],
 ["Scene understanding & semantics","meaning for decisions",[
  ["Free-space & drivable-area estimation","Identify where a vehicle can safely move. A basic navigation input."],
  ["Traversability estimation","Judge whether terrain is passable for a particular robot. Essential off-road and in rough terrain."],
  ["Lane, road & map-element detection","Recognize lanes, signs and signals. Core of road driving."],
  ["Semantic mapping","Attach labels to places and objects in a map. Enables task-level reasoning."],
  ["Open-vocabulary & language-grounded perception","Find objects named in free text. Links perception to instructions."],
  ["Affordances","What actions an object or surface supports, like graspable or openable. Connect perception to manipulation."],
  ["Scene graphs","Structured descriptions of objects and relations. Provide symbolic input to planners."]]],
 ["Robustness & evaluation","does it work in the wild",[
  ["Adverse conditions","Rain, fog, glare, night and sensor contamination. Test and design for them explicitly."],
  ["Long-tail & rare events","Unusual objects and situations. The hardest part of reaching safety targets."],
  ["Out-of-distribution & anomaly detection","Recognize inputs outside training experience. Triggers safe fallback."],
  ["Perception metrics (mAP, IoU, MOTA)","Standard measures for detection and tracking. Must be complemented by safety-relevant metrics."],
  ["Safety-relevant evaluation","Weight errors by their risk, such as missed nearby pedestrians. Better matches consequences than average accuracy."],
  ["Datasets & benchmarks (KITTI, nuScenes, Waymo)","Public driving datasets. Drive progress but differ from deployment conditions."],
  ["Perception redundancy","Independent sensing paths cover each other's failures. A core architectural principle."]]]
 ]},

{ref:"B3",band:"B",name:"SLAM & Mapping",sum:"Building a map of the world while working out where you are within it.",deps:["A1","B1","B2"],
 overview:"Simultaneous localization and mapping lets a robot with no prior map explore, build a consistent model of the environment and locate itself in it. This region covers the SLAM problem, visual and LiDAR approaches, loop closure and pose-graph optimization, map representations and relocalization in known maps.",
 why:"Maps provide long-term memory for navigation and manipulation. Drift, loop closure and map consistency decide whether a robot can operate for hours or kilometers.",
 subs:[
 ["The SLAM problem","what makes it hard",[
  ["Localization vs. mapping vs. SLAM","Localization finds pose in a known map, mapping builds a map from known poses, SLAM does both. The coupling makes it hard."],
  ["Drift & accumulated error","Small motion errors grow without bound. Loop closure and global references correct them."],
  ["Front-end & back-end","Front-end extracts data associations from sensors; back-end optimizes the global estimate. A standard SLAM architecture."],
  ["Data association","Deciding whether observations refer to the same place or landmark. False matches can corrupt the map."],
  ["Dynamic environments","Moving objects break the static-world assumption. Systems filter or model them."],
  ["Kidnapped robot & relocalization","Recover pose when tracking is lost. Requires global place recognition."],
  ["Scale & computational limits","Keep maps and optimization bounded for long runs. Use keyframes and sparsification."]]],
 ["Visual & LiDAR SLAM","main approaches",[
  ["Feature-based visual SLAM (ORB-SLAM)","Track sparse keypoints across frames. Efficient and widely used."],
  ["Direct & semi-direct methods (LSD, DSO)","Use pixel intensities rather than features. Work in low-texture scenes."],
  ["Bundle adjustment","Jointly refine camera poses and 3D points by minimizing reprojection error. The gold-standard accuracy step."],
  ["LiDAR SLAM (LOAM, LIO-SAM)","Register LiDAR scans using edge and surface features, often with IMU. Accurate and robust outdoors."],
  ["RGB-D & stereo SLAM","Use depth directly for scale. Common for indoor robots."],
  ["Learned SLAM components","Neural features, depth and pose networks. Add robustness, with questions on generalization."],
  ["Neural implicit & Gaussian-splatting SLAM","Represent maps as neural fields or 3D Gaussians for dense, photorealistic reconstruction. Active research area."]]],
 ["Loop closure & optimization","fixing drift",[
  ["Place recognition","Recognize that the robot has returned to a previous place. Done with bag-of-words or learned descriptors."],
  ["Loop closure","Add a constraint between current and past poses when a place is revisited. The main drift-correcting mechanism."],
  ["Pose-graph optimization","Adjust all poses to satisfy odometry and loop constraints. Efficient and central to modern SLAM."],
  ["Robust back-ends & outlier rejection","Handle false loop closures with robust cost functions or consensus. Prevent catastrophic map warping."],
  ["Covisibility & keyframe graphs","Track which frames see the same things. Make optimization tractable."],
  ["Global registration & map merging","Align maps from different sessions or robots. Enables multi-robot mapping."],
  ["Consistency & map quality metrics","Evaluate trajectory error (ATE, RPE) and map accuracy. Standard SLAM evaluation."]]],
 ["Map representations","what a map stores",[
  ["Landmark & feature maps","Sparse sets of identified points. Compact and good for localization."],
  ["Occupancy grid maps","Cells labeled free, occupied or unknown. Standard for 2D navigation."],
  ["Voxel & TSDF maps","3D volumetric grids with surface distance. Used for 3D planning and reconstruction."],
  ["Point-cloud & mesh maps","Raw or surfaced 3D geometry. High detail at higher memory."],
  ["Topological & hybrid maps","Graphs of places and connections. Support large-scale navigation and reasoning."],
  ["Semantic & object-level maps","Include categories and instances. Allow task-driven queries like go to the kitchen."],
  ["Map maintenance & lifelong mapping","Update maps as the world changes. Required for long-term operation."]]],
 ["Localization in known maps","using what exists",[
  ["Monte Carlo localization (AMCL)","Particle filter localization against a map. The classic approach for indoor robots."],
  ["Scan matching to maps","Align current sensor data with a prior map. Gives precise pose when a map is available."],
  ["HD maps for driving","Centimeter-level maps of lanes and signs. Provide strong priors but need upkeep."],
  ["Visual localization","Estimate pose by matching images to a prior 3D model. Useful when GNSS is poor."],
  ["Map-less and map-light driving","Rely less on pre-built maps using online perception. Reduces maintenance burden."],
  ["Collaborative & multi-robot SLAM","Several robots share observations. Gains coverage and robustness."],
  ["Mapping in extreme environments","Underwater, underground and space settings with unusual sensing. Often need custom methods."]]]
 ]}
);
