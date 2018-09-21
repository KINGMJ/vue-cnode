<template>
	<div>
		<md-bottom-bar>
			<md-bottom-bar-item md-label="首页" md-icon="home"/>
			<md-bottom-bar-item md-label="发表" md-icon="create"/>
			<md-bottom-bar-item md-label="消息" md-icon="message"/>
			<md-bottom-bar-item md-label="我的" md-icon="person"/>
		</md-bottom-bar>
	</div>
</template>

<script>
    export default {
        name: "app-tabs"
    }
</script>

<style scoped lang="scss">
	.md-bottom-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 2000;
	}
</style>