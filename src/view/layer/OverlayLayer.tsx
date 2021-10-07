import React from "react";
import {observer} from "mobx-react-lite";
import {Overlay, OverlayContext} from "../../internal";

interface Props {
    overlay: Overlay;
}

const OverlayLayer = observer<Props>(({overlay}) => {
    const {renderer, dim} = overlay;

    return (
        <div
            className={`rol-overlay-layer ${dim ? 'dim' : ''}`}
            data-overlay-id={overlay.id}
        >
            <OverlayContext.Provider value={overlay}>
                {renderer(overlay) ?? null}
            </OverlayContext.Provider>
        </div>
    );
});

export {OverlayLayer};
