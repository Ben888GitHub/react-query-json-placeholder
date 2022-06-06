import { useParams, useNavigate } from 'react-router-dom';
import { usePost } from '../hooks/useAxios';

function Post() {
	let params = useParams();
	let navigate = useNavigate();
	const { isLoading, data, error, isFetching } = usePost(params.id);

	if (isFetching) return <div>Background Updating</div>;

	if (error) return <div>Error</div>;

	if (isLoading) return <div>Loading</div>;

	return (
		<div>
			<div>
				<button onClick={() => navigate(-1)}>Back</button>
			</div>

			{data && (
				<>
					<h1>{data?.title}</h1>
					<p>{data?.body}</p>
				</>
			)}
		</div>
	);
}

export default Post;
