
import { _decorator, Component, Node, tween, v3, director, Label } from 'cc';
const { ccclass, property } = _decorator;
 
@ccclass('TweenSpeed')
export class TweenSpeed extends Component {

    @property(Node) cocos1: Node;
    @property(Label) label: Label;

    speedFlag = true;
    // 缓存 director 的 tick 方法
    oldTick = director.tick;

    start() {
        // 重写 tick 方法
        director.tick = (dt: number) => {
            this.oldTick.call(director, dt * (this.speedFlag ? 1 : 0.33));
        }

        tween(this.cocos1)
            .to(1.5, { position: v3(250, 100, 0) })
            .to(1.5, { position: v3(-250, 100, 0) })
            .union()
            .repeatForever()
            .start();

        this.label.string = '当前为正常速度，物体 3 秒往复运动'
        // 当用修改 dt 的方式进入慢动作后，实际累计时间也会变慢，慢动作下的 3 秒实际会是 9 秒
        // 想计时器不受 dt 控制，可以用 setInterval
        this.schedule(() => {
            // 在 1 和 0.33 之间切换
            this.speedFlag = !this.speedFlag;
            if (this.speedFlag) {
                this.label.string = '当前为正常速度，物体 3 秒往复运动'
            } else {
                this.label.string = '当前为正常的 0.33 倍速度，游戏中所有 dt 数值受到影响'
            }
        }, 3);
    }

    onDestroy() {
        director.tick = this.oldTick;
    }
}
