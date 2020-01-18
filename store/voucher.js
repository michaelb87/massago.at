const {defaultState} = require('../shared/defaultState')

export const state = () => (defaultState())

export const mutations = {
    setFrom(state, from) {
        state.from = from
    },
    addOrder(state, order) {
        state.selectedVouchers.push(order)
    },
    deleteSelectedVoucher(state, svourcher) {
        state.selectedVouchers.splice(state.selectedVouchers.indexOf(svourcher), 1)
    },
    resetCart(state) {
        state.selectedVouchers = []
    }
}