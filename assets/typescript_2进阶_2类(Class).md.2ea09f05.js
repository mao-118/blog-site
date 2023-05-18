import{_ as s,c as a,o as n,d as l}from"./app.909ecb64.js";const i=JSON.parse('{"title":"\u7C7B\uFF08class\uFF09","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9A\u4E49\u7C7B\uFF1A","slug":"\u5B9A\u4E49\u7C7B\uFF1A"},{"level":2,"title":"\u4F7F\u7528\u7C7B\uFF1A","slug":"\u4F7F\u7528\u7C7B\uFF1A"}],"relativePath":"typescript/2\u8FDB\u9636/2\u7C7B(Class).md"}'),p={name:"typescript/2\u8FDB\u9636/2\u7C7B(Class).md"},o=l(`<h1 id="\u7C7B\uFF08class\uFF09" tabindex="-1">\u7C7B\uFF08class\uFF09 <a class="header-anchor" href="#\u7C7B\uFF08class\uFF09" aria-hidden="true">#</a></h1><p>\u8981\u60F3\u9762\u5411\u5BF9\u8C61\uFF0C\u64CD\u4F5C\u5BF9\u8C61\uFF0C\u9996\u5148\u4FBF\u8981\u62E5\u6709\u5BF9\u8C61\uFF0C\u90A3\u4E48\u4E0B\u4E00\u4E2A\u95EE\u9898\u5C31\u662F\u5982\u4F55\u521B\u5EFA\u5BF9\u8C61\u3002\u8981\u521B\u5EFA\u5BF9\u8C61\uFF0C\u5FC5\u987B\u8981\u5148\u5B9A\u4E49\u7C7B\uFF0C\u6240\u8C13\u7684\u7C7B\u53EF\u4EE5\u7406\u89E3\u4E3A\u5BF9\u8C61\u7684\u6A21\u578B\uFF0C\u7A0B\u5E8F\u4E2D\u53EF\u4EE5\u6839\u636E\u7C7B\u521B\u5EFA\u6307\u5B9A\u7C7B\u578B\u7684\u5BF9\u8C61\uFF0C\u4E3E\u4F8B\u6765\u8BF4\uFF1A\u53EF\u4EE5\u901A\u8FC7Person\u7C7B\u6765\u521B\u5EFA\u4EBA\u7684\u5BF9\u8C61\uFF0C\u901A\u8FC7Dog\u7C7B\u521B\u5EFA\u72D7\u7684\u5BF9\u8C61\uFF0C\u901A\u8FC7Car\u7C7B\u6765\u521B\u5EFA\u6C7D\u8F66\u7684\u5BF9\u8C61\uFF0C\u4E0D\u540C\u7684\u7C7B\u53EF\u4EE5\u7528\u6765\u521B\u5EFA\u4E0D\u540C\u7684\u5BF9\u8C61\u3002</p><h2 id="\u5B9A\u4E49\u7C7B\uFF1A" tabindex="-1">\u5B9A\u4E49\u7C7B\uFF1A <a class="header-anchor" href="#\u5B9A\u4E49\u7C7B\uFF1A" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">\u7C7B\u540D</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  	</span><span style="color:#F07178;">\u5C5E\u6027\u540D</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">\u7C7B\u578B</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  	</span></span>
<span class="line"><span style="color:#A6ACCD;">  	</span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">\u7C7B\u578B</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">  		</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">\u5C5E\u6027\u540D</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  	</span></span>
<span class="line"><span style="color:#A6ACCD;">  	</span><span style="color:#F07178;">\u65B9\u6CD5\u540D</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">  		</span><span style="color:#89DDFF;">....</span></span>
<span class="line"><span style="color:#F07178;">  	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ul><li><p>\u793A\u4F8B\uFF1A</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">sayHello</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">\u5927\u5BB6\u597D\uFF0C\u6211\u662F</span><span style="color:#89DDFF;">\${</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="\u4F7F\u7528\u7C7B\uFF1A" tabindex="-1">\u4F7F\u7528\u7C7B\uFF1A <a class="header-anchor" href="#\u4F7F\u7528\u7C7B\uFF1A" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> p </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5B59\u609F\u7A7A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  p</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sayHello</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function c(t,r,D,y,F,C){return n(),a("div",null,e)}var d=s(p,[["render",c]]);export{i as __pageData,d as default};
