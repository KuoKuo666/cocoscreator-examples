import { _decorator, Component, Node, tween, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ParentChild')
export class ParentChild extends Component {
    @property(Node) coin1: Node
    @property(Node) coin2: Node
    @property(Node) cocos1: Node
    @property(Node) cocos2: Node

    start() {
        // 往复运动, by 是叠加
        tween(this.coin1)
            .by(2, { position: v3(100, 0, 0) })
            .by(2, { position: v3(-100, 0, 0) })
            .union()
            .repeatForever()
            .start();

        // 放大缩小, to 是到达
        tween(this.coin1)
            .to(1, { scale: v3(0.8, 0.8, 0) })
            .to(1, { scale: v3(1.0, 1.0, 0) })
            // union 是将之前所有的 action 整合为一个 action
            .union()
            // repeatForever 一个永久重复 action，这个 action 会将前一个动作作为他的参数
            .repeatForever()
            .start();

        // 往复运动
        tween(this.coin2)
            .by(2, { position: v3(100, 0, 0) })
            .by(2, { position: v3(-100, 0, 0) })
            .union()
            .repeatForever()
            .start();
    }
}
