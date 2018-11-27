import React from 'react'
import { shallow } from 'enzyme'
import MainContainer from '.'

describe('MainContainer', () => {

    it('render MainContainer without errors', () => {
        const wrapper = shallow(<MainContainer />)
    })
})