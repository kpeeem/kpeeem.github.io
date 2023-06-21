import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import type Author from '../interfaces/author';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  bgImage: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  bgImage,
  slug,
}: Props) => {
  return (
    <div className="relative">
      <div className="mb-0">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          bgImage={bgImage}
        />
      </div>
      <h3 className="absolute bg-zinc-700 text-slate-100 bottom-0 text-1xl pl-1 pr-1 mb-0 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      {/* <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div> */}
      {/* <p className="text-lg leading-relaxed mb-4">{excerpt}</p> */}
      {/* <Avatar name={author?.name} picture={author?.picture} /> */}
    </div>
  );
};

export default PostPreview;
