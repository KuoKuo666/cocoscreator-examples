import { EventHandler, Node } from "cc";

export class Util {
    static createBtnEventHandler(target: Node, component: string, handler: string, customEventData?: string) {
        const eventHandler = new EventHandler();
        eventHandler.target = target;
        eventHandler.component = component;
        eventHandler.handler = handler;
        eventHandler.customEventData = customEventData;
        return eventHandler;
    }
}
