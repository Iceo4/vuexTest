const ADD_SCORES = 'ADD_SCORES',
	ADD_ITEMNUM = 'ADD_ITEMNUM';

export default {
	[ADD_SCORES](state, payload) {
		state.scores += payload.num;
	},
	[ADD_ITEMNUM](state){
		state.itemNum++;
	}
}