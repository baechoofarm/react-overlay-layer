import React from "react";
import {useTracerOverlayWithTracer} from "../src/main";

export default {
    title: 'Overlay/OverlayTracer'
};

const Template: React.FC = () => {
    const overlay = useTracerOverlayWithTracer<HTMLButtonElement>(ov => {
        if (!ov.tracer.target.position) {
            return null;
        }

        const {bottom, left} = ov.tracer.target.position;

        return (
            <div style={{top: bottom + 10, left, width: 300, height: 300, background: 'skyblue', position: "absolute"}}>
                HI THERE
                <button onClick={() => ov.close()}>CLOSE</button>
            </div>
        );
    });

    const onClick = () => {
        overlay.open();
    };

    return (
        <div>
            <button
                ref={overlay.tracer.target.ref}
                onClick={onClick}
            >
                Open
            </button>
        </div>
    );
};

export const OverlayTracer = Template.bind({});
