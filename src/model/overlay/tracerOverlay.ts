import {makeObservable, observable, override} from "mobx";
import {defaultOverlayOption, Overlay, OverlayRenderer, Tracer, TracerOverlayOption} from "../../internal";

export type TracerOverlayRenderer<T extends HTMLElement = HTMLElement> = OverlayRenderer<TracerOverlay<T>>;

export function defaultTracerOverlayOption<T extends HTMLElement = HTMLElement>(option: TracerOverlayOption<T>) {
    return {
        ...defaultOverlayOption(option),
        tracer: option.tracer
    };
}

export class TracerOverlay<T extends HTMLElement = HTMLElement> extends Overlay {
    tracer: Tracer<T>;

    constructor(renderer: TracerOverlayRenderer<T>, option: TracerOverlayOption<T>) {
        super(renderer as OverlayRenderer, option);

        const opt = defaultTracerOverlayOption(option);

        this.tracer = opt.tracer;

        makeObservable(this, {
            ...super.getOverriddenObservable(),
            tracer: observable.ref
        });
    }

    open() {
        super.open();
        this.tracer.activate();
    }

    close() {
        super.close();
        this.tracer.deactivate();
    }

    getOverriddenObservable() {
        return {
            ...super.getOverriddenObservable(),
            tracer: override
        };
    }
}
