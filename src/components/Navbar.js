import React, { useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

//Functional Components
const Navbar = () => {
    const {isAuthenticated, toggleAuth} = useContext(AuthContext)
    const {isLightTheme, light, dark} = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Todo</h1>
        <div onClick={toggleAuth}>
            { isAuthenticated ? 'Logged in' : 'Logged out'}
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar


//// Class Component
// class Navbar extends Component {
//     render() {

//         return (
//             <AuthContext.Consumer>{(authContent)=> (
//                 <ThemeContext.Consumer>{(themeContext)=>{
//                     const {isAuthenticated, toggleAuth} = authContent
//                     const {isLightTheme, light, dark} = themeContext
//                     const theme = isLightTheme ? light : dark;
//                     return(
//                         <nav style={{ background: theme.ui, color: theme.syntax }}>
//                             <h1>Todo</h1>
//                             <div onClick={toggleAuth}>
//                                 { isAuthenticated ? 'Logged in' : 'Logged out'}
//                             </div>
//                             <ul>
//                                 <li>Home</li>
//                                 <li>About</li>
//                                 <li>Contact</li>
//                             </ul>
//                         </nav>
//                     )
//                 }}</ThemeContext.Consumer>                  
//             )}</AuthContext.Consumer>
//         );
//     }
// }

// export default Navbar;