import{_ as s,c as a,o as n,a as l}from"./app.67283442.js";const C=JSON.parse('{"title":"\u8BB0\u5F55\u5F00\u53D1\u4E2D\u9047\u5230\u7684\u95EE\u9898(\u9047\u5230\u7684\u5751)","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E24\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u6570\u5B57\u6BD4\u8F83","slug":"\u4E24\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u6570\u5B57\u6BD4\u8F83"},{"level":2,"title":"v-for \u548C $refs \u4F7F\u7528","slug":"v-for-\u548C-refs-\u4F7F\u7528"},{"level":2,"title":"flex\u5E03\u5C40\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u65E0\u6CD5\u5BF9\u9F50","slug":"flex\u5E03\u5C40\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u65E0\u6CD5\u5BF9\u9F50"}],"relativePath":"interview/\u5F00\u53D1\u4E2D\u78B0\u5230\u7684\u95EE\u9898\u96C6\u5408.md"}'),e={name:"interview/\u5F00\u53D1\u4E2D\u78B0\u5230\u7684\u95EE\u9898\u96C6\u5408.md"},p=l(`<h1 id="\u8BB0\u5F55\u5F00\u53D1\u4E2D\u9047\u5230\u7684\u95EE\u9898-\u9047\u5230\u7684\u5751" tabindex="-1">\u8BB0\u5F55\u5F00\u53D1\u4E2D\u9047\u5230\u7684\u95EE\u9898(\u9047\u5230\u7684\u5751) <a class="header-anchor" href="#\u8BB0\u5F55\u5F00\u53D1\u4E2D\u9047\u5230\u7684\u95EE\u9898-\u9047\u5230\u7684\u5751" aria-hidden="true">#</a></h1><h2 id="\u4E24\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u6570\u5B57\u6BD4\u8F83" tabindex="-1">\u4E24\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u6570\u5B57\u6BD4\u8F83 <a class="header-anchor" href="#\u4E24\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u6570\u5B57\u6BD4\u8F83" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//\u8FD9\u79CD\u6BD4\u8F83\u4E3AASCII\u7801\u6BD4\u8F83\uFF0C\u4F9D\u6B21\u53D6\u6BCF\u4E2A\u5B57\u7B26\uFF0C\u5B57\u7B26\u8F6C\u4E3AASCII\u7801\u8FDB\u884C\u6BD4\u8F83\uFF0CASCII\u7801\u5148\u5927\u7684\u5373\u4E3A\u5927\uFF1B+++</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u56E0\u4E3A\u7B2C\u4E00\u4E2A\u5B57\u7B261\u6BD42\u5C0F\u6240\u4EE5\u540E\u9762\u5C31\u4E0D\u7528\u8003\u8651\u4E86</span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">11</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//true</span></span>
<span class="line"></span></code></pre></div><h2 id="v-for-\u548C-refs-\u4F7F\u7528" tabindex="-1"><code>v-for</code> \u548C <code>$refs</code> \u4F7F\u7528 <a class="header-anchor" href="#v-for-\u548C-refs-\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u5F53 ref \u548C v-for \u4E00\u8D77\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u4F60\u5F97\u5230\u7684 ref \u5C06\u4F1A\u662F\u4E00\u4E2A\u5305\u542B\u4E86\u5BF9\u5E94\u6570\u636E\u6E90\u7684\u8FD9\u4E9B\u5B50\u7EC4\u4EF6\u7684\u6570\u7EC4</p><h2 id="flex\u5E03\u5C40\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u65E0\u6CD5\u5BF9\u9F50" tabindex="-1">flex\u5E03\u5C40\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u65E0\u6CD5\u5BF9\u9F50 <a class="header-anchor" href="#flex\u5E03\u5C40\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u65E0\u6CD5\u5BF9\u9F50" aria-hidden="true">#</a></h2><p>\u5982\u679C<code>box-list</code>\u4E2D\u7684\u5143\u7D20\u5982\u4E0B\u6392\u5217\uFF0C\u5143\u7D20\u4E0D\u8DB3\u7684\u8BDD\uFF0C\u6700\u540E\u4E00\u884C\u4F1A\u53C2\u5DEE\u4E0D\u9F50</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box-list</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">justify-content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">space-between</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* \u8FD9\u6837\u53EF\u4EE5\u8BA9\u4E09\u4E2A\u5143\u7D20\u7684\u884C\u8FDB\u884C\u5BF9\u9F50 */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box-list</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">after</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/*\u6BCF\u4E2A\u5143\u7D20\u7684\u5BBD\u5EA6*/</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* \u4E5F\u53EF\u4EE5\u5728box-list\u4E2D\u653E\u4E00\u4E9B\u7A7A\u6807\u7B7E\uFF0C\u4F46\u663E\u7136\u8FD9\u4E0D\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u65B9\u6848 */</span></span>
<span class="line"></span></code></pre></div><p>\u4F46\u662F\u5982\u679C\u4E0D\u662F\u4E09\u4E2A\u5143\u7D20\u7684\u60C5\u51B5\u4E0B\u8BE5\u5982\u4F55\u505A\u5462\uFF1F</p>`,9),o=[p];function t(c,r,i,D,y,F){return n(),a("div",null,o)}var f=s(e,[["render",t]]);export{C as __pageData,f as default};
