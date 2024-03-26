
import Driver from './components/Driver'
import Loader from './components/Loader'

const App = () => {
  return(
    // page loading will be delayed
    <Loader>
      <Driver/>
    </Loader>
  )
}

export default App;
