---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# About Me

I’m currently a 3rd-year Ph.D. candidate in the Department of Automation at <a href="https://www.tsinghua.edu.cn/en/"><em class="entity-mention" style="--entity-color: #7B61C9"><img class="entity-logo" src="/images/logos/thu.png" alt="">Tsinghua University</em></a>. Prior to this, I earned my B.Eng. degree from the School of Automation Science and Engineering, <a href="https://en.xjtu.edu.cn/"><em class="entity-mention" style="--entity-color: #D45A5A"><img class="entity-logo" src="/images/logos/xjtu.svg" alt="">Xi'an Jiaotong University</em></a> in 2023. I worked closely with [Shuai Zhang](https://scholar.google.com/citations?user=PfILtS8AAAAJ&hl=zh-CN) and [Zhengqi Wen](https://scholar.google.com/citations?user=7SBjscMAAAAJ&hl=zh-CN). I am fortunate to collaborate with [Zheng Lian](https://zeroqiaoba.github.io/Homepage/), [Haoran Luo](https://haoranluo.net/), [Zhengxi Lu](https://lll6gg.github.io/), [Yuhao Shen](https://sylvan820.github.io/), and [Fan Zhang](https://zfkarl.github.io/).

My research interests focus on **LLM / MLLM reasoning, planning, and agentic reinforcement learning**. From 2024 to early 2025, my work mainly focus on high-quality and efficient reasoning for LLMs. My current research investigates post-training techniques for general agents, including agent skills, on-policy distillation (OPD), and reinforcement learning (RL).

🐈 Collaboration: I am looking for motivated collaborators interested in the above topics. If you would like to explore these directions together, feel free to contact me. UG/MSc students are also welcomed! 🌱

# 🔥 News

<div class="scrollable-area">
  <ul>
    <li class="news-item"><span class="news-date">2026.06</span><span class="news-body">🚀 Released <a href="https://arxiv.org/abs/2606.26790">OPID</a>, <a href="https://arxiv.org/abs/2606.30251">TACO</a>, <a href="https://arxiv.org/abs/2606.13707">Orchestra-o1</a>. OPID featured as 🤗 HF Daily Paper #3!</span></li>
    <li class="news-item"><span class="news-date">2026.05</span><span class="news-body">🎙️ Presented <a href="https://arxiv.org/abs/2605.22177">Maestro</a> at AliStar Academic Open Day, Beijing 🇨🇳.</span></li>
    <li class="news-item"><span class="news-date">2026.05</span><span class="news-body">🚀 Released <a href="https://arxiv.org/abs/2605.22177">Maestro</a>, <a href="https://arxiv.org/abs/2605.06234">RobotEQ</a>, <a href="https://arxiv.org/abs/2605.15155">SDAR</a>, <a href="https://arxiv.org/abs/2605.06126">AffectGPT-RL</a>. SDAR featured as 🤗 HF Daily Paper #2!</span></li>
    <li class="news-item"><span class="news-date">2026.05</span><span class="news-body">✈️🏛️ Attending VALSE 2026 at Wuhan 🇨🇳</span></li>
    <li class="news-item"><span class="news-date">2026.04</span><span class="news-body">🚀 Released <a href="https://arxiv.org/abs/2604.02268">SKILL0</a> on skill internalization, featured as 🤗 HF Daily Paper #2!</span></li>
    <li class="news-item"><span class="news-date">2026.04</span><span class="news-body">🎉 Six papers accepted to ACL 2026, including one oral and best paper candidate (Double). See you in San Diego 🇺🇸!</span></li>
    <li class="news-item"><span class="news-date">2026.02</span><span class="news-body">🎉 Two papers accepted to ICLR 2026! </span></li>
    <li class="news-item"><span class="news-date">2026.01</span><span class="news-body">✈️ Attended AAAI 2026 in Singapore 🇸🇬</span></li>
    <li class="news-item"><span class="news-date">2025.12</span><span class="news-body">🎤 Attended the 2025 China Metaverse Conference in Wenzhou 🇨🇳.</span></li>
    <li class="news-item"><span class="news-date">2025.11</span><span class="news-body">🎉 Two papers accepted to AAAI 2026 (one oral presentation)!</span></li>
    <li class="news-item"><span class="news-date">2025.11</span><span class="news-body">✈️📍 Attending EMNLP 2025 in Suzhou 🇨🇳</span></li>
    <li class="news-item"><span class="news-date">2025.05</span><span class="news-body">🎉 NoiserBench accepted to ACL 2025!</span></li>
  </ul>
</div>

# 📝 Selected Publication（[Full List](https://scholar.google.com/citations?hl=en&user=t8H8Ru0AAAAJ)）

<small>* Equal contribution. † Corresponding author.</small>

## 🤖 Agentic Post Training

<div class='paper-box'><div class='paper-box-image'><div><div class="badge badge-acl">ACL 2026</div><img src='pub_images/spark.png' alt="SPARK" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SPARK: Strategic Policy-Aware Exploration via Dynamic Branching for Long-Horizon Agentic Learning](https://arxiv.org/abs/2601.20209)

**<u>Jinyang Wu</u>**, Shuo Yang, Changpeng Yang, Yuhao Shen, Shuai Zhang, Zhengqi Wen, Jianhua Tao

[Paper](https://arxiv.org/abs/2601.20209){:.btn-link .btn-paper} [<img src='./images/svgs/huggingface_logo.svg' alt="">HF](https://huggingface.co/collections/Jinyang23/spark){:.btn-link .btn-hf} <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=t8H8Ru0AAAAJ&citation_for_view=t8H8Ru0AAAAJ:0EnyYjriUFMC" class="btn-link btn-scholar"><i class="ai ai-google-scholar" aria-hidden="true"></i> <span class='show_paper_citations' data='t8H8Ru0AAAAJ:0EnyYjriUFMC'>--</span></a> [Code](https://github.com/jinyangwu/SPARK){:.btn-link .btn-code} <a href="#" class="btn-link btn-bib" data-bib-key="wu2026spark">BIB</a>
- We propose a policy-aware branching framework that allocates exploration budget to critical decision states, improving sample efficiency for long-horizon agentic RL.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge badge-acl">ACL 2026</div><img src='pub_images/atlas.png' alt="Atlas" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Atlas: Orchestrating Heterogeneous Models and Tools for Multi-Domain Complex Reasoning](https://arxiv.org/abs/2601.03872)

**<u>Jinyang Wu</u>**, Guocheng Zhai, Ruihan Jin, Jiahao Yuan, Yuhao Shen, Shuai Zhang, Zhengqi Wen, Jianhua Tao

[Paper](https://arxiv.org/abs/2601.03872){:.btn-link .btn-paper} [<img src='./images/svgs/huggingface_logo.svg' alt="">HF](https://huggingface.co/papers/2601.03872){:.btn-link .btn-hf} <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=t8H8Ru0AAAAJ&citation_for_view=t8H8Ru0AAAAJ:ufrVoPGSRksC" class="btn-link btn-scholar"><i class="ai ai-google-scholar" aria-hidden="true"></i> <span class='show_paper_citations' data='t8H8Ru0AAAAJ:ufrVoPGSRksC'>--</span></a> <a href="#" class="btn-link btn-bib" data-bib-key="wu2026atlas">BIB</a>
- We introduce a dual-path framework for dynamic tool usage, combining cluster-based routing with RL-based multi-step routing for cross-domain reasoning.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge badge-preprint">Preprint</div><img src='pub_images/maestro.png' alt="Maestro" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Maestro: Reinforcement Learning to Orchestrate Hierarchical Model-Skill Ensembles](https://arxiv.org/abs/2605.22177)

**<u>Jinyang Wu</u>**, Guocheng Zhai, Ruihan Jin, Yuhao Shen, Zhengxi Lu, Fan Zhang, Haoran Luo, Zheng Lian, Zhengqi Wen, Jianhua Tao

[Paper](https://arxiv.org/abs/2605.22177){:.btn-link .btn-paper} [<img src='./images/svgs/huggingface_logo.svg' alt="">HF](https://huggingface.co/papers/2605.22177){:.btn-link .btn-hf} <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=t8H8Ru0AAAAJ&citation_for_view=t8H8Ru0AAAAJ:KlAtU1dfN6UC" class="btn-link btn-scholar"><i class="ai ai-google-scholar" aria-hidden="true"></i> <span class='show_paper_citations' data='t8H8Ru0AAAAJ:KlAtU1dfN6UC'>--</span></a> [Code](https://github.com/jinyangwu/Maestro){:.btn-link .btn-code} <a href="#" class="btn-link btn-bib" data-bib-key="wu2026maestro">BIB</a>
- We formulate model-skill orchestration as a sequential decision process and train a lightweight policy to compose frozen expert models and skills for multimodal tasks.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge badge-preprint">Preprint</div><img src='pub_images/opid.png' alt="OPID" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[OPID: On-Policy Skill Distillation for Agentic Reinforcement Learning](https://arxiv.org/abs/2606.26790)

Shuo Yang*, **<u>Jinyang Wu*,†</u>**, Zhengxi Lu, Yuhao Shen, Fan Zhang, Lang Feng, Shuai Zhang, Haoran Luo, Zheng Lian, Zhengqi Wen, Jianhua Tao

[Paper](https://arxiv.org/abs/2606.26790){:.btn-link .btn-paper} [<img src='./images/svgs/huggingface_logo.svg' alt="">HF](https://huggingface.co/collections/Jinyang23/opid){:.btn-link .btn-hf} <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=t8H8Ru0AAAAJ&citation_for_view=t8H8Ru0AAAAJ:4DMP91E08xMC" class="btn-link btn-scholar"><i class="ai ai-google-scholar" aria-hidden="true"></i> <span class='show_paper_citations' data='t8H8Ru0AAAAJ:4DMP91E08xMC'>--</span></a> [Code](https://github.com/jinyangwu/OPID){:.btn-link .btn-code} <a href="#" class="btn-link btn-bib" data-bib-key="yang2026opid">BIB</a>
- We extract hierarchical skill supervision from completed on-policy trajectories and convert hindsight skill signals into dense token-level advantages for agent training.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge badge-preprint">Preprint</div><img src='pub_images/skill0.png' alt="SKILL0" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SKILL0: In-Context Agentic Reinforcement Learning for Skill Internalization](https://arxiv.org/abs/2604.02268)

Zhengxi Lu, Zhiyuan Yao, **<u>Jinyang Wu</u>**, Chengcheng Han, Qi Gu, Xunliang Cai, Weiming Lu, Jun Xiao, Yueting Zhuang, Yongliang Shen

[Paper](https://arxiv.org/abs/2604.02268){:.btn-link .btn-paper} [<img src='./images/svgs/huggingface_logo.svg' alt="">HF](https://huggingface.co/papers/2604.02268){:.btn-link .btn-hf} <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=t8H8Ru0AAAAJ&citation_for_view=t8H8Ru0AAAAJ:kNdYIx-mwKoC" class="btn-link btn-scholar"><i class="ai ai-google-scholar" aria-hidden="true"></i> <span class='show_paper_citations' data='t8H8Ru0AAAAJ:kNdYIx-mwKoC'>--</span></a> [Code](https://github.com/ZJU-REAL/SkillZero){:.btn-link .btn-code} <a href="#" class="btn-link btn-bib" data-bib-key="lu2026skill0">BIB</a>
- We study skill internalization for agents, gradually withdrawing runtime skill context so the policy can acquire reusable behaviors into its parameters.
</div>
</div>

- <span class="pub-label pub-label-preprint">Preprint</span> [TACO: Tool-Augmented Credit Optimization for Agentic Tool Use](https://arxiv.org/abs/2606.30251), Mingkuan Feng*, **<u>Jinyang Wu*,†</u>**, Hao Gu, Fangrui Lv, Ruihan Jin, Chuyuan Zhang, Zhengqi Wen, Jianhua Tao&nbsp;&nbsp;[<img src='./images/svgs/huggingface_logo.svg' alt="">HF](https://huggingface.co/papers/2606.30251){:.btn-link .btn-hf} <a href="#" class="btn-link btn-bib" data-bib-key="feng2026taco">BIB</a>
- <span class="pub-label pub-label-preprint">Preprint</span> [SDAR: Self-Distilled Agentic Reinforcement Learning](https://arxiv.org/abs/2605.15155), Zhengxi Lu, Zhiyuan Yao, Zhuowen Han, Zi-Han Wang, **<u>Jinyang Wu</u>**, Qi Gu, Xunliang Cai, Weiming Lu, Jun Xiao, Yueting Zhuang, Yongliang Shen&nbsp;&nbsp;[<img src='./images/svgs/huggingface_logo.svg' alt="">HF](https://huggingface.co/papers/2605.15155){:.btn-link .btn-hf} [Code](https://github.com/ZJU-REAL/SDAR){:.btn-link .btn-code} <a href="#" class="btn-link btn-bib" data-bib-key="lu2026sdar">BIB</a>
- <span class="pub-label pub-label-preprint">Preprint</span> [OdysseyArena: Benchmarking Large Language Models For Long-Horizon, Active and Inductive Interactions](https://arxiv.org/abs/2602.05843), Fangzhi Xu, Hang Yan, Qiushi Sun, **<u>Jinyang Wu</u>**, Zixian Huang, Muye Huang, Jingyang Gong, Zichen Ding, Kanzhi Cheng, Yian Wang, Xinyu Che, Zeyi Sun, Jian Zhang, Zhangyue Yin, Haoran Luo, Xuanjing Huang, Ben Kao, Jun Liu, Qika Lin&nbsp;&nbsp;[<img src='./images/svgs/huggingface_logo.svg' alt="">HF](https://huggingface.co/datasets/xufangzhi/OdysseyArena){:.btn-link .btn-hf} [Code](https://github.com/xufangzhi/Odyssey-Arena){:.btn-link .btn-code} <a href="#" class="btn-link btn-bib" data-bib-key="xu2026odysseyarena">BIB</a>
- <span class="pub-label pub-label-preprint">Preprint</span> [Orchestra-o1: Omnimodal Agent Orchestration](https://arxiv.org/abs/2606.13707), Fan Zhang, Vireo Zhang, Shengju Qian, Haoxuan Li, Hao Wu, **<u>Jinyang Wu</u>**, Donghao Zhou, Zhihong Zhu, Zheng Lian, Xin Wang, Pheng-Ann Heng&nbsp;&nbsp;[<img src='./images/svgs/huggingface_logo.svg' alt="">HF](https://huggingface.co/papers/2606.13707){:.btn-link .btn-hf} [Code](https://github.com/zfkarl/Orchestra-o1){:.btn-link .btn-code} <a href="#" class="btn-link btn-bib" data-bib-key="zhang2026orchestra">BIB</a>
- <span class="pub-label pub-label-preprint">Preprint</span> [RobotEQ: Transitioning from Passive Intelligence to Active Intelligence in Embodied AI](https://arxiv.org/abs/2605.06234), Kuofei Fang, Xinyi Che, Haomin Ouyang, Shufan Zhang, Xuehao Wang, Qi Liu, Liyi Liu, Chenqi Zhang, Wenxi Cai, Wenyu Dai, **<u>Jinyang Wu</u>**, Fan Zhang, Haoyu Chen, Bin He, Zheng Lian&nbsp;&nbsp;[<img src='./images/svgs/huggingface_logo.svg' alt="">HF](https://huggingface.co/datasets/Tongji-Emotion/Robot-EQ){:.btn-link .btn-hf} <a href="#" class="btn-link btn-bib" data-bib-key="fang2026roboteq">BIB</a>

## 🧠 LLM Reasoning

<div class='paper-box'><div class='paper-box-image'><div><div class="badge badge-acl">ACL 2026</div><img src='pub_images/thoughticr.png' alt="ThoughtICR" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Beyond Examples: Towards Automated Thought-level In-Context Reasoning for Large Language Models](https://arxiv.org/abs/2411.18478)

**<u>Jinyang Wu</u>**, Mingkuan Feng, Shuai Zhang, Feihu Che, Zhengqi Wen, Chonghua Liao, Ling Yang, Haoran Luo, Zheng Lian, Jianhua Tao

[Paper](https://arxiv.org/abs/2411.18478){:.btn-link .btn-paper} [<img src='./images/svgs/huggingface_logo.svg' alt="">HF](https://huggingface.co/papers/2411.18478){:.btn-link .btn-hf} <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=t8H8Ru0AAAAJ&citation_for_view=t8H8Ru0AAAAJ:aqlVkmm33-oC" class="btn-link btn-scholar"><i class="ai ai-google-scholar" aria-hidden="true"></i> <span class='show_paper_citations' data='t8H8Ru0AAAAJ:aqlVkmm33-oC'>--</span></a> [Code](https://github.com/jinyangwu/ThoughtICR){:.btn-link .btn-code} <a href="#" class="btn-link btn-bib" data-bib-key="wu2026thoughticr">BIB</a>
- We shift in-context reasoning from example-level imitation to reusable thought patterns, enabling automated and efficient reasoning guidance.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge badge-acl">ACL 2026</div><img src='pub_images/templaterl.png' alt="TemplateRL" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[TemplateRL: Structured Template-Guided Reinforcement Learning for LLM Reasoning](https://arxiv.org/abs/2505.15692)

**<u>Jinyang Wu</u>**, Chonghua Liao, Mingkuan Feng, Shuai Zhang, Zhengqi Wen, Haoran Luo, Ling Yang, Huazhe Xu, Jianhua Tao

[Paper](https://arxiv.org/abs/2505.15692){:.btn-link .btn-paper} [<img src='./images/svgs/huggingface_logo.svg' alt="">HF](https://huggingface.co/papers/2505.15692){:.btn-link .btn-hf} <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=t8H8Ru0AAAAJ&citation_for_view=t8H8Ru0AAAAJ:d1gkVwhDpl0C" class="btn-link btn-scholar"><i class="ai ai-google-scholar" aria-hidden="true"></i> <span class='show_paper_citations' data='t8H8Ru0AAAAJ:d1gkVwhDpl0C'>--</span></a> <a href="#" class="btn-link btn-bib" data-bib-key="wu2026templaterl">BIB</a>
- We augment policy optimization with structured templates, improving high-quality rollout generation and stabilizing RL training for reasoning.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge badge-acl">AAAI 2026</div><img src='pub_images/astar.png' alt="AStar" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[AStar: Boosting Multimodal Reasoning with Automated Structured Thinking](https://arxiv.org/abs/2502.02339)

**<u>Jinyang Wu</u>**, Mingkuan Feng, Guocheng Zhai, Shuai Zhang, Zheng Lian, Fangrui Lv, Pengpeng Shao, Ruihan Jin, Zhengqi Wen, Jianhua Tao

[Paper](https://arxiv.org/abs/2502.02339){:.btn-link .btn-paper} [<img src='./images/svgs/huggingface_logo.svg' alt="">HF](https://huggingface.co/papers/2502.02339){:.btn-link .btn-hf} <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=t8H8Ru0AAAAJ&citation_for_view=t8H8Ru0AAAAJ:qjMakFHDy7sC" class="btn-link btn-scholar"><i class="ai ai-google-scholar" aria-hidden="true"></i> <span class='show_paper_citations' data='t8H8Ru0AAAAJ:qjMakFHDy7sC'>--</span></a> <a href="#" class="btn-link btn-bib" data-bib-key="wu2026astar">BIB</a>
<span class="paper-note">AAAI 2026 Oral</span>
- We build a training-free structured thinking method for multimodal reasoning, retrieving reusable thought cards at test time to guide MLLMs.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge badge-acl">ACL 2026</div><img src='pub_images/double.png' alt="Double" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Double: Breaking the Acceleration Limit via Double Retrieval Speculative Parallelism](https://arxiv.org/abs/2601.05524)

Yuhao Shen, Tianyu Liu, Junyi Shen, **<u>Jinyang Wu</u>**, Quan Kong, Li Huan, Cong Wang

[Paper](https://arxiv.org/abs/2601.05524){:.btn-link .btn-paper} [<img src='./images/svgs/huggingface_logo.svg' alt="">HF](https://huggingface.co/papers/2601.05524){:.btn-link .btn-hf} <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=t8H8Ru0AAAAJ&citation_for_view=t8H8Ru0AAAAJ:roLk4NBRz8UC" class="btn-link btn-scholar"><i class="ai ai-google-scholar" aria-hidden="true"></i> <span class='show_paper_citations' data='t8H8Ru0AAAAJ:roLk4NBRz8UC'>--</span></a> [Code](https://github.com/Sylvan820/Double1){:.btn-link .btn-code} <a href="#" class="btn-link btn-bib" data-bib-key="shen2026double">BIB</a>
<span class="paper-note">ACL 2026 Oral & Best Paper Candidate</span>
- We bridge speculative decoding and retrieval-based guidance to push inference acceleration beyond conventional parallel speculative decoding limits.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge badge-acl">ACL 2025</div><img src='pub_images/noiserbench.png' alt="NoiserBench" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Pandora's Box or Aladdin's Lamp: A Comprehensive Analysis Revealing the Role of RAG Noise in Large Language Models](https://arxiv.org/abs/2408.13533)

**<u>Jinyang Wu</u>**, Shuai Zhang, Feihu Che, Mingkuan Feng, Pengpeng Shao, Jianhua Tao

[Paper](https://arxiv.org/abs/2408.13533){:.btn-link .btn-paper} [<img src='./images/svgs/huggingface_logo.svg' alt="">HF](https://huggingface.co/datasets/Jinyang23/NoiserBench){:.btn-link .btn-hf} <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=t8H8Ru0AAAAJ&citation_for_view=t8H8Ru0AAAAJ:2osOgNQ5qMEC" class="btn-link btn-scholar"><i class="ai ai-google-scholar" aria-hidden="true"></i> <span class='show_paper_citations' data='t8H8Ru0AAAAJ:2osOgNQ5qMEC'>--</span></a> [Code](https://github.com/jinyangwu/NoiserBench){:.btn-link .btn-code} <a href="#" class="btn-link btn-bib" data-bib-key="wu2025pandora">BIB</a>
- We define a linguistic taxonomy of RAG noise and build NoiserBench to study when retrieval noise harms or surprisingly helps LLM reasoning.
</div>
</div>

- <span class="pub-label pub-label-acl">ACL 2026</span> [Two-Stage Regularization-Based Structured Pruning for LLMs](https://arxiv.org/abs/2505.18232), Mingkuan Feng*, **<u>Jinyang Wu*</u>**, Siyuan Liu, Shuai Zhang, Ruihan Jin, Feihu Che, Pengpeng Shao, Zhengqi Wen, Jianhua Tao&nbsp;&nbsp;[Code](https://github.com/fmk345/TRSP){:.btn-link .btn-code} <a href="#" class="btn-link btn-bib" data-bib-key="feng2026trsp">BIB</a>
- <span class="pub-label pub-label-acl">AAAI 2026</span> [From Imitation to Discrimination: Toward A Generalized Curriculum Advantage Mechanism Enhancing Cross-Domain Reasoning Tasks](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=t8H8Ru0AAAAJ&pagesize=100&citation_for_view=t8H8Ru0AAAAJ:Zph67rFs4hoC), Changpeng Yang*, **<u>Jinyang Wu*</u>**, Yuchen Liu, Shuai Zhang, Yang Li, Qiliang Liang, Hongzhen Wang, Shuai Nie, Jiaming Xu, Runyu Shi, Ying Huang, Guoquan Zhang&nbsp;&nbsp;[<img src='./images/svgs/huggingface_logo.svg' alt="">HF](https://huggingface.co/papers/2512.02580){:.btn-link .btn-hf} <a href="#" class="btn-link btn-bib" data-bib-key="yang2026imitation">BIB</a>
- <span class="pub-label pub-label-acl">ICLR 2026</span> [Exploring Knowledge Purification in Multi-Teacher Knowledge Distillation for LLMs](https://arxiv.org/abs/2602.01064), Ruihan Jin, Pengpeng Shao, Zhengqi Wen, **<u>Jinyang Wu†</u>**, Mingkuan Feng, Shuo Yang, Chu Yuan Zhang, Jianhua Tao&nbsp;&nbsp;<a href="#" class="btn-link btn-bib" data-bib-key="jin2026knowledgepurification">BIB</a>
- <span class="pub-label pub-label-acl">ICLR 2026</span> [Attend to the Active: Structure-Aware Dynamic Attention in LLMs for Compositional Instruction Following](https://iclr.cc/virtual/2026/poster/10006691), Fangrui Lv, Yulei Qin, Ruixin Hong, Liang Jian, **<u>Jinyang Wu</u>**, Ke Li, Xing Sun, Changshui Zhang&nbsp;&nbsp;<a href="#" class="btn-link btn-bib" data-bib-key="lv2026attendactive">BIB</a>
- <span class="pub-label pub-label-acl">EMNLP 2025</span> [RadialRouter: Structured Representation for Efficient and Robust Large Language Models Routing](https://arxiv.org/abs/2506.03880), Ruihan Jin, Pengpeng Shao, Zhengqi Wen, **<u>Jinyang Wu</u>**, Mingkuan Feng, Shuai Zhang, Jianhua Tao&nbsp;&nbsp;<a href="#" class="btn-link btn-bib" data-bib-key="jin2025radialrouter">BIB</a>
- <span class="pub-label pub-label-preprint">Preprint</span> [DReSS: Data-driven Regularized Structured Streamlining for Large Language Models](https://arxiv.org/abs/2501.17905), Mingkuan Feng, **<u>Jinyang Wu</u>**, Shuai Zhang, Pengpeng Shao, Ruihan Jin, Zhengqi Wen, Jianhua Tao, Feihu Che&nbsp;&nbsp;<a href="#" class="btn-link btn-bib" data-bib-key="feng2025dress">BIB</a>
- <span class="pub-label pub-label-preprint">Preprint</span> [AffectGPT-RL: Revealing Roles of Reinforcement Learning in Open-Vocabulary Emotion Recognition](https://arxiv.org/abs/2605.06126), Zheng Lian, Fan Zhang, Lan Chen, Yazhou Zhang, Rui Liu, **<u>Jinyang Wu</u>**, Haoyu Chen, Xiaobai Li, Xiaojiang Peng, Bin He, Jianhua Tao&nbsp;&nbsp;<a href="#" class="btn-link btn-bib" data-bib-key="lian2026affectgptrl">BIB</a>

## 🧬 Biomedical AI
- <span class="pub-label pub-label-journal">Briefings in Bioinformatics 2023</span> [KGETCDA: An Efficient Representation Learning Framework Based on Knowledge Graph Encoder from Transformer for Predicting circRNA-Disease Associations](https://academic.oup.com/bib/article/24/5/bbad292/7242591?__cf_chl_f_tk=bHtbjkBuag5EGQzPvQ5Wv_3uDGaoVZx96QhBiYaevHY-1782837345-1.0.1.1-5uwCl9MlVGSzJTYCeael6d08JUcFHCzAXeAGkBvTzBA), **<u>Jinyang Wu</u>**, Zhiwei Ning, Yidong Ding, Ying Wang, Qinke Peng, Laiyi Fu
- <span class="pub-label pub-label-journal">IEEE JBHI 2023</span> [BertNDA: A Model Based on Graph-BERT and Multi-Scale Information Fusion for ncRNA-Disease Association Prediction](https://ieeexplore.ieee.org/document/10239308/), Zhiwei Ning, **<u>Jinyang Wu</u>**, Yidong Ding, Ying Wang, Qinke Peng, Laiyi Fu

# 👨‍🏫 Teaching
- Teaching Assistant, Affective Computing, graduate course.
- Teaching Assistant, Intelligent Speech Processing, undergraduate interdisciplinary innovation training course.

# 🎖 Honors and Awards
- *2026*: Outstanding Student Cadre, Tsinghua University.
- *2026*: Merit Student, Tsinghua University.
- *2025*: Outstanding Teaching Assistant, Tsinghua University.
- *2025*: First-Class Scholarship of Tsinghua University.
- *2024*: Second-Class Scholarship of Tsinghua University.
- *2023*: Outstanding Graduate, Shaanxi Province.
- *2023*: Outstanding Graduate, Xi'an Jiaotong University.
- *2022*: First Prize, Chinese Mathematics Competitions.
- *2021*: National Scholarship, Ministry of Education of China.

# 📖 Educations
- *2023.09 - now*: Ph.D. student in Pattern Recognition and Machine Learning, Tsinghua University.
- *2019.09 - 2023.06*: B.Eng. in Automation, Xi'an Jiaotong University.

# 🧑‍⚖️ Academic Services

### Journal Reviewer
- Expert Systems With Applications (ESWA).
- ACM Transactions on Multimedia Computing, Communications, and Applications (TOMM).

### Conference Reviewer
- **Top-tier ML/AI Conferences**: NeurIPS (2025–2026), ICML (2026), ICLR (2026), AAAI (2026–2027).
- **Top-tier CV Conferences**: CVPR (2026), ECCV (2026).
- **Top-tier NLP Conferences**: ACL ARR (2026).

# 💬 Invited Talks
- *2025.12*: I gave an invited talk on memory usage, hosted by the Metaverse Technical Committee of the Chinese Association for Artificial Intelligence.
- *2025.05*: I gave an invited talk on in-context reasoning at the 7th Beijing Universities Artificial Intelligence Academic Forum.
