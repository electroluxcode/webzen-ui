declare class eventBus {
    eventBus: {
        [key: string]: any;
    };
    constructor();
    on: (name: string, event: Function) => void;
    emit: (name: string, data: any) => void;
    off: (eventName: string) => void;
    say: () => void;
}
declare let eventbus: eventBus;
export default eventbus;
