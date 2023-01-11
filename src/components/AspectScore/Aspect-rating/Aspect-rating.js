import "./Aspect-rating.scss"
import { motion } from "framer-motion"

export function AspectRating() {
    const score = Math.random()
    const scoreNumber = (score * 100).toFixed()
    return(
        <section className="aspect-score">
            <h2>Aspect</h2>
            <div className="aspect-score-donut">
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path initial={{pathLength: 0}} animate={{pathLength: score}} transition={{duration: 1}} d="M69.5 36C69.5 54.5015 54.5015 69.5 36 69.5C17.4985 69.5 2.5 54.5015 2.5 36C2.5 17.4985 17.4985 2.5 36 2.5C54.5015 2.5 69.5 17.4985 69.5 36Z" stroke="#583df5" stroke-width="5"/>
                </svg>
                <p>{scoreNumber}%</p>
            </div>
        </section>
    )
}