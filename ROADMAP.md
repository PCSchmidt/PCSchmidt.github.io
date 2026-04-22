# Portfolio Improvement Roadmap

**Last updated:** April 21, 2026
**Current grade:** A−
**Target:** Portfolio that honestly represents skills, demonstrates learning trajectory, and signals readiness for applied ML/AI engineering roles

---

## Baseline Assessment

### Who you actually are

- **Current role:** ML Engineer at JPO — writing Python and SQL scripts and notebooks for data analysis as part of a data modernization initiative. Not shipping production ML models.
- **Previous role:** Data Engineer / Software Engineer at HII (Fortis AI project) — data analysis of streaming, GIS, GDELT, graph work (SPARQL, Turtle), data pipeline work. Junior level — primarily approving git submits and drafting technical documentation.
- **Education:** MS Applied Mathematics. Currently pursuing MSE in AI Engineering at Johns Hopkins University ([program link](https://ep.jhu.edu/programs/artificial-intelligence/)).
- **Portfolio projects:** Personal learning projects and JHU coursework — not professional production systems.

The portfolio should frame you as: **an applied mathematician and data professional building toward AI engineering, with hands-on projects that demonstrate real technical depth.** Not as someone who ships production ML systems — because that isn't the current reality and a competent interviewer will catch the gap.

### Current portfolio inventory

The Astro 6.1.5 site at `PCSchmidt.github.io` (static output, deployed via GitHub Actions on push to `master`) has three pages: Home (`index.astro`), Projects (`projects.astro`), and Resume (`resume.astro`). Pure custom CSS — no Tailwind, no framework. Inter font. Light mode only. Max width 960px.

**7 featured projects on `index.astro`** (all `status: 'featured'`):

| # | Project | Metrics on card | Paper? | Notebook? | Live demo? |
|---|---------|----------------|--------|-----------|------------|
| 1 | SkillSwap — AI-Powered Skill Bartering Platform | 384-dim semantic matching; 23 routes, 10 categories; Three-tier architecture | ❌ | ❌ | ✅ skillswapappmvp.vercel.app |
| 2 | Production Inference Optimization Study | ~9× throughput; 74% model size reduction; 2.9ms p50 | ✅ | ✅ | ❌ |
| 3 | Generative AI Journal Summarizer | 17+ LLM model configs; Multi-provider routing; BYOK token vault | ❌ | ❌ | ✅ Vercel |
| 4 | LearnOnTheGo — Prompt/PDF to Audio Lectures | Prompt + PDF ingestion; Multi-provider LLM + TTS; FastAPI + React + Railway/Vercel | ❌ | ❌ | ✅ learnonthego-bice.vercel.app |
| 5 | Generative Modeling Study (β-VAE) | 6 β-sweep configs; 19 tests; Evidence PNGs | ✅ | ✅ | ❌ |
| 6 | RL Environment + Q-Learning Study | 24 tests; Tabular + Deep RL; Custom Gymnasium env | ✅ | ✅ | ❌ |
| 7 | Optimizer Deep Dive: GD to Adam | 29 tests; ~93% MNIST; 3 optimizers from scratch | ✅ | ✅ | ❌ |
| 8 | Fine-tuning Study (GPT-2 + LoRA) | 0.65% trainable params (rank 8); ROUGE-L 0.139; BERTScore F1 0.453 | ✅ | ✅ | ❌ |

**JHU placeholder removed.** All projects now have `timeframe` dates.

**`ProjectCard.astro` props:** `title`, `description`, `tags[]`, `status`, `github?`, `demo?`, `evidence?`, `guide?`, `paper?`, `notebook?`, `metrics?[]`. No `timeframe`/date prop. No `image` prop.

**Hero section currently claims:**
> "I build machine learning systems that work in production — from data pipelines and model training to deployment, monitoring, and continuous improvement."
> "My work sits at the intersection of applied mathematics and production engineering: designing scalable inference services, optimizing model performance with quantization and batching strategies, and shipping models that create measurable impact."

**About chips currently include:** "⚙️ MLOps & Production ML Systems"

### Honesty audit — what needs to change immediately

These are not style issues — they are factual inaccuracies that will damage credibility with any interviewer who reads the code or asks follow-up questions.

| Issue | Severity | Detail |
|-------|----------|--------|
| **Journal Summarizer labeled "RAG" — there is zero RAG** | **RESOLVED** | Originally had no RAG despite claims. Phase 0 removed false claims. Phase 1.2 implemented genuine RAG: sentence-transformers (all-MiniLM-L6-v2, 384-dim) → FAISS IndexFlatIP → SQLite journal store. Eval harness: precision@3 = 0.80, MRR = 1.0, recall@3 = 0.77. Portfolio card and docs updated with accurate metrics. |
| **Hero bio claims "I build ML systems that work in production"** | **RESOLVED** | Phase 0.2 rewrote hero to honest framing: "Building production ML systems and studying AI engineering at Johns Hopkins." |
| **Hero bio claims "designing scalable inference services"** | **RESOLVED** | Phase 0.2 replaced with accurate description of actual project work. |
| **About chip says "MLOps & Production ML Systems"** | **RESOLVED** | Phase 0.3 changed to "Inference Optimization & Deployment." |
| **SkillSwap card says "Three-tier production deploy"** | **RESOLVED** | Metric already updated to "Three-tier architecture (Next.js + FastAPI + Supabase)". Railway backend verified live (model loaded, DB connected). Frontend on Vercel. `aiClient.ts` wires dashboard → `/api/skills/match`. Architecture claims are accurate. |
| **LearnOnTheGo e2e flow not confirmed working** | **RESOLVED** | Railway backend healthy. Vercel frontend is auth-gated (login wall). Card updated: demoted from `featured` to `active`, removed demo link, rewrote description/impact to reflect actual state, added timeframe. |
| **`aie/` DSPy workshop is third-party code** | **Low** | Workshop materials from AI Engineering Summit 2025, not original work. Appropriately not on the portfolio — should stay off unless you build original work on top of it. |

### What's actually working and honestly represented

- **Inference Optimization Study:** Genuine benchmarking study with real, verifiable numbers. The ONNX + INT8 quantization pipeline is real code, the measurements are reproducible, and the cosine similarity validation is the right thing to test. **This is your strongest piece.**
- **Optimizer Deep Dive:** Pure NumPy implementation of BGD, Momentum, and Adam with from-scratch backpropagation. ~93% MNIST with zero external ML libraries. 29 tests. This is verifiable and impressive — it demonstrates you understand the math underneath.
- **β-VAE Study:** From-scratch PyTorch implementation with systematic 6-config β ablation. 19 tests. Originated from JHU coursework (705.623) and was expanded. Honest, well-documented.
- **RL Study:** Custom Gymnasium environment with tabular Q-learning and DQN from scratch. 24 tests. Same coursework origin, same quality.
- **SkillSwap (partial):** The AI backend is real — `SentenceTransformer("all-MiniLM-L6-v2")` loads, generates embeddings, computes cosine similarity. The Next.js frontend is polished. But the end-to-end integration is incomplete, and "production deploy" overclaims the current state.
- **Fine-tuning Study:** GPT-2 124M + LoRA rank ablation on SAMSum dialogue summarization. CPU-only, 5 configs, real ROUGE-L and BERTScore measurements, 12 passing tests, 22-page PDF. Originated as JHU-motivated work to understand LLM internals beyond API calls.
- **Documentation rigor:** The Problem → Approach → Impact structure, evidence folders, CI badges, demo guides, Paper/Notebook links are a genuine differentiator regardless of project origins.

### Where it falls short for 2026 cutting-edge roles

| Gap | Severity | Source | Status |
|-----|----------|--------|--------|
| No agentic AI / tool-use work | Critical | Both evaluators | **RESOLVED** — Phase 2.1 shipped ReAct agent with 5 tools, 90% eval pass rate |
| No ML evals culture (unit tests ≠ ML evals) | High | Both evaluators | **RESOLVED** — RAG eval harness (Phase 1.2) + agent eval benchmark (Phase 2.1) |
| LLM usage is black-box (no fine-tuning, no internals) | High | Sonnet | **RESOLVED** — Phase 2.2 shipped GPT-2 + LoRA rank ablation with ROUGE + BERTScore eval harness |
| No multimodal work | Medium | Sonnet | Open |
| No dates or progression narrative | Medium | Grok | **RESOLVED** — Phase 0.7 added timeframe to all cards |
| JHU placeholder actively hurts credibility | Medium | Sonnet | **RESOLVED** — Phase 0.6 removed placeholder |
| No architecture diagrams (text-only everywhere) | Medium | Both evaluators | **RESOLVED** — Phase 1.1 added Mermaid diagrams to all 4 project READMEs |
| SkillSwap embedding model is dated (~2021 MiniLM) | Low-Medium | Sonnet | Open |
| LearnOnTheGo lacks measurable metrics | Low-Medium | Sonnet | Open |
| Visual design reads as generic GitHub Pages | Low | Sonnet | Open |

---

## Phase 0 — Fix Honesty Issues and Quick Wins

**Goal:** Remove false claims, reframe honestly, remove credibility drags, add missing metadata. No new projects.
**Effort:** 1–2 days
**Dependencies:** None
**This phase is non-negotiable. Everything else builds on credibility.**

### 0.1 Fix the Journal Summarizer framing

**Current state:** Title includes "(RAG)". Description says "RAG-based summarization workflow," "retrieval-first pipeline that chunks source content, indexes it for semantic lookup." Tags include "RAG" and "LangChain." Metrics say "Retrieval-augmented context." **None of this exists in the code.**

The actual application (`main.py`, ~800 lines) is a multi-provider LLM gateway: it takes journal text, sends it to one of 17+ LLM providers (Groq Llama 3, HuggingFace, OpenAI, Anthropic, etc.) for sentiment analysis, insights, and summarization. It has JWT-like session auth, BYOK token vault (Fernet/AES encryption), rate limiting, and a static HTML frontend.

**Action — update in both `index.astro` and `projects.astro`:**

1. **Change the title:**
   - From: `"Generative AI Journal Summarizer (RAG)"`
   - To: `"Generative AI Journal Summarizer"`

2. **Change the description:**
   - From: `"RAG-based summarization workflow for journal entries..."`
   - To: `"Multi-provider LLM gateway for journal entry analysis. Supports 17+ model configurations across Groq, HuggingFace, OpenAI, and Anthropic with session-based auth, BYOK token vault (AES-256), and rate limiting."`

3. **Change the tags:**
   - From: `['Python', 'RAG', 'LangChain', 'NLP']`
   - To: `['Python', 'FastAPI', 'LLM APIs', 'NLP']`

4. **Change the metrics:**
   - From: `['Document-to-summary workflow', 'Retrieval-augmented context', 'Production-oriented architecture']`
   - To: `['17+ LLM model configs', 'Multi-provider routing (Groq, HF, OpenAI, Anthropic)', 'BYOK token vault with AES-256 encryption']`

5. **On `projects.astro`, update the Problem/Approach/Impact:**
   - Problem: "Journal analysis requires flexible model selection — different LLMs have different strengths for sentiment, insights, and summarization tasks."
   - Approach: "Multi-provider gateway with configurable model routing, HMAC-SHA256 session tokens, Fernet-encrypted BYOK key vault, and per-key rate limiting."
   - Impact: "Working multi-provider LLM application with auth, encryption, and rate limiting. Deployed on Railway (backend) + Vercel (frontend). 7 contract/integration tests with CI."

This reframing is *more impressive than the fake RAG claim* to someone who reads the code — multi-provider routing with auth and encryption is real engineering.

### 0.2 Rewrite the hero section — ✅ DONE

**Completed.** Hero rewritten to honest framing: "Building production ML systems and studying AI engineering at Johns Hopkins. Background in applied mathematics and data engineering."

### 0.3 Fix the about strip chips — ✅ DONE

**Completed.** Changed chip from "MLOps & Production ML Systems" to "Inference Optimization & Deployment."

### 0.4 Fix the SkillSwap metrics — ✅ DONE

**Verified.** Railway backend is live (model loaded, DB connected). Frontend deployed on Vercel. `aiClient.ts` wires dashboard → `/api/skills/match`. Metric already reads `"Three-tier architecture (Next.js + FastAPI + Supabase)"` — accurate. Approach text about `all-MiniLM-L6-v2` and cosine similarity confirmed in backend code and deployed endpoint.

### 0.5 Verify LearnOnTheGo deployment — ✅ DONE

**Verified.** Railway backend healthy. Vercel frontend is auth-gated (login wall — recruiter cannot see app). README honestly states frontend integration is partially complete. Updated `projects.astro` card: demoted from `featured` to `active`, removed demo link (login wall), rewrote description/impact to reflect actual state (backend operational, frontend in progress), added `timeframe`.

### 0.6 Remove or replace JHU placeholder — ✅ DONE

**Completed.** Removed the empty JHU placeholder entry from `projects.astro`.

### 0.7 Add dates to project cards — ✅ DONE

**Completed.** Added `timeframe` prop to `ProjectCard.astro` and populated dates on all project cards.

### 0.8 GitHub profile polish ✅ DONE

**Completed April 22, 2026.** Created PCSchmidt/PCSchmidt profile README. Employer initially written incorrectly (US Patent and Trademark Office). Fixed in item 0.11.

### 0.9 Hero rewrite with employer framing ✅ DONE

**Completed April 22, 2026.** Updated hero-subtitle to "Machine Learning Engineer, HII Mission Technologies." Replaced single hero-desc paragraph with two honest paragraphs: five years experience / F-35 JPO / AWS GovCloud, and Towson MS 2021 / JHU MSE expected December 2028 / projects are personal/JHU work.

### 0.10 Resume inline experience section ✅ DONE

**Completed April 22, 2026.** Replaced the generic Highlights grid (Education / Core Skills / Focus Areas) with an inline Work Experience section (HII ML Engineer 2022-present, HII Fortis AI 2021-2022) and Education section (JHU 2025-Dec 2028, Towson 2019-2021). Cold visitors can now identify who you are professionally without opening the PDF.

### 0.11 Fix profile README employer error ✅ DONE

**Completed April 22, 2026.** Updated PCSchmidt/PCSchmidt README to correctly name HII Mission Technologies and F-35 JPO. Removed erroneous USPTO reference.

---

## Phase 1 — Existing Project Upgrades

**Goal:** Make existing work more credible and discoverable. Close gaps that don't require new repos.
**Effort:** 1–2 weeks
**Dependencies:** Phase 0 honesty fixes complete

### 1.1 Architecture diagrams for all projects ✅ DONE

**Completed April 22, 2026.** Added Mermaid architecture diagrams to README files for:
- `inference-optimization-study` (commit c982363)
- `finetuning-study` (commit 343c7a5)
- `generative-ai-journal-summarizer` (commit 547a166)
- `optimizer-deep-dive` (commit 8a5aa51)

All four repos now have architecture diagrams that render natively on GitHub.

### 1.2 Implement actual RAG on Journal Summarizer — ✅ DONE

**Completed April 19, 2026.** Chose Option A (implement genuine RAG).

**What was implemented:**

1. Embedding layer: sentence-transformers `all-MiniLM-L6-v2` (384-dim vectors, L2-normalized)
2. Vector store: FAISS `IndexFlatIP` (cosine similarity via inner product on normalized vectors)
3. Persistent storage: SQLite (`data/journal.db`) with FAISS index (`data/journal.faiss`)
4. Retrieval-augmented prompts: `rag/prompts.py` — context-aware templates for sentiment, insights, summarize
5. New endpoints: `POST /api/journal` (ingest), `GET /api/journal` (list), `GET /api/journal/stats`, `POST /api/rag/query`
6. Existing AI endpoints accept `use_rag: true` to automatically retrieve and inject longitudinal context
7. Custom eval harness (not RAGAS/DeepEval — built from scratch to demonstrate understanding):
   - 20-entry golden test set simulating 3 weeks of journaling
   - 5 thematic queries with hand-labeled expected retrievals
   - Metrics: precision@k, recall@k, MRR, avg cosine similarity
   - Results: **precision@3 = 0.80, MRR = 1.0, recall@3 = 0.77**
8. Portfolio card updated with RAG description, approach, and eval metrics
9. All project documentation updated for consistency

**Files created:** `rag/store.py`, `rag/retriever.py`, `rag/prompts.py`, `rag/__init__.py`, `eval/golden_set.py`, `eval/metrics.py`, `eval/run_eval.py`, `eval/results.json`

### 1.3 Add measurable metrics to LearnOnTheGo

**Current state:** README lists aspirational targets (lecture gen <30s, PDF processing <10s, 99.9% uptime) but none are measured.

**Steps:**

1. **Confirm the deployed app actually works end-to-end** (this may have been done in 0.5)
2. **Instrument the backend** — add timing to each stage:
   - PDF upload → text extraction time
   - Text → LLM lecture generation time
   - Lecture text → TTS audio generation time
   - Total end-to-end time
3. **Run against 5–10 representative inputs** — vary PDF sizes and prompt lengths
4. **Record p50, p95, max for each stage**
5. **Update portfolio card metrics** with real numbers
6. **Create `evidence/benchmarks/`** with raw timing data

**Decision point:** If the app doesn't work end-to-end in the deployed environment, or metrics are unimpressive:
- Honestly describe the current state on the portfolio card
- Consider demoting from Featured on `index.astro`

### 1.4 SkillSwap — complete AI integration or clarify state

**Current state:** Per `PROGRESS.md`, AI Skill Matching (Phase 3) is "Current" — the backend exists but frontend integration may be incomplete. `next.config.js` has `typescript.ignoreBuildErrors`.

**Steps:**

1. **Determine the actual state:** Can a user on the deployed Vercel app:
   - List a skill → get embedding generated → see matched partners?
   - If yes: the portfolio card is fine (update "Three-tier production deploy" to be precise)
   - If no: fix it or update the card

2. **If completing the integration:**
   - Wire the Next.js frontend to call the FastAPI embedding/matching endpoints
   - Fix TypeScript build errors (remove `ignoreBuildErrors`)
   - Deploy and verify end-to-end

3. **SkillSwap embedding model assessment** — document the `all-MiniLM-L6-v2` choice:
   - Create a benchmark comparing MiniLM vs `bge-small-en-v1.5`, `gte-small`
   - Measure latency, quality on SkillSwap's skill descriptions
   - Either upgrade or document why MiniLM is the right trade-off
   - This turns a potential weakness into an informed engineering decision

### 1.5 Ensure all project cards have working links ✅ DONE

**Link audit (verified 2026-04-19):**

| Project | GitHub | Demo | Evidence | Guide | Paper | Notebook |
|---------|--------|------|----------|-------|-------|----------|
| SkillSwap | ✅ | ✅ | ✅ README | ✅ | n/a (app) | n/a (app) |
| Inference Optimization | ✅ | n/a (study) | ✅ evidence/ | ✅ | ✅ | ✅ |
| Journal Summarizer | ✅ | ✅ | ✅ evidence/ | ✅ | n/a | n/a |
| LearnOnTheGo | ✅ | removed (auth wall) | ✅ README | ✅ | n/a | n/a |
| β-VAE Study | ✅ | n/a | ✅ PDF (no evidence/ dir) | ✅ | ✅ | ✅ |
| RL Study | ✅ | n/a | ✅ PDF (no evidence/ dir) | ✅ | ✅ | ✅ |
| Optimizer Deep Dive | ✅ | n/a | ✅ PDF (no evidence/ dir) | ✅ | ✅ | ✅ |

**Fixed:** 5 evidence links pointed to non-existent `evidence/` directories in generative-modeling-study, rl-environment-study, and optimizer-deep-dive. Redirected to PDF reports which contain full executed notebook outputs.

### 1.6 About page ✅ DONE

**Completed April 22, 2026.** Created `src/pages/about.astro` with three-paragraph narrative covering applied math foundation, five years at HII (Fortis AI then F-35 JPO), and JHU MSE as deliberate deepening. Added About link to nav in Layout.astro.

### 1.7 AeroIntel card re-framing ✅ DONE

**Completed April 22, 2026.** Rewrote AeroIntel description in both `index.astro` and `projects.astro` to lead with the engineering challenge (anomaly detection with no labeled data) rather than data volume. Updated metrics in both files to emphasize the pipeline architecture and inference throughput.

---

## Phase 2 — New Frontier Projects

**Goal:** Close the two biggest gaps — agentic AI and below-the-API LLM depth — through new learning projects.
**Effort:** 2–4 weeks
**Dependencies:** Phase 0 honesty fixes complete. Phase 1 ideally done (especially 1.2 evals) so the methodology carries forward.
**Framing:** These are JHU-motivated learning projects that demonstrate frontier skills you're actively developing, not professional production work.

### 2.1 Agentic AI project — ✅ DONE

**Completed April 19, 2026.** Built as an extension of the Journal Summarizer (direct LLM → RAG → agentic evolution).

**What was implemented:**
- ReAct-style planner built from Groq API primitives (no LangChain)
- 5 tools: journal_search, analyze_sentiment, trend_analysis, reflect, suggest_actions
- Conversation + long-term artifact memory (SQLite)
- 3 FastAPI endpoints: `/api/agent/chat`, `/api/agent/conversations`, `/api/agent/conversation/{id}`
- 10-case eval benchmark across 6 categories: 90% pass rate, 0.77 tool precision, 0.92 recall, 4.8s avg latency
- Model: Llama 4 Scout 17B via Groq function calling (30K TPM)
- Files: `agent/` module (schemas, tools, memory, planner, executor, eval_agent)

**Original recommendation (kept for reference):**

**Architecture:**
```
User Query → Planner Agent (selects tools + reasoning strategy)
                  ↓
    ┌─────────────┼─────────────┐
    ↓             ↓             ↓
 Search Tool   Retrieve Tool   Critique Tool
 (web/API)     (vector DB)     (LLM-as-judge)
    ↓             ↓             ↓
    └─────────────┼─────────────┘
                  ↓
         Synthesizer Agent (combines results)
                  ↓
         Memory Store (conversation + artifact history)
                  ↓
         Structured Output (with citations + confidence)
```

**Technical requirements:**

1. **Tool use with function calling:** 3–5 tools (document search, web retrieval, summarization, fact-checking, citation extraction). Use structured function calling (Anthropic `tool_use` or OpenAI `function_calling`). Architecture must be visible — build from API primitives, not hidden behind LangChain agent wrappers.

2. **Planning loop:** ReAct-style (Reasoning + Acting) or Plan-and-Execute. The agent decides which tools to call, in what order, and when to stop. Log the planning trace for observability.

3. **Memory and state management:** Short-term (conversation with token budget) + long-term (artifact store persisted across sessions). Implement retrieval over memory, not just append-to-context.

4. **Failure mode documentation:** Document at least 3 failure modes encountered during development. "Tried X → failed because Y → solved with Z." This is more valuable than a perfect demo.

5. **Evaluation methodology:**
   - Task completion rate on a benchmark set (20–30 queries with expected outputs)
   - Tool-call accuracy
   - Latency breakdown by stage
   - Cost per query (token usage)
   - Hallucination rate

**Framework choice:**
- **Preferred:** Build from API call primitives + state machine — demonstrates understanding
- **Acceptable:** LangGraph or CrewAI — if the architecture is clearly documented
- **Avoid:** High-level abstractions that hide the loop (e.g., `agent = create_agent(tools)`)

**Portfolio card draft:**
```javascript
{
  title: "Agentic Research Assistant",
  description: "Multi-step research agent with tool use, planning loops, and memory. Demonstrates ReAct-style reasoning with structured function calling and LLM-as-judge evaluation.",
  tags: ["Agentic AI", "Tool Use", "Function Calling", "LLM", "Python"],
  status: 'featured',
  metrics: ["X% task completion", "Y tools orchestrated", "Zms median query time"],
  timeframe: "Q2 2026"
}
```

### 2.2 Fine-tuning + evaluation study — ✅ DONE

**Completed April 20, 2026.** GPT-2 (124M) + LoRA rank ablation on SAMSum dialogue summarization. CPU-only.
- Repo: https://github.com/PCSchmidt/finetuning-study (commit eef0407)
- 5 src modules, 12 passing tests, CI, 22-page study PDF, DEMO_GUIDE
- 5 configs: rank [2,4,8,16] × alpha [8,16,32]; trainable params 202K–1.6M (0.65% at rank 8)
- Eval results: ROUGE-L 0.105–0.139, BERTScore F1 0.376–0.453, eval loss 2.510–2.561
- Portfolio cards added to index.astro and projects.astro (evidence → results/, paper → 22-page PDF)
- Adapted plan for CPU-only constraint: GPT-2 124M instead of Llama 7B+

### 2.3 Multimodal project (stretch goal)

**Priority:** Lower than 2.1 and 2.2. Only pursue if those are complete and polished.

**Options:**
- **Vision-capable agent** (combine with 2.1): Add image understanding tools using a VLM
- **Standalone multimodal pipeline:** Image+text task with concrete eval metrics

---

## Phase 3 — Presentation & Continuous Signals

**Goal:** Make the portfolio visually competitive and signal ongoing growth.
**Effort:** Ongoing
**Dependencies:** Phase 0 and Phase 1 content exists. Phase 2 ideally in progress.

### 3.1 Visual design refresh

**Current state:** Custom CSS, `#f9fafb` bg, `#1e40af` accent, 960px max, Inter font. Light mode only.

**Steps:**

1. **Dark mode:** Add CSS custom properties for dark theme + toggle button
2. **Tailwind evaluation:** Migrate only if committing to ongoing design work. Don't let design block content.
3. **Typography:** Consider a display font for headings (currently Inter everywhere)
4. **Responsive audit:** Test on mobile (320px, 375px, 414px)
5. **Lighthouse:** Target 95+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO

### 3.2 "Currently Exploring" section

Add to `index.astro` — compact chip list showing what you're learning:
```javascript
const currentlyExploring = [
  { topic: "Agentic RAG with tool use", status: "building" },
  { topic: "LoRA fine-tuning + eval harness", status: "building" },
  { topic: "vLLM continuous batching", status: "researching" },
  { topic: "Speculative decoding", status: "researching" },
];
```
Update monthly. Low-effort way to signal velocity and JHU program alignment.

### 3.3 Thinking section — ✅ DONE

**Completed April 20, 2026.**

- `src/content/thinking/` collection with Astro content schema
- `src/pages/thinking/index.astro` + `src/pages/thinking/[slug].astro` route
- "Thinking" added to navigation in `Layout.astro`

**Published articles:**
- ["The Evaluation Gap: Why 'It Works' Isn't Engineering"](https://pcschmidt.github.io/thinking/evaluation-gap) — evaluation methodology, ablation design, the β-VAE and inference optimization studies as case studies
- ["Why Mathematical Foundations Matter More as Coding Agents Commoditize Implementation"](https://pcschmidt.github.io/thinking/mathematical-foundations-coding-agents) — applied math as a durable advantage as implementation cost falls

**Possible future posts:**
- "What I learned benchmarking inference at 602 req/s"
- "Building a multi-provider LLM gateway: routing, auth, and trade-offs"
- "From coursework to portfolio: how I turned JHU assignments into case studies"

### 3.4 Monthly maintenance cadence

- [ ] All demo links working?
- [ ] All GitHub links resolving?
- [ ] Evidence paths valid?
- [ ] New metrics to update?
- [ ] "Currently Exploring" section current?
- [ ] Thinking post published this month?
- [ ] Lighthouse scores 95+?
- [ ] GitHub profile README current?
- [ ] Pinned repos still the right 6?

---

## Priority Matrix

| Priority | Item | Impact | Effort | Phase |
|----------|------|--------|--------|-------|
| **P0** | **Fix Journal Summarizer RAG claim** | **Critical** | **Low** | **0.1 ✅** |
| **P0** | **Rewrite hero section honestly** | **High** | **Low** | **0.2 ✅** |
| **P0** | **Fix about strip chip** | **High** | **Trivial** | **0.3 ✅** |
| P0 | Fix SkillSwap metrics | Medium | Low | 0.4 ✅ |
| P0 | Verify LearnOnTheGo deployment | Medium | Low | 0.5 ✅ |
| P0 | Remove JHU placeholder | Medium | Trivial | 0.6 ✅ |
| P0 | Add dates to projects | Medium | Low | 0.7 ✅ |
| P0 | GitHub profile polish | Medium | Low | 0.8 ✅ |
| P0 | Hero rewrite (employer, honest framing) | High | Low | 0.9 ✅ |
| P0 | Resume inline experience section | Medium | Low | 0.10 ✅ |
| P0 | Fix profile README employer error | High | Low | 0.11 ✅ |
| P1 | Implement RAG + evals on Journal Summarizer | High | Medium-High | 1.2 ✅ |
| P1 | Architecture diagrams (all projects) | Medium | Medium | 1.1 ✅ |
| P1 | About page | Medium | Low | 1.6 ✅ |
| P1 | AeroIntel card re-framing | Medium | Low | 1.7 ✅ |
| P1 | LearnOnTheGo metrics | Medium | Medium | 1.3 |
| P1 | SkillSwap AI integration / model assessment | Medium | Medium | 1.4 |
| P1 | Verify all project card links | Low | Low | 1.5 ✅ |
| P2 | **Agentic AI project** | **Critical** | **High** | **2.1 ✅** |
| P2 | **Fine-tuning + evals study** | **High** | **High** | **2.2** ✅ |
| P3 | Multimodal project | Medium | High | 2.3 |
| P3 | Visual design refresh | Low | Medium | 3.1 |
| P4 | "Currently Exploring" section | Low | Low | 3.2 ✅ |
| P4 | Thinking | Low | Ongoing | 3.3 ✅ |

---

## Grading Targets

| Dimension | Current | After Phase 0-1 | After Phase 2 | Target |
|-----------|---------|-----------------|---------------|--------|
| **Honesty / credibility** | ~~C~~ **A** | **A** | **A** | **A** |
| Documentation & rigor | A | A | A | A |
| Production ML credibility | C+ (projects, not production) | B (honest framing + evals) | B+ | B+ |
| Math/foundations depth | B+ | B+ | A− | A |
| Agentic/frontier AI | ~~D~~ **A−** | ~~D~~ A− | A− | A |
| **LLM depth** | C | **A−** (RAG + agent eval harnesses + LoRA fine-tuning study) | A− | A− |
| **Evals culture** | ~~C−~~ **B+** | **A−** (RAG eval + agent eval + fine-tuning eval harness) | A− | A |
| Multimodal | C | C | B (if 2.3) | B+ |
| Discoverability & polish | C+ | B+ | B+ | A− |
| Overall | **B+** | **A−** | **A−** | **A** |

---

## Open Decisions (Resolved 2026-04-19)

1. **Journal Summarizer path:** ✅ Implement actual RAG. Phase 0 removed the false RAG claims; Phase 1.2 will add genuine RAG + eval harness.

2. **LearnOnTheGo fate:** ✅ Keep as hobby project demonstrating full-stack implementation. Can reposition on the page if needed.

3. **SkillSwap AI integration:** ✅ Complete the frontend AI integration (Phase 3 of the app's roadmap).

4. **Agentic project scope:** ✅ Extend Journal Summarizer (shows evolution: direct LLM → RAG → agentic).

5. **Phase 2 ordering:** ✅ Agent first, then fine-tuning study.

---

## Revision History

| Date | Change |
|------|--------|
| 2026-04-19 | Initial roadmap created from dual AI evaluation synthesis |
| 2026-04-19 | Expanded with specific file paths, code changes, and step-by-step instructions |
| 2026-04-19 | Major revision: added honesty audit based on actual professional experience and code review. Reframed from "production ML engineer" to "applied mathematician building toward AI engineering." Added Phase 0 honesty fixes as non-negotiable first step. |
| 2026-04-19 | **Phase 0 executed.** Removed false RAG claims from Journal Summarizer (both pages). Rewrote hero bio honestly. Fixed MLOps chip → "Inference Optimization & Deployment." Fixed SkillSwap "production deploy" metric. Updated LearnOnTheGo framing. Removed JHU placeholder project. Added `timeframe` prop to ProjectCard + populated dates on all projects. Fixed projects page meta description. Open decisions resolved. |
| 2026-04-19 | **Phase 1.2 executed.** Implemented genuine RAG pipeline on Journal Summarizer: sentence-transformers + FAISS + SQLite, 4 new API endpoints, `use_rag` flag on 3 existing endpoints. Built custom eval harness (20-entry golden set, 5 queries, precision@3=0.80, MRR=1.0). Updated all project documentation for consistency. |
| 2026-04-22 | **Narrative and identity layer.** Added 0.9 (hero employer framing), 0.10 (resume inline experience), 0.11 (GitHub profile README employer fix), 1.1 (architecture diagrams), 1.6 (About page), 1.7 (AeroIntel re-framing). Footer updated. About page added to nav. Tier list in PORTFOLIO_EXECUTION_PLAN reordered. Current grade: A−. |
