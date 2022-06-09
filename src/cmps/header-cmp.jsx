import { MyTeam } from './my-team-cmp.jsx'
export const Header = () => {
    return <section className="header">
        <div className="header-container main-layout">
            <MyTeam />
            <div className="contact-us">contact us</div>
        </div>
    </section>
}