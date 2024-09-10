import{_ as a,c as i,ab as t,o as h}from"./chunks/framework.NClH_HG6.js";const e="/blog-site/assets/list.C-yYL3L4.png",r=JSON.parse('{"title":"git stash","description":"","frontmatter":{},"headers":[],"relativePath":"version-manage/1git/2stash详解.md","filePath":"version-manage/1git/2stash详解.md"}'),p={name:"version-manage/1git/2stash详解.md"};function n(l,s,d,o,k,c){return h(),i("div",null,s[0]||(s[0]=[t('<h1 id="git-stash" tabindex="-1">git stash <a class="header-anchor" href="#git-stash" aria-label="Permalink to &quot;git stash&quot;">​</a></h1><p>什么？居然还有人不知道 <code>git stash</code>，这么好用的东西还有人不会，我不允许！！！</p><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p><code>git</code> 是日常开发中版本控制必不可少的工具，当遇到代码重构或者临时恢复时，<code>git stash</code> 的隐藏功能非常好用，其主要应用于下述场景：</p><p>上线功能开发中需要切换分支或者切回老版本，但是不想 commit 和丢弃当前改动，执行 <code>git stash</code> 功能会将当前改动存储至后台，当需要恢复时，执行 <code>git stash pop</code> 即可，可以理解为一个保存栈。</p><h2 id="git-stash-1" tabindex="-1">git stash <a class="header-anchor" href="#git-stash-1" aria-label="Permalink to &quot;git stash&quot;">​</a></h2><p>将当前的改动保存下来，默认保存是没有标识的。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span></span></code></pre></div><h2 id="git-stash-save-info" tabindex="-1">git stash save $info <a class="header-anchor" href="#git-stash-save-info" aria-label="Permalink to &quot;git stash save $info&quot;">​</a></h2><p><code>$info</code> 填写备注标识，这样就可以明确的知道每次隐藏的是什么内容。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> save</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;更改了用户信息&#39;</span></span></code></pre></div><h2 id="git-stash-list" tabindex="-1">git stash list <a class="header-anchor" href="#git-stash-list" aria-label="Permalink to &quot;git stash list&quot;">​</a></h2><p>查看所有隐藏的记录</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span></code></pre></div><p>列举如下： <img src="'+e+`" alt="图片"></p><h2 id="git-stash-pop" tabindex="-1">git stash pop <a class="header-anchor" href="#git-stash-pop" aria-label="Permalink to &quot;git stash pop&quot;">​</a></h2><p>弹出最新 <code>stash</code> 的内容，并删除该 <code>stash</code>，类似于栈的 <code>pop</code> 即弹出并删除</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 取出最新的一条</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pop</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 也可以根据编号来弹出</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pop</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span></code></pre></div><h2 id="git-stash-apply" tabindex="-1">git stash apply <a class="header-anchor" href="#git-stash-apply" aria-label="Permalink to &quot;git stash apply&quot;">​</a></h2><p>弹出最新 <code>stash</code> 的内容，和<code>pop</code>不同的是它不会删除该 <code>stash</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 取出最新的一条</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apply</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 也可以根据编号来弹出</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apply</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span></code></pre></div><h2 id="git-stash-show" tabindex="-1">git stash show <a class="header-anchor" href="#git-stash-show" aria-label="Permalink to &quot;git stash show&quot;">​</a></h2><p>显示当前最新 <code>stash</code> 的改动，主要是恢复 <code>stash</code> 前可以看到修改内容，如果忘了 <code>stash</code> 了什么内容可以使用</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看最新的一条改动</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看指定的某条改动</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span></span></code></pre></div><h2 id="git-stash-drop" tabindex="-1">git stash drop <a class="header-anchor" href="#git-stash-drop" aria-label="Permalink to &quot;git stash drop&quot;">​</a></h2><p>删除 <code>stash</code> 记录</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除最新的一条改动</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> drop</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除指定的某条改动</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> drop</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span></code></pre></div><h2 id="git-stash-clear" tabindex="-1">git stash clear <a class="header-anchor" href="#git-stash-clear" aria-label="Permalink to &quot;git stash clear&quot;">​</a></h2><p>删除所有 <code>stash</code> 记录</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clear</span></span></code></pre></div><h2 id="友情提示" tabindex="-1">友情提示 <a class="header-anchor" href="#友情提示" aria-label="Permalink to &quot;友情提示&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>使用 <code>git stash</code> 必须先进行 <code>git add</code> 操作</li><li>如果使用<code>git stash</code>有冲突, <code>git stash pop</code> 之后的那条记录还是会存在</li></ul></div>`,32)]))}const F=a(p,[["render",n]]);export{r as __pageData,F as default};
