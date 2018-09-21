<template>
	<div class="page-container">
		<md-tabs @md-changed="changeTabs" class="md-primary" md-alignment="fixed">
			<md-tab id="all" md-label="全部"/>
			<md-tab id="good" md-label="精华"/>
			<md-tab id="share" md-label="分享"/>
			<md-tab id="ask" md-label="问答"/>
			<md-tab id="job" md-label="招聘"/>
		</md-tabs>

		<md-content>
			<md-list class="md-triple-line">
				<template v-for="topic in topicsList">
					<md-list-item>
						<md-avatar>
							<img :src="topic.author.avatar_url" alt="">
						</md-avatar>

						<div class="md-list-item-text item-title">
							<p>{{topic.title}}</p>
						</div>
					</md-list-item>

					<md-divider class="md-inset"/>
				</template>
			</md-list>
		</md-content>
	</div>
</template>

<script>

    import {mapState, mapActions} from 'vuex';

    export default {
        name: 'TopicsList',
        computed: {
            ...mapState({
                topicsList: state=>state.home.topicsList
            })
        },
        created: function () {
            this.getTopics();
        },
        methods: {
            ...mapActions([
                'getTopics'
            ]),
            //tab切换
            changeTabs: function (id) {
                this.getTopics({
                    tab: id
                })
            }
        }
    }
</script>


<style scoped lang="scss">
	.md-content {
		max-height: 90vh;
		overflow-x: hidden;
		border: 1px solid rgba(#000, .12);
	}

	.item-title {
		min-height: 48px;
	}
</style>
