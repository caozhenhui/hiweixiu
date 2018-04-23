import { SYNC_UPDATE } from './const'
export default{
    [SYNC_UPDATE] (state,newphones) {
        state.phones = newphones
    }
}