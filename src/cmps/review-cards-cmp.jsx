import React from "react";
import { appService } from "../services/app-service.js"
import { Card } from './card-cmp'
export class ReviewCards extends React.Component {

    state = {
        cards: appService.getReviewCards(),


    }

    render() {
        const { cards } = this.state
        if (!cards) return <></>
        return <section className="review-cards-container ">
            <div className="review-cards main-layout">

                <h2>Delivering real results for top companies. Some of our <span>success stories.</span></h2>
                <div className="cards-container">

                    {cards.map((card, idx) =>
                        <Card key={idx + 1} card={card} />)}
                </div>
            </div>
        </section>
    }
}