import{_ as e,c as t,ab as r,o as i}from"./chunks/framework.NClH_HG6.js";const o="/blog-site/imgs/image-20221031143509501.png",s="/blog-site/imgs/image-20221018154620652.png",l="/blog-site/imgs/image-20221018154700205.png",n="/blog-site/imgs/image-20221018154743999.png",b=JSON.parse('{"title":"微前端","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"minweb/微前端/1微前端的概念.md","filePath":"minweb/微前端/1微前端的概念.md"}'),p={name:"minweb/微前端/1微前端的概念.md"};function m(c,a,h,_,d,g){return i(),t("div",null,a[0]||(a[0]=[r('<h1 id="微前端" tabindex="-1">微前端 <a class="header-anchor" href="#微前端" aria-label="Permalink to &quot;微前端&quot;">​</a></h1><p>微前端是指存在于浏览器中的微服务，其借鉴了微服务的架构理念，将微服务的概念扩展到了前端。</p><p>如果对微服务的概念比较陌生的话，可以简单的理解为微前端就是将一个大型的前端应用拆分成多个模块，每个微前端模块可以由不同的团队进行管理，并可以自主选择框架，并且有自己的仓库，可以独立部署上线。</p><p>一般呢，微前端多应用于企业中的中后台项目中，因为企业内部的中后台项目存活时间都比较长，动辄三五年或者更多，最后演变成一个巨石应用的概率往往高于其他类型的 web 应用。这就带来了<strong>技术栈落后</strong>、<strong>编译部署慢</strong>两个问题。</p><img src="'+o+'" alt="image-20221031143509501" style="zoom:33%;"><p>我们以常见的电商平台举例，某家已经存活了 10 年的电商平台的后台管理系统由几个模块构成，包括商品管理、库存管理、物流管理等模块，但是因为历史原因，这个项目一开始用 jquery 编写的，因为本着能跑就行的原则，这 10 年期间业务上一直没有太大改动所以就延续了下来，直到今天还是用的 jquery 维护的。</p><p>有一天，刚入职的小明被叫到办公室，老板和他说我们公司要开展新的业务，要开展生鲜配送服务，并且答应他说这个业务做大后公司就可以上市，就升你为公司的 CTO，小明听了十分开心，想着自己马上就可以升职加薪迎娶白富美了，于是马上就打开某聘开始找简历招人了，但是跟人聊的时候一说要用 jquery 去写一个大型的后台系统的时候，很多人都放弃了，还遭到了候选人的讽刺：“都 2202 年了怎么还有人用 jquery”。小明这个时候才明白，大清已经亡了，jquery 早就已经没人用了。想到这，小明陷入了沉思，自己升职加薪的梦难到要破灭了吗。。。</p><p>这个时候，某聘上的一个候选人打来了电话，说他有一个好的方案可以不用 jquery 在原来的项目上堆积代码，而是将新的项目单独拿出来去写，并且实现独立部署，然后小明马上约了这个候选人当面聊聊。候选人到了公司跟小明聊了聊后，这时候小明才第一次听到微前端的这个概念，看着眼前的候选人，小明的眼眶都湿润了，于是当场就和他签了合同，给了每个月 2 千 8 的高薪，并且答应等业务做大以后就给他取个漂亮嫂子。听到这，候选人的眼眶也湿润了。。。</p><p>好了，故事讲完了，那么接下来我们来看看，微前端到底是怎么实现小明想要的功能呢？</p><ul><li><p>之前的项目架构</p><img src="'+s+'" alt="image-20221018154620652" style="zoom:50%;"></li><li><p>引入微前端后</p><img src="'+l+'" alt="image-20221018154700205" style="zoom:50%;"></li></ul><h2 id="微前端的好处" tabindex="-1">微前端的好处 <a class="header-anchor" href="#微前端的好处" aria-label="Permalink to &quot;微前端的好处&quot;">​</a></h2><h3 id="_1-团队自治" tabindex="-1">1. 团队自治 <a class="header-anchor" href="#_1-团队自治" aria-label="Permalink to &quot;1. 团队自治&quot;">​</a></h3><p>在公司里面，一般团队都是按照业务去划分的，在没有微前端的时候，如果几个团队维护一个项目肯定会遇到一些冲突，比如合并代码的冲突，上线时间的冲突等。应用了微前端之后，就可以将项目根据业务模块拆分成几个小的模块，每个模块都由不同的团队去维护，单独开发，单独部署上线，这样团队直接就能实现自治，减少甚至不会出现和其他团队冲突的情况。</p><h3 id="_2-兼容老项目" tabindex="-1">2. 兼容老项目 <a class="header-anchor" href="#_2-兼容老项目" aria-label="Permalink to &quot;2. 兼容老项目&quot;">​</a></h3><p>如果公司中有故事中存在的古老的 jquery 或者其他巨石项目的话，但是又不想用旧的技术栈去维护，选择使用微前端的方式去拆分项目是一个很好的选择。</p><h3 id="_3-跨技术栈" tabindex="-1">3. 跨技术栈 <a class="header-anchor" href="#_3-跨技术栈" aria-label="Permalink to &quot;3. 跨技术栈&quot;">​</a></h3><p>根据我们上面的例子，如果我们的微前端系统中需要新增一个业务模块时，只需要单独的新建一个项目，至于项目采用什么技术栈，完全可以由团队自己去定义，即使和其他模块用的不同的技术栈也不会有任何的问题</p><h3 id="_4-总结" tabindex="-1">4. 总结 <a class="header-anchor" href="#_4-总结" aria-label="Permalink to &quot;4. 总结&quot;">​</a></h3><img src="'+n+'" alt="image-20221018154743999" style="zoom:33%;">',19)]))}const q=e(p,[["render",m]]);export{b as __pageData,q as default};
