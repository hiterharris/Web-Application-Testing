import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Display from './components/display.js';
import Dashboard, {addBall, addStrike} from './components/dashboard.js';

test('App renders without crashing', () => {
  render(<App />);
});

test('renders display', () => {
  const { getByText } = render(<Display />);
  const displayElement = getByText(/home/i);
  expect(displayElement).toBeInTheDocument();
});

test('renders dashboard component', () =>{
  const {getByText} = render(<Dashboard />);
  const dashboardElement = getByText(/ball/i);
  expect(dashboardElement).toBeInTheDocument();

});

describe('balls and strikes reset to 0 when you hit 3 strikes or 4 balls', () =>{
  it('balls resets properly to 0', () =>{
    const expected = 0;
    const ballcount = 3;
    const actual = addBall(ballcount);
    expect(actual).toBe(expected);
  });

  it('strikes resets properly to 0', () =>{
    const expected = 0;
    const strikecount = 2;
    const actual = addStrike(strikecount, 0);
    expect(actual[0]).toBe(expected);
  })
});
