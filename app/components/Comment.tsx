const Comment = ({ comment }) => {
  return (
    <div>
      <p>{comment.content}</p>
      <p>Author: {comment.author?.name}</p>
      <p>Posted on: {new Date(comment.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default Comment;
