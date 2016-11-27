import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import Chart from './Chart'
import DateRange from './DateRange'

import 'react-select/dist/react-select.css'

const today = new Date();

class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selected: null,
        from: today,
        to: today,
    }

    onSelectDate = ({from, to}) => this.setState({from , to})

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const { from, to } = this.state
        return (
            <div>
                { (from && to && +from !== +to) ? `${from} - ${to}` : (from || to) ? `${from||to}` : ''}
                <DateRange from={from} to={to} onSelectDate={this.onSelectDate} />
                <Chart />
                <ArticleList articles={this.props.articles} />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleChange} multi = {true}/>
            </div>
        )
    }

    handleChange = selected => this.setState({ selected })
}

export default App
