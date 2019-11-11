import React, { useState } from 'react';
import { TextField, Paper, Box, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { connect } from 'react-redux';
import { fetchRouteRequest } from '../../containers/MapPage/store/mapRoute';

const TaxiCallForm = props => {
  const [addressFrom, setAddressFrom] = useState('');
  const [addressTo, setAddressTo] = useState('');
  const {
    addresses,
    isLoading,
  } = props;

  const onSubmit = event => {
    event.preventDefault();

    props.fetchRouteRequest({ address1: addressFrom, address2: addressTo });
  }

  return (
    <Box position="relative" width={600} mx={3} my={5}>
      <Paper>
        <Box px={5} py={3}>
          <form noValidate onSubmit={onSubmit}>
            <Autocomplete
              filterSelectedOptions
              options={addresses.filter(address => address !== addressTo)}
              autoComplete
              value={addressFrom}
              onChange={(event, value) => setAddressFrom(value)}
              renderInput={params => (
                <TextField {...params} placeholder="Откуда" margin="normal" fullWidth />
              )}
            />

            <Box py={1}>
              <Autocomplete
                filterSelectedOptions
                options={addresses.filter(address => address !== addressFrom)}
                autoComplete
                value={addressTo}
                onChange={(event, value) => setAddressTo(value)}
                renderInput={params => (
                  <TextField {...params} placeholder="Куда" margin="normal" fullWidth />
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
  );
};
 
export default connect(null, { fetchRouteRequest })(TaxiCallForm);
