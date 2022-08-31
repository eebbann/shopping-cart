import React from "react";
import { useQuery } from "@tanstack/react-query";
import { LinearProgress } from '@mui/material';
// type
export type CartItemType = {
	id: number;
	category: string;
	description: string;
	image: string;
	price: number;
	title: string;
	amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
	await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
	const { data, isLoading, error } = useQuery(["products"], getProducts);
	console.log(data);
   
	 const getTotalItem = ()=>{
		null
	 }
	 const handleAddToCart=()=> null;
	 const handleRemoveFromCart =()=> null;
	 
	 if(isLoading) return  <LinearProgress/> ;
	 if(error) return  <>theres an error<LinearProgress color="error" /></>


	return <div className="App">ks  </div>;
	
};

export default App;
