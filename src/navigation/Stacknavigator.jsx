import {createStackNavigator} from '@react-navigation/stack';
import AppNavigator from './AppNavigator';
import SeResultScreen from '../screens/search/SeResultScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import AuthContextProvider from '../context/AuthContext';

const Stack = createStackNavigator();

export default function Stacknavigator() {
  // const [session, setSession] = useState(null);

  // useEffect(() => {
  //   const getSession = async () => {
  //     const {
  //       data: {session},
  //     } = await supabase.auth.getSession();
  //     setSession(session);
  //   };

  //   getSession();

  //   const {data: authListener} = supabase.auth.onAuthStateChange(
  //     (event, session) => {
  //       setSession(session);
  //     },
  //   );

  //   return () => {
  //     authListener.subscription.unsubscribe();
  //   };
  // }, []);

  return (
    <AuthContextProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={AppNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Screen2" component={SeResultScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </AuthContextProvider>
  );
}
