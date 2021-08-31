import {useCallback, useEffect, useMemo, useState} from "react";
import {Overlay, OverlayOption, OverlayRenderer, OverlayStore} from "../internal";

export function useOverlay(renderer: OverlayRenderer, initialOption?: OverlayOption) {
    const [overlay] = useState(() => new Overlay(renderer, initialOption));
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        OverlayStore.instance.register(overlay);
        return () => overlay.remove();
    }, [overlay]);

    useEffect(() => {
        if (mounted) {
            overlay.updateRenderer(renderer);
        }
    }, [mounted, overlay, renderer]);

    return overlay;
}
