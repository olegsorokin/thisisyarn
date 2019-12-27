export const state = () => ({
  itemsList: [],
  total: {
    cost: 0
  },
  isEmpty: true
});

export const mutations = {
  addItem(state, value) {
    let doubleElement = state.itemsList.findIndex(item => item.id === value.item.id && item.color === value.color);

    if (doubleElement === -1) {
      state.itemsList.push({
        name: value.item.name,
        manufacturer: value.item.manufacturer,
        id: value.item.id,
        cost: value.item.cost,
        balance: value.item.balance,
        ballWeightGr: value.item.ballWeightGr,
        img: value.item.img,
        quantity: value.quantity,
        color: value.color
      });
    } else {
      state.itemsList[doubleElement].quantity += value.quantity;
      state.itemsList[doubleElement].balance -= value.quantity;
    }
    state.itemsList.length ? state.isEmpty = false : state.isEmpty = true;
  },
  changeQuantity(state, item) {
    state.itemsList[item.id].quantity = item.quantity
  },
  removeItem(state, id) {
    if (state.itemsList[id]) {
      state.itemsList.splice(id, 1);
    }

    state.itemsList.length ? state.isEmpty = false : state.isEmpty = true;
  }
};
export const actions = {};
export const getters = {
  totalCost: state => () => {
    return state.itemsList.reduce((accum, item) => accum + item.quantity * item.cost, 0);
  },
  totalWeightGr: state => () => {
    return state.itemsList.reduce((accum, item) => accum + item.ballWeightGr, 0);
  }
};
