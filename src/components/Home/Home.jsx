import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Home = () => {
    const couple = useContext(AuthContext)

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzWJDxKnXZHEznyzCTrf7UcV5GNwBN98LXQlXfbw70N4A5FFx-omWwbUVXydqnYGBfJU&usqp=CAU" className="max-w-sm rounded-lg shadow-2xl" />
                <div className='lg:w-8/12'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">"Spider-Man 3" is a 2007 superhero film directed by Sam Raimi and starring Tobey Maguire as Peter Parker/Spider-Man. The film features the villainous Sandman and Venom, and explores themes of vengeance and forgiveness. Despite mixed reviews, it was a box office success.</p>
                    <button className="btn btn-secondary">See Gallery</button>
                </div>
            </div>
        </div>
    );
};

export default Home;