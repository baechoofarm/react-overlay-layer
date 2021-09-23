import {useEffect} from "react";
import {runInAction} from "mobx";
import {TracerOverlayOption, TracerOverlayRenderer, useTracer, useTracerOverlay} from "../../internal";

export function useTracerOverlayWithTracer<T extends HTMLElement = HTMLElement>(
    renderer: TracerOverlayRenderer,
    initialOption?: Omit<TracerOverlayOption, "tracer">
) {
    const tracer = useTracer<T>();
    const overlay = useTracerOverlay<T>(renderer, {...initialOption, tracer});

    useEffect(() => {
        runInAction(() => {
            overlay.tracer = tracer;
        });
    }, [overlay.tracer, tracer]);

    return overlay;
}
