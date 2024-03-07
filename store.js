
const useCounterStore = defineStore('counter', {
    state: () => ({
        count: JSON.parse(localStorage.getItem("pinia123")) || 1,
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
            localStorage.setItem('pinia123', JSON.stringify(this.count));
        },
        decrement() {
            this.count--
            localStorage.setItem('pinia123', JSON.stringify(this.count));
        },
    },
})
