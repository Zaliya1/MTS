import Vue from "vue";
// @ts-ignore
import Vuex, {StoreOptions} from "vuex"
Vue.use(Vuex);

import { Form } from "types"
export interface RootState {
    forms: Form[] | [];
}

const store: StoreOptions<RootState> = {
    state: {
        forms: [],
    },
    actions: {
        actionForm(context: any, forms: Form[]) {
            console.log('action')
            context.commit('mutateForm', forms)
        }
    },
    mutations: {
        mutateForm(state, forms: Form[]) {
            console.log('mutation')
            state.forms = forms;
            console.log(state.forms)
        },
    }
}

export default new Vuex.Store<RootState>(store);
