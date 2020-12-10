import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SideNav from '../../components/SideNav'
import tempe from 'tempe'
import siteData from '../../site-data'
import Head from 'next/head'
import {DiscussionEmbed} from "disqus-react"


function PostPage(props){
  const cover = '/assets/artikel/' + props.post.slug + '/cover.png'

  const disqusShortname = "nekonako"
  const disqusConfig = {
    url: "https://nekonako.me/post/"+props.post.slug,
    identifier: props.post.id,
    title: props.post.title
  }

  return (
    <>
      <Head>
        <title>Artikel | {props.post.title}</title>
      </Head> 
        <SideNav />
        <Navbar />
       <div className="relative flex flex-col w-full md:w-2/3">
            <img src={cover} /> 
          <main className="flex-1 p-6 md:p-8">
                       <div className="md:p-4">
                            <div className='text-3xl font-bold text-center'>{props.post.title}</div>
                <div className='px-4'><span dangerouslySetInnerHTML={{ __html: props.post.content }} /></div>
              <div className='px-4 pt-8'>
                             <DiscussionEmbed
                  shortname={disqusShortname}
                  config={disqusConfig}
                />
              </div>
            </div>
                <Footer/>
</main>
         </div>
      
    </>
  )
}

export async function getStaticProps(context){
  const fs = require('fs');
  const html = require('remark-html');
  const highlight = require('remark-prism')
  const unified = require('unified');
  const markdown = require('remark-parse');
  const matter = require('gray-matter');

  const slug = context.params.slug;
  const path = `${process.cwd()}/contents/${slug}.md`;

  const rawContent = fs.readFileSync(path, {
    encoding : "utf-8"
  });

  const { data, content } = matter(rawContent);

  const result = await unified()
    .use(markdown)
    .use(highlight)
    .use(html)
    .process(content);

  return {
    props: {
      post : {
        ...data,
        content : result.toString(),
      }
    },
  };
}

export async function getStaticPaths(context){
  const fs = require('fs');

  const path = `${process.cwd()}/contents`;
  const files = fs.readdirSync(path, "utf-8");

  const markdownFileNames = files
    .filter((fn) => fn.endsWith('.md'))
    .map((fn) => fn.replace('.md', ''));

  return {
    paths: markdownFileNames.map((fileName) => {
      return {
        params : {
          slug : fileName,
        },
      };
    }),
    fallback : false,
  };
}

export default PostPage


