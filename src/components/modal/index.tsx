import { FC, MouseEvent, ReactNode, useEffect, useState } from "react"
import './style.scss'
import { createPortal } from "react-dom"

export type ModalProps = {
    heading: string
    children: ReactNode
    onClose?: () => void
}

export const Modal: FC<ModalProps> = ({children, heading, onClose}) => {
    const modal_portal = document.getElementById('modal_portal')
    const [openModal, setOpenModal] = useState(true)

    function handleClickOutside() {
        onClose?.()
        setOpenModal(false)
    }

    function modalBodyClick(event: MouseEvent<HTMLDialogElement>) {
        event.preventDefault()
        event.stopPropagation()
    }

    useEffect(()=> {
        function handleKeydown(event: KeyboardEvent) {
            if(event.key === 'Escape') setOpenModal(false)
        }

        document.addEventListener('keydown', handleKeydown)
        return () => document.removeEventListener('keydown', handleKeydown)
    }, [])


    if (!openModal) return null

    return createPortal(
        (
            <div className="modal_overlay" onClick={handleClickOutside}>
                <dialog className="modal" open onClick={modalBodyClick}>
                    <strong>{heading}</strong>
                    <div className="modal_content">{children}</div>
                </dialog>
            </div>
        ), modal_portal!)
} 