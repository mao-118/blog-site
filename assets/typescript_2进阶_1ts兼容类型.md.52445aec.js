import{_ as s,o as n,c as a,d as l}from"./app.791a238b.js";const A=JSON.parse('{"title":"TS\u4E2D\u7684\u517C\u5BB9\u6027","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u81EA\u52A8\u7C7B\u578B\u63A8\u8BBA","slug":"\u81EA\u52A8\u7C7B\u578B\u63A8\u8BBA"},{"level":2,"title":"\u5BF9\u8C61\u7C7B\u578B\u517C\u5BB9\u6027","slug":"\u5BF9\u8C61\u7C7B\u578B\u517C\u5BB9\u6027"},{"level":2,"title":"\u51FD\u6570\u7C7B\u578B\u517C\u5BB9\u6027","slug":"\u51FD\u6570\u7C7B\u578B\u517C\u5BB9\u6027"},{"level":2,"title":"\u679A\u4E3E\u7C7B\u578B\u77E5\u8BC6\u70B9\u8865\u5145","slug":"\u679A\u4E3E\u7C7B\u578B\u77E5\u8BC6\u70B9\u8865\u5145"},{"level":2,"title":"\u679A\u4E3E\u7C7B\u578B\u517C\u5BB9\u6027","slug":"\u679A\u4E3E\u7C7B\u578B\u517C\u5BB9\u6027"},{"level":2,"title":"\u7C7B\u7684\u517C\u5BB9\u6027","slug":"\u7C7B\u7684\u517C\u5BB9\u6027"},{"level":2,"title":"\u6CDB\u578B\u7684\u517C\u5BB9\u6027","slug":"\u6CDB\u578B\u7684\u517C\u5BB9\u6027"}],"relativePath":"typescript/2\u8FDB\u9636/1ts\u517C\u5BB9\u7C7B\u578B.md"}'),p={name:"typescript/2\u8FDB\u9636/1ts\u517C\u5BB9\u7C7B\u578B.md"},e=l(`<h1 id="ts\u4E2D\u7684\u517C\u5BB9\u6027" tabindex="-1">TS\u4E2D\u7684\u517C\u5BB9\u6027 <a class="header-anchor" href="#ts\u4E2D\u7684\u517C\u5BB9\u6027" aria-hidden="true">#</a></h1><h2 id="\u81EA\u52A8\u7C7B\u578B\u63A8\u8BBA" tabindex="-1">\u81EA\u52A8\u7C7B\u578B\u63A8\u8BBA <a class="header-anchor" href="#\u81EA\u52A8\u7C7B\u578B\u63A8\u8BBA" aria-hidden="true">#</a></h2><ul><li><p>\u6839\u636E\u521D\u59CB\u503C\u8FDB\u884C\u7C7B\u578B\u63A8\u8BBA</p><p>\u4E0D\u7528\u660E\u786E\u544A\u8BC9\u7F16\u8BD1\u5668\u5177\u4F53\u662F\u4EC0\u4E48\u7C7B\u578B, \u7F16\u8BD1\u5668\u5C31\u77E5\u9053\u662F\u4EC0\u4E48\u7C7B\u578B</p><p>\u6839\u636E\u521D\u59CB\u5316\u503C\u81EA\u52A8\u63A8\u65AD</p><p><strong>\u6CE8\u610F\u70B9\uFF1A</strong> \u5982\u679C\u662F\u5148\u5B9A\u4E49\u5728\u521D\u59CB\u5316, \u90A3\u4E48\u662F\u65E0\u6CD5\u81EA\u52A8\u63A8\u65AD\u7684</p></li><li><p>\u4E0A\u4E0B\u6587\u7C7B\u578B\u63A8\u8BBA</p><p>TypeScript\u7C7B\u578B\u63A8\u8BBA\u4E5F\u53EF\u80FD\u6309\u7167\u76F8\u53CD\u7684\u65B9\u5411\u8FDB\u884C\u3002 \u8FD9\u88AB\u53EB\u505A\u201C\u6309\u4E0A\u4E0B\u6587\u5F52\u7C7B\u201D\u3002\u6309\u4E0A\u4E0B\u6587\u5F52\u7C7B\u4F1A\u53D1\u751F\u5728\u8868\u8FBE\u5F0F\u7684\u7C7B\u578B\u4E0E\u6240\u5904\u7684\u4F4D\u7F6E\u76F8\u5173\u65F6</p></li></ul><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u6700\u4F73\u7C7B\u578B\u63A8\u65AD</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u7B49\u4EF7\u4E8E let uanme: string = &quot;\u9648\u4E54\u6069&quot;;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> uname </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u9648\u4E54\u6069</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">uname </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5F90\u7490</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// uname = 123;  // \u62A5\u9519</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// uname = true; // \u62A5\u9519</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> uage</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">uage </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">uage </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u7B49\u4EF7\u4E8E let x: (number | null)[] = [0, 1, null];</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// x = [18, 28, 38, null, true];</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4E0A\u4E0B\u6587\u7C7B\u578B\u63A8\u65AD</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onmousedown</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">mouseEvent</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">mouseEvent</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">button</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><h2 id="\u5BF9\u8C61\u7C7B\u578B\u517C\u5BB9\u6027" tabindex="-1">\u5BF9\u8C61\u7C7B\u578B\u517C\u5BB9\u6027 <a class="header-anchor" href="#\u5BF9\u8C61\u7C7B\u578B\u517C\u5BB9\u6027" aria-hidden="true">#</a></h2><ul><li>\u53EF\u591A\u4E0D\u53EF\u5C11</li><li>\u4F1A\u8FDB\u884C\u9012\u5F52\u68C0\u67E5</li></ul><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5BF9\u8C61\u7C7B\u578B\u8D4B\u503C\u7ED9\u63A5\u53E3\u7C7B\u578B</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u6CE8\u610F\u70B9: \u53EF\u591A\u4E0D\u53EF\u5C11</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">INameTest</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> n1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u795D\u7EEA\u4E39</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> n2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6C5F\u758F\u5F71</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> n3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> val</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">INameTest</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">val </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> n1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">val </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> n2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// val = n3;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u6CE8\u610F\u70B9: \u5FC5\u987B\u4E00\u4E00\u5BF9\u5E94\uFF0C\u4F1A\u8FDB\u884C\u9012\u5F52\u68C0\u67E5</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ITestInfo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> p1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5434\u5BA3\u4EEA</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:{</span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">}};</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> p2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u9648\u5C0F\u7EAD</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:{</span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">}};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> t</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">ITestInfo</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">t </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> p1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// t = p2; </span></span>
<span class="line"></span></code></pre></div><h2 id="\u51FD\u6570\u7C7B\u578B\u517C\u5BB9\u6027" tabindex="-1">\u51FD\u6570\u7C7B\u578B\u517C\u5BB9\u6027 <a class="header-anchor" href="#\u51FD\u6570\u7C7B\u578B\u517C\u5BB9\u6027" aria-hidden="true">#</a></h2><ul><li>\u53C2\u6570\u4E2A\u6570</li><li>\u53C2\u6570\u7C7B\u578B</li><li>\u53C2\u6570\u8FD4\u56DE\u503C</li><li>\u53CC\u5411\u534F\u53D8</li><li>\u51FD\u6570\u91CD\u8F7D</li><li>\u53EF\u9009\u53C2\u6570\u53CA\u5269\u4F59\u53C2\u6570</li></ul><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u53C2\u6570\u4E2A\u6570</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u6CE8\u610F\u70B9: \u53EF\u5C11\u4E0D\u53EF\u591A</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func1 = (a:number, b:number) =&gt; {};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func2 = (x:number) =&gt; {};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func1 = func2;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func2 = func1; </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u53C2\u6570\u7C7B\u578B</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u6CE8\u610F\u70B9: \u53C2\u6570\u7C7B\u578B\u5FC5\u987B\u76F8\u540C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func1 = (x:number)=&gt;{};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func2 = (x:number)=&gt;{};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func3 = (x:string)=&gt;{};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func1 = func2;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func2 = func1;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func1 = func3; </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func3 = func1;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u8FD4\u56DE\u503C\u7C7B\u578B</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u6CE8\u610F\u70B9: \u8FD4\u56DE\u503C\u7C7B\u578B\u5FC5\u987B\u76F8\u540C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func1 = ():number=&gt; 18;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func2 = ():number=&gt; 28;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func3 = ():string=&gt; &#39;TS\u771F\u597D\u73A9&#39;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func1 = func2;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func2 = func1;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func1 = func3; </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func3 = func1;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u51FD\u6570\u53CC\u5411\u534F\u53D8</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1.\u53C2\u6570\u7684\u53CC\u5411\u534F\u53D8</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func1 = (x:(number | string)) =&gt;{};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func2 = (x:number) =&gt;{};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func1 = func2;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func2 = func1;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2.\u8FD4\u56DE\u503C\u53CC\u5411\u534F\u53D8</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4E0D\u80FD\u5C06\u8FD4\u56DE\u503C\u662F\u8054\u5408\u7C7B\u578B\u7684\u8D4B\u503C\u7ED9\u5177\u4F53\u7C7B\u578B\u7684</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u53EF\u4EE5\u5C06\u8FD4\u56DE\u503C\u662F\u5177\u4F53\u7C7B\u578B\u7684\u8D4B\u503C\u7ED9\u8054\u5408\u7C7B\u578B\u7684</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func1 = (x:boolean):(number | string) =&gt; x ? 18 : &#39;\u5F20\u542B\u97F5&#39;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func2 = (x:boolean):number =&gt; 28;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// func1 = func2; </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func2 = func1;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u51FD\u6570\u91CD\u8F7D</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4E0D\u80FD\u5C06\u91CD\u8F7D\u5C11\u7684\u8D4B\u503C\u7ED9\u91CD\u8F7D\u591A\u7684</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u53EF\u4EE5\u5C06\u91CD\u8F7D\u591A\u7684\u8D4B\u503C\u7ED9\u91CD\u8F7D\u5C11</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">function add(x:number, y:number):number;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">function add(x:string, y:string):string;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">function add(x, y) {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    return x + y;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">function sub(x:number, y:number):number;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">function sub(x, y) {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    return x - y;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let fn = add;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// fn = sub; </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let fn = sub;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">fn = add; </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u53EF\u9009\u53C2\u6570\u53CA\u5269\u4F59\u53C2\u6570</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5F53\u4E00\u4E2A\u51FD\u6570\u6709\u5269\u4F59\u53C2\u6570\u65F6\uFF0C\u5B83\u88AB\u5F53\u505A\u65E0\u9650\u4E2A\u53EF\u9009\u53C2\u6570</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">func</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">callback</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">func</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> z</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> y </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> z))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">func</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">?,</span><span style="color:#A6ACCD;"> y</span><span style="color:#89DDFF;">?)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> y))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">func</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y</span><span style="color:#89DDFF;">?,</span><span style="color:#A6ACCD;"> z</span><span style="color:#89DDFF;">?)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> y))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u679A\u4E3E\u7C7B\u578B\u77E5\u8BC6\u70B9\u8865\u5145" tabindex="-1">\u679A\u4E3E\u7C7B\u578B\u77E5\u8BC6\u70B9\u8865\u5145 <a class="header-anchor" href="#\u679A\u4E3E\u7C7B\u578B\u77E5\u8BC6\u70B9\u8865\u5145" aria-hidden="true">#</a></h2><p>TS\u4E2D\u652F\u6301\u4E24\u79CD\u679A\u4E3E, \u4E00\u79CD\u662F\u6570\u5B57\u679A\u4E3E, \u4E00\u79CD\u662F\u5B57\u7B26\u4E32\u679A\u4E3E</p><ul><li><p>\u6570\u5B57\u679A\u4E3E</p><blockquote><p>1.\u6570\u5B57\u679A\u4E3E\u7684\u53D6\u503C\u53EF\u4EE5\u662F\u5B57\u9762\u91CF, \u4E5F\u53EF\u4EE5\u662F\u5E38\u91CF, \u4E5F\u53EF\u4EE5\u662F\u8BA1\u7B97\u7684\u7ED3\u679C</p><p>2.\u5982\u679C\u91C7\u7528\u5B57\u9762\u91CF\u5BF9\u7B2C\u4E00\u4E2A\u6210\u5458\u8FDB\u884C\u8D4B\u503C\uFF0C\u4E0B\u9762\u7684\u6210\u5458\u4F1A\u81EA\u52A8\u9012\u589E</p><p>3.\u5982\u679C\u91C7\u7528\u5E38\u91CF\u6216\u8BA1\u7B97\u7ED3\u679C\u8FDB\u884C\u8D4B\u503C\uFF0C\u5219\u4E0B\u9762\u7684\u6210\u5458\u4E5F\u5FC5\u987B\u521D\u59CB\u5316</p></blockquote></li><li><p>\u5B57\u7B26\u4E32\u679A\u4E3E</p><blockquote><p>1.\u5982\u679C\u91C7\u7528\u5B57\u9762\u91CF\u5BF9\u7B2C\u4E00\u4E2A\u6210\u5458\u8FDB\u884C\u8D4B\u503C\uFF0C\u4E0B\u9762\u7684\u6210\u5458\u4E5F\u5FC5\u987B\u8D4B\u503C</p><p>2.\u91C7\u7528[index]\u7684\u5F62\u5F0F\u4E0D\u80FD\u83B7\u53D6\u5230\u5185\u5BB9,\u9700\u8981\u4F20\u5165[key]</p><p>3.\u5B57\u7B26\u4E32\u679A\u4E3E\u4E0D\u80FD\u4F7F\u7528\u5E38\u91CF\u6216\u8005\u8BA1\u7B97\u7ED3\u679C\u7ED9\u679A\u4E3E\u503C\u8D4B\u503C</p><p>4.\u5B83\u53EF\u4EE5\u4F7F\u7528\u5185\u90E8\u7684\u5176\u5B83\u679A\u4E3E\u503C\u6765\u8D4B\u503C</p></blockquote></li><li><p>\u5F02\u6784\u679A\u4E3E\uFF1A\u679A\u4E3E\u4E2D\u65E2\u5305\u542B\u6570\u5B57\u53C8\u5305\u542B\u5B57\u7B26\u4E32, \u6211\u4EEC\u5C31\u79F0\u4E4B\u4E3A\u5F02\u6784\u679A\u4E3E</p><blockquote><p>1.\u5982\u679C\u662F\u5B57\u7B26\u4E32\u679A\u4E3E, \u90A3\u4E48\u65E0\u6CD5\u901A\u8FC7\u539F\u59CB\u503C\u83B7\u53D6\u5230\u679A\u4E3E\u503C</p></blockquote></li><li><p>\u628A\u679A\u4E3E\u6210\u5458\u5F53\u505A\u7C7B\u578B\u6765\u4F7F\u7528</p></li></ul><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// TS\u4E2D\u652F\u6301\u4E24\u79CD\u679A\u4E3E, \u4E00\u79CD\u662F\u6570\u5B57\u679A\u4E3E, \u4E00\u79CD\u662F\u5B57\u7B26\u4E32\u679A\u4E3E</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1.\u6570\u5B57\u679A\u4E3E</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5C31\u662F\u6570\u5B57\u679A\u4E3E</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u6CE8\u610F\u70B9: 1.\u6570\u5B57\u679A\u4E3E\u7684\u53D6\u503C\u53EF\u4EE5\u662F\u5B57\u9762\u91CF, \u4E5F\u53EF\u4EE5\u662F\u5E38\u91CF, \u4E5F\u53EF\u4EE5\u662F\u8BA1\u7B97\u7684\u7ED3\u679C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//        2.\u5982\u679C\u91C7\u7528\u5B57\u9762\u91CF\u5BF9\u7B2C\u4E00\u4E2A\u6210\u5458\u8FDB\u884C\u8D4B\u503C\uFF0C\u4E0B\u9762\u7684\u6210\u5458\u4F1A\u81EA\u52A8\u9012\u589E</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//        3.\u5982\u679C\u91C7\u7528\u5E38\u91CF\u6216\u8BA1\u7B97\u7ED3\u679C\u8FDB\u884C\u8D4B\u503C\uFF0C\u5219\u4E0B\u9762\u7684\u6210\u5458\u4E5F\u5FC5\u987B\u521D\u59CB\u5316</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// enum Gender{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     Male,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     Female</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Gender.Male);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Gender.Female);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Gender[0]);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// const val = 100;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// const num = () =&gt; 200;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// enum Gender{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   // Male = 1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   // Female</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   Male = val,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   Female = num()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2.\u5B57\u7B26\u4E32\u679A\u4E3E</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u6CE8\u610F\u70B9: 1.\u5982\u679C\u91C7\u7528\u5B57\u9762\u91CF\u5BF9\u7B2C\u4E00\u4E2A\u6210\u5458\u8FDB\u884C\u8D4B\u503C\uFF0C\u4E0B\u9762\u7684\u6210\u5458\u4E5F\u5FC5\u987B\u8D4B\u503C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//        2.\u91C7\u7528[index]\u7684\u5F62\u5F0F\u4E0D\u80FD\u83B7\u53D6\u5230\u5185\u5BB9,\u9700\u8981\u4F20\u5165[key]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//        3.\u5B57\u7B26\u4E32\u679A\u4E3E\u4E0D\u80FD\u4F7F\u7528\u5E38\u91CF\u6216\u8005\u8BA1\u7B97\u7ED3\u679C\u7ED9\u679A\u4E3E\u503C\u8D4B\u503C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//        4.\u5B83\u53EF\u4EE5\u4F7F\u7528\u5185\u90E8\u7684\u5176\u5B83\u679A\u4E3E\u503C\u6765\u8D4B\u503C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// enum Direction {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   up = &quot;UP&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   down = &quot;DOWN&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Direction.up);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Direction.down);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Direction[0]); // undefined</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Direction[&quot;up&quot;]); // UP</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// const val = &quot;\u91D1\u6668&quot;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// const res = () =&gt; &quot;\u738B\u9E25&quot;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// enum User {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   // a = val,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   // b = res()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    c = &quot;HTML&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    d = c</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3.\u5F02\u6784\u679A\u4E3E</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u679A\u4E3E\u4E2D\u65E2\u5305\u542B\u6570\u5B57\u53C8\u5305\u542B\u5B57\u7B26\u4E32, \u6211\u4EEC\u5C31\u79F0\u4E4B\u4E3A\u5F02\u6784\u679A\u4E3E</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u6CE8\u610F\u70B9: \u5982\u679C\u662F\u5B57\u7B26\u4E32\u679A\u4E3E, \u90A3\u4E48\u65E0\u6CD5\u901A\u8FC7\u539F\u59CB\u503C\u83B7\u53D6\u5230\u679A\u4E3E\u503C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// enum Gender{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   Male = 1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   Female = &#39;\u5973&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Gender.Male);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Gender.Female);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Gender[1]);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Gender[&#39;\u5973&#39;]);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 4.\u628A\u679A\u4E3E\u6210\u5458\u5F53\u505A\u7C7B\u578B\u6765\u4F7F\u7528</span></span>
<span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Gender</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  Male </span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  Female</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ITestInterface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Gender</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// age: (Gender.Male | Gender.Female)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ITestInterface</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// age: Gender.Male</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Gender</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Female</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="\u679A\u4E3E\u7C7B\u578B\u517C\u5BB9\u6027" tabindex="-1">\u679A\u4E3E\u7C7B\u578B\u517C\u5BB9\u6027 <a class="header-anchor" href="#\u679A\u4E3E\u7C7B\u578B\u517C\u5BB9\u6027" aria-hidden="true">#</a></h2><ul><li>\u6570\u5B57\u679A\u4E3E\u4E0E\u6570\u5B57\u517C\u5BB9</li><li>\u6570\u5B57\u679A\u4E3E\u4E0E\u6570\u5B57\u679A\u4E3E\u4E0D\u517C\u5BB9</li><li>\u5B57\u7B26\u4E32\u679A\u4E3E\u4E0E\u5B57\u7B26\u4E32\u4E0D\u517C\u5BB9</li></ul><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u6570\u5B57\u679A\u4E3E\u4E0E\u6570\u5B57\u517C\u5BB9</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">enum Gender{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    Male,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    Female</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let value:Gender;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">value = Gender.Male;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">value = 100;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u6570\u5B57\u679A\u4E3E\u4E0E\u6570\u5B57\u679A\u4E3E\u4E0D\u517C\u5BB9</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">enum Gender{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    Male, // 0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    Female // 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">enum Animal{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    Dog, // 0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    Cat // 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let value:Gender;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">value = Gender.Male;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">value = Animal.Dog; // \u62A5\u9519</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5B57\u7B26\u4E32\u679A\u4E3E\u4E0E\u5B57\u7B26\u4E32\u4E0D\u517C\u5BB9</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// enum Gender{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     Male = &#39;\u5F20\u82E5\u6600&#39;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     Female  = &#39;\u5510\u827A\u6615&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let value:Gender;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// value = Gender.Male;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// value = Gender.Female;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// value = &quot;\u5A03\u563B\u563B&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7C7B\u7684\u517C\u5BB9\u6027" tabindex="-1">\u7C7B\u7684\u517C\u5BB9\u6027 <a class="header-anchor" href="#\u7C7B\u7684\u517C\u5BB9\u6027" aria-hidden="true">#</a></h2><p>\u7C7B\u7684\u5DE5\u4F5C\u65B9\u5F0F\u4E0E\u5BF9\u8C61\u5B57\u9762\u7C7B\u578B\u548C\u63A5\u53E3\u7C7B\u4F3C\uFF0C\u4F46\u6709\u4E00\u4E2A\u4F8B\u5916\uFF1A\u5B83\u4EEC\u540C\u65F6\u5177\u6709\u9759\u6001\u548C\u5B9E\u4F8B\u7C7B\u578B\u3002\u5F53\u6BD4\u8F83\u4E00\u4E2A \u7C7B\u7C7B\u578B\u7684\u4E24\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u53EA\u6709\u5B9E\u4F8B\u7684\u6210\u5458\u88AB\u6BD4\u8F83\u3002\u9759\u6001\u6210\u5458\u548C\u6784\u9020\u51FD\u6570\u4E0D\u5F71\u54CD\u517C\u5BB9\u6027\u3002</p><p>\u4E00\u4E2A\u7C7B\u4E2D\u7684\u79C1\u6709\u6210\u5458\u548C\u4FDD\u62A4\u6210\u5458\u4F1A\u5F71\u54CD\u5176\u517C\u5BB9\u6027\u3002\u5F53\u4E00\u4E2A\u7C7B\u7684\u5B9E\u4F8B\u88AB\u68C0\u67E5\u517C\u5BB9\u6027\u65F6\uFF0C\u5982\u679C\u76EE\u6807\u7C7B\u578B\u5305\u542B \u4E00\u4E2A\u79C1\u6709\u6210\u5458\uFF0C\u90A3\u4E48\u6E90\u7C7B\u578B\u4E5F\u5FC5\u987B\u5305\u542B\u4E00\u4E2A\u6E90\u81EA\u540C\u4E00\u7C7B\u7684\u79C1\u6709\u6210\u5458\u3002\u540C\u6837\u5730\uFF0C\u8FD9\u4E5F\u9002\u7528\u4E8E\u6709\u4FDD\u62A4\u6210\u5458\u7684 \u5B9E\u4F8B\u3002\u8FD9\u5141\u8BB8\u4E00\u4E2A\u7C7B\u4E0E\u5B83\u7684\u8D85\u7C7B\u8FDB\u884C\u8D4B\u503C\u517C\u5BB9\uFF0C\u4F46\u4E0D\u5141\u8BB8\u4E0E\u6765\u81EA\u4E0D\u540C\u7EE7\u627F\u5C42\u6B21\u7684\u7C7B\u8FDB\u884C\u8D4B\u503C\u517C\u5BB9\uFF0C\u5426\u5219 \u5C31\u4F1A\u6709\u76F8\u540C\u7684\u5F62\u72B6\u3002</p><ul><li><code>public</code>: \u53EF\u591A\u4E0D\u53EF\u5C11</li><li><code>private / protected</code>: \u4E0D\u80FD\u4E92\u76F8\u8D4B\u503C</li></ul><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// public</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">class Animal {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  feet: number;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  age: number;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  constructor(name: string, numFeet: number) {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">class Size {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  feet: number;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  constructor(numFeet: number) {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u53EF\u591A\u4E0D\u53EF\u5C11</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let a: Animal;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let s: Size;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">s = a; // \u6B63\u786E</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">a = s; // \u9519\u8BEF</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// private / protected</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">class Animal {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  private feet: number;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  constructor(name: string, numFeet: number) {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">class Size {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  private feet: number;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  constructor(numFeet: number) {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let a: Animal;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let s: Size;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">s = a; // \u9519\u8BEF</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">a = s; // \u9519\u8BEF</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6CDB\u578B\u7684\u517C\u5BB9\u6027" tabindex="-1">\u6CDB\u578B\u7684\u517C\u5BB9\u6027 <a class="header-anchor" href="#\u6CDB\u578B\u7684\u517C\u5BB9\u6027" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u56E0\u4E3ATypeScript\u662F\u4E00\u4E2A\u7ED3\u6784\u5316\u7684\u7C7B\u578B\u7CFB\u7EDF\uFF0C\u7C7B\u578B\u53C2\u6570\u53EA\u5728\u4F5C\u4E3A\u6210\u5458\u7C7B\u578B\u7684\u4E00\u90E8\u5206\u88AB\u6D88\u8017\u65F6\u5F71\u54CD\u5230\u7ED3\u679C\u7C7B\u578B\u3002</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">interface Empty&lt;T&gt; {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let x: Empty&lt;number&gt;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let y: Empty&lt;string&gt;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">x = y; // \u6B63\u786E\uFF0C\u56E0\u4E3Ay\u7B26\u5408x\u7684\u7ED3\u6784</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5728\u4E0A\u9762\uFF0C x \u548C y \u662F\u517C\u5BB9\u7684\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u7684\u7ED3\u6784\u6CA1\u6709\u4EE5\u533A\u5206\u7684\u65B9\u5F0F\u4F7F\u7528\u7C7B\u578B\u53C2\u6570\u3002\u901A\u8FC7\u7ED9 Empty&lt;T&gt; \u589E\u52A0\u4E00</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4E2A\u6210\u5458\u6765\u6539\u53D8\u8FD9\u4E2A\u4F8B\u5B50\uFF0C\u663E\u793A\u4E86\u8FD9\u662F\u5982\u4F55\u5DE5\u4F5C\u7684</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">interface NotEmpty&lt;T&gt; {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  \xA0data: T;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> let x: NotEmpty&lt;number&gt;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> let y: NotEmpty&lt;string&gt;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> x = y; // \u9519\u8BEF\uFF0C\u56E0\u4E3Ax\u548Cy\u4E0D\u517C\u5BB9</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div>`,24),o=[e];function t(c,i,y,r,D,F){return n(),a("div",null,o)}var f=s(p,[["render",t]]);export{A as __pageData,f as default};
