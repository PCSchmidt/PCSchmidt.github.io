---
title: "The Systems Thinking Gap: What Happens When the Code Works But the System Doesn't"
description: "AI agents generate correct functions faster than ever. The hard part is knowing how those functions connect, what state they share, and why the whole thing falls apart at the edges."
date: 2026-04-24
tags: ["AI Engineering", "Systems Thinking", "Architecture", "Career"]
---

I spent a while recently building a hobby project [AeroIntel](https://github.com/PCSchmidt/aerointel), a real-time aviation intelligence pipeline that ingests live ADS-B telemetry, runs Kalman filtering for state estimation, clusters trajectories with DBSCAN, scores anomalies with IsolationForest, and pushes results to a Next.js frontend over WebSocket. The individual pieces are not complicated; I generated the first versions of most of them with an AI agent in an afternoon. What took the next three weeks was getting the pipeline to behave as a system.

The agent wrote a working Kalman filter, a working DBSCAN call, and a working anomaly scorer. What it did not write was the contract between them. The Kalman filter expects state vectors in a specific order. DBSCAN expects lat/lon pairs. The anomaly scorer expects the output of DBSCAN plus raw telemetry features. When the OpenSky feed hiccups and drops a message, the Kalman estimate drifts. When the drift crosses DBSCAN's epsilon threshold, the clustering reassigns aircraft IDs. When the reassignment changes the feature vector, the anomaly scorer fires false positives. None of these are code bugs. They are systems bugs, and they only appear when the pieces talk to each other under load.

This is the gap that AI coding agents do not close. They generate functions. Systems are the relationships between functions.

## What "the system" actually means

Peter Naur's 1985 paper "Programming as Theory Building" argues that a program is not just code; it is a mental model, a "theory," residing in the mind of the developer who built it. AI can generate the artifact, but it cannot possess the theory. If the human builder does not actively construct and maintain the mental model, the theory ceases to exist. You are left with a theory-less repository: a collection of snippets that pass unit tests but fail as a coherent system.

In my [LearnOnTheGo](https://github.com/PCSchmidt/learnonthego) project, the auth -> create -> preview -> confirm -> playback flow looks simple on a whiteboard. The agent generated each endpoint quickly. But the state that flows between them is subtle. The preview step returns a dry-run payload with a `lectureId`. The confirm step must reference that same `lectureId`, switch from dry-run to live generation, pick a provider based on user BYOK keys or environment secrets, and handle the case where the chosen provider is rate-limited or missing credentials. When I ran the production walkthrough in April 2026, confirm generation failed with `OPENROUTER_API_KEY is required` even though the preview had succeeded. The preview did not validate provider credentials because it was dry-run. The confirm step assumed they were present because the preview had passed. Neither step was wrong in isolation. The system was wrong.

That is the distinction. Correct functions do not imply correct systems.

## Three questions I now ask before every prompt

Building AeroIntel and debugging LearnOnTheGo taught me to ask three questions before I convert any agent output into a commit. They are not original; they are obvious in retrospect. The hard part is remembering to ask them.

**State: how does information move and persist?**

The agent is good at local logic and bad at global state. In AeroIntel, the ingestion module polls OpenSky and adsb.lol, normalizes the feeds into a common schema, and hands off to the Kalman filter. But "normalizes" means handling missing fields, differing update frequencies, and military feeds that include aircraft the commercial feed does not. If I had not explicitly defined the state transition matrix, the pipeline would have produced silent data corruption: valid-looking output built from mismatched inputs. The fix was not better code; it was a better model of what the state represents at each stage.

**Feedback: how does the system signal its health?**

Agent-generated code is often silent. It returns 200 OK until it doesn't. In LearnOnTheGo, I added structured generation telemetry to the V2 routes: source type, model choice, provider, duration, execution mode, and outcome. The telemetry does not fix failures, but it makes them legible. When a generation fails, I can see whether it failed at the LLM stage, the TTS stage, or the handoff between them. Without that, debugging is guesswork.

**Deletion: what happens when this module disappears?**

In the age of infinite generation, bloat is the default. Every module is a liability until proven otherwise. In AeroIntel, the Claude-powered explanation endpoint is wrapped behind a strict interface. If the Claude API changes pricing or goes down, the frontend degrades gracefully; the map and anomaly list still work. The module is deletable. That property is intentional, and it is the result of designing the boundary before writing the implementation.

## The broken junior pipeline

There is a harder observation here. I was recently a very junior developer and the traditional junior developer path was: struggle with syntax, debug for hours, develop an intuition for how systems fail, gradually learn to hold larger mental models. AI agents have removed the syntax struggle without replacing the systems intuition. The result is a generation of builders who can generate a FastAPI backend in an afternoon but cannot explain why it falls over when two clients write to the same SQLite connection.

I am absolutely not immune to this. My [SkillSwap](https://github.com/PCSchmidt/skillswapappmvp) backend has a working semantic matching pipeline: `SentenceTransformer` loads, generates 384-dimensional embeddings, computes cosine similarity, and returns ranked trades. The frontend is polished. But the end-to-end integration is incomplete; the frontend does not fully wire the matching results into the user flow. The individual components are correct. The system is not finished. That gap is not a coding problem; it is a systems problem, and it is the reason the project is still in Phase 2 of 5.

## What systems thinking looks like in practice

Systems thinking is not a personality trait; it is a protocol you can adopt. Here is what I do differently now after building an number projects using AI tools that all broke at the integration layer.

**Draw the architecture before prompting.** In AeroIntel, the Mermaid diagram in the README existed before most of the code. It defines the data flow: ingestion -> Kalman -> DBSCAN -> anomaly -> WebSocket -> frontend. When the agent generates a module, I know which stage it belongs to and what its input/output contracts are. The diagram is the theory. The code is the artifact.

**Audit the why, not just the how.** When the agent generates a solution, my job is to interrogate it. Why does this function accept a dictionary instead of a Pydantic model? Why is the state mutable here? If I cannot explain the architectural choice, I do not commit it. The agent is fast at implementation; I have to be slow at review.

**Encapsulate at boundaries.** I treat every agent-generated module as a stochastic black box. It gets a strict interface, a clear contract, and a defined error mode. In AeroIntel, the anomaly scorer is a function that takes a feature vector and returns a score plus an explanation string. It does not know about WebSockets, frontend state, or the Kalman filter. If I replace the IsolationForest with a one-class SVM tomorrow, the rest of the pipeline does not change.

**Spend cognitive energy on state, not syntax.** The agent can write a React component or a FastAPI endpoint faster than I can type the prompt. What it cannot do is decide whether the lecture generation state should live in the frontend, the backend, or split across both with a polling mechanism. That decision is the engineering. I try to spend 80% of my time on data flow and 20% on code.

## Why this matters for the work

If I were reviewing someone else's portfolio and saw a collection of correct functions with no story about how they connect, I think I should have questions. The projects that hold up are the ones that answer: what happens when the OpenSky feed drops a message? What happens when the LLM provider rate-limits? What happens when the user refreshes the page mid-generation?

The agents will keep getting better at writing functions. The question is whether I am getting better at holding the mental model of what those functions should do together. That is the systems layer, and that is the part worth investing in.
