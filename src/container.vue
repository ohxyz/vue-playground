<template>
    <div class="container">{{ message }}</div>
</template>

<script>
export default {
    data () {
        return {
            message: 'Hello Vue!'
        }
    }
}
</script>

<style>
.container {
    color: red;
}
</style>