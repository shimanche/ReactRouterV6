import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, [postId]);

  return (
    <>
      <h2>Single Post</h2>
      <div>
        <p>ID:{post.id}</p>
        <p>タイトル:{post.title}</p>
        <p>内容:{post.body}</p>
      </div>
    </>
  );
}

export default Post;
