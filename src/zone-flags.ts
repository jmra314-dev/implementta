/**
 * Prevents Angular change detection from
 * running with certain Web Component callbacks
 */
(window as any).__Zone_disable_customElements = true;
(window as any).global = window;
(window as any).global.Buffer = (window as any).global.Buffer || require('buffer').Buffer;
//(window as any).process = {browser: true} //IMPORTANT for aws-sdk};