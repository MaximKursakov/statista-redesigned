import { Radar } from "react-chartjs-2";
import { data1, data2, options } from "./RadarConfig";

export function BenchmarkRadar() {
    return (
        <>
        <div className="radar1">
        <Radar data={data1} options={options}></Radar>
        </div>
        <div className="radar2">
        <Radar data={data2} options={options}></Radar>
        </div>
        </>
    )
}