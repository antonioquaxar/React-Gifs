import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import { getGif } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    //const [images, setImages] = useState([]);
    const { data:images, loading } = useFetchGifs( category );
    //useEffect( () => {
    //    getGif( category )
    //        .then( setImages);  
    //}, [ category])


    return(
        <>
            <h3 className='animate__animated animate__fadeIn'> { category } </h3>

            {loading && <p className="animate__animated animate__flash">cargando...</p>}

                <div className="card-grid">
            
                    {
                        images.map(img => (
                            <GifGridItem
                                key={ img.id }
                                {...img } 
                            /> 
                    ))
                    }

                </div>
        </>
    )

}

//<button onClick= { () => setCount(count + 1) }> repetir</button>s