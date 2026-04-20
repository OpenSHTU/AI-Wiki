# 线性代数：表示和变换

线性代数回答的是：

> 模型中的数据、参数和 hidden state 如何被表示、组合和变换？

它主要连接到 Model System 中的 `Data / Representation`、`Parameterized Function` 和 `Large-scale Computation`。在 AI 模型中，token embedding、image patch、权重矩阵、attention projection、LoRA 低秩更新都离不开向量、矩阵和张量语言。

## 推荐阅读顺序

1. [向量、矩阵与张量](./vectors-matrices-tensors.md)
2. [向量空间](./vector-spaces.md)
3. [线性变换](./linear-transformations.md)
4. [内积、范数与相似度](./inner-product-norm-similarity.md)
5. [特征分解、SVD 与低秩结构](./eigen-svd-low-rank.md)

## 本部分会连接到的模型机制

- embedding 与 hidden state 表示
- linear layer 与矩阵乘法
- attention 中的 QKV projection
- PCA、SVD、LoRA 与模型压缩
- 向量相似度、检索与表示空间分析

