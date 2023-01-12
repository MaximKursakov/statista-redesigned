import { useState } from "react"
import { AspectRating } from "./Aspect-rating/Aspect-rating"
import { AspectReview } from "./Aspect-review/AspectReview"
import { AspectPeriod } from "./AspectPeriod/AspectPeriod"
import "./AspectScore.scss"
import { AspectSubscription } from "./AspectSubscription/AspectSubscription"
import { Filter } from "../Filter/Filter"

export function AspectScore() {
    const [aspect, setAspect] = useState("Quality")
    return(
        <main className="main-container">
            <h1 className="main-header">Aspect-based sentiment: BBQ</h1>
            <p className="header-description">Analyze your customers Ratings</p>
        <div className="main-aspect">
            <AspectRating setAspect={setAspect}/>
            <AspectReview id={1}/>
            <AspectPeriod aspect={aspect}/>
            <Filter page="filter-aspect"/>
            <AspectSubscription/>
        </div>
        </main>
    )
}