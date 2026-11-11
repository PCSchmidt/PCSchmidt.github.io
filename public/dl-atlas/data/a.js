/* Band A — Bedrock. Each topic: [term, definition written in the context of its region]. */
window.ATLAS = window.ATLAS || [];
window.ATLAS.push(
{ref:"A1",band:"A",name:"Neural Network Fundamentals",sum:"The building blocks: units, layers, losses and the algorithm that trains them.",deps:[],
 overview:"A deep network is a composition of simple differentiable functions with adjustable parameters. This region covers how a single unit computes, how layers stack into a multilayer perceptron, how a loss measures error, how backpropagation and automatic differentiation compute gradients, and how parameters are initialized so training can begin.",
 why:"Every deep learning model, from a small classifier to a large language model, is built from these pieces. Understanding them lets you debug exploding or vanishing signals, choose losses that match the task and read any architecture diagram.",
 subs:[
 ["Units & layers","what a network is made of",[
  ["Artificial neuron","Computes a weighted sum of its inputs plus a bias and passes it through a nonlinearity. The loose analogy to a biological neuron stops at the structure; it is simply a parameterized function."],
  ["Perceptron","The earliest learning unit, using a threshold on a weighted sum. It can only separate classes with a straight line, which motivated deeper networks."],
  ["Multilayer perceptron","Stacked layers of units where each layer feeds the next. With nonlinear activations it can represent far more than a single linear map."],
  ["Fully connected layer","Every output unit receives every input, computing a matrix multiplication plus bias. It is the basic dense building block inside transformers and classifier heads."],
  ["Depth & width","Depth is the number of layers and width the units per layer. Depth composes features hierarchically while width adds capacity within a layer."],
  ["Parameters & hyperparameters","Parameters are learned by training, such as weights; hyperparameters, such as layer count or learning rate, are chosen beforehand. Keeping the two distinct clarifies what training changes."],
  ["Universal approximation","A wide enough network with a nonlinearity can approximate any continuous function on a bounded domain. It says a good network exists, not that training will find it."]]],
 ["Activation functions","where nonlinearity comes from",[
  ["Sigmoid & tanh","Smooth S-shaped functions squashing inputs to a bounded range. They saturate at the extremes, which makes gradients vanish in deep stacks."],
  ["ReLU","Outputs the input if positive, otherwise zero. Cheap and non-saturating for positive inputs, it made deep networks much easier to train."],
  ["Leaky ReLU & PReLU","Allow a small slope for negative inputs to avoid units that never activate. A fix for the dying-ReLU problem."],
  ["GELU & SiLU (Swish)","Smooth variants that weight the input by a probability-like gate. Standard in transformers and modern convolutional models."],
  ["Softmax","Turns a vector of scores into probabilities that sum to one. The usual final layer for multi-class classification and the weighting in attention."],
  ["Gated activations (GLU, SwiGLU)","Multiply one linear branch by a gated version of another. Used in the feed-forward blocks of recent language models for better quality."],
  ["Activation choice & gradient flow","Activation shape controls how gradients pass backward. Choosing one is largely about keeping signals alive through many layers."]]],
 ["Loss functions","what the network is asked to do",[
  ["Mean squared error","Average of squared differences between prediction and target. The standard regression loss, equivalent to maximum likelihood under Gaussian noise."],
  ["Cross-entropy & log loss","Penalizes the negative log-probability assigned to the true class. The standard classification loss and the same quantity language models minimize."],
  ["Binary & focal losses","Cross-entropy for two classes, and a variant that down-weights easy examples. Focal loss helps with extreme class imbalance."],
  ["Contrastive & triplet losses","Pull similar items together and push dissimilar ones apart in an embedding space. Used for retrieval and metric learning."],
  ["Huber & robust losses","Quadratic near zero and linear for large errors. Limit the influence of outliers on training."],
  ["Maximum likelihood view","Most losses are negative log-likelihoods of an assumed output distribution. This links loss design to probabilistic modeling."],
  ["Auxiliary & multi-task losses","Adding extra objectives to shape representations or train several tasks together. Weighting them is a common tuning problem."]]],
 ["Backpropagation & autodiff","computing the gradients",[
  ["Computation graph","A record of operations from inputs to loss. Gradients are computed by walking it backward."],
  ["Chain rule","Derivative of a composition is the product of derivatives of its parts. Backpropagation is an efficient application of it layer by layer."],
  ["Backpropagation","Computes the loss gradient with respect to every parameter in one backward sweep costing roughly one forward pass. It is what makes training large networks feasible."],
  ["Reverse-mode automatic differentiation","The general form of backpropagation for any differentiable program. Frameworks such as PyTorch and JAX provide it."],
  ["Forward-mode autodiff","Propagates derivatives alongside values. Efficient when there are few inputs and many outputs, as in Jacobian-vector products."],
  ["Gradient checking","Comparing analytic gradients to finite differences to catch implementation bugs. A standard sanity test for custom layers."],
  ["Memory & recomputation","Backward needs stored activations, which dominate memory. Gradient checkpointing trades extra compute for lower memory."]]],
 ["Initialization","starting in a trainable place",[
  ["Why initialization matters","Poor starting weights make signals vanish or explode across layers before any learning happens. Good initialization keeps activations and gradients at a stable scale."],
  ["Xavier / Glorot initialization","Sets weight variance from the number of inputs and outputs to preserve signal variance. Suited to tanh and sigmoid-like units."],
  ["He / Kaiming initialization","Variance scaled for ReLU-family activations. The default for most convolutional and feed-forward networks."],
  ["Orthogonal initialization","Starts weight matrices as orthogonal so lengths are preserved. Helps train very deep and recurrent networks."],
  ["Symmetry breaking","Identical initial weights make units learn identical things. Random initialization makes them differ."],
  ["Zero-init of residual branches","Starting residual blocks near identity so early training is stable. Used in many deep transformer and ResNet recipes."],
  ["Pretrained initialization","Starting from weights trained on another task. Usually far better than random for the same architecture."]]]
 ]},

{ref:"A2",band:"A",name:"Optimization for Deep Learning",sum:"How parameters are updated, and why training behaves the way it does.",deps:["A1"],
 overview:"Training minimizes a loss over millions or billions of parameters using noisy gradient estimates. This region covers stochastic gradient descent and its variants, adaptive optimizers, learning-rate schedules, the shape of loss landscapes, and training stability tools like clipping and mixed precision.",
 why:"Most training failures are optimization failures: diverging loss, plateaus, or poor final accuracy from the wrong schedule. Choosing and tuning the optimizer and learning rate is often the highest-leverage decision in a training run.",
 subs:[
 ["Gradient descent family","the basic update",[
  ["Gradient descent","Moves parameters a small step against the gradient of the loss. The core idea behind all training."],
  ["Stochastic & mini-batch SGD","Uses gradients computed on small random batches instead of the full dataset. Cheaper per step, and its noise often helps generalization."],
  ["Learning rate","Controls the step size. Too high diverges, too low is slow, and it is usually the most important hyperparameter."],
  ["Momentum","Accumulates a running average of past gradients to smooth noise and speed progress along consistent directions."],
  ["Nesterov momentum","Evaluates the gradient at a looked-ahead point for better corrections. A small but common improvement."],
  ["Batch size effects","Larger batches reduce gradient noise and use hardware efficiently but can need a larger learning rate and may generalize worse."],
  ["Gradient noise scale","A measure of how noisy gradients are relative to their signal. Helps pick a batch size beyond which larger batches give little benefit."]]],
 ["Adaptive optimizers","per-parameter step sizes",[
  ["Adagrad & RMSProp","Scale each parameter's step by the history of its gradients. Help with sparse features and badly scaled problems."],
  ["Adam","Combines momentum with per-parameter scaling using running averages of gradient and squared gradient. The default optimizer for many deep learning tasks."],
  ["AdamW","Adam with weight decay applied directly to the weights rather than through the gradient. The standard for transformers."],
  ["Lion, Adafactor & memory-lean variants","Optimizers that cut optimizer-state memory or simplify the update. Matter when parameter counts are very large."],
  ["Second-order & Shampoo/K-FAC","Use curvature information to precondition updates. Can converge in fewer steps at higher per-step cost."],
  ["LAMB & LARS","Layer-wise adaptive scaling for very large batch training. Keep updates proportional to weight size."],
  ["Epsilon & numerical details","Small constants in adaptive optimizers affect stability, especially in low precision. Worth knowing when training diverges."]]],
 ["Schedules & warmup","changing the step over time",[
  ["Learning-rate decay","Lowering the step size as training proceeds so the model settles into a minimum. Step, exponential and cosine decay are common."],
  ["Warmup","Starting with a very small learning rate and ramping up. Prevents early instability, especially for transformers and large batches."],
  ["Cosine annealing","Smoothly decreases the rate following a cosine curve, sometimes with restarts. A strong default schedule."],
  ["One-cycle & cyclical rates","Raise then lower the rate in a single cycle. Can reach good accuracy in fewer epochs."],
  ["Warmup–stable–decay schedules","Hold a constant rate and decay only at the end. Convenient because training can be extended without redefining the schedule."],
  ["Learning-rate finder","A short sweep to locate a workable rate range. A quick way to avoid wasted runs."],
  ["Batch size scaling rules","Linear or square-root scaling of the learning rate with batch size. Approximate guides when changing hardware."]]],
 ["Landscape & dynamics","what the loss surface looks like",[
  ["Local minima & saddle points","In high dimensions saddles are far more common than bad local minima. Noise and momentum help escape them."],
  ["Sharp vs. flat minima","Flat minima, where the loss changes little nearby, are linked to better generalization. Optimizer noise tends to favor them."],
  ["Mode connectivity","Different solutions found by training are often joined by low-loss paths. Suggests the landscape is less rugged than feared."],
  ["Loss plateaus & edge of stability","Training can hover where the largest curvature matches the learning rate. Explains oscillating but still decreasing loss."],
  ["Implicit bias of SGD","Among many solutions that fit the data, SGD tends toward particular ones, such as smaller norm. A source of generalization beyond explicit regularizers."],
  ["Overparameterization","Having more parameters than data points makes optimization easier and often does not hurt generalization. A central puzzle of deep learning."],
  ["Lottery ticket hypothesis","Large networks contain small subnetworks that train as well on their own. Motivates pruning."]]],
 ["Stability tools","keeping training on track",[
  ["Gradient clipping","Cap the gradient norm to prevent huge steps. A standard guard for recurrent networks and transformers."],
  ["Exploding & vanishing gradients","Gradients that grow or shrink exponentially with depth. The classic obstacle to training deep and recurrent networks."],
  ["Loss spikes & divergence","Sudden jumps in loss during large-scale training. Handled by lowering the rate, skipping batches or rolling back."],
  ["Mixed-precision training","Compute in 16-bit with a 32-bit master copy of weights. Speeds training and cuts memory; loss scaling avoids underflow."],
  ["Exponential moving average of weights","Keep a smoothed copy of parameters for evaluation. Often gives better and more stable results."],
  ["Gradient accumulation","Sum gradients across several small batches before updating. Simulates a large batch within limited memory."],
  ["Monitoring training","Tracking loss, gradient norms and update ratios. Early warning of problems before a run is wasted."]]]
 ]},

{ref:"A3",band:"A",name:"Regularization, Normalization & Generalization",sum:"Making networks that work on data they have not seen.",deps:["A1","A2"],
 overview:"A network can memorize its training set, so techniques are needed to bias it toward patterns that transfer. This region covers explicit regularizers, normalization layers that stabilize training, data augmentation, and the concepts of generalization, overfitting and double descent.",
 why:"The goal of learning is performance on new data. These techniques are used in nearly every serious training recipe, and understanding them guides what to try when validation performance lags training performance.",
 subs:[
 ["Explicit regularization","penalizing complexity",[
  ["Weight decay & L2 regularization","Shrinks weights toward zero each step. Reduces overfitting and, with adaptive optimizers, should be applied decoupled as in AdamW."],
  ["L1 regularization","Penalizes absolute weight size and encourages sparsity. Used for feature selection and pruning."],
  ["Dropout","Randomly zeroing units during training so the network cannot rely on any single one. Acts like averaging many sub-networks."],
  ["DropConnect, DropPath & stochastic depth","Drop weights or whole layers instead of units. Regularize very deep and residual networks."],
  ["Early stopping","Halt training when validation performance stops improving. A simple, effective regularizer."],
  ["Label smoothing","Replace hard 0/1 targets with slightly softened ones. Reduces overconfidence and improves calibration."],
  ["Max-norm & spectral constraints","Bound weight or layer norms to control sensitivity. Used for stability in GANs and robust models."]]],
 ["Normalization layers","stabilizing activations",[
  ["Batch normalization","Normalizes each feature using batch statistics, then rescales. Speeds and stabilizes training of convolutional networks."],
  ["Layer normalization","Normalizes across features within one example, independent of batch size. The standard in transformers."],
  ["RMSNorm","A simplified layer norm that rescales by root mean square without centering. Cheaper and common in recent language models."],
  ["Group & instance normalization","Normalize over groups of channels or per image. Useful with small batches or in style and generative models."],
  ["Pre-norm vs. post-norm","Whether normalization comes before or after a residual block. Pre-norm trains more stably at depth."],
  ["Weight normalization & reparameterization","Decouple the direction and length of weight vectors. Another way to condition optimization."],
  ["Why normalization helps","Debated: smoother loss landscape, better-conditioned gradients and tolerance of larger learning rates are leading explanations."]]],
 ["Data-side regularization","more variety from the same data",[
  ["Data augmentation","Random transformations that preserve the label, such as flips and crops. Cheaply expands effective training data."],
  ["Mixup & CutMix","Blend or paste examples and mix their labels. Smooth decision boundaries and improve robustness."],
  ["Noise injection","Adding random noise to inputs, activations or weights. Encourages stability to small perturbations."],
  ["Learned augmentation (AutoAugment, RandAugment)","Searching for effective augmentation policies. Often gives gains for vision models."],
  ["Text & audio augmentation","Back-translation, masking and time stretching. Adapt the idea to other modalities."],
  ["Synthetic data","Generated or simulated examples to fill gaps. Useful but can bake in the generator's biases."],
  ["Test-time augmentation","Averaging predictions over transformed inputs at inference. A cheap accuracy boost."]]],
 ["Generalization concepts","why it works at all",[
  ["Overfitting & underfitting","Memorizing noise versus failing to capture signal. The balance is diagnosed by comparing training and validation curves."],
  ["Train / validation / test discipline","Separate data for fitting, tuning and final reporting. Reusing the test set for decisions inflates results."],
  ["Bias–variance tradeoff","Error from simplifying assumptions versus sensitivity to the sample. Modern networks complicate the classic picture."],
  ["Double descent","Test error can fall, rise and fall again as model size grows past the point of fitting the data exactly. Overturns the idea that more parameters always hurt."],
  ["Interpolation & benign overfitting","Networks that fit noisy training data perfectly can still predict well. Occurs when the extra capacity is absorbed harmlessly."],
  ["Generalization gap","The difference between training and held-out performance. The quantity regularization aims to shrink."],
  ["Distribution shift","Test data differing from training data. The most common reason a good validation score fails in production."]]],
 ["Training diagnostics","reading the curves",[
  ["Learning curves","Plots of loss and metrics against training steps or data size. Show whether more data, capacity or regularization is needed."],
  ["Validation vs. training gaps","A large gap points to overfitting, while both being poor points to underfitting or an optimization issue."],
  ["Overfit-a-small-batch test","If a model cannot memorize a tiny dataset, there is a bug. A classic first debugging step."],
  ["Calibration checks","Compare predicted confidence with actual accuracy. Overconfident networks are common after long training."],
  ["Ablation studies","Remove a component and measure the change. Establish what actually contributes to performance."],
  ["Seed variance","Different random seeds give different results. Report spread, not a single run."],
  ["Hyperparameter sensitivity","How much results change with settings. Robust recipes are more valuable than fragile best scores."]]]
 ]}
);
