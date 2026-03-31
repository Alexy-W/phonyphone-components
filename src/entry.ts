/**
 * Point d'entrée du bundle.
 *
 * Expose window.__phonyphone_components__ avec le protocole attendu par
 * phonyphone-front/src/registry/remoteLoader.ts :
 *   - init()               → initialisation (no-op ici)
 *   - get('./registry')    → tableau de ComponentMeta
 *   - get('./components/id') → { default: ReactComponent }
 */

import { componentModules, metaList } from './registry'

declare global {
    interface Window {
        __phonyphone_components__: {
            init(): Promise<void>
            get(module: string): Promise<() => { default: unknown }>
        }
    }
}

window.__phonyphone_components__ = {
    async init() {
        // no-op : le host n'a pas besoin d'un shared scope ici
    },

    async get(module: string) {
        if (module === './registry') {
            return () => ({ default: metaList })
        }

        const id = module.replace('./components/', '')
        const component = componentModules[id]

        if (!component) {
            throw new Error(`[phonyphone-components] Composant introuvable : "${id}"`)
        }

        return () => ({ default: component })
    },
}
