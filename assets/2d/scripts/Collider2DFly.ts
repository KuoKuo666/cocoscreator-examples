
import { _decorator, Component, Node, EventTouch, UITransform, v3, Collider2D, Contact2DType, IPhysics2DContact, PhysicsSystem2D, Label, instantiate, tween } from 'cc';
const { ccclass, property } = _decorator;
 
@ccclass('Collider2DFly')
export class Collider2DFly extends Component {
    @property(Node) enemy: Node;
    // 用来挂载子弹的根节点
    @property(Node) bulletRoot: Node;
    // 用来克隆的子弹
    @property(Node) copyBullet: Node;
    // 玩家操控的飞机
    @property(Node) fly: Node;

    // 展示飞机碰撞监听信息
    @property(Label) label1: Label;
    // 全局碰撞信息展示
    @property(Label) label2: Label;

    bulletNum = 1;

    start() {
        this.addTouchListener();
        // 碰撞的监听可以单独为碰撞组件设置，也可以全局设置
        this.setFlyListener();
        // 全局
        this.setGlobalListener();
        // 子弹的发射
        this.schedule(() => {
            this.shootBullets();
        }, 0.5)
    }

    setFlyListener() {
        const collider = this.fly.getComponent(Collider2D);
        // 只在两个碰撞体开始接触时被调用一次，最常用
        collider.on(Contact2DType.BEGIN_CONTACT, (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) => {
            this.label1.string = `飞机监听: ${selfCollider.node.name} 碰到了 ${otherCollider.node.name}`;
        }, this);
        // 只在两个碰撞体结束接触时被调用一次
        collider.on(Contact2DType.END_CONTACT, (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) => {
            this.label1.string = `飞机监听: ${selfCollider.node.name} 离开了 ${otherCollider.node.name}`;
        }, this);

        // 下面监听回调的参数与上面一致
        // 每次将要处理碰撞体接触逻辑时被调用
        // collider.on(Contact2DType.PRE_SOLVE, () => {}, this);
        // 每次处理完碰撞体接触逻辑时被调用
        // collider.on(Contact2DType.POST_SOLVE, () => {}, this);
    }

    setGlobalListener() {
        PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) => {
            this.label2.string = `全局监听: ${selfCollider.node.name} 碰到了 ${otherCollider.node.name}`;
        }, this);
        PhysicsSystem2D.instance.on(Contact2DType.END_CONTACT, (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) => {
            this.label2.string = `全局监听: ${selfCollider.node.name} 离开了 ${otherCollider.node.name}`;
        }, this);
        // PhysicsSystem2D.instance.on(Contact2DType.PRE_SOLVE, () => {}, this);
        // PhysicsSystem2D.instance.on(Contact2DType.POST_SOLVE, () => {}, this);
    }

    addTouchListener() {
        // 触摸屏幕移动飞机事件
        this.node.on(Node.EventType.TOUCH_START, this.setFlyPos, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.setFlyPos, this);
    }

    setFlyPos(event: EventTouch) {
        const pos = event.getUILocation();
        const out = this.node.getComponent(UITransform).convertToNodeSpaceAR(v3(pos.x, pos.y, 0));
        this.fly.setPosition(out);
    }

    shootBullets() {
        const flyPos = this.fly.getPosition();
        const shootPos = v3(flyPos.x, flyPos.y + 30, 0);
        const bullet = instantiate(this.copyBullet);
        this.bulletRoot.addChild(bullet);
        bullet.active = true;
        bullet.setPosition(shootPos);
        // 名称自增 1
        bullet.name = `bullet-${this.bulletNum++}`;
        tween(bullet)
            .to(3, { position: v3(shootPos.x, shootPos.y + 1000, shootPos.z)})
            .removeSelf()
            .start();
    }
}
