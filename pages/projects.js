import SideNav from '../components/SideNav'
import Navbar from '../components/Navbar'
import Card from '../components/Card.js'
import Layout from '../components/Layout.js'
import Head from 'next/head'
import siteData from '../site-data'
import { getAllProjects } from '../lib/api.js'

function Projects({ allProjects }){
   return(
      <>
         <Head>
            <title>Projects | {siteData.name}</title>
            <meta name='apple-mobile-web-app-title' content='Nekonako' />
            <meta name='description' content='Nako Personal Website' />
            <meta property='og:title' content='nekonako' />
            <meta property='og:description' content='Nako personal website' />
            <meta property='og:image' content="/assets/nako.jpg" />
         </Head>
         <Navbar />
         <SideNav />
         <Layout>
            <div className='m-4 md:m-6 text-2xl font-bold'>Projects</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4 gap-4'>
               {allProjects.map((project)=>{
                  return (
                     <Card
                        image={project.image}
                        title={project.title}
                        desc={project.desc}
                        slug={project.slug}
                        date={project.date}
                        tags={project.tags.map((tag) => {
                           return (
                              <>
                                 <span className='px-2 mr-1 text-base
                                    text-gray-800 rounded-sm bg-accent'>{tag}
                                 </span>
                                 </>
                           )
                        })}
                        source = { project.source }
                        link = { project.link }
                        />
                  );
               })
               }
            </div>
         </Layout>
         </>
   )
}

export async function getStaticProps() {
   const allProjects = getAllProjects([ 'title', 'desc', 'tags', 'date', 'slug', 'source', 'link', 'image'  ])
   return {
      props : { allProjects }
   }
}

export default Projects
