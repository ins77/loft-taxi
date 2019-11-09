import React, { Component } from 'react';
import { Paper, Box, Typography, TextField, Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { DatePicker, MuiPickersUtilsProvider, MaterialUiPickersDate } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import withLayout from '../../hoc/withLayout/withLayout';

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
    selectedDate: new Date(),
  }

  handleDateChange = (selectedDate: MaterialUiPickersDate) => {
    this.setState({ selectedDate });
  }

  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;

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
                <form noValidate>
                  <Grid container spacing={4}>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <Box display="flex" justifyContent="space-around" flexDirection="column" height="100%">
                          <TextField fullWidth error label="Номер карты" placeholder="0000 0000 0000 0000" required helperText="Ошибка" name="cardNumber" 
                            InputLabelProps={{ shrink: true }} />
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                              format="MM/yy"
                              label="Срок действия"
                              error
                              required
                              helperText="Ошибка"
                              minDate={new Date("2018-03-01")}
                              maxDate={new Date("2035-06-01")}
                              name="validity"
                              value={selectedDate}
                              onChange={(date: MaterialUiPickersDate) => this.handleDateChange(date)}
                            />
                          </MuiPickersUtilsProvider>
                        </Box>
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <Box display="flex" justifyContent="space-around" flexDirection="column" height="100%">
                          <TextField fullWidth error label="Имя владельца" placeholder="ИМЯ ВЛАДЕЛЬЦА" required helperText="Ошибка" name="name"
                            InputLabelProps={{ shrink: true }} />
                          <TextField fullWidth error label="CVC" placeholder="000" required helperText="Ошибка" name="cvc"
                            InputLabelProps={{ shrink: true }} inputProps={{ maxLength: 3 }} />
                        </Box>
                      </Paper>
                    </Grid>
                  </Grid>
                </form>
              </Box>
              <Box mt={5}>
                <Button variant="contained">Сохранить</Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </div>
    );
  }
}

export default withStyles(styles)(withLayout(ProfilePage));