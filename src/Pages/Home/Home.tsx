import Post from '../../components/Post/Post';
import { Post as PostModel } from '../../utils/models/post.model';
import './Home.scss';

const posts: PostModel[] = [
  {
    id_post: 1,
    created_at: '2020-01-01',
    heading: 'Mein erster Post',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image_small: 'https://picsum.photos/200/300',
    comments: [
      {
        comment: 'Comment 1',
        created_at: '2020-01-01',
        user: {
          profile_picture: 'https://picsum.photos/200',
          email: 'patrick.cerny04@gmail.com',
          username: 'Patrick Cerny',
        },
      },
      {
        comment: 'Hallo mein name ist Patrck Cerny',
        created_at: '2020-01-01',
        user: {
          profile_picture: 'https://picsum.photos/200',
          email: 'patrick.cerny04@gmail.com',
          username: 'Patrick Cerny',
        },
      },
    ],
    posted_by: {
      profile_picture: 'https://picsum.photos/200',
      email: 'patrick.cerny04@gmail.com',
      username: 'Patrick Cerny',
    },
  },
  {
    id_post: 1,
    created_at: '2020-01-01',
    heading: 'Mein erster Post',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image_small: 'https://picsum.photos/200/300',
    comments: [
      {
        comment: 'Comment 1',
        created_at: '2020-01-01',
        user: {
          profile_picture: 'https://picsum.photos/200',
          email: 'patrick.cerny04@gmail.com',
          username: 'Patrick Cerny',
        },
      },
      {
        comment: 'Hallo mein name ist Patrck Cerny',
        created_at: '2020-01-01',
        user: {
          profile_picture: 'https://picsum.photos/200',
          email: 'patrick.cerny04@gmail.com',
          username: 'Patrick Cerny',
        },
      },
    ],
    posted_by: {
      profile_picture: 'https://picsum.photos/200',
      email: 'patrick.cerny04@gmail.com',
      username: 'Patrick Cerny',
    },
  },
  {
    id_post: 1,
    created_at: '2020-01-01',
    heading: 'Mein erster Post',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image_small: 'https://picsum.photos/200/300',
    comments: [
      {
        comment: 'Comment 1',
        created_at: '2020-01-01',
        user: {
          profile_picture: 'https://picsum.photos/200',
          email: 'patrick.cerny04@gmail.com',
          username: 'Patrick Cerny',
        },
      },
      {
        comment: 'Hallo mein name ist Patrck Cerny',
        created_at: '2020-01-01',
        user: {
          profile_picture: 'https://picsum.photos/200',
          email: 'patrick.cerny04@gmail.com',
          username: 'Patrick Cerny',
        },
      },
    ],
    posted_by: {
      profile_picture: 'https://picsum.photos/200',
      email: 'patrick.cerny04@gmail.com',
      username: 'Patrick Cerny',
    },
  },
];

const Home = () => {
  return (
    <div className="main_home">
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
            image_small={post.image_small}
          />
        );
      })}
    </div>
  );
};

export default Home;
