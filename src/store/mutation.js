// 商城状态管理mutations
export default {
  getUsername (state, name) {
    // console.log(name)
    state.username = name
    // console.log(state.username)
    try { // 通过try-catch方法判断浏览器是否支持localStorage
      localStorage.name = name
    } catch (e) {}
  },
  getCartCount (state, Count) {
    // console.log(Count)
    state.cartCount = Count
    // console.log(state.cartCount)
    try { // 通过try-catch方法判断浏览器是否支持localStorage
      localStorage.Count = Count
    } catch (e) {}
  }

}
