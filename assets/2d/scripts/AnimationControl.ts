
import { _decorator, Component, Animation, Slider, AnimationClip } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AnimationControl')
export class AnimationControl extends Component {
    @property(Animation) cocosAnima: Animation;

    animationName = 'animation-control';

    start() {
        this.onClickBtnPlayOneTime();
    }

    onClickBtnPlayOneTime() {
        this.playAnimaInWrapMode(this.animationName, AnimationClip.WrapMode.Normal);
    }

    onClickBtnPlayLoop() {
        this.playAnimaInWrapMode(this.animationName, AnimationClip.WrapMode.Loop);
    }

    onClickBtnReverseOneTime() {
        this.playAnimaInWrapMode(this.animationName, AnimationClip.WrapMode.Reverse);
    }

    onClickBtnPlayOrPause() {
        const state = this.cocosAnima.getState(this.animationName);
        if (state.isPaused) {
            this.cocosAnima.resume();
        } else {
            this.cocosAnima.pause();
        }
    }

    onDragSlider(slider: Slider) {
        const progress = slider.progress;
        const state = this.cocosAnima.getState(this.animationName);
        state.speed = 0;
        const duration = state.duration;
        const curTime = duration * progress;
        this.cocosAnima.play(this.animationName);
        state.setTime(curTime);
    }

    playAnimaInWrapMode(name: string, wrapMode: AnimationClip.WrapMode) {
        const state = this.cocosAnima.getState(name);
        state.speed = 0.5;
        state.wrapMode = wrapMode;
        this.cocosAnima.play(name);
    }
}
