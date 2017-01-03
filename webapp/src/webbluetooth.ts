/// <reference path="../../typings/globals/web-bluetooth/index/index.d.ts" />

export function isUartEnabled(): boolean {
    const config = pxt.appTarget.bluetooth;
    return !!config && !!config.uart && !!navigator.bluetooth;
}

// must be called from a use click
export function pairUartDevicesAsync(): Promise<void> {
    const config = pxt.appTarget.bluetooth;
    if (!config || !config.uart || !navigator.bluetooth)
        return Promise.resolve();

    const UART_SERVICE = '6e400001-b5a3-f393-e0a9-e50e24dcca9e';
    const UART_RX_CHARACTERISTIC = '6e400002-b5a3-f393-e0a9-e50e24dcca9e';
    const UART_TX_CHARACTERISTIC = '6e400003-b5a3-f393-e0a9-e50e24dcca9e';
    return (<any>navigator.bluetooth).requestDevice({
        filters: {
            services: [UART_SERVICE]
        }
    }).then((device: any) => {

    }).catch((error: Error) => {
        // oops
        pxt.debug(error);
    });
}