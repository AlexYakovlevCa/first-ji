import { appService } from "../services/app-service"

export const About = () => {
    const articels = appService.getArticels()
    return <section className="about">
        <div className="about-bg-img"></div>
        <div className="about-container main-layout">
            <div className="about-headline">
                <div className="line"></div>
                <div className="about-title">Build &amp; manage distributed teams like no one else.</div>
            </div>
            <article className="about-articles">
            {articels.map((article,idx)=><div  className="information"  key={idx+1}>
                <div className="artircle-img">
                    <img src={article.img} alt="" />
                </div>
                <div className="article-data">
                    <h1 className="title">{article.title}</h1>
                    <p>{article.subtitle}</p>
                </div>
            </div>)}
            </article>
        </div>
    </section>
}