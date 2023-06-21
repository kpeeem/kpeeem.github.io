import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { Context } from 'pages/_context';

type Props = {
  title: string;
  src: string;
  slug?: string;
  bgImage?: string;
};

const CoverImage = ({ title, src, slug, bgImage }: Props) => {
  const { width, height } = useContext(Context);
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      // className={cn('shadow-sm w-full', {
      style={{ background: bgImage }}
      className={cn(' w-full h-80 object-contain bg-white', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
      width={width}
      height={height}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
