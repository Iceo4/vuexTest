<template>
    <section>
        <header>
            <header class="top_tips">
                <span class="num_tip" v-if="fatherComponent == 'home'">{{level}}</span>
                <span class="num_tip" v-if="fatherComponent == 'item'">题目{{itemNum}}</span>
            </header>
        </header>
        <div v-if="fatherComponent == 'home' ">
            <div class="home_logo item_container_style"></div>
            <router-link to="/item" class="start button_style"></router-link>
        </div>
        <div v-else-if="fatherComponent == 'item'">
        <div class="item_back item_container_style">
    			<div class="item_list_container">
    				<header class="item_title">{{itemDetail[itemNum-1].title}}</header>
    				<ul>
    					<li  v-for="(item, index) in itemDetail[itemNum-1].content" @click="choosed(index)" class="item_list">
    						<span class="option_style" v-bind:class="{'has_choosed':choosedNum==index}">{{chooseType(index)}}</span>
    						<span class="option_detail">{{item}}</span>
    					</li>
    				</ul>
    			</div>
    		</div>
    		<button class="next_item button_style" @click="nextItem" v-if="itemNum < itemDetail.length"></button>
    		<button class="submit_item button_style" v-else @click="submitAnswer"></button> -->
        </div>
    </section>
</template>
<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        name: "need",
        props: ['fatherComponent'],
        data() {
            return {
                itemId: null,
                choosedNum: null,
            }
        },
        computed:mapState([
           'itemNum',
           'level',
           'itemDetail'

        ]),

    }
</script>