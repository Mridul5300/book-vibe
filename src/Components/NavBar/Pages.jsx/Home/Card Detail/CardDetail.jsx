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
              saveWhislist(idint)
          }

     return (
          <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
             <img src={cards.image} alt="" />
            <div>
              <h1 className="text-5xl font-bold">{cards.bookName}</h1>
              <p className="py-6">By : {cards.author}</p>
              <hr />
              <h3 className="text-2xl">{cards.category}</h3>

              <hr />
              
              <p><span className="font-bold">Review :</span>{cards.review}</p>
              <div className=" flex gap-14">
                <h2 className="font-bold">Tages :</h2>
               {
                  tags.map((tag,idx) => <span key={idx}>#{tag}</span>)
               }
              </div>
              <hr />
              <ul>
               <li>Numbar of Pages : {cards.totalPages}</li>
               <li>Publisher : {cards.author}</li>
               <li>Year of Publishing: : {cards.yearOfPublishing}</li>
               <li>Rating: : {cards.rating}</li>
              </ul>
              <div className="gap-4">
               <button onClick={() => handleReadMark (cards)} className="btn">Read</button>
               <button onClick={() => handleWhisRead (cards)} className="btn">Wishlist</button>
              </div>
            </div>
            <ToastContainer />
          </div>
          
        </div>
     );
};

export default CardDetail;