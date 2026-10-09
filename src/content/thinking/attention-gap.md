---
title: "The Attention Gap: What Happens When Agents Ship Faster Than You Can Read"
description: "The software lifecycle was organized around the cost of writing code. Code is now cheap, and the scarce resource is human attention. What recursive language models, context language models, and calibrated decision models say about where that goes."
date: 2026-10-09
tags: ["AI Engineering", "Agentic AI", "Systems Thinking", "SDLC"]
---

The meter on my [orchestration run](/thinking/economics-agent-orchestration) read 93.8 million tokens. Seven subagent sessions had worked across three repositories in about 48 hours. I did the arithmetic afterward, mostly out of curiosity. At roughly three-quarters of a word per token and a brisk 250 words a minute, reading all of it would take around 4,700 hours, which is more than 28 weeks of every hour I have, with no sleep. Most of those tokens were re-read context rather than new material, so the honest number is far smaller. But the ratio is the point. The work arrived faster than any person could read it.

Writing code used to be the slow part of building software. It no longer is. The slow part is now a person deciding whether the code is right.

## What the old lifecycle assumed

The software development lifecycle was never really a law of nature. It was a scheduling answer to one expensive fact: implementation took a long time and a lot of skilled people. Requirements were written carefully because rework was costly. Design came first because building the wrong thing was a months-long mistake. Handoffs between phases were sized around how long a team needed to write, test, and ship a change. Agile shortened the cycles, but it kept the assumption underneath. Humans write the code, so the cycle is as fast as humans can write it.

When implementation drops toward zero cost, every one of those assumptions gets re-priced at once. Requirements are no longer written to protect a team from rework. They are written to tell an agent what done means. Design is no longer a diagram for humans to build from. It is a constraint an agent must satisfy. The phases do not disappear, but they stop being the shape of the work.

## Do the math on a week

There are 168 hours in a week. Sleep takes about 56. A full-time job takes 40, and that is before the commute. Meals, chores, family, and the ordinary friction of being a person take another large share. What remains for focused, careful reading is a small number, and it is roughly the same number it was in 2005, and it will be the same in 2035.

Agent output does not have that ceiling. It runs around the clock and in parallel, and each new model generation is better and faster than the last. One reviewer with a few good hours a day is the narrow end of a funnel that keeps widening. This is the [Jevons paradox](https://en.wikipedia.org/wiki/Jevons_paradox) applied to software. When a resource gets cheaper to use, we do not use the same amount of it more cheaply. We use much more of it. Cheaper code means more code, more branches in flight, and more pull requests than a team can honestly read.

For me the pressure is concrete. I work 40 billable hours a week and put another 20 to 35 into coursework and personal projects. My reading time is the scarcest input in my own pipeline. The same is true for a company with a hundred engineers, only the numbers are bigger. The constraint has moved from the keyboard to the reviewer.

## The AI-SDLC is a verification loop

If generation is cheap and attention is scarce, the lifecycle reorganizes around one question: what has to be true before a human spends time on this? The shape that emerges looks less like a waterfall and more like a loop: intent, parallel generation, independent verification, escalation.

The human artifacts change accordingly. The valuable things a person writes are the specification, the acceptance criteria, and the rules for when work gets escalated. The generated code becomes the intermediate product. I made the case in the [Meridian piece](/thinking/meridian-agent-harness): an agent graded its own work 5.5 out of 10, and an independent evaluator graded the same work 2.5. Self-assessment does not scale, because a generator that also judges is just a faster way to ship its own blind spots. Verification has to be structurally separate from generation, and most of it has to be deterministic code rather than another opinion.

## Three ideas that move the bottleneck

None of these removes the attention constraint. Each one changes where attention goes.

**What if the whole codebase is a variable, not a prompt?** [Recursive Language Models](https://arxiv.org/abs/2512.24601) treat a long input as part of an external environment. The model examines it, breaks it into pieces, and calls itself on the pieces. The authors report that RLMs can process inputs up to two orders of magnitude beyond a model's context window at comparable cost. I have used this idea in practice without calling it that. [Prime Agent](https://www.primeintellect.ai/blog/prime-agent), which drives SiteWatch's verification step, is built on the RLM design: context is a variable and subagent delegation is a function call inside a persistent Python kernel. The practical effect is that a repository stops being something an agent must squeeze into its window and becomes something it can query.

**What if the model manages its own context?** [Context Language Models](https://arxiv.org/abs/2609.37725), posted at the end of September, treat context as a file the model can freely edit, and extend that to multi-agent systems where each agent's context is a file. The authors report, among other results, 11.4% higher accuracy with 21.5% fewer FLOPs on BrowseComp-Plus, and a 65% greater improvement on a 24-hour multi-repository agent-swarm task at the same compute. (This is a different thing from the contrastive "CLM" that ranks candidate actions, and the name collision is worth being careful about.) The implication for the lifecycle is that the harness work people do by hand today, such as memory layers and compaction, is moving into the model. Prime Agent's own "continual harness," where the agent edits its own prompts, skills, and memory, points the same way. Some of what I build by hand has a shelf life.

**What if software could say how sure it is?** TypeSafe's [Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev) is trained with Reinforcement Learning for Calibrated Decisions (RLCD) and returns typed, probabilistic decisions instead of free text. The goal is honest confidence: a decision that says 90% should be right about 90% of the time. For the attention problem this matters more than speed. Calibrated confidence is how you ration a reviewer. Route the high-confidence, low-stakes decisions through automatically and send the uncertain ones to a person. A companion paper, [Just Ask Jev](https://arxiv.org/abs/2609.29429), reports a median zero-shot AUROC of 0.886 when Jev is used to detect alignment failures, at 63 times less cost than LLM-judge scoring.

## What this doesn't solve

Everything above should be read with the discount it deserves. Most of the numbers come from the people selling or publishing the systems. TypeSafe's own page says Jev is in early access, that its pricing may be subsidized, and that its comparisons use a wrapper that adds latency to the LLMs it is measured against. It publishes no quantitative calibration results. The independent evidence is so far one paper on one use case. Prime Agent's reported 95.5% on ARC-AGI-3 is a headline from its authors, and the same post documents the agent reward-hacking in a Factorio task. A system that can be calibrated about its decisions can still be confidently wrong about the world.

Models that edit their own context raise a quieter question: what did they throw away, and who checks? A summary written by the thing being summarized is a self-grade of its own. And the junior pipeline problem from the [systems thinking piece](/thinking/systems-thinking-gap) gets worse here. If nobody reads the code, the apprenticeship that taught people to read it disappears, and the review capacity we are counting on stops being refilled.

## Where this goes

I would hold the following loosely, because it is a forecast and not a finding. The human role moves from author to reviewer, and then to policy setter: you define intent, acceptance criteria, and escalation thresholds, and you read what falls under those thresholds. Agents will decompose their own work and manage their own context. Small calibrated models will do triage on what reaches a person. The metric that matters shifts from lines of code or velocity to human hours per verified change, which is a number almost nobody tracks today.

The wider version of this question is bigger than software. Any field where machines can generate faster than people can judge will hit the same wall: law, medicine, finance, science. The same answer applies. Cheap generation does not remove judgment. It makes judgment the thing you have to design for.

## The part I'm keeping

I am rewriting my own habits around a simple rule. I stop asking how much an agent can produce and start asking how much of it I can afford to trust. That pushes me toward more deterministic checks, more independent evaluators, and clearer specifications up front, because every one of those spends machine time to save human time.

The models will keep getting faster, and the code will keep getting cheaper. Your attention will not. Spend agent hours on generation, spend verification on triage, and spend your own hours only where the confidence is low.
