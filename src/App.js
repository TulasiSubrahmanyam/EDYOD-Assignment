import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <nav className="nav-bg">
        <div className="navbar-container">
        {/*part-1*/}
           <div className='d-flex flex-row'> 
            <div>
              <img src="images/logo.png" alt="logo" className="logo" />
            </div>
            {/*option*/}
            <div className="d-flex mt-4">
              <div className="ml-2">
                <select className="selection">
                  <option value="" className="options">Courses</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              <div className="ml-2">
                <select className="selection">
                  <option value="" className="options">Programs</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
             </div>
           </div>
        {/*part-2*/}  
        <div className='mt-2'>
          <div className='d-flex flex-row justify-content-between mt-2'>
            <div className="m-4 mt-2">
              <img src='images/searchicon.png' alt="search icon" className='searchIcon' />
            </div>
            <div className="m-4 mt-2" >
              <p className='login'>Log in</p>
            </div>
            <div className='m-4 mt-0'>
              <button type='button' className='joinButton'>JOIN NOW</button>
            </div>
          </div>
         </div>
        </div>
      </nav>

      <div className='bg-container'>
        {/* body */}
        <div className='d-flex flex-row  justify-content-between'>
          {/*course details*/}
            <div>
              <div>
                  <h1 className='courseHeading'>Access curated courses worth</h1>
                  <h1  className='courseHeading'><span style={{fontWeight:"600"}}>₹ </span><span style={{textDecoration: 'line-through', textDecorationColor: '#FF0000',textDecorationThickness: '3px',fontFamily:"Roboto",fontStyle:"normal"}}>18,500</span> at just <span style={{color:"#0096FF",fontFamily:"Arial",fontStyle:"normal"}}> ₹99</span> per year! </h1>
               </div>
               <div className='d-flex flex-column'>
                 <div className='d-flex flex-row mt-4'>
                    <img src='images/book.png' alt="BookRead" className='icons'/>
                    <p className='courseDetails'><span style={{color:"#0096FF",fontFamily:"Roboto",fontStyle:"normal"}}>100+ </span> Job relevant courses</p>
                 </div>

                 <div className='d-flex flex-row mt-3'>
                    <img src='images/time.png' alt="BookRead" className='icons'/>
                    <p className='courseDetails'><span style={{color:"#0096FF",fontFamily:"Roboto",fontStyle:"normal"}}>20,000+ </span> Hours of content</p>
                 </div>

                 <div className='d-flex flex-row mt-3'>
                    <img src='images/tv.png' alt="BookRead" className='icons'/>
                    <p className='courseDetails'><span style={{color:"#0096FF",fontFamily:"Roboto",fontStyle:"normal"}}>Exclusive </span> webinar access</p>
                 </div>

                 <div className='d-flex flex-row mt-3'>
                    <img src='images/tropy.png' alt="BookRead" className='icons'/>
                    <p className='courseDetails'>Scholarship worth<span style={{color:"#0096FF",fontFamily:"Roboto",fontStyle:"normal"}}>₹94,500 </span> </p>
                 </div>

                 <div className='d-flex flex-row mt-3'>
                    <img src='images/ads.png' alt="BookRead" className='icons'/>
                    <p className='courseDetails '><span style={{color:"#0096FF",fontFamily:"Roboto",fontStyle:"normal"}}>Ad Free </span> learning experience</p>
                 </div>
               </div>
            </div>
          
            {/*login page*/}
            <div className='loginCard mt-1'>
              <div className='d-flex d-flex justify-content-around mt-1'>
             
                   <div class="d-flex flex-column align-items-center ">
                     <div class="circle">1</div>
                     <p class="signupSubscribe">Sign Up</p>
                   </div>
                
                  <div class="d-flex flex-column align-items-center">
                    <div class="circle">2</div>
                    <p class="signupSubscribe">Subscribe</p>
                  </div>

              </div>

              <h3 style={{fontFamily:"Roboto",fontSize:"18px",textAlign:"center",color:"#3c4852",paddingBottom:"5px",fontWeight:"500"}}>Select your subcription plan</h3>
               <div>
               {/*card1*/}
                 <div className='boxContainer '>
                    <div className="expirecard "><p  style={{fontFamily:"Roboto",fontWeight:"400",fontSize:"8px",color:"#ffffff",textAlign:"center"}}>Offer expired</p></div>
                   <div className='d-flex flex-row justify-content-between ' >
                     <div className='d-flex flex-row  '>
                     <input
                        type="radio" checked
                         style={{ marginRight:"10px",width: "20px", height: "20px", backgroundColor: "#BEBEBE", borderColor: "#BEBEBE", opacity: 0.5 }}
                      />
                     <p className='planSubscription' style={{color:"#BEBEBE"}}>12 Months Subscription</p>
                     </div>
                    <div className='d-flex flex-column align-items-center'>
                     <div className='price' style={{color:"#BEBEBE",marginRight:"1px"}}>Total <span style={{fontWeight:"500",fontSize:"12px"}}> ₹99</span></div>
                     <p style={{fontFamily:"Roboto",fontSize:"10px",fontWeight:"400",color:"#BEBEBE"}}>₹8 /<span style={{fontWeight:"500"}}>mo</span></p>
                    </div>
                 </div>
                 </div>
               {/*card 2*/}
                 <div className='boxContainer' style={{backgroundColor:"#D7EDDD",border:"solid 2px #47BA68"}}>
                 <div className="recommendedcard"><p  style={{fontFamily:"Roboto",fontWeight:"400",fontSize:"8px",color:"#ffffff",textAlign:"center"}}>Recommended</p></div>
                  <div className='d-flex flex-row justify-content-between' >
                      <div className='d-flex flex-row  '>
                        <input
                          type="radio"  className='greenRadio'
                          name='"radio' checked
                        />
                        <p className='planSubscription' style={{color:"#3c4852"}}>12 Months Subscription</p>
                      </div>
                    <div className='d-flex flex-column justify-content-end align-items-center '>
                      <div className='price' style={{color:"#3c4852"}}>Total <span style={{fontWeight:"500",fontSize:"12px"}}> ₹179</span></div>
                      <p style={{fontFamily:"Roboto",fontSize:"10px",fontWeight:"400",color:"#3c4852"}}>₹15 <span style={{fontWeight:"500",color:"#BEBEBE"}}>/mo</span></p>
                    </div>
                    </div>
                 </div>

                {/*card 3*/}
                <div className='boxContainer' style={{backgroundColor:"#ffffff",border:"solid 2px #BEBEBE",padding:"10px"}}>

                  <div className='d-flex flex-row justify-content-between ' >
                    <div className='d-flex flex-row  mt-1 '>
                        <input
                        type="radio"  className='normalRadio'
                        name='"radio'
                      />
                      <p className='planSubscription' style={{color:"#3c4852"}}>6 Months Subscription</p>
                    </div>
                 
                    <div className=' d-flex flex-column  align-items-center '> 
                    <div className='price' style={{color:"#3c4852",paddingRight:"6px"}}>Total <span style={{fontWeight:"500",fontSize:"12px"}}> ₹149</span></div>
                    <p style={{fontFamily:"Roboto",fontSize:"11px",fontWeight:"400",color:"#3c4852"}}>₹25 <span style={{fontWeight:"500",color:"#BEBEBE"}}>/mo</span></p>
                  
                    </div>
                  </div> 
                </div>

                {/*card 4*/}
                <div className='boxContainer' style={{backgroundColor:"#ffffff",border:"solid 2px #BEBEBE",padding:"10px"}}>

                 <div className='d-flex flex-row justify-content-between ' >
                  <div className='d-flex flex-row justify-content- mt-1 '>
                  <input
                    type="radio"  className='normalRadio'
                    name='"radio'
                  />
                    <p className='planSubscription' style={{color:"#3c4852"}}>3 Months Subscription</p>
                 </div>
                <div className='d-flex flex-column align-items-center mt-0 '>
                 <div className='price' style={{color:"#3c4852",paddingRight:"7px"}}>Total <span style={{fontWeight:"500",fontSize:"12px"}}> ₹99</span></div>
                 <p style={{fontFamily:"Roboto",fontSize:"10px",fontWeight:"400",color:"#3c4852"}}>₹33<span style={{fontWeight:"500",color:"#BEBEBE"}}>/mo</span></p>
                </div>
             </div>
                </div> 
                
                <hr class="custom-hr" />
               
                <div className='d-flex flex-row justify-content-between '>
                 <p style={{fontFamily:"Roboto",fontSize:"12px",color:"#3c4852",fontWeight:"400",marginLeft:"12px"}}>Subscription Fee</p>
                 <p style={{fontFamily:"Roboto",fontSize:"12px",color:"#3c4852",fontWeight:"500",marginRight:"12px"}}>₹18,500</p>
                </div>
               {/*limited offers*/}
                <div className='offerBox ' >
                <div className='d-flex flex-row justify-content-between'>
                <div>
                 <h1 className='offerLimited'>Limited time offer</h1> 
                 <div className='d-flex flex-row '>  
                 <img src='images/icon_lock.png' alt="iconlock" className='iconLock'/>
                 <p style={{fontSize:"10px",fontFamily:"Roboto",color:"#DE4313",fontWeight:"300",marginTop:"1px"}}>offer valid till 25th March 2023</p>
                </div>
                </div>
                 <span style={{fontSize:"12px",fontWeight:"500"}}>-₹18,401</span>
                </div>
                </div>

                <div className='d-flex flex-row justify-content-between  mt-2'>
                  <p style={{fontFamily:"Roboto",fontSize:"12px",fontWeight:"500",color:"#3c4852",marginLeft:"10px"}}>Total <span style={{fontWeight:"400",fontSize:"11px"}}>(lncl. of 18% GST)</span></p>
                  <p style={{fontFamily:"Roboto",fontSize:"16px",fontWeight:"550",color:"#3c4852",marginRight:"15px"}}>₹149</p>
                </div>

                {/*buttons*/}
                <div className='d-flex flex-row justify-content-between'>
                 <button type="button" className='cancelBtn'>CANCEL</button>
                 <button type="button" className='payBtn'>PROCEED TO PAY</button>
                </div>

                <div>
                <img src='images/RazoLogo.png' alt="Razorpay img" className='razologo'/>
                </div>
              </div>
        </div>
      </div>
    </div>
    </div>
   
  );
}

export default App;
