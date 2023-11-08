import logo from './logo.svg';
import './App.css';
import SignInSide from './modules/SignIn';
import SignUp from './modules/SignUp';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import usersReducer, { addUser } from './store/users/usersSlice';
import Dashboard from './modules/Dashboard';

function App() {
  //let [users, setUsers] = useState([]);
  let users1 = useSelector(state => state.users);
  let pageStatus = useSelector(state => state.pageStatus);
  let dispatch = useDispatch();
  
  useEffect(()=>{
    fetch('https://test-quiz-app-2c5e5-default-rtdb.firebaseio.com/users.json',{method: 'GET'})
            .then(response=>response.json())
            .then((data)=>{
                for(let key in data){
                  dispatch(addUser(data[key]));
                }
            }
            );
  },[]);
  console.log('usersState with redux',users1);
  let getPage = () => {
    if(pageStatus.isLoginPage)
     return <SignInSide />
    else if(pageStatus.isSignupPage)
      return <SignUp />
  }
  return (
    <div className="App">
      {pageStatus.isLoggedIn ? <Dashboard /> : 
      getPage()
        
      }
    </div>
  );
}

export default App;
