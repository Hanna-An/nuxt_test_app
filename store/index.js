export const state = () => ({
    list: JSON.parse(localStorage.getItem("cart")) || []
})

export const mutations = {
    add(state, el) {
        console.log(el);
        state.list.push(el);
        const parsed = JSON.stringify(state.list);
        localStorage.setItem('cart', parsed);
    },
    remove(state, id) {
        state.list = state.list.filter((el) => {
            return el.id != id
        });
        const parsed = JSON.stringify(state.list);
        localStorage.setItem('cart', parsed);
    }   
}
export const getters = {
    get(state) {
        return state.list;
    },
    count(state){
        console.log(state);
        return state.list.length;
    },
    total(state){
        return state.list.reduce((pre, current) => pre + current.cost, 0);
    }
}
