import Header from './component/header'
import Slider from './component/slider'
import Footer from './component/footer'
import Main from './component/main'
function App() {
  return (
    <div className="App">
      <div className={StyleSheet.container}>
        <Header />
        <Slider />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
