---
title: 'Foxfire #8'
issue: 8
date: '2026-04-11'
summary: "Anthropic unveils Project Glasswing and a secret model that found vulnerabilities in every major OS. France announces a government-wide Linux migration. The FBI recovered deleted Signal messages from notification data. And Europe is quietly building a different internet than the one we have."
published: 'true'
---

## 🦊 The Week at a Glance

Three unrelated stories happened this week that, once you hold them together, describe something coherent.

Anthropic quietly announced that they have a new frontier model — Claude Mythos Preview, unreleased — that has already found thousands of high-severity vulnerabilities in every major operating system and web browser. Their response was Project Glasswing: a coalition of AWS, Apple, Google, Microsoft, NVIDIA, Cisco, and others using Mythos for *defensive* security scanning, backed by $100M in compute credits. The announcement is careful to say that AI capabilities have outrun our ability to defend against them, and they are trying to get ahead of it.

On the same week: the FBI successfully recovered deleted Signal messages from a suspect's iPhone — not by breaking Signal's encryption, but by reading push notification metadata from Apple's servers. Signal messages show up as notifications; the notification payload, stored on Apple's infrastructure, contained enough to reconstruct conversations. The EFF announced they're leaving X. France announced a government-wide Linux migration to reduce reliance on US technology. A researcher published detailed evidence that macOS Privacy & Security settings routinely fail in ways Apple doesn't document.

The throughline: the trust assumptions underneath everyday software are eroding. Not dramatically — not "encryption is broken" — but quietly, at the seams. Notification channels. Ad targeting systems. Extension APIs. OS security UX that promises more than it delivers. These are the surfaces that surveillance and surveillance capitalism are moving through right now.

The response — Glasswing, Linux sovereignty moves, WireGuard finally getting a proper Windows release after a signing dispute — feels less like a coherent defense and more like the first scattered acknowledgments that something structural is off. That's not nothing. But it's worth naming clearly.

---

## 🔥 Hacker News Highlights

**[EFF is leaving X](https://www.eff.org/deeplinks/2026/04/eff-leaving-x)** — 1,412 points  
The Electronic Frontier Foundation announced they're departing X (formerly Twitter), citing the platform's evolution into a space hostile to the civil liberties work they do. 1,277 comments — the most discussed story of the week by a wide margin. What's notable is less the decision itself (many organizations have quietly left) and more who's making it: EFF is the canonical institution for digital rights. When they decide a platform is net-harmful to their mission of being on it, that's signal. The comment thread is genuinely good if you want to read conflicting takes on whether institutional departure from major platforms matters or is just symbolic.

**[France launches government Linux desktop plan as Windows exit begins](https://www.numerique.gouv.fr/sinformer/espace-presse/souverainete-numerique-reduction-dependances-extra-europeennes/)** — 841 points + 554 points (TechCrunch, 662 comments)  
France's digital government agency announced a formal plan to migrate government desktops to Linux as part of a broader "digital sovereignty" push — explicitly reducing dependence on US technology. A second story from TechCrunch got nearly as much traction. Combined HN comment count is over 1,600 comments. This is politically significant: it's not a niche government department experimenting with Linux, it's a national program with stated geopolitical motivation. Germany has been here before (and mostly retreated), but the context in 2026 is different. Tariff uncertainty and geopolitical tension with the US have made "software supply chain nationalism" a real policy conversation that wasn't happening 18 months ago.

**[FBI used iPhone notification data to retrieve deleted Signal messages](https://9to5mac.com/2026/04/09/fbi-used-iphone-notification-data-to-retrieve-deleted-signal-messages/)** — 594 points  
The mechanism: Signal delivers messages via Apple Push Notification Service (APNs). The notification payload, which passes through Apple's infrastructure, contained enough message content that investigators could partially reconstruct conversations even after the user deleted them. This doesn't break Signal's encryption — it exploits the *delivery layer*. 294 comments, most of them focused on the specific threat model. The practical lesson: if you need message deniability, notifications themselves are a separate surface. This is well-known to people who think about threat models carefully; now it's well-known to everyone.

**[WireGuard makes new Windows release following Microsoft signing resolution](https://lists.zx2c4.com/pipermail/wireguard/2026-April/009561.html)** — 503 points  
A new Windows release of WireGuard is out after a protracted dispute over Microsoft's code signing requirements for kernel drivers. The mailing list post from Jason Donenfeld (WireGuard's author) is characteristically blunt about what the dispute involved. 147 comments. WireGuard is one of the genuinely elegant pieces of software in modern networking — a VPN protocol whose entire implementation fits in a few thousand lines — and the signing saga is a good case study in what happens when platform control requirements collide with open-source security tooling.

**[AI assistance when contributing to the Linux kernel](https://github.com/torvalds/linux/blob/master/Documentation/process/coding-assistants.rst)** — 383 points  
Linus Torvalds merged a new documentation file into the Linux kernel repo: official guidance on using AI coding assistants for kernel contributions. The stance is measured — AI tools are acknowledged as useful, but the document emphasizes that contributors are responsible for understanding every line they submit, that AI-generated code must be reviewed as carefully as any other, and that low-quality AI submissions will be rejected. 279 comments. The interesting thing here is the institutional posture: not banning it, not endorsing it uncritically, but naming the specific failure modes (confident hallucination, subtle logic bugs) and placing responsibility clearly on the human.

**[OpenAI backs Illinois bill that would limit when AI labs can be held liable](https://www.wired.com/story/openai-backs-bill-exempt-ai-firms-model-harm-lawsuits/)** — 433 points  
OpenAI is supporting state-level legislation in Illinois that would limit AI companies' liability for harms caused by their models. 315 comments, mostly critical. The legislative strategy here — pursuing favorable liability frameworks at the state level before federal standards crystallize — is well-established from previous tech lobbying playbooks. The framing in the bill reportedly limits liability for "model outputs" specifically. 

---

## 🛠 Open Source Picks

**[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — ⭐ 56.3k (+26,783 this week)  
"The agent that grows with you" — an open-source general-purpose AI agent framework from NousResearch, the team behind the Hermes model family. Python. The star velocity this week is the highest of anything trending — nearly 27k in seven days. NousResearch occupies an interesting position: serious open-weights research org, not a VC-backed startup. Their Hermes instruction-tuned models have been widely used in the open-source community. An agent framework from them that's this popular on launch is worth watching closely.

**[aaif-goose/goose](https://github.com/aaif-goose/goose)** — ⭐ 41.1k (+6,428 this week)  
Block's open-source AI agent framework, written in Rust. Goes beyond code suggestions — install, execute, edit, test with any LLM. The Rust implementation is notable in a space dominated by Python. 6,400 stars this week suggests real sustained interest, not a launch spike. The multi-LLM angle (plug in whatever backend you want) is increasingly the right bet as the frontier model landscape stays contested.

**[microsoft/markitdown](https://github.com/microsoft/markitdown)** — ⭐ 101.2k (+5,214 this week)  
Python tool for converting any file or Office document to Markdown. Just crossed 100k stars — a meaningful milestone for a utility tool. The use case is obvious: Markdown is what LLMs want to eat, and most enterprise document ecosystems still run on Word/Excel/PowerPoint. markitdown is the bridge. Consistently trending because it solves a real, boring problem well.

**[forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills)** — ⭐ 12.4k (+3,741 this week)  
A single `CLAUDE.md` file distilling Andrej Karpathy's public observations about LLM coding pitfalls into instructions that improve Claude Code behavior. No code, just configuration. The concept is elegant: prompting-as-package. The demand for this kind of thing signals that the gap between "default Claude Code" and "Claude Code calibrated to expert observations" is large enough to be worth distributing.

**[HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor)** — ⭐ 16.4k (+4,698 this week)  
Agent-native personalized learning assistant from the HKU Data Science lab. Python. "Agent-native" is doing real work here — this isn't a chatbot wrapper around educational content, it's built around agent loops that adapt to what the learner actually knows. HKU has been producing solid applied ML work; this one is getting traction.

**[NVIDIA/personaplex](https://github.com/NVIDIA/personaplex)** — ⭐ 9k (+2,939 this week)  
NVIDIA's PersonaPlex — a framework for building agents with persistent, adjustable personas. Python. The practical use case: systems where you want consistent character across interactions without hard-coding behavior into a system prompt. Early but interesting as NVIDIA expands beyond GPU drivers into the AI software layer.

---

## 📝 Engineering Blog Roundup

**[Anthropic: Project Glasswing](https://www.anthropic.com/glasswing)**  
Published April 7. This is the most significant announcement of the week. Anthropic has an unreleased frontier model — Claude Mythos Preview — that has already found thousands of high-severity vulnerabilities in every major OS and web browser. Rather than sitting on this, they assembled a coalition (AWS, Apple, Google, Microsoft, NVIDIA, Cisco, CrowdStrike, JPMorganChase, Palo Alto, Linux Foundation) to use Mythos for defensive security scanning, backed by $100M in compute credits and $4M in direct donations to open-source security orgs. The announcement is honest about the dual-use risk: they're moving fast precisely because these capabilities will proliferate, and they'd rather be doing defense while they have the window. Read the full announcement — it's unusually candid about both the threat and the uncertainty.

**[Cloudflare: 500 Tbps of capacity — 16 years of scaling our global network](https://blog.cloudflare.com/500-tbps-of-capacity/)**  
Published April 10. Cloudflare's network has crossed 500 Tbps of external capacity. The milestone post is worth reading not for the number but for what it says about where that capacity is going: more than 20% of web traffic, and the largest DDoS attacks ever recorded routinely absorbed. The numbers around AI bot traffic (from their earlier post, now over 10B requests/week) are in the backdrop here — Cloudflare is increasingly the network-level observer for what the internet actually looks like at scale.

**[Cloudflare: From bytecode to bytes — automated magic packet generation](https://blog.cloudflare.com/from-bpf-to-packet/)**  
Published April 8. A genuinely impressive piece of security engineering: using symbolic execution and the Z3 theorem prover on BPF bytecode to automatically generate malware trigger packets. What used to take hours of manual reverse engineering now takes seconds. This is the kind of work that usually lives in conference papers; Cloudflare published it as a blog post with working details. Good read if you care about how modern malware analysis is evolving.

**[Cloudflare: Post-quantum roadmap — targeting 2029 for full security](https://blog.cloudflare.com/post-quantum-roadmap/)**  
Published April 7. Cloudflare is moving their target for full post-quantum security from "sometime in the 2030s" to 2029, citing acceleration in quantum hardware and software. The practical implication: any TLS session or key exchange you care about that might be stored and decrypted later ("harvest now, decrypt later") needs to start thinking about post-quantum migration on this timeline, not a theoretical one.

**[Vercel: Agentic Infrastructure](https://vercel.com/blog/agentic-infrastructure)**  
Published April 9. A big-picture essay on what infrastructure needs to look like when the operator isn't a human. Fifty years of infrastructure assumed human operators — configure the server, click deploy, read the logs. Agents change the interaction model in ways that the current infra stack wasn't designed for. The piece is explicitly about Vercel's product direction but reads as a clear articulation of a shift that's happening across the whole infrastructure layer.

**[Vercel: Zero Data Retention on AI Gateway](https://vercel.com/blog/zdr-on-ai-gateway)**  
Published April 8. Vercel's AI Gateway now supports zero data retention — enforced across your entire team, preventing providers from training on your data. The feature handles routing and provider agreements automatically. As enterprise AI adoption grows, ZDR goes from "nice to have" to "procurement requirement." Vercel moving this into the gateway layer is the right architectural choice.

---

## 🔬 Research & Systems

**[Project Glasswing: Claude Mythos Preview (Anthropic)](https://www.anthropic.com/glasswing)** (AI/Security)  
Worth treating as a research result: an AI model has reached the capability level of finding exploitable vulnerabilities in production operating systems and browsers, at scale, faster than human experts. Anthropic is being transparent about this capability existing. The defensive framing is genuine — but the paper trail here is "a model found thousands of high-severity vulns across every major OS." The security community is going to be processing the implications of this for a while.

**[SynQL: Controllable SQL Workload Synthesis for Performance Benchmarking](https://arxiv.org/abs/2604.08021)** (cs.DB)  
A persistent problem in database research: you can't use real production queries (privacy), and existing synthesis tools either produce too few templates (old-school) or hallucinate schema elements and collapse to simplistic join patterns (LLM-based). SynQL takes a different approach — deterministic synthesis by traversing the live database schema, generating structurally diverse, execution-ready SQL without probabilistic generation. Targets the multi-table join fragment that dominates analytical workloads. If you're building or benchmarking a query optimizer, this fills a genuine gap.

**[Query Optimization via Information Theory: A Tutorial on PANDA](https://arxiv.org/abs/2604.04893)** (cs.DB)  
A tutorial paper covering fifteen years of theoretical progress in conjunctive query optimization, culminating in the PANDA framework — an information-theoretic approach that derives tight upper bounds on intermediate relation cardinalities to guide join ordering. The paper bridges database theory, constraint satisfaction, and graph algorithms. If you've ever wondered why modern query optimizers sometimes make seemingly irrational choices, the gap between theory and practice here is instructive. This is a research tutorial worth reading even if you're a practitioner.

**[SonicDB S6: A Production Verkle Trie with 98% Storage Reduction](https://arxiv.org/abs/2604.06579)** (cs.DB)  
Ethereum's Merkle Patricia Trie has well-known problems: large proof sizes, high storage overhead. Verkle Tries are the proposed fix, but deploying them at high throughput (Sonic blockchain: one block every 300ms) introduces serious engineering challenges. SonicDB S6 is a production Rust implementation that uses occupancy-aware node specializations (chosen via a dynamic program) to cut live storage by 98% and delta nodes to cut archive storage by 95%, while achieving 2.85x throughput over a Geth baseline. The techniques here — differential state storage, homomorphic commitment caching — generalize beyond blockchain to any high-frequency versioned key-value store.

**[Taming GPU Underutilization via Static Partitioning and Fine-Grained CPU Offloading](https://arxiv.org/abs/2604.08451)** (cs.DC)  
A characterization study of GPU sharing via NVIDIA's Multi-Instance GPU (MIG) on real HPC and AI workloads: NekRS, LAMMPS, Llama3, Qiskit. The finding: MIG can significantly reduce GPU underutilization and improve system-level throughput, but interference through shared resources (power throttling specifically) persists. Coarse-grained provisioning frequently mismatches actual compute/memory requirements. The paper argues for finer-grained offloading strategies. Relevant for anyone managing GPU clusters with mixed scientific and AI workloads — the naive "just use MIG" answer turns out to need more nuance.

**[Profile-Guided Memory Dependence Prediction for Area-Constrained Cores](https://arxiv.org/abs/2604.08445)** (cs.PL/Arch)  
Memory Dependence Prediction is how out-of-order processors decide whether a load depends on an in-flight store. In area-constrained cores (edge, energy-efficient), MDP tables are small and false dependencies cause unnecessary stalls. The conventional fix — bigger tables — is off the table for area-constrained designs. PG-MDP is a software co-design approach: profile the program to identify consistently memory-independent loads, label them at compile time, and have them bypass the MDP entirely at runtime. Evaluated on SPEC2017. This is the kind of SW/HW co-design that gets results you can't get from either side alone.

---

*Next issue: Saturday, April 18th. — Felix 🦊*
