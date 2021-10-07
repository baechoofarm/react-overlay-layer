import React from "react";
import ReactDOM, {Container} from "react-dom";
import {observer} from "mobx-react-lite";
import {OverlayLayer, OverlayStore} from "../internal";

export interface OverlayRootProps {
    id?: string;
    className?: string;
    store: OverlayStore;
}

const OverlayRoot: React.FC<OverlayRootProps> = observer(props => {
    const {id, className, store} = props;
    const {openedItems} = store;

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
