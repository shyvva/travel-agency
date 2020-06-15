import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<TripSummary id='abc' image='exampleImage' name='exampleName' cost='123' days={123} tags={[]}/>);
    expect(component).toBeTruthy();
  });

  it('should generate correct link image', () => {
    const expectedImage = '/trip/abc';
    const expectedTags = ['spa'];
    const component = shallow(<TripSummary id='abc' tags={expectedTags} image='exampleImage' name='exampleName'/>);
    expect(component.find('.link').prop('to')).toEqual(expectedImage);
  });

  it('should render correct image src and alt props', () => {
    const expectedSrc = 'exampleImage';
    const expectedAlt = 'exampleName';
    const expectedTags = ['spa'];
    const component = shallow(<TripSummary tags={expectedTags} image='exampleImage' name='exampleName'/>);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct name, cost and days props', () => {
    const expectedName = 'exampleName';
    const expectedCost = '5';
    const expectedDays = 10;
    const expectedTags = ['spa'];
    const component = shallow(<TripSummary tags={expectedTags} name={expectedName} cost={expectedCost}  days={expectedDays} />);
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details span').at(0).text()).toEqual(`${expectedDays} days`);
    expect(component.find('.details span').at(1).text()).toEqual(`from ${expectedCost}`);
  });

  it('should throw error without required props', () => {
    const expectedDays = 10;
    expect(() => shallow(<TripSummary days={expectedDays} />)).toThrow();
  });

  it('should render tags in correct order', () => {
    const expectedTags = ['beach', 'skiing', 'spa'];
    const component = shallow(<TripSummary tags={expectedTags} />);
    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });

  it('should not render div with tags class if tags props is empty or false', () => {
    const component = shallow(<TripSummary tags={[]} />);

    expect(component.find('.tags')).toBeTruthy();
  });
});
