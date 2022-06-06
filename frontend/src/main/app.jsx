import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import  Menu from '../template/menu'
import routes from './routes'

import React from 'React'
import Routes from './routes'

export default props => (
    <div className='container'>
        < Menu/>
        <Routes />
    </div>
)