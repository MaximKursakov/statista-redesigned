import { useState } from "react"
import { AspectRating } from "./Aspect-rating/Aspect-rating"
import { AspectReview } from "./Aspect-review/AspectReview"
import { AspectPeriod } from "./AspectPeriod/AspectPeriod"
import "./AspectScore.scss"
import { AspectSubscription } from "./AspectSubscription/AspectSubscription"
import { Filter } from "./Filter/Filter"

export function AspectScore() {
    const [myState, setState] = useState()
    return(
        <div className="main-container">
            <h1>Aspect-based sentiment: BBQ</h1>
            <p>Analyze your customers Ratings</p>
        <div className="main">
            <AspectRating/>
            <AspectReview/>
            <AspectPeriod/>
            <Filter/>
            <AspectSubscription/>
        </div>
        </div>
    )
}