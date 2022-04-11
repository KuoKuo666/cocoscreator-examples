
import { _decorator, Component, Node, v3, tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MaskNormal')
export class MaskNormal extends Component {
    @property(Node) cocos1: Node;
    @property(Node) cocos2: Node;

    start() {
        const dst = 5120 * 0.02;
        tween(this.cocos1)
            .parallel(
                tween().to(4, { position: v3(dst, -dst, 0) }).to(0, { position: v3(0, 0, 0) }),
                tween().to(2, { scale: v3(0.22, 0.18, 1) }).to(2, { scale: v3(0.2, 0.2, 1) })
            )
            .repeatForever()
            .start();

        tween(this.cocos2)
            .parallel(
                tween().to(4, { position: v3(dst, -dst, 0) }).to(0, { position: v3(0, 0, 0) }),
                tween().to(2, { scale: v3(0.22, 0.18, 1) }).to(2, { scale: v3(0.2, 0.2, 1) })
            )
            .repeatForever()
            .start();
    }
}
