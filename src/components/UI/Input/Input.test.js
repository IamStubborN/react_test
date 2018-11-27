import React from 'react'
import { shallow } from 'enzyme'
import Input from '.'

describe('Input', () => {
    it('render Input without errors', () => {
        const wrapper = shallow(
            <Input
                type={'radio'}
                id={'name'}
                className={'radio'}
                labelName={'Tag1'}
                checked={true}
            />
        )
    })
})
