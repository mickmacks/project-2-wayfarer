console.log('This is from PostList.js')
import React, {Component} from 'react'
import Post from './Post'

class PostList extends Component {

	render() {

		let postsArray = this.props.posts.map( (post) => {

			return (
				<Post
					key={post._id}
					post={post}
					className="postCard" />
			)
		})

		return(
			<div className="postsList container-fluid">
				<div className="row">
					{postsArray}
				</div>
			</div>
		)
	}
}

export default PostList;
