import React from 'react'
import Navbar from './Navbar'
import { Button } from 'primereact/button'

const Pricing = () => {
  return (
    <div>
<Navbar/>
    <div className="surface-0">
      <div className="text-900 font-bold text-6xl mb-4 text-center">Job Packages</div>
      <div className="text-700 text-xl mb-6 text-center line-height-3">Discover the perfect plan for your hiring needs.</div>

      <div className="grid">
        <div className="col-12 lg:col-4">
          <div className="p-3 h-full">
            <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
              <div className="text-900 font-medium text-xl mb-2">Starter</div>
              <div className="text-600">Basic plan for small businesses</div>
              <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
              <div className="flex align-items-center">
                <span className="font-bold text-2xl text-900">$19</span>
                <span className="ml-2 font-medium text-600">per job post</span>
              </div>
              <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
              <ul className="list-none p-0 m-0 flex-grow-1">
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-green-500 mr-2"></i>
                  <span>1 job post listing</span>
                </li>
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-green-500 mr-2"></i>
                  <span>30-day listing duration</span>
                </li>
              </ul>
              <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
              <Button label="Select Plan" className="p-3 w-full" />
            </div>
          </div>
        </div>

        <div className="col-12 lg:col-4">
          <div className="p-3 h-full">
            <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
              <div className="text-900 font-medium text-xl mb-2">Professional</div>
              <div className="text-600">Ideal for growing teams</div>
              <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
              <div className="flex align-items-center">
                <span className="font-bold text-2xl text-900">$49</span>
                <span className="ml-2 font-medium text-600">per job post</span>
              </div>
              <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
              <ul className="list-none p-0 m-0 flex-grow-1">
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-green-500 mr-2"></i>
                  <span>3 job post listings</span>
                </li>
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-green-500 mr-2"></i>
                  <span>60-day listing duration</span>
                </li>
              </ul>
              <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
              <Button label="Select Plan" className="p-3 w-full" />
            </div>
          </div>
        </div>

        <div className="col-12 lg:col-4">
          <div className="p-3 h-full">
            <div className="shadow-2 p-3 flex flex-column" style={{ borderRadius: '6px' }}>
              <div className="text-900 font-medium text-xl mb-2">Enterprise</div>
              <div className="text-600">Tailored solutions for large organizations</div>
              <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
              <div className="flex align-items-center">
                <span className="font-bold text-2xl text-900">$99</span>
                <span className="ml-2 font-medium text-600">per job post</span>
              </div>
              <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
              <ul className="list-none p-0 m-0 flex-grow-1">
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-green-500 mr-2"></i>
                  <span>Unlimited job post listings</span>
                </li>
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-green-500 mr-2"></i>
                  <span>90-day listing duration</span>
                </li>
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-green-500 mr-2"></i>
                  <span>Advanced analytics</span>
                </li>
              </ul>
              <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
              <Button label="Select Plan" className="p-3 w-full p-button-outlined" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Pricing