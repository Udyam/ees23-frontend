import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './EES/Home';
import About from './Udyam/components/about/about';
import Events from './Udyam/components/Events/events';
import Nav from './Udyam/components/Nav/Nav';
import LeaderBoard from './Udyam/components/LeaderBoard/LeaderBoard';
import HomePage from './Udyam/components/HomePage/HomePage';
import Sponsors from './Udyam/components/Sponsors/Sponsors';
import UdgamSponsors from './Udgam/components/Sponsors/Sponsors';
import DashBoard from './EES/Dashboard/DashBoard';
import UdgamAbout from './Udgam/components/About/UdgamAbout';
import UdgamNav from './Udgam/components/UdgamNav/UdgamNav';
import UdgamEvents from './Udgam/components/Events/udgamEvents';
import UDGmain from './Udgam/components/main-page/main-page';
import Teams from './EES/Teams/Teams';
import Mashal from './Mashal/mashal';
import MashalSponsor from './Mashal/components/Sponsors/Sponsors';
import MashalLeaderboard from './Mashal/components/MashalLeaderboard/MashalLeaderboard';
import MashalEvent from './Mashal/components/MashalEvent/mashalEvent';
import Navbar from './EES/Navbar/Navbar';
import Register from './EES/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ComingSoon from './EES/ComingSoon/ComingSoon';
import Gallery from './EES/Gallery/Gallery';
import EventOver from './EES/EventOver/EventOver';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/gallery"
            element={
              <>
                <Gallery />
              </>
            }
          />
          <Route
            path="/team"
            element={
              <>
                <Teams />
              </>
            }
          />
          {/* <Route
            path="/team"
            element={
              <>
                <div style={{ position: 'fixed', zIndex: '999' }}>
                  <Navbar />
                </div>
                <ComingSoon />
              </>
            }
          /> */}
          <Route
            path="/udyam"
            element={
              <>
                <Nav active="#none" />
                <HomePage />
              </>
            }
          />
          <Route
            path="/mashal"
            element={
              <>
                {/* <div style={{ position: 'fixed', zIndex: '999' }}>
                  <Navbar />
                </div>
                <ComingSoon /> */}
                <Mashal></Mashal>
              </>
            }
          />
          <Route
            path="/mashal/sponsors"
            element={
              <>
                <MashalSponsor />
              </>
            }
          />
          <Route
            path="/mashal/leaderboard"
            element={
              <>
                <MashalLeaderboard />
              </>
            }
          />
          <Route
            path="/mashal/aboutus"
            element={
              <>
                {/* <MashalAboutUs /> */}
                <div>
                  <ComingSoon />
                </div>
              </>
            }
          />
          <Route
            path="/mashal/events"
            element={
              <>
                <MashalEvent />
              </>
            }
          />

          <Route
            path="/udyam/about"
            element={
              <>
                <Nav active="#about" />
                <About />
              </>
            }
          />

          <Route
            path="/dashboard"
            element={
              <>
                <div style={{ position: 'fixed', zIndex: '999' }}>
                  <Navbar />
                </div>
                <DashBoard />
              </>
            }
          />

          <Route
            path="/udyam/events"
            element={
              <>
                <Nav active="#event" />
                <Events active="#event" />
              </>
            }
          />
          <Route
            path="/udyam/sponsors"
            element={
              <>
                <Nav active="#sponsors" />
                <Sponsors active="#sponsors" />
              </>
            }
          />
          <Route
            path="/udyam/leaderboard"
            element={
              <>
                <Nav active="#leaderboard" />
                <LeaderBoard contentIndex={0} />
              </>
            }
          />
          <Route
            path="/udgam"
            element={
              <>
                <div>
                  {/* <Navbar /> */}
                  <UdgamNav />
                </div>
                {/* <ComingSoon /> */}
                <UDGmain />
              </>
            }
          />
          <Route
            path="/udgam/sponsors"
            element={
              <>
                <div>
                  {/* <Navbar /> */}
                  <UdgamNav />
                </div>
                {/* <ComingSoon /> */}
                <UdgamSponsors />
              </>
            }
          />
          <Route
            path="/udgam/about"
            element={
              <>
                <div>
                  {/* <Navbar /> */}
                  <UdgamNav />
                </div>
                {/* <ComingSoon /> */}
                <UdgamAbout />
              </>
            }
          />
          <Route
            path="/udgam/events"
            element={
              <>
                <div>
                  {/* <Navbar /> */}
                  <UdgamNav />
                </div>
                {/* <ComingSoon /> */}
                <UdgamEvents />
              </>
            }
          />
          <Route
            path="/udgam/events/eventover"
            element={
              <>
                <EventOver />
              </>
            }
          />
          <Route
            path="/udgam/leaderboard"
            element={
              <>
                <div>
                  {/* <Navbar /> */}
                  <UdgamNav />
                </div>
                <ComingSoon />
              </>
            }
          />
          <Route
            path="/mashal/leaderboard"
            element={
              <>
                <div style={{ position: 'fixed', zIndex: '999' }}>
                  <Navbar />
                </div>
                <ComingSoon />
              </>
            }
          />
          <Route
            path="/mashal/event"
            element={
              <>
                <div style={{ position: 'fixed', zIndex: '999' }}>
                  <Navbar />
                </div>
                {/* <MashalEvent /> */}
                <ComingSoon />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
