import { _decorator, Component, Node, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NodePosition')
export class NodePosition extends Component {
    @property(Node) cocos1: Node;
    @property(Node) cocos2: Node;

    // 变量复用, 避免每次 getPosition 产生垃圾
    tempCocos1Pos = v3();

    tempCocos2Trans = v3();
    tempCocos2TransDt = v3();

    start() {
        // 计时器每秒一次
        this.schedule(() => {
            // 在 -220 到 220 之间随机
            const randomX = -220 + 440 * Math.random();
            this.cocos1.getPosition(this.tempCocos1Pos);
            this.tempCocos1Pos.x = randomX;
            this.cocos1.setPosition(this.tempCocos1Pos);
        }, 1);

        // 设置初始速度
        this.tempCocos2Trans.x = 180;
        this.schedule(() => {
            this.tempCocos2Trans.x *= -1;
        }, 2);
    }

    update(dt: number) {
        // 乘以 dt, 使得不同设备上不同 dt 时表现一致
        this.tempCocos2TransDt.x = this.tempCocos2Trans.x * dt;
        this.cocos2.translate(this.tempCocos2TransDt);
    }

}
