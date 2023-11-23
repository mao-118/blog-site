# 小程序 canvas 绘制海报

```ts
import QR from "qrcode-base64";
import { DialogUtils } from "@bbkb/utils";
const dialogUtils = new DialogUtils();
interface IOptions {
  width: number;
  height: number;
  x: number;
  y: number;
  radius?: number;
  fillColor?: string;
}
class DrawImage {
  /**
   * canvas实例对象
   */
  ctx: UniNamespace.CanvasContext;
  constructor(name: string) {
    this.ctx = uni.createCanvasContext(name);
  }
  /**
   * 绘制二维码
   */
  drawQRCode(url: string, options: IOptions) {
    const { width, height, x, y } = options;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _self = this;
    return new Promise((resolve, reject) => {
      const imgData = QR.drawImg(url);
      const [, format, bodyData] =
        /data:image\/(\w+);base64,(.*)/.exec(imgData) || [];
      const arrayBuffer = uni.base64ToArrayBuffer(bodyData);
      const fsm = uni.getFileSystemManager();
      const FILE_BASE_NAME = "tmp_base64src";
      const filePath = `${wx.env.USER_DATA_PATH}/${FILE_BASE_NAME}.${format}`;
      fsm.writeFile({
        filePath,
        data: arrayBuffer,
        encoding: "binary",
        success(res) {
          _self.ctx.drawImage(filePath, x, y, width, height);
          resolve(res);
        },
        fail(error) {
          dialogUtils.showToast("写入资源失败");
          reject("写入资源失败");
        },
      });
    });
  }
  /**
   * 绘制矩形
   */
  drawRect(options: IOptions) {
    const { x, y, height, width, radius, fillColor } = options;
    // 构建矩形
    this.ctx.beginPath();
    this.ctx.rect(x, y, width, height);
    // 填充底色白色
    this.ctx.setFillStyle("transparent");
    this.ctx.fill();
    // 设置边框白色
    this.ctx.setStrokeStyle("transparent");
    this.ctx.stroke();
    this.ctx.closePath();
    // 绘制圆角
    this.fillRoundRect({ x, y, width, height });
  }
  /**
   * 绘制头图
   *  */
  drawHeadImage(url: string, options: IOptions) {
    const { x, y, width, height } = options;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _self = this;
    return new Promise((resolve, reject) => {
      uni.downloadFile({
        url,
        success(res) {
          _self.ctx.drawImage(res.tempFilePath, x, y, width, height);
          _self.fillRoundRect({
            x,
            y,
            width,
            height,
            fillColor: "transparent",
            strokeStyle: "#fff",
          });
          resolve(res.tempFilePath);
        },
        fail() {
          dialogUtils.showToast("绘制头图失败");
          reject("绘制头图失败");
        },
      });
    });
  }
  // 绘制商品文字,超出三行带省略号
  drawGoodsText(text: string) {
    this.ctx.setFillStyle("#000");
    // 截取三行，前两行9个字符，第三行6个字符，第三行文本超出省略号
    this.ctx.font = "normal bold 16px PingFangSC-Regular, PingFang SC";
    text.substring(0, 9) && this.ctx.fillText(text.substring(0, 9), 10, 305);
    text.substring(9, 18) && this.ctx.fillText(text.substring(9, 18), 10, 330);
    text.substring(18, 24).length &&
      this.ctx.fillText(
        text.length > 26
          ? text.substring(18, 24) + "..."
          : text.substring(18, 24),
        10,
        355
      );
  }

  /**
   * 绘制圆角
   * @param x 圆形的x坐标
   * @param y 圆形的y坐标
   * @param width 圆形的宽度
   * @param height 圆形的高度
   * @param radius 圆角
   * @param fillColor 颜色
   */
  fillRoundRect(options: IOptions & { strokeStyle?: string }) {
    const {
      x,
      y,
      width,
      height,
      radius = 8,
      fillColor = "#fff",
      strokeStyle = "transparent",
    } = options;
    this.ctx.beginPath(); //开始绘制路径
    this.ctx.lineWidth = 5; //边框大小
    // 起始点:moveTo(x,y) 二次贝塞尔曲线:quadraticCurveTo('控制点x','控制点y','结束点x','结束点y') 结束点:lineTo(x,y) ;
    this.ctx.moveTo(x + radius, y);
    this.ctx.lineTo(x + width - radius, y);
    this.ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    this.ctx.lineTo(x + width, y + height - radius);
    this.ctx.quadraticCurveTo(
      x + width,
      y + height,
      x + width - radius,
      y + height
    );
    this.ctx.lineTo(x + radius, y + height);
    this.ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    this.ctx.lineTo(x, y + radius);
    this.ctx.quadraticCurveTo(x, y, x + radius, y);
    this.ctx.fillStyle = fillColor; //为圆角矩形填充颜色
    this.ctx.strokeStyle = strokeStyle; //矩形边框颜色
    this.ctx.closePath(); //闭合绘制的路径
    this.ctx.fill(); //填充当前的路径,默认颜色是黑色
    this.ctx.stroke(); //绘制确切的路径
  }
  /**
   * 绘制文字
   */
  drawText(
    options: { text: string; size?: number; color?: string } & Pick<
      IOptions,
      "x" | "y"
    >
  ) {
    const { text, size = 12, color = "#000", x, y } = options;
    this.ctx.setFontSize(size);
    this.ctx.setFillStyle(color);
    this.ctx.fillText(text, x, y);
  }
  /**
   * 绘制线条
   *
   */
  drawLine(options: {
    width?: number;
    mx: number;
    my: number;
    lx: number;
    ly: number;
  }) {
    const { width = 1, mx, my, lx, ly } = options;
    this.ctx.beginPath();
    this.ctx.restore();
    this.ctx.setLineWidth(width);
    this.ctx.moveTo(mx, my);
    this.ctx.lineTo(lx, ly);
    this.ctx.stroke();
    this.ctx.closePath();
  }
}

export default DrawImage;
```
