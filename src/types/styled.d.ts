import { DefaultTheme } from "styled-components"

interface IBackgroundColor {
  primary: string
  secondary: string
  tertiary: string
  details: string
  detailsAlt: string
  alternativeState: string
}

interface ITextColor {
  title: string
  paragraph: string
  subtitle: string
  details: string
  base: string
}

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: IBackgroundColor
    textColor: ITextColor
  }
}
