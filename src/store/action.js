export default {
  addNum({
    commit
  }) {
    if (true) {
      commit('ADD_ITEMNUM')
    }
  },

  getData({
    commit
  }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('ADD_SCORES', {
          num: 1
        })
        resolve(1234)
      }, 1000)
    })
  }
}
