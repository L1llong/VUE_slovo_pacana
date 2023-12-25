import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "main",
            component: () => import("../pages/MainPage.vue"),
        },
        {
            path: "/seriesList",
            name: "seriesList",
            component: () => import("../pages/SeriesListPage.vue"),
        },
        {
            path: "/actors",
            name: "actors",
            component: () => import("../pages/ActorsListPage.vue"),
        },
        {
            path: "/episode/:id",
            name: "episode",
            component: () => import("../pages/WatchEpisodePage.vue"),
        },
        {
            path: "/soundtracks",
            name: "soundtracks",
            component: () => import("../pages/SoundtracksPage.vue"),
        }
    ],
})

export default router