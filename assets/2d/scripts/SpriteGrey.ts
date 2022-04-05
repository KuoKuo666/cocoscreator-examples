
import { _decorator, Component, Node, EventTouch, Sprite, tween } from 'cc';
const { ccclass, property } = _decorator;
 
@ccclass('SpriteGrey')
export class SpriteGrey extends Component {
    @property(Node) cocos1: Node;
    @property(Node) redBtn: Node;

    start() {
        this.redBtn.on(Node.EventType.TOUCH_START, this.handleRedBtnTouchStart, this);
        // 没用到的 TouchMove
        this.redBtn.on(Node.EventType.TOUCH_MOVE, (event: EventTouch) => {}, this);
        this.redBtn.on(Node.EventType.TOUCH_END, this.handleRedBtnTouchEnd, this);
        this.redBtn.on(Node.EventType.TOUCH_CANCEL, this.handleRedBtnTouchEnd, this);
    }

    handleRedBtnTouchStart(event: EventTouch) {
        tween(this.redBtn).to(0.1, { angle: 180 }).start();
        this.cocos1.getComponent(Sprite).grayscale = true;
    }

    handleRedBtnTouchEnd(event: EventTouch) {
        tween(this.redBtn).to(0.1, { angle: 0 }).start();
        this.cocos1.getComponent(Sprite).grayscale = false;
    }
}
