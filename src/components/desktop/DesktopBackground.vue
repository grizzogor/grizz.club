<template>
    <div :class="$style.background">
        <img :class="$style.backgroundImg" src="@/assets/img/background.png" />
    </div>
</template>

<script>
export default {
    name: 'DesktopBackground',
}
</script>

<style module>
.background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    background-color: #a13978;
}

.backgroundImg {
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0;

    animation-name: backgroundImgIntro;
    animation-delay: 1s;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

@keyframes backgroundImgIntro {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>
