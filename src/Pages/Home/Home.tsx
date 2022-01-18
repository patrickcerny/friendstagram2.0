import { useNavigate } from 'react-router-dom';
import Post from '../../components/Post/Post';
import { checkToken } from '../../utils/functions/checkToken.function';
import { Post as PostModel } from '../../utils/models/post.model';
import InfiniteScroll from 'react-infinite-scroll-component';
import './Home.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const loadPosts = async () => {
    try {
      const gottenPosts = await axios.get(
        process.env.REACT_APP_API_URL + `/post?index=${posts.length}`
      );
      if (gottenPosts.data.length === 0) return setHasMore(false);
      setPosts([...posts, ...(gottenPosts.data as PostModel[])]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkToken().then((isLoggedIn) => {
      if (!isLoggedIn) navigate('/logIn');
    });
    loadPosts();
    return () => {};
  }, []);

  const loader = (
    <div style={{ margin: '50px auto' }}>Witzige Posts werden geladen...</div>
  );
  const endMessage = (
    <span className="main_home__text">Keine weiteren Posts!</span>
  );
  return (
    <>
      <InfiniteScroll
        className="main_home"
        next={loadPosts}
        hasMore={hasMore}
        loader={loader}
        dataLength={posts.length}
        endMessage={endMessage}
      >
        {posts.map((post, index) => {
          return (
            <Post
              id_post={post.id_post}
              posted_by={post.posted_by}
              key={index}
              created_at={post.created_at}
              comments={post.comments}
              description={post.description}
              heading={post.heading}
              file={post.file}
            />
          );
        })}
      </InfiniteScroll>
    </>
  );
};

export default Home;
