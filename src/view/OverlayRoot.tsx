import React from "react";
import ReactDOM, {Container} from "react-dom";
import {observer} from "mobx-react-lite";
import {OverlayLayer, OverlayStore} from "../internal";

export interface OverlayRootProps {
    id?: string;
    className?: string;
    zIndex?: number;
    store: OverlayStore;
}

const OverlayRoot: React.FC<OverlayRootProps> = observer(props => {
    const {id, className, zIndex, store} = props;
    const items = store.openedItems;

    return (
        <div
            id={id}
            className={className}
            style={{
                top: 0,
                left: 0,
                width: '100%',
                position: "fixed",
                zIndex: zIndex ?? 9999
            }}
        >
            {items?.map(overlay => (
                <OverlayLayer
                    key={overlay.id.description}
                    overlay={overlay}
                />
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
