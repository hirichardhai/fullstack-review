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

      $.ajax({
        url: '/repos',
        type: 'POST',
        contentType: 'text/plain',
        data: term,
        success: () => {
          console.log('successfully posted')
        },
        err: () => {
          console.log('error, failed to post');
        }
      })
  }

  fetch() {
    $.ajax({
      url: '/repos',
      type: 'GET',
      success: (data) => {
        console.log(data);
      },
      err: () => {
        console.log('error, failed to post');
      }
    })
  }

  componentWillUnmount() {
    fetch();
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