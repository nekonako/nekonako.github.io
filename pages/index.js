import SideNav from '../components/SideNav'
import Navbar from '../components/Navbar'
import Card from '../components/Card.js'
import Layout from '../components/Layout.js'
import Head from 'next/head'
import siteData from '../site-data'
import { getAllPosts } from '../lib/api.js'

function IndexPage({ allArtikel }){
   return(
      <>
         <Head>
            <title>Home | {siteData.name}</title>
            <meta name='apple-mobile-web-app-title' content='Nekonako' />
            <meta name='description' content='Nako Personal Website' />
            <meta property='og:title' content='nekonako' />
            <meta property='og:description' content='Nako personal website' />
            <meta property='og:image' content="/assets/nako.jpg" />
         </Head>
         <Navbar />
         <SideNav />
         <Layout>
            <div className='m-4 text-2xl font-bold'>Articles</div>
            {allArtikel.map((post, index)=>{
               return (
                  <div className='m-4' key={index}>
                     <Card
                        title={post.title}
                        desc={post.desc}
                        slug={post.slug}
                        date={post.date}
                        tags={post.tags.map((tag, index) => {
                           return (
                              <>
                                 <span className='px-2 mr-1 text-base
                                    text-gray-800 rounded-sm bg-accent' key={index}>{tag}
                                 </span>
                                 </>
                           )
                        })}
                        />
                     </div>
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

export default IndexPage
