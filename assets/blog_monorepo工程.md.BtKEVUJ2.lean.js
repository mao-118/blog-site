import{_ as i,c as a,ab as n,o as p}from"./chunks/framework.NClH_HG6.js";const l="/blog-site/imgs/Snipaste_2023-11-23_15-37-18.png",c=JSON.parse('{"title":"Monorepo 工程","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"blog/monorepo工程.md","filePath":"blog/monorepo工程.md"}'),e={name:"blog/monorepo工程.md"};function h(t,s,k,o,d,r){return p(),a("div",null,s[0]||(s[0]=[n('<h1 id="monorepo-工程" tabindex="-1">Monorepo 工程 <a class="header-anchor" href="#monorepo-工程" aria-label="Permalink to &quot;Monorepo 工程&quot;">​</a></h1><p><code>Monorepo</code> 是一种项目代码管理方式，指单个仓库中管理多个项目，有助于简化代码共享、版本控制、构建和部署等方面的复杂性，并提供更好的可重用性和协作性。</p><p><code>Monorepo</code> 提倡了开放、透明、共享的组织文化，这种方法已经被很多大型公司广泛使用，如 <code>Google</code>、<code>Facebook</code> 和 <code>Microsoft</code> 等。</p><p>通俗解释：</p><ul><li>以往我们的项目大多都是单仓库、单项目的形式，<code>Monorepo</code> 简单来说就是单仓库、多项目的形式。</li><li>我们可以将公共的代码放到<code>Monorepo</code>工程中，也方便其他项目的引用和后期的维护迭代</li><li>我们可以把多个项目使用到的依赖统一安装到<code>Monorepo</code>工程到根目录中，子项目都可以进行使用</li></ul><h2 id="对比" tabindex="-1">对比 <a class="header-anchor" href="#对比" aria-label="Permalink to &quot;对比&quot;">​</a></h2><p><img src="'+l+`" alt="图片"></p><h2 id="pnpm" tabindex="-1">pnpm <a class="header-anchor" href="#pnpm" aria-label="Permalink to &quot;pnpm&quot;">​</a></h2><p>pnpm 的特点：快速、高效利用磁盘空间。</p><p>它将 workspace 的所有依赖都下载到.pnpm 目录下，然后再根据各个 package 的情况，在其目录下通过软连接方式将依赖添加进来，这样所有的依赖只需要下载一次，那么不仅快，而且磁盘体积也小</p><p>而且它原生 cli 支持基本的 workspace 管理，这也是我对比下来选择 pnpm 的原因</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 全局安装pnpm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span></span></code></pre></div><h2 id="创建-monorepo-工程" tabindex="-1">创建 monorepo 工程 <a class="header-anchor" href="#创建-monorepo-工程" aria-label="Permalink to &quot;创建 monorepo 工程&quot;">​</a></h2><h3 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to &quot;初始化&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 初始化pnpm项目</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><h3 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libs</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 存放项目核心库，如工具类或者ui组件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> core</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm-lock.yaml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ui</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm-lock.yaml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> utils</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm-lock.yaml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> projects</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 存放项目</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> demo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm-lock.yaml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm-lock.yaml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm-workspace.yaml</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 统一关联所有项目</span></span></code></pre></div><h3 id="利用-workspace-关联项目" tabindex="-1">利用 workspace 关联项目 <a class="header-anchor" href="#利用-workspace-关联项目" aria-label="Permalink to &quot;利用 workspace 关联项目&quot;">​</a></h3><ul><li>首先将每个项目里面的 package.json 的 name 改为项目名</li><li>然后在 pnpm-workspace.yaml 中添加项目名</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># pnpm-workspace.yaml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">packages:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;libs/**&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;projects/**&quot;</span></span></code></pre></div><p>完成以上两步，我们就可以使用<code>pnpm</code>方便快捷的操作对应的子项目了</p><h3 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h3><ul><li>通过 <code>pnpm-workspace.yaml</code>进行了项目管理, 我们只需要在根目录下面执行 <code>pnpm i</code> ， 这样所有的子项目即可全部安装依赖。</li><li>如果需要指定安装某个项目的依赖，可以单独执行 <code>pnpm i -F &lt;project-name&gt;</code></li></ul><h3 id="项目之间的引用" tabindex="-1">项目之间的引用 <a class="header-anchor" href="#项目之间的引用" aria-label="Permalink to &quot;项目之间的引用&quot;">​</a></h3><p>比如我们的<code>demo</code>项目需要使用到<code>/libs/utils</code>里面的方法，</p><p>这时我们只需要执行 <code>pnpm i &lt;utils-name&gt; -F &lt;project-name&gt;</code>,</p><p>这样我们的<code>demo</code>工程多了一个<code>utils</code>的依赖，就可以直接使用<code>utils</code>里面的方法了</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;dependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // * 代表默认同步最新版本，正常安装完应该是 ^1.0.0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 即使是该依赖中的代码变更了，也无需重新安装</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;@libs/core&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;workspace:*&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,28)]))}const g=i(e,[["render",h]]);export{c as __pageData,g as default};
