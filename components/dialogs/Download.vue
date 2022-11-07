<script setup lang="ts">
import { ref, watch } from 'vue'
import { IDownloadPlatform } from '../../interfaces/IDownloadManifest';
import axios from 'axios';

const props = defineProps({
    isActive: Boolean,
    downloadPlatform: Object as () => Partial<IDownloadPlatform>
});
const emit = defineEmits(['download-complete']);

const dialog = ref(true);
const progress = ref(0);

watch(() => props.isActive, async (newValue, _oldValue) => {
    if (newValue === true) {
        progress.value = 0;

        if (typeof props.downloadPlatform === 'undefined')
            return;

        await downloadSALS(props.downloadPlatform.url ?? "", props.downloadPlatform.ext ?? "", props.downloadPlatform.is_server ?? false);
    }
});

async function downloadSALS(p_url: string, ext: string, is_server: boolean) {
    const response = await axios({
        url: p_url,
        method: 'GET',
        responseType: 'blob',
        onDownloadProgress: (progressEvent) => {
            if (typeof progressEvent.total === 'undefined')
                return;

            progress.value = Math.round((progressEvent.loaded * 100) / progressEvent.total);

            if (progress.value === 100)
                setTimeout(() => emit('download-complete'), 1000);
        },
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    if (is_server)
        link.setAttribute('download', `SALS Server${ext}`);
    else
        link.setAttribute('download', `SALS Installer${ext}`);
    document.body.appendChild(link);
    link.click();
}

</script>

<template>
    <v-dialog v-model="dialog" persistent>
        <div class="loader">
            <div class="spinner">
                <v-progress-circular color="primary" indeterminate size="90" />
            </div>
            <h2>Lade runter... ({{ progress }}%)</h2>
        </div>
    </v-dialog>
</template>

<style scoped lang="scss">
.loader {
    text-align: center;

    h2 {
        color: #fff;
    }

    .spinner {
        margin: 0 auto;

        margin-bottom: 5px;

        width: 8em;
        height: 8em;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        backdrop-filter: blur(15px) !important;
        background: rgba(19, 19, 19, 0.5);
        border-radius: 5px;
        transition: all 0.6s ease;
    }
}
</style>