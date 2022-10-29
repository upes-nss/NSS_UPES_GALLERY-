// import React from 'react';
// import './App.css';
// import nssgallery from './nssgallery';

// function App() {
//   // const[image]=useState(image.nssgallery);
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             <img src='https://www.freelogovectors.net/wp-content/uploads/2020/02/nss-logo-national-service-scheme.png' height={40}>
//             </img> NSS UPES GALLERY
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNavAltMarkup"
//             aria-controls="navbarNavAltMarkup"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>

//           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div className="navbar-nav">
//               <a className="nav-link active" aria-current="page" href="#">
//                 ALL
//               </a>
//               <a className="nav-link active" aria-current="page" href="#">
//                 Cleanliness Drive
//               </a>
//               <a className="nav-link active" aria-current="page" href="#">
//                 Plantation Drive
//               </a>
//               <a className="nav-link active" aria-current="page" href="#">
//                 Donation Drive
//               </a>
//               <a className="nav-link active" aria-current="page" href="#">
//                 Cultural Event
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <img className="banner" src={"https://res.cloudinary.com/dbfyrrym6/image/upload/v1666695867/samples/tirangarally/DSC_0140-min_d5hp2m.jpg"} alt="BAenner" />
//       <h1 className='title'> NSS UPES HAPPY MOMENTS </h1>
//       <div className='image-grid'>
//         {nssgallery.map((data) =><img src={data.imageurl} alt="BAenner"></img>)}

//       </div>
//     </div>
//   );
// }

// export default App

import React,{useState} from 'react';
import './App.css';
import Data from './nssgallery';
const App = () => {
  const[items,setItems]=useState(Data);
  const filterItem=(categItem)=>{

    const updatedItems=Data.filter((curele)=>
    {
      return curele.category ==categItem;
    });
setItems(updatedItems);

  }
  return (
  <>
   
   
    <h2 className='mt-5 text-center main-heading'>NSS UPES GALLERY</h2>
    {/* <img src='https://www.freelogovectors.net/wp-content/uploads/2020/02/nss-logo-national-service-scheme.png' height={70} className='logo'></img> */}
    <div className="menu-tabs container">
   <div className='menu-tab d-flex justify-content-around'>
    <button className='btn btn-warning'onClick={()=>setItems(Data)}>ALL</button>
    <button className=' btn btn-success'onClick={()=>filterItem('Plantation Drive')}>Plantation Drive</button>
    <button className='btn btn-warning'onClick={()=>filterItem('Cleanliness Drive')}>Cleanliness Drive</button>
    <button className='btn btn-warning'onClick={()=>filterItem('Donation Drive')}>Donation Drive</button>
    <button className='btn btn-success' onClick={()=>filterItem('Cultural Event')}>Cultural Events</button>


   </div>
    </div>

<div className='menu-items contaier-fluid mt-5'>
  <div className='row'>
    <div className='col -11 mx-auto'>
      <div className='row my-5'>
        {
          items.map((elem)=>{

            const{id,imageurl,category,des}=elem;
            return(
              <div className='item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5'>
          <div className='row Item-inside'>
            {/*images*/}
            <div className='col-12 col-md-12 col-lg-4 img-div'>

              <img src={imageurl} alt='pics' className='img-fluid'/>

            </div>
            <div className='col-12 col-md-12 col-lg-8'>
              <div className='main-title pt-4 p-3'>
                <h2>{category}</h2>
                <p>{des}</p>
              </div>
              <div className='date-time'>
                <div className='about-image'>
                  <h5>12/2/2024</h5>
                </div>
              </div>
            </div>
            </div>
</div>
            )

          })
        }
        </div>
          </div>
         </div>
      </div>
  </>
)
}

export default App


