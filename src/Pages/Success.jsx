import React from 'react'

const Success = () => {
  return (
    <div className='min-h-screen'>
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center">

                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="flex flex-col items-center justify-center">

                                   
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4">
                                        <h3 className="text-xl font-medium leading-6 text-gray-900" id="modal-title">Booking Successful!</h3>
                        
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Success