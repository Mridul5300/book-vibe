import { useLoaderData, useParams } from "react-router-dom";
import { saveCards, saveWhislist } from "../../../../../Utitlity";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardDetail = () => {
     const homecard = useLoaderData();
       const {bookId} = useParams();
       const idint = parseInt(bookId)
       const cards = homecard.find(cards => cards.bookId == idint )      
     //    console.log(cards);
        const {tags} =cards
     //    console.log(tags);

          const handleReadMark = () => {
               // console.log(cards);
              
               saveCards(idint)
          }

          const  handleWhisRead = () => {
            // console.log(cards);
              saveWhislist(idint)
          }

     return (
          <div className="hero mt-11 gap-2">
          <div className="hero-content  flex-col lg:flex-row">
             <img className="h-80" src={cards.image} alt="" />
            <div>
              <h1 className="text-5xl font-bold">{cards.bookName}</h1>
              <p className="py-6">By : {cards.author}</p>
              <hr />
              <h3 className="text-2xl mt-3 mb-3">{cards.category}</h3>

              <hr />
              
              <p><span className="font-bold mt-3">Review :</span>{cards.review}</p>
              <div className=" flex gap-14 mt-3 mb-2">
                <h2 className="font-bold">Tages :</h2>
               {
                  tags.map((tag,idx) => <span key={idx}>#{tag}</span>)
               }
              </div>
              <hr />
              <div className="mt-3">
               <h2>Numbar of Pages  
                 <span className="font-bold"> {cards.totalPages}</span>
                </h2>
               <h2>
                Publisher  
                 <span className="font-bold">{cards.author}</span>
                </h2>
               <h2>Year of Publishing  
                 <span className="font-bold">{cards.yearOfPublishing}</span>
                </h2>
               <h2>Rating  
                  <span className="font-bold">{cards.rating}</span>
               </h2>
              </div>
              <div className="flex gap-8 mt-3">
               <button onClick={() => handleReadMark (cards)} className="btn btn-outline w-24">Read</button>
               <button onClick={() => handleWhisRead (cards)} className="btn bg-[#50B1C9] w-28">Wishlist</button>
              </div>
            </div>
            <ToastContainer />
          </div>
          
        </div>
     );
};

export default CardDetail;