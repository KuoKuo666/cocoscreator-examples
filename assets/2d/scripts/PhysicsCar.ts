
import { _decorator, Component, PhysicsSystem2D, EPhysics2DDrawFlags, RigidBody2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PhysicsCar')
export class PhysicsCar extends Component {
    // 小车左轮子
    @property(RigidBody2D) leftWheel: RigidBody2D;

    start() {
        // 物理系统默认开启，开启关闭代码:
        // PhysicsSystem2D.instance.enable = true;
        // 开启物理调试信息显示，可选的，下面是全部写法
        // PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb |
        //     EPhysics2DDrawFlags.Pair |
        //     EPhysics2DDrawFlags.CenterOfMass |
        //     EPhysics2DDrawFlags.Joint |
        //     EPhysics2DDrawFlags.Shape;
    }

    onClickLeftBtn() {
        // 小车左轮给逆时针扭矩
        this.leftWheel.applyTorque(200, true);
    }

    onClickRightBtn() {
        // 小车左轮顺时针扭矩
        this.leftWheel.applyTorque(-200, true);
    }

    onDestroy() {
        // 关闭物理显示
        // PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.None;
    }
}
