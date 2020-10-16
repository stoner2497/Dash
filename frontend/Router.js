import React, {useEffect} from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import SplashScreen from './src/scripts/unauthenticated/Splash/SplashScreen';
import Auth from './src/scripts/unauthenticated/Auth';
import Register from './src/scripts/unauthenticated/Auth/Register';
import Login from './src/scripts/unauthenticated/Auth/Login';
import ForgotPassword from './src/scripts/unauthenticated/Auth/ForgotPassword';
import NewsFeed from './src/scripts/Home/index';
import createProfile from './src/scripts/Profile/createNewProfile';
import KingQueenHistory from './src/scripts/Home/KingQueenHistory';
import Explore from './src/scripts/Explore/Explore';
import RecordsVideo from './src/scripts/Videos/RecordsVideo';
import PlayVideo from './src/scripts/Videos/PlayVideo';
import Home from './src/Images/Home.png';
import AddModal from './src/scripts/Add/AddModal';
import AudioList from './src/scripts/Audio/AudioList'
import ExploreTagDetail from './src/scripts/Explore/ExploreTagDetail';
import InitialNotification from './src/scripts/Notification/InitialNotification';
import InitialProfile from './src/scripts/Profile/InitialProfile';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import SideMenu from './src/scripts/Profile/SideMenu';
import ChangePassword from './src/scripts/Profile/ChangePassword';
import AboutUs from './src/scripts/Profile/AboutUs'
import Notification from './src/scripts/Profile/Notification'
import Feedback from './src/scripts/Profile/Feedback'
import ReportaBug from './src/scripts/Profile/ReportABug.js'
import SignedTo  from './src/scripts/Profile/SignedTo'
import TOS from './src/scripts/Profile/TOS'
// import Explore from '../Images/Explore.png';
// import Notification from '../Images/Notification.png';
// import Profile from '../Images/profile.png';

export default function RouterComponent() {
  const hamburger = <Icon name="hamburger" color="white" size={30} />
  return (
    <Router>
      <Scene key="root">
        <Scene key="SplashScreen" component={SplashScreen} hideNavBar initial />
        <Scene key="Auth" component={Auth} hideNavBar />
        <Scene key="register" component={Register} hideNavBar />
        <Scene key="login" component={Login} hideNavBar />
        <Scene key="ForgotPassword" component={ForgotPassword} hideNavBar />

        <Scene key="History" component={KingQueenHistory} hideNavBar />
        {/* newsfeed */}
        <Scene
          key="tabs"
          tabs
          hideNavBar
          tabBarStyle={{backgroundColor: '#FFFFFF'}}>
          <Scene key="newsfeed" title="Home" component={NewsFeed} hideNavBar />

          {/* Explore */}
          <Scene key="explore" title="explore" component={Explore} hideNavBar />
          {/* Add */}
          <Scene key="Add" title="+" hideNavBar>
            <Scene key="Camera" component={RecordsVideo} hideNavBar />
          </Scene>


          {/* Notification */}
          <Scene key="Notification" title="Scene" component={InitialNotification} hideNavBar /> 
          {/* profile */}
          <Scene key='profile' type="reset"  title="profile" 
                drawer
                contentComponent={SideMenu}
                drawerWidth={250}
                drawerPosition="right"
                drawerIcon={hamburger}
                hideNavBar>
          <Scene key="Profile" title="profile" component={InitialProfile} hideNavBar />
          </Scene>
        </Scene>
        <Scene key="ExploreDetail" component={ExploreTagDetail} hideNavBar />
        <Scene key="AudioList" component={AudioList} hideNavBar />
        <Scene key="newProfile" component={createProfile} hideNavBar />

        {/* Camera */}

        {/* <Scene key="Camera" component={RecordsVideo} hideNavBar /> */}

        <Scene key="playVideo" component={PlayVideo} hideNavBar />

        {/* Profile SubScreens */}
        <Scene key='changePassword' component={ChangePassword} hideNavBar />
        <Scene key="notification" component={Notification} hideNavBar />
        <Scene key="Feedback" component={Feedback} hideNavBar />
        <Scene key="reportaBug" component={ReportaBug} hideNavBar />
        <Scene key="aboutUs" component={AboutUs} hideNavBar />
        <Scene key="signedTo" component={SignedTo} hideNavBar />
        <Scene key="TOS" component={TOS} hideNavBar /> 
      </Scene>
    </Router>
  );
}
