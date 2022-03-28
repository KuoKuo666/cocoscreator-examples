import { _decorator, Component, Node, tween, v3, Quat } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NodeRotation')
export class NodeRotation extends Component {
    @property(Node) cocos1: Node
    @property(Node) cocos2: Node
    @property(Node) cocos3: Node

    tempRotation = new Quat();

    start() {
        // 旋转 angle 运动
        tween(this.cocos1)
            .by(2, { angle: 50 })
            .repeatForever()
            .start();
        
        // tween(this.cocos2)
        //     .by(2, { angle: 50 })
        //     .repeatForever()
        //     .start();

        // 旋转父节点
        tween(this.cocos3.parent)
            .by(2, { angle: 50 })
            .repeatForever()
            .start();
    }

    update(dt: number) {
        this.cocos2.getRotation(this.tempRotation);
        Quat.rotateZ(this.tempRotation, this.tempRotation, dt * 0.5);
        this.cocos2.setRotation(this.tempRotation);
    }
}
