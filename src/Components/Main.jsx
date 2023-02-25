import React from 'react'
import Styles from "./main.module.css"

 
const Main = () => {
    const myStyle={
        backgroundImage: 
 "url('https://capricathemes.com/wordpress/WCM03/WCM030073/wp-content/uploads/2021/12/cms-banner-1.jpg')",
        height:'300px',
        width:"300px",
        margin:"50px",
       
        marginTop:"-40px",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const myStyle2={
        backgroundImage: 
 "url('https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')",
        height:'300px',
        width:"300px",
       margin:"50px",
     color:"white",
        
        marginTop:"-40px",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const myStyle3={
        backgroundImage: 
 "url('https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')",
        height:'300px',
        width:"300px",
        margin:"50px",
        
      marginTop:"-40px",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const img1={
        backgroundImage: 
 "url('https://capricathemes.com/wordpress/WCM03/WCM030073/wp-content/uploads/2022/01/02-254x318.jpg')",
        height:'80%',
        width:"100%",
       
        
    
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const img2={
        backgroundImage: 
 "url('https://capricathemes.com/wordpress/WCM03/WCM030073/wp-content/uploads/2022/01/04-254x318.jpg')",
 height:'80%',
 width:"100%",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const img3={
        backgroundImage: 
 "url('https://capricathemes.com/wordpress/WCM03/WCM030073/wp-content/uploads/2022/01/09-254x318.jpg')",
 height:'80%',
 width:"100%",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const img4={
        backgroundImage: 
 "url('https://capricathemes.com/wordpress/WCM03/WCM030073/wp-content/uploads/2022/01/13-254x318.jpg')",
 height:'80%',
 width:"100%",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const img5={
        backgroundImage: 
 "url('https://capricathemes.com/wordpress/WCM03/WCM030073/wp-content/uploads/2022/01/16-254x318.jpg)",
 height:'80%',
 width:"100%",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    


  return (
    <>
    <div style={{backgroundColor:"white"}}>
     <div  className={Styles.main} style={{display:"flex",marginLeft:"200px",marginTop:"-170"}} className={Styles.container}>
        <div style={myStyle}>
            <p style={{color:"white"}}>25% Discount</p>
            <h3 style={{color:"white"}}>Buy Huawei watch</h3>
        </div>
        <div style={myStyle2}>
        <p style={{color:"white"}}>25% Discount</p>
            <h3 style={{color:"white"}}>Buy Huawei watch</h3>
        </div>
        <div style={myStyle3}>
        <p style={{color:"white"}}>25% Discount</p>
            <h3 style={{color:"white"}}>Buy Huawei watch</h3>
        </div>
     </div>
     <div>
     <div><h1>Trending Products</h1></div>
     <div className={Styles.btn}>
        <button>Analog Watch</button>
        <button>Men Watch</button>
        <button> Skelton Watch</button>
     </div>
     <div  className={Styles.watch}>
       <div>
        <div style={img1} className={Styles.img}></div>
        <div>
            <button>Add To Cart</button>
        </div>
       </div>
       <div>
       <div  style={img2} className={Styles.img}></div>
        <div>
        <button>Add To Cart</button>
        </div>
       </div>
       <div>
       <div  style={img3} className={Styles.img}></div>
        <div>
        <button>Add To Cart</button>
        </div>
       </div>
       <div>
       <div  style={img4} className={Styles.img}></div>
        <div >
        <button>Add To Cart</button>
        </div>
       </div>
       <div>
       <div  style={img5} className={Styles.img}></div>
        <div>
        <button>Add To Cart</button>
        </div>
       </div>
     </div>
     </div>
     <div  className={Styles.watch}>
       <div>
        <div style={img1} className={Styles.img}></div>
        <div>
            <button>Add To Cart</button>
        </div>
       </div>
       <div>
       <div  style={img1} className={Styles.img}></div>
        <div>
        <button>Add To Cart</button>
        </div>
       </div>
       <div>
       <div  style={img1} className={Styles.img}></div>
        <div>
        <button>Add To Cart</button>
        </div>
       </div>
       <div>
       <div  style={img1} className={Styles.img}></div>
        <div >
        <button>Add To Cart</button>
        </div>
       </div>
       <div>
       <div  style={img1} className={Styles.img}></div>
        <div>
        <button>Add To Cart</button>
        </div>
       </div>
     </div>
        <div>
            <div><button>View more Products</button></div>
            <div className={Styles.free}>
                <div>
                    <img src='data:image/jpeg;base64,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'/>
                </div>
                <hr/>
                <div><p>Free Delivery Now On Your First Order and over $200</p></div>
                <hr/>
                <div><h1>-Only $200*</h1></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Main