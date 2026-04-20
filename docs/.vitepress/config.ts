import { defineConfig } from 'vitepress'

const zhNav = [
  { text: '首页', link: '/' },
  { text: '数学基础', link: '/math' },
  { text: '人工智能', link: '/ai/' }

]

const enNav = [
  { text: 'Home', link: '/en/' }
]

const zhSidebar = {
  '/ai/': [
    {
      text: '人工智能',
      items: [
        { text: '总览', link: '/ai/' }
      ]
    }
  ],
  '/math/': [
    {
      text: '数学基础',
      items: [
        { text: '总览', link: '/math/' },
        {
          text: '线性代数：表示和变换',
          collapsed: false,
          items: [
            { text: '导览', link: '/math/linear-algebra/' },
            { text: '向量、矩阵与张量', link: '/math/linear-algebra/vectors-matrices-tensors' },
            { text: '向量空间', link: '/math/linear-algebra/vector-spaces' },
            { text: '线性变换', link: '/math/linear-algebra/linear-transformations' },
            { text: '内积、范数与相似度', link: '/math/linear-algebra/inner-product-norm-similarity' },
            { text: '特征分解、SVD 与低秩结构', link: '/math/linear-algebra/eigen-svd-low-rank' }
          ]
        },
        {
          text: '微积分：变化、梯度和反向传播',
          collapsed: false,
          items: [
            { text: '导览', link: '/math/calculus/' },
            { text: '导数与梯度', link: '/math/calculus/derivatives-and-gradients' },
            { text: '偏导数', link: '/math/calculus/partial-derivatives' },
            { text: '链式法则与反向传播', link: '/math/calculus/chain-rule-backpropagation' },
            { text: 'Jacobian 与 Hessian', link: '/math/calculus/jacobian-and-hessian' },
            { text: '矩阵微积分', link: '/math/calculus/matrix-calculus' }
          ]
        },
        {
          text: '概率论与数理统计：不确定性、估计和评估',
          collapsed: false,
          items: [
            { text: '导览', link: '/math/probability-statistics/' },
            { text: '概率分布', link: '/math/probability-statistics/probability-distributions' },
            { text: '条件概率与 Bayes', link: '/math/probability-statistics/conditional-probability-bayes' },
            { text: '随机变量、期望与方差', link: '/math/probability-statistics/random-variables-expectation-variance' },
            { text: 'MLE 与 MAP', link: '/math/probability-statistics/mle-map' },
            { text: '泛化与评估', link: '/math/probability-statistics/generalization-and-evaluation' }
          ]
        },
        {
          text: '信息论：分布差异和 loss 来源',
          collapsed: false,
          items: [
            { text: '导览', link: '/math/information-theory/' },
            { text: '熵', link: '/math/information-theory/entropy' },
            { text: '交叉熵与负对数似然', link: '/math/information-theory/cross-entropy-and-nll' },
            { text: 'KL 散度', link: '/math/information-theory/kl-divergence' },
            { text: '互信息', link: '/math/information-theory/mutual-information' },
            { text: 'Perplexity', link: '/math/information-theory/perplexity' }
          ]
        }
      ]
    }
  ]
}

const enSidebar = {}

export default defineConfig({
  title: 'AI Wiki',
  description: 'A structured AI knowledge base for NLP, LLMs, multimodal AI, world models, and embodied AI.',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    math: true,
    config(md) {
      const defaultFence = md.renderer.rules.fence

      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const language = token.info.trim().split(/\s+/)[0]

        if (language === 'mermaid') {
          return `<MermaidDiagram graph="${encodeURIComponent(token.content)}" />`
        }

        return defaultFence
          ? defaultFence(tokens, idx, options, env, self)
          : self.renderToken(tokens, idx, options)
      }
    }
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'AI Wiki',
      description: '面向 NLP、LLM、多模态、世界模型与具身智能的 AI 知识库。',
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar,
        langMenuLabel: '语言',
        returnToTopLabel: '回到顶部',
        outline: {
          label: '本页目录'
        },
        docFooter: {
          prev: '上一篇',
          next: '下一篇'
        },
        footer: {
          message: '以知识图谱方式组织 AI 学习路径。',
          copyright: 'Copyright © 2026'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'AI Wiki',
      description: 'A structured AI knowledge base for NLP, LLMs, multimodal AI, world models, and embodied AI.',
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar,
        langMenuLabel: 'Language',
        returnToTopLabel: 'Return to top',
        outline: {
          label: 'On this page'
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        },
        footer: {
          message: 'AI learning paths organized as a knowledge graph.',
          copyright: 'Copyright © 2026'
        }
      }
    }
  }
})
