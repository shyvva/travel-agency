import React from 'react';
import {shallow} from 'enzyme';
import OrderSummary from './OrderSummary';

const mockOptions = {
  accommodation: 'suite',
  features: [],
  adults: 1,
  children: 0,
};

describe('Component OrderSummary', () => {
  it('should render correctly', () => {
    const testTripCost = '100';
    const component = shallow(<OrderSummary tripCost={testTripCost} options={mockOptions}/>);
    expect(component).toBeTruthy();
  });
  it('should render both prices', () => {
    const testTripCost = '100';
    const component = shallow(<OrderSummary tripCost={testTripCost} options={mockOptions}/>);
    expect(component.exists('.discount')).toEqual(true);
    expect(component.exists('.regular')).toEqual(true);
  });
});
