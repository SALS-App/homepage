<script setup lang="ts">
import logo from '../assets/images/logo.png';
</script>

<template>
    <v-row class="navbar">
        <v-col md="4">
            <v-img :src="logo" alt="SALS Logo" width="500px"></v-img>
        </v-col>

        <v-col md="7" class="ml-auto">
            <div class="links">
                <ul>
                    <li><a href="https://docs.sals-app.com" target="_blank">Docs</a></li>
                    <li><a href="https://github.com/SALS-App/SALS" target="_blank">Bug Tracker</a></li>
                    <li><a href="https://brain-beta.sals.app">Admin Login</a></li>
                    <li><a href="https://steamcommunity.com/id/TAINCER" target="_blank">Kontakt</a></li>
                </ul>
            </div>
        </v-col>
    </v-row>
</template>

<style lang="scss" scoped>
.navbar {
    height: auto;
    padding-left: 0;
}

.links {
    padding-top: 0.6em;
    padding-right: 4%;
    float: right;

    ul {
        list-style: none;

        li {
            float: left;
            margin-right: 2.5em;

            a {
                color: #fff;
                text-decoration: none;
                border-bottom: 1px solid transparent;
                transition: all 0.15s ease;
                font-size: 1.35em;
                font-weight: 300;

                &:hover {
                    color: darken(#fff, 10%);
                    border-bottom-color: rgb(27, 68, 204);
                }
            }
        }
    }
}
</style>