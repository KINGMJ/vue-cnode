<template>
	<md-app md-waterfall md-mode="fixed">
		<md-app-toolbar class="md-primary">
			<md-button @click="$router.back()" class="md-icon-button">
				<md-icon>chevron_left</md-icon>
			</md-button>
			<span class="md-title">详情</span>
		</md-app-toolbar>

		<md-app-content>
			{{topicDetail}}
		</md-app-content>
	</md-app>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    export default {
        name: "topic",
        computed: {
            ...mapState({
                topicDetail: state=>state.home.topicDetail
            })
        },
        methods: {
            ...mapActions([
                'getTopicDetail'
            ]),
        },
        created: function () {
            this.getTopicDetail({
                id: this.$route.params.id
            });
        },
    }
</script>

<style scoped>

</style>