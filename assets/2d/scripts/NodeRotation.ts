import { _decorator, Component, Node, tween, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NodeRotation')
export class NodeRotation extends Component {
    @property(Node) cocos1: Node;
    @property(Node) cocos2: Node;
    @property(Node) cocos3: Node;

    tempEulerAngles = v3();

    start() {
        // 旋转 angle 运动
        tween(this.cocos1)
            .by(2, { angle: 50 })
            .repeatForever()
            .start();

        // 旋转父节点
        tween(this.cocos3.parent)
            .by(2, { angle: 50 })
            .repeatForever()
            .start();
    }

    update(dt: number) {
        // 用 update 的方式不断改变旋转度, 效果同 tween
        this.tempEulerAngles = this.cocos2.eulerAngles;
        this.tempEulerAngles.z += dt * 25;
        this.cocos2.setRotationFromEuler(this.tempEulerAngles);
    }
}
