import React,{useState} from 'react';
import './App.css';
import Data from './nssgallery';
import { useMediaQuery } from 'react-responsive'
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
      <button className=' btn btn-success ' onClick={()=>filterItem('Plantation Drive')}>Plantation Drive</button>
      <button className='btn btn-warning' onClick={()=>filterItem('Cleanliness Drive')}>Cleanliness Drive</button>
      <button className='btn btn-warning'onClick={()=>filterItem('Donation Drive')}>Donation Drive</button>
      <button className='btn btn-success'onClick={()=>filterItem('Cultural Event')}>Cultural Events</button>
     </div>
      </div>
      <div className='image-grid'>
      {
          items.map((elem)=>{

            const{id,imageurl,category,des}=elem;
            return(
            <div className='image-grid '>
              <img src={imageurl} alt='pics' class="responsive"/>
              
            </div>
            )})}
     </div>
      </>
    )
  }

  

export default App





















// import React,{useState} from 'react';
// import './App.css';
// import Data from './nssgallery';
// const App = () => {
//   const[items,setItems]=useState(Data);
//   const filterItem=(categItem)=>{

//     const updatedItems=Data.filter((curele)=>
//     {
//       return curele.category ==categItem;
//     });
// setItems(updatedItems);

//   }
//   return (
//   <>
   
   
//     <h2 className='mt-5 text-center main-heading'>NSS UPES GALLERY</h2>
//     {/* <img src='https://www.freelogovectors.net/wp-content/uploads/2020/02/nss-logo-national-service-scheme.png' height={70} className='logo'></img> */}
//     <div className="menu-tabs container">
//    <div className='menu-tab d-flex justify-content-around'>
//     <button className='btn btn-warning'onClick={()=>setItems(Data)}>ALL</button>
//     <button className=' btn btn-success'onClick={()=>filterItem('Plantation Drive')}>Plantation Drive</button>
//     <button className='btn btn-warning'onClick={()=>filterItem('Cleanliness Drive')}>Cleanliness Drive</button>
//     <button className='btn btn-warning'onClick={()=>filterItem('Donation Drive')}>Donation Drive</button>
//     <button className='btn btn-success' onClick={()=>filterItem('Cultural Event')}>Cultural Events</button>


//    </div>
//     </div>

// <div className='menu-items contaier mt-5'>
//   <div className='row'>
//     <div className='col -11 mx-auto'>
//       <div className='row my-5'>
//         {
//           items.map((elem)=>{

//             const{id,imageurl,category,des}=elem;
//             return(
//               <div className='item1 col-12 col-md-6 col-lg-6 col-xl-3 my-8'>
//           <div className='row Item-inside'>
//             {/*images*/}
//             <div className='image-grid '>

//               <img src={imageurl} alt='pics' className='rounded mx-auto d-block img-thumbnail img-fluid'/>

//             </div>
//             <div className='col-12 col-md-12 col-lg-3'>
//               <div className='main-title pt-4 p-3'>
//                 <h2>{category}</h2>
//                 <p>{des}</p>
//               </div>
//               <div className='date-time'>
//                 <div className='about-image'>
//                   <h5>12/2/2024</h5>
//                 </div>
//               </div>
//             </div>
//             </div>
// </div>
//             )

//           })
//         }
//         </div>
//           </div>
//          </div>
//       </div>
      
//   </>
// )
// }

// export default App


