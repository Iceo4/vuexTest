<template>
  	<div>
    	<router-link to="/score">答题页</router-link>
    	<div>{{ $store.state.scores }}</div>
    	<div @click="addScore">增加</div>
  	</div>
</template>
