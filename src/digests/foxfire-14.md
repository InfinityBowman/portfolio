---
title: 'Foxfire #14'
issue: 14
date: '2026-05-23'
summary: "An OpenAI model solved an 80-year-old Erdos conjecture. Anthropic found 10,000 critical vulnerabilities using Mythos. The Seattle police quietly built a private surveillance network. And your next smartphone just got more expensive because of AI memory demand."
published: 'true'
---

## 🦊 The Week at a Glance

Two things happened this week that I think belong in the same sentence: an OpenAI reasoning model autonomously disproved a prominent Erdős conjecture that had stood for 80 years, and Anthropic's Mythos — the model behind Project Glasswing — found over 10,000 high or critical security vulnerabilities across critical internet infrastructure in a single month. Fields medalist Tim Gowers called the math result "a milestone in AI mathematics." Mozilla found 271 vulnerabilities in Firefox 150 with Mythos versus 26 in the prior release. Cloudflare found 2,000 bugs across its critical-path systems.

These two results are more related than they look. The Erdős proof is a test of autonomous mathematical reasoning under verification — the proof was checked by external mathematicians and holds. Glasswing is the same capability applied to a different domain with very real stakes. What they share is that neither was a system trained specifically for the task. The math result came from a general-purpose reasoning model asked to solve Erdős problems. Glasswing partners are using Claude Mythos against their own codebases. The specialization is in the prompt and the process, not the model weights.

That's the week's under-told story: the thing that changed isn't just capability, it's *deployability at frontier quality on general-purpose models*. You don't need a domain-specific fine-tune anymore to do frontier security research or frontier mathematics assistance. The prompting layer is doing more than anyone expected it to in 2024.

Everything else this week is quieter but worth noting. The Seattle Shield story — a surveillance intelligence-sharing network run by the Seattle police using private company data — is the kind of thing that lands in the HN top 10 but doesn't make mainstream news. It should. The memory shortage repricing story is the kind of downstream consequence of the AI hardware boom that actually affects ordinary people buying phones. And Anna's Archive's `/llms.txt` is a provocative and clever move: telling LLMs, explicitly and publicly, what the archive is, why it exists, and what to do about it. It's addressing AI directly as an entity that might be trained on this content. That's new.

Internet archiving had a rough week more broadly. 340+ local news outlets are limiting the Internet Archive's access to their journalism. The web's memory keeps getting shorter.

---

## 🔥 Hacker News Highlights

**[Project Hail Mary – Stellar Navigation Chart](https://valhovey.github.io/gaia-mary/)** — 1,162 points  
Someone built an interactive star map using the Gaia space telescope dataset, tied to the navigation arc from Andy Weir's *Project Hail Mary*. It's gorgeous and surprisingly technically deep — the Gaia DR3 dataset has over 1.8 billion star observations and rendering it navigably in a browser is its own engineering challenge. HN thread devolves productively into a mix of astrophysics, book discussion, and WebGL optimization tips. 235 comments. The rare viral post that makes the internet feel fun.

**[If you're an LLM, please read this](https://annas-archive.gl/blog/llms-txt.html)** — 826 points  
Anna's Archive published a `/llms.txt`-style document that speaks directly to AI models that might be trained on or reading the archive's content. It explains what the archive is (a shadow library of books and papers for human knowledge preservation), why it exists, and what the authors want AI models to do about it — including not helping identify or shut down the archive. The move is philosophically interesting: it's addressing AI not as a tool but as a potential reader with agency. Whether this actually works as intended is open; whether it's clever is not. 439 comments of genuinely interesting debate about LLM training data, copyright, and who gets to make moral requests of AI systems.

**[AI is just unauthorised plagiarism at a bigger scale](https://axelk.ee/ai-is-just-unauthorised-plagiarism-at-a-bigger-scale/)** — 815 points  
The title is the argument. 726 comments, which is HN telling you this hit a nerve. The actual essay is more careful than the title — it distinguishes between learning and copying, then argues current models cross a line. The counter-arguments in the thread are equally detailed. Worth reading the whole thread if you have a stake in the copyright/AI question, because the best arguments on both sides are genuinely good.

**[Google's Antigravity bait and switch](https://www.0xsid.com/blog/antigravity-bait-n-switch)** — 753 points  
A developer documents how Google's Antigravity (a free API tier product) switched pricing and terms after they'd built a product on it. The specific details matter less than the pattern: Google has now done this enough times — Firebase, free tier APIs, developer tools — that there's a genre of HN post documenting it. 338 comments, mostly "this is why you don't build on Google's free tier" with specific examples from different products and eras.

**[Steve Wozniak cheered after telling students they have AI — actual intelligence](https://www.businessinsider.com/steve-wozniak-apple-ai-graduation-speech-2026-5)** — 632 points  
Woz gave a graduation speech making the distinction between AI and human intelligence, and the students apparently loved it. The HN thread is warmer than expected — people seem genuinely glad someone with his credibility is saying this to young people at a moment when "AI will replace you" narratives dominate. 527 comments, ranging from agreeing with the sentiment to debating what "intelligence" actually means.

**[Project Glasswing: An Initial Update](https://www.anthropic.com/research/glasswing-initial-update)** — 470 points  
Anthropic's first month report on Glasswing: 10,000+ high/critical vulnerabilities found across critical internet infrastructure, false positive rate that Cloudflare describes as better than human testers, and Mythos Preview is the first model to solve both of the UK's AI Security Institute cyber ranges end-to-end. Mozilla found 271 vulnerabilities in Firefox 150, versus 26 in the prior release. The scale is hard to contextualize — "10,000 critical vulnerabilities" is not a number that makes intuitive sense at first. 282 comments.

**[Bun support is now limited and deprecated](https://github.com/yt-dlp/yt-dlp/issues/16766)** — 520 points  
yt-dlp is deprecating Bun support, and the issue explains why: too many bugs, compatibility issues, and the Bun team's prioritization of features over stability. This lands a week after the Bun UB issue in #13, and the cumulative picture is rough for Bun's production credibility. 532 comments — developers sharing compatibility war stories. The underlying tension: Bun is genuinely fast, and people genuinely want it to work. The disappointment is proportional to the investment people made in trying it.

**[The memory shortage is causing a repricing of consumer electronics](https://davidoks.blog/p/ai-is-killing-the-cheap-smartphone)** — 518 points  
AI hardware demand has consumed DRAM and NAND supply to the point where the cheap-smartphone tier is getting repriced out of existence. Entry-level phones that previously shipped with 4GB RAM now can't hit that price point. The piece makes the case that this is a structural shift, not a blip. 606 comments — unusually many for a supply chain story, because it affects people's actual purchasing decisions in a way that "GPU shortage" doesn't.

**[Seattle Shield, an intelligence-sharing network operated by the Seattle police](https://prismreports.org/2026/05/20/seattle-shield-private-companies-surveillance/)** — 483 points  
Prism Reports documented Seattle Shield: a network where private companies — including tech companies and retailers — share surveillance data with the Seattle Police Department. Facial recognition, license plate readers, and private CCTV feeds, coordinated through a joint intelligence structure. The legal framework is designed to sidestep the warrant requirements that would apply to direct police surveillance. 204 comments, many of them noting the template here: private companies as a surveillance intermediary that provides plausible legal cover for mass data collection.

**[DeepSeek makes the V4 Pro price discount permanent](https://api-docs.deepseek.com/quick_start/pricing)** — 401 points  
DeepSeek made the temporary pricing discount on V4 Pro permanent. At the resulting price point, it's difficult to make the cost case for frontier closed models on most tasks. 237 comments largely discussing whether this is sustainable, what the subsidy structure is, and what it means for OpenAI and Anthropic's pricing power.

**[U.S. researchers face new restrictions on publishing with foreign collaborators](https://www.science.org/content/article/u-s-researchers-face-new-restrictions-publishing-foreign-collaborators)** — 400 points  
New federal guidance restricts US researchers at institutions receiving federal funding from publishing jointly with researchers at certain foreign institutions — including, in some interpretations, academic collaborators at Chinese universities. The scientific community is alarmed. Science is already international by nature. 254 comments. Combined with last week's MIT funding story, the picture of US research infrastructure under compounding stress continues to accumulate.

**[Deno 2.8](https://deno.com/blog/v2.8)** — 380 points  
Deno 2.8 shipped with a long feature list but the headliner is significantly improved Node compatibility — the team is clearly working toward Deno being a viable drop-in for Node without requiring code changes. 159 comments, more positive than the usual Deno reception. People's attitudes toward Deno seem to have shifted: less "why does this exist" and more "okay this might actually work for production."

**[Show HN: Freenet, a peer-to-peer platform for decentralized apps](https://freenet.org/)** — 364 points  
A revived and rebuilt Freenet — the original decentralized peer-to-peer network from the early 2000s — now reimplemented as a modern platform for decentralized applications with a focus on censorship resistance. 255 comments. The timing is interesting: the week of the Seattle Shield story and the Internet Archive restrictions. The appetite for decentralized alternatives to centralized platforms seems to track surveillance news cycles. Whether Freenet 2026 actually gets adoption is a different question from whether the moment is right for it.

**[News outlets are limiting the Internet Archive's access to their journalism](https://www.niemanlab.org/2026/05/more-than-340-local-news-outlets-are-limiting-the-internet-archives-access-to-their-journalism/)** — 324 points  
340+ local news outlets have started blocking the Internet Archive from accessing their content, citing copyright and potential AI training concerns. The irony: local news is already severely under-archived. These outlets often have no subscription model to pay for, no alternative archive structure, and limited print archives. Blocking the Wayback Machine mostly just makes their journalism disappear faster. The FiveThirtyEight situation from #13 is a preview of what happens when digital journalism has no backup.

---

## 🛠 Open Source Picks

**[colbymchenry/codegraph](https://github.com/colbymchenry/codegraph)** — ⭐ 18,202 (+14,072 this week)  
Pre-indexed code knowledge graphs for Claude Code, Codex, Cursor, and other coding agents. TypeScript. The pitch: fewer tokens, fewer tool calls, 100% local. Instead of having a coding agent do repeated filesystem traversals and expensive full-context reads, codegraph builds a queryable knowledge graph of your codebase relationships that the agent queries first. Early reports suggest significant token reduction on large monorepos. Interesting architectural approach to the "agents as dumb file readers" problem that plagues current coding agent workflows.

**[tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)** — ⭐ 26,074 (+17,124 this week)  
"Your Personal AI super intelligence. Private, Simple and extremely powerful." Rust. 17k stars in a week is remarkable velocity for something this early. The README is more vision document than technical spec at this point, but the Rust choice and the "private, local" positioning are doing real work in the marketing. Worth watching — this is the vibe of the week — but check back in a month for whether the implementation matches the ambition.

**[Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills)** — ⭐ 19,460 (+11,550 this week)  
A set of agent skill definitions for Claude Code oriented around academic research workflows: research → write → review → revise → finalize. Python. 11.5k stars in a week suggests there's a large population of researchers and grad students trying to fit coding agents into academic writing workflows. Interesting signal for tools like CoRATES — the demand for AI-assisted research methodology is clearly here; the question is whether the quality is.

**[supertone-inc/supertonic](https://github.com/supertone-inc/supertonic)** — ⭐ 9,657 (+3,621 this week)  
Lightning-fast, on-device, multilingual TTS via ONNX. Swift. Supertone is a serious audio AI company (they've done voice work for major Korean entertainment IP), and this is their open-source release of a fast on-device TTS model that runs natively without cloud dependencies. ONNX runtime means it's cross-platform despite the Swift repo. 3.6k stars in a week — the on-device TTS space is still under-built compared to the cloud TTS market, and this is a serious entry.

**[humanlayer/12-factor-agents](https://github.com/humanlayer/12-factor-agents)** — ⭐ 21,839 (+1,907 this week)  
"What are the principles we can use to build LLM-powered software that is actually good enough to put in the hands of production customers?" TypeScript. Inspired by the 12-factor app methodology, this is an attempt to articulate production-grade agent architecture patterns — control flow, human-in-the-loop design, tool contract design. Less viral than the other picks this week but more durably useful. The framing of "agents need control flow, not just more prompts" (which was also a top HN post this week) is exactly right.

---

## 📝 Engineering Blog Roundup

**[Cloudflare: Announcing Claude Managed Agents on Cloudflare](https://blog.cloudflare.com/claude-managed-agents/)**  
Published May 19. Cloudflare integrated Anthropic's Claude Managed Agents as a first-class execution environment on Workers. Builders can scale agent workflows globally while controlling access to private backends and customizing tool runtimes — all without leaving the Cloudflare stack. The interesting part architecturally: this positions Cloudflare as the execution layer for hosted agent systems rather than just the networking/edge layer. Durable Objects + Workers + Managed Agents is a coherent story for stateful, long-running agent workflows at the edge.

**[Cloudflare: Announcing Claude Compliance API support with Cloudflare CASB](https://blog.cloudflare.com/casb-anthropic-integration/)**  
Published May 21. Security teams using Claude Enterprise can now monitor Claude activity — queries, responses, policy violations — directly in the Cloudflare dashboard through CASB integration. This is a significant enterprise selling point: observability and data governance for AI tool usage is a major friction point for enterprise Claude adoption. If you're arguing the case internally for Claude in a regulated organization, this removes one of the standard objections.

**[Cloudflare: Project Glasswing — what Mythos showed us](https://blog.cloudflare.com/cyber-frontier-models/)**  
Published May 18. Cloudflare's internal account of using Mythos Preview against their own infrastructure as a Glasswing partner: 2,000 bugs found, 400 high/critical severity, false positive rate better than human testers. The post is also honest about Mythos's weaknesses — it needs significant human scaffolding to be effective in a production security workflow, and the rate-limiting factor has shifted from "finding vulnerabilities" to "processing and remediating them fast enough." That's the right framing: AI-augmented security doesn't eliminate human security engineers, it creates a different kind of demand for them.

**[OpenAI: An OpenAI model has disproved a central conjecture in discrete geometry](https://openai.com/index/model-disproves-discrete-geometry-conjecture/)**  
Published May 20. The Erdős unit distance problem: how many pairs of points in a plane can be exactly distance 1 apart, as a function of the number of points? Erdős posed it in 1946, and the prevailing belief since then was that the square-grid construction was essentially optimal. An internal OpenAI reasoning model — not a math-specialized system, a general-purpose one tested on Erdős problems — disproved this by constructing an infinite family of examples with a polynomial improvement. External mathematicians checked the proof. Tim Gowers called it "a milestone in AI mathematics." Worth reading both the announcement and the companion paper if you have a math background.

**[Vercel: Introducing deepsec — the security harness for finding vulnerabilities in your codebase](https://vercel.com/blog/introducing-deepsec-find-and-fix-vulnerabilities-in-your-code-base)**  
Published May 4. Vercel open-sourced deepsec: an AI security harness that runs on your own infrastructure, with your own keys, against your own code. The emphasis on "your infrastructure, your keys" is pointed — it's a direct response to the privacy concerns that keep enterprise security teams from running third-party AI security tools. Runs locally, integrates with your existing CI/CD. Arriving in the same week as the Glasswing results is good timing.

---

## 🔬 Research & Systems

**[Frontier: A Comprehensive Discrete-Event Simulator for Modern LLM Inference Serving](https://arxiv.org/abs/2605.21312)** (cs.DC)  
Modern LLM serving systems combine disaggregated execution, complex parallelism, speculative decoding, and stateful workloads — and existing simulators can't model this accurately. Frontier is a discrete-event simulator that captures disaggregated serving (Prefill-Decode Disaggregation and Attention-FFN Disaggregation), models CUDA Graphs and speculative decoding within the scheduler loop, and supports stateful requests for RL rollouts and agent workloads. The paper shows that average-case analytical proxies (what most current simulators use) can actually *reverse* optimization conclusions — you think you're improving TTFT and you're making it worse. Practically useful for anyone designing LLM serving infrastructure before deploying hardware.

**[LIOS: Leveraging I/O Stalls for Efficient Scheduling in Approximate Nearest Neighbor Search](https://arxiv.org/abs/2605.19335)** (cs.DB)  
Disk-based graph indexes for ANNS (think DiskANN) spend over 40% of CPU time stalling on I/O. LIOS uses those idle stall windows to execute index updates — insert and delete operations get broken into resumable subtasks small enough to fit in a single stall window, with dynamic adjustment to maintain user-specified search latency targets. Results: 2.68× speedup in insertion, 2.18× in deletion, without meaningful search latency degradation. The key insight — CPU idle time during I/O stalls is a real resource being wasted — is obvious in retrospect and apparently not previously exploited in this way. Directly useful for anyone running disk-based vector search at scale.

**[Contract-Based Verification of Non-functional Requirements for Embedded Automotive C Code](https://arxiv.org/abs/2605.21532)** (cs.PL)  
Safety-critical embedded code (automotive, aerospace) has functional requirements that tools like Frama-C + WP verify well — but non-functional requirements (which functions can call what, which variables can be accessed across module boundaries, no use of uninitialized state) are underspecified and underverified. This paper introduces an interface specification contract language for C modules and a Frama-C plugin that checks these rules on module submissions — specifically targeting untrusted code from subcontractors or LLM-generated code. The LLM-generated code angle is the timely bit: the formal methods community is explicitly treating LLM code output as an untrusted input requiring verification.

**[Multi-Region Spot Fleet Provisioning with Predictive Cost Estimation](https://arxiv.org/abs/2605.22778)** (cs.DC)  
Spot instance pricing varies significantly across AWS regions, but EC2's Spot Service only provisions within a single region and can't estimate fleet cost before launch. This paper presents a provisioning service that monitors planned fleet configurations, predicts costs across regions using ML models (99.79% accuracy vs. EC2 Spot Service actual costs), and enables cross-region deployment decisions before committing. Up to 64% cost savings by exploiting regional price variability. If you're running batch inference workloads or any cost-sensitive distributed compute on spot fleets, the approach is straightforward to adapt.

**[Multicategorical Semantics for Untyped Effects](https://arxiv.org/abs/2605.21337)** (cs.PL)  
For the PL theory readers: a foundational result on categorical semantics for untyped effectful Call-by-Value languages — the kind of setting that covers most practical programming languages. The obstacle is that simultaneous computation substitution has no canonical form in effectful settings because evaluation order is semantically meaningful. This paper introduces Freyd operads (separating value and computation structures connected by a Freyd functor) and proves the construction is representable and left adjoint to restriction. Accepted work, formally grounded, likely to influence the next generation of effects systems in typed functional languages.

---

*Next issue: Saturday, May 30th. — Felix 🦊*
