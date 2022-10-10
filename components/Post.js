import axios from 'axios';
import Image from 'next/image';

const Post = ({ src, caption, id, setPosts, posts }) => {
  async function deletePost() {
    const postId = id;
    await axios.delete(`http://localhost:3000/deletePost/${postId}`);

    // deleting works, but filtering posts clientside not working as hoped
  }
  return (
    <>
      <Image
        src={src}
        alt="Picture of the author"
        width="430px"
        height={768}
      ></Image>
      <p>{caption}</p>
      <button onClick={deletePost}>Delete</button>
    </>
  );
};

export default Post;
