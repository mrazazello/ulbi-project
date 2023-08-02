import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeEnum } from "app/providers/themeProvider";
import { themeDecorator } from "shared/config/storybook/styleDecorator/themeDecorator";

import { Modal } from "./Modal";

export default {
  title: "shared/Modal",
  component: Modal,
  //   tags: ["autodocs"],
  argTypes: {},
  args: {
    isOpen: true,
    children: "Content of modal window",
    selector: "#storybook-root",
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalLight = Template.bind({});
ModalLight.args = {};

export const ModalDark = Template.bind({});
ModalDark.args = {};
ModalDark.decorators = [themeDecorator(ThemeEnum.DARK)];
