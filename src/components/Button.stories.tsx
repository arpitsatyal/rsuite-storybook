import type { Meta, StoryObj } from '@storybook/react';

import { ButtonComponent } from './Button';

const meta: Meta<typeof ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'onClick'
    }
  }
};

type Story = StoryObj<typeof ButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    appearance: 'primary'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Button',
    disabled: true
  }
};

export const Submit: Story = {
  args: {
    label: 'Submit',
    type: 'submit',
    size: 'lg'
  }
};
export default meta;
