import {useCallback, useEffect, useRef, useState} from "react";
import {Tracer, TracerPosition} from "../../internal";

export function useTracer<T extends HTMLElement = HTMLElement>(): Tracer<T> {
    const ref = useRef<T>(null);

    const [activated, setActivated] = useState(false);
    const [position, setPosition] = useState<TracerPosition | null>(null);

    const calculate = () => {
        if (ref.current) {
            const {top, left, right, bottom} = ref.current.getBoundingClientRect();

            setPosition({
                top,
                left,
                right,
                bottom,
                width: right - left,
                height: bottom - top
            });
        }
    };

    const loop = useCallback(() => {
        calculate();
        if (activated) {
            requestAnimationFrame(loop);
        }
    }, [activated]);

    const activate = useCallback(() => {
        if (!activated) {
            setActivated(true);
        }
    }, [activated]);

    const deactivate = useCallback(() => {
        if (activated) {
            setActivated(false);
        }
    }, [activated]);

    useEffect(() => {
        if (activated) loop();
        return () => {
            if (activated) deactivate();
        };
    }, [activated, deactivate, loop]);

    return {
        activated,
        activate,
        deactivate,
        target: {
            ref,
            position
        }
    };
}
