import Rotas from './src/rotas';
import {StatusBar, Text} from "react-native"
import { Tema } from './src/context/contextTheme';
import { AuthenticatorProvider } from './src/context/contextAuthenticator';

export default function App() {
  return (
    <>
    {/* <StatusBar barStyle='dark-content'/>   */}
    <Tema>
      <AuthenticatorProvider>
        <Rotas />
      </AuthenticatorProvider>
    </Tema>
    </>
  );
}
