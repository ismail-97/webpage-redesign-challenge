import type { SkipType } from "../types";

interface Props {
    skips: SkipType[];
    skip: SkipType  | undefined;
    setSkip: (skip: SkipType) => void;
}

const SizeDropdown = ({ skips, skip, setSkip }: Props) => {
    
    const selectSkip = (selectedSkip: SkipType) => (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setSkip(selectedSkip);
        // saving selected skip to local storage.
        localStorage.setItem("selectedSkip", JSON.stringify(selectedSkip));
    };

    return (
        <>
            <h5>Choose Your Skip Size (in Yards):</h5>
            <div className="dropdown bg-white rounded">
                
                <button
                    className="btn"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                        {skip && (
                        <span>{skip.size} Yard</span>
                        )}            
                        </button>
                <ul className="dropdown-menu bg-white rounded">
                    {
                        skips.map(skip =>
                            <li key={skip.id}>
                                <a className="dropdown-item" href="#" onClick={selectSkip(skip)}>
                                    {skip.size} Yard
                                </a>
                            </li>)
                    }
                </ul>
            </div>
        </>

    );
};

export default SizeDropdown;