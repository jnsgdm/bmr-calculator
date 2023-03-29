import { ReactElement } from "react"

export interface Question {
    id: number
    question: string
    desc: string
    step: ReactElement
}