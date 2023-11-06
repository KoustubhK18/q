import logo from './logo.svg';
import './App.css';
import SignInSide from './modules/SignIn';
import SignUp from './modules/SignUp';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import usersReducer, { addUser } from './store/users/usersSlice';

function App() {
  let [users, setUsers] = useState([]);
  let users1 = useSelector(state => state.users);
  let dispatch = useDispatch();
  console.log(usersReducer.action);
  
  useEffect(()=>{
    fetch('https://test-quiz-app-2c5e5-default-rtdb.firebaseio.com/users.json',{method: 'GET'})
            .then(response=>response.json())
            .then((data)=>{
                let usersArr = [];
                for(let key in data){
                  dispatch(addUser(data[key]));
                }
            }
            );
  },[]);
  console.log('usersState',users);
  return (
    <div className="App">
      <SignInSide />
      <SignUp />
    </div>
  );
}

export default App;
