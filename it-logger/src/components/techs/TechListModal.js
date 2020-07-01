import React, { useState, useEffect } from 'react'
import TechItem from './TechItem'


const TechListModal = () => {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] =useState(false);

    useEffect(()=> {
        getTechs();
    }, []);


    const getTechs = async () => {
        setLoading(true);
        // Using Fetch api instead of axios 
        // Set up res variable to fetch(endpoint)
        // Format data to .json format
        const res = await fetch('/techs');
        const data = await res.json();

        setTechs(data);
        setLoading(false);
    }


    return (
      <div id='tech-list-modal' className='modal'>
          <div className='modal-content'>
              <h4>Technician List</h4>
              <ul className='collection'>
                {!loading && techs.map(tech => (
                    <TechItem tech={tech} key={tech.id}/>
                ))}
              </ul>
          </div>
      </div>
    )
}

export default TechListModal
