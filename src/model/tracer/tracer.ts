import {TracerTarget} from "../../internal";

export interface Tracer<T extends HTMLElement = HTMLElement> {
    target: TracerTarget<T>;
    activated: boolean;

    activate(): void;

    deactivate(): void;
}
