import axios from 'axios';
import { useAtom } from 'jotai';
import Image from 'next/image';
import { postsAtom } from '../utils/atoms';

const Post = ({ src, caption, id, deletePostClicked }) => {
  const [posts, setPosts] = useAtom(postsAtom);

  return (
    <>
      <Image
        src={src}
        alt="Picture of the author"
        width="430px"
        height={768}
      ></Image>
      <p>{caption}</p>
      <button onClick={() => deletePostClicked(id, posts)}>Delete</button>
    </>
  );
};

export default Post;
