import React from 'react'
import {Card} from './Card'
import {shallow} from 'enzyme'

describe('card', () => {
  let wrapper 

  beforeEach(()=> {
    wrapper = shallow(<Card/>)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})