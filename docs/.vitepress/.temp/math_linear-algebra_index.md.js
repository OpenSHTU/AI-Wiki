import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"线性代数：表示和变换","description":"","frontmatter":{},"headers":[],"relativePath":"math/linear-algebra/index.md","filePath":"math/linear-algebra/index.md","lastUpdated":null}');
const _sfc_main = { name: "math/linear-algebra/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="线性代数-表示和变换" tabindex="-1">线性代数：表示和变换 <a class="header-anchor" href="#线性代数-表示和变换" aria-label="Permalink to &quot;线性代数：表示和变换&quot;">​</a></h1><p>线性代数回答的是：</p><blockquote><p>模型中的数据、参数和 hidden state 如何被表示、组合和变换？</p></blockquote><p>它主要连接到 Model System 中的 <code>Data / Representation</code>、<code>Parameterized Function</code> 和 <code>Large-scale Computation</code>。在 AI 模型中，token embedding、image patch、权重矩阵、attention projection、LoRA 低秩更新都离不开向量、矩阵和张量语言。</p><h2 id="推荐阅读顺序" tabindex="-1">推荐阅读顺序 <a class="header-anchor" href="#推荐阅读顺序" aria-label="Permalink to &quot;推荐阅读顺序&quot;">​</a></h2><ol><li><a href="./vectors-matrices-tensors">向量、矩阵与张量</a></li><li><a href="./vector-spaces">向量空间</a></li><li><a href="./linear-transformations">线性变换</a></li><li><a href="./inner-product-norm-similarity">内积、范数与相似度</a></li><li><a href="./eigen-svd-low-rank">特征分解、SVD 与低秩结构</a></li></ol><h2 id="本部分会连接到的模型机制" tabindex="-1">本部分会连接到的模型机制 <a class="header-anchor" href="#本部分会连接到的模型机制" aria-label="Permalink to &quot;本部分会连接到的模型机制&quot;">​</a></h2><ul><li>embedding 与 hidden state 表示</li><li>linear layer 与矩阵乘法</li><li>attention 中的 QKV projection</li><li>PCA、SVD、LoRA 与模型压缩</li><li>向量相似度、检索与表示空间分析</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("math/linear-algebra/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
