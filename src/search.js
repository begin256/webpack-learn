'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import beauty from './images/beauty.jpg'
import './search.less'

class Search extends React.Component {
    render() {
        return<div className="search-text">
        search text of sth<img src={ beauty } />
        </div>
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)