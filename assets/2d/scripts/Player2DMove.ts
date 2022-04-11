
import { _decorator, Component, Node, Vec2, v2, input, Input, EventKeyboard, KeyCode, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player2DMove')
export class Player2DMove extends Component {
    @property(Node) cocos1: Node;

    keyFlag = {
        up: false,
        down: false,
        left: false,
        right: false
    };

    direction: Vec2 = v2(0, 0);
    tempTranslate: Vec3 = v3(0, 0, 0);

    start() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    onDestroy() {
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_W:
                this.keyFlag.up = true;
                break;
            case KeyCode.KEY_A:
                this.keyFlag.left = true;
                break;
            case KeyCode.KEY_S:
                this.keyFlag.down = true;
                break;
            case KeyCode.KEY_D:
                this.keyFlag.right = true;
                break;
        }
    }

    onKeyUp(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_W:
                this.keyFlag.up = false;
                break;
            case KeyCode.KEY_A:
                this.keyFlag.left = false;
                break;
            case KeyCode.KEY_S:
                this.keyFlag.down = false;
                break;
            case KeyCode.KEY_D:
                this.keyFlag.right = false;
                break;
        }
    }

    update(dt: number) {
        this.setDirFromKeyFlag();
        // 根据 dir 进行移动，归一化方向
        const speed = 50;
        // 根据速度与 dt 赋给 tempTranslate 变量对节点进行位移
        this.tempTranslate.set(this.direction.x * speed * dt, this.direction.y * speed * dt);
        this.cocos1.translate(this.tempTranslate);
    }

    setDirFromKeyFlag() {
        let x = 0, y = 0;
        if (this.keyFlag.up) { y += 1 }
        if (this.keyFlag.down) { y -= 1 }
        if (this.keyFlag.left) { x -= 1 }
        if (this.keyFlag.right) { x += 1 }
        this.direction.set(x, y);
        // 把自己归一化，长度为 1
        this.direction.normalize();
    }
}
