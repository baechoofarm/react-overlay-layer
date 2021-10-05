import {useEffect, useState} from "react";
import {Overlay, OverlayRenderer, OverlayStore} from "../../internal";

export function useOverlayCore(overlay: Overlay, renderer: OverlayRenderer) {
    const store = OverlayStore.getGlobalStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        store.register(overlay);
        return () => overlay.remove();
    }, [overlay, store]);

    useEffect(() => {
        if (mounted) {
            overlay.updateRenderer(renderer);
        }
    }, [mounted, overlay, renderer]);

    return {mounted};
}
