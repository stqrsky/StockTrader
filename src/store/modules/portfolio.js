const state = {
    funds: 10000,
    stocks: []
};

const mutations ={
    'BUY_STOCK'(state, {stockId, quantity, stockPrive}) {         // the needs to commit a buy stock mutation
        const record = state.stocks.find(element => element.id == stockId);
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    }
};

const actions = {
    sellStock({commit}, order) {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio (state, getters) {
        return state.stocks.map(stock => {                                                  // transform each element in array
            const record = getters.stocks.find(element => element.id == stock.id);          // getter from the ..modules/stocks.js
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }                                                                               // new array where i mapped all values with name & price additionally
        });              
    },
    funds (state) {
        return state.funds;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};