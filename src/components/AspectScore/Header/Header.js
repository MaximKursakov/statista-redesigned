import "./Header.scss"
import {IoIosNotificationsOutline, IoMdSwitch, IoIosPerson, IoIosSearch} from "react-icons/io"

export function Header () {
    return (
        <div className="header">
            <div className="header-left">
            <IoIosSearch></IoIosSearch>
            </div>
            <div className="header-right">
            <IoMdSwitch></IoMdSwitch>
            <IoIosNotificationsOutline></IoIosNotificationsOutline>
            <IoIosPerson></IoIosPerson>
            </div>
        </div>
    )
}