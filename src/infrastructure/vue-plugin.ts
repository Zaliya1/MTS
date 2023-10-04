import infra from "./index";

export default {
  install: function (Vue: any) {
    Vue.prototype.$infra = infra;
  },
};
