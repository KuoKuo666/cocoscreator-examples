
import { _decorator, Component, Node, Graphics, EventTouch, UITransform, v3, Color, tween } from 'cc';
const { ccclass, property } = _decorator;
 
@ccclass('GraphicsDynamic')
export class GraphicsDynamic extends Component {
    // 演示动态的绘图
    @property(Graphics) graphics1: Graphics;
    // 用来绘制鼠标在屏幕上涂画
    @property(Graphics) graphics2: Graphics;

    // 利用 time 进行 graphics1 动态绘制
    time = 0;

    start() {
        this.graphics1Init();
        this.graphics2TouchDraw();
    }

    graphics1Init() {
        this.graphics1.lineWidth = 4;
        this.graphics1.lineJoin = Graphics.LineJoin.ROUND;
        this.graphics1.strokeColor = Color.WHITE;
    }

    // 根据参数每帧 clear 重新绘制
    draw() {
        this.graphics1.clear();
        const drawLine = (time: number) => {
            this.graphics1.moveTo(-300, Math.sin(time) * 50);
            for (let i = 1; i < 100; i++) {
                // 让曲线按时间进行 sin 分布
                const y = Math.sin(time + i / 10) * 50;
                this.graphics1.lineTo(-300 + i * 6, y);
            }
            this.graphics1.stroke();
        }
        drawLine(this.time);
        drawLine(this.time + 4);
        drawLine(this.time + 8);
    }

    graphics2TouchDraw() {
        this.graphics2.lineWidth = 5;
        this.graphics2.strokeColor = Color.BLUE;
        // 连线方式
        this.graphics2.lineCap = Graphics.LineCap.ROUND;
        this.graphics2.lineJoin = Graphics.LineJoin.ROUND;

        this.graphics2.node.on(Node.EventType.TOUCH_START, (event: EventTouch) => {
            const pos = event.getUILocation();
            const out = this.node.getComponent(UITransform).convertToNodeSpaceAR(v3(pos.x, pos.y, 0));
            this.graphics2.moveTo(out.x, out.y);
        });
        this.graphics2.node.on(Node.EventType.TOUCH_MOVE, (event: EventTouch) => {
            const pos = event.getUILocation();
            const out = this.node.getComponent(UITransform).convertToNodeSpaceAR(v3(pos.x, pos.y, 0));
            this.graphics2.lineTo(out.x, out.y);
            this.graphics2.stroke();
            this.graphics2.moveTo(out.x, out.y);
        });
    }

    clearGraphics2() {
        this.graphics2.clear();
    }

    update(dt: number) {
        this.time += dt;
        this.draw();
    }
}
