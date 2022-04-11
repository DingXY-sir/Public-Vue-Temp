export default {
  state: {
    isCollapse: false,
    locale: "zh-CN",
    modeStyle: 'vertical'
  },
  mutations: {
    collapseMenu(state:any) {
      state.isCollapse = !state.isCollapse
    },
    selectLocale(state: any,locale:string) {
      state.locale = locale
    },
    selectMode(state: any,mode:string) {
      state.modeStyle = mode
    }
    
  }
}