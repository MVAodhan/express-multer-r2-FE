import axios from 'axios';
import { useAtom } from 'jotai';
import Image from 'next/image';
import { postsAtom } from '../utils/atoms';

const Post = ({ src, caption, id }) => {
  const [posts, setPosts] = useAtom(postsAtom);
  async function deletePost() {
    const postId = id;
    const posts = await axios.delete(
      `http://localhost:3000/deletePost/${postId}`
    );

    setPosts(posts.filter((post) => post.id !== postId));
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
