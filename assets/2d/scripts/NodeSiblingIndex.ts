import { _decorator, Component, Node, tween, v3, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NodeSiblingIndex')
export class NodeSiblingIndex extends Component {
    @property(Node) cocos1: Node;
    @property(Node) cocos2: Node;
    @property(Node) cocos3: Node;
    @property(Label) label: Label;

    start() {
        tween(this.cocos2)
            .to(1, { position: v3(-300, 0, 0) })
            .call(() => {
                // cocos2 跑到最前面
                this.cocos1.setSiblingIndex(0);
                this.cocos2.setSiblingIndex(2);
                this.cocos3.setSiblingIndex(1);
                this.label.string = '在最前面';
            })
            .to(1, { position: v3(0, 0, 0) })
            .to(1, { position: v3(300, 0, 0) })
            .to(1, { position: v3(0, 0, 0) })
            .to(1, { position: v3(-300, 0, 0) })
            .call(() => {
                // cocos2 跑到最后面
                this.cocos1.setSiblingIndex(1);
                this.cocos2.setSiblingIndex(0);
                this.cocos3.setSiblingIndex(2);
                this.label.string = '在最后面';
            })
            .to(1, { position: v3(0, 0, 0) })
            .to(1, { position: v3(300, 0, 0) })
            .to(1, { position: v3(0, 0, 0) })
            .union()
            .repeatForever()
            .start();
    }

}
