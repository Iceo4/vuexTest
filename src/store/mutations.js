const REMBER_ANSWER = 'REMBER_ANSWER',
	ADD_ITEMNUM = 'ADD_ITEMNUM';

export default {
	[ADD_ITEMNUM](state, payload) {
		state.itemNum ++;
	},
	[REMBER_ANSWER](state,payload){
		state.answerid[state.itemNum] = payload.id;
	}
}