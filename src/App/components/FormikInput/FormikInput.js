import React from 'react';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

const FormikInput = ({ errorMessage, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      {...field}
      {...props}
      error={!!meta.touched && !!(errorMessage || meta.error)}
      helperText={!!meta.touched && (errorMessage || meta.error)}
    />
  );
};

export default FormikInput;
