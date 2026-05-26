const navHTML = `
<nav>
   <div class="container-xl py-3">
      <div class="d-flex justify-content-between align-items-center">
         <a href="index.html"><img src="./assets/images/logo.jpg" alt="HillTop Rides" height="47px" width="80px"></a>
         <nav>
            <ul class="nav nav-menu d-none d-lg-flex">
               <li class="nav-item"><a class="nav-link text-primary px-0 mx-3 font-16 fw-600" href="index.html">Home</a></li>
               <li class="nav-item"><a class="nav-link text-primary px-0 mx-3 font-16 fw-600" href="tour-package.html">Tour Packages</a></li>
               <li class="nav-item"><a class="nav-link text-primary px-0 mx-3 font-16 fw-600" href="destination.html">Destination</a></li>
               <li class="nav-item d-none"><a class="nav-link text-primary px-0 mx-3 font-16 fw-600" href="#">Hotel Booking</a></li>
               <li class="nav-item"><a class="nav-link text-primary px-0 mx-3 font-16 fw-600" href="char-dham-yatra.html">Char Dham Yatra</a></li>
               <li class="nav-item"><a class="nav-link text-primary px-0 mx-3 font-16 fw-600" href="uttrakhand-taxi.html">Uttrakhand Taxi</a></li>
               <li class="nav-item"><a class="nav-link text-primary px-0 mx-3 font-16 fw-600" href="about-us.html">About</a></li>
               <li class="nav-item"><a class="nav-link text-primary px-0 mx-3 font-16 fw-600" href="contact.html">Contact</a></li>
            </ul>
            <div class="justify-content-end d-flex d-lg-none" id="sidebar-toggle"><i class="fas fa-bars font-24"></i></div>
         </nav>
      </div>
   </div>
</nav>
`;
var sidebar = `
<div class="sidebar"  id="sidebar">
   <div class="sidebar-menu p-md-4 p-3 position-relative">
      <div class="sideClose" id="sidebar-close"><i class="fas fa-times font-24 text-white"></i></div>
      <div class="d-inline-flex mx-auto border-white mb-4">
         <a href="index.html" class="text-decoration-none">
         <img src="./assets/images/logo.jpg" alt="HillTop Rides" height="47px" width="80px">
         </a>
      </div>
      <div class="mt-4 menu_list">
         <ul class="list-unstyled d-flex flex-column">
            <li class="">
               <p class="nav-item mb-3 d-inline-block position-relative"><a class="nav-link p-0 pb-2 text-white text-decoration-none font-16 fw-600" href="index.html">Home</a></p>
            </li>
            <li class="">
               <p class="nav-item mb-3 d-inline-block position-relative"><a class="nav-link p-0 pb-2 text-white text-decoration-none font-16 fw-600" href="tour-package.html">Tour Packages</a></p>
            </li>
            <li class="">
               <p class="nav-item mb-3 d-inline-block position-relative"><a class="nav-link p-0 pb-2 text-white text-decoration-none font-16 fw-600" href="destination.html">Destination</a></p>
            </li>
            <li class="">
               <p class="nav-item mb-3 d-none position-relative"><a class="nav-link p-0 pb-2 text-white text-decoration-none font-16 fw-600" href="#">Hotel Booking</a></p>
            </li>
            <li class="">
               <p class="nav-item mb-3 d-inline-block position-relative"><a class="nav-link p-0 pb-2 text-white text-decoration-none font-16 fw-600" href="char-dham-yatra.html">Char Dham Yatra</a></p>
            </li>
            <li class="">
               <p class="nav-item mb-3 d-inline-block position-relative"><a class="nav-link p-0 pb-2 text-white text-decoration-none font-16 fw-600" href="uttrakhand-taxi.html">Uttrakhand Taxi</a></p>
            </li>
            <li class="">
               <p class="nav-item mb-3 d-inline-block position-relative"><a class="nav-link p-0 pb-2 text-white text-decoration-none font-16 fw-600" href="about-us.html">About</a></p>
            </li>
            <li class="">
               <p class="nav-item mb-3 d-inline-block position-relative"><a class="nav-link p-0 pb-2 text-white text-decoration-none font-16 fw-600" href="contact.html">Contact</a></p>
            </li>
         </ul>
      </div>
   </div>
</div>
`;
// Inject the navHTML and sidebar into the DOM
document
.querySelector(".nav-component")
.insertAdjacentHTML("beforeend", navHTML);
document.querySelector("body").insertAdjacentHTML("beforeend", sidebar);
// Event Delegation to handle dynamically injected sidebar toggle
$(document).on("click", "#sidebar-toggle", function () {
$("#sidebar").addClass("active"); // Add the 'active' class to the sidebar
});
$(document).on("click", "#sidebar-close", function () {
$("#sidebar").removeClass("active"); // Remove the 'active' class to close the sidebar
});
//Active action on menu
const currentPage = window.location.pathname;
// Add active class based on the page
document.querySelectorAll(".nav-item").forEach((item) => {
const link = item.querySelector(".nav-link");
if (
link.getAttribute("href") === "index.html" &&
currentPage.includes("index.html")
) {
item.classList.add("active"); // Add active class to the nav-item
} else if (
link.getAttribute("href") === "uttrakhand-taxi.html" &&
currentPage.includes("uttrakhand-taxi.html")
) {
item.classList.add("active"); // Add active class to the nav-item
} else if (
link.getAttribute("href") === "contact.html" &&
currentPage.includes("contact.html")
) {
item.classList.add("active"); // Add active class to the nav-item
} else if (
link.getAttribute("href") === "destination.html" &&
currentPage.includes("destination.html")
) {
item.classList.add("active"); // Add active class to the nav-item
} else if (
link.getAttribute("href") === "tour-package.html" &&
currentPage.includes("tour-package.html")
) {
item.classList.add("active"); // Add active class to the nav-item
} else if (
link.getAttribute("href") === "char-dham-yatra.html" &&
currentPage.includes("char-dham-yatra.html")
) {
item.classList.add("active"); // Add active class to the nav-item
} else if (
link.getAttribute("href") === "about-us.html" &&
currentPage.includes("about-us.html")
) {
item.classList.add("active"); // Add active class to the nav-item
}
});
//Footer Section
const footerHTML = `
<div>
   <div class="bg-secondary px-3 pt-1"></div>
   <div class="container-xl text-primary py-4 py-lg-5">
      <div class="row">
         <div class="col-6 col-sm-6 col-md-4 col-lg-3" data-aos="fade-up">
            <p class="text-secondary font-20 fw-600 mb-md-4 mb-2">Quick Links</p>
            <p class="mb-1 font-14"><a href="index.html" class="text-decoration-none text-white">Home</a></p>
            <p class="mb-1 font-14"><a href="about-us.html" class="text-decoration-none text-white">About Us</a></p>
            <p class="mb-1 font-14"><a href="tour-package.html" class="text-decoration-none text-white">Tour Packages</a></p>
            <p class="mb-1 font-14"><a href="destination.html" class="text-decoration-none text-white">Destination</a></p>
            <p class="mb-1 font-14"><a href="#" class="text-decoration-none text-white d-none">Hotel Booking</a></p>
            <p class="mb-1 font-14"><a href="char-dham-yatra.html" class="text-decoration-none text-white">Char Dham Yatra</a></p>
            <p class="mb-1 font-14"><a href="#" class="text-decoration-none text-white">Uttrakhand Taxi</a></p>
            <p class="mb-1 font-14"><a href="contact.html" class="text-decoration-none text-white">Contact Us</a></p>
            <p class="mb-0 font-14"><a href="terms-conditions.html" class="text-decoration-none text-white">Terms & Conditions</a></p>
            <p class="mb-1 font-14 d-none"><a href="privacy-policy.html" class="text-decoration-none text-white">Privacy Policy</a></p>
         </div>
         <div class="col-6 col-sm-6 col-md-3 col-lg-3" data-aos="fade-up">
            <p class="text-secondary font-20 fw-600 mb-md-4 mb-2">Packages</p>
            <p class="mb-1 font-14">
                        <a href="tour-package.html" class="text-decoration-none text-white">Chardham Yatra Pakages
                </a>
            </p>
            <p class="mb-1 font-14">
                <a href="tour-package.html" class="text-decoration-none text-white">
                    Valley Of Flower
               </a>
            </p>
            <p class="mb-1 font-14">
                <a href="tour-package.html" class="text-decoration-none text-white">
                    Kumaon  Tour
               </a>
            </p>
            <p class="mb-1 font-14">
                <a href="tour-package.html" class="text-decoration-none text-white">
                    Honeymoon Packages
               </a>
            </p>
            <p class="mb-1 font-14">
                <a href="tour-package.html" class="text-decoration-none text-white">
                    Hill Stations
               </a>
            </p>
            <p class="mb-1 font-14">
                <a href="tour-package.html" class="text-decoration-none text-white">
                    Mussoorie Packages
               </a>
            </p>
            <p class="mb-1 font-14">
                <a href="tour-package.html" class="text-decoration-none text-white">
                    Nainital Packages 
               </a>
            </p>
            <p class="mb-sm-1 mb-4 font-14">
                <a href="tour-package.html" class="text-decoration-none text-white">
                    Auli / Chopta Packages
               </a>
            </p>
         </div>
         <div class="col-12 col-sm-12 col-md-5 col-lg-6 mt-4 mt-md-0">
            <div class="footer-card" data-aos="fade-up">
               <p class="font-20 text-secondary mb-3">HillTop Rides - Easy & Convenient Transportation</p>
               <p class="font-14 text-white mb-2"><b class="text-secondary">Address:- </b> Teachers colony kuanwala, Dehra Dun, India, Uttarakhand</p>
               <p class="font-14 text-white mb-2"><b class="text-secondary">Availability:- </b> 24/7</p>
               <p class="font-14 text-white mb-2"><b class="text-secondary">Call Us:- </b> 081267 64684</p>
               <p class="font-14 mb-3"><b class="text-secondary">Mail Us:- </b> <a href="mailto:hilltoprides@gmail.com" class="text-decoration-none text-white"> hilltoprides@gmail.com</a></p>
               <div class="d-flex w-100 mb-2">
                  <a target="_blank" href="https://www.facebook.com/profile.php?id=61566027965744" class="me-3">
                  <i class="fab fa-facebook text-secondary font-28"></i>
                  </a>
                  <a target="_blank" href="https://www.instagram.com/hilltoprides/" class="me-3">
                  <i class="fab fa-instagram text-secondary font-28"></i>
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/in/hilltop-rides-94479a32a/" class="me-3">
                  <i class="fab fa-linkedin text-secondary font-28"></i>
                  </a>
                  <a target="_blank" href="https://www.youtube.com/@hilltoprides" class="me-3">
                  <i class="fab fa-youtube text-secondary font-28"></i>
                  </a>
                  <a target="_blank" href="https://x.com/hilltoprides" class="fb">
                  <img src="./assets/images/x.svg" alt="x icon" height="24px"/>
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="container-fluid bg-secondary text-primary fw-500 px-3 py-2">
      <p class="my-0 text-center font-14">&copy; 2024 HillTop Rides. All Rights Reserved.</p>
   </div>
</div>
<div class="modal fade" id="EnquiryModal" tabindex="-1" aria-labelledby="EnquiryModalLabel" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
         <div class="modal-header">
            <h5 class="modal-title" id="EnquiryModalLabel">Enquire Us</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
            <form id="contactForm">
               <div class="row">
                  <div class="col-12">
                     <div class="form-group mb-2">
                        <label for="name" class="form-label mb-1 fw-600">
                           Name
                           <star class="text-danger fw-bold">*</star>
                        </label>
                        <input
                           type="text"
                           class="form-control"
                           id="name"
                           placeholder="Enter Name"
                           >
                     </div>
                  </div>
                  <div class="col-12">
                     <div class="form-group mb-2">
                        <label for="email" class="form-label mb-1 fw-600">
                           Email
                           <star class="text-danger fw-bold">*</star>
                        </label>
                        <input
                           type="text"
                           class="form-control"
                           id="email"
                           placeholder="Enter Email"
                           >
                     </div>
                  </div>
                  <div class="col-12">
                     <div class="form-group mb-2">
                        <label for="mob_no" class="form-label mb-1 fw-600">
                           Number
                           <star class="text-danger fw-bold">*</star>
                        </label>
                        <input
                           type="text"
                           class="form-control"
                           id="mob_no"
                           placeholder="Enter Number"
                           >
                     </div>
                  </div>
                  <div class="col-md-12 col-12">
                     <div class="form-group mb-lg-4 mb-3">
                        <label for="details" class="form-label mb-1 fw-600">
                           Details
                           <star class="text-danger fw-bold">*</star>
                        </label>
                        <textarea
                           class="form-control"
                           rows="3"
                           id="details"
                           placeholder="Enter Details"
                           ></textarea>
                     </div>
                  </div>
               </div>
               <div class="row align-items-center">
                  <div class="col-auto">
                     <button class="btn btn-primary" type="submit" data-bs-dismiss="modal">Submit</button>
                  </div>
                  <div class="col text-end">
                     <a href="" class="text-decoration-none fw-600 text-14" id="clear_form">Clear Form</a>
                  </div>
               </div>
            </form>
         </div>
      </div>
   </div>
</div>
`;
{
/* 
<nav>
   <ul class="nav">
      <li class="nav-item"><a class="nav-link text-primary fw-500 py-2 font-12" href="#">Privacy Policy</a></li>
      <li class="nav-item"><a class="nav-link text-primary fw-500 py-2 font-12" href="#">Terms & Condition</a></li>
   </ul>
</nav>
*/
}
document
.querySelector(".footer-component")
.insertAdjacentHTML("beforeend", footerHTML);