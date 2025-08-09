                import { Link } from "react-router-dom"
const CompanyInfo = ()=>{
    return(
          <div className="col-span-1 md:col-span-2">
            <img src="https://uokpdllmsspezsqltpxj.supabase.co/storage/v1/object/sign/soar-hq-bucket/SOAR%20HQLOGO%20IN%20WHITE.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hYWRmMGY1MS04ZDNiLTQ3OTgtYTg3NS0xZGIwMjMxZGNhNDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzb2FyLWhxLWJ1Y2tldC9TT0FSIEhRTE9HTyBJTiBXSElURS5wbmciLCJpYXQiOjE3NTIzMDgyNzQsImV4cCI6MjgzOTk5MjMwODI3NH0.aIoadu7_4Fx7sOHrQI5aE4fLaO_IL3nLrlHgpQliqlw" alt="" className="w-[4rem] mb-4" />
            {/* <h3 className="text-xl font-bold mb-4"> SoarHQ</h3> */}
            <p className="text-gray-300 mb-4">
              Building amazing experiences for our customers with innovative solutions and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
    )
}

const QuickLinks = ()=>{
return(
            <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

)
}

const Support = () =>{return(
              <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
              </div>
)}

const DigitalLibrary = () =>{
  return(
        <figure>
             <div className="flex flex-col " id="eLibraryBtnSection">
            <h2 className="text-lg font-semibold mb-4">Digital library</h2>
            <button className="bg-[#d4af37] border border-[#f2f3f7] rounded-sm uppercase py-2  cursor-pointer hover:shadow-neutral-800 shadow-lg" id="ELibraryBtn">
              <Link to="/Elibrary">explore</Link>
              </button>
          </div>
        </figure>
    )
}

const BottomBar = ()=>{
return(
    <div className="border-t border-[#d4af37] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© 2025 SoarHQ. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
)
}



const Footer = () => {
  return (
    <footer className="bg-[url('../images/soarbackground.webp')] bg-cover bg-center bg-[#030303d0] bg-blend-darken text-white py-8 px-4 mt-16 md:mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
<CompanyInfo/>

          {/* Quick Links */}
<QuickLinks/>
  
          {/* Support */}
<Support/>


          {/* Digital Library */}
<DigitalLibrary/>

        </div>

        {/* Bottom Bar */}
<BottomBar/>
      
      </div>
    </footer>
  )
}

export default Footer
