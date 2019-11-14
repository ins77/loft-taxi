import React, { Component } from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PaperBox from '../../shared/PaperBox/PaperBox';
import ProfileForm from '../../components/ProfileForm';
import { initCreateCard, createCardRequest, getProfile } from './store';
import { getSignIn } from '../withAuthLayout/store';
import Spinner from '../../shared/Spinner';

const mapStateToProps = state => ({
  profile: getProfile(state),
  signIn: getSignIn(state),
});

class ProfilePage extends Component {
  componentDidMount() {
    this.props.initCreateCard();
  }

  handleSubmitProfile = values => {
    const { createCardRequest, signIn } = this.props;

    createCardRequest({ ...values, token: signIn.token });
  }

  render() {
    const { profile: { submitted, isLoading, card } } = this.props;

    return (
      <div data-testid="profile-page">
        <Box display="flex" justifyContent="center">
          <PaperBox display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4">
              Профиль
            </Typography>
            <Typography variant="body1" gutterBottom style={{color: '#999'}}>
              Способ оплаты
            </Typography>
            <Box mt={5}>
              {!submitted && <ProfileForm card={card} handleSubmitProfile={this.handleSubmitProfile} />}

              {submitted && (
                <Box align="center">
                  <Box mt={4} mb={10}>
                    <Typography variant="body1">
                      Платёжные данные обновлены. Теперь вы можете заказывать такси.
                    </Typography>
                  </Box>
                  <Button variant="contained" to="/dashboard/map" component={Link}>Перейти на карту</Button>
                </Box>
              )}

              <Spinner show={isLoading} />
            </Box>
          </PaperBox>
        </Box>
      </div>
    );
  }
}

export default connect(mapStateToProps, { initCreateCard, createCardRequest })(ProfilePage);