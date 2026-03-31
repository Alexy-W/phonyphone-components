import { ComponentMeta } from '../../types'

const meta: ComponentMeta = {
    id: 'hello-world',
    name: 'Hello World',
    group: 'Global',
    description: 'Un composant d\'exemple. Affiche un texte personnalisable.',
    parameters: [
        {
            id: 'text',
            name: 'Texte',
            type: 'string',
            defaultValue: 'Hello, World!',
        },
        {
            id: 'color',
            name: 'Couleur',
            type: 'color',
            defaultValue: '#ffffff',
        },
        {
            id: 'fontSize',
            name: 'Taille de police (px)',
            type: 'number',
            defaultValue: 48,
        },
    ],
}

export default meta
