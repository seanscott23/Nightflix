import React from "react";
import {Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import VideosShowContainer from './videos/videos_show_container';
import VideoIndexContainer from './videos/video_index_container';
import HomeNavContainer from "./Nav-bar/home_nav_container";
import MainSplashContainer from './main_splash/main_splash_container';
import SearchContainer from './search/search_container';
import mylistContainer from './my-list/mylist_container';

const App = () => (
  <div>
    <MainSplashContainer />
    <Switch>
      <ProtectedRoute
        exact
        path="/videos/:videoId"
        component={VideosShowContainer}
      />
      <ProtectedRoute exact path="/videos" component={VideoIndexContainer} />
      <ProtectedRoute exact path="/search" component={SearchContainer} />
      <ProtectedRoute exact path="/mylist" component={mylistContainer} />
    </Switch>
  </div>
);

export default App;