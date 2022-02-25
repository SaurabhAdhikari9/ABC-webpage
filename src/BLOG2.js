import react from 'react';
import reactDom from 'react-dom';
import Blog from './Blog';
import './Css/BLOG2.css';
import { Anchor } from 'antd';
const { Link } = Anchor;


function App () {
    return (
        <>
            <div className='container22' >
                <div className='left22'>
                    <Blog />
                </div>
                <div className='right22'>
                    <div className="goto">
                        <Anchor>
                            <Link href="#Cbs" title="ABC CBS" />
                            <Link href="#mobile" title="Mobile Banking" />
                            <Link href="#atm" title="ATM Banking">
                            </Link>
                            <Link href="#sms" title="SMS Banking" />
                        </Anchor>
                    </div>
                </div>
            </div>


        </>
    );
}
export default App;
