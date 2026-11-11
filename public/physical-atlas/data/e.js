/* Band E — Edge, Real-Time & Assurance. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"E1",band:"E",name:"Edge & Embedded AI",sum:"Running neural networks on small, power-limited devices close to the sensor.",deps:["A2","B2"],
 overview:"Physical AI often cannot rely on the cloud. Models must run on devices with limited memory, compute, power and cooling, within strict latency. This region covers hardware targets, model compression, compilers and runtimes, TinyML on microcontrollers, and the discipline of meeting power and latency budgets.",
 why:"Edge constraints decide what is possible: a perception model that is accurate but too slow or hot is unusable. Compression and deployment engineering often matter more than another point of accuracy.",
 subs:[
 ["Edge hardware","where inference runs",[
  ["Microcontrollers (MCU)","Tiny low-power processors with kilobytes to megabytes of memory. Run very small models for always-on sensing."],
  ["Embedded GPUs (Jetson-class)","Compact GPU modules for robots and vehicles. Balance throughput with watts."],
  ["NPUs & AI accelerators","Dedicated neural-network chips in phones and embedded systems. Deliver high efficiency for supported operations."],
  ["FPGAs & custom silicon","Hardware tailored to a pipeline for minimal latency and power. Higher design effort."],
  ["Memory hierarchy & bandwidth","On-chip SRAM is fast and small; DRAM is large and slow. Data movement often costs more than arithmetic."],
  ["Thermal & power envelopes","Heat and battery limit sustained performance. Throttling can break real-time guarantees."],
  ["Edge vs. cloud tradeoffs","Latency, privacy, connectivity and cost favor the edge; capability and updates favor the cloud. Many systems split work."]]],
 ["Model compression","making networks small and fast",[
  ["Quantization (INT8, INT4)","Store and compute with fewer bits. Reduces memory and energy, with calibration to protect accuracy."],
  ["Quantization-aware training","Train with simulated low precision. Recovers accuracy at aggressive bit widths."],
  ["Pruning & structured sparsity","Remove weights or channels. Structured removal gives real speedups on common hardware."],
  ["Knowledge distillation","Train a small model to match a large one. Transfers capability into an edge-sized network."],
  ["Efficient architectures (MobileNet, EfficientNet-Lite, tiny transformers)","Designs with fewer operations per accuracy. Start from efficiency rather than compress later."],
  ["Neural architecture search for hardware","Search for networks that meet latency on a target device. Hardware-aware optimization."],
  ["Low-rank & weight sharing","Factorize or tie weights to shrink models. Complement other methods."]]],
 ["Compilers & runtimes","from model to machine code",[
  ["Inference runtimes (TensorRT, ONNX Runtime, TFLite, ExecuTorch)","Engines that execute optimized models on specific hardware. Provide fusion and precision selection."],
  ["Graph optimization & operator fusion","Merge operations to cut memory traffic. Typical speedups come from here."],
  ["Compilers (TVM, XLA, MLIR)","Generate code tailored to hardware. Aid portability across chips."],
  ["Operator support & fallbacks","Unsupported operations may fall back to slow CPU paths. Check coverage early."],
  ["Profiling & benchmarking on device","Measure latency, memory and energy on real hardware. Desktop numbers mislead."],
  ["Batching & pipelining on edge","Overlap sensing, preprocessing and inference. Raise throughput within latency limits."],
  ["Model formats & interchange (ONNX)","Portable model representations. Ease deployment."]]],
 ["TinyML","machine learning on tiny devices",[
  ["Keyword spotting & always-on sensing","Wake words and anomaly detection on microwatts. Canonical TinyML applications."],
  ["Sensor-level inference","Run models in or next to the sensor. Reduce data transmission."],
  ["Memory-constrained model design","Fit within kilobytes of RAM. Needs careful activation and buffer planning."],
  ["TensorFlow Lite Micro & similar frameworks","Lightweight runtimes for microcontrollers. Trade features for footprint."],
  ["On-device learning & adaptation","Update models locally. Limited by memory and energy."],
  ["Energy harvesting & battery life","Systems powered by small sources. Design for duty cycling."],
  ["Predictive maintenance on the edge","Detect machine faults from vibration or sound locally. A major industrial use."]]],
 ["Deployment & lifecycle at the edge","keeping fleets healthy",[
  ["Over-the-air updates","Push new models and software to devices remotely. Need rollback and signing."],
  ["Fleet monitoring & drift detection","Collect metrics from deployed devices. Reveal degradation."],
  ["Data collection & feedback loops","Select informative samples to send back. Constrained by bandwidth and privacy."],
  ["Federated & on-device learning","Train across devices without centralizing data. Adds complexity and privacy benefits."],
  ["Security of edge models","Protect weights and firmware from extraction and tampering. Hardware roots of trust help."],
  ["Disconnected & air-gapped operation","Run with no network, with controlled software transfer. Typical in defense and critical infrastructure."],
  ["Hardware diversity & versioning","Many device variants complicate testing. Maintain a support matrix."]]]
 ]},

{ref:"E2",band:"E",name:"Robotics Software & Real-Time Systems",sum:"The software platform that connects sensors, algorithms and actuators on time.",deps:["A2","E1"],
 overview:"An autonomous system is a distributed real-time software system. This region covers robotics middleware such as ROS 2, real-time operating systems and scheduling, timing and determinism, data logging and replay, and the engineering practices for integration and testing, including hardware in the loop.",
 why:"Many field failures are timing, integration or configuration problems, not algorithm bugs. Real-time behavior and good tooling determine whether a system is dependable and debuggable.",
 subs:[
 ["Middleware & frameworks","connecting components",[
  ["ROS 2","The dominant open robotics framework, using nodes that exchange messages over DDS. Provides tools, drivers and a large ecosystem."],
  ["Publish–subscribe messaging","Components publish topics and others subscribe. Decouples modules and simplifies reuse."],
  ["Services, actions & parameters","Request–reply calls, long-running goals with feedback, and configuration. The other communication patterns in ROS."],
  ["DDS & quality-of-service settings","The underlying data distribution layer with reliability and latency policies. Misconfigured QoS is a common cause of lost data."],
  ["Transform and time handling (tf2)","Manage coordinate frames over time. Central to correct sensing."],
  ["Launch systems & composition","Start and configure many nodes, optionally in one process. Affects startup and latency."],
  ["Alternatives (Zenoh, LCM, custom)","Other messaging systems chosen for performance or constraints. Consider integration cost."]]],
 ["Real-time computing","meeting deadlines",[
  ["Hard vs. soft real time","Hard deadlines must never be missed; soft ones degrade quality. Safety loops require hard guarantees."],
  ["Real-time operating systems (RTOS)","Operating systems with predictable scheduling (FreeRTOS, Zephyr, QNX, PREEMPT_RT Linux). Provide bounded latency."],
  ["Scheduling (rate-monotonic, EDF)","Algorithms assigning CPU time to tasks. Analysis shows if deadlines are met."],
  ["Latency, jitter & worst-case execution time","How long and how variable processing is. Worst case, not average, matters for safety."],
  ["Priority inversion & locking","A low-priority task blocking a high-priority one. A classic real-time pitfall."],
  ["Memory management in real-time code","Avoid dynamic allocation and page faults in control loops. Prevents unpredictable pauses."],
  ["Garbage collection & language choice","Managed runtimes can cause pauses. Safety-critical loops often use C, C++ or Rust."]]],
 ["Data, time & logging","knowing what happened",[
  ["Time synchronization","Common clocks across sensors and computers. Without it, fusion accuracy suffers."],
  ["Timestamping & latency budgets","Mark when data was measured and track delays through the pipeline. Required for correct estimation."],
  ["Data logging & rosbag","Record all messages for analysis and replay. The main debugging tool in robotics."],
  ["Replay & log-driven testing","Rerun software on recorded data. Reproduce field issues in the lab."],
  ["Telemetry & diagnostics","Stream health and performance data. Support monitoring of fleets."],
  ["Visualization tools (RViz, Foxglove)","Inspect sensor data and state graphically. Speed debugging."],
  ["Data volume & storage","High-rate sensors produce huge data. Plan storage and transfer."]]],
 ["Integration & testing","from components to system",[
  ["Unit, integration & system testing","Layered testing of software. Robotics adds hardware and environment complexity."],
  ["Hardware-in-the-loop (HIL)","Test real controllers against simulated sensors and plants. Catch timing and interface issues."],
  ["Software-in-the-loop & simulation CI","Run automated tests in simulation on every change. Prevent regressions."],
  ["Field testing & test ranges","Controlled real-world trials. Necessary but costly."],
  ["Configuration management & reproducible builds","Pin versions and parameters. Needed to reproduce behavior."],
  ["Containers & deployment on robots","Package software with dependencies. Ease updates, with real-time considerations."],
  ["Fault injection","Intentionally break sensors and links. Reveal weaknesses."]]],
 ["Reliability & safety software practices","dependable code",[
  ["Watchdogs & heartbeats","Detect hung processes and trigger recovery. Basic safety mechanism."],
  ["Fail-safe & fail-operational design","Move to a safe state on failure, or continue operating at reduced capability. Choice depends on the system."],
  ["Redundancy & failover","Duplicate critical components. Handle single-point failures."],
  ["Coding standards (MISRA, AUTOSAR)","Rules for safer C and C++ in embedded systems. Required in automotive and aerospace."],
  ["Memory-safe languages (Rust)","Prevent classes of bugs by construction. Growing in robotics."],
  ["Static analysis & formal methods in code","Tools to find defects before running. Support certification."],
  ["Security of robot software","Authenticate nodes and protect networks. Robots are cyber-physical targets."]]]
 ]},

{ref:"E3",band:"E",name:"Safety-Critical Assurance",sum:"Showing that autonomous systems are safe enough, with evidence a regulator or customer will accept.",deps:["A3","D3","E2"],
 overview:"When machines act in the physical world, failures can injure people or destroy property. Assurance is the discipline of identifying hazards, designing for safety, and building an argument supported by evidence that the system is acceptably safe. This region covers hazard analysis, functional safety standards, assurance of learned components, runtime monitoring, formal methods, and certification and test and evaluation.",
 why:"Learned perception and decision components do not fit traditional safety methods, which assume specified behavior and testable code. Assurance of AI-enabled systems is a major open challenge and a differentiating skill for defense, aviation and automotive work.",
 subs:[
 ["Hazard analysis & risk","finding what can go wrong",[
  ["Hazard identification & risk assessment","Systematically list ways the system can cause harm and rate severity and likelihood. The starting point of safety engineering."],
  ["FMEA & fault tree analysis","Methods tracing component failures to system effects and the causes of an undesired event. Standard in aerospace and automotive."],
  ["STPA (system-theoretic process analysis)","Hazard analysis focused on unsafe control actions and interactions, not only failures. Suits software-intensive systems."],
  ["Safety requirements & safety goals","Derive testable requirements from hazards. Link design to risk."],
  ["Operational design domain & scenarios","Define conditions of use and the situations to handle. Boundaries for the safety argument."],
  ["Residual risk & ALARP","Reduce risk as low as reasonably practicable and accept what remains explicitly. A common regulatory principle."],
  ["Human factors hazards","Misuse, mode confusion and over-trust. Often the largest source of harm."]]],
 ["Standards & certification","the rulebooks",[
  ["ISO 26262 (automotive functional safety)","Process and safety integrity levels for road vehicle electronics. Defines ASIL ratings."],
  ["SOTIF (ISO 21448)","Safety of the intended functionality: hazards from limitations of perception and planning even without faults. Directly relevant to AI."],
  ["UL 4600","Standard for safety cases of autonomous products. Emphasizes evidence and argument."],
  ["DO-178C & DO-254 (aviation)","Software and hardware assurance for airborne systems. Rigorous, process-heavy certification."],
  ["IEC 61508 & industrial safety","Generic functional safety standard and its derivatives. Used in industry and robots (ISO 10218, ISO 13482)."],
  ["Military standards & test authorities","Defense programs follow system safety standards such as MIL-STD-882 and service-specific review. Include test and evaluation."],
  ["Aviation guidance on machine learning (EASA, FAA)","Emerging frameworks for certifying learned components. Still developing."]]],
 ["Assurance of learned components","the AI problem",[
  ["Specification of learned behavior","Define what a neural component must do. Hard because requirements are implicit in data."],
  ["Data as a safety artifact","Training and test data coverage and quality become evidence. Requires documentation and control."],
  ["Robustness & out-of-distribution detection","Show behavior under shift and detect when inputs are unfamiliar. Essential for bounded operation."],
  ["Uncertainty estimation for safety","Calibrated confidence usable by downstream logic. Gate decisions on it."],
  ["Neural network verification","Formal methods proving properties of networks over input regions. Scales to limited sizes and properties."],
  ["Explainability & interpretability for assurance","Understand why a model acts. Supports review but does not prove safety."],
  ["Learning-enabled component monitoring","Wrap learned parts with checks. Limits harm if they fail."]]],
 ["Runtime safety & verification","guarding behavior while operating",[
  ["Runtime monitoring & assurance","Check at runtime that behavior stays within safe bounds. Triggers fallback."],
  ["Safety envelopes & shielding","Filter commands so they never violate safety constraints. Allows use of unverified planners."],
  ["Control barrier functions","Mathematical guarantees keeping the state in a safe set. Used to constrain learned controllers."],
  ["Simplex architecture","A verified simple controller backs up a complex one, taking over if needed. A classic safety pattern."],
  ["Responsibility-sensitive safety & rule-based checkers","Formal models of safe driving behavior used as a check. Provide interpretable limits."],
  ["Formal verification & model checking","Prove properties of designs and code. Strong but limited scale."],
  ["Reachability analysis","Compute the states a system can reach under uncertainty. Used to verify safety."]]],
 ["Test, evaluation & safety cases","building the argument",[
  ["Safety case","A structured argument, backed by evidence, that a system is acceptably safe for a context. The deliverable regulators review."],
  ["Goal structuring notation (GSN)","A diagram notation for safety arguments. Make logic explicit."],
  ["Scenario-based & simulation testing","Evaluate behavior across defined situations, in simulation and in the field. Supply coverage evidence."],
  ["Test and evaluation of autonomy (DoD T&E)","Programs demonstrating performance and safety of autonomous systems. Adapt to learned and adaptive behavior."],
  ["Statistical evidence & mileage claims","Limits of proving safety by driving distance alone. Rare events need many samples."],
  ["Continuous assurance & monitoring in operation","Collect field data, investigate incidents and update the case. Safety is maintained over time."],
  ["Cybersecurity as safety enabler","A compromised system is unsafe. Link security and safety processes."],
  ["Regulation & policy (DoD Directive 3000.09, EU AI Act)","Rules on autonomy in weapons and high-risk AI systems. Define human control and review obligations."]]]
 ]}
);
