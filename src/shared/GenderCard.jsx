import { FaMars, FaVenus } from "react-icons/fa"


const GenderCard = () => {
  return (
      <div>
                 <div className="card bg-white/70 border-white/30 backdrop-blur-lg h-full  shadow-lg p-6 rounded-2xl md:rounded-4xl">
                    <h2 className="text-sm font-medium text-gray-800 mb-6">Gender</h2>
                    <div className="flex justify-center items-end gap-10">
                      {/* Female Column */}
                      <div className="flex flex-col items-center w-20">
                        {/* Container Box */}
                        <div className="relative w-full h-56 bg-gray-200 rounded-full overflow-hidden flex flex-col justify-between py-3 px-2 border-gray-300 border">
                          {/* Progress Fill */}
                          <div className="absolute bottom-0 left-0 w-full h-[72%] bg-gradient-to-t from-blue-600 via-blue-500 to-blue-300"></div>
          
                          {/* Percentage (top inside) */}
                          <div className="relative rotate-90 z-10 text-xs mt-2 font-semibold text-gray-500 text-center">
                            72%
                          </div>
          
                          {/* Label (bottom inside) */}
                          <div className="relative z-10 -rotate-90 text-gray-600 text-sm font-medium text-center">
                            Female
                          </div>
          
                          {/* Bottom Icon */}
                          <div className="relative z-10 mx-auto mt-2 w-16 h-16 bg-black rounded-full flex items-center justify-center">
                            <FaVenus className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
          
                      {/* Male Column */}
                      <div className="flex flex-col items-center w-20">
                        {/* Container Box */}
                        <div className="relative w-full h-56 bg-gray-200 rounded-full overflow-hidden flex flex-col justify-between py-3 px-2 border border-gray-300">
                          {/* Progress Fill */}
                          <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-t from-green-600 via-teal-500 to-teal-300"></div>
          
                          {/* Percentage (top inside) */}
                          <div className="relative rotate-90 z-10 text-xs mt-2 font-semibold text-gray-500 text-center">
                            45%
                          </div>
          
                          {/* Label (bottom inside) */}
                          <div className="relative z-10 -rotate-90 text-gray-600 text-sm font-medium text-center">
                            Male
                          </div>
          
                          {/* Bottom Icon */}
                          <div className="relative z-10 mx-auto mt-2 w-16 h-16 bg-black rounded-full flex items-center justify-center">
                            <FaMars className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    </div>
  )
}

export default GenderCard