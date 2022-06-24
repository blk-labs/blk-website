export interface Service {
    image: string
    title: string
    text: string
}

export interface Work extends Service {
    path: string
}