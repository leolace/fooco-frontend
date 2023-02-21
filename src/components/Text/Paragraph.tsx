import styled from "styled-components"
import { variant } from "styled-system"

interface IPropsParagraph {
  size: "xl" | "2xl"
}

export const Paragraph = styled.p<IPropsParagraph>`
  color: ${({ theme }) => theme.textColor.paragraph};
  line-height: 1.5;

  ${variant({
    prop: "size",
    variants: {
      "2xl": {
        fontSize: "1.3rem",
        "@media (max-width: 600px)": {
          fontSize: "1.1rem",
        },
      },
      xl: {
        fontSize: "1.2rem",
        "@media (max-width: 600px)": {
          fontSize: "1rem",
        },
      },
    },
  })}
`