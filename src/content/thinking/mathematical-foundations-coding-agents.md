---
title: "Why Mathematical Foundations Matter More as Coding Agents Commoditize Implementation"
description: "As AI coding agents reduce the cost of writing software to near-zero, the scarce skill becomes knowing what to build and why it works. Applied mathematics is the durable advantage."
date: 2026-04-19
tags: ["AI Engineering", "Mathematics", "Agentic AI", "Career"]
---

I'm mid-way through an AI engineering master's at Johns Hopkins, and the curriculum keeps asking me to build things from scratch: NumPy neural networks, custom RL environments, pure-Python optimizers. At the same time I'm using coding agents every day that can scaffold the same code in seconds. The contrast has been worth sitting with.

A year ago, writing a FastAPI endpoint or wiring a React component was a meaningful skill signal. Today, any competent coding agent can scaffold that in seconds. The same trajectory is coming for data pipelines, test suites, and deployment configs. Implementation is being commoditized at a pace that should make every engineer rethink what they're actually selling.

This isn't speculative. I use these tools every day; they write correct Python, generate working CI pipelines, and refactor codebases faster than I can read the diffs. The marginal cost of building things is falling fast.

So what doesn't collapse?

## The layer underneath

When I built a [pure-NumPy neural network with three optimizers from scratch](https://github.com/PCSchmidt/optimizer-deep-dive), I wasn't doing it because NumPy is a useful production tool. I was doing it because understanding *why* Adam outperforms SGD on ill-conditioned loss surfaces, and being able to derive the update rules, reason about effective learning rates, and predict when momentum will overshoot, is knowledge that no code-generation model gives you for free.

The agent can write `optimizer = torch.optim.Adam(lr=3e-4)`. It cannot tell you why that learning rate is reasonable for your architecture, why your loss is oscillating, or whether the condition number of your Hessian suggests you need a different approach entirely.

That's the asymmetry. Agents translate intent into code. They can't generate the intent. That part comes from understanding the mathematics, the failure modes, and the design trade-offs underneath the decision, none of which lives in a prompt.

## What this means in practice

In my [inference optimization study](https://github.com/PCSchmidt/inference-optimization-study), the measurable outcome was a ~9× throughput improvement via ONNX export and INT8 quantization. But the *engineering judgment* came from mathematical intuition, not from prompting a model: knowing that dynamic quantization preserves accuracy on embedding models because the activation distributions are well-behaved, knowing to validate with cosine similarity rather than L2 distance, knowing which batch sizes to sweep based on cache-line alignment.

Similarly, my [β-VAE ablation study](https://github.com/PCSchmidt/generative-modeling-study) isn't impressive because I wrote an encoder-decoder in PyTorch. It's because the systematic β-sweep reveals something about the geometry of the latent space that you can only interpret if you understand KL divergence as a measure of distribution mismatch, not just as "a loss term."

## The emerging division of labor

I think we're heading toward a world where engineering work stratifies into two layers:

1. **Specification layer:** Defining what to build, why, and what "correct" means. This requires domain knowledge, mathematical reasoning, and the ability to evaluate outputs against first principles.

2. **Implementation layer:** Translating specifications into working code. This is where agents are already competitive and will only improve.

The engineers who hold up are the ones who can write a precise enough problem statement that an agent produces correct, well-tested code, and who can read that output and know whether it's right without relying on a test suite to tell them.

## The applied math advantage

An applied mathematics background is unusually well-positioned for this shift. Not because mathematicians are better programmers (we're not), but because the training teaches you to:

- **Formalize ambiguous problems:** convert "this model isn't working" into "the loss landscape has saddle points and our optimizer lacks sufficient curvature information"
- **Reason about correctness without running the code:** dimensional analysis, invariant checking, asymptotic behavior
- **Evaluate outputs on first principles:** when an agent generates a solution, you can tell whether it's correct from the structure of the answer, not just from whether the tests pass

These are exactly the skills that scale *up* as implementation gets cheaper. The more code an agent can write per hour, the more valuable it is to have someone who knows which code *should* be written.

## Looking forward

I'm not arguing that coding skills become irrelevant. You still need to read code, debug systems, and understand infrastructure. But the center of gravity is shifting. The engineers who invested solely in "I can build things fast" are competing with models that build things faster. The engineers who invested in "I understand why things work and when they'll break" are increasingly irreplaceable.

My path from applied mathematics through data engineering to AI engineering at Johns Hopkins wasn't planned as a hedge against coding agents. But it's turning out to be one. Every from-scratch implementation, every ablation study, every convergence proof builds a layer of understanding that compounds rather than depreciates.

Knowing what to build, reasoning about whether the design is sound, catching errors that don't show up in tests: that's the specification layer, and that's the part worth investing in.
