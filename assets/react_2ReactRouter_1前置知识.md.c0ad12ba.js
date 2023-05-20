import{_ as s,o as a,c as n,d as p}from"./app.04c0f999.js";const C=JSON.parse('{"title":"\u524D\u7F6E\u77E5\u8BC6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5355\u9875\u5E94\u7528","slug":"\u5355\u9875\u5E94\u7528"},{"level":2,"title":"\u8DEF\u7531\u7684\u672C\u8D28","slug":"\u8DEF\u7531\u7684\u672C\u8D28"}],"relativePath":"react/2ReactRouter/1\u524D\u7F6E\u77E5\u8BC6.md"}'),l={name:"react/2ReactRouter/1\u524D\u7F6E\u77E5\u8BC6.md"},o=p(`<h1 id="\u524D\u7F6E\u77E5\u8BC6" tabindex="-1">\u524D\u7F6E\u77E5\u8BC6 <a class="header-anchor" href="#\u524D\u7F6E\u77E5\u8BC6" aria-hidden="true">#</a></h1><h2 id="\u5355\u9875\u5E94\u7528" tabindex="-1">\u5355\u9875\u5E94\u7528 <a class="header-anchor" href="#\u5355\u9875\u5E94\u7528" aria-hidden="true">#</a></h2><p>\u53EA\u6709\u4E00\u4E2Ahtml\u6587\u4EF6 \u4E3B\u6D41\u7684\u5F00\u53D1\u6A21\u5F0F\u53D8\u6210\u4E86\u901A\u8FC7\u8DEF\u7531\u8FDB\u884C\u9875\u9762\u5207\u6362</p><p>\u4F18\u52BF: \u907F\u514D\u6574\u4F53\u9875\u9762\u5237\u65B0 \u7528\u6237\u4F53\u9A8C\u53D8\u597D</p><p>\u7F3A\u70B9\uFF1A\u524D\u7AEF\u8D1F\u8D23\u4E8B\u60C5\u53D8\u591A\u4E86 \u5F00\u53D1\u7684\u96BE\u5EA6\u53D8\u5927</p><h2 id="\u8DEF\u7531\u7684\u672C\u8D28" tabindex="-1">\u8DEF\u7531\u7684\u672C\u8D28 <a class="header-anchor" href="#\u8DEF\u7531\u7684\u672C\u8D28" aria-hidden="true">#</a></h2><p>\u6982\u5FF5\u6765\u6E90\u4E8E\u540E\u7AEF : \u4E00\u4E2A\u8DEF\u5F84\u8868\u793A\u5339\u914D\u4E00\u4E2A\u670D\u52A1\u5668\u8D44\u6E90 /a.html -&gt; a\u5BF9\u5E94\u7684\u6587\u4EF6\u8D44\u6E90 /b.html -&gt; b\u5BF9\u5E94\u7684\u6587\u4EF6\u8D44\u6E90</p><p>\u5171\u540C\u7684\u601D\u60F3: \u4E00\u5BF9\u4E00\u7684\u5173\u7CFB</p><p>\u524D\u7AEF\u7684\u8DEF\u7531: \u4E00\u4E2A\u8DEF\u5F84path\u5BF9\u5E94\u552F\u4E00\u7684\u4E00\u4E2A\u7EC4\u4EF6comonent \u5F53\u6211\u4EEC\u8BBF\u95EE\u4E00\u4E2Apath \u81EA\u52A8\u628Apath\u5BF9\u5E94\u7684\u7EC4\u4EF6\u8FDB\u884C\u6E32\u67D3</p><div class="language-jsx"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> routes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/home</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Home</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/about</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> About</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/article</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Article</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div>`,10),e=[o];function t(c,r,D,y,F,i){return a(),n("div",null,e)}var h=s(l,[["render",t]]);export{C as __pageData,h as default};
