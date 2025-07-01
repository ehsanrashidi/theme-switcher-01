import { CloudIcon } from "./cloud-icon";
import "./index.css";
export const ThemeSwitch = () => {
    return (
        <label className="switch">
            <input defaultChecked id="checkbox" type="checkbox" />
            <span className="slider">
                <div className="star star_1" />
                <div className="star star_2" />
                <div className="star star_3" />
                <CloudIcon />
            </span>
        </label>
    );
};
