import {action, computed, makeObservable, observable, runInAction} from "mobx";
import {ReactNode} from "react";
import {OverlayOption, OverlayRenderOrder, OverlayStore} from "../internal";

export type OverlayId = symbol;
export type OverlayRenderer = (overlay: Overlay) => ReactNode;

function defaultOption(option?: OverlayOption) {
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
    _option: OverlayOption;

    constructor(renderer: OverlayRenderer, option: OverlayOption = defaultOption()) {
        this._renderer = renderer;
        this._option = option;

        makeObservable(this, {
            _opened: observable,
            _renderer: observable,
            _option: observable,
            renderer: computed,
            option: computed,
            open: action,
            close: action
        });
    }

    open() {
        this._opened = true;
    }

    close() {
        this._opened = false;
    }

    remove() {
        OverlayStore.instance.remove(this.id);
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

    get option() {
        return defaultOption(this._option);
    }

    get opened() {
        return this._opened;
    }
}
