import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { allBlogs, Blog } from 'contentlayer/generated'
import Link from 'next/link';

function PostCard(blog: Blog) {
  // const imageLink = `${blog.thumbnail}`;

  // console.log("🎈🎈",blog.slug);

  return (
    <Card className="max-w-2xl overflow-hidden" >
      <Link href={blog.slug}>
        <CardHeader className="p-0 overflow-hidden">
          {/* {blog.thumbnail && (
          <Image
            src={`/images/guides/${blog.thumbnail}`}
            width={320}
            height={120}
            // public\images\guides\Authjs part 1.png
            alt={`\images\guides\${blog.title}`}
            />
            )} */}
        </CardHeader>
        <CardContent className="mt-4 pb-4">
          <CardTitle className="pb-1"> {blog.title}</CardTitle>
          <CardDescription> {blog.description}</CardDescription>
        </CardContent>
        <CardFooter className="py-2 pb-4 flex gap-1 flex-wrap px-5">
          {blog.tags &&
            blog.tags.split(",").map((tag, idx) => (
              <Badge
                className="font-normal text-xs"
                variant="default"
                key={idx}
              >
                #{tag.trim()}
              </Badge>
            ))}
        </CardFooter>
      </Link>
    </Card>
  );
}

export default function Page() {

  const blogs = allBlogs

  return (
    <div className="">
      <h1 className="text-4xl font-bold font-passion ">Blogs</h1>
      <p className="max-w-2xl text-lg  text-muted-foreground mb-8">
      Informative articles, tech trends and development tips. Stay updated and inspired on your journey!
      </p>
      <main className="flex flex-col w-full gap-2">
        {blogs.map((blog, idx) => {
          if (blog.isPublished) return <PostCard key={idx} {...blog} />;
        })}
      </main>
    </div>
  )
}
