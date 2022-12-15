# vue 中使用 mp4 格式播放视频动效

使用 vue 开发 h5 时，可能会碰到很多动效，这些动效可以通过 webp、gif、apng 等来实现，

但是通过图片文件的格式播放出来的效果可能会出现模糊，达不到预期的效果

这时我们不得不使用 mp4 格式来进行播放，以下提供两种适配 mp4 格式的方法

## Vap

VAP 是企鹅电竞实现融合礼物特效的组件，将图片/文字与原始 mp4 视频融合在一起，支持透明度，项目详细介绍请参考 [VAP](https://github.com/Tencent/vap)

## 1. 安装

```js
npm i video-animation-player
```

## 2. 创建实例

```js
import Vap from "video-animation-player";
// init
let vap = new Vap(options);
```

## 3. 实例方法

```
# 实例方法
1、on(): 绑定h5 video事件或者自定义事件(frame： 接收当前帧和播放时间戳)  如on('playering', function() {// do some thing})
2、destroy()：销毁实例，清除video、canvas等
3、pause()：暂停播放
4、play()：继续播放
5、setTime(s)：设置播放时间点(单位秒)
```

## 4. 实例参数

| 参数名          |                                           含义                                           | 默认值    |
| --------------- | :--------------------------------------------------------------------------------------: | --------- |
| container       |                                         dom 容器                                         | null      |
| src             |                                       mp4 视频地址                                       | ''        |
| config          |                    配置 json 对象(需要提供视频的同事提供该 json 文件)                    | null      |
| width           |                                           宽度                                           | 375       |
| height          |                                           高度                                           | 375       |
| fps             |                       动画帧数（生成素材时在工具中填写的 fps 值）                        | 20        |
| mute            |                                      是否对视频静音                                      | false     |
| loop            |                                       是否循环播放                                       | false     |
| type            | 组件基于 type 字段做了实例化缓存，不同的 VAP 实例应该使用不同的 type 值（如 0、1、2 等） | undefined |
| beginPoint      |                      起始播放时间点(单位秒),在一些浏览器中可能无效                       | 0         |
| accurate        | 是否启用精准模式（使用 requestVideoFrameCallback 提升融合效果，浏览器不兼容时自动降级）  | false     |
| precache        |                        是否预加载视频资源（默认关闭，即边下边播）                        | false     |
| onDestory       |                                      组件销毁时回调                                      | undefined |
| onLoadError     |                                       加载失败回调                                       | undefined |
| ext（无固定名） |                          融合参数（和 json 配置文件中保持一致）                          | ''        |

## 5. 实现原理

使用 webgl texture 获取 video 和图片/文字的纹理，并在 shader 中进行自定义融合

## 6. 例子

```js
import Vap from "video-animation-player";
import config from "./demo.json";

export default {
  name: "vap",
  data() {
    return {
      url: require("./demo.mp4"),
      vap: null,
    };
  },
  methods: {
    play(flag) {
      const that = this;
      this.vap = new Vap()
        .play(
          Object.assign(
            {},
            {
              container: this.$refs.anim,
              // 素材视频链接
              src: this.url,
              // 素材配置json对象
              config: config,
              width: 900,
              height: 400,
              // 同素材生成工具中配置的保持一致
              fps: 20,
              // 是否循环
              loop: false,
              // 起始播放时间点
              beginPoint: 0,
              // 精准模式
              accurate: true,
              // 播放起始时间点(秒)
            },
            {
              // 融合信息（图片/文字）,同素材生成工具生成的配置文件中的srcTag所对应，比如[imgUser] => imgUser
              imgUser:
                "//shp.qlogo.cn/pghead/Q3auHgzwzM6TmnCKHzBcyxVPEJ5t4Ria7H18tYJyM40c/0",
              imgAnchor:
                "//shp.qlogo.cn/pghead/PiajxSqBRaEKRa1v87G8wh37GibiaosmfU334GBWgk7aC8/140",
              textUser: "user1",
              textAnchor: "user2",
              type: 2,
            },
            { type: 1 }
          )
        )
        .on("playing", () => {
          console.log("playing");
        })
        .on("ended", () => {
          this.vap = null;
          console.log("play ended");
        })
        .on("frame", (frame, timestamp) => {
          // frame: 当前帧(从0开始)  timestamp: (播放时间戳)
          if (frame === 50) {
            // do something
          }
          console.log(frame, "-------", timestamp);
        });
      window.vap = this.vap;
    },
    pause() {
      this.vap.pause();
    },
    playContinue() {
      this.vap.play();
    },
  },
};
```

## HTML video

使用 HTML 原始的 video 标签，但是该标签直接使用在手机上面会出现自动全屏或者出现工具条白边等情况

所以我们需要处理 video 标签所带来的问题，让其在手机上面可以正常播放即可

## 1. video 添加属性

```vue
<template>
  <video
    v-if="show"
    id="VideoDom"
    poster="../assets/001.png"
    preload="auto"
    webkit-playsinline="webkit-playsinline"
    playsinline="true"
    x5-playsinline="x5-playsinline"
    x5-video-player-type="h5"
    x5-video-player-fullscreen="x5-video-player-fullscreen"
    muted="true"
    src="../assets/entry.mp4"
  ></video>
</template>

<script setup>
const show = ref(false);
onMounted(() => {
  show.value = true;
  nextTick(() => {
    // 获取实例
    const VideoDom = document.getElementById("VideoDom");
    // 300ms播放
    setTimeout(() => VideoDom.play(), 300);
    // 播放结束事件
    VideoDom.onended = endVideo;
  });
});
const endVideo = () => {
  show.value = false;
};
</script>

<style>
#VideoDom {
  width: 100%;
  height: 100%;
  object-fit: cover; // 铺满
  background-color: #000;
}
</style>
```

## 2. 属性介绍

| 属性                              |                              含义                              |
| --------------------------------- | :------------------------------------------------------------: |
| autoplay                          |            如果出现该属性，则视频在就绪后马上播放。            |
| controls                          |         如果出现该属性，则向用户显示控件，比如播放按钮         |
| loop                              |                            循环播放                            |
| poster="url"                      |                           视频封面图                           |
| preload="auto"                    |                    视频在页面加载时进行加载                    |
| muted="true"                      |                          静音播放属性                          |
| webkit-playsinline="true"         |               防止默认转到 HTML5 视频的全屏行为                |
| playsinline="true"                |          防止微信浏览器默认转到 HTML5 视频的全屏行为           |
| x-webkit-airplay="allow"          |                使此视频支持 ios 的 AirPlay 功能                |
| x5-video-player-type="h5"         |              启用 H5 播放器,是 wechat 安卓版特性               |
| x5-video-player-fullscreen="true" |                全屏设置，设置为 true 是防止横屏                |
| x5-video-orientation="portraint"  | 播放器支付的方向，landscape 横屏，portraint 竖屏，默认值为竖屏 |

## 总结

1. Vap 生成的视频在部分机型上面可能会有点卡顿问题（严重的情况可能视频无法播放），这或许和视频本身帧率有关联
2. 使用 video 标签，支持 video 标签的浏览器都可以播放，视频帧率也需要调试，不可太大，否则会出现视频卡顿或者无法播放等错误

::: tip

1. 如果视频出现资源问题，那么可能是视频太大导致，可以使用一倍视频进行尝试
2. 根据手机不同，视频可能会出现一点卡顿情况
3. 苹果手机可能会出现视频卡第一帧现象，需要等待一会才可以正常播放(暂无完美解决方案)
   :::
