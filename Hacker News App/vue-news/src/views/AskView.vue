<template>
    <div>
        <div v-for="(ask, index) in fetchedAsks" :key="index">
            {{ ask.title }}
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'fetchedAsks'
        ]),

        // ...mapState({
        //     asks: state => state.asks
        // })

        // asks() {
        //     return this.$store.state;
        // }
    },
    created() {
        this.$store.dispatch('FETCH_ASKS');
    }
}
</script>

<style>

</style>