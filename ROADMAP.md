# Portfolio Improvement Roadmap

**Last updated:** April 19, 2026
**Current grade:** B+ (consensus from two independent AI evaluations)
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
| **Journal Summarizer labeled "RAG" — there is zero RAG** | **Critical** | `main.py` is a multi-provider LLM API gateway (Groq, HuggingFace, OpenAI, Anthropic, etc.) that sends journal text directly to LLM APIs for sentiment analysis and summarization. No chunking, no embeddings, no vector store, no retrieval. `requirements.txt` has only fastapi, uvicorn, pydantic, python-dotenv, httpx, cryptography. The portfolio card says "RAG-based summarization," "retrieval-first pipeline that chunks source content, indexes it for semantic lookup" — none of this exists in the codebase. Tags include "RAG" and "LangChain" — neither is used. |
| **Hero bio claims "I build ML systems that work in production"** | **High** | Current professional work is data analysis scripts/notebooks at JPO, not shipping ML to production. Previous role at HII was junior-level data engineering. Portfolio projects are personal/coursework. |
| **Hero bio claims "designing scalable inference services"** | **High** | The inference optimization study is a benchmark notebook, not a deployed service. No inference service is running in production. |
| **About chip says "MLOps & Production ML Systems"** | **High** | No MLflow, no model registry, no A/B testing, no monitoring pipeline exists in any project. Docker files exist for Railway deployment but that's web app hosting, not MLOps. |
| **SkillSwap card says "Three-tier production deploy"** | **Medium** | Per `PROGRESS.md`, Phase 2 (visual tokens) is complete but Phase 3 (AI Skill Matching integration) is still "Current." The AI backend exists but the full end-to-end semantic matching flow through the frontend is not yet complete. `next.config.js` has `typescript.ignoreBuildErrors`. |
| **LearnOnTheGo e2e flow not confirmed working** | **Medium** | The audio generation pipeline exists in code but end-to-end (topic → LLM generation → TTS → audio playback) isn't confirmed working in the deployed environment. Provider API keys may not be configured on Railway. |
| **`aie/` DSPy workshop is third-party code** | **Low** | Workshop materials from AI Engineering Summit 2025, not original work. Appropriately not on the portfolio — should stay off unless you build original work on top of it. |

### What's actually working and honestly represented

- **Inference Optimization Study:** Genuine benchmarking study with real, verifiable numbers. The ONNX + INT8 quantization pipeline is real code, the measurements are reproducible, and the cosine similarity validation is the right thing to test. **This is your strongest piece.**
- **Optimizer Deep Dive:** Pure NumPy implementation of BGD, Momentum, and Adam with from-scratch backpropagation. ~93% MNIST with zero external ML libraries. 29 tests. This is verifiable and impressive — it demonstrates you understand the math underneath.
- **β-VAE Study:** From-scratch PyTorch implementation with systematic 6-config β ablation. 19 tests. Originated from JHU coursework (705.623) and was expanded. Honest, well-documented.
- **RL Study:** Custom Gymnasium environment with tabular Q-learning and DQN from scratch. 24 tests. Same coursework origin, same quality.
- **SkillSwap (partial):** The AI backend is real — `SentenceTransformer("all-MiniLM-L6-v2")` loads, generates embeddings, computes cosine similarity. The Next.js frontend is polished. But the end-to-end integration is incomplete, and "production deploy" overclaims the current state.
- **Documentation rigor:** The Problem → Approach → Impact structure, evidence folders, CI badges, demo guides, Paper/Notebook links are a genuine differentiator regardless of project origins.

### Where it falls short for 2026 cutting-edge roles

| Gap | Severity | Source |
|-----|----------|--------|
| No agentic AI / tool-use work | Critical | Both evaluators |
| No ML evals culture (unit tests ≠ ML evals) | High | Both evaluators |
| LLM usage is black-box (no fine-tuning, no internals) | High | Sonnet |
| No multimodal work | Medium | Sonnet |
| No dates or progression narrative | Medium | Grok |
| JHU placeholder actively hurts credibility | Medium | Sonnet |
| No architecture diagrams (text-only everywhere) | Medium | Both evaluators |
| SkillSwap embedding model is dated (~2021 MiniLM) | Low-Medium | Sonnet |
| LearnOnTheGo lacks measurable metrics | Low-Medium | Sonnet |
| Visual design reads as generic GitHub Pages | Low | Sonnet |

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

### 0.2 Rewrite the hero section

**Current hero** overclaims production ML experience. Replace with honest positioning that highlights what's genuinely true: applied math background, JHU AI Engineering program, and hands-on projects that demonstrate real depth.

**Replace the two `hero-bio` paragraphs in `index.astro`:**

From:
```
I build machine learning systems that work in production — from data pipelines and model
training to deployment, monitoring, and continuous improvement. With a Master's in
Applied Mathematics and a current MSE in AI Engineering at Johns Hopkins University,
I bring mathematical rigor to deep learning, optimization, and applied ML research.

My work sits at the intersection of applied mathematics and production engineering:
designing scalable inference services, optimizing model performance with quantization
and batching strategies, and shipping models that create measurable impact.
```

To:
```
Applied mathematician and AI engineering graduate student building toward production
ML systems. With a Master's in Applied Mathematics and a current MSE in AI Engineering
at Johns Hopkins University, I bring mathematical rigor to deep learning, optimization,
and applied ML research.

My projects demonstrate hands-on depth across the ML stack: from-scratch optimizer
implementations with convergence analysis, inference optimization benchmarks (9× throughput
via ONNX + INT8 quantization), generative modeling ablation studies, and full-stack
applications with semantic matching and multi-provider LLM integration.
```

This is honest, still compelling, and every claim is verifiable from the projects.

### 0.3 Fix the about strip chips

**Replace the misleading chip in `index.astro`:**

- From: `⚙️ MLOps & Production ML Systems`
- To: `⚙️ Inference Optimization & Deployment`

This accurately describes the inference study and the Railway/Vercel deployments without claiming MLOps pipelines that don't exist.

### 0.4 Fix the SkillSwap metrics

**Current:** Metric says `"Three-tier production deploy"`.

**Action — choose one depending on current SkillSwap state:**

- If AI matching through the frontend is not yet working end-to-end:
  - Change to `"Three-tier architecture (Next.js + FastAPI + Supabase)"` — describes the architecture without claiming it's production-complete
- If AI matching works through the frontend:
  - Keep as-is, but verify the claim is true by testing the deployed app

Also in `projects.astro`, the approach text mentions `"all-MiniLM-L6-v2... cosine similarity with cross-category explanations"` — verify this flow actually works in the deployed app. If it only works in the standalone backend, say so.

### 0.5 Verify LearnOnTheGo deployment

**Action:** Hit `https://learnonthego-bice.vercel.app` and `https://learnonthego-production.up.railway.app` and test the actual flow:
1. Can a user submit a prompt?
2. Does it generate a lecture?
3. Does TTS produce audio?
4. Is the audio playable?

If the flow doesn't work end-to-end in production:
- Update the description to accurately describe the current state (e.g., "Backend API with lecture generation pipeline. Frontend deployed on Vercel with backend on Railway.")
- Change metrics to reflect what actually works, not aspirational features

### 0.6 Remove or replace JHU placeholder

**Current state:** `projects.astro` has an 8th project entry with `status: 'in-progress'`, problem/approach/impact all "pending," zero links.

**Action — choose one:**

**Option A (recommended): Remove entirely.**
Delete the 8th object from the `projects` array in `projects.astro`. It doesn't appear on `index.astro`. A blank card with "pending" everywhere is worse than no card.

**Option B: Replace with real JHU coursework content.**
If you want to highlight the JHU program, replace with a description of what you've actually studied and built:
- The β-VAE, RL, and Optimizer studies already came from 705.623 — those are already on the portfolio
- If there's additional coursework with concrete artifacts, describe it honestly
- Must have at least a GitHub link and real Problem/Approach/Impact text

### 0.7 Add dates to project cards

**Current state:** `ProjectCard.astro` interface has no `timeframe` prop.

**Steps:**

1. **Add the prop to `ProjectCard.astro`:**
   - Add `timeframe?: string;` to the `Props` interface
   - Add `timeframe` to the destructuring
   - Render next to the status badge: `{timeframe && <span class="project-timeframe">{timeframe}</span>}`
   - CSS: `.project-timeframe { font-size: 0.8rem; color: var(--color-text-muted); }`

2. **Populate with honest dates in both `index.astro` and `projects.astro`** — use actual build dates from git history

3. **Pass the prop in JSX:** `timeframe={project.timeframe}` on both pages

### 0.8 GitHub profile polish

**Current state:** No `PCSchmidt/PCSchmidt` profile README repo exists.

**Steps:**

1. **Create `PCSchmidt/PCSchmidt` repo** with a `README.md`:
   ```markdown
   # Chris Schmidt
   **Applied Mathematician → AI Engineer** | MS Applied Mathematics | JHU AI Engineering (MSE)

   Building hands-on ML projects while completing an MSE in AI Engineering at Johns Hopkins.
   Background in applied mathematics with professional experience in data engineering and analysis.

   ### Highlighted Projects
   - 🔬 [Inference Optimization Study](link) — 9× throughput via ONNX + INT8 quantization
   - 🧮 [Optimizer Deep Dive](link) — SGD → Adam from scratch in pure NumPy (~93% MNIST)
   - 🤖 [SkillSwap](link) — Semantic skill matching (Next.js + FastAPI + pgvector)
   - 📊 [β-VAE Ablation Study](link) — 6-config β sweep, from-scratch PyTorch

   📐 [Portfolio](https://pcschmidt.github.io) · 📄 [Resume](link)
   ```

2. **Pin top 6 repos** (ordered by strength):
   `inference-optimization-study`, `optimizer-deep-dive`, `skillswapappmvp`, `generative-modeling-study`, `rl-environment-study`, `generative-ai-journal-summarizer`

---

## Phase 1 — Existing Project Upgrades

**Goal:** Make existing work more credible and discoverable. Close gaps that don't require new repos.
**Effort:** 1–2 weeks
**Dependencies:** Phase 0 honesty fixes complete

### 1.1 Architecture diagrams for all projects

**Current state:** `public/images/projects/` doesn't exist. All architecture descriptions are text-only.

**Tool choice:** Mermaid (renders in GitHub READMEs natively, can be exported to SVG/PNG for the portfolio site).

**Steps:**

1. **Create `public/images/projects/` directory**

2. **Design diagrams for each project:**

   **SkillSwap:**
   ```
   User → Next.js Frontend → FastAPI Backend → SentenceTransformer (MiniLM-L6-v2)
                                    ↓                    ↓
                              Supabase Auth       pgvector (384-dim embeddings)
                                    ↓                    ↓
                              PostgreSQL ←──── Cosine Similarity Matching
   ```

   **Inference Optimization:**
   ```
   PyTorch Model → ONNX Export (Optimum) → INT8 Dynamic Quantization
        ↓                    ↓                        ↓
   Baseline Bench      ONNX Runtime Bench       Quantized Bench
        ↓                    ↓                        ↓
                    Comparative Analysis
                    (latency, throughput, cosine similarity vs baseline)
   ```

   **Journal Summarizer (honest version):**
   ```
   Journal Entry → FastAPI Gateway → Provider Router
                                        ↓
                     ┌──────────────────┼──────────────────┐
                     ↓                  ↓                  ↓
                   Groq             HuggingFace         OpenAI/Anthropic
                  (Llama 3)         (Phi-3, etc.)      (BYOK tokens)
                     ↓                  ↓                  ↓
                     └──────────────────┼──────────────────┘
                                        ↓
                              Sentiment + Summary Response
                                        ↓
                              Static HTML Frontend (Vercel)
   ```

   **LearnOnTheGo:**
   ```
   Prompt/PDF Upload → PDFPlumber Extraction → OpenRouter LLM → Lecture Script
                                                                      ↓
                                                              ElevenLabs / Google TTS
                                                                      ↓
                                                              Cloudinary → Audio Player
   ```

   **β-VAE / RL / Optimizer:** Simpler diagrams showing model architecture, training loop, and evaluation

3. **Export as SVG** and place in `public/images/projects/`

4. **Add Mermaid code blocks to each project's README** (GitHub renders them natively)

### 1.2 Implement actual RAG on Journal Summarizer (or don't — but be honest)

**Decision point:** Now that the "RAG" label is removed (Phase 0.1), you have two options:

**Option A: Actually implement RAG (recommended if pursuing ML/AI engineering roles)**

This transforms the project from "LLM API wrapper" to something with real ML engineering substance. Steps:

1. Add document chunking (LangChain text splitters or manual)
2. Add embedding generation (sentence-transformers, already in your venv)
3. Add vector store (FAISS is simplest, ChromaDB for persistence)
4. Wire retrieval into the generation flow: chunk → embed → store → query → retrieve context → augmented prompt → LLM
5. **Add an eval harness** — this is where the real value is:

   **Using RAGAS** (recommended for RAG eval):
   ```
   pip install ragas
   ```
   - Create a golden test set: 20–50 journal entries with expected summaries
   - Metrics: context_precision, context_recall, faithfulness, answer_relevancy
   - Run evals, report scores in README and on portfolio card

   **Or using DeepEval:**
   ```
   pip install deepeval
   ```
   - Metrics: G-Eval, hallucination, answer relevancy, contextual precision/recall
   - Integrates with pytest

   **Or build a custom eval harness** (shows you can build, not just install):
   - Faithfulness check: does the summary contradict the source?
   - Coverage check: does the summary capture key facts?
   - Consistency check: same input → similar outputs?
   - LLM-as-judge with structured rubrics

6. Update the portfolio card title to: `"Journal Summarizer with RAG & Eval Harness"`
7. Update metrics with concrete eval scores

**Option B: Keep it as a multi-provider gateway and make that the story**

The current app is actually decent engineering — multi-provider LLM routing, session auth, BYOK encryption. Lean into that:
- Add provider-comparison benchmarks (latency, cost, quality per model)
- Add a provider failover mechanism
- Document the routing logic and trade-offs
- This positions the project as "LLM infrastructure" rather than "RAG pipeline"

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

### 1.5 Ensure all project cards have working links

**Link audit:**

| Project | GitHub | Demo | Evidence | Guide | Paper | Notebook |
|---------|--------|------|----------|-------|-------|----------|
| SkillSwap | ✅ | ✅ verify | ✅ | ✅ | n/a (app) | n/a (app) |
| Inference Optimization | ✅ | n/a (study) | ✅ | ✅ | ✅ | ✅ |
| Journal Summarizer | ✅ | ✅ verify | ✅ | ✅ | ❌ add if evals added | ❌ n/a |
| LearnOnTheGo | ✅ | ✅ verify | ✅ | ✅ | ❌ n/a | ❌ n/a |
| β-VAE Study | ✅ | n/a | ✅ | ✅ | ✅ | ✅ |
| RL Study | ✅ | n/a | ✅ | ✅ | ✅ | ✅ |
| Optimizer Deep Dive | ✅ | n/a | ✅ | ✅ | ✅ | ✅ |

**Action:** Hit every URL and verify it returns 200, not 404. Fix any dead links.

---

## Phase 2 — New Frontier Projects

**Goal:** Close the two biggest gaps — agentic AI and below-the-API LLM depth — through new learning projects.
**Effort:** 2–4 weeks
**Dependencies:** Phase 0 honesty fixes complete. Phase 1 ideally done (especially 1.2 evals) so the methodology carries forward.
**Framing:** These are JHU-motivated learning projects that demonstrate frontier skills you're actively developing, not professional production work.

### 2.1 Agentic AI project (highest priority new work)

**Why this matters:** Both evaluators flagged the complete absence of agentic work as the single biggest gap. The 2025–2026 ML engineering market has shifted toward tool-using agents, planning systems, and multi-step orchestration. Without a visible agentic project, the portfolio reads as "2024 ML."

**Recommended approach: Agentic Research Assistant.** If you implemented RAG in Phase 1.2, extend the Journal Summarizer domain — this shows evolution (direct LLM → RAG → agentic). If not, build standalone.

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

### 2.2 Fine-tuning + evaluation study

**Why this matters:** Every project currently uses LLMs through APIs only. No fine-tuning, no weight inspection, no training dynamics. For roles involving model customization, this is a filter.

**This also connects to your math background** — LoRA is low-rank matrix approximation, which is applied linear algebra. The Optimizer Deep Dive already shows you understand gradient mechanics. Fine-tuning closes the loop.

**Technical plan:**

1. **Model:** `meta-llama/Llama-3.1-8B`, `mistralai/Mistral-7B-v0.3`, or `microsoft/Phi-3-small-8k-instruct`

2. **Task** (pick one where improvement is measurable):
   - Domain-specific summarization → measure ROUGE + faithfulness
   - Structured data extraction → measure F1 on field accuracy
   - Instruction following on a specific domain → measure helpfulness

3. **Dataset curation:** HuggingFace datasets or curate from public domain. Document why this data, how cleaned, train/val/test splits. 1K–10K examples.

4. **Training with LoRA/QLoRA:**
   - Ablate: LoRA rank [4, 8, 16, 32], alpha [16, 32, 64], target modules, learning rate, quantization [none, 4-bit NF4, 8-bit]
   - Use `peft` + `transformers` + `trl` (or `unsloth`)
   - Log to Weights & Biases

5. **Evaluation (critical):**
   - Automated: ROUGE, BERTScore, task-specific F1/accuracy
   - LLM-as-judge on a rubric
   - Ablation table: how each hyperparameter affects quality
   - Training curves: loss convergence, overfitting detection
   - Before/after: same prompts, base vs fine-tuned, side-by-side
   - Cost: training time, GPU hours

6. **Math connection:** Why does low-rank adaptation work? (SVD, matrix approximation). How does rank relate to effective dimensionality? Why does alpha/rank ratio matter? This bridges the Optimizer Deep Dive to LLM internals.

**Portfolio card draft:**
```javascript
{
  title: "LLM Fine-Tuning & Evaluation Study",
  description: "LoRA/QLoRA fine-tuning with systematic hyperparameter ablation, multi-metric evaluation, and training dynamics analysis. Connects low-rank adaptation theory to measured quality improvements.",
  tags: ["Fine-Tuning", "LoRA", "LLM", "Evaluation", "PyTorch"],
  status: 'featured',
  metrics: ["X% quality improvement over base", "4 rank configs ablated", "Y eval metrics tracked"],
  timeframe: "Q2 2026"
}
```

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

### 3.3 Blog / writing section

**Astro implementation:**
1. Create `src/content/blog/` + `src/content/config.ts` (blog collection schema)
2. Create `src/pages/blog/index.astro` + `src/pages/blog/[slug].astro`
3. Add "Blog" to navigation in `Layout.astro`

**Starter posts** (1 per week, drawn from existing work):
- "What I learned benchmarking inference at 602 req/s"
- "Why pure-NumPy neural networks still matter in 2026"
- "Building a multi-provider LLM gateway: routing, auth, and trade-offs"
- "From coursework to portfolio: how I turned JHU assignments into case studies"

### 3.4 Monthly maintenance cadence

- [ ] All demo links working?
- [ ] All GitHub links resolving?
- [ ] Evidence paths valid?
- [ ] New metrics to update?
- [ ] "Currently Exploring" section current?
- [ ] Blog post published this month?
- [ ] Lighthouse scores 95+?
- [ ] GitHub profile README current?
- [ ] Pinned repos still the right 6?

---

## Priority Matrix

| Priority | Item | Impact | Effort | Phase |
|----------|------|--------|--------|-------|
| **P0** | **Fix Journal Summarizer RAG claim** | **Critical** | **Low** | **0.1** |
| **P0** | **Rewrite hero section honestly** | **High** | **Low** | **0.2** |
| **P0** | **Fix about strip chip** | **High** | **Trivial** | **0.3** |
| P0 | Fix SkillSwap metrics | Medium | Low | 0.4 |
| P0 | Verify LearnOnTheGo deployment | Medium | Low | 0.5 |
| P0 | Remove JHU placeholder | Medium | Trivial | 0.6 |
| P0 | Add dates to projects | Medium | Low | 0.7 |
| P0 | GitHub profile polish | Medium | Low | 0.8 |
| P1 | Implement RAG + evals on Journal Summarizer | High | Medium-High | 1.2 |
| P1 | Architecture diagrams (all projects) | Medium | Medium | 1.1 |
| P1 | LearnOnTheGo metrics | Medium | Medium | 1.3 |
| P1 | SkillSwap AI integration / model assessment | Medium | Medium | 1.4 |
| P1 | Verify all project card links | Low | Low | 1.5 |
| P2 | **Agentic AI project** | **Critical** | **High** | **2.1** |
| P2 | **Fine-tuning + evals study** | **High** | **High** | **2.2** |
| P3 | Multimodal project | Medium | High | 2.3 |
| P3 | Visual design refresh | Low | Medium | 3.1 |
| P4 | "Currently Exploring" section | Low | Low | 3.2 |
| P4 | Blog / writing | Low | Ongoing | 3.3 |

---

## Grading Targets

| Dimension | Current | After Phase 0-1 | After Phase 2 | Target |
|-----------|---------|-----------------|---------------|--------|
| **Honesty / credibility** | **C** (RAG claim, hero) | **A** | **A** | **A** |
| Documentation & rigor | A | A | A | A |
| Production ML credibility | C+ (projects, not production) | B (honest framing + evals) | B+ | B+ |
| Math/foundations depth | B+ | B+ | A− | A |
| Agentic/frontier AI | D | D | A− | A |
| LLM depth | C | C+ (if RAG implemented) | B+ | A− |
| Evals culture | C− | B+ (if evals added) | A− | A |
| Multimodal | C | C | B (if 2.3) | B+ |
| Discoverability & polish | C+ | B+ | B+ | A− |
| Overall | **B+** | **B+/A−** | **A−** | **A** |

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
