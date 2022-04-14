
import { _decorator, Component, Node, instantiate, v3, UITransform, lerp, AudioClip } from 'cc';
const { ccclass, property } = _decorator;
 
@ccclass('MusicView')
export class MusicView extends Component {
    @property(AudioClip) audioClip: AudioClip;
    @property(Node) root: Node;

    audioBufferSourceNode: AudioBufferSourceNode;
    analyser: AnalyserNode;
    dataArray: Uint8Array;

    isPlaying = false;

    start() {
        // 取子节点作为克隆对象
        const copyNode = instantiate(this.root.children[0]);
        // 清空 root
        this.root.destroyAllChildren();
        // 实例化 item
        for (let i = 0; i < 30; i++) {
            let item = instantiate(copyNode);
            this.root.addChild(item);
            item.setPosition(v3(-350 + i * 20, 0, 0));
        }
    }

    makeAnalyser() {
        let AudioContext = window.AudioContext;
        // audioContext 只相当于一个容器。
        let audioContext = new AudioContext();
        // 要让 audioContext 真正丰富起来需要将实际的音乐信息传递给它的。
        // 也就是将 AudioBuffer 数据传递进去。
        // 以下就是创建音频资源节点管理者。
        this.audioBufferSourceNode = audioContext.createBufferSource();
        // 将 AudioBuffer 传递进去。这里 cocos 封装的比较深
        const audioBuffer = (this.audioClip as any)._player._player._audioBuffer;
        this.audioBufferSourceNode.buffer = audioBuffer;
        // 创建分析器。
        this.analyser = audioContext.createAnalyser();
        // 精度设置
        this.analyser.fftSize = 256;
        // 在传到扬声器之前，连接到分析器。
        this.audioBufferSourceNode.connect(this.analyser);
        // 连接到扬声器。
        this.analyser.connect(audioContext.destination);
        // 开始播放
        this.audioBufferSourceNode.start(0);
    }

    onClickPlayBtn() {
        if (this.isPlaying) {
            // 停止播放
            this.audioBufferSourceNode.stop();
            this.isPlaying = false;
        } else {
            this.makeAnalyser();
            this.isPlaying = true;
        }
    }

    update(dt: number) {
        // 等待准备好
        if (!this.analyser) return;
        // 建立数据准备接受数据
        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
        // 分析结果存入数组。
        this.analyser.getByteFrequencyData(this.dataArray);
        this.draw(this.dataArray);
    }

    draw(dataArray: Uint8Array) {
        // 精度 256 ，解析数组长度为一半 128 长，这里我根据音乐挑选展示 90 个数据
        for (let i = 0; i < 30; i++) {
            // 在 10 - 100 每隔 3 个取音频数据展示，数据大小乘以 2 作为节点高度
            let h = dataArray[10 + i * 3] * 2;
            if (h < 10) h = 10;
            let node = this.root.children[i];
            // 插值，不那么生硬
            const height = node.getComponent(UITransform).height;
            node.getComponent(UITransform).height = lerp(height, h, 0.4);
        }
    }
}
