export interface ToastProperties {
    id: number
    title?: string
    description: string
    kind?: 'alert' | 'info' | 'warning'
}