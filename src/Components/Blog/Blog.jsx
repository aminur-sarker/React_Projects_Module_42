import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    const { cover_img, author_img, author_name, reading_time, hashtag, title } = blog;
    return (
        <div>
            <div className='flex'>
                <div className='rounded-full mx-10 my-10 border-collapse'>
                    <img className='h-64 w-96' src={cover_img} alt="" />
                    <div className='flex mt-3'>
                        <img className='rounded-full h-10 w-10' src={author_img} alt="" />
                        <div className='ml-7'>
                            <h2>{author_name}</h2>
                            <p>{title}</p>
                        </div>
                    </div>
                </div>
                <div>
                    {reading_time}
                </div>
            </div>

            <p>
                {
                    hashtag.map((hash, indx) => <span key={indx}><a href="">#{hash}</a></span>)
                }
            </p>
            </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;