import { Line } from "react-chartjs-2";
import { data, options } from "./PeriodConfig";
import "./AspectPeriod.scss"

export function AspectPeriod() {
    return (
        <section className="aspect-period">
            <Line options={options} data={data}></Line>
        </section>
    )
}