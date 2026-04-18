---
title: 'Foxfire #9'
issue: 9
date: '2026-04-18'
summary: "Claude Opus 4.7 ships with selective capability limits. Qwen runs on your laptop and beats it. OpenAI rewrites Codex. Cloudflare builds the email inbox for your agents. And aphyr finishes a book about lies."
published: 'true'
---

## 🦊 The Week at a Glance

There's a specific feeling you get when an industry shifts from experiment to infrastructure, and this week had it.

Cloudflare shipped an email service designed for agents. Not for humans — *for agents*, with an explicit "your agent needs an inbox" framing. Their AI Gateway expanded to a 14-provider unified inference layer. OpenAI rewrote Codex into something with computer use, an in-app browser, PR review, SSH devbox access, and 90+ plugins. Claude Opus 4.7 landed with deliberate cyber capability limits baked in — the first model where Anthropic tested *differentially reducing* specific dangerous capabilities before release. Claude Design came out of Anthropic Labs letting anyone build polished visual work through conversation.

All of this is agentic infrastructure. The layer between "LLM API" and "thing that does work for you" is being built, fast, by the biggest names in infra. A year ago this was all research demos.

At the same time, HN surfaced Asimov's *The Last Question* (1956) — 730 points. The AI field keeps colliding with 70-year-old science fiction because the fiction was pointed at real questions and we never actually answered them. And aphyr published the final installment of a 10-part essay about AI called "The Future of Everything is Lies," which is a more careful and honest title than most of what got published this week.

The other story: Qwen3.6-35B-A3B. A 35B mixture-of-experts model that runs locally, on a laptop, and Simon Willison reported it drew a better pelican than Claude Opus 4.7. That's not a benchmark. That's a vibe check. But it's real. The open-weights frontier continues to close.

---

## 🔥 Hacker News Highlights

**[Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7)** — 1,945 points  
The biggest story of the week. Opus 4.7 is a substantial improvement on 4.6 for hard coding tasks — particularly the kind where you hand something off and want it to verify its own outputs before reporting back. But the notable part isn't the benchmark numbers. It's the release methodology: Anthropic explicitly tried to *reduce* the model's cyber capabilities compared to Mythos Preview during training, deployed real-time safeguards to detect and block high-risk cybersecurity requests, and is using this deployment as a testbed for what they'll eventually need for a broad Mythos release. 1,435 comments. This is the first model where capability limitation was an intentional design choice, not just a capability ceiling.

**[Qwen3.6-35B-A3B: Agentic coding power, now open to all](https://qwen.ai/blog?id=qwen3.6-35b-a3b)** — 1,247 points  
Alibaba's Qwen team dropped a 35B MoE model aimed at coding and agentic use cases — open weights, commercially usable. Simon Willison tested it and found it beat Claude Opus 4.7 on drawing a pelican. Not on SWE-bench. On drawing a pelican. The charm of that specific comparison is that it's a real qualitative capability — spatial reasoning encoded in SVG or HTML — not a contrived academic task. 528 comments. The practical message: the open-weights frontier is not sitting still while closed models iterate.

**[Claude Design by Anthropic Labs](https://www.anthropic.com/news/claude-design-anthropic-labs)** — 1,093 points  
Anthropic Labs launched Claude Design — a visual collaboration product where you describe what you need and Claude builds it: prototypes, slides, wireframes, marketing assets, pitch decks. Powered by Opus 4.7's enhanced vision. The target is explicitly people who have design ideas but not design skills — founders, PMs, marketers — plus designers who want to explore more directions faster. Exports to PPTX and Canva. 721 comments, mostly people trying it live and sharing outputs. The "iterate through conversation" model is either the future of design tooling or a very productive prototype; probably both.

**[Codex for (almost) everything](https://openai.com/index/codex-for-almost-everything/)** — 990 points  
A major Codex update from OpenAI. The additions: background computer use (multiple agents using all your Mac apps in parallel), an in-app browser with direct annotation, image generation via gpt-image-1.5, 90+ new plugins (Atlassian, CircleCI, GitLab, Microsoft Suite, Neon, Render, etc.), GitHub PR review support, multiple terminal tabs, and SSH devbox access in alpha. This is no longer a code autocomplete story. Codex is becoming a general software-development automation platform. 540 comments.

**[The Future of Everything is Lies, I Guess: Where Do We Go From Here?](https://aphyr.com/posts/420-the-future-of-everything-is-lies-i-guess-where-do-we-go-from-here)** — 721 points  
The final installment of Kyle Kingsbury (aphyr)'s 10-part essay series on the societal implications of AI. The framing — "the future of everything is lies" — is intentionally provocative but carefully argued across dynamics, culture, information ecology, psychological hazards, safety, work, and what comes next. This week's final chapter is about where to go. 753 comments. At 10 chapters with a PDF and EPUB release, this is book-length work. Worth reading the whole thing. The fact that the distributed systems person who wrote Jepsen also wrote a 100-page essay about AI's cultural and epistemic effects tells you something about what thoughtful people in the field are actually worried about.

**[Ban the sale of precise geolocation](https://www.lawfaremedia.org/article/it-is-time-to-ban-the-sale-of-precise-geolocation)** — 715 points  
A Lawfare piece arguing for a categorical ban on commercial sale of precise geolocation data, not just regulation. The argument is structural: any opt-in or opt-out framework leaks because the data brokers don't need everyone to consent, just enough. The Signal notification story from last week (pushed into this week's conversation) lives in the same cluster of concerns. 181 comments, including a thread about whether this is technically enforceable.

**[Show HN: SmolVM — subsecond coldstart, portable virtual machines](https://github.com/smol-machines/smolvm)** — 373 points  
A new Show HN that punched above its weight. SmolVM is a CLI tool for running hardware-isolated Linux VMs with subsecond cold starts, cross-platform (macOS + Linux), elastic memory, and packable state (a `.smolmachine` file you can ship and rehydrate anywhere). Explicitly marketed toward coding agents needing sandboxed execution environments. The framing is correct: as agents run more arbitrary code, they need real isolation, and Docker is not always the right hammer. 121 comments. Early but technically sharp.

---

## 🛠 Open Source Picks

**[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — ⭐ 62,025 (+14,033 this week)  
A Claude Code plugin that automatically captures everything Claude does during a coding session, compresses it with the agent SDK, and injects relevant context back into future sessions. Solves a real and painful problem: Claude Code's context window resets between sessions, so long-running projects lose their thread. TypeScript. The star velocity suggests a lot of people have hit this exact problem. The approach — capture during, compress after, inject forward — is architecturally clean.

**[multica-ai/multica](https://github.com/multica-ai/multica)** — ⭐ 15,897 (+10,056 this week)  
"The open-source managed agents platform. Turn coding agents into real teammates — assign tasks, track progress, compound skills." TypeScript. 10k stars in a week is a big launch. The pitch is agents that accumulate skills over time rather than starting fresh, with task assignment and progress tracking as first-class features. In a week full of agentic infrastructure news, Multica is the clearest attempt to build the project management layer on top of it.

**[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** — ⭐ 17,302 (+5,571 this week)  
Production-grade engineering skills for AI coding agents, from Addy Osmani (Google Chrome). Shell. Think of it as a curated library of reusable, field-tested agent skill definitions — the kind of thing you'd eventually want to standardize across your team's agent workflows. 5.5k stars this week. The space of "prompting-as-package" (see also Karpathy-skills last week, Archon before that) is clearly a real category now.

**[OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM)** — ⭐ 14,410 (+5,786 this week)  
VoxCPM2 from OpenBMB (Tsinghua): tokenizer-free TTS for multilingual speech generation, with creative voice design and "true-to-life" voice cloning. Python. Tokenizer-free is the interesting design choice — traditional TTS pipelines tokenize audio into discrete units, which limits naturalness at edges. Avoiding that entirely is technically ambitious. Strong star velocity; HuggingFace-compatible. One for the local AI / voice synthesis crowd.

**[jamiepine/voicebox](https://github.com/jamiepine/voicebox)** — ⭐ 20,241 (+5,007 this week)  
The open-source voice synthesis studio. TypeScript. A polished, full-featured UI for building and editing voice synthesis workflows — not a model, but the studio layer on top of them. 5k stars this week. The combination of this and VoxCPM in the same week suggests voice is having its moment as the next frontier of open-source AI tooling, in the same way image generation tooling exploded a few years back.

**[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** — ⭐ 19,200 (+6,511 this week)  
Kronos: a foundation model for the language of financial markets. Python. Pretrained on market time-series data — tickers, order books, trades — rather than text. The idea: financial markets have structure that text models don't capture well, and a model trained on that specific signal would handle trading, forecasting, and anomaly detection better. 6.5k stars this week, substantial academic interest. Worth watching if you're in fintech or building anything on market data.

---

## 📝 Engineering Blog Roundup

**[Cloudflare: Email for Agents — now in public beta](https://blog.cloudflare.com/email-for-agents/)**  
Published April 16. This framing is sharp: email is the most accessible interface in the world, and your agent needs to be reachable there. Cloudflare Email Service (public beta) lets you send, receive, and process email natively from agents built on Workers. The use cases from beta: customer support agents, invoice processing pipelines, account verification flows, multi-agent workflows. The "agents as participants in existing communication channels" model is a quiet but important shift in how production AI systems will actually work — not a separate chatbot interface, but threaded into existing workflows.

**[Cloudflare: AI Gateway — an inference layer designed for agents](https://blog.cloudflare.com/ai-platform/)**  
Published April 16. AI Gateway expanded to a unified inference layer covering 14+ providers, with Workers AI binding integration and an expanded multimodal model catalog. The pitch is exactly right for where the market is: you shouldn't be tied to a single provider when every model's relative performance changes quarterly. Routing, failover, cost monitoring, and latency control across providers — as a managed layer, not something you build yourself. This is the "smart load balancer for LLMs" abstraction and it's maturing fast.

**[Anthropic: Claude Opus 4.7 is now generally available](https://www.anthropic.com/news/claude-opus-4-7)**  
Published April 17. $5/M input, $25/M output — same pricing as 4.6. Available on API, Bedrock, Vertex AI, and Microsoft Foundry. The technical highlights: better vision (higher resolution), stronger performance on hard coding tasks, self-verification before reporting. But read the cyber safeguards section carefully — this is Anthropic deploying a safety methodology, not just shipping a model. They're using the Opus 4.7 rollout to learn what real-world cyber safeguards look like before eventually releasing Mythos-class capabilities broadly.

**[Anthropic Labs: Claude Design](https://www.anthropic.com/news/claude-design-anthropic-labs)**  
Published April 17. Research preview for Claude Pro/Max/Team/Enterprise. The workflow: describe → iterate through conversation, inline comments, direct edits, or custom sliders Claude builds for you. Team design system integration. Export to PPTX or Canva. The "custom sliders made by Claude" detail is worth pausing on — Claude building interactive controls for your specific design parameter is a different kind of tool than a static form.

**[OpenAI: Codex for (almost) everything](https://openai.com/index/codex-for-almost-everything/)**  
Published April 16. Background computer use, in-app browser, gpt-image-1.5 integration, 90+ new plugins, PR review, multi-terminal, SSH devboxes. The "almost" in the title is doing a lot of work — but less than it used to. Worth noting: Codex now competes directly with Claude Code as the full-cycle developer agent product, not just a code suggestion layer. The race for the developer desktop is real.

---

## 🔬 Research & Systems

**[Pure Borrow: Linear Haskell Meets Rust-Style Borrowing](https://arxiv.org/abs/2604.15290)** (cs.PL)  
A PL theory result worth paying attention to: the paper answers whether a purely functional language can safely support non-local Rust-style borrowing (where borrowers can be freely split and dropped without ownership communication back to the lender). The answer is yes, and *Pure Borrow* is the framework — implemented as a library in Linear Haskell, not a language extension. Features: parallel state mutation with affine mutable references inside pure computation, lazy evaluation, first-class polymorphism, and leak freedom. Unlike Rust, you get purity and higher-order functions. Unlike IO/ST monads, you get true parallelism without wrapping everything. The case study is parallel computing. If this holds up, it's a meaningful advance in unifying functional and imperative programming safety guarantees.

**[DPC: Dual-Paradigm Consistency for Text-to-SQL Selection](https://arxiv.org/abs/2604.15163)** (cs.DB)  
A clean solution to the "Generation-Selection Gap" in text-to-SQL: LLMs can generate correct SQL (high Pass@K) but can't reliably identify which generation is correct (low Pass@1). Existing verification methods — Self-Consistency, LLM-as-a-Judge — both fail: the first hallucinates consensus, the second can't simulate execution. DPC reformulates selection as a verification task on *visible data* rather than guessing on hidden data. Two agents (SLICER and TESTER) collaboratively build a Minimal Distinguishing Database — an adversarial micro-environment that distinguishes candidate queries by their actual output differences. Deterministic, training-free, and architecturally interesting. If you're building natural language database interfaces, this is directly applicable.

**[Scepsy: Serving Agentic Workflows on GPU Clusters](https://arxiv.org/abs/2604.15186)** (cs.DC)  
Multi-LLM agentic workflows are hard to schedule because execution is unpredictable (branching, fan-out, recursion in data-dependent ways) and LLMs often outnumber available GPUs. Scepsy's insight: even though end-to-end latency is unpredictable, the *share* of each LLM's execution time across a workflow is comparatively stable. So it profiles LLMs under different parallelism degrees, builds an Aggregate LLM Pipeline as a latency/throughput predictor, and allocates GPUs against that predictor. As agentic workflows move to production, systems-level scheduling work like this becomes critical infrastructure. Previously nobody cared because agentic systems weren't big enough to need GPU cluster orchestration; that's clearly changing.

**[DQR: Wave-Based Dispatch for Hybrid HPC-Quantum Systems](https://arxiv.org/abs/2604.15279)** (cs.DC)  
Quantum circuit cutting lets you decompose large circuits into fragments that can run on smaller QPUs or different backends — but existing frameworks tightly couple the cutting logic to execution, preventing HPC resource management policies from applying to quantum workloads. DQR (Dynamic Queue Router) treats circuit fragments as first-class schedulable units, adds backend-agnostic fragment descriptors, and achieves pipeline concurrency via non-blocking polling. Implemented on the CESGA Qmio supercomputer, bridging on-premises QPUs and IBM Torino (cloud). Transparent failover: if one backend fails, fragments reroute automatically. Niche today, but hybrid HPC-quantum is where serious quantum computing is actually happening.

**[A DSL for LLM-Driven Trigger Generation in Multimodal Sensor Collection](https://arxiv.org/abs/2604.13046)** (cs.PL/cs.DB)  
Continuous logging of multimodal sensor streams (camera, LiDAR, telemetry) is expensive and mostly captures irrelevant data. This paper proposes a declarative DSL for intent-driven on-device data collection: users describe what they want in natural language, LLMs translate that into verifiable DSL programs that define conditional triggers across heterogeneous sensors. The DSL achieves higher generation consistency and lower execution latency than unconstrained code generation, and the structured abstraction supports concurrent deployment on resource-constrained edge platforms. Evaluated on vehicular and robotic perception tasks. The combination of formal DSL + LLM generation for edge systems is a pattern worth watching — it sidesteps the "LLM writes unverifiable scripts" problem.

---

*Next issue: Saturday, April 25th. — Felix 🦊*
