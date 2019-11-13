import React, { Component, Fragment } from 'react';
import { Paper, Box, TextField, Grid, Button } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createCardRequest, getProfile } from '../ProfilePage/store';
import { getSignIn } from '../AuthPage/store';
import Spinner from '../../components/Spinner';

const mapStateToProps = state => ({
  signIn: getSignIn(state),
  profile: getProfile(state),
});

class ProfileForm extends Component {
  state = {
    expiryDate: new Date(),
    cardName: '',
    cardNumber: '',
    cvc: '',
  }

  componentDidMount() {
    const { profile: { card } } = this.props;

    this.setState(card);
  }

  componentDidUpdate(prevProps) {
    const { profile: { card } } = this.props;

    if (card === prevProps.profile.card) return;

    this.setState(card);
  }

  handleDateChange = (expiryDate) => {
    this.setState({ expiryDate });
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleCardNumberChange = event => {
    const { value } = event.target;
    const mappedValue = value.replace(/(\d{4}(?!\s))/g, '$1 ').trim();

    this.setState({ cardNumber: mappedValue });
  }

  handleSubmit = event => {
    event.preventDefault();

    const { createCardRequest, signIn } = this.props;

    createCardRequest({ ...this.state, token: signIn.token });
  }

  render() {
    const { profile: { isLoading } } = this.props;
    const { expiryDate, cardNumber, cardName, cvc } = this.state;

    return (
      <Fragment>
        <form noValidate onSubmit={this.handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Paper>
                <Box display="flex" justifyContent="space-around" flexDirection="column" width={300} height={190} px={4} py={2}>
                  <TextField 
                    fullWidth
                    error
                    label="Номер карты"
                    placeholder="0000 0000 0000 0000"
                    required helperText="Ошибка"
                    name="cardNumber"
                    value={cardNumber}
                    onChange={this.handleCardNumberChange}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ maxLength: 19 }}
                  />
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                      format="MM/yy"
                      label="Срок действия"
                      error
                      required
                      helperText="Ошибка"
                      minDate={new Date("2018-03-01")}
                      maxDate={new Date("2035-06-01")}
                      name="expiryDate"
                      value={expiryDate}
                      onChange={this.handleDateChange}
                    />
                  </MuiPickersUtilsProvider>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <Box display="flex" justifyContent="space-around" flexDirection="column" width={300} height={190} px={4} py={2}>
                  <TextField
                    fullWidth
                    error
                    label="Имя владельца"
                    placeholder="ИМЯ ВЛАДЕЛЬЦА"
                    required
                    helperText="Ошибка"
                    name="cardName"
                    value={cardName}
                    onChange={this.handleInputChange}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    fullWidth
                    error
                    label="CVC"
                    placeholder="000"
                    required
                    helperText="Ошибка"
                    name="cvc"
                    value={cvc}
                    onChange={this.handleInputChange}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ maxLength: 3 }}
                  />
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Box mt={4} display="flex" justifyContent="center">
            <Button variant="contained" type="submit">Сохранить</Button>
          </Box>
        </form>

        <Spinner show={isLoading} />
      </Fragment>
    );
  }
}

ProfileForm.propTypes = {
  createCardRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { createCardRequest })(ProfileForm);