import {initializeOverlayGlobalRoot} from "./internal";

const root = document.createElement('div');

root.id = 'react-overlay-layer-global-root';
document.body.appendChild(root);

initializeOverlayGlobalRoot(root);

export * from "./internal";
