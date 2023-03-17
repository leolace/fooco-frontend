import React from "react"
import * as Accordion from "@radix-ui/react-accordion"
import { Container, Item, RootContainer, Header } from "./style"
import { ReactComponent as Seta } from "@assets/icons/seta-baixo.svg"
import { LayoutGroup, motion, spring } from "framer-motion"

interface IPropsAccordion {
  items: {
    header: string
    content: React.ReactNode
  }[]
  className: string
}

interface TriggerProps {
  children: React.ReactNode
  className?: string
}

const index = ({ items, className }: IPropsAccordion) => {
  return (
    <Container>
      <RootContainer type="single" collapsible className={className}>
        {items.map(({ content, header }) => (
          <Item value={header} key={header}>
            <AccordionTrigger className="trigger">{header}</AccordionTrigger>
            <Accordion.Content className="content">
              <div className="content-text">{content}</div>
            </Accordion.Content>
          </Item>
        ))}
      </RootContainer>
    </Container>
  )
}

export const AccordionTrigger = ({ children, className }: TriggerProps) => (
  <Header className={className}>
    <Accordion.Trigger>
      {children}
      <Seta />
    </Accordion.Trigger>
  </Header>
)

export default index
