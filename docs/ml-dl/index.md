# ML & DL

机器学习与深度学习并不只是一组算法名称。一个模型可以按学习信号归类，也可以按模型结构、概率建模方式、任务目标、数据模态或应用领域来理解。例如，VAE 同时属于深度生成模型、隐变量模型和表示学习方法；Transformer 既是神经网络结构，也可以服务于语言建模、分类、生成和多模态任务。

本模块的文件目录以 **Learning Signal** 为主线组织具体内容。这样可以避免同一算法在多个目录中重复出现。其他维度作为分类学视角保留在本页中，用于帮助读者理解模型之间的交叉关系。

## 分类学视角

### 按学习信号分类：Learning Signal

学习信号描述模型从何种信息中学习，是本模块的主目录标准。

- Supervised Learning：使用带标签样本学习输入到输出的映射。
- Unsupervised Learning：只使用输入数据，发现结构、分布、簇或低维表示。
- Self-supervised Learning：从数据自身构造训练信号。
- Semi-supervised Learning：同时使用少量标注数据和大量无标注数据。
- Reinforcement Learning：通过 agent 与 environment 的交互学习行动策略。
- Imitation Learning：从专家行为中学习策略。
- Active Learning：主动选择最有价值的数据进行标注。

### 按模型结构分类：Model Structure

模型结构描述模型用什么形式表达函数、分布或策略。

- Linear Models：用线性函数或广义线性函数建模。
- Kernel Models：通过核函数隐式表示高维特征空间。
- Tree Models：通过递归划分特征空间进行预测。
- Ensemble Models：组合多个基模型提升稳定性和泛化能力。
- Probabilistic Graphical Models：用图结构表示随机变量之间的依赖关系。
- Neural Networks：使用多层可微模块进行函数逼近和表示学习。
- Foundation Models：在大规模数据上训练，并可适配到多类下游任务。

### 按概率建模方式分类：Probabilistic View

概率建模方式描述模型如何表示分布、不确定性、隐变量和依赖关系。

- Discriminative Models：直接建模 $p(y|x)$ 或决策函数。
- Generative Models：建模 $p(x)$、$p(x,y)$ 或 $p(x,z)$。
- Latent Variable Models：假设观测数据背后存在不可直接观测的变量。
- Bayesian Models：用后验分布表达参数、函数或预测的不确定性。
- Energy-based Models：通过能量函数定义概率分布。
- Approximate Inference Methods：在精确推断不可行时进行近似计算。

### 按任务目标分类：Task Objective

任务目标描述模型最终要解决的问题。

- Prediction：从输入预测输出。
- Classification：输出离散类别。
- Regression：输出连续值。
- Clustering：发现数据中的群组结构。
- Dimensionality Reduction：将高维数据映射到低维空间。
- Representation Learning：自动学习有用特征。
- Density Estimation：学习数据分布 $p(x)$。
- Generation：从模型中采样或生成新数据。
- Structured Prediction：输出序列、树、图等结构化对象。
- Ranking：学习对象之间的相对顺序。
- Anomaly Detection：识别偏离正常分布的数据点。
- Decision Making：选择行动，而不是只预测标签。
- Planning：根据目标生成动作序列。
- Causal Inference：估计干预效应，而不是普通相关性。

### 按应用领域分类：Application Domain

应用领域不是主目录标准，而是使用场景索引。

- Natural Language Processing
- Computer Vision
- Speech and Audio
- Recommendation
- Robotics
- Time Series Forecasting
- Bioinformatics
- AI for Science
- Healthcare
- Finance
- Education
- Software Engineering

## 主目录：按学习信号组织

### 按学习信号分类：Learning Signal

学习信号描述模型从何种信息中学习。

- Supervised Learning
  - 使用带标签数据学习从输入到输出的映射。
  - 数据形式：$\mathcal{D}=\{(x_i,y_i)\}_{i=1}^{n}$
  - 学习目标：$f_\theta(x)\rightarrow y$ 或 $p_\theta(y|x)$
  - 回归模型
    - Linear Regression
    - Ridge Regression
    - Lasso Regression
    - Elastic Net
    - Support Vector Regression (SVR)
    - Random Forest Regression
    - Gradient Boosting Regression
    - Gaussian Process Regression
    - Neural Network Regression
  - 分类模型
    - Logistic Regression
    - Softmax Regression
    - Naive Bayes
    - k-Nearest Neighbors (kNN)
    - Support Vector Machine (SVM)
    - Decision Tree
    - Random Forest
    - AdaBoost
    - Multilayer Perceptron (MLP)
    - CNN Classifier
    - RNN Classifier
    - Transformer Classifier

- Unsupervised Learning
  - 只使用输入数据，目标是发现数据内部结构、分布、簇、低维表示或异常点。
  - 数据形式：$\mathcal{D}=\{x_i\}_{i=1}^{n}$
  - 聚类方法
    - K-Means
    - Gaussian Mixture Model (GMM；常用 EM 算法训练)
    - Spectral Clustering
  - 降维方法
    - Principal Component Analysis (PCA)
  - 密度估计
    - Kernel Density Estimation (KDE)
    - Gaussian Mixture Model (GMM)
  - 异常检测(待完善)

- Self-supervised Learning
  - 从数据自身构造监督信号，不依赖人工标注。
  - 自回归预测
    - n-gram Language Model
    - RNN Language Model
    - Transformer Language Model
    - GPT-style Next-token Prediction
  - 掩码预测
    - Masked Language Modeling (MLM)
    - BERT-style Pretraining
    - Masked Autoencoder (MAE)
    - Masked Image Modeling
  - 对比学习(待完善)
    - Word2Vec
    - SimCLRbi
    - MoCo
    - BYOL
    - Barlow Twins
    - SwAV
    - CLIP-style Image-Text Contrastive Learning
  - 去噪学习
    - Denoising Autoencoder
    - BART-style Denoising
    - Diffusion Denoising Objective
  - 预测式表示学习
    - Contrastive Predictive Coding (CPC)
    - Bootstrap Representation Learning

- Semi-supervised Learning
  - 同时使用少量标注数据和大量无标注数据。
  - 数据形式：$\mathcal{D}_L=\{(x_i,y_i)\},\quad \mathcal{D}_U=\{x_j\}$
  - 典型方法
    - Pseudo-labeling
    - Consistency Regularization
    - FixMatch

- Reinforcement Learning
  - 通过 agent 与 environment 的交互学习策略。
  - 策略形式：$\pi(a|s)$
  - 优化目标：$\max_\pi \mathbb{E}\left[\sum_{t=0}^{T}\gamma^t r_t\right]$
  - 关键对象
    - State
    - Action
    - Reward
    - Policy
    - Value Function
    - Environment Model
  - Bandit
    - Multi-Armed Bandit
    - ε-Greedy
    - Upper Confidence Bound (UCB)
    - Thompson Sampling
  - Dynamic Programming
    - Policy Evaluation
    - Policy Iteration
    - Value Iteration
  - Monte Carlo RL
    - Monte Carlo Prediction
    - Monte Carlo Control
  - Temporal Difference Learning
    - TD(0)
    - Q-Learning
    - SARSA
  - Deep Reinforcement Learning
    - Deep Q-Network (DQN)
    - Proximal Policy Optimization (PPO)
    - Soft Actor-Critic (SAC)
    - MuZero

- Imitation Learning(待完善)
  - 从专家行为中学习策略。
  - 典型方法
    - Behavior Cloning
    - DAgger
    - Inverse Reinforcement Learning (IRL)
    - Maximum Entropy IRL
    - Generative Adversarial Imitation Learning (GAIL)

- Active Learning(待完善)
  - 主动选择最有价值的数据进行标注。
  - 典型方法
    - Uncertainty Sampling
    - Query-by-Committee
    - Expected Model Change
    - Expected Error Reduction
    - Core-set Selection
    - Diversity-based Sampling
