import {RefObject} from "react";
import {TracerPosition} from "../../internal";

export interface TracerTarget<T extends HTMLElement = HTMLElement> {
    ref: RefObject<T>;
    position: TracerPosition | null;
}
