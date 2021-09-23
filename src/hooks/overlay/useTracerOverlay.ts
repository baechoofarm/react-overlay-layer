import {useState} from "react";
import {OverlayRenderer, TracerOverlay, TracerOverlayOption, TracerOverlayRenderer, useOverlayCore} from "../../internal";

export function useTracerOverlay<T extends HTMLElement = HTMLElement>(
    renderer: TracerOverlayRenderer<T>,
    initialOption: TracerOverlayOption<T>
) {
    const [overlay] = useState(() => new TracerOverlay<T>(renderer, initialOption));
    const {mounted} = useOverlayCore(overlay, renderer as OverlayRenderer);

    return overlay;
}
