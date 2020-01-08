interface waypoint {
    latitude: number,
    longitude: number,
    altitude: number,
    id: string
}

interface waypoints {
    waypoints: Array<waypoint>
}

export const mission = {
    namespaced: true,
    state: function() {
        // new state instance for each use of this module
        return {
            counter: 100,
            waypoints: new Array<waypoints>()
        };
    },
    
    actions: {
    },
   
    getters: {
        counter: (state:any) => state.counter,
        waypoints: (state:any) => state.waypoints,
        waypointLLAs: (state:any) => {
            let LLAs = new Array<number>()
            state.waypoints.forEach((point:waypoint) => {
                LLAs.push(point.latitude, point.longitude)
            });
            return LLAs
        }
    },
    mutations: {
        updateCounter(state:any, counter:number) {
            state.counter = counter
        },
        updateWaypoints(state:any, waypoints:Array<waypoints>) {
            state.waypoints = waypoints
        },
        appendWaypoint(state:any, waypoint:waypoint) {
            state.waypoints.push(waypoint)
        },
        removeWaypointById(state:any, id:string) {
            state.waypoints = state.waypoints.filter(function (waypoint:waypoint) {
                return waypoint.id != id
            })
        }
    }
};