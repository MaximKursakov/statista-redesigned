import "./Filter.scss"
import {BsChevronDown} from "react-icons/bs"

export function Filter() {
    return (
        <div className="filter">
            <div className="select-container">
                <p>Device</p>
            <select className="Device">
                <option>Select a Device</option>
                <option>Device1</option>
                <option>Device2</option>
                <option>Device3</option>
            </select>
            <BsChevronDown></BsChevronDown>
            </div>
            <div className="select-container">
                <p>Brand</p>
            <select className="Brand">
                <option>Select a Brand</option>
                <option>Brand1</option>
                <option>Brand2</option>
                <option>Brand3</option>
            </select>
            <BsChevronDown></BsChevronDown>
            </div>
            <div className="select-container">
                <p>Product</p>
            <select className="Product">
                <option>Select a Product</option>
                <option>Product1</option>
                <option>Product2</option>
                <option>Product3</option>
            </select>
            <BsChevronDown></BsChevronDown>
            </div>
        </div>
    )
}