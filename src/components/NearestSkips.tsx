import type { SkipType } from "../types";
import CheckCircle from "../iconComponents/CheckCircle";
import XCircleIcon from "../iconComponents/XCircleIcon";

interface CandidateSkipProps {
    skip: SkipType;
    setSkip: (skip: SkipType) => void;
}

const CandidateSkip = ({skip, setSkip}: CandidateSkipProps) => {
    return (
        <div className="card candidate-skip-card">
            <div className="card-body candidate-skip-card-body rounded pt-3" onClick={() => setSkip(skip)}>
                <h5 className="mb-0">{skip.size} Yard</h5>
                <p className="mb-1">${skip.price_before_vat} • {skip.hire_period_days} days</p>
                <p className="m-0">On-Road: {skip.allowed_on_road ? <CheckCircle/> : <XCircleIcon/>}</p>
                <p className="m-0">Heavy Waste: {skip.allows_heavy_waste ? <CheckCircle/> : <XCircleIcon/>} </p>
            </div>
        </div>
    );
}

interface NearestSkipsProps {
    currentSkip: SkipType;
    skips: SkipType[];
    setSkip: (skip: SkipType) => void;
}

const NearestSkips = ({ currentSkip, skips, setSkip }: NearestSkipsProps) => {
    
    const currentIndex = skips.findIndex(s => s.id === currentSkip.id);
    const prevSkip = currentIndex > 0 ? skips[currentIndex - 1] : null;
    const nextSkip = currentIndex < skips.length - 1 ? skips[currentIndex + 1] : null;

    return (
        <div className="d-flex flex-row flex-wrap gap-4 flex-grow-0">
            {prevSkip && <CandidateSkip skip={prevSkip} setSkip={setSkip} />}
            {nextSkip && <CandidateSkip skip={nextSkip} setSkip={setSkip} />}

        </div>
    );
}

export default NearestSkips;