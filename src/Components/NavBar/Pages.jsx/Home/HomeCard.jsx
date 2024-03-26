import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomeCard = ({ card }) => {
     const{bookId,bookName,image,tags,author,category,rating}=card;
     return (
          <Link to={`/homecard/${bookId}`}>
          <div className="card card-compact  bg-base-100 border rounded-lg">
               <figure><img src={image} alt="Shoes" /></figure>
               <div className='flex justify-evenly ' >
                         {
                              tags.map((tag, idx) => <span key={idx}>{tag}</span>)
                         }
                    </div>
               <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By:{author}</p>
                    <div className="card-actions flex justify-between">
                         <h2 className="text-xl flex justify-evenly">{category}</h2>
                         <h2><span>{rating}</span></h2>
                    </div>
               </div>
          </div>
          </Link>
     );
};

HomeCard.propTypes={
  card : PropTypes.object
}

export default HomeCard;