
import type { SkipType } from "../types";
import ClosestSkips from "./ClosestSkips";
import { CheckCircleIcon, XCircleIcon } from "../iconComponents";

interface Props {
    skip: SkipType;
    skips: SkipType[];
    setSkip: (skip: SkipType) => void;

}

const Skip = ({ skip, skips, setSkip }: Props) => {

    const skipImagePath = skip.size < 20
        ? "/8-yarder-skip.png"
        : "/big-yarder-skip.png";
    return (
        <div className="card mt-5 d-flex flex-row border-0 gap-1">
            <div className="card-img-wrapper"> 
                <img className="card-img rounded" src={skipImagePath} alt="Card image cap"></img>
                <p className="mt-3 text-muted small">
                    Imagery and information shown throughout this website may not
                    reflect the exact shape or size specification, colours may vary,
                    options and/or accessories may be featured at additional cost.
                </p>
            </div>
            <div className="card-body pt-0 px-0 px-xl-4 main-card">
                <h1 className="card-title p-0 mb-1">{skip.size} Yard Skip</h1>
                <p className="opacity-50 mb-3">{skip.hire_period_days} day hire period</p>
                <p className="mb-3">On-Road: {skip.allowed_on_road ? <CheckCircleIcon/> : <XCircleIcon/>}</p>
                <p className="mb-3">Heavy Waste: {skip.allows_heavy_waste ? <CheckCircleIcon/> : <XCircleIcon/>} </p>
                <p className="price-text my-4">${skip.price_before_vat} </p>
                <p className="text-primary mb-3 ">Not sure? Compare with other skips:</p>
                <ClosestSkips currentSkip={skip} skips={skips} setSkip={setSkip} />

            </div>

        </div>
    );
};

export default Skip;