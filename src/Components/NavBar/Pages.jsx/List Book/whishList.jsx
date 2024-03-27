

const whishList = ({card}) => {
     const{image, title, bookName, author, yearOfpublishing,publisher,category,totalpages,rating} = card
     return (
          <div>
               <li className="flex  gap-5 my-10">
                              <div>
                                   <img src={card.image} alt={card.title} />
                              </div>
                              <div>
                                   <p className="font-bold">{card.bookName}</p>
                                   <p> By : {card.author}</p>
                                   <h2 className="flex gap-10">
                                        <span>Tags : {card.tags}</span>
                                        <span>year Of Publishing :{card.yearOfPublishing}</span>
                                   </h2>
                                   <h3 className="flex gap-6">
                                        <p>Publisher : {card.publisher}</p>
                                        <p>Pages : {card.totalPages}</p>
                                   </h3>
                                   <hr />
                                   <h5 className="flex gap-14 my-15">
                                        <p >Catagory: {card.category}</p>
                                        <p>Rating :{card.rating}</p>
                                        <button className="bg-green-400 p-2 rounded-lg m">ViewDetails</button>
                                   </h5>
                              </div>
                         </li>
          </div>
     );
};

export default whishList;