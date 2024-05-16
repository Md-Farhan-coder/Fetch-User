import React, { useState, useEffect } from "react";
import axios from "axios";
import vite from "/vite.svg";

const Sidebar = ({ idParam }) => {
	const [display, setdisplay] = useState("visible");
	const [id, setId] = useState(null);
	const [val, setVal] = useState(null);
    const [loading, setLoading] = useState(false);

	useEffect(() => {
		console.log("sidebar Effecvt Render");
		setId(idParam );
		setLoading(true)
	}, [idParam]);

    useEffect(() => {
        if (id == null) console.log("null");
		else {
            console.log(typeof(idParam));
			axios
				.get("https://602e7c2c4410730017c50b9d.mockapi.io/users?id=" + id)
				.then((data) => {
					arrFilter(data.data);
				})
				.catch((error) => {
					console.log("Error :" + error);
				});
		}
        ck();
    },[id]);

    
	useEffect(() => {
        // loading ? load(): unload();
    }, [loading]);

    const ck= ()=>{
        console.log("Check");
    }
	const arrFilter = (data) => {
		console.log(data);

		data.map((value, index, arr) => {
            console.log(value.id);
            console.log(id);

			if (id === value.id) {
				console.log("Val found :  " + JSON.stringify(value));
				setVal(value);
                setLoading(false);
				console.log("use Statrevasl  :b   " + typeof(value));
			}
            else console.log("not matrched");
		});
	};

   {
if(loading){
        return(
            <nav id=" " style={{ display: display}}>
        <div className=" d-flex justify-content-center align-items-center fs-2" id="sidebar">
           
  <span class="spinner-border spinner-border-sm m-4 fs-6"  style={{  width: "3rem", height: "3rem",}}></span>
  

        </div></nav>)
    }
    }
    
    {
  if(val!=null && !loading){
            return (
                <>
               
                    <nav id="sidebar" className="" style={{ display: display }}>
                        <div class="sidebar-header ">
                            <h3 className="text-center">User Details</h3>
                        </div>
        
                        <div className="sidebar-item d-flex flex-column align-items-center p-4">
                            <div className="sidebar-img">
                                <img className="rounded-circle" src={val.avatar || vite} alt="" />
                            </div>
                            <div className="sidebar-title my-3 fw-bold text-center fs-3 text-nowrap text-nav-underline">Name <br/> {` ${val.profile.firstName} ${val.profile.lastName}`}</div>
                            <div className="sidebar-username">
                            <span className=" fw-bold">	Username: </span><span className="text-dark">{val.profile.username}</span>
                            </div>
                            <div className="sidebar-email"><span className=" fw-bold">Email:</span>  {val.profile.email}</div>
                            <div className="sidebar-job-tilte text-center">
                                <p className="mb-0 fw-bold">Job Title</p> {val.jobTitle}
                            </div>
                            <div className="sidebar-bio text-center ">
                                
                                <p className="pb-0 mb-0 fw-bold">Bio</p>{val.Bio}
                            </div>
                        </div>
        
                        <ul class="list-unstyled CTAs">
                            <li onClick={()=> navigator.clipboard.writeText(val.profile.username)}>
                                <a
                                 
                                    class="download"
                                >
                                 Copy Username to Clipboard
                                </a>
                            </li>
                            <li className="d-none">
                                <a
                                    href="#"
                                    class="article"
                                >
                                    Back to article
                                </a>
                            </li>
                        </ul>
                    </nav>
                </>
            );
        }
        else{
            return <> <nav id="sidebar" style={{ display: display }}>
            <div class="sidebar-header h-100 d-flex align-items-center justify-content-center">

                <h3 className="text-center">Please Click to get Details</h3>
            </div>
            </nav></>
        }
    }
    
    
	// setId(idParam);
	{ }

    {
      
    }
	
};

export default Sidebar;
