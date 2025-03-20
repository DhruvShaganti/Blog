export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About BlazeInk
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            Welcome to BlazeInk: CVR Blogs! This platform was built to connect students and faculty, 
            fostering discussions, sharing insights, and exchanging ideas. 
            Whether it is academic content, personal experiences, or the latest university updates, 
            this blog serves as a space for meaningful engagement within the CVR community.
            </p>

            <p>
            These blogs features articles, tutorials, and discussions on topics like web development, 
            software engineering, and university life. Stay updated with fresh insights from students and faculty, 
            and explore a space dedicated to learning and collaboration!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
