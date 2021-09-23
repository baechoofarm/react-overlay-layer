import {useState} from "react";
import {Overlay, OverlayOption, OverlayRenderer, useOverlayCore} from "../../internal";

export function useOverlay(renderer: OverlayRenderer, initialOption?: OverlayOption) {
    const [overlay] = useState(() => new Overlay(renderer, initialOption));
    const {mounted} = useOverlayCore(overlay, renderer);

    return overlay;
}
