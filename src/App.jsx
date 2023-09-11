import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import './App.css'

function App() {


  return (
    <>
      <Header></Header>
      <hr />
      <div className='flex mt-7' >
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>

    </>
  )
}

export default App
