import React, {useContext} from "react";
import {OverlayContext, useOverlay} from "../src/main";

export default {
    title: 'Overlay/Basic'
};

const Popup: React.FC = () => {
    const ov = useContext(OverlayContext);

    return (
        <div style={{marginTop: 300, marginLeft: 300, width: 300, height: 300, background: 'skyblue'}}>
            HI THERE
            <button onClick={() => ov.close()}>CLOSE</button>
        </div>
    );
};

const Template: React.FC = () => {

    const overlay = useOverlay(() => <Popup/>);

    return (
        <div>
            <button onClick={overlay.opener}>HI</button>
        </div>
    );
};

export const Overlay = Template.bind({});
