# 微积分：变化、梯度和反向传播

微积分回答的是：

> 模型输出、loss 和参数更新如何随变量变化？

它主要连接到 Model System 中的 `Parameterized Function`、`Loss`、`Gradient` 和 `Optimization`。当模型被写成复合函数，训练过程就需要用导数、梯度、链式法则和矩阵微积分来描述。

## 推荐阅读顺序

1. [导数与梯度](./derivatives-and-gradients.md)
2. [偏导数](./partial-derivatives.md)
3. [链式法则与反向传播](./chain-rule-backpropagation.md)
4. [Jacobian 与 Hessian](./jacobian-and-hessian.md)
5. [矩阵微积分](./matrix-calculus.md)

## 本部分会连接到的模型机制

- loss 对参数的变化
- gradient descent 和 optimizer
- backpropagation
- Jacobian、Hessian 与 loss landscape
- Transformer 和 neural network 的训练推导

