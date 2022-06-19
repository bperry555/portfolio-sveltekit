import { defineMDSveXConfig as defineConfig } from "mdsvex";
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

const config = defineConfig({
    "extensions": [".svelte.md", ".md", ".svx"],

    "smartypants": {
        "dashes": "oldschool"
    },

    "remarkPlugins": [],
    "rehypePlugins": []
});

export default config;