import { ReactElement } from "react"

export interface Question {
    id: number
    desc: string
    step: ReactElement
}