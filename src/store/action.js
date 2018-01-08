import ajax from '../config/ajax';
export default {
  addNum({
    commit,
    state
  }, id) {
    commit('REMBER_ANSWER', {
      id
    });
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM')
    }
  },
  getData({
    commit
  }) {
    let url = 'http://operating-activities.putao.com/happyfriday?active_topic_id=4';
    ajax('GET', url).then(res => {
      commit('INIT_DATA', {
        res
      })
    })
  }
}
