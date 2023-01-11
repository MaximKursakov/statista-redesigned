import "./AspectReview.scss"
import { motion } from "framer-motion"
import { ReviewLine } from "./Review-Line"
import { useState } from "react"

export function AspectReview() {
    const star1 = Math.random()
    const star2 = Math.random()
    const star3 = Math.random()
    const star4 = Math.random()
    const star5 = Math.random()
    const total = star1 + star2 + star3 + star4+ star5
    const [myState, setState] = useState()
    return(
        <section className="aspect-review">
            <button onClick={() => setState(Math.random())}> reroll</button>
            <h2>Reviews</h2>
            <div className="review-bar">
                <ReviewLine rating={star5} stars={5}/>
                <ReviewLine rating={star4} stars={4}/>
                <ReviewLine rating={star3} stars={3}/>
                <ReviewLine rating={star2} stars={2}/>
                <ReviewLine rating={star1} stars={1}/>
            </div>
        </section>
    )
}