import{_ as s,o as a,c as n,d as l}from"./app.63ecdbe5.js";const i=JSON.parse('{"title":"vue-router \u7684\u5E38\u89C1\u7528\u6CD5","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"\u8DEF\u7531\u91CD\u5B9A\u5411","slug":"\u8DEF\u7531\u91CD\u5B9A\u5411"},{"level":2,"title":"\u5D4C\u5957\u8DEF\u7531","slug":"\u5D4C\u5957\u8DEF\u7531"},{"level":2,"title":"\u7F16\u7A0B\u5F0F\u8DEF\u7531","slug":"\u7F16\u7A0B\u5F0F\u8DEF\u7531"},{"level":2,"title":"\u8DEF\u7531\u4F20\u53C2","slug":"\u8DEF\u7531\u4F20\u53C2"},{"level":3,"title":"1. params \u4F20\u53C2","slug":"_1-params-\u4F20\u53C2"},{"level":3,"title":"2. query \u4F20\u53C2","slug":"_2-query-\u4F20\u53C2"},{"level":2,"title":"\u5168\u5C40\u524D\u7F6E\u5B88\u536B","slug":"\u5168\u5C40\u524D\u7F6E\u5B88\u536B"},{"level":2,"title":"\u5168\u5C40\u540E\u7F6E\u5B88\u536B","slug":"\u5168\u5C40\u540E\u7F6E\u5B88\u536B"}],"relativePath":"vue/3vueRouter/3vue-router\u7684\u5E38\u89C1\u7528\u6CD5.md"}'),o={name:"vue/3vueRouter/3vue-router\u7684\u5E38\u89C1\u7528\u6CD5.md"},p=l(`<h1 id="vue-router-\u7684\u5E38\u89C1\u7528\u6CD5" tabindex="-1">vue-router \u7684\u5E38\u89C1\u7528\u6CD5 <a class="header-anchor" href="#vue-router-\u7684\u5E38\u89C1\u7528\u6CD5" aria-hidden="true">#</a></h1><h2 id="\u8DEF\u7531\u91CD\u5B9A\u5411" tabindex="-1">\u8DEF\u7531\u91CD\u5B9A\u5411 <a class="header-anchor" href="#\u8DEF\u7531\u91CD\u5B9A\u5411" aria-hidden="true">#</a></h2><p>\u8DEF\u7531\u91CD\u5B9A\u5411\u6307\u7684\u662F\uFF1A\u7528\u6237\u5728\u8BBF\u95EE\u5730\u5740 A \u7684\u65F6\u5019\uFF0C\u5F3A\u5236\u7528\u6237\u8DF3\u8F6C\u5230\u5730\u5740 C \uFF0C\u4ECE\u800C\u5C55\u793A\u7279\u5B9A\u7684\u7EC4\u4EF6\u9875\u9762\u3002</p><p>\u901A\u8FC7\u8DEF\u7531\u89C4\u5219\u7684 redirect \u5C5E\u6027\uFF0C\u6307\u5B9A\u4E00\u4E2A\u65B0\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5730\u8BBE\u7F6E\u8DEF\u7531\u7684\u91CD\u5B9A\u5411\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> VueRouter </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-router</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">VueRouter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">routes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u91CD\u5B9A\u5411\u5230Home\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">redirect</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/home</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/home</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./Home.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5D4C\u5957\u8DEF\u7531" tabindex="-1">\u5D4C\u5957\u8DEF\u7531 <a class="header-anchor" href="#\u5D4C\u5957\u8DEF\u7531" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> VueRouter </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-router</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">VueRouter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">routes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u91CD\u5B9A\u5411\u5230Home\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">redirect</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/home</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/home</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./Home.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/page</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Layout</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//\u5D4C\u5957\u8DEF\u7531</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/page/page1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./page1.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7F16\u7A0B\u5F0F\u8DEF\u7531" tabindex="-1">\u7F16\u7A0B\u5F0F\u8DEF\u7531 <a class="header-anchor" href="#\u7F16\u7A0B\u5F0F\u8DEF\u7531" aria-hidden="true">#</a></h2><p>vue-router \u63D0\u4F9B\u4E86\u8BB8\u591A\u7F16\u7A0B\u5F0F\u5BFC\u822A\u7684 API\uFF0C\u5176\u4E2D\u6700\u5E38\u7528\u7684\u5BFC\u822A API \u5206\u522B\u662F\uFF1A</p><ol><li>this.$router.push(&#39;\u5730\u5740&#39;) \u8DF3\u8F6C\u5230\u6307\u5B9A hash \u5730\u5740\uFF0C\u5E76\u589E\u52A0\u4E00\u6761\u5386\u53F2\u8BB0\u5F55</li><li>this.$router.replace(&#39;\u5730\u5740&#39;) \u8DF3\u8F6C\u5230\u6307\u5B9A\u7684 hash \u5730\u5740\uFF0C\u5E76\u66FF\u6362\u6389\u5F53\u524D\u7684\u5386\u53F2\u8BB0\u5F55</li><li>this.$router.go(\u6570\u503C n) \u5B9E\u73B0\u5BFC\u822A\u5386\u53F2\u524D\u8FDB\u3001\u540E\u9000</li><li>$router.back() \u5728\u5386\u53F2\u8BB0\u5F55\u4E2D\uFF0C\u540E\u9000\u5230\u4E0A\u4E00\u4E2A\u9875\u9762</li><li>$router.forward() \u5728\u5386\u53F2\u8BB0\u5F55\u4E2D\uFF0C\u524D\u8FDB\u5230\u4E0B\u4E00\u4E2A\u9875\u9762</li></ol><h2 id="\u8DEF\u7531\u4F20\u53C2" tabindex="-1">\u8DEF\u7531\u4F20\u53C2 <a class="header-anchor" href="#\u8DEF\u7531\u4F20\u53C2" aria-hidden="true">#</a></h2><h3 id="_1-params-\u4F20\u53C2" tabindex="-1">1. params \u4F20\u53C2 <a class="header-anchor" href="#_1-params-\u4F20\u53C2" aria-hidden="true">#</a></h3><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> VueRouter </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-router</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">VueRouter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">routes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u5B9A\u4E49\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/home/:id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./Home.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4F7F\u7528 $router.push\u4F20\u53C2</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/home/1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u63A5\u6536\u53C2\u6570</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$router</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-query-\u4F20\u53C2" tabindex="-1">2. query \u4F20\u53C2 <a class="header-anchor" href="#_2-query-\u4F20\u53C2" aria-hidden="true">#</a></h3><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u4F7F\u7528 $router.push\u4F20\u53C2</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/home/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">query</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u63A5\u6536\u53C2\u6570</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$router</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5168\u5C40\u524D\u7F6E\u5B88\u536B" tabindex="-1">\u5168\u5C40\u524D\u7F6E\u5B88\u536B <a class="header-anchor" href="#\u5168\u5C40\u524D\u7F6E\u5B88\u536B" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> VueRouter </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-router</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">VueRouter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">beforeEach</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> from</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> next</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// to \u5C06\u8981\u8BBF\u95EE\u7684\u8DEF\u7531\u4FE1\u606F\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// from \u5C06\u8981\u79BB\u5F00\u7684\u8DEF\u7531\u4FE1\u606F\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">next</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//  \u5F53\u524D\u7528\u6237\u62E5\u6709\u540E\u53F0\u4E3B\u9875\u7684\u8BBF\u95EE\u6743\u9650\uFF0C\u76F4\u63A5\u653E\u884C\uFF1Anext()</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u5F53\u524D\u7528\u6237\u6CA1\u6709\u540E\u53F0\u4E3B\u9875\u7684\u8BBF\u95EE\u6743\u9650\uFF0C\u5F3A\u5236\u5176\u8DF3\u8F6C\u5230\u767B\u5F55\u9875\u9762\uFF1Anext(&#39;/login&#39;)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u5F53\u524D\u7528\u6237\u6CA1\u6709\u540E\u53F0\u4E3B\u9875\u7684\u8BBF\u95EE\u6743\u9650\uFF0C\u4E0D\u5141\u8BB8\u8DF3\u8F6C\u5230\u540E\u53F0\u4E3B\u9875\uFF1Anext(false)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5168\u5C40\u540E\u7F6E\u5B88\u536B" tabindex="-1">\u5168\u5C40\u540E\u7F6E\u5B88\u536B <a class="header-anchor" href="#\u5168\u5C40\u540E\u7F6E\u5B88\u536B" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> VueRouter </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-router</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">VueRouter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">afterEach</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> from</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> next</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// to \u5C06\u8981\u8BBF\u95EE\u7684\u8DEF\u7531\u4FE1\u606F\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// from \u5C06\u8981\u79BB\u5F00\u7684\u8DEF\u7531\u4FE1\u606F\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">next</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//  \u5F53\u524D\u7528\u6237\u62E5\u6709\u540E\u53F0\u4E3B\u9875\u7684\u8BBF\u95EE\u6743\u9650\uFF0C\u76F4\u63A5\u653E\u884C\uFF1Anext()</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u5F53\u524D\u7528\u6237\u6CA1\u6709\u540E\u53F0\u4E3B\u9875\u7684\u8BBF\u95EE\u6743\u9650\uFF0C\u5F3A\u5236\u5176\u8DF3\u8F6C\u5230\u767B\u5F55\u9875\u9762\uFF1Anext(&#39;/login&#39;)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u5F53\u524D\u7528\u6237\u6CA1\u6709\u540E\u53F0\u4E3B\u9875\u7684\u8BBF\u95EE\u6743\u9650\uFF0C\u4E0D\u5141\u8BB8\u8DF3\u8F6C\u5230\u540E\u53F0\u4E3B\u9875\uFF1Anext(false)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,19),e=[p];function t(r,c,D,y,F,A){return a(),n("div",null,e)}var u=s(o,[["render",t]]);export{i as __pageData,u as default};
