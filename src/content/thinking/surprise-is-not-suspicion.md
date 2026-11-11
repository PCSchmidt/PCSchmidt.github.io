---
title: "Surprise Is Not Suspicion: What a World Model Taught Me About Anomaly Detection"
description: "I trained a JEPA world model on real ship tracks and committed to how much it had to beat a Kalman filter by before I saw any data. It missed. What it got wrong, and what the miss taught me, is more useful than a clean win would have been."
date: 2026-11-11
tags: ["World Models", "Evaluation", "Anomaly Detection", "Pre-registration", "AI Engineering"]
---

A cargo ship sat at a terminal on the Elizabeth River in Norfolk for most of June 2025. As far as anyone can tell, it did nothing unusual. My anomaly detector flagged 76 of its 136 two-hour windows anyway.

That ship is the best summary I have of what I learned building [Latent Wake](https://github.com/PCSchmidt/latent-wake). It is a world model that watches AIS ship tracks and raises an alarm when a ship does something it cannot predict. The model was surprised by that ship over and over, and nothing was wrong. Surprise is not suspicion. Most of the hard part of anomaly detection lives in the gap between the two.

## The bet

AIS is the radio beacon large ships use to broadcast who they are, where they are, and how fast and in what direction they are going. It underpins port safety, insurance, and sanctions enforcement, and it is easy to abuse. Transponders get switched off. Positions get spoofed. Honest transponders report ships loitering where they have no business, or leaving their route to meet another vessel. The machine-learning problem is that there are almost no labeled incidents to learn from.

A world model sidesteps the labels. Train it only on normal traffic to predict what a ship does next, and treat a bad prediction as a signal. The particular kind I used, a joint-embedding predictive architecture (JEPA), makes that prediction in a learned internal representation instead of in raw coordinates. [LeWorldModel](https://arxiv.org/abs/2603.19312), published this year, showed a JEPA can be trained stably end to end with a single regularizer. It also showed that the model's surprise spikes when an object in a scene teleports. A ship that jumps across the bay is the maritime version of that teleporting cube, so the idea felt worth a real test.

I designed the model around one deliberate gap. It sees 16 minutes of a ship's motion and is told what the ship *reports* it will do next: speed, course, heading. It is never told where the ship actually went. If the positions disagree with the reports, the prediction should fail.

## Committing before looking

Before any model touched real data, I wrote down what success meant, with numbers. The main claim was that the JEPA would beat a Kalman filter on behavioral anomalies (loitering and route deviation) by at least 0.10 AUROC. The test set was frozen with a checksum before training, and the benchmark code refuses to score it twice with different inputs.

This is the part of the project I would defend hardest, because without it every later number is negotiable. When you can look at the test set as many times as you like, you will find a configuration that wins. You may not even notice you are doing it.

## What happened

The JEPA beat the Kalman filter on behavioral anomalies by 0.070 AUROC, with a 95% interval from 0.032 to 0.115. That is a real effect, clearly above zero. It is not the 0.10 I committed to. Three of the eight pre-registered criteria passed.

Three things in the results matter more than that headline.

**The latent space was not the secret ingredient.** After the main scoring I added a simpler baseline in the style of TrAISformer. It predicts the next step's position, speed, and course directly, as a classification over bins, with no learned latent space. On behavioral anomalies it tied the JEPA (difference +0.009, interval −0.027 to +0.042). It was better on spoofs and teleports and held the false-alarm budget better. The JEPA kept one clear win, loitering, where it was the best detector of the eight.

So the useful idea was the *objective*: predict the next move from what the ship claims it will do. Whether that prediction happens in a latent space or in observation space made no measurable difference to the headline. On this problem, the excitement about latent world models did not survive contact with a fair baseline. That is not a knock on JEPAs. It is a reminder that the comparison you run decides what you get to claim.

**Physics wins on physics.** A Kalman filter that reads the ship's reported velocity is nearly perfect on spoofed positions, and the JEPA is near chance on the smallest ones. I suspected this early. It is why the headline claim was about behavior rather than spoofing. It still stung to see a filter from the 1960s beat a 10-million-parameter model so cleanly on the anomaly kind that motivated the project.

**Surprise is not suspicion.** A false-alarm budget of 1%, set on validation vessels, became 2% to 5% on vessels the model had never seen. The misses were not spread evenly. Four vessels raised 85% of the JEPA's false alarms: the moored cargo ship in Norfolk, a fishing boat working the mid-bay near Reedville, a harbor pilot boat in Baltimore, and a dredge in Hampton Roads.

Each one makes sense once you know the bay. Pilot launches run out to big ships and match their speed alongside. Dredges creep back and forth in the channels. A fishing boat working its nets circles in ways no cargo ship does. None of that is suspicious. All of it is unlike the training data. The model learned what normal traffic looks like, and it is right that these vessels are not that. But "not like what I saw" is a statement about the model's experience, not about the vessel's intent.

This is the problem with every learned anomaly detector, and it is easy to forget. The base rate of benign weirdness is enormous. A real deployment would need to know where the pilot stations, anchorages, and dredging operations are, or it will spend its alert budget on the people keeping the port running.

## The bug that looked like success

The most instructive moment came before the test scoring, and it involved a number that looked fine.

I had planned a fused detector that takes the larger of the JEPA's and the Kalman filter's calibrated scores. On validation it met its AUROC criteria. Then I added a diagnostic showing where its alerts landed. Ninety-nine percent of them were on stopped ships. It never alerted on a moving vessel at all.

The cause was a calibration choice. Some groups of stopped vessels had scores so uniform that their spread was nearly zero, so any small deviation became an enormous z-score and took the whole alert budget. The contract's criteria did not catch it. AUROC is computed within each anomaly kind, so it was blind to *where* the alarms went.

Fixing it fairly meant calibrating every detector the same way, including the Kalman baseline, which had been left uncalibrated. That fix helped Kalman more than the JEPA, and the JEPA went from passing two validation criteria to failing them. I adopted the fix anyway and kept the margins where they were. The amendment is logged, with its cost, in a file that predates the test scoring.

The lesson I took is that your metrics define what you are able to see. A detector can score well on every number you chose and still be useless in the one way you did not think to measure. The defense is not a better metric. It is the habit of looking at what the system actually does: where the alerts go, which vessels raise them, what the failures have in common.

## Built in a week, by an agent, under gates

Latent Wake was scoped as a 12-week project on November 5 and shipped on November 11. An AI coding agent wrote the code. I scoped it, chose the region and the claims, ran every training job on my laptop, and approved each phase. The project ran under [Meridian](https://github.com/PCSchmidt/meridian), the harness I [wrote about earlier](/thinking/meridian-agent-harness).

Speed is not the point of that story. What matters is that the honesty was mechanical. The agent could not approve its own gates. The test set could be scored once and only once. The criteria were frozen before the data existed. When the results came back below the margin, there was no conversation to have about moving it, because the decision had been made and recorded when nobody knew the answer.

I think that is what working well with coding agents will look like more and more. The agent produces code quickly, and the human's job shifts toward deciding, in advance, what would count as being wrong.

## What I would tell someone starting the same project

Write the success criteria before you have data, with numbers, and expect to miss some of them. Build the strongest simple baseline you can, then a second one, because the first fair comparison is where most of the claims die. Look at where the alarms land, not just how many there are. And when the model is surprised, ask what it has not seen before you ask what the ship has done wrong.

Three of eight is not a result I would have chosen. It is a result I can stand behind, and that turned out to be worth more.

*The full write-up, results, and code are in the [Latent Wake repository](https://github.com/PCSchmidt/latent-wake). The [live panel](https://pcschmidt.github.io/darkwater/latent-wake.html) lets you pick a detector, see what it flags on real Chesapeake Bay tracks, and then reveal which alerts were real.*
