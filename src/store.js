import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        search: false,
        searchResults : {},
        token: null,
        user: null
    },
    mutations: {

        TOGGLE_SEARCH(state){
            state.search = !state.search;
        },
        SET_SEARCH_RESULTS(state, results){
            state.searchResults = results; 
        },
        SET_TOKEN(state, token){
            localStorage.setItem('token', token);
            state.token = token;
        },
        SET_USER_NAME(state, value){
            state.user = value;
        },
        CLEAR_USER_NAME(state){
            state.user = null;
        }
    },
    actions: {
        changeSearchState({commit}){
            commit('TOGGLE_SEARCH');
        },
        commitSearchResults({commit}, value){
            commit('SET_SEARCH_RESULTS', value);
        },
        getTokenAction({commit}){
            if(this.state.token == null){
                if(localStorage.getItem('token') == null){
                    return null;
                }else{
                    commit('SET_TOKEN', localStorage.getItem('token') );
                    return this.getters.getToken;
                }
            }else{
                return this.state.token;
            }
        
        },
        logOut({commit}){
            commit('SET_TOKEN', null);
        }
    },
    getters:{
        getSearchState: state =>{
            return state.search;
        },
        getSearchResults: state =>{
            return state.searchResults;
        },
        getToken: state =>{
            return state.token;
        },
        getUserName: state =>{
            return state.user;
        }
    }
})

