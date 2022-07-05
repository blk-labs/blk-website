export interface Service {
    image: string
    title: string
    text: string
}

export interface Work extends Service {
    path: string
}

export interface Article {
    image: string
    title: string
    date: string
    header?: boolean
    path: string
}

export interface Team {
    image: string
    name: string
    role: string
}