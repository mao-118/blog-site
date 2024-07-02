# 小程序 canvas 绘制海报

`qrcode-base64` 用来将二维码生成 base64

```ts
import QRCodeUtils from "qrcode-base64";
import { DialogUtils } from "@bbkb/utils";
const dialogUtils = new DialogUtils();
export const ShareCanvasUtil = {
  headImageUrl: "",
  productName: "",
  priceText: "",
  codeUrl: "",
  drawGoodsSharePic(ctx: UniNamespace.CanvasContext) {
    ctx.save();
    ctx.beginPath(); //开始绘制
    ctx.rect(0, 0, 280, 400);
    ctx.setFillStyle("#fff");
    ctx.fill();
    ctx.restore();
    ctx.beginPath(); //开始绘制
    ctx.setFontSize(13);
    ctx.setFillStyle("#fff");
    ctx.setTextAlign("center");
    ctx.setFontSize(16);
    return new Promise((resolve) => {
      this.setProductName(ctx);
      this.setPicUrl(ctx).then(() => resolve("")); //绘制头图
    });
  },
  setPicUrl(ctx: UniNamespace.CanvasContext) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    const avatarurl_width = 250; //绘制的头图宽度
    const avatarurl_heigth = 250; //绘制的头图高度
    const avatarurl_x = 13; //绘制的头像在画布上的位置
    const avatarurl_y = 13; //绘制的头像在画布上的位置
    return new Promise((resolve) => {
      uni.downloadFile({
        url: this.headImageUrl,
        success: function (res) {
          ctx.save();
          ctx.drawImage(
            res.tempFilePath,
            avatarurl_x,
            avatarurl_y,
            avatarurl_width,
            avatarurl_heigth
          );
          self.setQrcode(ctx).then(() => resolve(""));
        },
        fail: () => {
          dialogUtils.hideLoading();
        },
      });
    });
  },
  setQrcode(ctx: UniNamespace.CanvasContext) {
    console.log("codeUrl", this.codeUrl);
    const qrCodeImg = QRCodeUtils.drawImg(this.codeUrl, {
      typeNumber: 2,
      errorCorrectLevel: "M",
      size: 150,
    });
    ctx.setFontSize(12);
    ctx.setFillStyle("#999");
    ctx.setTextAlign("left");
    ctx.fillText("长按识别或扫码查看", 160, 390);
    ctx.setStrokeStyle("#fff");
    ctx.stroke();
    ctx.restore();

    return new Promise((resolve) => {
      this.base64src(qrCodeImg).then((res) => {
        uni.getImageInfo({
          src: res as string,
          success(pic) {
            ctx.drawImage(pic.path, 168, 283, 90, 90);
            //输出根据像素比提高清晰度
            ctx.draw(false, () => {
              console.log("绘制成功");
              setTimeout(() => {
                resolve("");
              }, 50);
            });
          },
          fail(err) {
            dialogUtils.hideLoading();
            console.error(err);
          },
        });
      });
    });
  },
  base64src(base64data: string) {
    const fsm = uni.getFileSystemManager();
    const FILE_BASE_NAME = `tmp_base64src${new Date().getTime()}`;
    return new Promise((resolve, reject) => {
      const [, format, bodyData] =
        /data:image\/(\w+);base64,(.*)/.exec(base64data) || [];
      if (!format) {
        reject(new Error("ERROR_BASE64SRC_PARSE"));
      }
      const filePath = `${uni.env.USER_DATA_PATH}/${FILE_BASE_NAME}.${format}`;
      const buffer = uni.base64ToArrayBuffer(bodyData);
      fsm.writeFile({
        filePath,
        data: buffer,
        encoding: "binary",
        success() {
          resolve(filePath);
        },
        fail() {
          dialogUtils.hideLoading();
          reject(new Error("ERROR_BASE64SRC_WRITE"));
        },
      });
    });
  },
  setProductName(ctx: UniNamespace.CanvasContext) {
    let letter = this.productName;
    const letterArr = [];
    if (letter.length > 24) {
      letter = letter.substr(0, 24);
    }
    for (let i = 0; i < letter.length; i += 8) {
      letterArr.push(letter.substr(0 + i, 8));
    }
    if (letterArr.length == 3) {
      letterArr[2] = letterArr[2].substr(0, 7) + "...";
    }
    ctx.setFontSize(17);
    ctx.setFillStyle("#333");
    ctx.setTextAlign("left");
    letterArr.forEach((line, index) => {
      ctx.fillText(line, 13, 300 + index * 28);
    });
    ctx.stroke();
    ctx.restore();
    this.setPrice(ctx, letterArr.length);
  },
  setPrice(ctx: UniNamespace.CanvasContext, nameLineNum: number) {
    ctx.setFontSize(19);
    ctx.setFillStyle("#ff8400");
    ctx.setTextAlign("left");
    const dy = 300 + 28 * nameLineNum + 6;
    ctx.fillText("￥" + this.priceText, 13, dy);
    ctx.setStrokeStyle("#fff");
    ctx.stroke();
    ctx.restore();
  },
};
```

## 使用

```ts
import { ShareCanvasUtil } from "./share.canvas";
ShareCanvasUtil.codeUrl = "https://www.baidu.com/";
ShareCanvasUtil.productName = "测试商品";
ShareCanvasUtil.headImageUrl = "https://123.png";
uni.showLoading({
  title: "图片生成中...",
  mask: true,
});
ShareCanvasUtil.drawGoodsSharePic(ctx)
  .then(() => {
    const sys = uni.getSystemInfoSync();
    uni.canvasToTempFilePath({
      canvasId: "shareCanvas",
      fileType: "jpg",
      quality: 1,
      destWidth: 280 * sys.pixelRatio,
      destHeight: 400 * sys.pixelRatio,
      success: (res) => {
        // 获得图片临时路径
        console.log("imageTempPath", res.tempFilePath);
        // 该路径可以调用 uni.saveImageToPhotosAlbum 将图片进行保存
      },
    });
  })
  .finally(() => {
    uni.hideLoading();
  });
```
