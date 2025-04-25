
import Ong from '../assets/ong'
import { Link } from 'react-router'

function Tasbeh() {
  return (
    <div className='tasbeh'>
        <Link to={"/"}>
        <p className='text-2xl  text-white pt-2'><Ong/></p>
        </Link>
    </div>
  )
}

export default Tasbeh