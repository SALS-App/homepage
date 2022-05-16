<template>
    <section id="section1">
        <div class="info-text">
            <h1>Der All-In-One Launcher für jedes ArmA Projekt!</h1>

            <div>
                <p>Elegantes und modernes Interface.</p>
                <p>Einfache Administration für die Community.</p>
                <p>Einfache Bedienung um so unkompliziert wie möglich ins Spiel zu starten.</p>
            </div>
        </div>

        <div class="action-links">
            <v-btn flat color="primary" @click="download = true">Download
                Launcher
            </v-btn>
            <v-btn flat href="https://docs.sals-app.com/de" target="_blank" variant="outlined">Dokumentation</v-btn>
        </div>
    </section>

    <download-modal v-model="download" :is-active="download" @download-complete="download = false"></download-modal>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import DownloadModal from '../dialogs/Download.vue';

export default defineComponent({
    components: { DownloadModal },
    setup() {
        const download = ref(false);

        return { download };
    }
})
</script>

<style lang="scss" scoped>
#section1 {
    position: absolute;
    top: 450%; // 35

    .info-text {
        margin-top: 3%;

        h1 {
            font-size: 2.4em;
            margin-top: 0;
            margin-bottom: 0.5rem;
            font-weight: 500;
            line-height: 1.2;
        }


        p {
            line-height: 1.4em; // 0.4
            letter-spacing: 0.05em;
            font-size: 1.1em;
        }
    }

    .action-links {
        margin-top: 20%;

        a {
            border-color: hsla(0, 0%, 100%, .12);
            margin-left: 2.5em;
        }

        button,
        a {
            height: 65px;
            font-size: 1.2em;
        }
    }
}
</style>