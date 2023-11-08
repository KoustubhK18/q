import { useState } from "react";
import {  useSelector } from "react-redux/es/hooks/useSelector";

//let [users, setUsers] = useState([]); 



function PersonUtil() {
    let users = useSelector(state => state.users);
    /*
    checkUser: async function(passedData){
        let requestOptions = {
            method: 'GET'
        };
        let status;
        fetch('https://test-quiz-app-2c5e5-default-rtdb.firebaseio.com/users.json',requestOptions)
            .then(response=>response.json())
            .then((data)=>{
                for(let key in data){
                    users.push(data[key].email);
                }
                status = (users.indexOf(passedData && passedData.email) != -1);
            }
            );
        return status;
            
    },
    */
    this.handleLogin = function(data){
        let status = false;
        users.forEach(user => {
            if(user.email === data.email && user.password == data.password){
                status = true;
                return status;
            }
        });
        console.log('handleLoginstate : '+status);
        return status;
    };
    this.handleSignup = function(data){
        console.log(data);
        let dataToPut = {[data.firstName+data.lastName]: data}
        let requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToPut)
        };
        fetch('https://test-quiz-app-2c5e5-default-rtdb.firebaseio.com/users.json',requestOptions)
            .then(response=>response.json())
            .then(data=>console.log('data',data))
    }
}

export default PersonUtil;