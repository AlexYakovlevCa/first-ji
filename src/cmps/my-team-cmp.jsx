import defaultImg from '../assets/images/logo.svg'

export const MyTeam =()=>{
    return  <div className="page-nav">
    <div className="logo">
        <img src={defaultImg} alt="" />
    </div>
    <div className="in-page-nav">

        <a href="#" className="home-header">home</a>
        <a href="#about" className="about-header">about</a>
    </div>
</div>
}