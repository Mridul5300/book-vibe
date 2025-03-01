import PropTypes from 'prop-types';
import { IoPeopleOutline } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";

const ReadLIst = ({ card }) => {
     const { image, title, bookName, author,tags, yearOfPublishing, publisher, category, totalPages, rating } = card
     return (
          <div>
               <div className="md:flex flex-row  gap-5 my-10">
                    <div>
                         <img src={image} alt={title} />
                    </div>
                    <div>
                         <p className="font-bold">{bookName}</p>
                         <h3 className='mt-2'> By : {author}</h3>
                         <div className="flex gap-10 mt-2">
                              <h2 className='font-bold my-2'>Tags:</h2>
                              {
                                   tags.map((tag,idx) => <span className='bg-[#23BE0A] bg-opacity-5 text-[#23BE0A] p-3 -mx-4 rounded-full' key={idx}>#{tag}</span>)
                              }
                              <h2 className='flex my-2 gap-2'><CiLocationOn className='text-2xl my-1' /><span className='normal-case'>Year Of Publishing :{yearOfPublishing}</span></h2>
                         </div>
                         <div className="flex gap-6 mt-4 mb-4">
                         <h2 className='flex gap-1'><IoPeopleOutline className='text-2xl'></IoPeopleOutline><span>Publisher : {publisher}</span></h2>
                         <h2 className='flex gap-2'><RiPagesLine className='text-2xl' /><span>Pages : {totalPages}</span></h2>
                         </div>
                         < hr />
                         <div className="flex gap-12 my-15 mt-5">
                              <button className='bg-[#328EFF] bg-opacity-15 text-[#328EFF] p-3 rounded-full '>Catagory: {category}</button>
                              <button className=' bg-[#FFAC33] bg-opacity-15  text-[#FFAC33] p-3  rounded-full'>Rating :{rating}</button>
                              <button className="bg-[#23BE0A] hover:[#23BE0A] text-white py-2 px-4 rounded-full">
                              View Details
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

ReadLIst.propTypes = {
     card: PropTypes.object
}

export default ReadLIst;