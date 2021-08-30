import {OverlayOption, OverlayRenderer, OverlayRenderOrder} from "../internal";

function defaultOption(option?: OverlayOption) {
    return {
        order: option?.order ?? OverlayRenderOrder.NORMAL,
        dim: option?.dim ?? false
    };
}

export class Overlay {
    readonly id: number;
    readonly renderer: OverlayRenderer;

    readonly order: OverlayRenderOrder;
    readonly dim: boolean;

    constructor(id: number, renderer: OverlayRenderer, option?: OverlayOption) {
        this.id = id;
        this.renderer = renderer;

        const opt = defaultOption(option);

        this.order = opt.order;
        this.dim = opt.dim;
    }

    open() {

    }

    close() {

    }
}
