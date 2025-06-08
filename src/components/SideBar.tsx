import { useNavigate } from 'react-router-dom';
import { CalenderIcon, PaymentIcon, PostcodeIcon, ShieldIcon, TruckIcon, WasteIcon } from '../iconComponents';
import type { ReactNode } from 'react';

type PhaseType = {
    name: string,
    icon: ReactNode;
}

interface PhaseProps {
    phase: PhaseType,
    isActive: boolean
};

const Phase = ({ phase, isActive }: PhaseProps) => {
    
    return (
        <div>
            <li className={`phase m-4 text-capitalize d-flex justify-content-between ${isActive && 'fw-bold'}`} style={{ color: isActive ? "#0037c1" : "#6c757d" }}>
                <div>{phase.name}</div>
                <div>{phase.icon}</div>

            </li>
      </div>  
    );
};

interface SideBarProps{
    currentPage: string
}

const SideBar = ({ currentPage }: SideBarProps) => {
    
    const phases = [
        {
            name: "postcode",
            icon: <PostcodeIcon/>
        },
        {
            name: "waste-type",
            icon: <WasteIcon/>
        },
        {
            name: "select-skip",
            icon: <TruckIcon/>
        },
        {
            name: "permit-check",
            icon: <ShieldIcon />
        },
        {
            name: "choose-date",
            icon: <CalenderIcon/>
        },
        {
            name: "payment",
            icon: <PaymentIcon/>
        },
];

    const currentPageIndex = phases.map(p => p.name).indexOf(currentPage);

    const navigate = useNavigate();

    const moveToNextPage = () => {
        navigate(`/${phases[currentPageIndex + 1].name}`);
    }

    const moveToPrevPage = () => {
        navigate(`/${phases[currentPageIndex - 1].name}`);
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
                currentPage !== phases[0].name
                ? 'justify-content-around justify-content-md-between'
                : 'justify-content-end'
            }`}>
                {
                    currentPage !== phases[0].name
                    &&
                    <button className="btn btn-primary btn-1 " onClick={moveToPrevPage} >Back</button>
                }
                {
                    currentPage !== phases[phases.length - 1].name
                    &&
                    <button className="btn btn-primary btn-1" onClick={moveToNextPage}>Continue</button>
                }
            </div>
        </div>
    );
}

export default SideBar;