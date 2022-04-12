
import { _decorator, Component, RigidBody2D, tween, v2, Vec2, macro, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PhysicsGravity')
export class PhysicsGravity extends Component {
    @property(RigidBody2D) cocos1: RigidBody2D;
    @property(Label) label: Label;

    moveDir = 1;
    tempVec: Vec2;

    start() {
        this.schedule(() => {
            // 引力翻转
            this.cocos1.gravityScale = this.cocos1.gravityScale * -1;
        }, 3, macro.REPEAT_FOREVER, 1.5);
    }

    update(dt: number) {
        // 超出右边界，星星半径 12.5
        if (this.cocos1.node.position.x > (400 - 12.5)) {
            this.moveDir = -1;
        }
        // 超出左边界
        if (this.cocos1.node.position.x < -(400 - 12.5)) {
            this.moveDir = 1;
        }
        // 进行水平线速度赋值
        this.tempVec = this.cocos1.linearVelocity;
        this.tempVec.x = this.moveDir * dt * 200;
        this.cocos1.linearVelocity = this.tempVec;
        this.label.string = `线速度: ${this.cocos1.linearVelocity.toString()}`
    }
}
