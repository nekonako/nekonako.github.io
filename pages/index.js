import SideNav from '../components/SideNav'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/Card.js'
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
            <meta data-hid="og:image" property="og:image" content="/assets/nako.jpg"/>
            <meta property='og:image' content="/assets/nako.jpg" />
         </Head>
         <Navbar />
         <SideNav />
         <div className="relative flex w-full min-h-screen md:w-2/3">
            <main className="flex-1">
               <div className="min-h-screen px-2 py-1 mt-20 md:m-8">
                  <div className='my-4 mt-4 text-2xl font-bold'>Articles</div>
                  <div className="relative">
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
                  </div>
               </div>
               <Footer />
            </main>
         </div>
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
