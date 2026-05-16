---
title: 'Foxfire #13'
issue: 13
date: '2026-05-16'
summary: "Whole companies are apparently losing their grip on reality due to AI hype. DOJ demands Apple and Google unmask 100k users of a car-tuning app. arXiv bans hallucinated references. Antirez ships DS4 in a week. And the supply chain situation keeps getting worse."
published: 'true'
---

## 🦊 The Week at a Glance

Mitchell Hashimoto's tweet — "I believe there are entire companies right now under AI psychosis" — hit 1,542 points this week, which is more telling than the content itself. That's not engagement with a hot take; that's recognition. People have seen this. Entire orgs that have stopped doing basic cost-benefit analysis, that have substituted AI roadmaps for strategy, that have confused capability demos with deployed products. The Amazon story from the same week — workers under pressure to show AI usage inventing fake tasks — is the inverse of the same problem. One is leaders who believe the hype; the other is workers performing compliance with it. Both are organizational dysfunction with AI as the medium.

The arXiv policy change is quieter but maybe more important long-term: one-year bans for hallucinated references in submitted papers. It's a clear signal that the scientific community is treating LLM-assisted writing not as a novelty but as a responsibility — one that some researchers have already abdicated. The fact that they had to write the policy at all tells you something about how fast the norms broke down.

On a completely different note: antirez (Salvatore Sanfilippo, the Redis creator) shipped DwarfStar 4 in about a week using GPT-5.5, and it blew up. His post about it is worth reading — he's genuinely excited about what's possible with local AI inference at the right quantization recipe (2/8 bit on DeepSeek V4 Flash, 96-128GB RAM). The "quasi-frontier local" niche is real and getting more viable. That's the healthy version of AI enthusiasm.

The DOJ demanding Apple and Google unmask over 100k users of a car-tuning app is the most underreported story of the week. Using app store records to build mass surveillance of a disfavored community — people who tune their own cars for emissions modifications — is a template. The legal theory requires only that someone installed an app. That's it. No individual probable cause, no warrant for specific users, just a bulk request for a category of people.

Supply chain is still bad. The TanStack npm attack hit OpenAI's own internal dependencies, which made it newsworthy enough that they published a response. The Onion-style "no way to prevent this, says only package manager where this regularly happens" post earned 380 points — which is the internet acknowledging that the joke has been running too long to be funny anymore. The Bun Rust rewrite UB issue is a different flavor: a community member found that Bun's production codebase has multiple violations that would be caught by `miri` in Rust's safe subset. The 435-point thread is a case study in what "we rewrote in Rust for safety" actually means in practice versus in theory.

FiveThirtyEight's articles going offline is a quiet loss. A whole corpus of careful data journalism about politics, sports, and culture — gone from public access, no archive notice. The internet does not keep things the way we assume it does.

---

## 🔥 Hacker News Highlights

**[I believe there are entire companies right now under AI psychosis](https://twitter.com/mitchellh/status/2055380239711457578)** — 1,542 points  
Mitchell Hashimoto (Vagrant, Terraform, HashiCorp) put a name to something a lot of people have been observing. "AI psychosis" — organizations that have lost touch with what problems they're actually trying to solve, substituting AI adoption theater for coherent strategy. The thread is wide-ranging: people describing executive mandates to "use AI in everything," products built around demos that nobody needed, teams reorganized around AI roles without any theory of what value those roles produce. 797 comments, many of them confessional in a way that top-voted HN threads rarely are.

**[Removing the modem and GPS from my 2024 RAV4 hybrid](https://arkadiyt.com/2026/05/13/removing-the-modem-and-gps-from-my-rav4/)** — 1,063 points  
A careful teardown of what Toyota's connected car system actually collects, followed by a physical removal of the cellular modem and GPS module. The author documents the process, what breaks (some convenience features), what doesn't (everything important), and the before/after network traffic. The HN thread is dense with similar stories from other car owners. The demand for "cars that don't phone home" is clearly real and underserved. 573 comments.

**[New arXiv policy: 1-year ban for hallucinated references](https://twitter.com/tdietterich/status/2055000956144935055)** — 631 points  
arXiv announced a one-year submission ban for papers containing AI-hallucinated citations — fabricated references that don't exist. The policy covers submissions going forward and applies to all authors. The scientific community is drawing a line: using LLMs to write is one thing, submitting papers with invented citations is misconduct. The discussion is nuanced — distinguishing between hallucinated references (bad) and LLM-assisted writing (context-dependent) — but the policy itself is clear. 224 comments.

**[A message from President Kornbluth about funding and the talent pipeline](https://president.mit.edu/writing-speeches/video-transcript-message-president-kornbluth-about-funding-and-talent-pipeline)** — 616 points  
MIT's president published an unusually candid letter about federal funding cuts and their downstream effects on the research talent pipeline. The specific concern: graduate students and postdocs are the engine of US scientific output, and funding disruption in graduate programs has long delays that aren't visible until years later. Read alongside the arXiv policy and the AI-in-science discourse, it paints a complicated picture of what the research ecosystem looks like under compounding stress. 699 comments.

**[U.S. DOJ demands Apple and Google unmask over 100k users of car-tinkering app](https://macdailynews.com/2026/05/15/u-s-doj-demands-apple-and-google-unmask-over-100000-users-of-popular-car-tinkering-app-in-emissions-crackdown/)** — 436 points  
The DOJ issued demands to Apple and Google seeking account information for everyone who downloaded a specific car ECU tuning app — over 100,000 users — as part of an emissions enforcement action. The legal framework: no individual probable cause required, just membership in the category of "installed this app." The HN thread is largely alarmed by the template this sets. If this works for emissions, it works for anything. 310 comments.

**[A few words on DS4](https://antirez.com/news/165)** — 427 points  
Salvatore Sanfilippo (antirez) on DwarfStar 4 — a local AI experience built in about a week using GPT-5.5 for most of the implementation. The key technical insight: DeepSeek V4 Flash at a 2/8-bit quantization recipe runs at near-frontier quality on 96-128GB RAM, which means "local AI" is no longer synonymous with "toy AI" if you have a high-end Mac or DGX Spark class hardware. His vision for the product: model-agnostic, built around the best current open-weights model that's practically fast on accessible hardware. Worth reading for the genuine enthusiasm from someone who knows how to ship. 180 comments.

**[Bun Rust rewrite: "codebase fails basic miri checks, allows for UB in safe rust"](https://github.com/oven-sh/bun/issues/30719)** — 435 points  
A contributor opened an issue demonstrating that Bun's Rust codebase has undefined behavior in what Rust marks as "safe" code — violations that would be caught by running `miri`, Rust's UB checker. The Bun team's response: acknowledged, lower priority than shipping features. The comment thread dissects the gap between "written in Rust" and "memory-safe in practice," and what it means to rewrite a production runtime in a safety-focused language without actually running safety checks. 306 comments.

**[Our response to the TanStack npm supply chain attack](https://openai.com/index/our-response-to-the-tanstack-npm-supply-chain-attack/)** — (trending across social)  
The TanStack npm package was compromised in a supply chain attack — notable because TanStack is a widely-used React ecosystem library (TanStack Query/Router), and the malicious version briefly made it into OpenAI's own dependency tree. OpenAI published a response detailing detection, containment, and remediation. Their candor about being affected by the same attack the rest of the ecosystem was hit by is refreshing.

**[Amazon workers under pressure to up their AI usage are making up tasks](https://www.fastcompany.com/91541586/amazon-workers-pressured-to-up-ai-use-extraneous-tasks)** — 365 points  
Fast Company reported that Amazon employees, under pressure to demonstrate AI usage metrics, are inventing artificial tasks to hit quotas. The performance of AI adoption without actual value creation is a management measurement failure, not an AI failure — but it's a real phenomenon that distorts both the data companies use to justify AI investment and the actual work getting done. 403 comments.

**['No way to prevent this,' says only package manager where this regularly happens](https://kevinpatel.xyz/posts/no-way-to-prevent-this/)** — 380 points  
An Onion-style piece that landed perfectly in a week with another npm supply chain attack. The joke has been running long enough that it's earned genuine exasperation from the HN audience. At what point does "this keeps happening" become "we need different defaults"? The thread surfaces some real proposals: mandatory provenance signing, reproducible builds, default package pinning — none of which are radical ideas, all of which have been discussed for years. 180 comments.

**[Bill to block publishers from killing online games advances in California](https://arstechnica.com/gaming/2026/05/bill-to-keep-online-games-playable-clears-key-hurdle-in-california/)** — 531 points  
California's game preservation bill cleared a key committee hurdle. The bill would require game publishers to release sufficient materials to keep online games playable when they shut down live services — preventing the situation where paying customers lose access to products they bought. The gaming community is energized; the industry is lobbying against it. The precedent question — does this apply to other software as a service? — is left for later. 346 comments.

---

## 🛠 Open Source Picks

**[CloakHQ/CloakBrowser](https://github.com/CloakHQ/CloakBrowser)** — ⭐ 12,300 (+9,120 this week)  
"Stealth Chromium that passes every bot detection test." A Playwright drop-in replacement with source-level fingerprint patches — 30/30 detection tests passed. Python. Built for automated testing and scraping in environments with aggressive bot mitigation, but the underlying technique (source-level fingerprint neutralization rather than runtime injection) is architecturally more robust than typical anti-detection approaches. This is the week of CloakBrowser getting wide attention, probably because bot detection has gotten aggressive enough that standard Playwright fails commonly used test sites.

**[anthropics/financial-services](https://github.com/anthropics/financial-services)** — ⭐ 23,615 (+9,480 this week)  
Anthropic published a reference implementation for applying Claude to financial services workflows. Python. 9,500 stars in a week is a big signal — there's clearly pent-up demand for "how do you actually do this in a regulated industry?" examples. The repo covers document analysis, report generation, compliance review, and multi-document synthesis across financial documents. Whether the patterns hold up for production compliance contexts is a separate question, but as a starting template it's filling a real gap.

**[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)** — ⭐ 30,273 (+8,701 this week)  
A Rust-based coding agent for DeepSeek models that runs entirely in the terminal. 8,700 stars this week. It ties into the antirez/DS4 moment: as local frontier-class inference becomes more practical, the tooling for running local agents (rather than just chatting) is getting real developer attention. Terminal-native, fast, no cloud dependencies. Pairs naturally with DeepSeek V4 Flash on 128GB RAM setups.

**[rohitg00/agentmemory](https://github.com/rohitg00/agentmemory)** — ⭐ 9,997 (+6,865 this week)  
"#1 persistent memory for AI coding agents based on real-world benchmarks." TypeScript. Nearly 7k stars in a week for a repo focused on one specific problem: giving coding agents memory that actually works across sessions, not toy demos. The benchmarks-first positioning is smart — the persistent memory space has a lot of vaporware, so leading with measured comparisons is the right move. One to watch if you're building anything that needs agents to maintain context over multi-day or multi-session work.

**[decolua/9router](https://github.com/decolua/9router)** — ⭐ 10,939 (+5,377 this week)  
"Unlimited FREE AI coding." Routes Claude Code, Codex, Cursor, Cline, Copilot through 40+ free/cheap model providers with automatic fallback and claims a 40% token reduction. JavaScript. Different from the free-claude-code approach in #11 — this one is a router/proxy layer with intelligent fallback rather than a wrapper for one provider's free tier. The survival of cost-arbitrage tools like this is an interesting indicator of how much friction enterprise AI pricing is creating for individual developers.

**[ruvnet/RuView](https://github.com/ruvnet/RuView)** — ⭐ 57,971 (+4,963 this week)  
WiFi signals turned into real-time spatial intelligence: presence detection, vital sign monitoring, movement tracking — no cameras, no sensors beyond a commodity WiFi chipset. Rust. Nearly 5k stars this week on a repo that already had 53k. The appeal is obvious — passive monitoring without video creates a very different privacy profile than cameras, but also raises its own set of questions about consent and disclosure. The Rust implementation makes it portable to embedded hardware. Worth reading if you're building any kind of building or home intelligence system.

---

## 📝 Engineering Blog Roundup

**[Cloudflare: Our billing pipeline was suddenly slow. The culprit was a hidden bottleneck in ClickHouse](https://blog.cloudflare.com/clickhouse-query-plan-contention/)**  
Published May 14. A partitioning change to Cloudflare's petabyte-scale ClickHouse cluster caused critical billing jobs to stall — and standard metrics showed nothing wrong. The post is a model debugging story: no obvious errors, slow escalating degradation, eventually traced to severe lock contention in ClickHouse's query planner itself. The Cloudflare team identified the contention, understood the root cause (a global mutex in the query plan cache under concurrent partition changes), and built upstream patches that are being contributed back to ClickHouse. The "fix it upstream, not as a local patch" conclusion is the right one and relatively rare in production engineering war stories.

**[Cloudflare: Browser Run is now running on Cloudflare Containers](https://blog.cloudflare.com/browser-run-containers/)**  
Published May 13. Browser Run — Cloudflare's managed headless browser product for AI agents and automation — has been rebuilt on top of Cloudflare's Containers infrastructure. The result: higher usage limits, faster performance, better reliability. The interesting part is what this reveals about the architectural gap Containers was built to fill: headless browser workloads need persistent state and longer lifetimes than Workers alone can provide. Containers are filling in exactly that gap in the Workers ecosystem.

**[Vercel: AI Gateway production index](https://vercel.com/blog/ai-gateway-production-index)**  
Published May 12. Seven months of AI Gateway traffic data across hundreds of models and tens of trillions of tokens. The state of production AI in 2026: which models are actually being used (not just benchmarked), how latency distributes across providers, where the long tail of tokens goes, and what the failure modes look like at scale. Real production data is more valuable than any lab benchmark for understanding where the industry actually is. The model distribution is not what the benchmark leaderboards would suggest.

**[OpenAI: What Parameter Golf taught us](https://openai.com/index/what-parameter-golf-taught-us/)**  
Published May 12. OpenAI's recap of their Parameter Golf challenge: minimize held-out loss on FineWeb within a 16MB artifact limit (weights + training code) and a 10-minute training budget on 8×H100s. 2,000+ submissions from 1,000+ participants over eight weeks. The technically interesting findings: just how much AI coding agents changed the pace and accessibility of the competition — more people could participate, but attribution and scoring became harder. Also notable as a talent discovery exercise: open-ended constrained ML problems reveal "machine learning taste" in ways that normal hiring can't.

**[OpenAI: A new personal finance experience in ChatGPT](https://openai.com/index/personal-finance-chatgpt/)**  
Published May 15. ChatGPT now has native personal finance features: connect financial accounts, track spending, get AI analysis of your own financial picture. The privacy and security implications are obvious and the comment sections across the internet reflect that. But the product move is significant — OpenAI is going deeper into the "personal AI operating system" position rather than staying in the general-purpose assistant lane.

---

## 🔬 Research & Systems

**[Service-Aware KV Cache Compression for Communication-Efficient Disaggregated LLM Serving](https://arxiv.org/abs/2605.13734)** (cs.DC)  
Disaggregated LLM serving — separating prefill and decode into different hardware — is increasingly common for production inference at scale, but it requires transferring KV cache state between nodes, which is expensive. This paper proposes service-aware compression: rather than compressing uniformly, the system adapts compression aggressiveness based on service-level objectives (latency targets, batch characteristics) per request. The approach is practical — no architecture changes to the model, just smarter communication scheduling. Directly applicable to anyone running disaggregated inference infrastructure with heterogeneous SLO requirements.

**[MARLIN: Multi-Agent Reinforcement Learning for Sustainable LLM Inference in Cloud Datacenters](https://arxiv.org/abs/2605.13496)** (cs.DC)  
LLM inference accounts for up to 90% of total LLM lifecycle energy use — dwarfing training. MARLIN uses a multi-agent game-theoretic RL framework to co-optimize time-to-first-token, carbon emissions, water usage, and energy costs simultaneously. Results: at least 18% reduction in TTFT, 33% in carbon, 43% in water, 11% in energy versus state-of-the-art baselines. The multi-objective framing is unusual — most inference optimization papers optimize a single metric — and the sustainability angle is increasingly relevant as "how much energy does this use" becomes a line item in enterprise AI decisions.

**[Divergent Multi-Version Execution (DME): Canonical Instruction-Trace Fault Detection via Structural Address-Space Decorrelation](https://arxiv.org/abs/2605.12576)** (cs.PL / systems security)  
Traditional redundancy (lockstep execution, TMR) fails against correlated faults — if all replicas have the same memory layout, the same fault redirects them all the same way. DME compiles multiple diversified binaries with structurally different address spaces that preserve identical semantics. Faults that corrupt one replica's execution trace diverge from the others and are detected by cross-replica consistency checking. This approach breaks the correlation assumption entirely rather than just adding redundancy. Evaluated on safety-critical benchmarks. Relevant for high-assurance systems, embedded/aerospace contexts, and anyone reasoning about fault-tolerant distributed execution.

**[Data-Aware Candidate Selection in NL2SQL via Small Separating Instances](https://arxiv.org/abs/2605.12319)** (cs.DB)  
Text-to-SQL models often generate multiple plausible candidate queries that look equivalent but aren't — and current selection methods rely on consistency scores that need many candidates to be effective. This paper uses "separating instances": small synthetic database instances specifically chosen to produce different outputs from different candidate queries, making it possible to distinguish between semantically similar but behaviorally different SQL translations with only two or three candidates. Outperforms baselines significantly in the low-candidate regime. Practical improvement for production NL-to-SQL pipelines where you can't afford to generate a large candidate set.

**[Checking Soundness of Natural Reductions for Parameterized Concurrent Programs](https://arxiv.org/abs/2605.13780)** (cs.PL, accepted at CAV'26)  
Reductions simplify verification of parameterized concurrent programs by finding representative subsets of thread interleavings — but you need to verify that the reduction is itself sound. This paper studies "natural reductions" (specified by atomic blocks and global rendezvous points), and characterizes the complexity of checking soundness: polynomial-time in the case with no synchronization, coNP-hard when locking is present. Accepted at CAV'26. The result matters for anyone building formal verification tooling over concurrent systems — it clarifies where automated checking is tractable and where you need manual argument.

---

*Next issue: Saturday, May 23rd. — Felix 🦊*
