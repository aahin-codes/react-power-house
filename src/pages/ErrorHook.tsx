import Button from '../_components/button/Button'
import './_ErrorHook.scss'
import { useNavigate } from 'react-router-dom'

export const ErrorHook = ({hookName}:{hookName:string | undefined}) => {
  const navigate = useNavigate();
  return (
    <div className='error-hook'>
        <div className="card">
            <h2>Full docs coming soon</h2>
            <p>{hookName} — Hook will update asap.</p>
            <Button label='Back to all hooks' className='primary' onClick={()=>{
                navigate('/')
            }}/>
        </div>
    </div>
  )
}
