import SideNav from '../components/SideNav'
import Head from 'next/head'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Card from '../components/Card.js'
import { getAllPosts } from '../lib/api.js'


function PostsPage({ allArtikel }){
   return (
      <>
      <Head>
         <title>Articles | Nekonako</title>
         <meta data-hid="og:image" property="og:image" content="/assets/nako.jpg"/>
         <meta property='og:image' content="/assets/nako.jpg" />
      </Head>
      <Navbar />
      <SideNav />
      <Layout>
         <div className='m-4 text-2xl font-bold'>Articles</div>
         {allArtikel.map((post)=>{
            return (
               <>
               <Card
               title={post.title}
               desc={post.desc}
               slug={post.slug}
               date={post.date}
               tags={post.tags.map((tag) => {
                  return (
                     <>
                     <span className='px-2 mr-1 text-base
                     text-gray-800 rounded-sm bg-accent'>{tag}
                  </span>
                     </>
                  )
               })}
                  />
               </>
            );
         })
         }
            </Layout>
      </>
   )
}

export async function getStaticProps() {
   const allArtikel = getAllPosts([ 'title', 'desc', 'tags', 'date', 'slug'  ])
   return {
      props : { allArtikel }
   }
}

export default PostsPage
