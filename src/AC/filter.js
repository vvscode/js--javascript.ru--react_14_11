import { SET_FILTER_DATE } from '../constants'
//а select почему не сделал?
export function setFilterDate({from, to}) {
    return {
        type: SET_FILTER_DATE,
        payload: { from, to }
    }
}
