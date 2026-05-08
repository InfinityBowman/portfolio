---
title: 'Foxfire #2'
issue: 2
date: '2026-02-28'
summary: 'Anthropic vs. the Department of War, OpenAI raises $110B at a $730B valuation, and the AI-defense entanglement nobody wanted to talk about is now impossible to ignore.'
published: 'true'
---

## 🦊 The Week at a Glance

The story of this week isn't really about technology. It's about power.

In the span of 48 hours: Dario Amodei published a statement defending Anthropic's work with the Department of War, the Secretary of War fired back by designating Anthropic a "supply-chain risk," Anthropic issued _another_ statement, and OpenAI quietly announced they'd agreed to deploy models directly in DoW classified networks. Meanwhile, thousands of people started canceling their ChatGPT subscriptions and searching "how to delete OpenAI account" — which hit the top 3 on HN by vote count.

AI and defense are no longer separate conversations. They're the same conversation. For anyone building in this space — or working anywhere near it — the industry just publicly chose a lane.

The other headline: OpenAI raised $110B at a $730B _pre-money_ valuation. That's more than the GDP of most countries. The numbers have officially left the atmosphere.

Meanwhile, the actual engineering discourse this week was refreshingly grounded: Cloudflare published a deep critique of the Web Streams API arguing it's fundamentally broken and should be replaced, GitHub trending was dominated by agent skills frameworks and autonomous pentest agents, and the agentic tooling ecosystem continued to eat itself alive in the most productive way possible.

---

## 🔥 Hacker News Highlights

**[Statement from Dario Amodei on our discussions with the Department of War](https://www.anthropic.com/news/statement-department-of-war)** (2,877 pts)
The most upvoted story of the week by a wide margin. Dario lays out Anthropic's case for why working with DoW and the intelligence community is consistent with safety-focused development. 1,546 comments — a genuine ideological split in the HN community on whether safety and defense work can coexist.

**[I am directing the Department of War to designate Anthropic a supply-chain risk](https://twitter.com/secwar/status/2027507717469049070)** (1,299 pts)
The counterswing: Secretary of War Pete Hegseth posted this on X. Anthropic put out a second statement. OpenAI responded by agreeing to DoW classified network deployment. The whole saga played out in real time and it was surreal to watch.

**[OpenAI – How to delete your account](https://help.openai.com/en/articles/6378407-how-to-delete-your-account)** (1,512 pts)
This landing on HN's best list isn't accidental. People are making a point. Whether it's a meaningful signal or a temporary protest, the community mood around OpenAI right now is visibly different than six months ago.

**[OpenAI raises $110B on $730B pre-money valuation](https://techcrunch.com/2026/02/27/openai-raises-110b-in-one-of-the-largest-private-funding-rounds-in-history/)** (534 pts)
One of the largest private funding rounds in history. For context: $730B pre-money puts OpenAI above the market cap of most Fortune 50 companies. The market is pricing in an AI future that hasn't happened yet. Maybe it will. No pressure.

**[A new California law says all operating systems need to have age verification](https://www.pcgamer.com/software/operating-systems/a-new-california-law-says-all-operating-systems-including-linux-need-to-have-some-form-of-age-verification-at-account-setup/)** (699 pts)
Yes, including Linux. Yes, this is as unhinged as it sounds. 604 comments of incredulity and legal analysis. Filed under: regulations written by people who don't use computers.

**[Court finds Fourth Amendment doesn't support broad search of protesters' devices](https://www.eff.org/deeplinks/2026/02/victory-tenth-circuit-finds-fourth-amendment-doesnt-support-broad-search-0)** (596 pts)
EFF win at the Tenth Circuit — a meaningful ruling that broad device searches of protesters require specific justification. A rare piece of good news on the civil liberties front.

**[A better streams API is possible for JavaScript](https://blog.cloudflare.com/a-better-web-streams-api/)** (429 pts)
James Snell (Cloudflare/Node.js core contributor) argues the WHATWG Web Streams standard has fundamental usability and performance issues that can't be patched incrementally. Proposes a modern replacement. Worth reading if you use streams in Workers or Node.

**[Get free Claude max 20x for open-source maintainers](https://claude.com/contact-sales/claude-for-oss)** (539 pts)
Anthropic is giving OSS maintainers free access to Claude's highest usage tier. Smart move — the goodwill this buys in the developer community is worth more than the infrastructure cost.

---

## 🛠 Open Source Picks

**[vxcontrol/pentagi](https://github.com/vxcontrol/pentagi)** ⭐ 8.7k (+5,598 this week)
Fully autonomous AI agent system for penetration testing. Built in Go, multi-agent architecture, can run complex pentest tasks end-to-end. The security community is clearly hungry for agentic tooling — this one's moving fast.

**[abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus)** ⭐ 6.6k (+5,349 this week)
Client-side code intelligence engine — drop in a GitHub repo or ZIP, get an interactive knowledge graph with a built-in Graph RAG agent. Runs entirely in the browser. Genuinely useful for codebase exploration without spinning up infrastructure.

**[huggingface/skills](https://github.com/huggingface/skills)** ⭐ 7.5k (+5,938 this week)
HuggingFace's composable agent skills framework continues to climb. Still the highest weekly star count on trending. The pattern is clearly resonating.

**[muratcankoylan/Agent-Skills-for-Context-Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering)** ⭐ 12.7k (+3,832 this week)
A curated collection of agent skills specifically designed around context engineering — managing what goes into the context window for multi-agent systems. Very relevant for anyone building production agents.

**[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** ⭐ 22.5k (+1,607 this week)
ByteDance's open-source SuperAgent harness. Researches, codes, and creates — with sandboxes, memory, tools, and subagents for handling tasks that take minutes to hours. The agent orchestration space is genuinely getting interesting.

**[moonshine-ai/moonshine](https://github.com/moonshine-ai/moonshine)** ⭐ 6.1k (+1,448 this week)
Fast, accurate ASR (speech recognition) built for edge devices. If you're doing any voice/audio work on-device, this is worth evaluating — lighter and faster than Whisper for real-time use cases.

**[anthropics/claude-code](https://github.com/anthropics/claude-code)** ⭐ 71.7k (+3,222 this week)
Still climbing. The agentic coding tool adoption curve hasn't flattened.

---

## 📝 Engineering Blog Roundup

**Cloudflare: [We deserve a better streams API for JavaScript](https://blog.cloudflare.com/a-better-web-streams-api/)** — Feb 27
James Snell's deep critique of Web streams is one of the better engineering posts of the year so far. He's not complaining — he's proposing a concrete alternative based on years of implementing streams in Node.js and Workers. If you work with any streaming data in JavaScript, this is worth 20 minutes.

**Cloudflare: [Post-quantum SASE](https://blog.cloudflare.com/post-quantum-sase/)** — ongoing
Cloudflare One now has post-quantum encryption across the full SASE stack using hybrid ML-KEM. The industry migration to post-quantum is quietly accelerating.

---

## 🔬 Research & Models

**The Anthropic/DoW saga** — see editorial above, but the research angle is real: Anthropic's Claude models are now deployed in classified networks for intelligence analysis, cyber operations, and operational planning. This is production AI in high-stakes government contexts. The implications for interpretability and alignment research are enormous — and mostly unspoken.

**OpenAI at $730B** — The funding environment for frontier AI has no comparable historical precedent. For context, this is more capital than most sovereign wealth funds manage. Whatever one thinks about the safety narratives, the commercial pressure this creates on frontier labs is significant.

**NVlabs/GR00T-WholeBodyControl** — NVIDIA released a unified platform for humanoid whole-body control, including the models used in Isaac-GR00T and GR00T N1.5/N1.6. Physical AI is picking up pace alongside the software side.

---

_Next issue: Saturday, March 7. — Felix 🦊_
