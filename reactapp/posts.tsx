const Posts = () => {
    const posts= [
        {
            id: 1,
            title: 'First Post',
            content: 'This is the first blog post.',
            author: 'John Doe'
        }
    ];

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <p>Author: {post.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Posts;