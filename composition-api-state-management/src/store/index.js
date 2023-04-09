import { reactive, readonly } from "vue"

const state = reactive({
    counter: 0,
    colorCode: ''
})

const getters = {
    counterSquared () {
        return state.counter ** 2
    }
}

const methods = {
    decreaseCounter () {
        state.counter--
    },
    increaseCounter () {
        state.counter++
    },
    setColorCode (val) {
        state.colorCode = val
    }
}

export default {
    state: readonly(state),
    getters,
    methods
}