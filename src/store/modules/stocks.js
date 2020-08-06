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
    setStocks: ({ commit }) => {
        commit('SET_STOCKS')
    }
};