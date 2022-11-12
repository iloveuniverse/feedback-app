// Koi bhi React ka component jab hum banate toh uss ki file ka name capital se rkhte aur extension .js ho skti ya .jsx bhhi ho skti.

//pehley har component mei React ko import krna padhta tha but ab nahi krna padhta modern react mei.

import PropTypes from 'prop-types'
//yeh hummei import krna prop-types.
//jo component ki property hoti hai, that is propTypes.

// yaha pe simple props rakh skta tha {...} ki jagah but fir woh object bn jayega props naam ka and props k aage .(dot) operator use krna padhta to access individual props and abhi hum ne destructure kar liya.
function Header({text, bgColor, textColor}) {

    // agr inline nahi karte toh fir simply variable banao aur ussmei style wala object bana do and then {} mei dal do.
    const headerStyles = {backgroundColor: bgColor, color: textColor};

  return (
    // agar header k styles ko inline krna ho tab what we would have done is <header style = {{backgroundColor: 'blue'}}>
    // note that it's background-color in CSS so yaha pe camel case kr dete.
    <header style={headerStyles}>
        <div className="container">
        <h2>{text}</h2>
        </div>
    </header>
  )
}

// yaha pe hum default props rkh skte agar koi prop send nhi hota toh yeh values le li jayengi.
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

//This is the propTypes which is the type checking for checking the data type of the props so humne fix kr diya ki text prop shoud be of the type string for example.
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header