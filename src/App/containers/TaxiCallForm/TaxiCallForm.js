import React, { Component } from 'react';
import { TextField, Paper, Box, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { connect } from 'react-redux';
import { fetchRouteRequest } from '../MapPage/store';
import { fetchAddressListRequest, getAddressList } from './store';

const mapStateToProps = state => ({
  addressList: getAddressList(state),
});

class TaxiCallForm extends Component {
  state = {
    addressFrom: '',
    addressTo: '',
  }

  componentDidMount() {
    this.props.fetchAddressListRequest();
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

    this.props.fetchRouteRequest({ address1: addressFrom, address2: addressTo });
  }

  render() {
    const { addressList: { addresses, isLoading } } = this.props;
    const { addressFrom, addressTo } = this.state;

    return (
      <Box position="relative" width={600} mx={3} my={5}>
        <Paper>
          <Box px={5} py={3}>
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
                <Button variant="contained" type="submit" fullWidth disabled={isLoading}>
                  Вызвать такси
                </Button>
              </Box>
            </form>
          </Box>
        </Paper>
      </Box>
    );
  }
};
 
export default connect(mapStateToProps, { fetchRouteRequest, fetchAddressListRequest })(TaxiCallForm);
