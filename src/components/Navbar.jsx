// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../provider/AuthProvider';

// const Navbar = () => {
//   const {user,signOutUser} = useContext(AuthContext);
 
  
//   const handleSignOut = ()=>{
//     signOutUser();
//   }
//     return (
// <div className="navbar bg-base-100 ">
//  <div className="navbar-start sticky">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16" />
//         </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//           <li><Link to='/'>Home</Link></li>
//           <li><Link to='/Lostfound'>Lost & Found Items</Link></li>
       
//       </ul>
//     </div>
//     <a className="btn btn-ghost text-xl">Lostify</a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//     <li><Link to='/'>Home</Link></li>
//     <li><Link to='/Lostfound'>Lost & Found Items</Link></li>
//     </ul>
//   </div>
//   <div className="navbar-end">
    
//       {
//       user ? (
//         <div className="dropdown dropdown-end flex items-center">
//          <div>
//          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//             <div className="w-10 rounded-full">
//               <img src={user.photoURL} alt="User Profile" title={user.displayName||user.name} />
//             </div>
//           </div>
//           <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//             <li><Link to='/add-item'>Add Lost & Found Item</Link></li>
//             <li><Link to='/allrecovered'>All Recovered Items</Link></li>
//             <li><Link to='/my-items'>Manage My Items</Link></li>
            
//           </ul>
//          </div>
//           <button className='btn' onClick={handleSignOut}>Logout</button>
//         </div>
//       ) : (
//         <Link to='/login' className="btn">Login</Link>
//       )
//       }

//   </div>
 
// </div>
//     );
// };

// export default Navbar;



import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const {user,signOutUser} = useContext(AuthContext);
 
  
  const handleSignOut = ()=>{
    signOutUser();
  }
    return (
        <div className="navbar bg-base-100 sticky top-0 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Lostfound'>Lost & Found Items</Link></li>
       
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Lostify</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/Lostfound'>Lost & Found Items</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    
      {
      user ? (
        <div className="dropdown dropdown-end flex items-center">
         <div>
         <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user.photoURL} alt="User Profile" title={user.displayName||user.name} />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link to='/add-item'>Add Lost & Found Item</Link></li>
            <li><Link to='/allrecovered'>All Recovered Items</Link></li>
            <li><Link to='/my-items'>Manage My Items</Link></li>
            
          </ul>
         </div>
          <button className='btn' onClick={handleSignOut}>Logout</button>
        </div>
      ) : (
        <Link to='/login' className="btn">Login</Link>
      )
      }

  </div>
 
</div>
    );
};

export default Navbar;
























