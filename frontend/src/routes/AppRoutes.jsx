
 import React from 'react'
 import {BrowserRouter,Routes,Route, } from "react-router-dom"
 import Home from '../pages/Home'
 import DubaiActivities from '../pages/DubaiActivities'
import VisaServices from '../pages/VisaServices'
 import Hotels from '../pages/Hotels'
 import Flights from '../pages/Flights'
import Blogs from '../pages/Blogs'
import Contactus from '../pages/ContactUs'
import RefundAndCancellationPolicy from '../pages/RefundAndCancellationPolicy'
import DubaiExcursions from '../pages/DubaiSightSeeingExcursions'
import PackageTours from '../pages/PackageTours'
import Aboutus  from '../pages/Aboutus'
 import Footer from '../sections/Footer'
 import Header from '../sections/Header'
import ViewPage from '../pages/ViewPage'
import DubaiUaeVisa from '../pages/DubaiUaeVisa'
import Shop from '../pages/Shop'
import DubaiDesertSafariExcursions from '../pages/DubaiDesertSafariExcursions'
import AbuDhabiTours from '../pages/AbuDhabiTours'
import AirportTransfer from '../pages/AirportTransfer'
import AlAinTours from '../pages/AlAinTours'
import Aquarium from '../pages/Aquarium'
import BurjAlArabTours from '../pages/BurjAlArabTours'
import BurjKhalifaTours from '../pages/BurjKhalifaTours'
import CityTours from '../pages/CityTours'
import ComboOffers from '../pages/ComboOffers'
import DhowCruise from '../pages/DhowCruise'
import DubaiDolphinarium from '../pages/DubaiDolphinarium'
import DubaiSightSeeingExcursions from '../pages/DubaiSightSeeingExcursions'
import DubaiTransfers from '../pages/DubaiTransfers'
import FujairahTours from '../pages/FujairahTours'
import HelicopterTours from '../pages/HelicopterTours'
import HotAirBalloon from '../pages/HotAirBalloon'
import LamousineTours from '../pages/LamousineTours'
import LuxuryTours from '../pages/LuxuryTours'
import OtherActivities from '../pages/OtherActivities'
import SharjahTours  from '../pages/SharjahTours'                   
import WaterParks  from '../pages/WaterParks'
import AbuDhabiCityTour  from '../InternalPages/AbuDhabiCityTour'
import DubaiAirportDropOff  from '../InternalPages/DubaiAirportDropOff'
import DubaiAirportPickup from '../InternalPages/DubaiAirportPickup'
import DubaiAirportPickupAndDropOff from '../InternalPages/DubaiAirportPickupAndDropOff'

     const AppRoutes = () => {
       return (
            <BrowserRouter>
                <Header/>
            <Routes>
                 <Route path="/"  element={<Home/>}   />
                  <Route path="/dubaiActivities"  element={<DubaiActivities/>}   />
                   <Route path="/VisaServices"  element={<VisaServices/>}   />
                   <Route path="/hotels"  element={<Hotels/>}   />
                    <Route path="/flights"  element={<Flights/>}   />
                    <Route path="/blogs"  element={<Blogs/>}   />
                    <Route path="/contactus"  element={<Contactus/>}   />
                    <Route path="/refundandcancellationpolicy"  element={<RefundAndCancellationPolicy/>}   />
                    <Route path="/dubaiexcursions"  element={<DubaiExcursions/>}   />
                    <Route path="/packagetours"  element={<PackageTours/>}   />
                   <Route path="/aboutus"  element={<Aboutus/>}   />
                   <Route path="/viewpage"  element={<ViewPage/>} />
                   <Route path="/dubaiuaevisa"  element={<DubaiUaeVisa/>} />
                   <Route path="/shop"  element={<Shop/>} />
                   <Route path="/DubaiDesertSafariExcursions"  element={<DubaiDesertSafariExcursions/>} />
                   <Route path="/abudhabitours"  element={<AbuDhabiTours/>} />
                    <Route path="/airporttransfer"  element={<AirportTransfer/>} />
                     <Route path="/aL-ain-tours"  element={<AlAinTours/>} />
                    <Route path="/aquarium"  element={<Aquarium/>} />
                     <Route path="/burjAlArabTour"  element={<BurjAlArabTours/>} />
                      <Route path="/burjkhalifatours"  element={<BurjKhalifaTours/>} />
                     <Route path="/citytours"  element={<CityTours/>} />
                     <Route path="/combooffers"  element={<ComboOffers/>} />
                      <Route path="/dhowcruise"  element={<DhowCruise/>} />
                      <Route path="/dubaidolphinarium"  element={<DubaiDolphinarium/>} />
                      <Route path="/dubaisightseeingexcusrions"  element={<DubaiSightSeeingExcursions/>} />
                      <Route path="/dubaitransfers"  element={<DubaiTransfers/>} />
                      <Route path="/fujairahtours"  element={<FujairahTours/>} />
                      <Route path="/helicoptertours"  element={<HelicopterTours/>} />
                      <Route path="/hotairballoon"  element={<HotAirBalloon/>} />
                      <Route path="/LamousineTours"  element={<LamousineTours/>} />
                      <Route path="/LuxuryTours"  element={<LuxuryTours/>} />
                      <Route path="/OtherActivities"  element={<OtherActivities/>} />
                      <Route path="/SharjahTours"  element={<SharjahTours/>} />                           
                      <Route path="/WaterParks"  element={<WaterParks/>} />
                      <Route path="/WaterParks"  element={<WaterParks/>} />      
                      <Route path="/AbuDhabiCityTour"  element={<AbuDhabiCityTour/>} />
                      <Route path="/DubaiAirportDropOff"  element={<DubaiAirportDropOff/>} />  
                       <Route path="/DubaiAirportPickup"  element={<DubaiAirportPickup/>} />  
                        <Route path="/DubaiAirportPickupAndDropOff"  element={<DubaiAirportPickupAndDropOff/>} />  
            </Routes>
                 <Footer/>
     </BrowserRouter>
        )
     }
     
     export default AppRoutes
