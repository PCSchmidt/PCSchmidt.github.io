/* Band C — Learning Paradigms. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"C1",band:"C",name:"Representation & Self-Supervised Learning",sum:"Learning useful features from data without labels.",deps:["B1","B3"],
 overview:"Labels are expensive, but raw data is plentiful. Self-supervised learning builds a task from the data itself, such as predicting masked parts or matching augmented views, so a network learns reusable representations. This region covers embeddings, contrastive and predictive objectives, masked modeling, and how representations are evaluated.",
 why:"Pretrained representations are the foundation of modern AI: most systems start from a model trained this way. Understanding what makes a representation good guides pretraining choices and downstream transfer.",
 subs:[
 ["Embeddings & representations","vectors that carry meaning",[
  ["Embeddings","Dense vectors representing words, images or items so similar things lie close together. The universal interface between data and neural models."],
  ["Word2Vec & GloVe","Early methods learning word vectors from co-occurrence. Showed that vector arithmetic can capture analogies."],
  ["Contextual embeddings","Representations depending on surrounding context rather than fixed per word. Introduced by ELMo and standard in transformers."],
  ["Latent space","The space where learned representations live. Its geometry determines what similarity and interpolation mean."],
  ["Disentanglement","Representations where separate factors of variation align with separate dimensions. Appealing for control but hard to guarantee."],
  ["Dimensionality & anisotropy","Learned spaces often use few dimensions or cluster in a narrow cone. Affects similarity search and quality."],
  ["Nearest-neighbor search & vector indexes","Finding close embeddings quickly with approximate methods. Powers retrieval, recommendation and deduplication."]]],
 ["Contrastive learning","learning by comparison",[
  ["Contrastive objective","Pull representations of related pairs together and push unrelated ones apart. Needs no labels, only a notion of related."],
  ["InfoNCE","A loss that identifies the true partner among many negatives. Connects to a lower bound on mutual information."],
  ["SimCLR & MoCo","Contrast two augmented views of the same image against others. Showed self-supervised vision can rival supervised pretraining."],
  ["CLIP-style image–text contrast","Match images with captions across a large batch. Learns a shared space for vision and language."],
  ["Hard negatives & batch size","Informative negatives improve learning, and many methods need large batches. A practical cost of contrastive training."],
  ["Triplet & metric learning","Learn distances so same-class items are closer. Used in face recognition and retrieval."],
  ["Augmentation choice","The augmentations define what the model learns to ignore. Poor choices remove useful signal."]]],
 ["Non-contrastive & predictive methods","avoiding negatives",[
  ["BYOL & SimSiam","Learn by predicting one view's representation from another without negatives. Avoid collapse with architectural asymmetry."],
  ["Representation collapse","All inputs mapping to the same output, a trivial solution. Different methods prevent it by contrast, asymmetry or regularization."],
  ["Barlow Twins & VICReg","Decorrelate and keep variance in feature dimensions. Prevent collapse by redundancy reduction."],
  ["DINO & self-distillation","A student matches a slowly updated teacher on different views. Produces strong, segmentation-aware vision features."],
  ["JEPA (joint-embedding predictive architectures)","Predict the representation of a hidden part from a visible part, not the raw pixels. Aims to learn abstract structure and ignore unpredictable detail."],
  ["Clustering-based methods (SwAV)","Assign views to learned clusters and predict them across views. Scale well without huge batches."],
  ["Predictive coding","Learning by predicting upcoming or missing input. A theme linking many self-supervised methods."]]],
 ["Masked & autoregressive pretraining","predicting parts of the data",[
  ["Masked language modeling","Hide tokens and predict them from context. BERT's objective, giving bidirectional representations."],
  ["Next-token prediction","Predict each token from earlier ones. Simple objective that, at scale, produces general language ability."],
  ["Masked autoencoders for vision","Hide most image patches and reconstruct them. An efficient and effective vision pretraining method."],
  ["Denoising objectives","Reconstruct clean data from corrupted input. Underlies BART, T5 span corruption and diffusion models."],
  ["Autoregressive image & audio models","Predict pixels or audio tokens in order. Strong but slow at generation."],
  ["Multimodal pretraining objectives","Combine masked, contrastive and generative tasks across modalities. Used to train vision-language models."],
  ["Pretext tasks (rotation, jigsaw)","Hand-designed tasks like predicting image rotation. Early self-supervised methods, now largely replaced."]]],
 ["Evaluating representations","are the features good",[
  ["Linear probing","Train only a linear classifier on frozen features. A standard measure of representation quality."],
  ["k-NN evaluation","Classify by nearest neighbors in feature space. Needs no training and tests the geometry directly."],
  ["Fine-tuning evaluation","Adapt the whole network to a task. Reflects practical use but depends on training choices."],
  ["Few-shot transfer","Performance with very few labeled examples. Measures how reusable features are."],
  ["Alignment & uniformity","Related items should be close while features spread over the space. Two properties used to analyze contrastive learning."],
  ["Probing for structure","Test whether a representation encodes properties like syntax or depth. Informative about content but not about use."],
  ["Robustness & out-of-distribution transfer","How features hold up under shift. Self-supervised models often transfer more robustly."]]]
 ]},

{ref:"C2",band:"C",name:"Generative Models",sum:"Networks that learn a data distribution and create new samples from it.",deps:["A1","B3"],
 overview:"Generative models learn to produce realistic data such as images, text, audio and molecules. This region covers latent-variable models, adversarial training, diffusion and score-based models, normalizing flows, autoregressive models and the conditioning and control techniques that make them usable.",
 why:"Generative modeling is the most visible part of current AI. Each family makes different trade-offs between sample quality, diversity, speed and tractable likelihood, and knowing them helps choose a method and interpret its failures.",
 subs:[
 ["Autoencoders & VAEs","compress and decode",[
  ["Autoencoder","Encodes data into a small code and decodes it back. Learns compact representations by reconstruction."],
  ["Variational autoencoder","A probabilistic autoencoder trained to maximize a lower bound on data likelihood, with a smooth latent space that can be sampled."],
  ["Evidence lower bound (ELBO)","The objective combining reconstruction quality with closeness of the latent distribution to a prior. Used throughout latent-variable models."],
  ["Reparameterization trick","Express a random sample as a deterministic function of noise so gradients can flow through it. Makes VAEs trainable by backpropagation."],
  ["KL regularization & posterior collapse","When the decoder ignores the latent code. A common failure mode controlled by annealing or weighting."],
  ["VQ-VAE & discrete latents","Use a codebook of discrete codes. Underlies many image and audio tokenizers."],
  ["β-VAE","Weights the KL term to encourage disentangled latents. Trades reconstruction quality for structure."]]],
 ["Adversarial models","generator versus critic",[
  ["Generative adversarial network","A generator makes samples and a discriminator tries to tell them from real data. Training them against each other drives realism."],
  ["Minimax objective & training instability","Two networks competing can oscillate or fail to converge. Many GAN advances address stability."],
  ["Mode collapse","The generator produces only a few kinds of outputs. A signature GAN failure that reduces diversity."],
  ["Wasserstein GAN & gradient penalty","Use a smoother distance between distributions with a constrained critic. Give more stable training."],
  ["StyleGAN & progressive growing","Architectures giving high-resolution, controllable faces and images. Separated style at different scales."],
  ["Conditional GANs & image translation","Generate from labels or inputs, as in pix2pix and CycleGAN. Used for style transfer and paired or unpaired translation."],
  ["Evaluation (FID, IS)","Scores comparing generated and real image statistics. Useful but imperfect proxies for quality and diversity."]]],
 ["Diffusion & score-based models","denoise step by step",[
  ["Diffusion process","Gradually add noise to data until it becomes pure noise, and learn to reverse it. Generation runs the reverse process from random noise."],
  ["DDPM","Denoising diffusion probabilistic models, trained to predict the noise added at each step. Established diffusion as a leading generative approach."],
  ["Score matching","Learn the gradient of the log data density. The score tells which direction makes data more likely."],
  ["Stochastic differential equation view","Diffusion as a continuous noising process with a reverse-time SDE. Unifies discrete and continuous formulations."],
  ["Fast samplers (DDIM, DPM-Solver)","Take fewer, larger denoising steps using ODE solvers. Cut generation from many steps to few."],
  ["Latent diffusion","Run diffusion in a compressed latent space rather than on pixels. Makes high-resolution generation affordable."],
  ["Classifier-free guidance","Mix conditional and unconditional predictions to strengthen adherence to a prompt. A key control knob for quality versus diversity."],
  ["Distillation & consistency models","Compress many-step sampling into one or a few steps. Enable near-real-time generation."]]],
 ["Flows & autoregressive models","exact likelihoods",[
  ["Normalizing flows","Invertible transformations from simple noise to data, with exact likelihood through the change of variables formula. Require tractable Jacobians."],
  ["Flow matching & rectified flows","Learn a velocity field transporting noise to data along simple paths. A simpler training recipe for continuous generation."],
  ["Autoregressive generation","Factor the joint distribution into a product of conditionals and sample one element at a time. How language models and many image and audio models work."],
  ["Tokenizing images & audio","Convert continuous data into discrete tokens a transformer can model. Links language-style models to other modalities."],
  ["Energy-based models","Define unnormalized probability by an energy function. Flexible but costly to train and sample."],
  ["Masked & discrete diffusion","Corrupt tokens by masking and learn to unmask. An alternative to autoregression for text and images."],
  ["Likelihood vs. sample quality","Models with exact likelihood do not always give the best samples. The choice depends on the application."]]],
 ["Conditioning & control","steering what gets made",[
  ["Conditional generation","Generate according to labels, text or other inputs. Almost all practical systems are conditional."],
  ["Text-to-image & text-to-video","Conditioning on language embeddings through cross-attention or concatenation. The most popular generative applications."],
  ["Inpainting, editing & ControlNet","Modify parts of an image or add structural controls like edges or pose. Give users precise control."],
  ["Personalization (DreamBooth, LoRA)","Teach a model a new subject or style from a few examples. Lightweight adaptation for generators."],
  ["Prompt engineering & negative prompts","Shaping outputs through text. Effective but model-specific and brittle."],
  ["Safety, watermarking & provenance","Filtering harmful outputs and marking generated content. Increasingly required for deployment."],
  ["Evaluation of generative models","Human preference, FID and task metrics. No single measure captures quality, diversity and faithfulness."]]]
 ]},

{ref:"C3",band:"C",name:"Geometric, Graph & Structured Networks",sum:"Architectures that respect the structure and symmetries of the data.",deps:["A1","B1"],
 overview:"Not all data is a grid or a sequence. Molecules, social networks, point clouds and physical fields have relational structure and symmetries. This region covers graph neural networks, equivariant and symmetry-aware networks, networks for sets and point clouds, and neural models of differential equations and operators.",
 why:"Building the right symmetry into a network makes it more data-efficient and physically consistent. These models are central to scientific machine learning, chemistry, robotics and any domain where structure matters more than raw volume.",
 subs:[
 ["Graph neural networks","learning on nodes and edges",[
  ["Message passing","Each node gathers information from its neighbors and updates its state. The general framework underlying most graph networks."],
  ["Graph convolutional networks","Average neighbor features with a learned transformation. A simple, widely used baseline."],
  ["Graph attention networks","Learn how much to weight each neighbor. Add flexibility over uniform aggregation."],
  ["GraphSAGE & sampling","Aggregate from sampled neighborhoods to scale to huge graphs. Make training on large networks feasible."],
  ["Over-smoothing & over-squashing","Node features becoming indistinguishable with depth, and information being compressed through bottlenecks. Key limits of deep message passing."],
  ["Expressiveness & the Weisfeiler–Leman test","Standard message passing cannot distinguish some graphs. Higher-order and positional-encoding methods go beyond."],
  ["Graph transformers","Apply attention across all nodes with structural encodings. Capture long-range relations at higher cost."]]],
 ["Tasks on graphs","what we predict",[
  ["Node, edge & graph-level tasks","Classify nodes, predict links or classify whole graphs. Each uses different readouts."],
  ["Link prediction & knowledge graph completion","Infer missing relations between entities. Embeddings like TransE and relational GNNs are common."],
  ["Molecular property prediction","Predict properties from atom-and-bond graphs. A leading application in drug and materials discovery."],
  ["Recommender systems with graphs","Model users and items as a bipartite graph. Neighbor information improves cold-start behavior."],
  ["Traffic & spatiotemporal graphs","Combine graph structure with time series. Forecast flows on road and sensor networks."],
  ["Heterogeneous & dynamic graphs","Graphs with several node and edge types or changing over time. Reflect real systems better than simple graphs."],
  ["Graph generation","Produce new graphs such as molecules. Handles discrete structure with autoregressive or diffusion methods."]]],
 ["Symmetry & equivariance","building in invariances",[
  ["Invariance vs. equivariance","Invariant outputs do not change under a transformation; equivariant outputs change in a matching way. Choosing correctly depends on the task."],
  ["Group-equivariant CNNs","Extend convolution to rotations and reflections. Learn from fewer examples when such symmetry is present."],
  ["Steerable & spherical networks","Handle continuous rotations, including on the sphere. Used for climate and 3D data."],
  ["E(n)-equivariant networks","Respect rotations, translations and reflections in space. Standard for modeling molecules and physics."],
  ["Geometric deep learning blueprint","A unifying view: grids, graphs, groups and manifolds, each with its symmetries. Organizes many architectures."],
  ["Equivariance and data efficiency","Built-in symmetry replaces data needed to learn it. A major reason for these designs in science."],
  ["Learned vs. built-in symmetry","Augmentation can teach approximate symmetry; architecture enforces it exactly. The tradeoff is flexibility versus guarantees."]]],
 ["Sets, point clouds & other data","irregular inputs",[
  ["Permutation invariance","Outputs should not depend on input order for sets. Needed for unordered collections."],
  ["DeepSets","Apply a function to each element, pool and apply another function. A simple universal form for set functions."],
  ["PointNet & point-cloud networks","Process 3D points directly with shared functions and pooling. Later versions add local structure."],
  ["Set transformers","Use attention between elements of a set. Model interactions in unordered data."],
  ["Meshes & 3D shapes","Networks over surfaces and meshes. Used in graphics and engineering simulation."],
  ["Implicit neural representations","Represent a signal or shape as a function from coordinates to values. Includes NeRF and signed distance models."],
  ["Tabular deep learning","Networks for rows and columns with mixed types. Often competitive with, but not always better than, gradient-boosted trees."]]],
 ["Continuous-time & scientific models","networks meeting physics",[
  ["Neural ODEs","Define a layer's transformation as the solution of a learned differential equation. Give continuous depth and memory-efficient training."],
  ["Physics-informed neural networks","Add the residual of a governing equation to the loss. Fit data while respecting known physics."],
  ["Neural operators (FNO, DeepONet)","Learn maps between function spaces, such as from initial conditions to PDE solutions. Solve whole families of problems quickly."],
  ["Hamiltonian & Lagrangian networks","Learn dynamics with built-in conservation laws. Produce physically plausible long-term predictions."],
  ["Learned simulators","Graph-based models that step a physical system forward. Fast alternatives to numerical solvers."],
  ["Surrogate modeling","Replace an expensive simulation with a trained network. Trades some accuracy for speed."],
  ["Weather & climate emulators","Large models forecasting atmosphere and ocean fields. Show operator-style learning at scale."]]]
 ]}
);
