import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SideNav from '../../components/SideNav'
import tempe from 'tempe'
import siteData from '../../site-data'
import Head from 'next/head'
import {DiscussionEmbed} from "disqus-react"


function PostPage(props){
  const cover = '/assets/post/' + props.post.slug + '/cover.png'

  const disqusShortname = "harutcha"
  const disqusConfig = {
    url: "https://nekonako.me/post/"+props.post.slug,
    identifier: props.post.id,
    title: props.post.title
  }
  

  return (
    <>
      <Head>
        <title>Artikel | {props.post.title}</title>
        <meta data-hid="og:image" property="og:image" content={cover} />
         <meta property='og:image' content={cover} />
      </Head>
      <SideNav />
      <Navbar />
      <div className="relative flex flex-col w-full md:w-2/3">
        <img src={cover} className='w-full mt-16 md:mt-0' alt={props.post.title}/>
        <main className="flex-1 p-6 md:p-8">
          <div className="md:p-4">
            <div className='text-3xl font-bold text-center md:text-4xl'>{props.post.title}</div>
            <div className='py-2 text-sm text-center'># {props.post.desc} #</div>
            <div className='text-sm text-center'>{tempe(props.post.date).format("dd, DD MMMM YYYY")}</div>
            <div className='mt-12 content'><span dangerouslySetInnerHTML={{ __html: props.post.content }} />
              <div className='pt-12'>{props.post.tags.map(tag=>(
                <span className='px-1 pb-1 mr-1 text-base text-gray-800 rounded-sm bg-accent'>{tag}</span>
                
              ))}</div>
              <div className='flex flex-row mt-8'>
                <img src="https://avatars.githubusercontent.com/u/46141275" width="70px" 
                className="relative inline-block rounded-full text-accent border-current" style={{borderWidth:"3px"}} alt="nekonako"/>
                <div className='flex flex-col pt-2 pl-4'>
                  <div className='text-xl font-bold'>Penulis</div>
                  Galih Wisnuaji
                  </div>
                </div>
                </div>
            <div className='pt-8'>
              <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
              />
            </div>
          </div>
        </main>
        <Footer/>
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


