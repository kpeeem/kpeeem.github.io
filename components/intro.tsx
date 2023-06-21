import { CMS_NAME } from '../lib/constants';

const Intro = () => {
  return (
    <section className="sticky -z-10 top-0 flex-col md:flex-row flex items-center md:justify-between mt-0 mb-2 md:mb-2">
      {/* <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12"> */}
      <h1 className="text-3xl md:text-3xl mt-1 font-bold tracking-tighter leading-tight md:pl-2">
        blog
      </h1>
      <h4 className="text-center md:text-left text-lg mt-2 md:pl-8">
        A statically generated blog example using{' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Next.js
        </a>{' '}
        and {CMS_NAME}.
      </h4>
    </section>
  );
};

export default Intro;
