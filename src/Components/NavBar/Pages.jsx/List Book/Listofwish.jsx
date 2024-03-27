
import PropTypes from 'prop-types';

const Listofwish = ({cards}) => {
     const{image, title, bookName, author, yearOfpublishing,publisher,category,totalpages,rating} = cards
     return (
          <div>
               <li className="flex  gap-5 my-10">
                              <div>
                                   <img src={image} alt={title} />
                              </div>
                              <div>
                                   <p className="font-bold">{bookName}</p>
                                   <p> By : {author}</p>
                                   <h2 className="flex gap-10">
                                        
                                        <span>year Of Publishing :{yearOfpublishing}</span>
                                   </h2>
                                   <h3 className="flex gap-6">
                                        <p>Publisher : {publisher}</p>
                                        <p>Pages : {totalpages}</p>
                                   </h3>
                                   <hr />
                                   <h5 className="flex gap-14 my-15">
                                        <p >Catagory: {category}</p>
                                        <p>Rating :{rating}</p>
                                        <button className="bg-green-400 p-2 rounded-lg m">ViewDetails</button>
                                   </h5>
                              </div>
                         </li>
          </div>
     );
};
Listofwish.propTypes={
     cards : PropTypes.object
   }
export default Listofwish;