export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About mohidin' Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to mohidi'n Blog! This blog was created by mohidin abdullahi
              as a personal project to share his thoughts and ideas with the
              world. mohidin is a passionate developer who loves to write about
              technology, coding, and everything in between.
            </p>

            

            <p>
             <img width={500} height={200} className="rounded-xl ml-10" src="https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/411051847_1412376673009232_3152180522085591874_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=qlrufZEu6YgAX9BhpUM&_nc_ht=scontent.fmgq1-2.fna&oh=00_AfBvaq0r2n4XRlrpir4G-TRdYcgWjBDuKqa5jYBrZtxzCQ&oe=65DF3003" alt="" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
