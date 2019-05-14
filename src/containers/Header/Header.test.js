import React from 'react'
import {shallow} from 'enzyme'
import {Header} from './Header'

describe('header', () => {
  let wrapper 

  it('should match snapshot', () => {
    wrapper = shallow(<Header/>)

    expect(wrapper).toMatchSnapshot()
  })


})
