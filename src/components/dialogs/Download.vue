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

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { getDLLink } from '../../plugins/sals';
import axios from 'axios';

export default defineComponent({
    emits: ['download-complete'],
    props: { isActive: Boolean },
    setup(props, ctx) {

        const dialog = ref(true);
        const progress = ref(0);

        watch(() => props.isActive, async (newValue, _oldValue) => {
            if (newValue === true) {
                progress.value = 0;

                await downloadSALS();
            }
        });

        async function downloadSALS() {
            const response = await axios({
                url: await getDLLink(),
                method: 'GET',
                responseType: 'blob',
                onDownloadProgress: (progressEvent) => {
                    progress.value = Math.round((progressEvent.loaded * 100) / progressEvent.total);

                    if (progress.value === 100)
                        setTimeout(() => ctx.emit('download-complete'), 1000);
                },
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'SALS Installer.exe');
            document.body.appendChild(link);
            link.click();
        }

        return { dialog, progress };
    }
})
</script>

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