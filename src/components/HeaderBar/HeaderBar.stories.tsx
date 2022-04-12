import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HeaderBar from "./HeaderBar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/HeaderBar",
  component: HeaderBar,
} as ComponentMeta<typeof HeaderBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeaderBar> = (args) => (
  <HeaderBar {...args} />
);

export const ExampleOne = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ExampleOne.args = {
  logo: "LOGO",
  menus: ["Markets", "Positions"],
};
