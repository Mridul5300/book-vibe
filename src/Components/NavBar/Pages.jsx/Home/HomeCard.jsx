import PropTypes from 'prop-types';

const HomeCard = ({ card }) => {
     const{bookName,image,tags,author,category,rating}=card;
     return (

          <div className="card card-compact  bg-base-100 border rounded-lg">
               <figure><img src={image} alt="Shoes" /></figure>
                    <p className="flex justify-evenly text-green-500" >
                        {
                         tags.map((tag,idx) => <span key={idx}><a href="">{tag}</a></span>)
                        }
                    </p>
               <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By:{author}</p>
                    <div className="card-actions flex justify-between">
                         <h2 className="text-xl">{category}</h2>
                         <h2><span>{rating}</span></h2>
                    </div>
               </div>
          </div>
     );
};

HomeCard.propTypes={
  card : PropTypes.object
}

export default HomeCard;