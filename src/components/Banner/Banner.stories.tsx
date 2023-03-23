import { ComponentMeta, ComponentStory } from "@storybook/react"

import Banner from "."

export default {
  title: "Components/Banner",
  args: {
    urlImage:
      "https://rare-gallery.com/thumbs/4539678-scott-hansen-iso50-tycho-roygbiv-orange-pink-blue-purple-cyan-gray-red-violet.jpg",
    centerText: "Center Text",
    topLeftText: "Top Left Text",
    topRightText: "Top Right Text",
    bottomLeftText: "Bottom Left Text",
    bottomRightText: "Bottom Right Text",
  },
  component: Banner,
} as ComponentMeta<typeof Banner>

export const Default: ComponentStory<typeof Banner> = (args) => (
  <Banner {...args} />
)
