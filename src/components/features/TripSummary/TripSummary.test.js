import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';


describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<TripSummary id='abc' image='exampleImage' name='exampleName' cost='123' days={123} tags={[]} />);
    expect(component).toBeTruthy();
  });

  it('should generate correct link image', () => {
    const expectedLink = '/trip/abc';
    const expectedCost = '5';
    const expectedDays = 10;
    const component = shallow(<TripSummary id='abc' image='exampleImage' name='exampleName' cost={expectedCost} days={expectedDays} />);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should render correct image src and alt props', () => {
    const expectedSrc = 'exampleImage';
    const expectedAlt = 'exampleName';
    const expectedId = 'abc';
    const expectedDays = 10;
    const expectedCost = '5';
    const component = shallow(<TripSummary image='exampleImage' name='exampleName' id={expectedId} days={expectedDays} cost={expectedCost} />);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct name, cost and days props', () => {
    const expectedName = 'exampleName';
    const expectedCost = '5';
    const expectedDays = 10;
    const expectedImage = 'exampleImage';
    const expectedId = 'abc';
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} image={expectedImage}
      id={expectedId} />);

    const renderDays = component.find('span').first().text();
    const renderName = component.find('.title').text();
    const renderCost = component.find('span').at(1).text();

    expect(renderDays).toEqual(`${expectedDays} days`);
    expect(renderName).toEqual(expectedName);
    expect(renderCost).toEqual(`from ${expectedCost}`);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags in correct order', () => {
    const expectedDays = 10;
    const expectedTags = ['beach', 'skiing', 'spa'];
    const expectedName = 'exampleName';
    const expectedImage = 'exampleImage';
    const expectedCost ='10';
    const component = shallow(<TripSummary tags={expectedTags} days={expectedDays} name={expectedName} image={expectedImage} cost ={expectedCost} />);
    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });

  it('should not render div with tags class if tags props is empty or false', () => {
    const expectedTags = [];
    const expectedDays = 10;
    const expectedImage = 'exampleImage';
    const expectedName = 'exampleName';
    const expectedCost = '10';
    const component = shallow(<TripSummary tags={expectedTags} days={expectedDays} name={expectedName} image={expectedImage}
      cost={expectedCost} />);
    expect(component.find('.tags')).toHaveLength(0);
  });

  it('should not render div when tags is undefined', () => {
    const expectedImage = 'exampleImage';
    const expectedName = 'exampleName';
    const expectedCost = '10';
    const expectedDays = 10;
    const component = shallow(<TripSummary image={expectedImage} name={expectedName} days={expectedDays} cost={expectedCost}/>);
    expect(component.find('.tags')).toHaveLength(0);
  });
});
