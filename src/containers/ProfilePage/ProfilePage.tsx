import React, { Component } from 'react';
import { Paper, Box, Typography, TextField, Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { DatePicker, MuiPickersUtilsProvider, MaterialUiPickersDate } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { connect } from 'react-redux';

import withLayout from '../../hoc/withLayout/withLayout';
import * as actionCreators from '../../redux/actions';

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
class ProfilePage extends Component<any, any> {
  state = {
    expiryDate: new Date(),
    cardName: '',
    cardNumber: '',
    cvc: '',
  }

  handleDateChange = (expiryDate: MaterialUiPickersDate) => {
    this.setState({ expiryDate });
  }

  handleInputChange = (event: React.SyntheticEvent) => {
    const { name, value } = (event.target as HTMLInputElement);

    this.setState({ [name]: value });
  }

  handleSubmit = (event: any) => {
    event.preventDefault();

    const { createUserCardData, sendCardRequest } = this.props;

    createUserCardData({ ...this.state });
    sendCardRequest();
  }

  render() {
    const { classes } = this.props;
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
                            onChange={this.handleInputChange}
                            InputLabelProps={{ shrink: true }}
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
                              onChange={(date: MaterialUiPickersDate) => this.handleDateChange(date)}
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
                    <Button variant="contained" type="submit">Сохранить</Button>
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

export default connect(null, actionCreators)(withStyles(styles)(withLayout(ProfilePage)));