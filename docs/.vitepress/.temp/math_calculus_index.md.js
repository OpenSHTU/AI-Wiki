import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"微积分：变化、梯度和反向传播","description":"","frontmatter":{},"headers":[],"relativePath":"math/calculus/index.md","filePath":"math/calculus/index.md","lastUpdated":null}');
const _sfc_main = { name: "math/calculus/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="微积分-变化、梯度和反向传播" tabindex="-1">微积分：变化、梯度和反向传播 <a class="header-anchor" href="#微积分-变化、梯度和反向传播" aria-label="Permalink to &quot;微积分：变化、梯度和反向传播&quot;">​</a></h1><p>微积分回答的是：</p><blockquote><p>模型输出、loss 和参数更新如何随变量变化？</p></blockquote><p>它主要连接到 Model System 中的 <code>Parameterized Function</code>、<code>Loss</code>、<code>Gradient</code> 和 <code>Optimization</code>。当模型被写成复合函数，训练过程就需要用导数、梯度、链式法则和矩阵微积分来描述。</p><h2 id="推荐阅读顺序" tabindex="-1">推荐阅读顺序 <a class="header-anchor" href="#推荐阅读顺序" aria-label="Permalink to &quot;推荐阅读顺序&quot;">​</a></h2><ol><li><a href="./derivatives-and-gradients">导数与梯度</a></li><li><a href="./partial-derivatives">偏导数</a></li><li><a href="./chain-rule-backpropagation">链式法则与反向传播</a></li><li><a href="./jacobian-and-hessian">Jacobian 与 Hessian</a></li><li><a href="./matrix-calculus">矩阵微积分</a></li></ol><h2 id="本部分会连接到的模型机制" tabindex="-1">本部分会连接到的模型机制 <a class="header-anchor" href="#本部分会连接到的模型机制" aria-label="Permalink to &quot;本部分会连接到的模型机制&quot;">​</a></h2><ul><li>loss 对参数的变化</li><li>gradient descent 和 optimizer</li><li>backpropagation</li><li>Jacobian、Hessian 与 loss landscape</li><li>Transformer 和 neural network 的训练推导</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("math/calculus/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
