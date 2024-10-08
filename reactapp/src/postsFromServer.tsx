import { useEffect, useState } from "react";

const PostsFromServer = (props) => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        
        // Take the first 10 posts
        const firstTwoPosts = data.slice(0, 2);

        setPosts(firstTwoPosts);
    };
    
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <h2>Posts: {props.title}</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
            <button onClick={() => props?.onClickFromParent(props.title)}>
                Click Here
            </button>
        </div>
    );
};

export default PostsFromServer;
