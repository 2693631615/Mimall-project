export default {
  getUsername (context, name) {
    context.commit('getUsername', name)
  },
  getCartCount (context, Count) {
    context.commit('getCartCount', Count)
  }
}
