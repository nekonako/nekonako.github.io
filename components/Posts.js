import React from 'react'
import Link from 'next/link'
import siteData from '../site-data'
import tempe from 'tempe';

function Posts({props}) {
  return(
    <>
    <div className="mt-12 md:mt-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        {props.map((post)=>{
          const cover = '/assets/artikel/' + post.slug + '/cover.png'
          return (
            <div>
              <div  key={post.id} className='overflow-hidden bg-gray-900 rounded-lg shadow-md hover:shadow-xl'>
                <img src={cover}/>
                <div className='p-4'>
                  <div>
                    <div className='text-xl font-extrabold hover:text-green-400'>
                      <Link href={`/post/${post.slug}`}>
                        {post.title}
                      </Link>
                    </div>
                    <div className='flex flex-row pb-2 mb-2' style={{ borderBottom : 'solid 1px #222937' }}>
                      <img src={SiteData.icon.calendar} width='15px' />
                      <span className='pl-2 text-xs text-gray-400'>{tempe(post.date).format("d, DD MMMM YYYY")}  </span>
                    </div>
                    <span className='p-1 mr-1 text-xs text-gray-900 uppercase bg-gray-200 rounded-sm text-bold'>{post.tags}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        }).slice(-3)
        }
      </div>

    </>
  )
}

export default Posts
