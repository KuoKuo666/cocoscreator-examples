
import { _decorator, Component, Label, tween } from 'cc';
const { ccclass, property } = _decorator;
 
@ccclass('TweenNumber')
export class TweenNumber extends Component {

    @property(Label) showLabel1: Label;
    @property(Label) showLabel2: Label;

    rollValueObj1 = {
        value: 0
    };

    rollValueObj2 = {
        value: 0
    };

    addRollValue1(val: number) {
        const newValue = this.rollValueObj1.value + val;
        tween(this.rollValueObj1)
            .to(0.5, { value: newValue }, {
                onUpdate: (target: { value: number }, ratio: number) => {
                    // 取整后显示
                    this.showLabel1.string = this.fixNumberAndComplement(target.value);
                }
            })
            .start();
    }

    addRollValue2(val: number) {
        const newValue = this.rollValueObj2.value + val;
        tween(this.rollValueObj2)
            .to(5, { value: newValue }, {
                // 先快后慢
                easing: 'sineOut',
                onUpdate: (target: { value: number }, ratio: number) => {
                    // 取整后显示
                    this.showLabel2.string = this.fixNumberAndComplement(target.value);
                }
            })
            .start();
    }

    /** 对传入的数字取整并补零 */
    fixNumberAndComplement(num: number) {
        // 这里取最大位为 6 位
        let str = num.toFixed(0).toString();
        if (str. length >= 6) { return str };
        while (str.length < 6) {
            str = '0' + str;
        }
        return str
    }

    /** 绑定的点击加数值按钮 */
    onClickAddBtn1() {
        this.addRollValue1(100);
    }

    onClickAddBtn2() {
        this.addRollValue2(100);
    }
}
