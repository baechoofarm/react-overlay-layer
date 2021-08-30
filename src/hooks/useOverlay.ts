import {useCallback, useMemo} from "react";
import {OverlayOption, OverlayRenderer, OverlayStore} from "../internal";

let idIndex = 1;

export function useOverlay(renderer: OverlayRenderer, option?: OverlayOption) {
    const id = useMemo(() => idIndex++, []);
    const overlay = useMemo(() => (
        OverlayStore.instance.use(id, renderer, option)
    ), [id, renderer, option]);

    const open = useCallback(() => overlay.open(), [overlay]);
    const close = useCallback(() => overlay.close(), [overlay]);

    return {open, close};
}
