import { AspectRating } from "./Aspect-rating/Aspect-rating"
import { AspectReview } from "./Aspect-review/AspectReview"
import { AspectPeriod } from "./AspectPeriod/AspectPeriod"
import "./AspectScore.scss"

export function AspectScore() {
    return(
        <div className="main">
            <AspectRating/>
            <AspectReview/>
            <AspectPeriod/>
        </div>
    )
}