import React from 'react'
import { shallow } from 'enzyme'
import SearchInput from '.'

describe('SearchInput', () => {
    it('render SearchInput without errors', () => {
        const wrapper = shallow(
            <SearchInput
            name={'searchInput'}
            type={'text'}
            placeholder={' Search'}
            disabled={false}
            inputMessage={"this.state.inputMessage"}
        />
        )
    })
})
