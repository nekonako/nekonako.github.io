import SideNav from '../components/SideNav'
import Footer from '../components/Footer'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Card from '../components/Card.js'
import { getAllPosts } from '../lib/api.js'


function PostsPage({ allArtikel }){
const breakpointColumnsObj = {
   default: 1,
   1400: 3,
   700: 2,
   500: 1
};
return (
<>
<Head>
   <title>Articles | Nekonako</title>
   <meta data-hid="og:image" property="og:image" content="/assets/nako.jpg"/>
   <meta property='og:image' content="/assets/nako.jpg" />
</Head>
<Navbar />
<SideNav />
<div className="relative flex w-full md:w-2/3">
<main className="flex-1">
<div className="min-h-screen px-2 py-1 mt-20 md:m-8">
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

export default PostsPage
