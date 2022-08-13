import { useState } from "react"

const Candidate =()=>{
    const[edit,setEdit] = useState(false)
    return(
        <>
             <div className="header">
          <div className="inside insidebutton">
          <button onClick={()=>setEdit(false)}>Create user</button>
          <button onClick={()=>setEdit(true)}>Edit user</button>
          </div>
          
    </div>
    <div className="create">
        <div className="inside insidecreate">
            <span>Add new candidate</span>
        </div>
    </div>
    <form action="#">
        <div className="name">
            <div className="inside insidename">
                <div className="firstname">

                    <input type="text" id="firstname" placeholder="FIRST NAME"/>
                </div>
                <div className="lastname">

                    <input type="text" id="lastname" placeholder="LAST NAME"/>
                </div>
            </div>
      </div>
        
      
      <div className="role">
            <div className="inside insiderole">

                <select name="jobrole" id="role">
                    <option selected value="role">SELECT ROLE</option>
                    <option value="frontend">FRONT END</option>
                    <option value="backend">BACKEND</option>
                    <option value="fullstack">FULL STACK</option>
                    <option value="Internship">INTERNSHIP</option>
                </select>

            </div>

        </div>

        <div className="email-phone">
            <div className="inside insideemail-phone">
                <div className="email">

                    <input type="text" id="email" placeholder="EMAIL"/>
                </div>
                <div className="phone">
                    <select name="countries">
                        <option  value="ind" >IND</option>
                        <option value="us">US</option>
                        <option value="aus">AUS</option>
                        <option value="can">CAN</option>
                    </select>
                    {/* <input type="tel" value="+91" maxlength="13"
                      id="phone"/> */}
                    <input type="tel" name="phone"  id="phone"  placeholder="PHONE" maxLength={10}/>
                    
                </div>
            </div>
       </div>
            
            <div className="streetnear">
                <div className="inside insidestreet-near">
                    <div className="street">
    
                        <input type="text" id="street" placeholder="STREET"/>
                    </div>
                    <div className="near">
    
                        <input type="text" id="near" placeholder="NEAR"/>
                    </div>
                </div>
          </div>      


          <div className="zipcodecity">
            <div className="inside insidezipcode-city">
                <div className="zipcode">

                    <input type="number" id="zipcode" placeholder="PINCODE"/>
                </div>
                <div className="city">

                    <input type="text" id="city" placeholder="CITY"/>
                </div>
                <div className="country">
                    <select name="country" id="country">
                        <option value="india">INDIA</option>
                        <option value="usa">USA</option>
                        <option value="russia">RUSSIA</option>
                    </select>
                </div>
            </div>
      </div>

<div className="cv-head">
    <div className="inside cvinside">
    <strong><span> CV Documents</span></strong>
    </div>
</div>

<div className="doc">
    <div className="inside docinside">
       <div className="filecv">
        <label className="cv" for="cv">
            {edit?<>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg>
              <div class="file-detail">CV File (29 KB)</div> 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
              </svg>

            </>: 
            <>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-person" viewBox="0 0 16 16">
                <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
              
              <div className="file-detail">Upload cv</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle i-uploadcv" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
              </>} 
        </label>
            <input type="file" name="cv" id="cv"/>
       </div>
        

       <div className="filecv">
        <label className="cv-profile" for="cv">
            {edit?<>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg>
              
              <div class="file-detail">Optional Profile Image</div> 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
              </svg>
            </>:<><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-image" viewBox="0 0 16 16">
                <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z"/>
              </svg>
            
            <div className="file-detail">upload profile (optional)</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg></>}  
        </label>
            <input type="file" name="cv" id="cv"/>
       </div>
            
        
    </div>
</div>


<div className="dragdrop">
    <div className="inside insidedrag-drop">
          <label className="otherdoc" for="otherdoc">
            <input type="file" name="otherdoc" id="otherdoc"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-earmark" viewBox="0 0 16 16">
                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
              </svg>
              <div className="drag-detail">Drag and Drop or click to add additional attachements (optional)</div>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
          </label>
    </div>
</div>
   {edit? <>
    <div class="doc">
    <div class="inside docinside">
       <div class="filecv">
        <label class="cv" for="cv">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg>
              
              <div class="file-detail">Hund.jpg (26 KB)</div> 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
              </svg>
        </label>
            
       </div>
        

       <div class="filecv">
        <label class="cv-profile" for="cv">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg>
              
              <div class="file-detail">testcv f......agency.pdf</div> 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
              </svg>
        </label>
            <input type="file" name="cv" id="cv"/>
       </div>
            
        
    </div>
</div>

   
<div class="doc">
    <div class="inside docinside">
       <div class="filecv">
        <label class="cv" for="cv">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg>
              
              <div class="file-detail">Vivante....entin.docx (6</div> 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
              </svg>
        </label>
            
       </div>
        

     
            
        
    </div>
</div>
   </>:<></>}

<div className="submit">
    <div className="inside insidesubmit">
        {edit?<input type="button" value="Submit" id="submit"/>
    :
    <input type="button" value="Create" id="submit"/>    
    }
                
    </div>
</div>


    </form>
        </>
    )
}
export default Candidate