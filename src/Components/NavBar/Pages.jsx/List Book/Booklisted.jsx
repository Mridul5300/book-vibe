import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadcard } from "../../../../Utitlity";

const Booklisted = () => {

     const cards = useLoaderData();

     const [Readscard, setReadscard] = useState([])
     useEffect(() => {
          const storedcard = getReadcard();
          if (cards.length > 0) {
               const readsbook = cards.filter(newcard => storedcard.includes(newcard.bookId))
               // console.log(cards,storedcard,readsbook);
               setReadscard(readsbook)
          }
     }, [])

     return (
          <div>
               <div className="text-center bg-gray-300 mt-5">
                    <h2 className="text-3xl">Books</h2>
               </div>
               <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 1</div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>
               </div>
               <h2 className="text-2xl">This is Listed Book Section{Readscard.length}</h2>
               <ul className="mt-10 md:mx-11 mx-10">
                    {Readscard.map(card => (
                         <li className="flex  gap-5 my-10" key={card.bookId}>
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
                    ))}
               </ul>
          </div>
     );
};

export default Booklisted;