



export const Card = ({ card }) => {

    console.log('card', card)
    return <article className="review-card">
        <div className="cards-background-img"></div>
        <p className="person-review"> {card.review}</p>
        <div className="person-data">

        <div className="person-fullname">{card.fullname}</div>
        <div className="person-role">{card.role}</div>
        </div>
        <div className="person-img-container">
            <img src={card.img} alt="" />
        </div>

    </article>

}