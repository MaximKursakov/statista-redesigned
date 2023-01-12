import { useEffect, useState } from "react"
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"
import "./AspectSlider.scss"

export function AspectSlider({setAspect}) {
    const Aspects = ["Quality", "Safety", "Service", "Design", "Cleaning", "Foodtaste"]
    const [counter, setCounter] = useState(0)
    
    function skipRight() {
        if (counter === 5) {
            setCounter(0)
        }
        else setCounter(counter + 1)
    }
    function skipLeft() {
        if (counter > 0) {
            setCounter(counter - 1)
        }
        else setCounter(5)
    }
    useEffect(() => {
        setAspect(Aspects[counter])
    }, [counter])
    
    return (
        <div className="aspect-slider">
            <button onClick={skipLeft}><BsChevronLeft></BsChevronLeft></button>
            <p>{Aspects[counter]}</p>
            <button onClick={skipRight}><BsChevronRight></BsChevronRight></button>
        </div>
    )
}