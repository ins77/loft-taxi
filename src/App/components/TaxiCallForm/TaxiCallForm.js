import React from 'react';
import { Grid, TextField, Paper, Box, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

const TaxiCallForm = props => {
  const {
    addresses,
    isLoading,
    onChangeInputFrom,
    onChangeInputTo,
    addressFrom,
    addressTo,
    onSubmit,
  } = props;

  return (
    <Box position="relative">
      <Grid container>
        <Grid item xs={4}>
          <Box px={3} py={5}>
            <Paper>
              <Box px={5} py={3}>
                <form noValidate onSubmit={onSubmit}>
                  <Autocomplete
                    filterSelectedOptions
                    options={addresses.filter(address => address !== addressTo)}
                    autoComplete
                    value={addressFrom}
                    onChange={(event, value) => onChangeInputFrom(value)}
                    renderInput={params => (
                      <TextField {...params} placeholder="Откуда" margin="normal" fullWidth name="addressFrom" />
                    )}
                  />

                  <Box py={1}>
                    <Autocomplete
                      filterSelectedOptions
                      options={addresses.filter(address => address !== addressFrom)}
                      autoComplete
                      value={addressTo}
                      onChange={(event, value) => onChangeInputTo(value)}
                      renderInput={params => (
                        <TextField {...params} placeholder="Куда" margin="normal" fullWidth name="addressTo" />
                      )}
                    />
                  </Box>

                  <Box mt={4}>
                    <Button variant="contained" type="submit" fullWidth disabled={isLoading}>
                      Вызвать такси
                    </Button>
                  </Box>
                </form>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
 
export default TaxiCallForm;
