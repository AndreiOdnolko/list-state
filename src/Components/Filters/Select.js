import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import { changeSelection } from '../../AC'

class SelectFilter extends Component {

  handleChange = selected => this.props.changeSelection(selected.map(option => option.value))

  render() {    
    const { articles, selected } = this.props;
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }))
    return <Select
      options = { options }
      defaultValue = { selected }
      isMulti
      onChange = { this.handleChange }
    />
  }
}

export default connect(state => ({
  selected: state.filter.selected,
  articles: state.articles
}), { changeSelection })(SelectFilter)