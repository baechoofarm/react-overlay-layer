import React, {useCallback} from "react";
import {OverlayRoot, useOverlay} from "../src/internal";

export default {
    title: 'Sample/Overlay'
};

const Template: React.FC = () => {
    const overlay = useOverlay(ov => {
        return (
            <div style={{marginTop: 300, marginLeft: 300, width: 300, height: 300, background: 'skyblue'}}>
                HI THERE
                <button onClick={() => ov.close()}>CLOSE</button>
            </div>
        );
    });

    function onClick() {
        overlay.open();
    }

    return (
        <div>
            <OverlayRoot/>
            <button onClick={overlay.opener}>HI</button>
        </div>
    );
};

export const Overlay = Template.bind({});
