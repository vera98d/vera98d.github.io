import { createApp } from "vue";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import i18n from "./vue-i18n";

const app = createApp(App);

app.use(i18n);

app.mixin({
    created() {
        AOS.init({
            delay: 0,
            duration: 900,
            easing: "ease-in-out"
        });
    },
});

app.mount("#app");
