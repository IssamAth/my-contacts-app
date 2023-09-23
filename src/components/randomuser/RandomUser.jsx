import React, { useState, useEffect } from 'react';
import { MdEmail } from 'react-icons/md';

const RandomUserList = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        // Fetch multiple users (for example, 5 users) from the API
        fetch('https://randomuser.me/api/?results=100')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setPeople(data.results);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, []);

    if (people.length === 0) {
        return <div className='container mx-auto font-semibold'>Loading...</div>;
    }

    return (
        <div className=' container mx-auto flex flex-wrap justify-center'>
            {/* PERSON */}
            {people.map((person, index) => (
                <div className=' flex flex-col   mx-2 mb-8 shadow-lg rounded-md md:h-30v h-50 hover:shadow-2xl drop-shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex-grow hover:cursor-pointer' key={index}>
                    <img className=' h-48 rounded-t-xl' src={person.picture.large} alt={`${person.name.first} ${person.name.last}`} />
                    <div className=' h-full space-y-3 p-3 flex flex-col justify-center'>
                        <h2 className=' font-bold text-lg'>{`${person.name.first} ${person.name.last}`}</h2>
                        <div className="flex items-center space-x-2">
                            <MdEmail  className=' fill-slate-500'/>
                            <p className=' whitespace-normal h-full break-all text-sm text-gray-500'>{person.email}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RandomUserList;
