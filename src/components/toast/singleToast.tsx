import { FC } from "react"
import { Toast, toastsStore } from "shared/stores/toast"

interface SingleToastProps {
    toast: Toast
}

export const SingleToast: FC<SingleToastProps> = ({ toast }) => {

    function handleCloseButton() {
        toastsStore.removeToastById(toast.id)
    }
    
    return (
        <div className={`toast toast_${toast.kind}`}>
            <strong>{toast.title}</strong>
            <button onClick={handleCloseButton} className="close_button">X</button>
            <div>
                <span>
                    {toast.description}
                </span>
            </div>
        </div>
    )
}