import React from 'react';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

const TextInput = ({ errorMessage, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      {...field}
      {...props}
      error={!!meta.touched && !!(errorMessage || meta.error)}
      margin="normal"
      helperText={!!meta.touched && (errorMessage || meta.error)}
    />
  );
};

export default TextInput;
