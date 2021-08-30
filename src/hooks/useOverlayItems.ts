import {useEffect, useState} from "react";
import {Overlay, OverlayStore} from "../internal";

export function useOverlayItems() {
    const [items, setItems] = useState<Overlay[]>(() => OverlayStore.instance.items);

    useEffect(() => {
        const id = OverlayStore.instance.subscribe(newItems => setItems(newItems));
        return () => OverlayStore.instance.unsubscribe(id);
    }, []);

    return items;
}
