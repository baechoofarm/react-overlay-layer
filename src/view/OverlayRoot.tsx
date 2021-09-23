import React from "react";
import {observer} from "mobx-react-lite";
import {OverlayLayer, OverlayStore} from "../internal";

interface Props {
    id?: string;
}

const OverlayRoot: React.FC<Props> = observer(({id}) => {
    const items = OverlayStore.instance.openedItems;

    return (
        <div
            id={id}
            style={{
                top: 0,
                left: 0,
                width: '100%',
                position: "fixed"
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

export {OverlayRoot};
