# 信息论：分布差异和 loss 来源

信息论回答的是：

> 如何度量预测分布、目标分布和数据表示之间的信息差异？

它主要连接到 Model System 中的 `Prediction Distribution` 和 `Loss Function`。cross entropy、negative log likelihood、KL divergence、perplexity、distillation、VAE、RLHF / DPO 等训练目标都可以用信息论语言理解。

## 推荐阅读顺序

1. [熵](./entropy.md)
2. [交叉熵与负对数似然](./cross-entropy-and-nll.md)
3. [KL 散度](./kl-divergence.md)
4. [互信息](./mutual-information.md)
5. [Perplexity](./perplexity.md)

## 本部分会连接到的模型机制

- cross entropy loss
- language model negative log likelihood
- KL regularization 与 distribution matching
- distillation、VAE、RLHF / DPO
- perplexity evaluation

