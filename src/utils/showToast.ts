import { toast } from 'sonner'
import { Position } from './position.type'

export type ToastProps = {
    message: string
    type?: 'error' | 'success' | 'info'
    position?: Position
    duration: number
    onAutoClose?: () => void
}

export const showToast = ({
    message,
    position,
    duration,
    type,
    onAutoClose,
}: ToastProps) => {
    type = type ?? 'info'
    toast[type](message, {
        duration: duration ?? 3000,
        position,
        onAutoClose,
    })
}