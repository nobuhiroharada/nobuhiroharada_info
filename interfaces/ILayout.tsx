import { ReactNode } from 'react'

export interface ILayout {
  title: string,
  keywords: string,
  description: string,
  children: ReactNode
}