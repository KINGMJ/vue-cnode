<template>
	<div id="app">
		<router-view/>
		<AppTabs/>
	</div>
</template>

<script>
    import AppTabs from './components/AppTabs.vue';

    export default {
        name: 'app',
        components: {
            AppTabs
        }
    }
</script>


<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
