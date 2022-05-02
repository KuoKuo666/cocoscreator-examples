import { _decorator, Component, Graphics, Color, color } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GraphicsStroke')
export class GraphicsStroke extends Component {
    @property(Graphics) graphics: Graphics;

    start() {
        // 画个线
        this.strokeLine();
        // 点划线
        this.strokePointLine();
        this.strokeCircle();
        // 绘制曲线
        this.strokeBezier();
        // 不断的改变颜色
        this.strokeColorfulLines();
    }

    strokeLine() {
        // 红色的几种写法
        // this.graphics.strokeColor = Color.RED;
        // this.graphics.strokeColor = new Color().fromHEX('#FF0000');
        // this.graphics.strokeColor = new Color(255, 0, 0, 255);
        this.graphics.strokeColor = color(255, 0, 0, 255);
        this.graphics.lineWidth = 3;
        // 圆形线段末端
        this.graphics.lineCap = Graphics.LineCap.ROUND;
        // 移动起点
        this.graphics.moveTo(-300, 220);
        this.graphics.lineTo(-200, 220);
        // 把刚才的路径绘制出来
        this.graphics.stroke();
    }

    strokePointLine() {
        this.graphics.strokeColor = Color.GREEN;
        this.graphics.lineWidth = 2;
        for (let i = 0; i < 5; i++) {
            this.graphics.moveTo(20 + i * 30, 220);
            this.graphics.lineTo(40 + i * 30, 220);
        }
        this.graphics.stroke();
    }

    strokeCircle() {
        this.graphics.strokeColor = Color.YELLOW;
        this.graphics.lineWidth = 2;
        // 方形线段末端
        this.graphics.lineCap = Graphics.LineCap.SQUARE;
        // 矩形也写在这里了
        this.graphics.rect(250, 100, 100, 50);
        // 圆
        this.graphics.circle(-300, 100, 50);
        // 椭圆
        this.graphics.ellipse(-80, 100, 80, 40);
        // 部分圆，最后一个参数是绘制方向
        this.graphics.arc(100, 100, 50, 0, Math.PI, true);
        this.graphics.stroke();
    }

    strokeBezier() {
        this.graphics.strokeColor = Color.MAGENTA;
        this.graphics.lineWidth = 3;
        // 带 to 的 api 需要先 moveTo
        this.graphics.moveTo(-300, -100);
        // 注意是控制点的坐标，起点是 -300，-100，结束点 -50，-100
        this.graphics.quadraticCurveTo(-250, -200, -50, -100);

        // 上面是二次贝塞尔，下面是三次
        this.graphics.moveTo(0, -100);
        // 两个控制点 + 结束点
        this.graphics.bezierCurveTo(100, -200, 200, 0, 300, -100);
        this.graphics.stroke();
    }

    strokeColorfulLines() {
        // 只是演示颜色渐变效果，性能远没有 shader 好
        this.graphics.lineWidth = 1;
        for (let i = 0; i < 120; i++) {
            this.graphics.strokeColor = color(255, i * 2, i, 255);
            this.graphics.moveTo(-300, -200 - i * 0.5);
            this.graphics.lineTo(300, -200 - i * 0.5);
            this.graphics.stroke();
        }
    }
}
