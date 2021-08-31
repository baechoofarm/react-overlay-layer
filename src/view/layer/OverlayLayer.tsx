import React from "react";
import {observer} from "mobx-react-lite";
import {Overlay} from "../../internal";

interface Props {
    overlay: Overlay;
}

const OverlayLayer: React.FC<Props> = observer(({overlay}) => {
    const {option, renderer} = overlay;

    return (
        <div className={`overlay-layer ${option.dim ? 'dim' : ''}`}>
            {renderer(overlay) ?? null}
        </div>
    );
});

export {OverlayLayer};
