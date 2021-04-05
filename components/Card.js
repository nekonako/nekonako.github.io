import * as React from 'react'
import dynamic from 'next/dynamic'
import tempe from 'tempe'
import Link from 'next/link'
const LineIcon = dynamic(
   () => import('react-lineicons'),
   {ssr : false}
)

export default function Card({ title, link, source, tags, desc, date, slug, image }){
   return(
      <>
         <div className='overflow-hidden rounded-lg bg-secondary'>
            <img src={image} />
            <div className='p-4'>
               <div className='text-xl font-bold'>
                  { source == null ? (
                     <Link href={'post/' + slug}>
                        {title}
                     </Link>
                  ) : title }
               </div>
               <div className='flex flex-row pt-2 pb-2 mb-2 text-secondary postBorder'>
                  <span className='text-xs text-secondary'>
                     <LineIcon name='calendar'/>
                     {tempe(date).format(" d, DD MMMM YYYY")}
                  </span>
               </div>
               <div className='pb-4 text-secondary'>
                  {desc}
               </div>
               {tags}
               {source != null ? (
               <div className='flex flex-row justify-between mt-2'>
                  <div></div>
                  <div>
                     <a className='bg-primary px-2 py-1 mr-2' href={source}>
                        <LineIcon name='github' />
                     </a>
                     <a className='bg-primary px-2 py-1' href={link}>
                        <LineIcon name='firefox' />
                     </a>
                  </div>
               </div>
               ) : null}
            </div>
         </div>
         </>
   )
}
