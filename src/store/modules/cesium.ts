export enum CesiumEventType {
    zoomToLocation
}

export interface Payload {
    [CesiumEventType.zoomToLocation]: {
        latitude: number,
        longitude: number
    }
}

export interface CesiumEvent {
    eventType: CesiumEventType,
    timestamp?: number, // new Date().getTime() set on mutation
    payload: Payload[CesiumEventType]
}

class State {
    event: CesiumEvent | null = null
}

export const cesium = {
    namespaced: true,
    state: new State(),
    getters: {
        getEvent: (state:any) => state.event
    },
    mutations: {
        publishEvent(state:any, event:CesiumEvent) {
            event.timestamp = new Date().getTime()
            state.event = event
        }
    }
};