import {OverlayStore} from "../internal";

export function useOverlayItems() {
    return OverlayStore.instance.openedItems;
}
