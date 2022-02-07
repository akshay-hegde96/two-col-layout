import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import TwoColLayout from '../TwoColLayout'

configure({ adapter: new Adapter() })

describe('TwoColLayout', () => {
  it('should show heading text', () => {
    const wrapper = shallow(<TwoColLayout heading="This is heading" />)
    const text = wrapper.find('div h2')

    expect(text.text()).toBe('This is heading')
  })
  it('should show sub-heading text', () => {
    const wrapper = shallow(
      <TwoColLayout
        heading="This is heading"
        subHeading="this is sub-heading"
      />
    )

    const text = wrapper.find('div h4')

    expect(text.text()).toBe('this is sub-heading')
  })
  it('should render correctly', () => {
    const component = shallow(<TwoColLayout />)

    expect(component).toMatchSnapshot()
  })
})
