import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile50885Navigator from '../features/UserProfile50885/navigator';
import Maps50881Navigator from '../features/Maps50881/navigator';
import Add-Item50877Navigator from '../features/Add-Item50877/navigator';
import Maps50876Navigator from '../features/Maps50876/navigator';
import UserProfile50834Navigator from '../features/UserProfile50834/navigator';
import Maps50830Navigator from '../features/Maps50830/navigator';
import Add-Item50826Navigator from '../features/Add-Item50826/navigator';
import Maps50825Navigator from '../features/Maps50825/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile50885: { screen: UserProfile50885Navigator },
Maps50881: { screen: Maps50881Navigator },
Add-Item50877: { screen: Add-Item50877Navigator },
Maps50876: { screen: Maps50876Navigator },
UserProfile50834: { screen: UserProfile50834Navigator },
Maps50830: { screen: Maps50830Navigator },
Add-Item50826: { screen: Add-Item50826Navigator },
Maps50825: { screen: Maps50825Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
