import React from "react";
import {action, computed, makeObservable, observable} from "mobx";
import {Overlay, OverlayId, OverlayRenderOrder} from "../internal";

export class OverlayStore {
    private readonly overlays = observable.map<OverlayId, Overlay>();

    constructor() {
        makeObservable(this, {
            register: action,
            remove: action,
            items: computed,
            openedItems: computed
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

    private static rootStore: OverlayStore;

    static getRootStore() {
        if (!this.rootStore) this.rootStore = new OverlayStore();
        return this.rootStore;
    }
}

export const OverlayStoreContext = React.createContext<OverlayStore>(OverlayStore.getRootStore());
