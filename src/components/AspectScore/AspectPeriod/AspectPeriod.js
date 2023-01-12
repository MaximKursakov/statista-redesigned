import { Line } from "react-chartjs-2";
import { data, options } from "./PeriodConfig";
import "./AspectPeriod.scss"

export function AspectPeriod({aspect}) {
    console.log(aspect)
    return (
        <section className="aspect-period">
            <div className="timeline">
                <h2>Timeline</h2>
                <p>{aspect}</p>
                <select>
                    <option selected>3 Months</option>
                    <option>6 Months</option>
                    <option>1 Year</option>
                </select>
            </div>
            <Line aspect={aspect} options={options} data={data}></Line>
        </section>
    )
}