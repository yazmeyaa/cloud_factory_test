import { observer } from "mobx-react"
import { FC } from "react"
import { Toasts } from "shared/stores/toast"
import { SingleToast } from "./singleToast"
import './style.scss'

interface ToastContainerProps {
    toastStore: Toasts
}

const ToastContainer: FC<ToastContainerProps> = ({toastStore}) => {
    return(
        <div className="toast_container">
            {toastStore.toasts.map((toast, key) => {
                return (
                    <SingleToast toast={toast} key={key} />
                )
            })}
        </div>
    )
}

const observableComponent = observer(ToastContainer)

export {observableComponent as ToastContainer}