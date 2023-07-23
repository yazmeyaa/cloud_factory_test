import { FC } from "react"
import { Toast } from "shared/stores/toast"

interface SingleToastProps {
    toast: Toast
}

export const SingleToast: FC<SingleToastProps> = ({ toast }) => {
    return (
        <div className={`toast toast_${toast.kind}`}>
            <strong>{toast.title}</strong>
            <div>
                <span>
                    {toast.description}
                </span>
            </div>
        </div>
    )
}