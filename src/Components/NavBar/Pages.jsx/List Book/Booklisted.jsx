import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadcard } from "../../../../Utitlity";
import ReadLIst from "./ReadLIst";

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
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                    Readscard.map(card => <ReadLIst key={card.bookId} card={card}></ReadLIst>)
                    }
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                         {
                    Readscard.map(card => <whishList></whishList>)
                    }</div>
               </div>
               <h2 className="text-2xl">This is Listed Book Section{Readscard.length}</h2>
               {/* <ul className="mt-10 md:mx-11 mx-10">
                    {
                    Readscard.map(card => <ReadLIst key={card.bookId} card={card}></ReadLIst>)
                    }
               </ul> */}
          </div>
     );
};

export default Booklisted;