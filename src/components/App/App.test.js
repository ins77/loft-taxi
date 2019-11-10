import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import '@testing-library/jest-dom/extend-expect';

import App from './App';

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(React.createElement(App), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('роутинг', () => {
    describe('пользователь авторизован', () => {
      beforeEach(() => {
        
      });

      it('при переходе на /signin открывает страницу', () => {
        const history = createMemoryHistory()
        const { container, getByText, debug } = render(
          <Router history={history}>
            <App />
          </Router>
        );

        debug();
        console.log(container);
      });
  
      it('при переходе на /signup открывает страницу', () => {
  
      });

      it('при переходе на /map открывает страницу', () => {

      });

      it('при переходе на /profile открывает страницу', () => {

      });

      it('при переходе на неизвестный роут открывает /map', () => {

      });
    });

    describe('пользователь не авторизован', () => {
      it('при переходе на /signin открывает страницу', () => {

      });
  
      it('при переходе на /signup открывает страницу', () => {
  
      });

      it('при переходе на /map редиректит на /signin', () => {

      });

      it('при переходе на /profile редиректит на /signin', () => {

      });

      it('при переходе на неизвестный роут открывает /signin', () => {

      });
    });
  });
});
