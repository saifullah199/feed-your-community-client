import { Link, useLoaderData } from "react-router-dom";
import FoodCard from "../Components/FoodCard";
import { useEffect, useState } from "react";
import axios from "axios";


const AvailableFoods = () => {

    //  const foods = useLoaderData()

     const [foods, setFoods] = useState([])
     const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')
    // useEffect(() => {
    //     const getData = async () => {
    //         const {data} = await axios('https://y-theta-weld.vercel.app/foods')
    //         setFood(data)
    //     }
    //     getData()
    //     // fetch('https://y-theta-weld.vercel.app/foods')
    //     // .then(res => res.json())
    //     // .then(data => {
    //     //     setFood(data)
    //     // })
    // },[])

    useEffect(() => {
        const getData = async () => {
          const { data } = await axios(
            `${
              import.meta.env.VITE_API_URL
            }/foods?sort=${sort}&search=${search}`
          )
          setFoods(data)
        }
        getData()
      }, [ search, sort])

      const handleSearch = e => {
        e.preventDefault()
    
        setSearch(searchText)
      }

    return (
        <div className="">
            <div className="m-5 flex gap-5 ">
            <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                onChange={e => setSearchText(e.target.value)}
                value={searchText}
                name='search'
                
                placeholder='Enter Food Name'
                aria-label='Enter Food Name'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
          <div>
            <select
              onChange={e => {
                setSort(e.target.value)
                
              }}
              value={sort}
              name='sort'
              id='sort'
              className='border p-4 rounded-md'
            >
              <option value=''
              >Sort By Expired Date</option>
              
            </select>
          </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                {
                    foods.filter(f => f.status === "available")
                    .map(food => <FoodCard key={food._id} food={food}/>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;