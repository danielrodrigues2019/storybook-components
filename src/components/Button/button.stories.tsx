import { ComponentStory, ComponentMeta } from "@storybook/react"
import Button from "."

export default {
  title: "Components/Button",
  args: {
    label: "Click me!",
    onClick: () => alert("Se clicou hein ( ͡° ͜ʖ ͡°)"),
  },
  component: Button,
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)
