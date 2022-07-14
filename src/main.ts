import { invoke } from "@tauri-apps/api";
import App from "./App.svelte";

const app = new App({
    target: document.body,
    props: {
        name: "world",
    },
});

export default app;
invoke("greet", { name: "World" }).then((response) => console.log(response));
