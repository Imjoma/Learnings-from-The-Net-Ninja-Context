import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

//Functional Components
const ThemeToggle = () => {

    const { toggleTheme} = useContext(ThemeContext)
  return (
    <button onClick={toggleTheme}>Toggle Theme</button>
  )
}

export default ThemeToggle


////Class Components
// class ThemeToggle extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const {toggleTheme} = this.context
//         return (
//             <button onClick={toggleTheme}>Toggle Theme</button>
//         );
//     }
// }

// export default ThemeToggle;