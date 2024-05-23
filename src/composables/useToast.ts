import  { nanoid } from "nanoid"

const toastList = ref<IToast[]>([])

export interface IToast {
  id: string
  type: "success" | "info" | "warning" | "error"
  description: string
  duration: number
  title: string
  showClose: boolean
}

export function useToast() {
  const setToast = (toast: IToast) => {
    return (toastList.value = [...toastList.value, toast])
  }

  const buildToast = (
    type: IToast["type"],
    title: string,
    description: string,
    duration: number,
    showClose: boolean,
  ) => {
    return {
      id: nanoid(),
      type,
      description,
      duration,
      title,
      showClose,
    }
  }

  const warn = (title: string, description: string = "", showClose: boolean = true, duration: number = 5000) => {
    const newToast: IToast = buildToast("warning", title, description, duration, showClose)
    return setToast(newToast)
  }
  const error = (title: string, description: string = "", showClose: boolean = true, duration: number = 5000) => {
    const newToast: IToast = buildToast("error", title, description, duration, showClose)
    return setToast(newToast)
  }
  const info = (title: string, description: string = "", showClose: boolean = true, duration: number = 5000) => {
    const newToast: IToast = buildToast("info", title, description, duration, showClose)
    return setToast(newToast)
  }
  const success = (title: string, description: string = "", showClose: boolean = true, duration: number = 5000) => {
    const newToast: IToast = buildToast("success", title, description, duration, showClose)
    return setToast(newToast)
  }

  const removeToast = (id: IToast["id"]) => {
    return (toastList.value = toastList.value.filter((toast) => id !== toast.id))
  }

  const clearToastList = () => {
    return (toastList.value = [])
  }

  return {
    removeToast,
    clearToastList,
    warn,
    info,
    error,
    success,
    toastList: computed(() => toastList.value),
  }
}

