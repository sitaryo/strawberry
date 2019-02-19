import {createAppContainer, createDrawerNavigator} from "react-navigation";
import Find from "../component/Find";
import Message from "../component/Message";
import HomeScreen from "../component/HomeScreen";

const AppNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Find: {
            screen: Find
        },
        Message: {
            screen: Message
        }
    },
    {
        initialRouteName: "Home"
    }
);

export default AppContainer = createAppContainer(AppNavigator);
