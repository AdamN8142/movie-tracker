import React from 'react'
import {shallow} from 'enzyme'
import {Login} from './Login.js'

describe('Login', () => {

  let wrapper 

  beforeEach(() => {
  })
  
  it.skip('should match snapshot', () => {
    wrapper = shallow(<Login/>)
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('should match default state', () => {
    expect(wrapper.state()).toEqual({
      name: '',
      email: '',
      password: ''
    })
  })

  

})