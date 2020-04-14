<template>
    <div>
        <p v-for="(item, index) in fetchedAsks" :key="index">
            <router-link v-bind:to="`item/${item.id}`">
                {{ item.title }}
            </router-link>
            <small>{{ item.time_ago }} by {{ item.user }}</small>
        </p>
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