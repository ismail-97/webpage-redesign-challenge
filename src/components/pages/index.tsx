import type { ReactNode } from 'react';
import SideBar from '../SideBar'
import ChooseDatePage from './ChooseDatePage';
import PaymentPage from './PaymentPage';
import PermitCheckPage from './PermitCheckPage';
import PostcodePage from './PostcodePage';
import SelectSkipPage from './SelectSkipPage';
import WasteTypePage from './WasteTypePage';

interface MainPageProps {
    children: ReactNode;
    page: "postcode" | "waste-type" | "select-skip" | "permit-check" | "choose-date" | "payment";
}

const MainPage = ({children, page}: MainPageProps) => {
  return (
        <div className='container min-vh-100'>
            <div className='sidebar bg-dark p-3'>
                <SideBar currentPage={page}/>
            </div>
            <div className='content rounded p-5 bg-white d-flex flex-column justify-content-center'>
                {children}
            </div>
        </div>
  )
}

export {
  ChooseDatePage,
  PaymentPage,
  PermitCheckPage,
  PostcodePage,
  SelectSkipPage,
  WasteTypePage,
};
    
export default MainPage