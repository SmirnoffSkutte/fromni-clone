import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
import Navigation from '../Navigation/Navigation'
import Sidebar from '../Sidebar/Sidebar'
import { ReactFCWithChildren } from '../../Shared/types'
const Layout:ReactFCWithChildren = ({children}) => {
  return (
    <div>
        <Navigation></Navigation>
        {/* <Sidebar></Sidebar> */}
        <div className={styles.layoutCenter}>
            <Sidebar></Sidebar>
        <div className={styles.outletContent}>
            {children}
        </div>
        </div>
    </div>
  )
}

export default Layout