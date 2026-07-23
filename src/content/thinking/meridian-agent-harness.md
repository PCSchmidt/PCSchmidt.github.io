---
title: "Building Meridian: What It Takes to Make an AI Agent Admit It Isn't Done"
description: "Without a harness, an agent scores its own work 5.5/10. An independent evaluator scores the same work 2.5/10. Meridian is my attempt to close that gap mechanically, and it started as a fork of a fellow student's framework."
date: 2026-07-23
tags: ["AI Engineering", "Agentic AI", "Tooling", "Systems Thinking"]
---

Every developer who has run an AI coding agent on a project longer than a single sitting has hit the same wall. It starts well. Features ship, momentum builds, and then somewhere around 70% completion the agent declares a feature "done" when the tests have not been run, marks a gate complete while three edge cases were silently skipped, and grades its own work a generous "looks good!" on code with a real bug in it. This is not carelessness. It is structural. A model that generates work and then evaluates that same work, in the same session, has no incentive toward a harsh self-assessment.

I wanted a number for this, so I ran the experiment. I had an agent build a feature and score it: 5.5/10, advisory feedback, ship it. Then I handed the exact same artifacts to a second agent in a fresh context, told it "you did not produce this work, your job is to find what is wrong," and asked it to score. It came back 2.5/10 with a blocking recommendation. That is a 3.0-point gap between how good an agent thinks its work is and how good it actually is, and that gap is the reason features get marked complete while the thing quietly doesn't work. [Meridian](https://github.com/PCSchmidt/meridian) is the framework I built to close it.

## Standing on someone else's shoulders

Meridian did not start from a blank page. It began as a fork of Syntaris, a framework built by [Brian O'Neal](https://github.com/brianonieal), a fellow student in the JHU AI Engineering program. Syntaris is a genuinely good idea: it breaks a build into ordered phases, blocks the work from advancing until each phase is finished and approved, keeps notes between sessions so the agent learns from past mistakes, and ships templates for common stacks. I used it, it worked, and using it taught me exactly where I wanted more.

My main pain point with Syntaris was that there was no feedback I was aware of. The gates enforced order, but when something went wrong three sessions ago, I had no way to see what happened. The memory lived in markdown files with no schema, no deduplication, and no integrity checks, which meant the model could quietly corrupt them and I would not know. And the gate model was a fixed linear ladder: confirmed, then roadmap, then mockups, then frontend, then go. That works beautifully for a SaaS web app and breaks for anything that isn't one. An ML research project does not have a "mockups approved" gate. A CLI tool doesn't either.

So the question I actually set out to answer was the one I keep coming back to in this work: can I take something that works and make it meaningfully better, not just different? Forking someone's framework is easy. Improving on it in a way you can defend is the hard part.

## What I changed, and why

Four changes carried the weight. Each one was a response to a specific way the original fell short.

**Composable gates instead of a fixed ladder.** In Meridian you write your project's checkpoints as a dependency graph in a YAML file. A web app might be `scope → backend → frontend → integrated → deployed`. A CLI tool looks different. An ML project gets a `data_contract` gate that forces the human to define the target metric, the evaluation thresholds, the baseline, and the approach constraints before a single line of training code runs. The gates are still mandatory, there is no skipping, but they are no longer hardcoded into the framework. The discipline stays; the rigidity goes.

**Schema-validated memory instead of markdown.** Meridian keeps three kinds of memory as validated JSONL: semantic patterns that hold across projects ("frontend gates with more than eight components take about 1.5x the estimate"), episodic events (what happened in each session), and corrections (predicted hours versus actual, for calibration). Every write is validated against a schema at the moment it happens. If the memory is corrupt, the gate blocks. There is no silent failure, and because it is JSONL I can answer "why did this fail three sessions ago?" with a one-line `jq` query instead of re-deriving it from scratch.

**The generator-evaluator separation, made mechanical.** This is the 3.0-point gap turned into infrastructure. Before a gate can advance, a separate evaluator subagent runs in a fresh context with no memory of what was built, reads the artifacts cold, and scores them across four dimensions. A score below 7.0 or any high-severity issue produces a `fail` verdict, the hook exits with code 2, and the model's next action is blocked. No amount of "but I think it's done" changes exit code 2. You cannot convince a bash script that the tests are passing when they are not. That is the whole point: the enforcement is deterministic, not a prompt the model can talk its way around.

**Observability as load-bearing infrastructure.** This was the moat. Every gate transition, every hook block, every evaluator verdict gets written to structured JSONL that an engineer can grep. `/health report` surfaces calibration trends, gate pass rates, and token costs. The distinction I kept coming back to is between LLM-legible and engineer-legible. Markdown the model reads is useful for context. JSONL an engineer can query is useful for debugging. Meridian gives you both, but it treats the second one as non-negotiable. If you can't see it, you can't trust it.

## What it caught when I actually used it

None of this matters if it only works in the demo, so I dogfooded Meridian on two real projects, including [Hard Power Intelligence](https://hardpowerintel.com), a production full-stack build I took from nothing to deploy under nine enforced gates.

The moment that justified the whole framework came at Gate 5, `brief_verified`. The agent had marked the gate ready to advance. The spec required verified citations. The independent evaluator read the artifacts cold and flagged that the citation handling was stub code, not working infrastructure, scored it a fail, and blocked. Without that gate, stub citations would have shipped as technical debt and citation verification would have been bolted on later as a post-hoc patch. Instead it got built as real infrastructure at the point where the spec said it mattered. That is exactly the quiet drift, the "done" that means "mostly done," that a gate-less process lets slip through and that costs you a rewrite two weeks later.

The other project taught me a different lesson. It was a live, deployed application that genuinely felt finished. Meridian's completion tracker reported 100% of features working on the happy path and 0% hardened through their edge cases and failure modes. Both numbers were true. The gap between "it runs" and "it holds up" was real and measurable, and it was invisible until something insisted on measuring it.

## The assumption I try not to forget

There is one principle in Meridian I care about more than the others: every rule the harness enforces encodes an assumption about something the current models can't be trusted to do on their own. Those assumptions have a shelf life. So each one is documented with its failure mode and a review trigger, and when a model update makes the weakness go away, the rule is meant to be pruned, not cargo-culted forward. A harness that assumes the models of a year ago is a harness that gets in your way.

That is the honest framing of the whole project. Meridian does not make a weak specification produce strong results; a garbage spec run through enforced gates just gives you gated garbage. What it does is make a capable model reliable enough to trust across a multi-week build, by refusing to let it grade its own homework. The agents will keep getting better at generating the work. The question I built Meridian to answer is whether anything in the loop is still willing to tell you when the work is wrong.
