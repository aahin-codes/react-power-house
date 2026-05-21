import Button from '../_components/button/Button';
import './_Error.scss';
import { useNavigate } from 'react-router-dom';

export const Error = () => {
    const navigate = useNavigate();
  return (
    <div className='error-page'>
        <div className="card">
            <h2>404 Page not found</h2>
            <Button label='Back to home' className='primary' onClick={()=>{
                navigate("/")
            }}/>
        </div>
    </div>
  )
}
