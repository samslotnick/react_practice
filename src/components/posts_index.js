import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
class PostsIndex extends Component {
  componentWillMount(){
    this.props.fetchPosts
  }
  render(){
    return(
      <div>List of blog posts
        <div>
          <Link to="/posts/new" className="btn btn-primary">
          Add Post
        </Link>
        </div>
      </div>
    );
  }
}
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ fetchPosts}, dispatch);
// }
// fetchPosts allows you to not use above mapDispatchToProps
export default connect(null, {fetchPosts: fetchPosts})(PostsIndex);
