import React from "react";
import {OverlayLayer, useOverlayItems} from "../internal";

interface Props {
    id?: string;
}

const OverlayRoot: React.FC<Props> = ({id}) => {
    const items = useOverlayItems();

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
                <OverlayLayer key={overlay.id} overlay={overlay}/>
            )) ?? []}
        </div>
    );
};

export {OverlayRoot};
