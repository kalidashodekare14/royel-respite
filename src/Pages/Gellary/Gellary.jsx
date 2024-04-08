
import img from '../../assets/img.jpg'
import {useLoaderData} from 'react-router-dom'

const Gellary = () => {

    
    const userData = useLoaderData()
    console.log(userData)

    return (
        <div>
            <h1 className="text-4xl text-center">Gellary</h1>
            <div>

            </div>
        </div>
    );
};

export default Gellary;