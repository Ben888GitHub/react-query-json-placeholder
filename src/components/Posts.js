import { usePosts } from '../hooks/useAxios';
import { Link } from 'react-router-dom';

function Posts() {
	const { isLoading, data, error, isFetching } = usePosts();

	// console.log(data);

	if (isFetching) return <div>Background Updating</div>;

	if (error) return <div>Error</div>;

	if (isLoading) return <div>Loading</div>;

	return (
		<div>
			<h1>Posts</h1>
			<>
				{data &&
					data?.map((post) => (
						<div key={post.id}>
							<Link to={`/${post.id}`}>{post.title}</Link>
							<br />
							<br />
						</div>
					))}
			</>
		</div>
	);
}

export default Posts;
