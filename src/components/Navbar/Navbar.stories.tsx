import {  ComponentMeta, ComponentStory } from '@storybook/react'

import Navbar from '.'

export default {
  title: 'Components/Navbar',
  component: Navbar
} as ComponentMeta<typeof Navbar>;

export const Default: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />