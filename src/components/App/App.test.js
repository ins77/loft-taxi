import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(React.createElement(App), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('роутинг', () => {
    beforeEach(() => {

    });

    it('при переходе на /signin открывает страницу', () => {
      
    });

    it('при переходе на /signup открывает страницу', () => {

    });

    describe('переход на /map', () => {
      it('переходит на /map, если пользователь авторизован', () => {

      });

      it('редиректит на /signin, если пользователь не авторизован', () => {

      });
    });

    describe('переход на /profile', () => {
      it('переходит на /profile, если пользователь авторизован', () => {

      });

      it('редиректит на /signin, если пользователь не авторизован', () => {

      });
    });

    describe('переход неизвестный роут', () => {
      it('редиректит на /map, если пользователь авторизован', () => {

      });

      it('редиректит на /signin, если пользователь не авторизован', () => {

      });
    })
  });
});
