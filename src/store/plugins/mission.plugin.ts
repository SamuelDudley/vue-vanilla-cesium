import { mission } from '@/store/modules/mission'

export const missionPlugin = (store:any) => {
    // called when the store is initialized
    store.registerModule('mission-UUID', mission)
  }