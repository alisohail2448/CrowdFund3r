import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CampaignDetails from "./pages/CampaignDetails";
import CreateCampaign from "./pages/CreateCampaign";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    <Toaster position="top-center" reverseOrder={false}   toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#13131a',
      color: '#1dc071',
    }}} />
      <div className="relative sm:p-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
        <div className="sm:flex mr-10 relative hidden">
          <Sidebar />
        </div>

        <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
