import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"概率论与数理统计：不确定性、估计和评估","description":"","frontmatter":{},"headers":[],"relativePath":"math/probability-statistics/index.md","filePath":"math/probability-statistics/index.md","lastUpdated":null}');
const _sfc_main = { name: "math/probability-statistics/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="概率论与数理统计-不确定性、估计和评估" tabindex="-1">概率论与数理统计：不确定性、估计和评估 <a class="header-anchor" href="#概率论与数理统计-不确定性、估计和评估" aria-label="Permalink to &quot;概率论与数理统计：不确定性、估计和评估&quot;">​</a></h1><p>概率论与数理统计回答的是：</p><blockquote><p>模型如何表达不确定性，又如何从有限样本中估计规律并判断结果是否可靠？</p></blockquote><p>它主要连接到 Model System 中的 <code>Dataset</code>、<code>Prediction Distribution</code>、<code>Loss Function</code> 和 <code>Evaluation</code>。分类概率、next-token distribution、生成模型、MLE、MAP、泛化误差和实验评估都依赖这部分语言。</p><h2 id="推荐阅读顺序" tabindex="-1">推荐阅读顺序 <a class="header-anchor" href="#推荐阅读顺序" aria-label="Permalink to &quot;推荐阅读顺序&quot;">​</a></h2><ol><li><a href="./probability-distributions">概率分布</a></li><li><a href="./conditional-probability-bayes">条件概率与 Bayes</a></li><li><a href="./random-variables-expectation-variance">随机变量、期望与方差</a></li><li><a href="./mle-map">MLE 与 MAP</a></li><li><a href="./generalization-and-evaluation">泛化与评估</a></li></ol><h2 id="本部分会连接到的模型机制" tabindex="-1">本部分会连接到的模型机制 <a class="header-anchor" href="#本部分会连接到的模型机制" aria-label="Permalink to &quot;本部分会连接到的模型机制&quot;">​</a></h2><ul><li>classification distribution</li><li>language modeling</li><li>generative modeling</li><li>maximum likelihood training</li><li>train / validation / test 与实验可信度</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("math/probability-statistics/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
