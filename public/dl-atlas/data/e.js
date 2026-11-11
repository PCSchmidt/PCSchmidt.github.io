/* Band E — Practice & Understanding. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"E1",band:"E",name:"Training Practice & Tooling",sum:"How deep learning projects are actually run, debugged and reproduced.",deps:["A2","A3"],
 overview:"Success in deep learning depends as much on disciplined practice as on theory. This region covers setting up experiments, tuning hyperparameters, debugging failing runs, building data pipelines, using the major frameworks, and keeping results reproducible.",
 why:"Most lost time in deep learning comes from silent bugs, poorly controlled experiments and unreliable pipelines. A systematic routine finds problems early and makes results trustworthy.",
 subs:[
 ["Experiment design","running trustworthy experiments",[
  ["Baselines first","Begin with a simple, known-good model before anything complex. Gives a reference for whether changes help."],
  ["One change at a time","Vary a single factor per comparison. Otherwise gains cannot be attributed."],
  ["Train/validation/test discipline","Tune on validation and touch the test set once. Prevents optimistic reporting."],
  ["Metric choice","Pick metrics that reflect the real objective, not only the loss. Accuracy can mislead on imbalanced data."],
  ["Statistical comparison across seeds","Run multiple seeds and report spread. Differences smaller than seed noise are not evidence."],
  ["Ablations","Remove parts to see what matters. A staple of credible papers and internal reviews."],
  ["Experiment tracking","Record code, data, config and results per run with tools such as MLflow or Weights & Biases. Makes work reproducible and comparable."]]],
 ["Hyperparameter tuning","finding good settings",[
  ["Grid vs. random search","Random search covers important dimensions better than grids for the same budget. A strong simple default."],
  ["Bayesian optimization","Model the objective and pick promising settings. Efficient when runs are expensive."],
  ["Early stopping & successive halving","Drop poor trials quickly and give resources to promising ones. Hyperband and ASHA do this."],
  ["Learning rate first","The most sensitive hyperparameter, usually tuned before others. Then batch size, weight decay and schedule."],
  ["Population-based training","Evolve hyperparameters during training. Adapts schedules automatically."],
  ["Tuning budget & diminishing returns","Beyond some point more tuning adds little. Better data or model changes matter more."],
  ["Scaling-aware tuning","Tune small and transfer to large with principled parameterizations. Saves compute on big runs."]]],
 ["Debugging deep networks","when it does not work",[
  ["Overfit a tiny batch","A network should reach near-zero loss on a handful of examples. Failure signals a bug."],
  ["Check shapes, dtypes & data","Many failures come from wrong labels, broadcasting or preprocessing. Inspect inputs and outputs directly."],
  ["Loss at initialization","Initial loss should match chance level, such as the log of the class count. A quick check of the pipeline."],
  ["Gradient and activation statistics","Look for zero, exploding or NaN values by layer. Pinpoint where signals break."],
  ["Update-to-weight ratio","Typical updates are about a thousandth of weight size. Large deviations suggest a bad learning rate."],
  ["Data leaks & label errors","Perfect validation scores often mean leakage. Inspect misclassified examples for noisy labels."],
  ["Reproducing known results","Match a published number on a standard setup before changing it. Separates your bug from the method."],
  ["NaNs and numerical issues","Caused by overflow, division by zero or bad data. Fixed with clipping, stable losses and precision care."]]],
 ["Data pipelines & frameworks","the engineering around the model",[
  ["PyTorch","Dynamic-graph framework dominant in research. Easy to debug and flexible."],
  ["JAX","Functional framework with composable transformations and compilation. Favored for large-scale and scientific work."],
  ["TensorFlow & Keras","Earlier dominant framework and its high-level API. Still used in production systems."],
  ["Data loading & preprocessing","Efficient loading keeps accelerators busy. Common bottleneck when ignored."],
  ["Datasets, shuffling & sharding","Streaming large data in random order across workers. Poor shuffling biases training."],
  ["Hugging Face ecosystem","Libraries and hubs for models, datasets and training. Shortens the path from idea to working system."],
  ["Compilation & graph optimization","torch.compile, XLA and similar tools fuse operations for speed. Large gains for little code change."]]],
 ["Reproducibility & hygiene","results others can trust",[
  ["Seeds & determinism","Setting random seeds and understanding non-deterministic kernels. Exact repeatability is often hard on GPUs."],
  ["Version control for code, data & models","Track everything needed to rebuild a result. Includes DVC or similar for data."],
  ["Configuration management","Keep settings in files rather than scattered in code. Enables sweeps and audits."],
  ["Environments & containers","Pin library versions with Docker or lockfiles. Prevents silent behavior changes."],
  ["Documentation & model cards","Record intent, data and limits. Helps future users and reviewers."],
  ["Compute budgeting","Estimate time and cost before launching. Avoids runs that cannot finish."],
  ["Negative results & failure logs","Record what did not work. Saves repeating experiments."]]]
 ]},

{ref:"E2",band:"E",name:"Efficiency & Deployment",sum:"Making models small, fast and cheap enough to run where they are needed.",deps:["B3","D1"],
 overview:"A model that cannot be served within latency, memory and cost limits is not useful. This region covers compression through quantization, pruning and distillation, speedups for inference, compilers and kernels, and deployment from servers to phones and embedded devices.",
 why:"Inference is where most deep learning cost accumulates. Efficiency techniques decide whether a model fits on a phone, runs in real time on a robot or is affordable at scale.",
 subs:[
 ["Quantization","fewer bits per number",[
  ["Post-training quantization","Convert trained weights to lower precision such as 8-bit without retraining. Quick and often nearly lossless."],
  ["Quantization-aware training","Simulate low precision during training so the model adapts. Preserves accuracy at very low bit widths."],
  ["Weight-only & activation quantization","Quantizing just weights saves memory; quantizing activations too speeds up arithmetic. Each has different accuracy risks."],
  ["INT8, FP8 & 4-bit formats","Common low-precision formats. 4-bit methods like GPTQ and AWQ shrink language models for single-GPU serving."],
  ["Outliers & calibration","A few large values dominate error in quantization. Calibration data and special handling control the damage."],
  ["Mixed precision inference","Keep sensitive layers at higher precision. Balances accuracy and speed."],
  ["Hardware support for low precision","Speedups depend on chips supporting the format. Match method to hardware."]]],
 ["Pruning & sparsity","removing what is not needed",[
  ["Unstructured pruning","Remove individual weights with small magnitude. High sparsity but hard to speed up on standard hardware."],
  ["Structured pruning","Remove whole channels, heads or layers. Gives real speedups on ordinary hardware."],
  ["Magnitude & movement pruning","Score weights by size or by how they change in training. Simple criteria that work well."],
  ["N:M sparsity","A fixed pattern, like two of every four weights, supported by some GPUs. A hardware-friendly compromise."],
  ["Lottery tickets & retraining","Prune then fine-tune to recover accuracy. Standard pipeline."],
  ["Dynamic & activation sparsity","Skip computation depending on the input. Used in mixture-of-experts and some inference methods."],
  ["Architecture-level efficiency","Design smaller models from the start. Often better than compressing a large one."]]],
 ["Inference speedups for LLMs","serving language models",[
  ["KV cache management","Reuse past keys and values and manage their memory. Paged caching improves capacity and throughput."],
  ["Continuous batching","Add and finish requests dynamically in a batch. Raises throughput for serving."],
  ["Speculative decoding","A small model drafts tokens and the large model verifies. Faster generation with identical output."],
  ["Prefill vs. decode phases","Processing the prompt is compute-bound while generating tokens is memory-bound. Systems optimize each separately."],
  ["Prefix caching","Reuse computation for shared prompt beginnings. Saves cost for repeated system prompts."],
  ["Serving frameworks (vLLM, TensorRT-LLM)","Engines that combine these techniques. Determine real-world throughput."],
  ["Cost per token & latency metrics","Time to first token, tokens per second and dollars per million tokens. The numbers that drive deployment decisions."]]],
 ["Compilers, kernels & hardware","closer to the metal",[
  ["Operator fusion","Combine several operations into one kernel to avoid memory traffic. Key to speed on GPUs."],
  ["GPU memory hierarchy","Registers, shared memory and global memory differ greatly in speed. Efficient kernels exploit this."],
  ["Triton & CUDA kernels","Write custom GPU code for critical operations. FlashAttention is a famous example."],
  ["XLA, TVM & graph compilers","Compile models into optimized code for specific hardware. Provide portability and speed."],
  ["Roofline model","Compare performance against compute and memory limits. Shows whether a workload is compute- or memory-bound."],
  ["Accelerators beyond GPUs","TPUs, NPUs and custom inference chips. Specialized for tensor operations."],
  ["ONNX & model interchange","A common format to move models between frameworks and runtimes. Eases deployment."]]],
 ["Deployment targets","where models run",[
  ["Cloud serving & autoscaling","Run models behind APIs that scale with demand. Balance cost and latency."],
  ["Edge & on-device inference","Run on phones, cameras and vehicles. Needs small models, low power and offline operation."],
  ["TinyML & microcontrollers","Models in kilobytes on very small devices. Used for always-on sensing."],
  ["Latency, throughput & real-time constraints","Systems such as robots have hard deadlines. Worst-case, not average, latency matters."],
  ["Monitoring & model updates","Track drift, errors and cost, and roll out new versions safely. Includes canary and shadow deployment."],
  ["Privacy & on-device processing","Keeping data local reduces exposure. A reason to prefer edge deployment."],
  ["Air-gapped & restricted environments","Deploy without internet access, with controlled model transfer. Common in government and defense settings."]]]
 ]},

{ref:"E3",band:"E",name:"Interpretability, Robustness & Theory",sum:"Understanding what networks learn, how they fail, and why they work at all.",deps:["A1","C1","D1"],
 overview:"Deep networks are powerful but opaque and sometimes brittle. This region covers methods for explaining behavior and opening the model up, the study of adversarial and distribution-shift failures, uncertainty and calibration, and the theory that tries to explain why deep learning works.",
 why:"Trust, safety and debugging depend on understanding failures. Theory and interpretability also guide design, and they are the area where careful skeptical reading of claims is most needed.",
 subs:[
 ["Explaining predictions","post-hoc methods",[
  ["Saliency & gradient attribution","Use the gradient of an output with respect to the input to highlight influential features. Cheap but noisy."],
  ["Integrated gradients","Accumulate gradients along a path from a baseline to the input. Satisfies useful attribution axioms."],
  ["Grad-CAM","Combine gradients and feature maps to highlight image regions. A common vision explanation."],
  ["SHAP & LIME","Model-agnostic methods that fit local approximations or Shapley values. Widely used but sensitive to settings."],
  ["Counterfactual explanations","Show the smallest change that would alter the outcome. Actionable for decisions about people."],
  ["Sanity checks for explanations","Some methods are insensitive to the model's weights. Test that explanations actually depend on the model."],
  ["Concept-based explanations (TCAV)","Explain in terms of human concepts rather than pixels. Closer to how people reason."]]],
 ["Mechanistic interpretability","reverse-engineering the network",[
  ["Features & circuits","Aim to find the internal features and the connections that implement behaviors. Treats the network as a program to understand."],
  ["Probing","Train simple classifiers on hidden states to test what information is present. Shows presence, not use."],
  ["Superposition","Networks pack more features than dimensions by overlapping them. Makes individual neurons hard to interpret."],
  ["Sparse autoencoders","Learn a larger, sparse set of features from activations. A leading way to find interpretable directions."],
  ["Activation patching & causal tracing","Replace activations to see which are causally responsible. Establishes which components matter."],
  ["Induction heads & in-context learning","Attention circuits that copy patterns from earlier in the context. An early well-understood mechanism."],
  ["Steering & representation engineering","Add vectors to activations to change behavior. Tests understanding and gives control."]]],
 ["Robustness & failure modes","where models break",[
  ["Adversarial examples","Tiny crafted perturbations that flip a prediction. Reveal how models depend on non-robust features."],
  ["Adversarial training","Train on worst-case perturbations. The main empirical defense, at a cost to accuracy and compute."],
  ["Distribution shift & domain generalization","Performance drops when test data differ from training. The central practical robustness issue."],
  ["Spurious correlations & shortcut learning","Models rely on easy cues like backgrounds. Group-robust training and data fixes help."],
  ["Out-of-distribution detection","Recognize inputs unlike the training data. Allows abstaining or escalating."],
  ["Backdoors & data poisoning","Hidden triggers inserted through training data. A security risk for models trained on untrusted data."],
  ["Jailbreaks & prompt injection","Inputs that bypass a language model's safeguards. An ongoing arms race."],
  ["Robustness benchmarks","Corrupted and shifted test sets such as ImageNet-C. Measure resilience beyond clean accuracy."]]],
 ["Uncertainty & calibration","knowing what you don't know",[
  ["Calibration","Predicted confidence should match accuracy. Modern networks are often overconfident."],
  ["Temperature scaling","Rescale logits on validation data to fix confidence. A simple and effective post-hoc fix."],
  ["Deep ensembles","Train several models and combine predictions. A strong, simple uncertainty method."],
  ["MC dropout & Bayesian neural networks","Approximate parameter uncertainty by sampling. Cheaper approximations of full Bayesian inference."],
  ["Conformal prediction","Wrap any model to output sets with guaranteed coverage. Distribution-free and practical."],
  ["Aleatoric vs. epistemic uncertainty","Noise in the data versus lack of knowledge. Only epistemic uncertainty shrinks with more data."],
  ["Selective prediction & abstention","Let the model decline when unsure. Trades coverage for reliability."]]],
 ["Theory of deep learning","why it works",[
  ["Expressivity & depth separation","Some functions need far fewer units with depth. Explains the value of depth."],
  ["Neural tangent kernel & lazy training","In the infinite-width limit, training behaves like a kernel method. A tractable but incomplete picture."],
  ["Feature learning & mean-field limits","Regimes where networks genuinely change their representations. Closer to practice than the kernel regime."],
  ["Implicit regularization","Training dynamics select simple solutions among many. Part of how overparameterized models generalize."],
  ["Grokking","Delayed generalization long after training accuracy is perfect. Illuminates phase transitions in learning."],
  ["Scaling laws theory","Models of why loss follows power laws. Connects data, capacity and task structure."],
  ["Open problems","Why large models generalize, what limits reasoning and how to guarantee safety. Many answers remain empirical."]]]
 ]}
);
