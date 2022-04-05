
import { _decorator, Component, Node, resources, instantiate, Prefab, ScrollView, Button, EventHandler, JsonAsset, Label, EventTouch } from 'cc';
import { Util } from './Util';
const { ccclass, property } = _decorator;
 
@ccclass('Main')
export class Main extends Component {
    @property(Node) prefabRoot: Node;
    @property(ScrollView) listScrollView: ScrollView;
    @property(Button) showListBtn: Button;
    /** 存储示例预制体的显示信息与加载路径 */
    @property(JsonAsset) info: JsonAsset;

    onLoad() {
        // 先隐藏，如果是通过 url 进入的不显示列表
        this.listScrollView.node.active = false;
        this.showListBtn.node.active = false;
    }

    start() {
        const prefabName = this.getUrlParamsMap()['pname'];
        prefabName ? this.loadSubScene(prefabName) : this.showList();
    }

    async loadSubScene(prefabName: string) {
        console.log(`加载 prefab: ${prefabName}`);
        const prefab = await this.loadPrefab(prefabName);
        if (!prefab) return;
        console.log(`加载 prefab 成功`);
        const node = instantiate(prefab);
        this.prefabRoot.addChild(node);
    }

    showList() {
        // 主页显示列表
        this.listScrollView.node.active = true;
        this.showListBtn.node.active = true;
        // 注册按钮事件
        this.showListBtn.clickEvents.push(Util.createBtnEventHandler(this.node, 'Main', 'onClickShowList'));
        // 列表生成
        const listData = this.info.json['prefabInfo'];
        console.log(listData);
        // 拷贝第一个按钮作为克隆体, 拖成预制体更好
        const firstBtn = this.listScrollView.content.children[0];
        const copyBtnNode = instantiate(firstBtn);
        firstBtn.destroy();
        // 遍历信息生成按钮
        listData.forEach((data: { name: string, label: string }, index) => {
            const { name, label } = data;
            const node = instantiate(copyBtnNode);
            node.children[0].getComponent(Label).string = `${index+1}.${label}`;
            this.listScrollView.content.addChild(node);
            const btnComp = node.getComponent(Button);
            // 注册事件
            btnComp.clickEvents.push(Util.createBtnEventHandler(this.node, 'Main', 'onClickloadSubScene', name))
        })
    }

    onClickloadSubScene(event: EventTouch, name: string) {
        this.prefabRoot.destroyAllChildren();
        this.loadSubScene(name);
        // 关闭示例列表
        this.listScrollView.node.active = false;
    }

    onClickShowList() {
        this.listScrollView.node.active = !this.listScrollView.node.active
    }

    loadPrefab(prefabName: string) {
        return new Promise<Prefab | undefined>((resolve, reject) => {
            resources.load(`prefabs/${prefabName}`, (err, data: Prefab) => {
                if (err) {
                    reject(undefined);
                    return;
                }
                resolve(data);
            })
        });
    }

    getUrlParamsMap() {
        const url = window.location.href;
        const obj = {};
        const reg = /[?&][^?&]+=[^?&]+/g;
        const arr = url.match(reg);
        if (!arr) return obj;
        arr.forEach((item) => {
            const tempArr = item.substring(1).split('=');
            const key = decodeURIComponent(tempArr[0]);
            const val = decodeURIComponent(tempArr[1]);
            obj[key] = val;
        });
        return obj;
    }
}
