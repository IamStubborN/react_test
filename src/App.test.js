import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('App', () => {
    it('render without errors', () => {
        shallow(<App />)
    })
})
