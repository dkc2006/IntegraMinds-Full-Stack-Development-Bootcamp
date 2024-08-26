const Posts = () =>{
    const posts = [
        {
            userId : 1,
            id : 1,
            title : "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            body : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            userId : 2,
            id : 2,
            title : "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            body : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
    ];
    
    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;