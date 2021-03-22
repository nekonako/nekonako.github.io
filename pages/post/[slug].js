import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SideNav from '../../components/SideNav'
import tempe from 'tempe'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownParse from '../../lib/markdownParse'
import Head from 'next/head'
import {DiscussionEmbed} from "disqus-react"


function PostPage({ post }){
   const cover = '/assets/post/' + post.slug + '/cover.png'

   const disqusShortname = "harutcha"
   const disqusConfig = {
      url: "https://nekonako.me/post/"+ post.slug,
      identifier: post.id,
      title: post.title
   }

   return (
      <>
         <Head>
            <title>Artikel | {post.title}</title>
            <meta name='apple-mobile-web-app-title' content={post.title} />
            <meta name='description' content={post.desc} />
            <meta property='og:title' content={post.title} />
            <meta property='og:description' content={post.desc} />
            <meta property='og:image' content={cover} />
         </Head>
         <SideNav />
         <Navbar />
         <div className="relative flex flex-col w-full md:w-2/3">
            <img src={cover} className='w-full mt-14 md:mt-0' alt={post.title}/>
            <main className="flex-1 p-6 md:p-8">
               <div className="md:p-4">
                  <div className='text-3xl font-bold text-center md:text-4xl'>{post.title}</div>
                  <div className='py-2 text-sm text-center'># {post.desc} #</div>
                  <div className='text-sm text-center'>{tempe(post.date).format("dd, DD MMMM YYYY")}</div>
                  <div className='mt-12 content'><span dangerouslySetInnerHTML={{ __html: post.content }} />
                     <div className='pt-12'>{post.tags.map(tag=>(
                        <span className='px-2 py-1 mr-1 text-base text-gray-800 rounded-sm bg-accent'>{tag}</span>
                     ))}</div>
                     <div className='mt-8 text-xl font-bold'>Penulis</div>
                     <div className='flex flex-row'>
                        <div>
                           <img src="https://avatars.githubusercontent.com/u/46141275" width="70px"
                              className="rounded-full text-accent border-current" style={{borderWidth:"3px"}} alt="nekonako"/>
                        </div>
                        <div className='mt-8 flex flex-col pl-4'>
                           <div className='text-lg font-bold'>Galih Wisnuaji</div>
                           Penikmat kopi dan drama
                        </div>
                     </div>
                  </div>
                  <div className='pt-8'>
                     <br/>
                     <br/>
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

export async function getStaticProps({ params }){
   const post = getPostBySlug(params.slug, [
      'title',
      'date',
      'slug',
      'desc',
      'tags',
      'content',
   ])
   const content = await markdownParse(post.content || '')

   return {
      props: {
         post: {
            ...post,
            content,
         },
      },
   }
}

export async function getStaticPaths(){
   const posts = getAllPosts(['slug'])
   return {
      paths: posts.map((post) => {
         return {
            params: {
               slug: post.slug,
            },
         }
      }),
      fallback: false,
   }
}

export default PostPage


