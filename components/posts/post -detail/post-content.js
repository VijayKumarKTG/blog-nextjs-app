import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import java from 'react-syntax-highlighter/dist/cjs/languages/prism/java';
import c from 'react-syntax-highlighter/dist/cjs/languages/prism/c';

import classes from './post-content.module.css';
import PostHeader from './post-header';

const PostContent = (props) => {
  const { post } = props;

  SyntaxHighlighter.registerLanguage('js', js);
  SyntaxHighlighter.registerLanguage('css', css);
  SyntaxHighlighter.registerLanguage('pythong', python);
  SyntaxHighlighter.registerLanguage('java', java);
  SyntaxHighlighter.registerLanguage('c', c);

  const imagePath = `/images/posts/${post?.slug}/${post?.image}`;

  const customRenderers = {
    img: (image) => {
      return (
        <Image
          src={`/images/posts/${post?.slug}/${image.src}`}
          alt={image?.alt}
          width={600}
          height={300}
        />
      );
    },
    code: (code) => {
      const { children, className } = code;
      console.log(className);
      return (
        <SyntaxHighlighter style={atomDark} language={className.split('-')[1]}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post?.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>
        {post?.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
