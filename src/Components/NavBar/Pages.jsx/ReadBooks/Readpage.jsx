
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getReadcard } from '../../../../Utitlity';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const TriangleBar = (props) => {
     const { fill, x, y, width, height } = props;
     const getPath = (x, y, width, height) => {
          return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
          ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
          Z`;
        };
     return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
   };
   
const Readpage = () => {
     const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
     // const cards = useLoaderData();
     // const storedcard = getReadcard();
     // const readBooks =
     // storedcard && cards
     //  ? cards.filter((book) => storedcard.includes(book.bookId))
     //  : [];

     const cards = useLoaderData();

     const [readBooks, setReadscard] = useState([])
     
     useEffect(() => {
          const storedcard = getReadcard();
          if (cards.length > 0) {
               const readsbook = cards.filter(newcard => storedcard.includes(newcard.bookId))
               console.log(cards,storedcard,readsbook);
               setReadscard(readsbook)
               
          }
     }, [])


  return (
    <BarChart
      width={500}
      height={300}
      data={readBooks}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {readBooks.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
}

export default Readpage;
