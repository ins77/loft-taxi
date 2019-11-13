import { createAction } from 'redux-actions';

export const sendCardRequest = createAction('CARD_SEND_REQUEST');
export const sendCardSuccess = createAction('CARD_SEND_SUCCESS');
export const sendCardFailure = createAction('CARD_SEND_FAILURE');