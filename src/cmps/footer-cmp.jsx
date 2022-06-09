import { MyTeam } from "./my-team-cmp"


export const Footer = () => {
    return <section className="footer">
        <div className="footer-container main-layout">
            <div className="company-info">
                <MyTeam />
                <div className="full-adress">
                    <p className="street">987  Hillcrest Lane</p>
                    <p className="city">Irvine, CA</p>
                    <p className="state">California 92714</p>
                    <p className="phone">Call Us : 949-833-7432</p>
                </div>

            </div>
            <div className="links-rights">
                <div className="links">
                <span className="facebook"></span>
                <span className="pintrest"></span>
                <span className="twitter"></span>
                </div>
                <p className="copyrights">Copyright 2020. All Rights Reserved</p>
            </div>
        </div>
    </section>
}




