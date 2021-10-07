import {action, computed, makeObservable, observable} from "mobx";
import {Overlay, OverlayId, OverlayRenderOrder} from "../internal";

export class OverlayStore {
    private readonly overlays = observable.map<OverlayId, Overlay>();

    private constructor() {
        makeObservable(this, {
            register: action,
            remove: action,
            items: computed,
            openedItems: computed,
            lastOpenedItemId: computed
        });
    }

    register(overlay: Overlay) {
        this.overlays.set(overlay.id, overlay);
    }

    remove(id: OverlayId) {
        this.overlays.get(id)?.close();
        this.overlays.delete(id);
    }

    open(id: OverlayId) {
        this.overlays.get(id)?.open();
    }

    close(id: OverlayId) {
        this.overlays.get(id)?.close();
    }

    getItem(id: OverlayId) {
        return this.items?.find(v => v.id === id) ?? null;
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

    get openedItems() {
        return this.items.filter(v => v?.opened);
    }

    get lastOpenedItemId() {
        return this.openedItems[this.openedItems.length - 1]?.id ?? null;
    }

    private static global: OverlayStore;

    static getGlobalStore() {
        if (!this.global) this.global = new OverlayStore();
        return this.global;
    }
}
