import{_ as s,o as n,c as a,d as l}from"./app.17a6e5b5.js";const i=JSON.parse('{"title":"\u57FA\u672C\u7C7B\u578B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7C7B\u578B\u58F0\u660E","slug":"\u7C7B\u578B\u58F0\u660E"},{"level":2,"title":"\u81EA\u52A8\u7C7B\u578B\u5224\u65AD","slug":"\u81EA\u52A8\u7C7B\u578B\u5224\u65AD"},{"level":2,"title":"number","slug":"number"},{"level":2,"title":"boolean","slug":"boolean"},{"level":2,"title":"string","slug":"string"},{"level":2,"title":"\u5B57\u9762\u91CF","slug":"\u5B57\u9762\u91CF"},{"level":2,"title":"any","slug":"any"},{"level":2,"title":"unknown","slug":"unknown"},{"level":2,"title":"void","slug":"void"},{"level":2,"title":"never","slug":"never"},{"level":2,"title":"object\uFF08\u6CA1\u5565\u7528\uFF09","slug":"object\uFF08\u6CA1\u5565\u7528\uFF09"},{"level":2,"title":"array","slug":"array"},{"level":2,"title":"tuple(\u5143\u7EC4)","slug":"tuple-\u5143\u7EC4"},{"level":2,"title":"enum","slug":"enum"},{"level":2,"title":"\u7C7B\u578B\u65AD\u8A00","slug":"\u7C7B\u578B\u65AD\u8A00"}],"relativePath":"typescript/1\u57FA\u7840/2\u57FA\u672C\u7C7B\u578B.md"}'),p={name:"typescript/1\u57FA\u7840/2\u57FA\u672C\u7C7B\u578B.md"},o=l(`<h1 id="\u57FA\u672C\u7C7B\u578B" tabindex="-1">\u57FA\u672C\u7C7B\u578B <a class="header-anchor" href="#\u57FA\u672C\u7C7B\u578B" aria-hidden="true">#</a></h1><h2 id="\u7C7B\u578B\u58F0\u660E" tabindex="-1">\u7C7B\u578B\u58F0\u660E <a class="header-anchor" href="#\u7C7B\u578B\u58F0\u660E" aria-hidden="true">#</a></h2><ul><li><p>\u7C7B\u578B\u58F0\u660E\u662F TS \u975E\u5E38\u91CD\u8981\u7684\u4E00\u4E2A\u7279\u70B9</p></li><li><p>\u901A\u8FC7\u7C7B\u578B\u58F0\u660E\u53EF\u4EE5\u6307\u5B9A TS \u4E2D\u53D8\u91CF\uFF08\u53C2\u6570\u3001\u5F62\u53C2\uFF09\u7684\u7C7B\u578B</p></li><li><p>\u6307\u5B9A\u7C7B\u578B\u540E\uFF0C\u5F53\u4E3A\u53D8\u91CF\u8D4B\u503C\u65F6\uFF0CTS \u7F16\u8BD1\u5668\u4F1A\u81EA\u52A8\u68C0\u67E5\u503C\u662F\u5426\u7B26\u5408\u7C7B\u578B\u58F0\u660E\uFF0C\u7B26\u5408\u5219\u8D4B\u503C\uFF0C\u5426\u5219\u62A5\u9519</p></li><li><p>\u7B80\u800C\u8A00\u4E4B\uFF0C\u7C7B\u578B\u58F0\u660E\u7ED9\u53D8\u91CF\u8BBE\u7F6E\u4E86\u7C7B\u578B\uFF0C\u4F7F\u5F97\u53D8\u91CF\u53EA\u80FD\u5B58\u50A8\u67D0\u79CD\u7C7B\u578B\u7684\u503C</p></li><li><p>\u8BED\u6CD5\uFF1A</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> \u53D8\u91CF</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">\u7C7B\u578B</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> \u53D8\u91CF</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">\u7C7B\u578B</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> \u503C</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">\u7C7B\u578B</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> \u53C2\u6570</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">\u7C7B\u578B</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">\u7C7B\u578B</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="\u81EA\u52A8\u7C7B\u578B\u5224\u65AD" tabindex="-1">\u81EA\u52A8\u7C7B\u578B\u5224\u65AD <a class="header-anchor" href="#\u81EA\u52A8\u7C7B\u578B\u5224\u65AD" aria-hidden="true">#</a></h2><ul><li>TS \u62E5\u6709\u81EA\u52A8\u7684\u7C7B\u578B\u5224\u65AD\u673A\u5236</li><li>\u5F53\u5BF9\u53D8\u91CF\u7684\u58F0\u660E\u548C\u8D4B\u503C\u662F\u540C\u65F6\u8FDB\u884C\u7684\uFF0CTS \u7F16\u8BD1\u5668\u4F1A\u81EA\u52A8\u5224\u65AD\u53D8\u91CF\u7684\u7C7B\u578B</li><li>\u6240\u4EE5\u5982\u679C\u4F60\u7684\u53D8\u91CF\u7684\u58F0\u660E\u548C\u8D4B\u503C\u65F6\u540C\u65F6\u8FDB\u884C\u7684\uFF0C\u53EF\u4EE5\u7701\u7565\u6389\u7C7B\u578B\u58F0\u660E</li></ul><h2 id="number" tabindex="-1">number <a class="header-anchor" href="#number" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> decimal</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> hex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0xf00d</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> binary</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0b1010</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> octal</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0o744</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> big</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bigint</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#C792EA;">n</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="boolean" tabindex="-1">boolean <a class="header-anchor" href="#boolean" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> isDone</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><h2 id="string" tabindex="-1">string <a class="header-anchor" href="#string" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  color </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> fullName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Bob Bobbington</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">37</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> sentence</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Hello, my name is </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">fullName</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">.</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">  I&#39;ll be </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> years old next month.</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><h2 id="\u5B57\u9762\u91CF" tabindex="-1">\u5B57\u9762\u91CF <a class="header-anchor" href="#\u5B57\u9762\u91CF" aria-hidden="true">#</a></h2><ul><li>\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u9762\u91CF\u53BB\u6307\u5B9A\u53D8\u91CF\u7684\u7C7B\u578B\uFF0C\u901A\u8FC7\u5B57\u9762\u91CF\u53EF\u4EE5\u786E\u5B9A\u53D8\u91CF\u7684\u53D6\u503C\u8303\u56F4</li></ul><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">black</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> num</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="any" tabindex="-1">any <a class="header-anchor" href="#any" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> d</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="unknown" tabindex="-1">unknown <a class="header-anchor" href="#unknown" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> notSure</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> notSure </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="void" tabindex="-1">void <a class="header-anchor" href="#void" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> unusable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="never" tabindex="-1">never <a class="header-anchor" href="#never" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">error</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">never</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Error</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><h2 id="object\uFF08\u6CA1\u5565\u7528\uFF09" tabindex="-1">object\uFF08\u6CA1\u5565\u7528\uFF09 <a class="header-anchor" href="#object\uFF08\u6CA1\u5565\u7528\uFF09" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> obj</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">object</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="array" tabindex="-1">array <a class="header-anchor" href="#array" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> list</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> list</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="tuple-\u5143\u7EC4" tabindex="-1">tuple(\u5143\u7EC4) <a class="header-anchor" href="#tuple-\u5143\u7EC4" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="enum" tabindex="-1">enum <a class="header-anchor" href="#enum" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Color</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   Red</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">   Green</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">   Blue</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Color</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Color</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Green</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Color</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   Red </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">   Green</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">   Blue</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Color</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Color</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Green</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Color</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   Red </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">   Green </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">   Blue </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Color</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Color</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Green</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><h2 id="\u7C7B\u578B\u65AD\u8A00" tabindex="-1">\u7C7B\u578B\u65AD\u8A00 <a class="header-anchor" href="#\u7C7B\u578B\u65AD\u8A00" aria-hidden="true">#</a></h2><ul><li><p>\u6709\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u53D8\u91CF\u7684\u7C7B\u578B\u5BF9\u4E8E\u6211\u4EEC\u6765\u8BF4\u662F\u5F88\u660E\u786E\uFF0C\u4F46\u662F TS \u7F16\u8BD1\u5668\u5374\u5E76\u4E0D\u6E05\u695A\uFF0C\u6B64\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7C7B\u578B\u65AD\u8A00\u6765\u544A\u8BC9\u7F16\u8BD1\u5668\u53D8\u91CF\u7684\u7C7B\u578B\uFF0C\u65AD\u8A00\u6709\u4E24\u79CD\u5F62\u5F0F\uFF1A</p><ul><li><p>\u7B2C\u4E00\u79CD</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> someValue</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">this is a string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> strLength</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (someValue </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u7B2C\u4E8C\u79CD</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> someValue</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">this is a string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> strLength</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">&gt;someValue)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></li></ul></li></ul>`,32),e=[o];function c(t,r,C,D,y,A){return n(),a("div",null,e)}var d=s(p,[["render",c]]);export{i as __pageData,d as default};
