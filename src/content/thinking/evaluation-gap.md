---
title: "The Evaluation Gap: Why 'It Works' Isn't Engineering"
description: "Most AI portfolios demonstrate that something runs. Few demonstrate that it works correctly. As models get better at generating code, the ability to evaluate outputs rigorously becomes the critical differentiator."
date: 2026-04-19
tags: ["ML Engineering", "Evaluation", "AI Engineering", "Quality"]
---

I spent a few weeks this spring doing an honest audit of my own portfolio. Not the code, just the claims. What I found was that most of my project descriptions answered "what did you build?" but almost none answered "how do you know it works?" That gap between construction and verification turns out to be the thing worth fixing.

There's a pattern across almost every AI engineering portfolio I've looked at: a project that runs, a demo that loads, and metrics that describe the architecture rather than the outcomes. "Multi-provider routing." "Three-tier deployment." "Custom Gymnasium environment."

These describe what was built. They don't tell you whether it *works*.

The bar for "something that runs" has dropped fast. An LLM can generate a working RAG pipeline in minutes. It can scaffold a FastAPI backend with auth, tests, and Docker in an afternoon. If your portfolio's main claim is "I built this," you're competing with a tool that builds faster. The part that doesn't get commoditized is whether you can prove it works, define what "works" means, and identify when it doesn't.

## What evaluation actually looks like

The question that kicked off my [inference optimization study](https://github.com/PCSchmidt/inference-optimization-study) was simple: if you can't retrain the model, how much performance can you recover from the serving layer alone? The headline answer was ~9x throughput. But the real engineering was in the evaluation methodology:

- **Cosine similarity validation** (0.962 mean) against the PyTorch baseline, because throughput is worthless if the embeddings diverge
- **p50/p95/p99 latency measurements,** because mean latency hides tail behavior that kills production SLAs
- **Batch size sweep with controlled warm-up,** because the first few inferences are always slower and naive benchmarks over-report improvement
- **Model size measurement at the file level,** because "74% reduction" needs a denominator

None of these are hard to implement. The hard part is *knowing to do them:* understanding which metrics matter, which confounds to control for, and what a suspicious result looks like.

## The β problem

My [β-VAE study](https://github.com/PCSchmidt/generative-modeling-study) started as JHU coursework: implement a variational autoencoder. The interesting question turned out to be what happened when you systematically varied β. The entire point is a 6-configuration ablation across β = 0.1, 0.5, 1.0, 2.0, 5.0, 10.0. Each configuration tells you something different about the reconstruction–disentanglement tradeoff. Low β gives sharp images but entangled latents. High β gives clean latent geometry but blurry reconstructions.

An agent could generate this sweep. What it can't do is:

1. **Choose the β values:** why these six? Because they bracket the critical transition where KL divergence starts dominating reconstruction loss, and the spacing is logarithmic to capture the nonlinear behavior of that transition
2. **Interpret the results:** what does it mean when β = 2 reconstructions look acceptable but the latent traversals show correlated dimensions? It means the model found a local optimum where disentanglement is incomplete but reconstruction cost is low enough to stop improving
3. **Know when results are wrong:** if β = 10 produced *sharper* images than β = 0.1, that would indicate a bug in the loss weighting, not an interesting finding

This is evaluation literacy. It's the difference between "I ran an experiment" and "I understood what the experiment told me."

## Evaluation as engineering practice

The AI engineering field is slowly converging on the idea that evaluation is a first-class engineering concern, not a post-hoc checkbox. The emergence of frameworks like RAGAS, DeepEval, and Braintrust reflects this, but the frameworks are tools, not substitutes for judgment.

A well-evaluated project needs:

- **A definition of correctness** that exists independent of the model output. For a summarizer, this might be: "the summary contains all key claims from the source and introduces no claims not present in the source." For a matching system: "the top-3 matches include at least one ground-truth relevant result for 90% of queries."

- **Metrics that measure what you claim.** If you say your model is "accurate," show accuracy on a held-out set. If you say it's "fast," show latency distributions, not averages. If you say it "scales," show performance at 2×, 5×, 10× the current load.

- **Failure case documentation.** Every system fails. The question is whether you've characterized *how* it fails. Does your summarizer hallucinate when given contradictory sources? Does your matcher degrade on short skill descriptions? Documenting failures is more informative than documenting successes.

- **Reproducibility.** Can someone else run your evaluation and get the same numbers? This means pinned dependencies, fixed random seeds, and evaluation scripts committed to the repo, not screenshots of terminal output.

## Why this matters for the job market

If I were reviewing someone else's portfolio and the only evidence their system worked was a demo video and passing unit tests, I'd have questions. Unit tests verify that the code does what the author thought it should do. They don't tell you whether what the author thought is correct.

The projects that hold up under scrutiny are the ones that answer: "How do you know this works?" If the answer is "the demo loads and the tests pass," that's table stakes. If the answer is "here's my evaluation methodology, here are the metrics, here's where the system breaks down, and here's what I'd improve," that's a different signal entirely.

## The compound effect

Evaluation skills compound across projects in a way that implementation skills don't. Once you've learned to benchmark inference latency rigorously, that methodology transfers to every future system. Once you've built an ablation study with proper controls, you can ablate anything. Once you've documented failure modes honestly, you develop an instinct for where systems are fragile.

This is why I'm increasingly focused on evaluation rigor in my own work, not because it makes the projects look better, but because it makes *me* better at the thing that's actually hard: knowing whether something works, and knowing what to do when it doesn't.

The agents will keep getting better at writing code. The question is whether you're getting better at knowing what the code should do.
