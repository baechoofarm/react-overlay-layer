import {useEffect, useState} from "react";
import {Overlay, OverlayRenderer} from "../../model/overlay/overlay";
import {OverlayStore} from "../../store/overlayStore";

export function useOverlayCore(overlay: Overlay, renderer: OverlayRenderer) {
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

    return {mounted};
}
