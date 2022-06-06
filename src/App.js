import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Posts from './components/Posts';
import Post from './components/Post';
import { Routes, Route } from 'react-router-dom';

// Instantiate new Client
const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="App">
				<h1>React Query with JSON Placeholder API</h1>
				<br />
				<Routes>
					<Route path="/" element={<Posts />} />
					<Route path="/:id" element={<Post />} />
					{/* {postId > -1 ? (
					<Post postId={postId} setPostId={setPostId} />
				) : (
					<Posts setPostId={setPostId} />
				)} */}
				</Routes>
			</div>
		</QueryClientProvider>
	);
}

export default App;
