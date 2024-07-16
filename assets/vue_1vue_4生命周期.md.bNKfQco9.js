import{_ as t,c as e,o as d,ac as a}from"./chunks/framework.DfhY12bu.js";const r="/blog-site/assets/Snipaste_2023-05-20_22-38-40.N5OGwF4_.png",f=JSON.parse('{"title":"生命周期","description":"","frontmatter":{},"headers":[],"relativePath":"vue/1vue/4生命周期.md","filePath":"vue/1vue/4生命周期.md"}'),o={name:"vue/1vue/4生命周期.md"},s=a('<h1 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h1><p>生命周期（Life Cycle）是指一个组件从创建 -&gt; 运行 -&gt; 销毁的整个阶段，强调的是一个时间段。</p><p>生命周期函数：是由 vue 框架提供的内置函数，会伴随着组件的生命周期，自动按次序执行。</p><p>注意：生命周期强调的是时间段，生命周期函数强调的是时间点。 <img src="'+r+'" alt="图片"></p><h2 id="常用的钩子函数" tabindex="-1">常用的钩子函数 <a class="header-anchor" href="#常用的钩子函数" aria-label="Permalink to &quot;常用的钩子函数&quot;">​</a></h2><table tabindex="0"><thead><tr><th>beforeCreate</th><th>在实例初始化之后，数据观测和事件配置之前被调用 此时data 和 methods 以及页面的DOM结构都没有初始化 什么都做不了</th></tr></thead><tbody><tr><td>created</td><td>在实例创建完成后被立即调用此时data 和 methods已经可以使用 但是页面还没有渲染出来</td></tr><tr><td>beforeMount</td><td>在挂载开始之前被调用 此时页面上还看不到真实数据 只是一个模板页面而已</td></tr><tr><td>mounted</td><td>el被新创建的vm.$el替换，并挂载到实例上去之后调用该钩子。 数据已经真实渲染到页面上 在这个钩子函数里面我们可以使用一些第三方的插件</td></tr><tr><td>beforeUpdate</td><td>数据更新时调用，发生在虚拟DOM打补丁之前。 页面上数据还是旧的</td></tr><tr><td>updated</td><td>由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子。 页面上数据已经替换成最新的</td></tr><tr><td>beforeDestroy</td><td>实例销毁之前调用</td></tr><tr><td>destroyed</td><td>实例销毁后调用</td></tr></tbody></table>',6),_=[s];function n(c,i,h,l,p,u){return d(),e("div",null,_)}const b=t(o,[["render",n]]);export{f as __pageData,b as default};
