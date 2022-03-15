import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext';
import { ThemeContext } from '../context/ThemeContext';

//Functional Components
const Booklist = () => {
    const {books} = useContext(BookContext)
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark;
  return (
    <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
        <ul>
            {books.map(book => {
                return(
                    <li key={book.id} style={{ background: theme.ui}}>{book.title}</li>
                )
            })}
        
        </ul>
    </div>
  )
}

export default Booklist

//// Class Component
// class Booklist extends Component {
//     static contextType = ThemeContext
//     render() {

//         const {isLightTheme, light, dark} = this.context
//         const theme = isLightTheme ? light : dark;

//         return (
            // <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
            //     <ul>
            //         <li style={{ background: theme.ui}}>the way of the kings</li>
            //         <li style={{ background: theme.ui}}>the name of the wind</li>
            //         <li style={{ background: theme.ui}}>the final empire</li>
            //     </ul>
            // </div>
//         );
//     }
// }

// export default Booklist;