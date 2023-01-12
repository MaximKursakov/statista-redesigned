import { AspectReview } from "../AspectScore/Aspect-review/AspectReview"
import { Filter } from "../Filter/Filter"
import "./Benchmark.scss"
import { BenchmarkRadar } from "./BenchmarkRadar/BenchmarkRadar"

export function Benchmark() {
    return(
        <div className="main-container">
            <h1 className="main-header">Benchmark</h1>
            <p className="header-description">How do we compare to your competition?</p>
        <div className="main-benchmark">
            <Filter page="filter-benchmark" id={1}/>
            <Filter page="filter-benchmark" id={2}/>
            <BenchmarkRadar/>
            <AspectReview id={1}/>
            <AspectReview id={2}/>
        </div>
        </div>
    )
}