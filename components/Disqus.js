import {DiscussionEmbed} from "disqus-react"

const Disqus = ({post}) => {
   const disqusShortname = "nekonako"
   const disqusConfig = {
      url: "/"+post.slug,
      identifier: post.id, // Single post id
      title: posts.title // Single post title
   }

   return (
      <div>
         <DiscussionEmbed
         shortname={disqusShortname}
         config={disqusConfig}
      />
         </div>
   )
}

export default Disqus;
