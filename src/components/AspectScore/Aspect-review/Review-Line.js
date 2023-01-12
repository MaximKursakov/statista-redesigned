import { motion } from "framer-motion";

export function ReviewLine({rating, stars}) {
    return (
        <div className="star">
        <svg preserveAspectRatio="none" viewBox="0 0 2 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path initial={{pathLength: 0}} animate={{pathLength: rating}} transition={{duration: 1, delay: stars / 6}} d="M1 21L1.00001 5L1 1" stroke="url(#paint0_radial_103_2)" stroke-width="2" stroke-linecap="round"/>
            <defs>
            <radialGradient id="paint0_radial_103_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.00012 -11.6808) rotate(90.0002) scale(33.3617 2303)">
            <stop stop-color="#0CC0F0"/>
            <stop offset="1" stop-color="#583DF5"/>
            </radialGradient>
            </defs>
            </svg>
        <p>{stars}/5</p>
        </div>


    )
}