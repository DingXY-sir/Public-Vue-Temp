export default {
  state: {
    isCollapse: false
  },
  mutations: {
    collapseMenu(state:any) {
       state.isCollapse = !state.isCollapse
    }
  }
}