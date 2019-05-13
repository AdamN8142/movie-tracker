import React from 'react'
import Home from './Home'
import { shallow } from 'enzyme'

describe('Home',() => {
  let wrapper
  it('should match snapshot', () => {
    wrapper = shallow(<Home />)

    expect(wrapper).toMatchSnapshot()
  })
})