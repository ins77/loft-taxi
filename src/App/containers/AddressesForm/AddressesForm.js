import React, { Component, Fragment } from 'react';
import { TextField, Box, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { connect } from 'react-redux';

import { fetchRoutesRequest, fetchAddressesRequest, getAddresses } from '../MapPage/store';
import Spinner from '../../shared/Spinner';

const mapStateToProps = state => ({
  addresses: getAddresses(state),
});

class AddressesForm extends Component {
  state = {
    addressFrom: '',
    addressTo: '',
  }

  setAddressFrom = value => {
    this.setState({ addressFrom: value });
  }

  setAddressTo = value => {
    this.setState({ addressTo: value });
  }

  onSubmit = event => {
    event.preventDefault();

    const { addressFrom, addressTo } = this.state;

    this.props.fetchRoutesRequest({ address1: addressFrom, address2: addressTo });
  }

  render() {
    const { addresses: { addresses, isLoading } } = this.props;
    const { addressFrom, addressTo } = this.state;

    return (
      <Fragment>
        <form noValidate onSubmit={this.onSubmit}>
          <Autocomplete
            filterSelectedOptions
            options={addresses.filter(address => address !== addressTo)}
            autoComplete
            value={addressFrom}
            onChange={(event, value) => this.setAddressFrom(value)}
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
              onChange={(event, value) => this.setAddressTo(value)}
              renderInput={params => (
                <TextField {...params} placeholder="Куда" margin="normal" fullWidth />
              )}
            />
          </Box>

          <Box mt={4}>
            <Button variant="contained" type="submit" fullWidth disabled={!addressFrom || !addressTo}>
              Вызвать такси
            </Button>
          </Box>
        </form>

        <Spinner show={isLoading} />
      </Fragment>
    );
  }
};
 
export default connect(mapStateToProps, { fetchRoutesRequest, fetchAddressesRequest })(AddressesForm);
