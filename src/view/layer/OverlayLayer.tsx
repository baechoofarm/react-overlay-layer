import React from "react";
import {observer} from "mobx-react-lite";
import {Overlay} from "../../internal";

interface Props {
    overlay: Overlay;
}

const OverlayLayer: React.FC<Props> = observer(({overlay}) => {
    const {renderer, dim} = overlay;

    return (
        <div className={`overlay-layer ${dim ? 'dim' : ''}`}>
            {renderer(overlay) ?? null}
        </div>
    );
});

export {OverlayLayer};
