/**
 * Types partagés avec le host PhonyPhone.
 * Ces types doivent rester synchronisés avec
 * phonyphone-front/src/shared/interfaces/application/animation.ts
 */

export type DeviceGroup =
    | 'Global'
    | 'Mobile'
    | 'Mobile Enfant'
    | 'Ordinateur'
    | 'Ordinateur Wrapper'
    | 'Ordinateur Enfant'
    | 'Tablette'
    | 'Autres'

export interface AnimationParameter {
    id: string
    name?: string
    information?: string
    global?: boolean
    type:
        | 'string'
        | 'text'
        | 'number'
        | 'boolean'
        | 'color'
        | 'select'
        | 'array'
        | 'object'
        | 'image'
        | 'video'
        | 'entity'
        | 'json'
        | 'audio'
    jsonSchema?: object
    entityConfig?: {
        resource: string
        displayField?: string
    }
    properties?: Record<string, AnimationParameter>
    itemConfig?: AnimationParameter
    defaultValue?: string | number | boolean | []
    options?: string[]
    canReferenceHandler?: boolean
}

export interface AnimationHandler {
    id: string
    type: 'image' | 'video'
    description?: string
}

/** Métadonnées d'un composant (sans le composant React lui-même). */
export interface ComponentMeta {
    id: string
    name: string
    group: DeviceGroup
    type?: string
    information?: string
    description?: string
    handlers?: AnimationHandler[]
    parameters: AnimationParameter[]
    styles?: object
}

/** Props reçues par chaque composant au moment du rendu dans le player. */
export interface ComponentProps {
    parameters: Record<string, unknown>
    onComplete: () => void
    children?: React.ReactNode
}
