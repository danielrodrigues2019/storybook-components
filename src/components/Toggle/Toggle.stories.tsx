import {  ComponentMeta, ComponentStory } from '@storybook/react'

import Toggle from '.'

export default {
  title: 'Components/Toggle',
  component: Toggle
} as ComponentMeta<typeof Toggle>;

export const Default: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />