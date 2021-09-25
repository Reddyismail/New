import React, {useState} from 'react'

const Login_form_hooks = () => {

const [email, setEmail] = useState("");

   const [password, setPassword] = useState("");

      return(
            <div className="Form">
              <form >
                <div>
                <lable htmlFor="email">email</lable><br></br>
                <input type="text" name="email"  id="email" placeholder="email" 
                
                autoCompleat="off" 
                value={email}
                onChange={(e) =>  setEmail(e.target.value)}></input><br></br>
                </div>

               <div>
               <lable htmlFor="password">password</lable><br></br>
                <input type="password" name="password"  id="password"   
                autoCompleat="off" placeholder="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}></input><br></br><br></br>
                <button type="submit">submit</button>
               </div>
             </form>  
            </div>
        )
    
}

export default Login_form_hooks
