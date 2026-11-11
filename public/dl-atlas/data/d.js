/* Band D — Scale & Adaptation. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"D1",band:"D",name:"Scaling & Pretraining",sum:"Training very large models on very large datasets, and what predicts the result.",deps:["B3","A2"],
 overview:"Frontier models owe much of their ability to scale: more parameters, more data and more compute. This region covers scaling laws, how pretraining data is collected and curated, the training recipe for large models, and the distributed systems needed to run it.",
 why:"Scaling laws let teams predict performance and budget compute before committing to a run. Data quality and curation often matter as much as size, and the engineering of distributed training determines what is feasible.",
 subs:[
 ["Scaling laws","predictable improvement",[
  ["Power-law scaling","Loss falls smoothly as a power of parameters, data or compute over many orders of magnitude. Makes large runs forecastable from small ones."],
  ["Compute-optimal training (Chinchilla)","For a fixed compute budget there is a best balance of model size and training tokens. Showed many early large models were undertrained."],
  ["Overtraining for inference cost","Train a smaller model on more tokens than compute-optimal so it is cheaper to serve. Common when many queries will be answered."],
  ["Emergent abilities","Skills that seem to appear suddenly at a certain scale. Debated, partly attributable to how metrics are chosen."],
  ["Scaling of data & repeated epochs","Returns from repeating data diminish. Limits scaling when high-quality text runs short."],
  ["Hyperparameter transfer (μP)","Parameterizations in which good settings carry across model sizes. Allow tuning small and scaling up."],
  ["Limits & the data wall","Finite high-quality data and compute costs bound scaling. Motivate synthetic data and efficiency work."]]],
 ["Pretraining data","what the model reads",[
  ["Web-scale corpora","Large crawls such as Common Crawl, filtered for quality. The raw material for language models."],
  ["Data filtering & quality classifiers","Remove spam, boilerplate and low-quality pages, often with a trained classifier. Quality filtering strongly improves results."],
  ["Deduplication","Remove repeated documents and passages. Reduces memorization and wasted compute."],
  ["Data mixtures & domain weighting","Choose the proportions of code, books, web and other sources. Mixture has a large effect on abilities."],
  ["Curriculum & annealing on high-quality data","Order data or finish training on cleaner sources. A late-stage boost to quality."],
  ["Contamination","Test-set content leaking into training data. Inflates benchmark scores."],
  ["Licensing, privacy & provenance","Legal and ethical status of training data. Increasingly shapes what can be used."],
  ["Synthetic pretraining data","Model-generated text used for training. Can add reasoning and coverage but risks compounding errors."]]],
 ["Large-model training recipe","putting it together",[
  ["Tokenizer design","Vocabulary and splitting rules for text. Affects efficiency, multilingual coverage and numeric handling."],
  ["Training objective & loss masking","Next-token prediction with careful handling of padding and special tokens. Small details change results."],
  ["Batch size & learning-rate schedule at scale","Large global batches with warmup and decay. Tuned together because they interact."],
  ["Stability practices","Gradient clipping, z-loss, careful initialization and monitoring for spikes. Prevent wasted weeks of compute."],
  ["Checkpointing & restarts","Frequent saved state to recover from failures. Hardware faults are routine at scale."],
  ["Continued & multi-stage pretraining","Extend context or add domains after the main run. Cheaper than starting over."],
  ["Evaluation during training","Track benchmarks and held-out loss over the run. Guide decisions and detect problems early."]]],
 ["Distributed training","spreading the work",[
  ["Data parallelism","Replicate the model and split the batch across devices, averaging gradients. The simplest way to scale."],
  ["Tensor parallelism","Split individual matrices across devices. Needed when a layer is too big for one device."],
  ["Pipeline parallelism","Place consecutive layers on different devices and stream micro-batches through. Reduces memory but creates idle bubbles."],
  ["Sharded data parallelism (ZeRO, FSDP)","Shard optimizer state, gradients and parameters across devices. Lets very large models train with limited memory per device."],
  ["Expert & sequence parallelism","Distribute mixture-of-experts layers or long sequences. Extend scaling to special architectures."],
  ["Communication & interconnects","Gradient synchronization depends on network speed. Overlapping communication with compute keeps hardware busy."],
  ["Fault tolerance & utilization (MFU)","Model FLOPs utilization measures how much hardware capacity does useful work. A key efficiency indicator for large runs."]]]
 ]},

{ref:"D2",band:"D",name:"Adaptation & Alignment",sum:"Turning a pretrained model into one that does a specific job and behaves as intended.",deps:["C1","D1"],
 overview:"A pretrained model is a starting point. This region covers transfer and fine-tuning, parameter-efficient methods, instruction tuning and preference-based alignment, distillation, and the use of prompts and in-context examples to steer a model without changing its weights.",
 why:"Most real applications adapt an existing model instead of training from scratch. Choosing among prompting, retrieval, light fine-tuning and full fine-tuning is a central engineering decision.",
 subs:[
 ["Transfer & fine-tuning","reusing what was learned",[
  ["Transfer learning","Apply knowledge from a source task to a target task. The reason pretraining pays off."],
  ["Full fine-tuning","Update all parameters on task data. Most flexible and most expensive, and can cause forgetting."],
  ["Feature extraction & linear probing","Freeze the model and train a small head. Cheap and robust with little data."],
  ["Catastrophic forgetting","Learning a new task erases earlier abilities. Mitigated by low learning rates, replay and parameter-efficient methods."],
  ["Domain adaptation","Adjust a model for a new data distribution. Handles shifts like moving from news to medical text."],
  ["Continual learning","Learn a sequence of tasks without forgetting. An open problem with partial solutions."],
  ["Model merging","Combine weights of models fine-tuned on different tasks. A cheap way to blend abilities."]]],
 ["Parameter-efficient fine-tuning","small changes, big effects",[
  ["LoRA","Learn low-rank updates to weight matrices while freezing the original. Greatly reduces trainable parameters and memory."],
  ["QLoRA","Combine LoRA with a quantized base model. Lets large models be tuned on a single GPU."],
  ["Adapters","Insert small trainable modules between layers. An earlier parameter-efficient approach."],
  ["Prefix, prompt & P-tuning","Learn continuous vectors prepended to inputs or layers. Adapt behavior with very few parameters."],
  ["BitFit & selective tuning","Train only certain parameters such as biases. Minimal changes for simple adaptations."],
  ["Serving many adapters","Swap small adapters on one shared base model. Makes per-customer customization cheap."],
  ["When to fine-tune vs. prompt vs. retrieve","Prompting is fastest, retrieval adds fresh knowledge, and fine-tuning changes style and skills. The three are often combined."]]],
 ["Instruction tuning & alignment","making models helpful and safe",[
  ["Supervised fine-tuning on instructions","Train on prompt–response pairs so the model follows directions. Converts a text predictor into an assistant."],
  ["Reinforcement learning from human feedback","Train a reward model from human preferences and optimize the model against it. The method that made chat assistants usable."],
  ["Reward models","Networks scoring responses by preference. Their flaws can be exploited by the policy."],
  ["PPO for language models","A policy-gradient algorithm with a KL penalty keeping the model near its starting point. The classic RLHF optimizer."],
  ["DPO & preference optimization","Optimize directly on preference pairs without a separate reward model. Simpler and more stable."],
  ["Constitutional AI & AI feedback","Use written principles and model-generated critiques to supply feedback. Scales alignment beyond human labels."],
  ["RL with verifiable rewards","Train on tasks with automatic checks, like math or code. Produces strong reasoning behavior."],
  ["Reward hacking & sycophancy","Models exploit the reward or flatter the user. Central alignment failure modes."]]],
 ["Distillation & compression via teaching","learning from a larger model",[
  ["Knowledge distillation","Train a small student to match a larger teacher's outputs. Transfers much of the capability at lower cost."],
  ["Soft labels & temperature","The teacher's probability distribution carries more information than hard labels. Temperature controls how much."],
  ["Distilling reasoning","Train smaller models on the reasoning traces of a stronger one. Produces capable compact reasoners."],
  ["Self-distillation & born-again networks","A model teaches a copy of itself. Often yields small gains."],
  ["Synthetic data from teachers","Generate training data with a strong model. Common but inherits the teacher's errors and licensing constraints."],
  ["On-policy distillation","Train the student on its own samples scored by the teacher. Reduces the mismatch between training and use."]]],
 ["Prompting & in-context learning","steering without training",[
  ["Prompting","Specify the task in text. The cheapest way to adapt a general model."],
  ["In-context learning","The model picks up a task from examples in its prompt without weight updates. A striking ability of large models."],
  ["Few-shot & zero-shot","With a few examples or none. Measure how general a model's abilities are."],
  ["Chain-of-thought","Ask the model to reason step by step before answering. Improves accuracy on multi-step problems."],
  ["Test-time compute & reasoning models","Spend more computation at inference by generating long reasoning or sampling many answers. Trades latency and cost for accuracy."],
  ["Retrieval-augmented generation","Fetch relevant documents and add them to the prompt. Supplies fresh and private knowledge."],
  ["Prompt sensitivity","Small wording changes can shift results. Evaluation must test several phrasings."]]]
 ]},

{ref:"D3",band:"D",name:"Multimodal & Foundation Models",sum:"General-purpose models that connect language, images, audio, video and action.",deps:["B3","C1","C2"],
 overview:"Foundation models are large, broadly pretrained systems adapted to many tasks. This region covers how vision and language are joined, how models handle audio and video, the architectures that unify modalities, and the extension of these ideas to world models and embodied action.",
 why:"The frontier is increasingly multimodal. Knowing how modalities are tokenized, aligned and combined explains capabilities and failures of current assistants and points toward robotics and agents.",
 subs:[
 ["Vision–language models","seeing and describing",[
  ["CLIP & contrastive alignment","Train image and text encoders to share an embedding space. Enables zero-shot classification and retrieval."],
  ["Image captioning & visual question answering","Generate text about an image or answer questions. Core tasks for vision-language systems."],
  ["Visual instruction tuning (LLaVA-style)","Connect a vision encoder to a language model and tune on image–instruction data. A common recipe for multimodal assistants."],
  ["Projectors & cross-attention fusion","Ways to map image features into a language model. Choices trade efficiency and detail."],
  ["Resolution & token budgets","Images become many tokens, so resolution and cost trade off. Tiling and compression address it."],
  ["Grounding & open-vocabulary detection","Locate objects named in text. Connects language to image regions."],
  ["Document & chart understanding","Read text, tables and figures in pages. A major practical application."]]],
 ["Audio, speech & video","time-based media",[
  ["Speech recognition (Whisper-style)","Large weakly supervised transformers for transcription and translation. Robust across accents and noise."],
  ["Text-to-speech & voice models","Generate natural speech, including cloning. Raises impersonation concerns."],
  ["Audio tokenization & codecs","Compress audio to discrete tokens a language model can handle. Basis of music and speech generation."],
  ["Video understanding","Combine frame features across time. Long video is costly because of token counts."],
  ["Video generation","Diffusion transformers producing coherent motion. Quality and temporal consistency are central challenges."],
  ["Spatiotemporal tokens","Patches in space and time as transformer inputs. Unify images and video."],
  ["Real-time & streaming models","Low-latency conversation across voice and vision. Need architectures designed for continuous input."]]],
 ["Unified & any-to-any models","one model, many modalities",[
  ["Native multimodal pretraining","Train on text, images and audio together from the start. Often stronger than bolting encoders onto a language model."],
  ["Shared token spaces","Represent all modalities as tokens in one sequence. Allow a single transformer to read and write them."],
  ["Mixture-of-modality experts","Specialized pathways for different modalities within one model. Balance sharing and specialization."],
  ["Interleaved data","Documents mixing text and images in order. A natural format for pretraining."],
  ["Modality gaps & hallucination","Models may describe what is not in an image. A reliability issue unique to multimodal systems."],
  ["Multimodal evaluation","Benchmarks for perception, reasoning and grounding. Often saturate or leak, so careful design matters."],
  ["Tool use with multimodal input","Combine seeing a screen with taking actions. The basis of computer-use agents."]]],
 ["World models & embodiment","models that predict and act",[
  ["World models","Learn to predict how an environment evolves given actions. Enable planning and imagination."],
  ["Video prediction as simulation","Generative video as a learned simulator. Promising and still imperfect on physics."],
  ["Vision-language-action models","Map images and instructions to robot actions. Aim at general-purpose robot control."],
  ["Imitation & behavior cloning at scale","Learn policies from large sets of demonstrations. Data collection is the bottleneck."],
  ["Sim-to-real transfer","Train in simulation and deploy on hardware. Domain randomization bridges the gap."],
  ["Latent-space prediction (JEPA, Dreamer)","Predict in compact representations rather than pixels. More efficient for planning."],
  ["Embodied reasoning & planning","Combine language-model reasoning with perception and control. An active research frontier."]]],
 ["Foundation model concepts","the big picture",[
  ["Foundation model","A broadly trained model adapted to many downstream tasks. Defined by reuse, not size alone."],
  ["Emergent behavior & generalist models","Abilities not explicitly trained for. Evaluate carefully since apparent emergence can reflect metrics."],
  ["Open vs. closed weights","Availability of model weights shapes research, safety and deployment. Open models enable customization and scrutiny."],
  ["Model cards & documentation","Describing data, training and limits. A basic practice for accountable release."],
  ["Compute and energy costs","Training and serving carry real environmental and financial costs. Efficiency work reduces both."],
  ["Homogenization risk","Many systems depending on a few base models share its flaws. A systemic concern."],
  ["Benchmarks & saturation","Tests lose value as models improve or leak. Evaluation must keep evolving."]]]
 ]}
);
