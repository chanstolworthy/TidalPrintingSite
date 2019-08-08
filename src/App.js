import React from 'react';
import './App.css';
import SiteHeader from "./components/SiteHeader";
import {Route, BrowserRouter as Router} from 'react-router-dom'
import GetQuoteView from "./views/quote/GetQuoteView";
import ContactUsView from "./views/contact/ContactUsView";
import ServicesView from "./views/services/ServicesView";
import HowItWorksView from "./views/howItWorks/HowItWorksView";
import HomeView from "./views/home/HomeView";

function App() {
    return (
        <div className="App">

            <Router>
                <SiteHeader/>
                <div>
                    <Route exact path="/" component={HomeView}/>
                    <Route path="/quote" component={GetQuoteView}/>
                    <Route path="/contact-us" component={ContactUsView}/>
                    <Route path="/services" component={ServicesView}/>
                    <Route path="/how-it-works" component={HowItWorksView}/>
                </div>
            </Router>
        </div>
    );
}

export default App;
