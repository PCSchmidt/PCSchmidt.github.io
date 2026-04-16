# Portfolio Execution Plan

This document is the step-by-step roadmap to take `PCSchmidt.github.io` from current draft state to a highly professional, fully functional portfolio.

## Goal

Build a portfolio that clearly demonstrates:
- Production-minded ML/AI engineering capability
- Full-stack delivery ability
- Strong technical communication through evidence-backed case studies
- Reliable, polished UX and deployment quality

## Guiding Principle

Do not wait for every project to be "perfect." Instead:
1. Ship honest, strong in-progress case studies with evidence.
2. Progressively upgrade each project and portfolio page as work matures.
3. Keep portfolio content tightly synced with repo reality.

## Phase 0: Portfolio Baseline Freeze (Day 0)

1. Create a branch for portfolio polish in `PCSchmidt.github.io`.
2. Capture current screenshots of Home, Projects, and Resume pages for before/after comparison.
3. Verify local run and build:
   - `npm install`
   - `npm run dev`
   - `npm run build`
4. Confirm the deploy workflow still passes on push.

## Phase 1: Project Prioritization and Positioning (Day 1)

1. Build a candidate list from your non-fork repos.
2. Rank projects into tiers:
   - Tier 1 (show now): most coherent and demonstrable
   - Tier 2 (show as in progress): promising, partially complete
   - Tier 3 (hold back): not yet presentable
3. Select final portfolio composition:
   - 2 to 3 flagship AI/ML projects
   - 1 to 2 full-stack projects
4. Assign each selected project one role:
   - "ML Systems"
   - "Generative AI Product"
   - "Full-Stack MVP"
   - "Research/Optimization"
5. Decide what not to show publicly yet.

Deliverable:
- A one-page internal project roster with tier, role, and current status.

### Current Tiered Shortlist (April 12, 2026)

Tier 1 (Primary portfolio focus now)
- `generative-ai-journal-summarizer` — Role: Generative AI Product (RAG)
- `learnonthego` — Role: AI Application Engineering (end-to-end flow)
- `skillswapappmvp` — Role: Full-Stack MVP

Tier 2 (Show as in-progress or add after hardening)
- `generative-ai-budget-tracker` — Role: AI Product Feature Engineering
- `advanced-stock-prediction-app` — Role: Applied ML + Visualization
- `option-pricing-models-app` — Role: Quant/ML Engineering
- `convex-optimization-app` — Role: Mathematical Modeling Showcase

Tier 3 (Hold back for now)
- Repo family with very similar scope and low differentiation for portfolio impact:
   - `generative-ai-story-starter`
   - `generative-ai-workout-planner`
   - `generative-ai-study-buddy`
   - `generative-ai-recipe-generator`
   - `generative-ai-travel-planner`
   - `generative-ai-meme-generator`
   - `generative-ai-flashcard-creator`
   - `generative-ai-icebreaker-generator`
- Older/smaller experiments that do not currently strengthen flagship narrative.

Selection notes
- Tiering is based on non-fork repos, recency, portfolio differentiation, and ability to show engineering depth.
- Promote from Tier 2 to Tier 1 only when repo has verified setup docs + evidence artifacts.

## Phase 2: Project Completion Plan in Source Repos (Week 1 to Week 3)

For each selected repo, run this sequence:

1. Define "Minimum Public-Ready" scope.
2. Create/open issues for missing essentials:
   - README clarity
   - setup instructions
   - architecture diagram
   - sample input/output
   - basic test coverage
   - deployment/run path
3. Implement functionality to satisfy core use case end-to-end.
4. Add proof artifacts:
   - screenshots/GIFs
   - metrics table
   - benchmark notes
   - known limitations
5. Add lightweight quality controls:
   - lint/format
   - CI checks
   - pinned dependencies
6. Tag a release or stable commit for portfolio linking.

Definition of done per project:
- Can be cloned and run by another engineer
- README includes purpose, architecture, run steps, and results
- At least one concrete outcome metric is documented
- Open issues list known next improvements

## Phase 3: Portfolio Content Upgrade (Week 2 to Week 4)

1. Update each project card with:
   - Final status (`featured` or `in-progress`)
   - Accurate tags
   - GitHub link
   - demo link if available
2. Expand each case study section in `src/pages/projects.astro` with consistent format:
   - Context
   - Problem
   - Approach
   - Results
   - Tradeoffs
   - Next iteration
3. Replace broad claims with evidence-backed language.
4. Add one short architecture visual per flagship project (static image under `public/images/projects/`).
5. Ensure each project includes a clear personal contribution statement ("I designed..., I implemented...").

Content quality rules:
- No unverifiable numeric claims
- No placeholder text
- No dead links
- Keep language direct and engineering-focused

## Phase 4: UX and Professional Polish (Week 3 to Week 4)

1. Improve information architecture:
   - Home = concise value proposition + selected highlights
   - Projects = deep technical proof
   - Resume = credential and experience summary
2. Tighten homepage hero copy to include one concrete credibility line.
3. Add a dedicated "Project Status" legend explaining `featured` vs `in-progress`.
4. Add favicon/logo consistency and metadata polish:
   - title and description per page
   - OG image quality
5. Verify responsive behavior on mobile and tablet breakpoints.
6. Add subtle but intentional interactions (hover states, focus states, consistent spacing rhythm).

## Phase 5: Functional and Technical Hardening (Week 4)

1. Add structured data (JSON-LD) for personal profile and website.
2. Run accessibility checks:
   - keyboard navigation
   - color contrast
   - semantic heading order
   - alt text quality
3. Run performance checks:
   - image optimization
   - Lighthouse pass for Performance/SEO/Best Practices/Accessibility
4. Validate all internal and external links.
5. Ensure resume PDF opens and downloads correctly across browsers.
6. Confirm GitHub Pages deploy remains stable after all changes.

## Phase 6: Credibility Layer (Week 4 to Week 5)

1. Add a concise "Engineering Practices" section:
   - testing approach
   - CI/CD approach
   - observability approach
2. Add a "Current Focus" section to communicate active work clearly.
3. Add optional "Writing/Notes" section for technical reflections or project postmortems.
4. Include only public-safe details from defense/government work; avoid restricted information.

## Phase 7: Pre-Launch Review and Launch (Week 5)

1. Run full content QA pass (spelling, grammar, consistency, dates).
2. Run technical QA pass:
   - `npm run build`
   - local preview
   - external link checks
3. Ask 2 to 3 peers for feedback on:
   - clarity
   - credibility
   - technical depth
   - visual professionalism
4. Apply final edits.
5. Merge and deploy.
6. Announce updated portfolio on LinkedIn/GitHub profile.

## Phase 8: Ongoing Maintenance (Monthly)

1. Review project statuses monthly.
2. Promote in-progress projects to featured when they meet completion criteria.
3. Archive stale or low-value projects from the portfolio page.
4. Add one new evidence artifact per month (metric, benchmark, architecture update, or demo).
5. Re-run accessibility/performance checks quarterly.

## Operational Checklist (Use Weekly)

1. Are all featured projects runnable from their READMEs?
2. Are all project links alive and relevant?
3. Are all claims supported by evidence in repo/docs?
4. Is there at least one full-stack and one ML/AI flagship item?
5. Does the homepage reflect current reality?
6. Does the projects page show depth, not just tools?

## Immediate Next Actions (This Week)

1. Finalize Tier 1 and Tier 2 repo selection.
2. Open completion issues in each selected repo.
3. Finish one flagship project to public-ready definition.
4. Update that single project's portfolio case study with final evidence.
5. Repeat for second flagship project.

## Suggested Milestone Targets

- Milestone 1 (End of Week 1): Selected project list and completion issues created.
- Milestone 2 (End of Week 2): First flagship project fully public-ready.
- Milestone 3 (End of Week 3): Second flagship + one full-stack project at strong in-progress state.
- Milestone 4 (End of Week 4): Portfolio UX/polish and hardening complete.
- Milestone 5 (End of Week 5): Final QA and public launch.
