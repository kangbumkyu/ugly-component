import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: "Hello world!",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: "Click me!",
  onClick: (event) => {
    console.log("Clicked Success");
  },
};

export const Small = Template.bind({});
Small.args = {
  label: "I'm small!",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  label: "I'm medium!",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  label: "I'm large!",
  size: "large",
};

export const Custom = Template.bind({});
Custom.args = {
  label: "I'm Custom!",
  size: "large",
  padding: "0 100px",
};
