import { ComponentMeta } from '../../types'

const meta: ComponentMeta = {
    id: 'image',
    name: 'Image',
    group: 'Global',
    description: 'Affiche une image en plein écran. Clic ou timeout pour passer au slide suivant.',
    parameters: [
        {
            id: 'image',
            name: 'Image',
            type: 'image',
        },
        {
            id: 'objectFit',
            name: 'Ajustement',
            type: 'select',
            options: ['cover', 'contain', 'fill'],
            defaultValue: 'cover',
            information: 'cover = recadre pour remplir, contain = affiche en entier, fill = étire',
        },
        {
            id: 'timeOut',
            name: 'Durée (ms)',
            type: 'number',
            information: 'Passe automatiquement au slide suivant après ce délai en millisecondes. Laisser vide pour désactiver.',
        },
    ],
}

export default meta
