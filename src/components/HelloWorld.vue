<template>
    <div>
        <p>{{topicsList}}</p>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    export default {
        name: 'HelloWorld',
        computed: {
            ...mapState({
                topicsList: state => state.home.topicsList
            })
        },
        created: function () {
            this.getTopics();
        },
        methods: {
            ...mapActions([
                'getTopics'
            ])
        }
    }
</script>


<style scoped>

</style>
