import Cell from './Cell';
import Total from './Total';
export default {
    install (Vue) {
        Vue.component('cell',Cell),
        Vue.component('Total',Total)
    }
}