import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  search (term) {
    console.log(`${term} was searched`);
    var post = (term) => {
      $.ajax({
        url: '127.0.0.1:1128/repos',
        type: 'POST',
        contentType: 'application/json',
        data: {username: term},
        success: () => {
          console.log('successfully posted')
        },
        err: () => {
          console.log('error, failed to post');
        }
      })
    }
    post(term);
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));