import { useNavigate } from 'react-router-dom';

interface PhaseProps {
    phase: string,
    isActive: boolean
};

const Phase = ({ phase, isActive }: PhaseProps) => {
    
    return (
        <div>
            <li className={`phase m-4 text-capitalize ${isActive && 'fw-bold'}`} style={{ color: isActive ? "#0037c1" : "#6c757d" }}>
                {phase}
            </li>
      </div>  
    );
};

interface SideBarProps{
    currentPage: string
}

const SideBar = ({ currentPage }: SideBarProps) => {
    
    const phases = ["postcode", "waste-type", "select-skip", "permit-check", "choose-date", "payment"];

    const currentPageIndex = phases.indexOf(currentPage);

    const navigate = useNavigate();

    const moveToNextPage = () => {
        navigate(`/${phases[currentPageIndex + 1]}`);
    }

    const moveToPrevPage = () => {
        navigate(`/${phases[currentPageIndex - 1]}`);
    }

    return (
        <div className="d-flex flex-column justify-content-between h-100">
            <div className="d-none d-md-block">
                <ul className="p-0 mx-0">
                    {phases.map((phase, index) => {
                        
                        return <Phase key={index} phase={phase} isActive={index > currentPageIndex ? false : true} />
                    })}
                </ul>
            </div>

            <div className={`d-flex py-0 ${
                currentPage !== phases[0]
                ? 'justify-content-around justify-content-md-between'
                : 'justify-content-end'
            }`}>
                {
                    currentPage !== phases[0]
                    &&
                    <button className="btn btn-primary btn-1 " onClick={moveToPrevPage} >Back</button>
                }
                {
                    currentPage !== phases[phases.length - 1]
                    &&
                    <button className="btn btn-primary btn-1" onClick={moveToNextPage}>Continue</button>
                }
            </div>
        </div>
    );
}

export default SideBar;