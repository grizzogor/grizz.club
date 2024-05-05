<template>
    <div :class="$style.main">
        <DesktopBackground></DesktopBackground>
        <DesktopContainer></DesktopContainer>
    </div>
</template>

<script>
import DesktopBackground from '@/components/desktop/DesktopBackground.vue'
import DesktopContainer from '@/components/desktop/DesktopContainer.vue'

export default {
    name: 'App',
    components: {
        DesktopBackground,
        DesktopContainer,
    },
}

document.addEventListener('dragover', (event) => {
    event.preventDefault()
})
</script>

<style>
@font-face {
    font-family: 'CantarellFont';
    src: local('Cantarell'), url('assets/font/cantarell.ttf');
}

@font-face {
    font-family: 'MonospaceFont';
    src: local('Source Code Pro'), url('assets/font/sourcecodepro.ttf'),
        local('monospace');
}

html {
    font-family: CantarellFont, Arial, Helvetica, sans-serif;
    font-size: 12px;
}

body {
    margin: 0;
    background-color: #242424;
    color: #eeeeee;
}

a {
    color: #ff7300;
}

a:visited {
    color: #a970ce;
}

button {
    border-radius: 6px;
    border: none;
    background-color: #505050;
    color: #f7f7f7;
    font-weight: bold;
    font-size: 14px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;

    transition: background-color 0.15s ease;
}

button:hover {
    background-color: #595959;
}

button:active {
    background-color: #6e6e6e;
}

/* Disable default focus border around contenteditable elements */
[contenteditable]:focus {
    outline: 0px solid transparent;
}

pre {
    font-family: MonospaceFont;
}
</style>

<style module>
.main {
    position: relative;
    height: 100vh;
    overflow: hidden;

    animation-name: desktop-intro;
    animation-delay: 0.25s;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    border-radius: 50px;
    opacity: 0;
    transform: scaleX(80%) scaleY(80%);
}

@keyframes desktop-intro {
    0% {
        opacity: 0;
    }

    40% {
        opacity: 0.75;
    }

    100% {
        border-radius: 0px;
        opacity: 1;
        transform: none;
    }
}
</style>
