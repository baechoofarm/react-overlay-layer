import {useContext, useEffect, useState} from "react";
import {Overlay, OverlayRenderer, OverlayStoreContext} from "../../internal";

export function useOverlayCore(overlay: Overlay, renderer: OverlayRenderer) {
    const store = useContext(OverlayStoreContext);
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
