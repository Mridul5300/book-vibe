import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadcard, getWhishcard } from "../../../../Utitlity";
import ReadLIst from "./ReadLIst";
import Listofwish from "./Listofwish";



const Booklisted = () => {
     const [isChecked, setIsChecked] = useState(true);
     const cards = useLoaderData();

     const [Readscard, setReadscard] = useState([])

     useEffect(() => {
          const storedcard = getReadcard();
          if (cards.length > 0) {
               const readsbook = cards.filter(newcard => storedcard.includes(newcard.bookId))
               console.log(cards, storedcard, readsbook);
               setReadscard(readsbook)

          }
     }, [])


     const [wishlist, setWishlist] = useState([])
     const storedWishlist = getWhishcard()
     console.log(storedWishlist)
     useEffect(() => {
          if (cards.length > 0) {
               const wishbook = cards.filter(newitem => storedWishlist.includes(newitem.bookId))
               setWishlist(wishbook)

          } else {
               setWishlist([])
          }

          console.log(wishlist);
     }, []);

     const handleCheckboxChange = (event) => {
          setIsChecked(event.target.checked);
     };

     const handlesorting = () => {
          const sortedData = [...Readscard].sort((a, b) =>
               a.rating - b.rating

          )
          setReadscard(sortedData);

          const sortedWish = [...wishlist].sort((a, b) =>
               a.yearOfPublishing - b.yearOfPublishing

          )
          setWishlist(sortedWish);
     };

     const handlenumbarpage = () => {
          const sortedPage = [...Readscard].sort((a, b) =>
               a.totalPages - b.totalPages

          )
          setReadscard(sortedPage);

          const sortedWishPage = [...wishlist].sort((a, b) =>
               a.totalPages - b.totalPages

          )

          setWishlist(sortedWishPage);

     };

     const handlepublish = () => {
          const sortedPublis = [...Readscard].sort((a, b) =>
               a.earOfPublishing - b.earOfPublishingg

          )
          setReadscard(sortedPublis);

          const sortedPublicPage = [...wishlist].sort((a, b) =>
               a.yearOfPublishingg - b.yearOfPublishing

          )

          setWishlist(sortedPublicPage);


     };

     return (
          <div>
               <div className="text-center bg-gray-300 mt-5">
                    <h2 className="text-3xl">Books</h2>
               </div>
               {/* sort list */}
               <div className="flex justify-end my-20 mx-32">
                    <div className="dropdown dropdown-hover">
                         <div tabIndex={0} role="button" className="btn m-1 bg-green-400">Sort By</div>
                         <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
                              <li><a onClick={handlesorting}>Rating</a></li>
                              <li><a onClick={handlenumbarpage}>Numbar Of Pages</a></li>
                              <li><a onClick={handlepublish}>Publish Year</a></li>
                         </ul>
                    </div>
               </div>
               {/* tab list */}
               <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Readlist" checked={isChecked} onChange={handleCheckboxChange} />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                         {
                              Readscard.map(card => <ReadLIst key={card.bookId} card={card}></ReadLIst>)
                         }
                    </div>
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Whishlist" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

                         {
                              wishlist.map(Whiscards => <Listofwish key={Whiscards.bookId} cards={Whiscards}></Listofwish>)
                         }
                    </div>
               </div>
               {/* <ul className="mt-10 md:mx-11 mx-10">
                    {
                    Readscard.map(card => <ReadLIst key={card.bookId} card={card}></ReadLIst>)
                    }
               </ul> */}
          </div>
     );
};

export default Booklisted;
