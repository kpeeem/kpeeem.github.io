import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import MDX from './mdx.mdx';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import Post from '../interfaces/post';
import { Context } from './_context';
import { Leva, useControls } from 'leva';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const { width, height } = useControls({
    width: {
      value: 400,
      min: 0,
      max: 800,
      step: 10,
    },
    height: {
      value: 400,
      min: 0,
      max: 800,
      step: 10,
    },
  });

  if (allPosts?.length === 0) {
    return;
  }

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>

        <Context.Provider value={{ width, height }}>
          <Container>
            <Leva
              // theme={myTheme} // you can pass a custom theme (see the styling section)
              // fill // default = false,  true makes the pane fill the parent dom node it's rendered in
              flat // default = false,  true removes border radius and shadow
              oneLineLabels
              // hideTitleBar // default = false, hides the GUI header
              collapsed // default = false, when true the GUI is collpased
              // hidden // default = false, when true the GUI is hidden
            />
            <Intro />
            <MoreStories posts={allPosts} />
            {/* <MDX /> */}
            <HeroPost {...heroPost} />
          </Container>
        </Context.Provider>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'bgImage',
  ]);

  return {
    props: { allPosts },
  };
};
