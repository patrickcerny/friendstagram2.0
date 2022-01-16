import { useNavigate } from 'react-router-dom';
import Post from '../../components/Post/Post';
import { checkToken } from '../../utils/functions/checkToken.function';
import { Post as PostModel } from '../../utils/models/post.model';
import './Home.scss';

const posts: PostModel[] = [
  {
    id_post: 1,
    created_at: '2020-01-01',
    heading: 'Mein erster Post',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,lorem ipsum dolor sit amet consectetur adipisicing elit.',
    file: 'https://cdn.discordapp.com/attachments/820768351731056660/923305372419244132/v09044g40000c6vhhhrc77u0pq8c2pq0.mp4',
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
    file: 'https://www.bastiaanmulder.nl/wp-content/uploads/2013/11/dummy-image-square.jpg',
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
    file: 'https://www.bastiaanmulder.nl/wp-content/uploads/2013/11/dummy-image-square.jpg',
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
  const navigate = useNavigate();
  if (!checkToken()) navigate('/logIn');

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
            file={post.file}
          />
        );
      })}
    </div>
  );
};

export default Home;
