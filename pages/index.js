import axios from 'axios';
import { useAtom } from 'jotai';
import Head from 'next/head';
import { useEffect } from 'react';
import Post from '../components/Post';
import { postsAtom } from '../utils/atoms';

export default function Home() {
  const [posts, setPosts] = useAtom(postsAtom);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const posts = await axios.get('http://localhost:3000');

    setPosts(posts.data);
  };

  const deletePostClicked = async (id, posts) => {
    console.log(`deletePostClicked = (${id})`);

    const filtered = posts.filter((post) => post.id !== id);

    setPosts(filtered);
    await axios.delete('http://localhost:3000/deletePost/' + id);
  };

  return (
    <div className=" w-screen flex justify-center items-center">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {posts &&
          posts.map((post) => (
            <div key={post.id}>
              <Post
                src={post.imageName}
                caption={post.caption}
                id={post.id}
                deletePostClicked={deletePostClicked}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
