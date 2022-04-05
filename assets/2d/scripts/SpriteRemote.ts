
import { _decorator, Component, assetManager, ImageAsset, Node, resources, Texture2D, SpriteFrame, Sprite, Layers } from 'cc';
const { ccclass, property } = _decorator;
 
@ccclass('SpriteRemote')
export class SpriteRemote extends Component {

    start() {
        resources.load('images/logo', (err: Error, asset: ImageAsset) => {
            if (err) return;
            const texture = new Texture2D();
            texture.image = asset;
            const sf = new SpriteFrame();
            sf.texture = texture;
            // 构造一个节点装入图片
            const node = this.createNodeBySF(sf);
            node.setPosition(-200, 0, 0);
        });
        // 远程资源加载要同源，不然会跨域，导致加载失败
        assetManager.loadRemote(
            'https://www.kuokuo666.com/blogImgs/imgs-20/kuoLogo_mini.jpg',
            (err: Error, asset: ImageAsset) => {
                if (err) return;
                const texture = new Texture2D();
                texture.image = asset;
                const sf = new SpriteFrame();
                sf.texture = texture;
                // 构造一个节点装入图片
                const node = this.createNodeBySF(sf);
                node.setPosition(200, 0, 0);
            }
        );
    }

    createNodeBySF(sf: SpriteFrame) {
        const child = new Node();
        child.layer = this.node.layer;
        this.node.addChild(child);
        const sp = child.addComponent(Sprite);
        sp.spriteFrame = sf;
        return child;
    }
}
