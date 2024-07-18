import React from 'react';
import { Button } from '@mui/material';

const SubmitButton = ({
  text,
  style,
  onClick,
  startIcon,
  endIcon,
  variant,
  disabled,
  type,
}) => {
  return (
    text && (
      <Button
        type={type}
        variant={variant}
        sx={style}
        text={text}
        onClick={onClick}
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={disabled}
        disableRipple
      >
        {text}
      </Button>
    )
  );
};

export default SubmitButton;