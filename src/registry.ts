/**
 * Registre des composants.
 *
 * Pour ajouter un composant :
 *   1. Créer un dossier dans src/components/MonComposant/
 *   2. Ajouter index.tsx (le composant React) et meta.ts (les métadonnées)
 *   3. Importer le composant et ses metas ci-dessous
 *   4. Ajouter dans componentModules et metaList
 */

import React from 'react'
import { ComponentMeta } from './types'

// --- Imports des composants ---
import HelloWorld from './components/HelloWorld/index'
import helloWorldMeta from './components/HelloWorld/meta'
import ImageComponent from './components/ImageComponent/index'
import imageComponentMeta from './components/ImageComponent/meta'

// Ajouter les entrées ici pour chaque nouveau composant :
export const componentModules: Record<string, React.ComponentType<any>> = {
    [helloWorldMeta.id]: HelloWorld,
    [imageComponentMeta.id]: ImageComponent,
}

export const metaList: ComponentMeta[] = [
    helloWorldMeta,
    imageComponentMeta,
]
