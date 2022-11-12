// there is a BrowserRouter or HashRouter.
//BrowserRouter uses the HTML5 history API to keep the user in sync with the URL.
//HashRouter uses hash portion of the URL to keep it in sync.
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackData from "./data/FeedbackData."
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from './components/AboutIconLink';
import {FeedbackProvider} from './context/FeedbackContext'

// Yeh functional component hai App...React mei components hi hotte aur components bhi 2 type k hotte ek toh class components aur ek functional components and modern react mei we use the functional components more.
function App(){

    //************************* Showing dynamic content, content in lists, and Conditionals in JSX *****************************

    // this is the region jaha pe mei functions aur variables define/declare kr skta

    /*
        This is the code snippet which shows how we can add dynamic values in the jsx.

        {} in jsx can be used to evaluate JS exressions.

        const title = 'Blog Post';
        const body = 'This is my blog post';
        const comments = [
            {id:1, text:'one'},
            {id:2, text:'two'},
            {id:3, text:'three'},
        ]

        const loading = true;

        const showComments = false;

        //so here, agr loading ho rhi hogi toh conditionals k according Loading... wala h1 show hoga bas.
        
        if(loading) return <h1>Loading...</h1>

        const commentBlock = (// This is the way/method by which we can spit out li items in the ul to show the comments.
                <div className = 'comments'>
                    <h3>Comments ({comments.length})</h3>
                    <ul>
                        {comments.map((comment, index)=>{
                            return(
                            <li key = {index}>{comment.text}</li>
                            )
                        })}
                    </ul>
                </div>)

        return (
            <div className = 'container'>
                <h1>{title}</h1>
                <p>{body}</p>

                //ternary operator laga kr we can use conditionals inside here.
                {showComments ? commentBlock : null}
            </div>
        )
    */

    //****************************************************************************** 
        return (
        <FeedbackProvider>
        <Router>
            {/* <Header text = 'Hello World' /> ese likhenge agr hum koi prop bhejte hai...in the component...yeh prop ko catch krenge in the head component.*/}
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm/>
                            <FeedbackStats />
                            <FeedbackList />
                        </>
                    }>
                    </Route>

                    <Route path='/about' element={<AboutPage />} />
                </Routes>

                <AboutIconLink />
            </div>
        </Router>
        </FeedbackProvider>
    )
}

//*************** Basic Points about JSX **************************.

//Yeh jo bhi uppr HTML type ka code likhte it is basically Javascript XML or JSX which is a syntactical sugar to embed HTML in JS. 

//we have some rules in JSX like, JSX expressions must have one parent element only.

//multiple elements dene ho return mei toh uss ko ek div mei enclose kr lo.

//agar div nahi rkhna toh <> </> rkh do bas...aur iss mei enclose kr do multiple elements.

//kuch differences hai jaise class nahi hota JSX mei, className hota hai...class is reserved in React/JSX.

//JSX mei for attribute nahi kar skte use as for loop bhi hai...so uss ki jagah hota htmlFor.

//agar JSX nahi use krte, toh under the hood jo hota hai...
//return React.createElement('div', {className: 'container'}, React.createElement('h1', {}, 'My App'));

//Yeh dikh rha hummei ki kafi clumsy ho rha and thus JSX comes in to make the things easy and readable.

//**************************************************************** 

export default App