const { default: userEvent } = require("@testing-library/user-event");

{/* <p>my name is rajja </p>
     <Card title="firstcard" img="" subtitle="xyz" />
     <Card title="secondcard" subtitle="abc"/> */}
      {/* <p>{count}</p>
      <button onClick={increment}>add count</button> <br></br>
      <button onClick={decrement}>subtract count</button> <br></br>
      <input onChange={namechange} placeholder='text here'></input>
      <p>{name}</p> */}




        // const [count, setCount] = useState(0)

  // const increment = () => {
  //   setCount(count + 1)
  // }
  // const decrement = () => {
  //   if (count > 0) {
  //     setCount(count - 1)
  //   }
  // }
  // const [name,setname]= useState("")
  // const namechange =(e) => {
  //  e.preventDefault()
  // //  console.log(e.target.value)
  // setname(e.target.value)
  // }



  
        // <p>
        //     {item.name}
        //   </p>







// *****************************************************************userEvent.js file****************
// import React from 'react'
// import "./user.css"
// import { useState } from 'react'
// import axios from 'axios'
// import Row from "../../components/card/row"
// import "../../components/card/row.css"

// const User = () => {
//     const [data, setdata] = useState([])

//     let baseUrl = `https://jsonplaceholder.typicode.com/users/`
//     axios.get(baseUrl)
//       .then(responsevar => {
//         // console.log("Response",responsevar.data)
//         setdata(responsevar.data)
//       })
//       .catch(error => {
//         console.log('Error', error)
//       })

//       const getSingleUserByIDForUpdate= id =>{
//         axios.get(`${baseUrl}/${id}`)
//         .then((res)=>{
//             console.log(res)
//         })
//         .catch(err => {
//             alert(err,"error")
//         })
        
//       }
//   return (
//     <div className='user'>
//        <h1>users </h1>
       
//        <table>
//         <tr>
//           <th>id</th>
//            <th>title</th>
//           <th>email</th>
//       <th>username</th>
//       </tr>

//       </table>
//       {data.map(item => (

//         <Row
//         onClick={()=> getSingleUserByIDForUpdate(item.id)}
//           title={item.name}
//           email={item.email}
//           id={item.id}
//           username={item.username}
//         />
//       ))}
//     </div>
//   )
// }

// export default User










// **********************************row.js***************************
// import React from 'react'
// import './row.css'
// import { useState } from 'react'

// const Row = props => {
//   // console.log(props)
//   const { id, title, email,username ,onClick} = props
//   // console.log(title)

//   return (
//     <div onClick={onClick}>
      
//       <table>
//         <tr>
//           <th>{id}</th>
//            <th>{title}</th>
//           <th>{email}</th>
//       <th>{username}</th>
//       </tr>

//       </table>
//     </div>
//   )
// }
// export default Row





// 88*******************************88row.css**************

// .card-con{
//       /* background-color: aqua;
//       border: 2px solid black;
//       height: 50px;
//       width: 800px;
//       margin: 0 auto; */
//   }
  /* .id{
      display: inline-block;
  
     width: 10%;
      text-align: left;
      
  }
  .title{
      display: inline-block;
      width: 35%;
      padding: 0px 10px;
  }
  .email{
      display: inline-block;
      width: 30%;
      padding: 0px 10px;
  }
  .username{
      display: inline-block;
      width: 25%;
      padding: 0px 10px;
  }
  table , th {
      border: 1px solid black;
      
  
      
  }
  table{
      border-collapse: collapse;
      width: 100%;
  
  }
  th{
      text-align: center ;
  } */