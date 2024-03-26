import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeCard from "./HomeCard";

const Home = () => {

	const[Cards, setcards] =useState([])

	useEffect(() => {
		fetch("Card.json")
		.then(res => res.json())
		.then(data => setcards(data))
	},[])

	return (
		<div>
			<section className="bg-gray-300 mx-16 my-12">
				<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
					<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
						<h1 className="text-6xl font-bold normal-case leading-none sm:text-4xl mx-4">
							Books to freshen up your bookshelf
						</h1>
						<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start my-4">

							<Link rel="noopener noreferrer" href="#" className="px-8 py-3 my-3 text-lg font-semibold border rounded bg-[#23BE0A] mx-3">View The List</Link>
						</div>
					</div>
					<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
						<img src="https://i.ibb.co/P4FHDj1/Book-1.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
					</div>
				</div>
			</section>

			{/* Card Title */}
			<h2 className="text-center text-5xl">Books</h2>
			{/* cards */}
		<div className="grid grid-rows-1 md:grid-cols-3 gap-3 mt-10 md:mx-11 mx-10 ">
			{
				Cards.map(card => <HomeCard key={card.bookId} card={card}></HomeCard>)
			}
		</div>
		</div>

	);
};

export default Home;