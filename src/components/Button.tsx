import React, { FC } from 'react';
import { Button, ButtonProps } from 'rsuite';

type ExtendedButtonType = {
  label: string;
  customClassName?: string;
  appearance?: string;
  disabled?: boolean;
};

export type ButtonType = ExtendedButtonType & ButtonProps;

export const ButtonComponent: FC<ButtonType> = ({
  label,
  customClassName,
  appearance,
  disabled,
  ...buttonProps
}) => {
  return (
    <Button
      appearance={appearance}
      className={customClassName}
      type={buttonProps.type}
      color={buttonProps.color}
      onClick={buttonProps.onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};
