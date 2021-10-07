import {Overlay} from "../../internal";

export enum OverlayRenderOrder {
    NORMAL = 'NORMAL',
    FAST = 'FAST',
    LATE = 'LATE'
}

export interface OverlayOption {
    order?: OverlayRenderOrder;
    dim?: boolean;
    onClickOutside?: (overlay: Overlay) => boolean;
}
