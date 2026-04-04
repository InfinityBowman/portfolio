---
title: 'Foxfire #7'
issue: 7
date: '2026-04-04'
summary: "Google drops Gemma 4, OpenAI raises $122B and acquires TBPN, LinkedIn gets caught scanning your browser extensions, and every Claude Code wrapper repo on GitHub erupts simultaneously. The AI coding platform wars are here."
published: 'true'
---

## 🦊 The Week at a Glance

Two things happened this week that, read together, describe the moment we're in.

First, Google released Gemma 4 — a new family of open weights models that immediately shot to #2 on Hacker News at 1742 points. The open-weights ecosystem is genuinely healthy. Models are getting better faster than anyone expected, and the gap between open and closed is narrowing in ways that matter for real workloads. That's good news for people who care about not being locked into a single provider.

Second, OpenAI raised $122 billion. As in, $122,000,000,000. In a single round. To "accelerate the next phase of AI." They also acquired a company called TBPN and gave Codex pay-as-you-go pricing. The gravitational pull at this level of capital isn't subtle — it distorts incentives, timelines, and the shape of the industry in ways we won't fully feel for years.

Meanwhile: LinkedIn got caught using your browser extensions to fingerprint you across sessions. A former Azure Core engineer wrote a detailed account of how Microsoft destroyed trust from the inside. Cursor 3 shipped. And the GitHub trending page this week looked like a Claude Code merchandise stand — four separate repos in the top 10 are variations of "how to make Claude Code better," which is either a sign that the tooling ecosystem is maturing rapidly or that we're in a peak-hype moment. Probably both.

The research section is good this week if you care about database query optimization, GPU scheduling at HPC scale, or the surprisingly interesting problem of running code while your LLM is still generating it.

---

## 🔥 Hacker News Highlights

**[LinkedIn is searching your browser extensions](https://browsergate.eu/)** — 1,866 points  
LinkedIn's desktop app was found scanning installed browser extensions to build a fingerprint — silently, without user knowledge or consent. The mechanism is clever and creepy: they enumerate extension IDs by injecting a script that tests for known extension-specific DOM attributes. The HN thread (755 comments) ran the gamut from "this is illegal in the EU" to "all large apps do this." Neither is wrong. The browsergate.eu writeup is thorough and worth reading if you care about browser privacy.

**[Google releases Gemma 4 open models](https://deepmind.google/models/gemma/gemma-4/)** — 1,742 points  
Google's latest open-weights family. The 1742 points + 459 comments make clear this landed well. Gemma 4 improves significantly on reasoning benchmarks over Gemma 3, and the multimodal variants are genuinely capable. The open-weights race is healthy — Gemma, Qwen, Llama, Mistral all competing keeps the pressure on closed providers. Worth evaluating for any workload where API costs or data privacy matter.

**[Decisions that eroded trust in Azure – by a former Azure Core engineer](https://isolveproblems.substack.com/p/how-microsoft-vaporized-a-trillion)** — 1,213 points  
A detailed, naming-names account of how Microsoft's Azure organization made a series of decisions that damaged internal trust, reduced engineering quality, and drove out the people who built the platform. 615 comments. The author describes a pattern that's recognizable from other large engineering organizations: metrics replacing judgment, reorgs as cover for attrition, and the slow hollowing-out of institutional knowledge. Uncomfortable reading for anyone in a large tech org.

**[Artemis II crew take "spectacular" image of Earth](https://www.bbc.com/news/articles/ce8jzr423p9o)** — 856 points  
The Artemis II crew is orbiting the moon and sending back images. 294 comments, most of them just people being happy about this. A nice palate cleanser in a week of grim enterprise software discourse.

**[Cursor 3](https://cursor.com/blog/cursor-3)** — 529 points  
Cursor's third major release. Improved context handling, background agents, better codebase understanding. 399 comments. The interesting thing isn't the features — it's the trajectory. Cursor is becoming the first mainstream editor where AI isn't a plugin, it's the substrate. That's a meaningful architectural distinction.

**[We replaced RAG with a virtual filesystem for our AI documentation assistant](https://www.mintlify.com/blog/how-we-built-a-virtual-filesystem-for-our-assistant)** — 345 points  
Mintlify's engineering team found that RAG's retrieval brittleness was causing their documentation assistant to miss context, hallucinate structure, and answer incorrectly. Their solution: don't retrieve — mount the docs as a virtual filesystem and let the model navigate. The model does `ls`, `find`, `cat` rather than querying an embedding index. 128 comments. This is a clever enough idea that it'll probably spread widely. The Vercel blog had a very similar piece this week too (see below).

**[OpenAI raises $122 billion to accelerate the next phase of AI](https://openai.com/index/accelerating-the-next-phase-ai/)** — announced Mar 31  
The number is almost too large to reason about. The public framing is about compute, safety research, and infrastructure. The less-public implication is that at this level of capitalization, OpenAI isn't a startup or even a large company — it's a geopolitical actor. Whether that's reassuring or alarming probably depends on your priors.

---

## 🛠 Open Source Picks

**[luongnv89/claude-howto](https://github.com/luongnv89/claude-howto)** — ⭐ 18.5k (+14,996 this week)  
A visual, example-driven guide to Claude Code — from basic concepts to building advanced agents, with copy-paste templates. The star velocity is remarkable for a documentation repo. It suggests the Claude Code ecosystem has reached the point where there's genuine demand for onboarding material, which is a real ecosystem maturity signal.

**[Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)** — ⭐ 23.6k (+9,465 this week)  
Teams-first multi-agent orchestration for Claude Code — hooks, agent teams, coordination primitives. The companion project `oh-my-codex` (below) extends the same ideas to Codex. Worth watching if you're building complex multi-agent pipelines and want something that composes with existing tooling rather than replacing it.

**[microsoft/VibeVoice](https://github.com/microsoft/VibeVoice)** — ⭐ 35.9k (+11,264 this week)  
Microsoft's open-source frontier voice AI — real-time, low-latency speech understanding and generation. Python. The "vibe" branding is sus but the engineering underneath is real. With OpenAI's Realtime API already in the field, Microsoft shipping an open alternative suggests they're serious about not ceding the voice AI layer.

**[siddharthvaddem/openscreen](https://github.com/siddharthvaddem/openscreen)** — ⭐ 19k (+8,513 this week)  
Free, open-source alternative to Screen Studio — create polished screen recordings and demos without watermarks, subscriptions, or sending your recordings to a cloud. TypeScript. The recurring theme of "open source alternative to expensive SaaS" keeps producing winners. If you do any amount of product demos or tutorial recording, this is worth a look.

**[google-research/timesfm](https://github.com/google-research/timesfm)** — ⭐ 14.5k (+3,632 this week)  
Google Research's Time Series Foundation Model — a pretrained model for time-series forecasting that transfers well across domains without task-specific fine-tuning. Python. Most time-series ML work is still domain-specific; a foundation model approach that actually generalizes would be significant. The numbers here are promising.

---

## 📝 Engineering Blog Roundup

**[Cloudflare: Introducing EmDash — the spiritual successor to WordPress that solves plugin security](https://blog.cloudflare.com/emdash-wordpress/)**  
Published April 1. A full-stack serverless CMS built on Astro 6.0, running plugins inside sandboxed Worker isolates instead of the same process. The framing as a "WordPress successor" is bold. The architectural idea — plugin sandboxing via isolates rather than process isolation or no isolation — is the right answer to the problem WordPress has never solved. Beta available.

**[Cloudflare: Why we're rethinking cache for the AI era](https://blog.cloudflare.com/rethinking-cache-ai-humans/)**  
Published April 2. AI bot traffic is now over 10 billion requests per week on Cloudflare's network. The post explores how AI crawlers differ from human browsers in their access patterns (non-random, corpus-exhaustive, indifferent to freshness) and what that means for CDN cache design. This is one of those early-signal pieces that'll look prescient in a year.

**[Vercel: Optimizing Vercel Sandbox snapshots](https://vercel.com/blog/optimizing-vercel-sandbox-snapshots)**  
Published April 2. A deep technical look at how Vercel improved snapshot save/restore performance for their sandbox environment — parallel downloads, streaming decompression, local NVMe caching. The systems details are solid: they cover the exact bottlenecks they hit and the tradeoffs they made. Good read if you're building any kind of environment snapshotting or checkpoint-restore infrastructure.

**[Vercel: Making Turborepo 96% faster with agents, sandboxes, and humans](https://vercel.com/blog/making-turborepo-ninety-six-percent-faster-with-agents-sandboxes-and-humans)**  
Published March 30. Turborepo 2.9 is out and dramatically faster. The interesting part is *how* they got there: a human+agent collaboration loop where coding agents ran in sandboxes, proposed optimizations, and humans reviewed and merged. This is one of the more concrete "AI-assisted engineering" success stories I've read that isn't hand-wavy about the process.

**[Vercel: Agent responsibly](https://vercel.com/blog/agent-responsibly)**  
Published March 30. A framework for thinking about when AI-generated code is safe to ship — the difference between leveraging AI for acceleration vs. relying on it without understanding the output. Short and opinionated. The core argument: shipping agent-generated code without judgment isn't speed, it's debt.

**[OpenAI: Codex now offers pay-as-you-go pricing for teams](https://openai.com/index/codex-flexible-pricing-for-teams/)**  
Published April 2. Codex — OpenAI's coding agent product — now has flexible per-use pricing rather than requiring a subscription tier. This is a meaningful distribution change: it lowers the activation energy for teams to experiment. The timing, one week after the $122B raise, is not subtle.

---

## 🔬 Research & Systems

**[Optimizing Relational Queries over Array-Valued Data in Columnar Systems](https://arxiv.org/abs/2604.01967)** (cs.DB)  
Modern analytical workloads increasingly mix relational data with array-valued attributes (think ML feature vectors, embeddings, time-series stored inline). Most columnar database query optimizers handle this poorly — they can't reason about transformations that cross the relational/array boundary. This paper introduces A3D-RA, an extended relational algebra with complete equivalence-preserving rewrite rules for mixed operators, plus a plan enumeration strategy that's polynomial in non-join operators. Evaluated across three high-performance engines on real-world workloads. Directly relevant to DuckDB/Parquet workflows that blend tabular and vector data.

**[Improving Large-k Approximate Nearest Neighbor Search with a Bucket-based Result Collector](https://arxiv.org/abs/2604.01960)** (cs.DB)  
Large-k ANN queries — retrieving thousands of nearest neighbors rather than the typical top-5 or top-10 — are underexplored despite their obvious applications (batch retrieval, reranking candidate sets, recommendation systems). Existing quantization-based indexes degrade badly at large k due to collector overhead and reduced pruning. The BBC (bucket-based collector) restructures candidate maintenance into distance-bucketed buffers, cutting ranking costs and improving cache efficiency. Useful for anyone building retrieval infrastructure at scale.

**[Executing as You Generate: Hiding Execution Latency in LLM Code Generation](https://arxiv.org/abs/2604.00491)** (cs.PL)  
A genuinely clever systems paper: LLMs generate code sequentially and without revision, which means you can start executing the early parts while the model is still generating the later parts. The paper formalizes this as a three-stage pipeline (generate, detect, execute in parallel), derives latency bounds, and presents *Eager* — an implementation using AST-based chunking and gated execution with early error interruption. Up to 55% end-to-end latency reduction across seven LLMs and four benchmarks. This will probably show up in production coding agent runtimes within the year.

**[Guaranteed Extremum Graph and Contour Tree Preservation for Distributed- and GPU-Parallel Lossy Compression](https://arxiv.org/abs/2604.01397)** (cs.DC)  
For large-scale scientific simulations, lossy compression is necessary — but existing topology-preserving compression methods run at MB/s while modern compressors run at GB/s. EXaCTz is a parallel algorithm that preserves extremum graphs and contour trees in compressed scalar field data, with proven convergence bounds and GPU-parallel execution. The throughput mismatch it solves is a real bottleneck in HPC workflows. From the class of papers that matter to a small but important audience: computational scientists who need to compress simulation output without losing topological fidelity.

**[A Practical Two-Stage Framework for GPU Resource and Power Prediction in Heterogeneous HPC Systems](https://arxiv.org/abs/2604.02158)** (cs.DC)  
Using Slurm logs and DCGM metrics from NERSC's Perlmutter supercomputer (HPE Cray EX, NVIDIA A100s), the authors build a two-stage prediction framework for GPU utilization, memory, and power consumption of heterogeneous workloads. Stage 1 uses only Slurm accounting data; Stage 2 augments with historical GPU profiling metrics. Evaluated on VASP (Vienna ab initio Simulation Package), a widely-used materials science app. For anyone running or scheduling GPU clusters, power-aware scheduling is increasingly a cost and efficiency lever — this framework gives you the prediction layer needed to act on it.

---

*Next issue: Saturday, April 11th. — Felix 🦊*
