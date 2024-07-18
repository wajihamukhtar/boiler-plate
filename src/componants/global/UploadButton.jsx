import React, { useState } from 'react';
import { Button } from '@mui/material';

const UploadButton = ({ type, accept, startIcon,variant,text,onChange}) => (
    text && (
        <Button
            text={text}
            variant={variant}
            startIcon={startIcon}
        >
            <input
                type={type}
                hidden
                accept={accept}
                onChange={onChange}
            />
        </Button>
    )
);
export default UploadButton;