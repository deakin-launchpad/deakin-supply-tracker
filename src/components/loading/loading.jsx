import React from 'react'
import './loading.css'

const LoadingComponent = () => {
  return (
    <div className="center-page">
    <div className="preloader-wrapper big active loader valign-wrapper">
      <div class="spinner-layer spinner-blue">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LoadingComponent;
