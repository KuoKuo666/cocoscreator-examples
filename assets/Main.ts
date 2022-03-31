
import { _decorator, Component, Node, resources, instantiate, Prefab } from 'cc';
const { ccclass, property } = _decorator;
 
@ccclass('Main')
export class Main extends Component {

    @property(Node) prefabRoot!: Node

    async start() {
        const prefabName = this.getUrlParamsMap()['pname'];
        if (!prefabName) return;
        console.log(`加载 prefab: ${prefabName}`);
        const prefab = await this.loadPrefab(prefabName);
        if (!prefab) return;
        console.log(`加载 prefab 成功`);
        const node = instantiate(prefab);
        this.prefabRoot.addChild(node);
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
