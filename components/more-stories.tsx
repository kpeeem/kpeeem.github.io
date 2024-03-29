import PostPreview from './post-preview';
import type Post from '../interfaces/post';

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      {/* <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2> */}
      <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 md:gap-x-0 lg:gap-x-0 gap-y-0 md:gap-y-0 mb-0">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            bgImage={post.bgImage}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
