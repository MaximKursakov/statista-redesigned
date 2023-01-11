import { motion } from "framer-motion";

export function ReviewLine({rating, stars}) {
    return (
        <div className="star">
        <p>{(rating * 100).toFixed()}</p>
        <svg width="auto" height="auto" viewBox="0 0 2 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path animate={{pathLength: rating}} transition={{duration: .8, delay: (stars /6)}} d="M1 48L1 24.5L1 1" stroke="url(#paint0_radial_103_2)" stroke-width="2" stroke-linecap="square"/>
            <defs>
            <radialGradient id="paint0_radial_103_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.999984 3.72842e-06) rotate(90.0001) scale(49 2303)">
            <stop stop-color="#0CC0F0"/>
            <stop offset="1" stop-color="#583DF5"/>
            </radialGradient>
            </defs>
        </svg>
        <p>{stars}/5</p>
        </div>


    )
}