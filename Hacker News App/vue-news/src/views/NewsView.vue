<template>
    <div>
        <div v-for="user in users">
            {{ user.title }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: []
        }
    },
    methods: {
    },
    created(){

        this.$store.dispatch('FETCH_NEWS');
        
        // fetchNewsList()
        //     .then(response => {
        //         this.users = response.data;
        //     })
        //     .catch(function(error){
        //         console.log(error);
        //     })
    }
}
</script>

<style>

</style>