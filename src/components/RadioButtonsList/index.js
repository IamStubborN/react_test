import React, { Component } from 'react'
import styles from './RadioButtonsList.module.scss'
import RadioInput from '../UI/RadioInput'
import SearchInput from '../UI/SearchInput'
import PropTypes from 'prop-types'

class RadioButtonList extends Component {
    state = {
        checkedItem: 'all',
        isSearchItemUnChecked: true,
        inputMessage: ''
    }

    componentDidMount() {
        this.props.filterByTag(this.state.checkedItem)
    }

    onCheckHandler = event => {
        let { isSearchItemUnChecked } = this.state
        isSearchItemUnChecked = !(event.target.id === 'searchRadio')
        let clearMessage = isSearchItemUnChecked ? '' : this.state.inputMessage
        this.props.filterByTag(event.target.id)
        this.setState({
            checkedItem: event.target.id,
            isSearchItemUnChecked,
            inputMessage: clearMessage
        })
    }

    onChangeHandler = event => {
        this.setState({ inputMessage: event.target.value })
        this.props.filterByTag(event.target.value)
    }

    getTagItemsList = rawData => {
        let tagsSet = new Set()
        rawData.forEach(key => {
            Object.keys(key).forEach(item => {
                key[item].forEach(tag => tagsSet.add(tag))
            })
        })
        return Array.from(tagsSet).sort()
    }

    render() {
        const { rawData } = this.props
        const tagsData = this.getTagItemsList(rawData)
        const list = tagsData.map((item, index) => {
            return (
                <li className={styles.listItem} key={index}>
                    <RadioInput
                        type={'radio'}
                        name={item}
                        labelName={item}
                        checkedItem={this.state.checkedItem}
                        onCheckHandler={this.onCheckHandler}
                    />
                </li>
            )
        })
        return (
            <ul className={styles.radioButtonList}>
                <li className={styles.listItem}>
                    <RadioInput
                        name={'searchRadio'}
                        type={'radio'}
                        checkedItem={this.state.checkedItem}
                        onCheckHandler={this.onCheckHandler}
                    />
                    <SearchInput
                        name={'searchInput'}
                        type={'text'}
                        placeholder={' Search'}
                        disabled={this.state.isSearchItemUnChecked}
                        inputMessage={this.state.inputMessage}
                        onChangeHandler={this.onChangeHandler}
                    />
                </li>
                <li className={styles.listItem}>
                    <RadioInput
                        name={'all'}
                        labelName={'All'}
                        type={'radio'}
                        checkedItem={this.state.checkedItem}
                        onCheckHandler={this.onCheckHandler}
                    />
                </li>
                {list}
            </ul>
        )
    }
}

RadioButtonList.propTypes = {
    checkedItem: PropTypes.string,
    isSearchItemUnChecked: PropTypes.bool,
    inputMessage: PropTypes.string
}

export default RadioButtonList
