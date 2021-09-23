import {OverlayOption, Tracer} from "../../internal";

export interface TracerOverlayOption<T extends HTMLElement = HTMLElement> extends OverlayOption {
    tracer: Tracer<T>;
}
