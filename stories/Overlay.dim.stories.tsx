import React from "react";
import {useOverlay} from "../src/hooks/overlay/useOverlay";

export default {
    title: 'Overlay/Basic'
};

const Popup: React.FC = () => {
    return (
        <div
            style={{
                width: 300,
                height: 300,
                background: "cadetblue",
                border: "solid 1px black",
                borderRadius: 3,
                position: "absolute",
                top: 'calc(50% - 150px)',
                left: 'calc(50% - 150px)'
            }}
        >
            팝업
        </div>
    );
};

const Template: React.FC = () => {
    const overlay = useOverlay(() => <Popup/>, {dim: true});

    const onClick = () => {
        overlay.open();
    };

    return (
        <button onClick={onClick}>
            Open with dim option
        </button>
    );
};

export const OverlayDim = Template.bind({});
