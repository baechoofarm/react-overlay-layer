import React from "react";
import {Overlay} from "../../internal";

interface Props {
    overlay: Overlay;
}

const OverlayLayer: React.FC<Props> = ({overlay}) => {
    const {dim, renderer} = overlay;

    return (
        <div className={`overlay-layer ${dim ? 'dim' : ''}`}>
            {renderer(overlay) ?? null}
        </div>
    );
};

export {OverlayLayer};
