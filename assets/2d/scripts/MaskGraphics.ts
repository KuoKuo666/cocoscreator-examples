
import { _decorator, Component, Node, Mask, EventTouch, UITransform, v3, color } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MaskGraphics')
export class MaskGraphics extends Component {
    @property(Mask) mask: Mask;

    start() {
        const maskNode = this.mask.node;
        const graphics = this.mask.graphics;

        maskNode.on(Node.EventType.TOUCH_MOVE, (event: EventTouch) => {
            const tranComp = maskNode.getComponent(UITransform);
            const uiLocation = event.getUILocation();
            const pos = tranComp.convertToNodeSpaceAR(v3(uiLocation.x, uiLocation.y, 0));
            graphics.circle(pos.x, pos.y, 50);
            graphics.fill();
        }, this);
    }
}
