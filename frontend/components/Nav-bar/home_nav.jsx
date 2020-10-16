import React from 'react';
import { Link, withRouter, useHistory, Redirect } from 'react-router-dom';


// ({ currentUser, logout, props, location})

class HomeNav extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      search: '',
      searched: false
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
    // if(!currentUser){
    //         return null
    //     }
    
    handleSubmit(e){
      e.preventDefault();
     this.props.fetchSearchResults(this.state.search);
    this.setState({
      searched: true
    }) 
    }

handleUpdate(e){
  e.preventDefault()
  this.setState({
    search: e.currentTarget.value
  });
}



render(){

  let redirectToResults = this.state.searched ? <Redirect to="/search" /> : null;

        return (
          <nav className="home-nav-bar">
            <div className="left-nav">
              <h1 id="nightflix-logo">NIGHTFLIX</h1>
              <ul className="home-tabs">
                <li>
                  {" "}
                  <Link className="home-link" to={"/videos"}>
                    Home
                  </Link>
                </li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>My List</li>
              </ul>
            </div>
            <div className="right-nav">
              <div className="search-box">
                <form onSubmit={this.handleSubmit}>
                  <input
                    className="search-bar-home"
                    type="text"
                    value={this.state.search}
                    placeholder="Search"
                    onChange={this.handleUpdate}
                    to={"/search"}
                  />
                  {redirectToResults}
                </form>
              </div>

              <button className="logout-button" onClick={this.props.logout}>
                Log Out
              </button>
            </div>
          </nav>
        );
}

    };

export default withRouter(HomeNav);
