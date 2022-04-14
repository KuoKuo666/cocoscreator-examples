
import { _decorator, Component, Node, AudioSource, AudioClip, Label, Slider } from 'cc';
const { ccclass, property } = _decorator;
 
@ccclass('MusicPlay')
export class MusicPlay extends Component {
    @property(AudioSource) audioSource1: AudioSource;
    @property(AudioSource) audioSource2: AudioSource;
    // mp3 资源 第一个是 bgm 第二个是 click 音效
    @property([AudioClip]) audioClips: AudioClip[] = [];
    // 显示音乐音量
    @property(Label) label: Label;
    
    volume = 1;

    start() {
        this.label.string = `当前音量: ${this.volume}`;
    }

    onClickMusicEffect() {
        this.audioSource1.playOneShot(this.audioClips[1], this.volume);
    }

    onClickMusicBgm() {
        if (this.audioSource2.playing) {
            this.audioSource2.stop();
        } else {
            this.audioSource2.clip = this.audioClips[0];
            this.audioSource2.volume = this.volume;
            this.audioSource2.loop = true;
            this.audioSource2.play();
        }
    }

    onSlider(slider: Slider) {
        this.volume = slider.progress;
        this.label.string = `当前音量: ${this.volume}`;
        this.audioSource2.volume = this.volume;
    }
}
