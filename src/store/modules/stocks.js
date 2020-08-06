import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {      //randomize stock data when end the day

    }
};

const actions = {
    buyStock: ({ commit }, order) => {
        commit();               // commit a certain mutation in one of the portfolio file
    },
    initStocks: ({ commit }) => {       // initalize stocks
        commit('SET_STOCKS', stocks)
    }, 
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    }
};

const getters = {
    stocks: state => {
        return state. stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}