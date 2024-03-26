
import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({children}) => {
  const [isLoading, setLoading] = useState(true)
  
  // After 5 seconds we will change state
  // so that we are no longer loading.

  const startTimer = () => {
    let timer = 5
    setInterval(() => { 
      if (timer <= 0) {
        setLoading(false)
      }
      timer -= 1
    },
    1000)
  }

  if (isLoading) {
    // start countdown until loading is done
    startTimer()
    return(
      <>
        <h2 className='loading-container'> LOADING PAGE .. </h2>
        <div className='loading-spinner'>
          <ClipLoader
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </>
    )}
  else {
    return(<>{children}</>)
  }
}

export default Loader;

