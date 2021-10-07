import React, {useCallback, useEffect, useState} from "react";
import ReactDOM, {Container} from "react-dom";
import {observer} from "mobx-react-lite";
import {OverlayId, OverlayLayer, OverlayStore} from "../internal";

export interface OverlayRootProps {
    id?: string;
    className?: string;
    store: OverlayStore;
}

const OverlayRoot: React.FC<OverlayRootProps> = observer(props => {
    const {id, className, store} = props;
    const {openedItems, lastOpenedItemId} = store;

    const [currentId, setCurrentId] = useState<OverlayId | null>(null);

    const onWindowMouseDown = useCallback(() => {
        setCurrentId(lastOpenedItemId);
    }, [lastOpenedItemId]);

    const onWindowClick = useCallback((event: MouseEvent) => {
        if (currentId === lastOpenedItemId) {
            const dom = document.querySelector(`.rol-overlay-layer[data-overlay-id=${currentId}]`);
            if (dom && !dom.contains(event.target as Node)) {
                store.close(currentId);
            }
        }
    }, [currentId, lastOpenedItemId, store]);

    useEffect(() => {
        window.addEventListener('mousedown', onWindowMouseDown);
        return () => window.removeEventListener('mousedown', onWindowMouseDown);
    }, [onWindowMouseDown]);

    useEffect(() => {
        window.addEventListener('click', onWindowClick);
        return () => window.removeEventListener('click', onWindowClick);
    }, [onWindowClick]);

    return (
        <div id={id} className={className}>
            {openedItems?.map(overlay => (
                <OverlayLayer key={overlay.id} overlay={overlay}/>
            )) ?? []}
        </div>
    );
});

export function initializeOverlayGlobalRoot(container: Container, props: Omit<OverlayRootProps, "store"> = {}) {
    ReactDOM.render(
        <OverlayRoot
            {...props}
            store={OverlayStore.getGlobalStore()}
        />,
        container
    );
}

export {OverlayRoot};
