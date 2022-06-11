import {  useState } from 'react'
import { MyTeam } from './my-team-cmp.jsx'
export const Header = () => {

    const [pageClass,setPageClass] = useState('')
    const togglePageClass =(isOpen)=>{
        if(pageClass==='open') return setPageClass('')
        if(isOpen) setPageClass('open')
    }
    return <section className={`header ${pageClass}`}>
        <div className="header-container main-layout">
            <MyTeam />
            <div className="contact-us">contact us</div>
            <div  onClick={()=>togglePageClass(true)}className="nav-hamburger"></div>
        </div>
    </section>
}