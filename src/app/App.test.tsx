import {screen,render} from '@testing-library/react';
import App from './App';

describe('App', () => {
    test('it should return value a index position in state', () => {
      const app = new App(undefined)
      expect(app.getValue(0)).toBe(15)
        
    });
});
