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

I’m currently a 3nd-year Ph.D. candidate in the Department of Automation at Tsinghua University. Prior to this, I earned my B.Eng. degree from the School of Automation Science and Engineering, Xi'an Jiaotong University in 2023. I worked closely with [Shuai Zhang](https://scholar.google.com/citations?user=PfILtS8AAAAJ&hl=zh-CN) and [Zhengqi Wen](https://scholar.google.com/citations?user=7SBjscMAAAAJ&hl=zh-CN). I am fortunate to collaborate with [Zheng Lian](https://zeroqiaoba.github.io/Homepage/), [Haoran Luo](https://haoranluo.net/), [Zhengxi Lu](https://lll6gg.github.io/), and [Fan Zhang](https://zfkarl.github.io/).

My research interests focus on **LLM / MLLM reasoning, planning, and agentic reinforcement learning**. From 2024 to early 2025, my work mainly focus on high-quality and efficient reasoning for LLMs. My current research investigates post-training techniques for general agents, including agent skills, on-policy distillation (OPD), and reinforcement learning (RL).

🐈 Collaboration: I am looking for motivated collaborators interested in the above topics. If you would like to explore these directions together, feel free to contact me. UG/MSc students are also welcomed! 🌱

# 🔥 News
- *2026.06*: &nbsp;🔥🔥 We launched [OPID](https://arxiv.org/abs/2606.26790), [TACO](https://arxiv.org/abs/2606.30251), and [Orchestra-o1](https://arxiv.org/abs/2606.13707). OPID was featured as 🤗 HF Daily Paper #3!
- *2026.05*: &nbsp;🔥🔥 Introducing [Maestro](https://arxiv.org/abs/2605.22177), [RobotEQ](https://arxiv.org/abs/2605.06234), [SDAR](https://arxiv.org/abs/2605.15155), [AffectGPT-RL](https://arxiv.org/abs/2605.06126). SDAR was featured as 🤗 HF Daily Paper #2!
- *2026.05*: &nbsp;⛱️👏 Attending VALSE 2026 at Wuhan 🇨🇳
- *2026.04*: &nbsp;🔥🔥 Our new work [SKILL0](https://arxiv.org/abs/2604.02268) was released, featured as 🤗 HF Daily Paper #2!
- *2026.04*: &nbsp;🎉🎉 Six papers were accepted by ACL 2026, including one oral and best paper candidate (Double). See you in San Diego 🇺🇸!
- *2026.01*: &nbsp;🏖️🥂 Attending AAAI 2026 at Singapore 🇸🇬
- *2025.11*: &nbsp;🎉🎉 Two papers were accepted by AAAI 2026 (one oral presentation).
- *2025.11*: &nbsp;🎉🎉 Attending EMNLP 2025 in Suzhou 🇨🇳
- *2025.05*: &nbsp;🎉🎉 NoiserBench appeared at ACL 2025.

# 📝 Publications 

<small>* Equal contribution. † Corresponding author.</small>

## 🤖 Agentic Post Training

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2026</div><img src='pub_images/spark.png' alt="SPARK" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SPARK: Strategic Policy-Aware Exploration via Dynamic Branching for Long-Horizon Agentic Learning](https://arxiv.org/abs/2601.20209)

**<u>Jinyang Wu</u>**, Shuo Yang, Changpeng Yang, Yuhao Shen, Shuai Zhang, Zhengqi Wen, Jianhua Tao†

[[Paper]](https://arxiv.org/abs/2601.20209) | [[Code]](https://github.com/jinyangwu/SPARK) <strong><span class='show_paper_citations' data='t8H8Ru0AAAAJ:0EnyYjriUFMC'></span></strong>
- We propose a policy-aware branching framework that allocates exploration budget to critical decision states, improving sample efficiency for long-horizon agentic RL.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2026</div><img src='pub_images/atlas.png' alt="Atlas" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Atlas: Orchestrating Heterogeneous Models and Tools for Multi-Domain Complex Reasoning](https://arxiv.org/abs/2601.03872)

**<u>Jinyang Wu</u>**, Guocheng Zhai, Ruihan Jin, Jiahao Yuan, Yuhao Shen, Shuai Zhang, Zhengqi Wen, Jianhua Tao†

[[Paper]](https://arxiv.org/abs/2601.03872) <strong><span class='show_paper_citations' data='t8H8Ru0AAAAJ:ufrVoPGSRksC'></span></strong>
- We introduce a dual-path framework for dynamic tool usage, combining cluster-based routing with RL-based multi-step routing for cross-domain reasoning.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='pub_images/maestro.png' alt="Maestro" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Maestro: Reinforcement Learning to Orchestrate Hierarchical Model-Skill Ensembles](https://arxiv.org/abs/2605.22177)

**<u>Jinyang Wu</u>**, Guocheng Zhai, Ruihan Jin, Yuhao Shen, Zhengxi Lu, Fan Zhang, Haoran Luo, Zheng Lian, Zhengqi Wen, Jianhua Tao

[[Paper]](https://arxiv.org/abs/2605.22177) | [[Code]](https://github.com/jinyangwu/Maestro) <strong><span class='show_paper_citations' data='t8H8Ru0AAAAJ:KlAtU1dfN6UC'></span></strong>
- We formulate model-skill orchestration as a sequential decision process and train a lightweight policy to compose frozen expert models and skills for multimodal tasks.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='pub_images/opid.png' alt="OPID" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[OPID: On-Policy Skill Distillation for Agentic Reinforcement Learning](https://arxiv.org/abs/2606.26790)

Shuo Yang*, **<u>Jinyang Wu*,†</u>**, Zhengxi Lu, Yuhao Shen, Fan Zhang, Lang Feng, Shuai Zhang, Haoran Luo, Zheng Lian, Zhengqi Wen, Jianhua Tao

[[Paper]](https://arxiv.org/abs/2606.26790) | [[Code]](https://github.com/jinyangwu/OPID) <strong><span class='show_paper_citations' data='t8H8Ru0AAAAJ:4DMP91E08xMC'></span></strong>
- We extract hierarchical skill supervision from completed on-policy trajectories and convert hindsight skill signals into dense token-level advantages for agent training.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='pub_images/skill0.png' alt="SKILL0" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SKILL0: In-Context Agentic Reinforcement Learning for Skill Internalization](https://arxiv.org/abs/2604.02268)

Zhengxi Lu, Zhiyuan Yao, **<u>Jinyang Wu</u>**, Chengcheng Han, Qi Gu, Xunliang Cai, Weiming Lu, Jun Xiao, Yueting Zhuang, Yongliang Shen

[[Paper]](https://arxiv.org/abs/2604.02268) | [[Code]](https://github.com/ZJU-REAL/SkillZero) <strong><span class='show_paper_citations' data='t8H8Ru0AAAAJ:kNdYIx-mwKoC'></span></strong>
- We study skill internalization for agents, gradually withdrawing runtime skill context so the policy can acquire reusable behaviors into its parameters.
</div>
</div>

- <span style="color:white;background-color:#00369f;padding:0 0.6em;font-size:0.8em;">Preprint</span> [TACO: Tool-Augmented Credit Optimization for Agentic Tool Use](https://arxiv.org/abs/2606.30251), Mingkuan Feng*, **<u>Jinyang Wu*,†</u>**, Hao Gu, Fangrui Lv, Ruihan Jin, Chuyuan Zhang, Zhengqi Wen, Jianhua Tao
- <span style="color:white;background-color:#00369f;padding:0 0.6em;font-size:0.8em;">Preprint</span> [SDAR: Self-Distilled Agentic Reinforcement Learning](https://arxiv.org/abs/2605.15155), Zhengxi Lu, Zhiyuan Yao, Zhuowen Han, Zi-Han Wang, **<u>Jinyang Wu</u>**, Qi Gu, Xunliang Cai, Weiming Lu, Jun Xiao, Yueting Zhuang, Yongliang Shen [[Code]](https://github.com/ZJU-REAL/SDAR)
- <span style="color:white;background-color:#00369f;padding:0 0.6em;font-size:0.8em;">Preprint</span> [OdysseyArena: Benchmarking Large Language Models For Long-Horizon, Active and Inductive Interactions](https://arxiv.org/abs/2602.05843), Fangzhi Xu, Hang Yan, Qiushi Sun, **<u>Jinyang Wu</u>**, Zixian Huang, Muye Huang, Jingyang Gong, Zichen Ding, Kanzhi Cheng, Yian Wang, Xinyu Che, Zeyi Sun, Jian Zhang, Zhangyue Yin, Haoran Luo, Xuanjing Huang, Ben Kao, Jun Liu, Qika Lin [[Code]](https://github.com/xufangzhi/Odyssey-Arena)
- <span style="color:white;background-color:#00369f;padding:0 0.6em;font-size:0.8em;">Preprint</span> [Orchestra-o1: Omnimodal Agent Orchestration](https://arxiv.org/abs/2606.13707), Fan Zhang, Vireo Zhang, Shengju Qian, Haoxuan Li, Hao Wu, **<u>Jinyang Wu</u>**, Donghao Zhou, Zhihong Zhu, Zheng Lian, Xin Wang, Pheng-Ann Heng
- <span style="color:white;background-color:#00369f;padding:0 0.6em;font-size:0.8em;">Preprint</span> [RobotEQ: Transitioning from Passive Intelligence to Active Intelligence in Embodied AI](https://arxiv.org/abs/2605.06234), Kuofei Fang, Xinyi Che, Haomin Ouyang, Shufan Zhang, Xuehao Wang, Qi Liu, Liyi Liu, Chenqi Zhang, Wenxi Cai, Wenyu Dai, **<u>Jinyang Wu</u>**, Fan Zhang, Haoyu Chen, Bin He, Zheng Lian

## 🧠 LLM Reasoning

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2026</div><img src='pub_images/thoughticr.png' alt="ThoughtICR" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Beyond Examples: Towards Automated Thought-level In-Context Reasoning for Large Language Models](https://arxiv.org/abs/2411.18478)

**<u>Jinyang Wu</u>**, Mingkuan Feng, Shuai Zhang, Feihu Che, Zhengqi Wen, Chonghua Liao, Ling Yang, Haoran Luo, Zheng Lian, Jianhua Tao

[[Paper]](https://arxiv.org/abs/2411.18478) | [[Code]](https://github.com/jinyangwu/ThoughtICR) <strong><span class='show_paper_citations' data='t8H8Ru0AAAAJ:aqlVkmm33-oC'></span></strong>
- We shift in-context reasoning from example-level imitation to reusable thought patterns, enabling automated and efficient reasoning guidance.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2026</div><img src='pub_images/templaterl.png' alt="TemplateRL" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[TemplateRL: Structured Template-Guided Reinforcement Learning for LLM Reasoning](https://arxiv.org/abs/2505.15692)

**<u>Jinyang Wu</u>**, Chonghua Liao, Mingkuan Feng, Shuai Zhang, Zhengqi Wen, Haoran Luo, Ling Yang, Huazhe Xu, Jianhua Tao

[[Paper]](https://arxiv.org/abs/2505.15692) <strong><span class='show_paper_citations' data='t8H8Ru0AAAAJ:d1gkVwhDpl0C'></span></strong>
- We augment policy optimization with structured templates, improving high-quality rollout generation and stabilizing RL training for reasoning.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2026 Oral</div><img src='pub_images/astar.png' alt="AStar" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[AStar: Boosting Multimodal Reasoning with Automated Structured Thinking](https://arxiv.org/abs/2502.02339)

**<u>Jinyang Wu</u>**, Mingkuan Feng, Guocheng Zhai, Shuai Zhang†, Zheng Lian, Fangrui Lv, Pengpeng Shao, Ruihan Jin, Zhengqi Wen, Jianhua Tao†

[[Paper]](https://arxiv.org/abs/2502.02339) <strong><span class='show_paper_citations' data='t8H8Ru0AAAAJ:qjMakFHDy7sC'></span></strong>
- We build a training-free structured thinking method for multimodal reasoning, retrieving reusable thought cards at test time to guide MLLMs.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2026</div><img src='pub_images/trsp.png' alt="TRSP" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Two-Stage Regularization-Based Structured Pruning for LLMs](https://arxiv.org/abs/2505.18232)

Mingkuan Feng*, **<u>Jinyang Wu*</u>**, Siyuan Liu, Shuai Zhang, Ruihan Jin, Feihu Che, Pengpeng Shao, Zhengqi Wen, Jianhua Tao

[[Paper]](https://arxiv.org/abs/2505.18232) <strong><span class='show_paper_citations' data='t8H8Ru0AAAAJ:8k81kl-MbHgC'></span></strong>
- We introduce a two-stage regularization strategy for structured LLM pruning, preserving more knowledge while reducing model depth without retraining.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2026 Oral & Best Paper Candidate</div><img src='pub_images/double.png' alt="Double" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Double: Breaking the Acceleration Limit via Double Retrieval Speculative Parallelism](https://arxiv.org/abs/2601.05524)

Yuhao Shen, Tianyu Liu, Junyi Shen, **<u>Jinyang Wu</u>**, Quan Kong, Li Huan, Cong Wang

[[Paper]](https://arxiv.org/abs/2601.05524) <strong><span class='show_paper_citations' data='t8H8Ru0AAAAJ:roLk4NBRz8UC'></span></strong>
- We bridge speculative decoding and retrieval-based guidance to push inference acceleration beyond conventional parallel speculative decoding limits.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2025</div><img src='pub_images/noiserbench.png' alt="NoiserBench" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Pandora's Box or Aladdin's Lamp: A Comprehensive Analysis Revealing the Role of RAG Noise in Large Language Models](https://arxiv.org/abs/2408.13533)

**<u>Jinyang Wu</u>**, Shuai Zhang, Feihu Che, Mingkuan Feng, Pengpeng Shao, Jianhua Tao

[[Paper]](https://arxiv.org/abs/2408.13533) | [[Code]](https://github.com/jinyangwu/NoiserBench) <strong><span class='show_paper_citations' data='t8H8Ru0AAAAJ:2osOgNQ5qMEC'></span></strong>
- We define a linguistic taxonomy of RAG noise and build NoiserBench to study when retrieval noise harms or surprisingly helps LLM reasoning.
</div>
</div>

- <span style="color:white;background-color:#00369f;padding:0 0.6em;font-size:0.8em;">ICLR 2026</span> [Exploring Knowledge Purification in Multi-Teacher Knowledge Distillation for LLMs](https://arxiv.org/abs/2602.01064), Ruihan Jin, Pengpeng Shao, Zhengqi Wen, **<u>Jinyang Wu†</u>**, Mingkuan Feng, Shuo Yang, Chu Yuan Zhang, Jianhua Tao
- <span style="color:white;background-color:#00369f;padding:0 0.6em;font-size:0.8em;">ICLR 2026</span> [Attend to the Active: Structure-Aware Dynamic Attention in LLMs for Compositional Instruction Following](https://iclr.cc/virtual/2026/poster/10006691), Fangrui Lv, Yulei Qin, Ruixin Hong, Liang Jian, **<u>Jinyang Wu</u>**, Ke Li, Xing Sun, Changshui Zhang
- <span style="color:white;background-color:#00369f;padding:0 0.6em;font-size:0.8em;">AAAI 2026</span> [From Imitation to Discrimination: Toward A Generalized Curriculum Advantage Mechanism Enhancing Cross-Domain Reasoning Tasks](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=t8H8Ru0AAAAJ&pagesize=100&citation_for_view=t8H8Ru0AAAAJ:Zph67rFs4hoC), Changpeng Yang*, **<u>Jinyang Wu*</u>**, Yuchen Liu, Shuai Zhang, Yang Li, Qiliang Liang, Hongzhen Wang, Shuai Nie, Jiaming Xu, Runyu Shi, Ying Huang, Guoquan Zhang
- <span style="color:white;background-color:#00369f;padding:0 0.6em;font-size:0.8em;">EMNLP 2025 Findings</span> [RadialRouter: Structured Representation for Efficient and Robust Large Language Models Routing](https://arxiv.org/abs/2506.03880), Ruihan Jin, Pengpeng Shao, Zhengqi Wen, **<u>Jinyang Wu</u>**, Mingkuan Feng, Shuai Zhang, Jianhua Tao
- <span style="color:white;background-color:#00369f;padding:0 0.6em;font-size:0.8em;">Preprint</span> [DReSS: Data-driven Regularized Structured Streamlining for Large Language Models](https://arxiv.org/abs/2501.17905), Mingkuan Feng, **<u>Jinyang Wu</u>**, Shuai Zhang, Pengpeng Shao, Ruihan Jin, Zhengqi Wen, Jianhua Tao, Feihu Che
- <span style="color:white;background-color:#00369f;padding:0 0.6em;font-size:0.8em;">Preprint</span> [AffectGPT-RL: Revealing Roles of Reinforcement Learning in Open-Vocabulary Emotion Recognition](https://arxiv.org/abs/2605.06126), Zheng Lian, Fan Zhang, Lan Chen, Yazhou Zhang, Rui Liu, **<u>Jinyang Wu</u>**, Haoyu Chen, Xiaobai Li, Xiaojiang Peng, Bin He, Jianhua Tao

## 🧬 Biomedical AI
- <span style="color:white;background-color:#00369f;padding:0 0.6em;font-size:0.8em;">Briefings in Bioinformatics 2023</span> [KGETCDA: An Efficient Representation Learning Framework Based on Knowledge Graph Encoder from Transformer for Predicting circRNA-Disease Associations](https://academic.oup.com/bib/article/24/5/bbad292/7242591?__cf_chl_f_tk=bHtbjkBuag5EGQzPvQ5Wv_3uDGaoVZx96QhBiYaevHY-1782837345-1.0.1.1-5uwCl9MlVGSzJTYCeael6d08JUcFHCzAXeAGkBvTzBA), **<u>Jinyang Wu</u>**, Zhiwei Ning, Yidong Ding, Ying Wang, Qinke Peng, Laiyi Fu
- <span style="color:white;background-color:#00369f;padding:0 0.6em;font-size:0.8em;">IEEE JBHI 2023</span> [BertNDA: A Model Based on Graph-BERT and Multi-Scale Information Fusion for ncRNA-Disease Association Prediction](https://ieeexplore.ieee.org/document/10239308/), Zhiwei Ning, **<u>Jinyang Wu</u>**, Yidong Ding, Ying Wang, Qinke Peng, Laiyi Fu

# 👨‍🏫 Teaching
- Teaching Assistant, Affective Computing, graduate course.
- Teaching Assistant, Intelligent Speech Processing, undergraduate interdisciplinary innovation training course.

# 🎖 Honors and Awards
- *2026*: Outstanding Teaching Assistant, Tsinghua University.
- *2026*: Merit Student, Tsinghua University.
- *2025*: First-Class Scholarship of Tsinghua University.
- *2024*: Second-Class Scholarship of Tsinghua University.
- *2023*: Outstanding Graduate, Shaanxi Province.
- *2023*: Outstanding Graduate, Xi'an Jiaotong University.
- *2022*: First Prize, Chinese Mathematics Competitions.
- *2021*: National Scholarship, Ministry of Education of China.

# 📖 Educations
- *2023.09 - now*: Ph.D. student in Pattern Recognition and Machine Learning, Tsinghua University.
- *2019.09 - 2023.06*: B.Eng. in Automation, Xi'an Jiaotong University.

# 🧑‍⚖️ Academic Service
- **Conference Reviewer**: ICLR 2026, ICML 2026, NeurIPS 2026, ARR 2026, AAAI 2026, ECCV 2026, AAAI 2027.
- **Journal Reviewer**: Expert Systems With Applications (ESWA), ACM Transactions on Multimedia Computing, Communications, and Applications (TOMM).

# 💬 Invited Talks
- *2025.05*: I gave an invited talk on in-context reasoning at the 7th Beijing Universities Artificial Intelligence Academic Forum.
- *2025.12*: I gave an invited talk on memory usage, hosted by the Metaverse Technical Committee of the Chinese Association for Artificial Intelligence.
