<template>
    <div>
        {{ item.title }} <small>by {{ item.by }}</small>
    </div>
</template>

<script>
export default {
    computed: {
        item() {
            return this.$store.state.item;
        }
    },
    created() {
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', itemId);
    }
}
</script>

<style>

</style>