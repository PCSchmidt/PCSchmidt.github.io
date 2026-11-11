/* Band B — Architectures. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"B1",band:"B",name:"Convolutional & Vision Networks",sum:"Networks that exploit spatial structure in images and other grid data.",deps:["A1","A3"],
 overview:"Convolutional networks share small filters across positions so they detect the same pattern anywhere and build up from edges to objects. This region covers the convolution operation, the classic architectures, techniques for deep and efficient models, and the tasks of detection and segmentation built on top.",
 why:"Convolution is the model of how to build in a useful assumption: nearby pixels matter and patterns repeat. The same idea applies to audio, time series and any signal with local structure, and vision backbones remain widely deployed on edge devices.",
 subs:[
 ["Convolution basics","the core operation",[
  ["Convolution & cross-correlation","Sliding a small filter over the input and taking dot products. Deep learning libraries compute cross-correlation but call it convolution."],
  ["Kernels, channels & feature maps","A filter detects one pattern; many filters give many channels. Each output channel is a feature map showing where the pattern occurs."],
  ["Stride, padding & dilation","Settings controlling output size and the area a filter sees. Dilation widens the receptive field without more parameters."],
  ["Parameter sharing & translation equivariance","The same filter is used everywhere, so shifting the input shifts the output. Greatly reduces parameters compared with dense layers."],
  ["Receptive field","The input region influencing one output unit. Grows with depth and determines how much context the network sees."],
  ["Pooling","Summarizes small neighborhoods by maximum or average. Adds small shift invariance and reduces resolution."],
  ["1×1 convolutions","Mix channels at each position without looking at neighbors. Used to change channel counts cheaply."]]],
 ["Classic architectures","how the field advanced",[
  ["LeNet & AlexNet","The first practical convolutional networks, with AlexNet's 2012 ImageNet win starting the deep learning era in vision."],
  ["VGG","Showed that stacking many small 3×3 filters works well. Simple and influential, though heavy."],
  ["Inception & multi-branch blocks","Parallel filters of different sizes in one block. Capture patterns at several scales."],
  ["ResNet & skip connections","Add each block's input to its output so layers learn residuals. Made networks of hundreds of layers trainable."],
  ["DenseNet","Connect each layer to all earlier ones to reuse features. Efficient parameter use with strong gradient flow."],
  ["EfficientNet & compound scaling","Scale depth, width and resolution together in a balanced way. Gave strong accuracy per compute."],
  ["ConvNeXt","A convolutional network modernized with transformer-era design choices. Shows convolution remains competitive."]]],
 ["Efficient & specialized convolutions","doing more with less",[
  ["Depthwise separable convolution","Split a convolution into a per-channel spatial step and a channel-mixing step. Cuts compute sharply, the basis of mobile networks."],
  ["MobileNet & ShuffleNet","Architectures designed for phones and embedded devices using separable convolutions and channel shuffling."],
  ["Grouped convolutions","Restrict connections between channel groups. Reduce cost and widen architectures."],
  ["Transposed convolution & upsampling","Increase spatial resolution. Used in decoders, segmentation and generators, where checkerboard artifacts need care."],
  ["Temporal & 1D convolutions","Convolve over time for audio and sensor signals. Fast and parallel alternatives to recurrence."],
  ["3D convolutions","Add a depth or time dimension for video and volumetric data like CT scans. Expensive but direct."],
  ["Deformable convolution","Learn where the filter samples. Adapts to object shape."]]],
 ["Dense prediction","localizing and segmenting",[
  ["Object detection (R-CNN, YOLO, SSD)","Predict boxes and classes for objects. Two-stage methods propose regions first, one-stage methods predict directly and run faster."],
  ["Anchor boxes & non-max suppression","Reference box shapes for predictions and a step that removes duplicates. Standard machinery in many detectors."],
  ["Feature pyramid networks","Combine features at several scales. Help detect both small and large objects."],
  ["Semantic segmentation (FCN, DeepLab)","Label every pixel with a class using fully convolutional networks and atrous convolution."],
  ["U-Net & encoder–decoder designs","Downsample to gather context, upsample to restore detail, with skip connections between them. A staple of medical imaging and diffusion models."],
  ["Instance & panoptic segmentation","Separate individual objects, and unify objects and background. Mask R-CNN is the classic instance model."],
  ["Keypoint & pose estimation","Locate points such as body joints. Used in motion analysis and robotics."]]],
 ["Vision tasks & evaluation","measuring success",[
  ["Image classification & ImageNet","The benchmark task that drove progress. Top-1 and top-5 accuracy are the standard metrics."],
  ["IoU & mAP","Intersection over union measures box or mask overlap, and mean average precision aggregates detection quality. The standard detection metrics."],
  ["Transfer from ImageNet","Pretraining on ImageNet then fine-tuning on a new task. A default starting point for small datasets."],
  ["Data augmentation for vision","Flips, crops, color jitter and more. Central to training vision models well."],
  ["Robustness to corruption & shift","Performance under blur, noise or new conditions. Often much worse than clean-set accuracy suggests."],
  ["Texture bias","Standard CNNs lean on texture more than shape. Explains some failures and the value of augmentation."],
  ["Visualizing features (Grad-CAM, saliency)","Highlight image regions driving a prediction. Used for debugging and trust."]]]
 ]},

{ref:"B2",band:"B",name:"Sequence Models & Attention",sum:"Modeling ordered data: from recurrent networks to the attention mechanism.",deps:["A1","A2"],
 overview:"Language, speech, time series and code are sequences where order and context matter. This region covers recurrent networks and their gated variants, sequence-to-sequence learning, and the attention mechanism that let models look directly at relevant earlier positions, setting the stage for transformers.",
 why:"The limits of recurrent networks, such as slow sequential computation and fading memory, are exactly what attention solved. Knowing both makes transformers and state-space models easier to understand.",
 subs:[
 ["Recurrent networks","memory through repetition",[
  ["Recurrent neural network","Processes a sequence step by step, carrying a hidden state forward. The hidden state is a running summary of the past."],
  ["Backpropagation through time","Training by unrolling the network across time steps and backpropagating through them. Long unrolls make gradients vanish or explode."],
  ["Vanishing gradients in sequences","Repeated multiplication shrinks the signal from early steps, so long-range dependencies are hard to learn."],
  ["LSTM","Adds a cell state and gates that control what to keep, write and output. Greatly extended the memory of recurrent models."],
  ["GRU","A simpler gated unit with fewer parameters. Performs similarly to LSTM on many tasks."],
  ["Bidirectional & stacked RNNs","Read the sequence in both directions or stack several layers. Give richer context."],
  ["Truncated BPTT","Limit how far back gradients flow. A practical compromise for long sequences."]]],
 ["Sequence-to-sequence","mapping sequences to sequences",[
  ["Encoder–decoder","One network encodes the input into a representation and another generates the output. The template for translation and summarization."],
  ["Teacher forcing","Feed the true previous token during training rather than the model's own. Speeds learning but creates a train–test mismatch."],
  ["Exposure bias","The gap between training on true prefixes and generating from its own outputs. Errors can compound at inference."],
  ["Beam search & decoding","Search for high-probability outputs by keeping several candidates. Sampling strategies like top-k and nucleus trade quality and diversity."],
  ["Context bottleneck","Squeezing the whole input into one vector limits quality on long inputs. The problem attention was introduced to fix."],
  ["Connectionist temporal classification","A loss for aligning input and output sequences without labels per step. Widely used in speech and handwriting recognition."],
  ["Sequence tagging & CRFs","Assigning a label to each element, often with structured output layers. Classic for named-entity recognition."]]],
 ["Attention","looking where it matters",[
  ["Attention mechanism","Computes a weighted average of values, with weights from how well a query matches keys. Lets a model draw on any earlier position directly."],
  ["Additive & dot-product attention","Two ways to score a query against keys. Dot-product with scaling is faster and is the form used in transformers."],
  ["Queries, keys & values","The three projections of the input used in attention. Queries ask, keys are matched, and values are what is retrieved."],
  ["Self-attention","Each position attends to all positions in the same sequence. Builds context-aware representations in parallel."],
  ["Cross-attention","One sequence attends to another, such as a decoder attending to the encoder. Connects modalities and conditioning inputs."],
  ["Multi-head attention","Several attention operations in parallel with different projections. Lets the model track different relations at once."],
  ["Attention visualization","Inspecting weights to see what a model focuses on. Informative but not a reliable explanation of behavior."]]],
 ["Alternatives & hybrids","other ways to handle sequence",[
  ["Temporal convolutional networks","Dilated causal convolutions over time. Parallel to train and with large receptive fields."],
  ["WaveNet","Autoregressive audio model with dilated convolutions. Early demonstration of high-quality neural speech synthesis."],
  ["Neural Turing machines & memory networks","Networks with external, addressable memory. Early attempts at explicit reasoning over stored facts."],
  ["Echo state networks & reservoir computing","Fixed random recurrent networks with only a trained readout. Cheap to train for some time series."],
  ["Linear RNNs & state-space models","Recurrent models with linear updates that can be computed in parallel. The route back to efficient long sequences."],
  ["Time-series architectures","Models designed for forecasting and sensor data. Combine convolution, recurrence and attention."]]]
 ]},

{ref:"B3",band:"B",name:"Transformers & Modern Backbones",sum:"The architecture behind today's language, vision and multimodal models.",deps:["B2","A3"],
 overview:"The transformer replaces recurrence with stacked self-attention and feed-forward blocks, scaling well on parallel hardware. This region covers the transformer block, positional information, the major variants for language and vision, efficient attention, mixture-of-experts and state-space alternatives.",
 why:"Nearly all frontier models are transformers or close relatives. Understanding the block, its cost in memory and compute, and the design choices behind it is essential for reading papers, tuning models and judging new architectures.",
 subs:[
 ["The transformer block","the standard unit",[
  ["Transformer architecture","Stacks of self-attention and feed-forward layers with residual connections and normalization. Processes all positions in parallel."],
  ["Self-attention complexity","Compute and memory grow with the square of sequence length. The main obstacle to very long contexts."],
  ["Feed-forward network (MLP) block","A two-layer network applied to each position. Holds much of a transformer's parameters and is thought to store knowledge."],
  ["Residual stream","The running sum to which each layer adds its output. A useful view: layers read from and write to a shared stream."],
  ["Encoder, decoder & encoder–decoder","Encoders see the whole input, decoders generate left to right with masking, and the combination suits translation. Decoder-only is dominant for language models."],
  ["Causal masking","Prevents a position from seeing future tokens. Enables training a next-token predictor on all positions at once."],
  ["Pre-LN & architectural refinements","Pre-normalization, gated MLPs, RMSNorm and removing biases. Small changes that stabilize large-scale training."]]],
 ["Position & context","where tokens are",[
  ["Positional encodings","Attention is order-blind, so position information must be added. Sinusoidal and learned encodings were the original approaches."],
  ["Rotary position embeddings (RoPE)","Rotate query and key vectors by position-dependent angles so attention depends on relative offsets. Widely used in recent models."],
  ["ALiBi & relative position bias","Add a distance-based bias to attention scores. Helps models extrapolate to longer inputs."],
  ["Context length & extrapolation","How long an input a model can use well. Techniques like position interpolation extend it after training."],
  ["Tokenization & embeddings","Text is split into subword tokens mapped to vectors. Tokenizer choices affect cost, multilingual fairness and arithmetic."],
  ["Lost in the middle","Models often use information near the start and end of a long context better than the middle. Affects how prompts should be built."],
  ["Attention sinks","Models place unusual attention on early tokens. Exploited for streaming generation."]]],
 ["Variants & families","language and vision",[
  ["BERT-style encoders","Bidirectional transformers trained by masking tokens. Strong for classification and embeddings."],
  ["GPT-style decoders","Left-to-right transformers trained to predict the next token. The basis of modern large language models."],
  ["T5 & encoder–decoder text models","Cast every task as text-to-text with an encoder–decoder. Influential for transfer learning."],
  ["Vision Transformer (ViT)","Split an image into patches and treat them as tokens. Competes with convolutional networks at scale."],
  ["Swin & hierarchical vision transformers","Use local windows and multi-scale features. Make transformers efficient for dense vision tasks."],
  ["Audio & speech transformers","Apply the architecture to spectrogram frames or waveforms. Whisper-style models are a leading example."],
  ["Diffusion transformers","Transformers as the denoising backbone of image and video generators. Replace the U-Net in recent systems."]]],
 ["Efficient attention","getting past the quadratic wall",[
  ["FlashAttention","An exact algorithm that reorganizes computation to avoid slow memory traffic. Makes long contexts faster and cheaper with identical results."],
  ["Sparse & sliding-window attention","Attend only to selected or nearby positions. Lower cost at the price of some global context."],
  ["Linear attention & kernel approximations","Rewrite attention to scale linearly with length. Trade some quality for speed."],
  ["Multi-query & grouped-query attention","Share key and value projections across heads. Shrinks the memory needed for generation."],
  ["KV cache","Stores past keys and values so each new token is cheap. Its size is a main constraint on serving long contexts."],
  ["Multi-head latent attention","Compress keys and values into a small latent. Cuts cache size further."],
  ["Ring & sequence-parallel attention","Split a long sequence across devices. Enables million-token training."]]],
 ["Beyond dense transformers","alternative backbones",[
  ["Mixture of experts","Route each token to a few of many expert sub-networks. Adds parameters without proportional compute."],
  ["Routing & load balancing","Choosing experts and keeping them evenly used. Unbalanced routing wastes capacity and hardware."],
  ["Structured state-space models (S4, Mamba)","Sequence models with linear-time recurrence and selective state updates. Competitive for long sequences."],
  ["Hybrid attention–SSM models","Interleave attention with state-space layers. Aim for both strong recall and efficiency."],
  ["Recurrent revivals (RWKV, xLSTM, RetNet)","Recurrent designs trainable in parallel. Offer constant-memory inference."],
  ["MLP-Mixer & attention-free vision","Mix patches with simple MLPs. Show how much structure is really needed."],
  ["Architecture search","Automating the design of networks. Mostly superseded by scaling a standard design."]]]
 ]}
);
