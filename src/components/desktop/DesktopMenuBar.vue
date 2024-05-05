<template>
    <div :class="$style.main">
        <span :class="$style.blips">
            <span :class="$style.blipSmall"></span>
            <span :class="$style.blipTiny"></span>
        </span>
        <span
            :class="$style.datetime"
            ref="datetime"
            @click="handleClickDateTime"
        ></span>
        <span :class="$style.padRight"></span>
    </div>
</template>

<script>
export default {
    name: 'DesktopMenuBar',
    data() {
        return {
            isoDateFormat: false,
        }
    },
    methods: {
        handleClickDateTime() {
            this.isoDateFormat = !this.isoDateFormat
        },
    },
    mounted() {
        const format = new Intl.DateTimeFormat('en-US', {
            hour12: false,
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        })

        let lastDatetimeText = '###'

        const updateDateTimeDisplay = () => {
            if (!this.$refs.datetime) {
                return
            }

            const date = new Date()

            const txt = this.isoDateFormat
                ? date.getFullYear() +
                  '-' +
                  (date.getMonth() + 1).toString().padStart(2, '0') +
                  '-' +
                  date.getDate().toString().padStart(2, '0') +
                  ' ' +
                  date.getHours().toString().padStart(2, '0') +
                  ':' +
                  date.getMinutes().toString().padStart(2, '0')
                : format.format(date)

            if (txt !== lastDatetimeText) {
                lastDatetimeText = txt
                this.$refs.datetime.innerText = txt
            }
        }

        setInterval(() => updateDateTimeDisplay(), 250)
        updateDateTimeDisplay()
    },
}
</script>

<style module>
.main {
    background-color: black;
    color: white;
    font-size: 12px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.datetime {
    user-select: none;
    margin: auto;
}

.blips {
    display: flex;
    margin-left: 14px;
}

.blipSmall {
    background-color: #f3f3f3;
    display: inline-block;
    height: 6px;
    width: 24px;
    border-radius: 4px;
}

.blipTiny {
    background-color: #7e7e7e;
    display: inline-block;
    height: 6px;
    width: 6px;
    border-radius: 4px;
    margin-left: 6px;
}

.padRight {
    margin-right: 14px;
    display: inline-block;
    width: 36px;
}
</style>
