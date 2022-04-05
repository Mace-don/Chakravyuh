import supabase from '../../utils/supabase'
import {useState} from 'react'

const Authenticate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUP = async (event) => {
    event.preventDefault();
    const {user, session, error} = await supabase.auth.signUp({email:email,password:password});
    if(error)
      console.log(error)
    else{
      console.log(session)
      console.log(user)
    }
  }

  const signIN = async (event) => {
    event.preventDefault();
    const {user, session, error} = await supabase.auth.signIn({email:email,password:password});
    if(error)
      console.log(error)
    else{
      console.log("session:", session)
      console.log("user: ", user)
    }
  }

  return (
    <form className="m-10" onSubmit={signUP}>
      <div>
        <label htmlFor="email">Email : </label>
        <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} className='border-2 border-black'/>
      </div>
      <br/>
      <div>
        <label htmlFor="password">Password : </label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border-2 border-black"/>
      </div>
      <br/>

      <button className="border-2 border-black mx-2" onClick={signIN}>Sign in</button>
      <button type="submit" className="border-2 border-black">Sign Up</button>
    </form>
  )
}

export default Authenticate