import './App.css'
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import {
    SelectSkipPage,
    WasteTypePage,
    PostcodePage,
    PermitCheckPage,
    ChooseDatePage,
    PaymentPage
} from './components/pages'
import MainPage from './components/pages';

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navigate to="/select-skip" replace />} />
              <Route
                  path="/select-skip"
                  element={
                      <MainPage page="select-skip">
                          <SelectSkipPage />
                      </MainPage>
                  }
              />
              <Route
                  path="/waste-type"
                  element={
                      <MainPage page="waste-type">
                          <WasteTypePage />
                      </MainPage>
                  }
              />
              <Route
                  path="/postcode"
                  element={
                      <MainPage page="postcode">
                          <PostcodePage />
                      </MainPage>
                  }
              />
              <Route
                  path="/permit-check"
                  element={
                      <MainPage page="permit-check">
                          <PermitCheckPage />
                      </MainPage>
                  }
              />
              <Route
                  path="/choose-date"
                  element={
                      <MainPage page="choose-date">
                          <ChooseDatePage />
                      </MainPage>
                  }
              />
              <Route
                  path="/payment"
                  element={
                      <MainPage page="payment">
                          <PaymentPage />
                      </MainPage>
                  }
              />
          </Routes>
      </BrowserRouter>
  )
}

export default App
