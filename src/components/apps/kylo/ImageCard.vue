<template>
    <div :class="$style.card">
        <img :src="imgUrl" />
    </div>
</template>

<script>
export default {
    name: 'ImageCard',
    props: {
        imgUrl: String,
    },
}
</script>

<style module>
.card {
}
</style>
