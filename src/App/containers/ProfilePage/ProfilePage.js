import React, { Component } from 'react';
import { Paper, Box, Typography, TextField, Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import withLayout from '../../hoc/withLayout/withLayout';
import { createCardRequest } from '../../store/userCard';
import { getSignIn } from '../../store/signIn/selectors';
import { getUserCard } from '../../store/userCard/selectors';

const styles = {
  text: {
    color: 'rgba(0, 0, 0, .5)',
  },
  paper: {
    width: '300px',
    height: '190px',
    padding: '16px 32px',
  },
};

const mapStateToProps = state => ({
  signIn: getSignIn(state),
  userCard: getUserCard(state),
});

class ProfilePage extends Component {
  state = {
    expiryDate: new Date(),
    cardName: '',
    cardNumber: '',
    cvc: '',
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
    const { classes, userCard: { isLoading } } = this.props;
    const { expiryDate, cardNumber, cardName, cvc } = this.state;

    return (
      <div data-testid="profile-page">
        <Box pt={5} display="flex" justifyContent="center">
          <Paper>
            <Box px={4} py={5} display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h4">
                Профиль
              </Typography>
              <Typography variant="body1" gutterBottom className={classes.text}>
                Способ оплаты
              </Typography>
              <Box mt={5}>
                <form noValidate onSubmit={this.handleSubmit}>
                  <Grid container spacing={4}>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <Box display="flex" justifyContent="space-around" flexDirection="column" height="100%">
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
                      <Paper className={classes.paper}>
                        <Box display="flex" justifyContent="space-around" flexDirection="column" height="100%">
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
                  <Box mt={5} display="flex" justifyContent="center">
                    <Button variant="contained" type="submit" disabled={isLoading}>Сохранить</Button>
                  </Box>
                </form>
              </Box>
            </Box>
          </Paper>
        </Box>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  classes: PropTypes.shape({
    text: PropTypes.string.isRequired,
    paper: PropTypes.string.isRequired,
  }).isRequired,
  createCardRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { createCardRequest })(withStyles(styles)(withLayout(ProfilePage)));