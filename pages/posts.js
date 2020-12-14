import SideNav from '../components/SideNav'
import Link from 'next/link'
import tempe from 'tempe'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'

function PostsPage(props){
  return(
    <>
      <Head>
        <title>Articles | Nekonako</title>
      </Head>
      <SideNav />
      <div className="relative flex w-full md:w-2/3">
        <main className="flex-1">
          <div className="min-h-screen px-2 py-1 mt-20 md:m-8">
            <div className="relative left-0 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
              {/* post data */}
               {props.posts.map((post)=>{
                const cover = '/assets/post/' + post.slug + '/cover.png'
                return (
                  <div>
                    <div  key={post.id} className='overflow-hidden rounded-lg shadow-md bg-secondary hover:shadow-xl'>
                       <img src={cover} />
                      <div className='p-4'>
                        <div>
                          <div className='text-xl font-extrabold'>
                            <Link href={`/post/${post.slug}`}>
                              {post.title}
                            </Link>
                          </div>
                          <div className='flex flex-row pt-2 pb-2 mb-2 text-secondary postBorder'>
                            <span className='text-xs text-secondary'>
                              <FontAwesomeIcon icon={faCalendarAlt} className='mr-2'/>
                              {tempe(post.date).format("d, DD MMMM YYYY")}
                            </span>
                          </div>
                          <div className='pb-4 text-secondary'>
                            {post.desc}
                          </div>
                          {post.tags.map(tag=>(
 <span className='px-1 pb-1 mr-1 text-base bg-gray-500 rounded-sm text-primary bg-opacity-10'># {tag}</span>
                          ))}
                                                 </div>
                      </div>
                    </div>
                  </div>
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
  const fs  = require('fs');
  const matter = require('gray-matter');
  const { v4: uuid } = require('uuid');

  const files = fs.readdirSync(`${process.cwd()}/contents/`, "utf-8");
  const posts = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/contents/${fn}`;
      const rawContent =fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);
      return {...data, id:uuid()};
    });

  return {
    props : { posts},
  };
}

export default PostsPage
