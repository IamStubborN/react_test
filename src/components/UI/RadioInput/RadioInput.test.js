import React from 'react'
import { shallow } from 'enzyme'
import RadioInput from '.'

describe('RadioInput', () => {
    it('render RadioInput without errors', () => {
        const wrapper = shallow(
            <RadioInput
            type={'radio'}
            name={'radio'}
            labelName={'radio'}
            checkedItem={'all'}
            />
        )
    })
})
