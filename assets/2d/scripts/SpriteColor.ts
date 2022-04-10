
import { _decorator, Component, Node, Slider, Label, Sprite, tween } from 'cc';
const { ccclass, property } = _decorator;
 
@ccclass('SpriteColor')
export class SpriteColor extends Component {
    @property(Node) cocos1: Node;
    @property(Node) cocos2: Node;
    @property(Node) cocos3: Node;
    @property(Node) cocos4: Node;

    @property(Label) label1: Label;
    @property(Label) label2: Label;
    @property(Label) label3: Label;

    start() {
        const spriteComp3 = this.cocos3.getComponent(Sprite);
        tween(spriteComp3)
            .to(1, { fillStart: 1 })
            .to(1, { fillStart: 0 })
            .union()
            .repeatForever()
            .start();
        
        const spriteComp4 = this.cocos4.getComponent(Sprite);
        tween(spriteComp4)
            .to(1, { fillRange: 1 })
            .to(1, { fillRange: 0 })
            .to(1, { fillRange: -1 })
            .to(1, { fillRange: 0 })
            .union()
            .repeatForever()
            .start();
    }

    onSliderChange(slider: Slider, customData: '1' | '2' | '3') {
        // 采用 map 形式来代替 if 判断
        const map = {
            '1': { label: this.label1, str: 'R', prop: 'r' },
            '2': { label: this.label2, str: 'G', prop: 'g' },
            '3': { label: this.label3, str: 'B', prop: 'b' }
        };
        const needChangeLabel = map[customData].label;
        const strStart = map[customData].str;
        const value = Math.floor(slider.progress * 255);
        needChangeLabel.string = `${strStart}: ${value}`;
        // 换颜色
        const spriteComp = this.cocos1.getComponent(Sprite);
        const color = spriteComp.color;
        // 要克隆一份新颜色，使用原来的 color 变量，引用相同不会改变颜色
        const newColor = color.clone();
        const prop = map[customData].prop;
        newColor[prop] = value;
        spriteComp.color = newColor;
    }
}
