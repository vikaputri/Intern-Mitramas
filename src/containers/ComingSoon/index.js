import React from "react";
import Header from "../../components/Header";

const ComingSoon = () => {
  return (
  	<div>
  		<Header/> 
  		<div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
  			<h1 class="mb-3">COMING SOON</h1>
	        <a class="btn btn-warning text-decoration-none" href="/">
	          Back to Home
	        </a>
	    </div>
	</div>
    );
  };

export default ComingSoon;