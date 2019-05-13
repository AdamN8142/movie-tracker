import React from 'react';
// import ReactDOM from './node_modules/react-dom';
import App from './App';
import { shallow } from 'enzyme'


describe('App', () => {
  let wrapper 

  it('should match snapshot', () => {
    wrapper = shallow(<App/>)
    expect(wrapper).toMatchSnapshot()
  })
})