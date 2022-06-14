import Head from 'next/head';
import PostContent from '../../components/posts/post -detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-utils';

const Post = (props) => {
  return (
    <>
      <Head>
        <title>{props.post?.title}</title>
        <meta name='description' content={props.post?.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const post = getPostData(slug);

  return {
    props: {
      post: post,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: true,
  };
}

export default Post;
