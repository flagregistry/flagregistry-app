import * as path from 'path'
import { readFileSync } from 'fs'

import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'
import { webUpdateNotice } from '@plugin-web-update-notification/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        babel({ presets: [reactCompilerPreset()] }),
        tailwindcss(),
        svgr(),
        webUpdateNotice({
            versionType: 'pkg_version',
            notificationProps: {
                title: 'New version available',
                description:
                    'A new version of this app is available. Please refresh to update.',
                buttonText: 'Refresh',
                dismissButtonText: 'Dismiss',
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(import.meta.dirname, 'src'),
        },
    },
    define: {
        'import.meta.env.VITE_APP_VERSION': JSON.stringify(
            JSON.parse(readFileSync('./package.json', 'utf-8')).version,
        ),
    },
    build: {
        sourcemap: true,
    },
})
