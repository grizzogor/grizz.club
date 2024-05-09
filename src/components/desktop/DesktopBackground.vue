<template>
    <div :class="$style.background">
        <img
            src="@/assets/img/desktop/wavetr.png"
            :class="{ [$style.wavetr]: true, [$style.wave]: true }"
            tag="Wave background top right"
        />
        <img
            src="@/assets/img/desktop/wavetr.png"
            :class="{ [$style.wavebl]: true, [$style.wave]: true }"
            tag="Wave background bottom left"
        />
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
    background-color: #2d273d;

    transition: background-color 0.1s ease;
}

.wave {
    position: absolute;
    height: min(75vh, 75vw);
    opacity: 0;

    animation-name: backgroundImgIntro;
    animation-delay: 0.75s;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.wavetr {
    top: 0;
    right: 0;
}

.wavebl {
    bottom: 0;
    left: 0;
    transform: rotateZ(180deg);
}

@keyframes backgroundImgIntro {
    100% {
        opacity: 1;
    }
}
</style>
