import React from 'react'
import {shallow} from 'enzyme'
import ExpandedCard from './ExpandedCard'


describe('Expandedcard', () => {
  let wrapper

  it('should match snapshot', () => {
    wrapper = shallow(<ExpandedCard/>)
    expect(wrapper).toMatchSnapshot()
  })
})