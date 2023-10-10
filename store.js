
const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 1,
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
    },
})
