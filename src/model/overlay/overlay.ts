import {action, computed, makeObservable, observable, override, runInAction} from "mobx";
import React, {ReactNode} from "react";
import {OverlayOption, OverlayRenderOrder, OverlayStore} from "../../internal";

export type OverlayId = symbol;
export type OverlayRenderer<T extends Overlay = Overlay> = (overlay: T) => ReactNode;

export function defaultOverlayOption(option?: OverlayOption) {
    return {
        order: option?.order ?? OverlayRenderOrder.NORMAL,
        dim: option?.dim ?? false
    };
}

let idx = 1;

export class Overlay {
    readonly id: OverlayId = Symbol(`Overlay-${idx++}`);

    _opened = false
    _renderer: OverlayRenderer;

    order: OverlayRenderOrder;
    dim: boolean;

    constructor(renderer: OverlayRenderer, option?: OverlayOption) {
        const opt = defaultOverlayOption(option);

        this.order = opt.order;
        this.dim = opt.dim;

        this._renderer = renderer;

        makeObservable(this, {
            _opened: observable,
            _renderer: observable,
            order: observable,
            dim: observable,
            renderer: computed,
            open: action,
            close: action
        });
    }

    readonly opener = () => {
        this.toggle();
    };

    toggle() {
        if (this.opened) this.close();
        else this.open();
    }

    open() {
        this._opened = true;
    }

    close() {
        this._opened = false;
    }

    remove() {
        OverlayStore.getGlobalStore().remove(this.id);
    }

    updateRenderer(renderer: OverlayRenderer) {
        this.renderer = renderer;
    }

    get renderer() {
        return this._renderer ?? (() => null);
    }

    set renderer(renderer: OverlayRenderer) {
        runInAction(() => {
            this._renderer = renderer;
        });
    }

    get opened() {
        return this._opened;
    }

    getOverriddenObservable() {
        return {
            _opened: override,
            _renderer: override,
            order: override,
            dim: override,
            renderer: override,
            open: override,
            close: override
        };
    }
}

export const OverlayContext = React.createContext({} as Overlay);
