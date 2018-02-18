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
        console.log(data, 'successfully get from /repos');
        this.setState({
          repos: data
        })
        console.log(this.state.repos, 'this is the repos fetch');
      },
      err: () => {
        console.log('error, failed to post');
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)} onFetch={this.fetch.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));