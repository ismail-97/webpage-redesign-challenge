import { useEffect, useState } from "react";
import SizeDropdown from "../SizeDropdown";
import Skip from "../Skip";
import type { SkipType } from "../../types";
import skipsService from "../../services/skipsService";

const LoadingSpinner = () => {
    return (
        <div className="d-flex justify-content-center m-5">
            <div className="spinner-border" role="status">
            </div>
        </div>
    );
}

const SelectSkipPage = () => {
    const [skips, setSkips] = useState<SkipType[]>([]);
    const [skip, setSkip] = useState<SkipType | undefined>();

    useEffect(() => {
        skipsService
        .getAll()
        .then((data) => {
            setSkips(data);

            // retrieving selected skip from local storage.
            const savedSkip = localStorage.getItem("selectedSkip");
            if (savedSkip) {
            const parsedSkip = JSON.parse(savedSkip);
            const found = data.find(s => s.id === parsedSkip.id);
            setSkip(found ?? data[0]);
            } else {
            setSkip(data[0]);
            }
        })
    }, [])

    const sortedSkips = [...skips].sort((a, b) => a.size - b.size);

    return (
            <div>
                {!skips || !skip ?
                    (
                        <LoadingSpinner/>
                    ) :
                    (
                        <>
                            <SizeDropdown skips={sortedSkips} setSkip={setSkip} skip={skip} />
                            <Skip skip={skip} skips={sortedSkips} setSkip={setSkip} />
                        </>
                    )
                }
            </div>
    );
};

export default SelectSkipPage;