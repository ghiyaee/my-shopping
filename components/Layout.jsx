
import Header from "./Header"
import Footer from "./Footer"
function Layout({children}) {
  return (
      <div className="flex justify-between flex-col min-h-screen gap-4">
          <Header/>
          {children}
          <Footer/>
    </div>
  )
}

export default Layout