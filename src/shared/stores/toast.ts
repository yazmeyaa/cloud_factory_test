import { ToastProperties } from "types/toast";
import { makeAutoObservable } from 'mobx'

export class Toast implements ToastProperties {
    id: number
    title: string;
    description: string;
    kind: "alert" | "info" | "warning";

    constructor(props: ToastProperties) {
        this.id = props.id
        this.kind = props.kind ?? "info"
        this.title = props.title ?? this.kind
        this.description = props.description
    }
}

export class Toasts {
    toasts: Toast[] = []

    constructor(initial?: Toast[]) {
        if (initial) this.toasts = initial
        makeAutoObservable(this)
    }

    public addToast(props: Omit<ToastProperties, 'id'>): Toast {
        const id = Date.now() + Math.random() * 15
        const propsWithId: ToastProperties = { ...props, id }
        const toast = new Toast(propsWithId)
        this.toasts.push(toast)

        return toast
    }

    public removeToastById(id: number) {
        const filtered = this.toasts.filter(item => item.id !== id)
        this.toasts = filtered
    }

    public removeAllToasts() {
        this.toasts = []
    }
}

export const toastsStore = new Toasts()