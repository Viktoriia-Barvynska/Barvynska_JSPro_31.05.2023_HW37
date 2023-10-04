import { Outlet} from 'react-router-dom';
import Nav from '../components/Nav';

const Root = () => {
  return (
    <div>
        <Nav />

        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Root