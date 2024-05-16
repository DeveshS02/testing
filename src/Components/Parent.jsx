import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import fetchSearchData from '../Utils/fetch';
import Result from './Result';

const ParentComponent = () => {
    const [searchInput, setSearchInput] = useState("");
    const [fetchedData, setFetchedData] = useState(null); // State to hold the fetched data

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = await fetchSearchData(searchInput);   
        setFetchedData(data.data.saltSuggestions); // Update the fetched data
    }

    return (
        <> 
            <Search onSubmit={handleSubmit} setSearchInput={setSearchInput} />
            <Result fetchedData={fetchedData} />
        </>
    );
}

const Search = ({ onSubmit, setSearchInput }) => {
    return (
        <div className='container p-9 border-b border-gray-300 w-[75vw] m-auto'>
            <div className="flex items-center justify-center px-2 w-full rounded-full shadow-sm border-2">
                <div className='flex justify-items-end flex-1 p-3'>   
                    <FaSearch className='mt-1'/>
                    <input 
                        type="text"
                        onChange={(e) => setSearchInput(e.target.value)} 
                        className="bg-white pl-2 text-base font-semibold outline-0 w-full ml-4" 
                        placeholder="Type your medicine name here"
                    />
                </div>
                <div>
                    <input
                        type="button"
                        onClick={onSubmit}
                        value="Search"
                        className="font-semibold bg-transparent text-blue-600 px-2 hover:text-blue-800  hover:cursor-pointer transition-all duration-300"
                    />
                </div>
            </div>
        </div>
    );
}

export default ParentComponent;
