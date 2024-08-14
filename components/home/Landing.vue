<script setup lang="ts">
import type { IDownloadManifest, IDownloadPlatform } from '~~/interfaces/IDownloadManifest';
import DownloadModal from '../dialogs/Download.vue';

const { $getDownloadManifest } = useNuxtApp();

const downloads: Ref<Partial<IDownloadManifest>> = ref({});
const download = ref(false);
const downloadPlatform: Ref<Partial<IDownloadPlatform>> = ref({});

function downloadLauncher(entry?: IDownloadPlatform) {
    if (typeof entry === 'undefined') {
        if (typeof downloads.value.platforms === 'undefined')
            return;

        if (window.navigator.userAgent.includes('Windows')) {
            entry = downloads.value.platforms['windows-x86_64'];
        } else {
            entry = downloads.value.platforms['linux-x86_64'];
        }
    }

    entry = { ...entry };
    entry.url = entry.url.replace(entry.compressed, '');

    downloadPlatform.value = entry;
    download.value = true;
}

onMounted(async () => {
    downloads.value = await $getDownloadManifest();
});
</script>

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
            <div class="btn-group">
                <v-btn class="dl-main" flat color="primary" @click="downloadLauncher()">
                    Download Launcher
                </v-btn>
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn class="dl-select" flat color="primary" v-bind="props">
                            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="downloadEntry in downloads.platforms">
                            <v-list-item-title>
                                <p>
                                    {{ downloadEntry.display }} -
                                    <v-btn variant="text" @click="downloadLauncher(downloadEntry)">
                                        Download
                                    </v-btn>
                                </p>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>

            <v-btn flat href="https://docs.sals-app.com/de" target="_blank" variant="outlined">Dokumentation</v-btn>
        </div>
    </section>

    <download-modal v-model="download" :download-platform="downloadPlatform" :is-active="download"
        @download-complete="download = false" />
</template>



<style lang="scss" scoped>
#section1 {
    position: absolute;
    top: 35vh;

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

        .btn-group {
            display: inline-table;
            border-radius: 5px;
            animation: pulseButton 2s infinite;

            .dl-main {
                border-radius: 6px 0 0 6px;
            }

            .dl-select {
                border-radius: 0 6px 6px 0;
                margin-left: 3px;
                padding: 0 !important;
                min-width: 38px;
            }
        }

        button,
        a {
            height: 65px;
            font-size: 1.2em;
        }
    }
}

@keyframes pulseButton {
    0% {
        -moz-box-shadow: 0 0 0 0 rgba(0, 91, 228, 1);
        box-shadow: 0 0 0 0 rgba(0, 91, 228, 1);
    }

    75% {
        -moz-box-shadow: 0 0 0 rgba(0, 91, 228, 0);
        box-shadow: 0 0 0 18px rgba(0, 91, 228, 0);
    }

    100% {
        -moz-box-shadow: 0 0 0 0 rgba(0, 91, 228, 0);
        box-shadow: 0 0 0 0 rgba(0, 91, 228, 0);
    }
}
</style>
