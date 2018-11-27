import React from 'react'
import { shallow } from 'enzyme'
import ResultItem from '.'

describe('ResultItem', () => {
    it('render ResultItem without errors', () => {
        const wrapper = shallow(
            <ResultItem sdk={'SDK1'} tags={['Tag1', 'Tag2', 'Tag3']} />
        )
    })
})
