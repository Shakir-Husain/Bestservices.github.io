import React, { useState } from 'react';
 

const Contact = () =>{
    const [data, setData] = useState({
        fullname:'',
        email:'',
        mobilenumber:'',
        msg:'',
    });

    const inputEvent = (event) =>{
        const {name, value} = event.target;
        setData((preVal)=>{
            return{...preVal, [name]:value,}
        })
    }
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My Name is ${data.fullname}. My Mobile Number is ${data.mobilenumber}. Email address is ${data.email}. Here is what I want to say ${data.msg}`);
    }

    return (<>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">

                    <form onSubmit={formSubmit}>
                    <div class="mb-3">
                     <label for="exampleFormControlInput1" 
                       class="form-label">Full Name</label>
                         <input type="text" class="form-control" id="exampleFormControlInput1"
                          name="fullname" value={data.fullname}
                           onChange={inputEvent}
                          placeholder="Enter your name"/>
                         </div>

                         <div class="mb-3">
                     <label for="exampleFormControlInput1" 
                       class="form-label">Email Address</label>
                         <input type="email" class="form-control"
                          id="exampleFormControlInput1"
                           name="email"
                            value={data.email} onChange={inputEvent}
                          placeholder="name@example.com"/>
                         </div>

                         <div class="mb-3">
                     <label for="exampleFormControlInput1" 
                       class="form-label">Mobile Number</label>
                         <input type="number" class="form-control"
                          id="exampleFormControlInput1"
                           name="mobilenumber"
                            value={data.mobilenumber} onChange={inputEvent}
                          placeholder="Mobile Number"/>
                         </div>

                         <div class="mb-3">
                          <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                           <textarea class="form-control"
                            id="exampleFormControlTextarea1"
                            name="msg"
                            value={data.msg} onChange={inputEvent} rows="3"></textarea>
                          </div>                   

                          <div class="col-12">
                            <button class="btn btn-outline-primary" type="submit">Submit form</button>
                                </div>

                    </form>
                </div>
            </div>
        </div>
    </>);
}

export default Contact;