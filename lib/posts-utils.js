import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDir = path.join(process.cwd(), 'posts');

export const getPostsFiles = () => {
  return fs.readdirSync(postsDir);
};

export const getPostData = (postID) => {
  const postSlug = postID.replace(/\.md$/, '');

  const filePath = path.join(postsDir, `${postSlug}.md`);

  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => getPostData(postFile));

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
