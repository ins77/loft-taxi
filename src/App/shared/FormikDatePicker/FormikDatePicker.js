import React from 'react';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const FormikDatePicker = ({
  form: { setFieldValue },
  field: { name, value },
  ...rest
}) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        {...rest}
        name={name}
        format="MM/yy"
        minDate={new Date("2018-03-01")}
        maxDate={new Date("2035-06-01")}
        value={value}
        onChange={value => {
          setFieldValue(name, value);
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default FormikDatePicker;
