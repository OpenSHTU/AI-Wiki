import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"信息论：分布差异和 loss 来源","description":"","frontmatter":{},"headers":[],"relativePath":"math/information-theory/index.md","filePath":"math/information-theory/index.md","lastUpdated":null}');
const _sfc_main = { name: "math/information-theory/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="信息论-分布差异和-loss-来源" tabindex="-1">信息论：分布差异和 loss 来源 <a class="header-anchor" href="#信息论-分布差异和-loss-来源" aria-label="Permalink to &quot;信息论：分布差异和 loss 来源&quot;">​</a></h1><p>信息论回答的是：</p><blockquote><p>如何度量预测分布、目标分布和数据表示之间的信息差异？</p></blockquote><p>它主要连接到 Model System 中的 <code>Prediction Distribution</code> 和 <code>Loss Function</code>。cross entropy、negative log likelihood、KL divergence、perplexity、distillation、VAE、RLHF / DPO 等训练目标都可以用信息论语言理解。</p><h2 id="推荐阅读顺序" tabindex="-1">推荐阅读顺序 <a class="header-anchor" href="#推荐阅读顺序" aria-label="Permalink to &quot;推荐阅读顺序&quot;">​</a></h2><ol><li><a href="./entropy">熵</a></li><li><a href="./cross-entropy-and-nll">交叉熵与负对数似然</a></li><li><a href="./kl-divergence">KL 散度</a></li><li><a href="./mutual-information">互信息</a></li><li><a href="./perplexity">Perplexity</a></li></ol><h2 id="本部分会连接到的模型机制" tabindex="-1">本部分会连接到的模型机制 <a class="header-anchor" href="#本部分会连接到的模型机制" aria-label="Permalink to &quot;本部分会连接到的模型机制&quot;">​</a></h2><ul><li>cross entropy loss</li><li>language model negative log likelihood</li><li>KL regularization 与 distribution matching</li><li>distillation、VAE、RLHF / DPO</li><li>perplexity evaluation</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("math/information-theory/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
