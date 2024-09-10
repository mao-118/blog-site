import{_ as a,c as n,ab as i,o as l}from"./chunks/framework.NClH_HG6.js";const o=JSON.parse('{"title":"nvm的使用","description":"","frontmatter":{},"headers":[],"relativePath":"blog/nvm的使用.md","filePath":"blog/nvm的使用.md"}'),p={name:"blog/nvm的使用.md"};function e(t,s,h,k,d,c){return l(),n("div",null,s[0]||(s[0]=[i(`<h1 id="nvm的使用" tabindex="-1">nvm的使用 <a class="header-anchor" href="#nvm的使用" aria-label="Permalink to &quot;nvm的使用&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ol><li><a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noreferrer">下载地址</a></li></ol><p><img src="https://img-blog.csdnimg.cn/1bb6b5e17e4945768ae430e76c6c4030.png" alt=""></p><ol start="2"><li><p>解压安装完成后,默认安装在C盘,如果想安装在D盘.可选择相对应的安装路径,一般推荐安装默认路径就好,安装过程中,如出现该电脑已存在某个node版本,是否管理,请选择是。 <img src="https://img-blog.csdnimg.cn/0e66354555574642a83ef19ccb966ddf.png" alt=""></p></li><li><p>如要更改环境变量,可根据以下的两个变量进行值修改,一般不推荐更改环境变量,上一步采用默认可忽略此步 <img src="https://img-blog.csdnimg.cn/9d5c4b81d4564b7fbcf531abc8d5c82b.png" alt=""> NVM_HOME应为nvm的安装目录，D:\\SoftWare\\nvm\\nvm NVM_SYMLINK应为nvm的安装目录加&quot;\\nodejs&quot;，注意用户变量和系统变量都需要更改，然后确定-确定-确定。如下图是我安装的目录： D:\\SoftWare\\nvm\\nvm\\nodejs</p></li><li><p>查看安装版本是否成功,出现版本号表示已经安装成功</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>nvm -v</span></span></code></pre></div><p><img src="https://img-blog.csdnimg.cn/ed5e2d989d1c4a3e92b40d0bf6910b40.png" alt=""></p><ol start="5"><li>在nvm的安装路径下,一定要在setting文件中加入下面两行代码,替换为淘宝镜像,否则会非常的慢 <img src="https://img-blog.csdnimg.cn/cf6dc1f2ad56452db2d4c7ee3c579285.png" alt=""></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>node_mirror: https://npm.taobao.org/mirrors/node/</span></span>
<span class="line"><span>npm_mirror: https://npm.taobao.org/mirrors/npm/</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">tip:</p><p>如果使用命令窗口的时候报错,可采用重启或者以管理员身份运行进行解决</p></div><h2 id="nvm命令" tabindex="-1">nvm命令 <a class="header-anchor" href="#nvm命令" aria-label="Permalink to &quot;nvm命令&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//查看版本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nvm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//显示所有可下载的版本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nvm list available</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//安装指定版本 node</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nvm install </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18.9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//卸载指定版本node</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nvm uninstall </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">14.17</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//列出所有已安装的 node 版本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nvm ls</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//或</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nvm list </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//切换到指定版本 node</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nvm use [node版本号]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//列出所有远程服务器的版本（官方node version list）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nvm ls</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//安装最新版 node</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nvm install stable </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//当前 node 版本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nvm current</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//给不同的版本号添加别名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nvm alias [别名] [node版本号] </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//删除已定义的别名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nvm unalias [别名] </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//设置默认版本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nvm alias </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [node版本号]</span></span></code></pre></div>`,12)]))}const g=a(p,[["render",e]]);export{o as __pageData,g as default};
