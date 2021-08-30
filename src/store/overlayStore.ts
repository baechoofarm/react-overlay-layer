import {Overlay, OverlayOption, OverlayRenderer, OverlayRenderOrder} from "../internal";

type OverlayListListener = (items: Overlay[]) => void;

let listenerIdIndex = 0;

export class OverlayStore {
    private readonly overlays = new Map<number, Overlay>();
    private readonly listeners = new Map<number, OverlayListListener>();

    private constructor() {

    }

    use(id: number, renderer: OverlayRenderer, option?: OverlayOption) {
        if (this.overlays.has(id)) {
            this.overlays.get(id)?.remove();
        }
        const overlay = new Overlay(id, renderer, option);

        this.overlays.set(id, overlay);
        this.updateListener();

        return overlay;
    }

    remove(id: number) {
        this.overlays.delete(id);
        this.updateListener();
    }

    subscribe(listener: OverlayListListener): number {
        this.listeners.set(++listenerIdIndex, listener);
        return listenerIdIndex;
    }

    unsubscribe(id: number) {
        this.listeners.delete(id);
    }

    private updateListener() {
        const {items} = this;
        this.listeners.forEach(listener => listener(items));
    }

    get items() {
        const normal: Overlay[] = [];
        const fast: Overlay[] = [];
        const late: Overlay[] = [];

        this.overlays.forEach(overlay => {
            switch (overlay.order) {
                case OverlayRenderOrder.FAST:
                    fast.push(overlay);
                    break;
                case OverlayRenderOrder.LATE:
                    late.push(overlay);
                    break;
                case OverlayRenderOrder.NORMAL:
                default:
                    normal.push(overlay);
            }
        });
        return [...fast, ...normal, ...late];
    }

    private static _instance: OverlayStore;

    static get instance() {
        if (!this._instance) this._instance = new OverlayStore();
        return this._instance;
    }
}
