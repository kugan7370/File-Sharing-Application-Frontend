import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  const { current_user, error } = useSelector((state) => state.user)

  return (
    <div className="App">
      <Routes>
        {!current_user ? (
          <>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        ) : (
          <>


            <Route path="*" element={<Home />} />


          </>
        )
        }
      </Routes>
    </div>
  );
}

export default App;
