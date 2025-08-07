AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
  title: "About AmiPYQ",
  cardImage: "assets/images/experience-page/amipyq.png",
  place: "ESTD: August 2025",
  time: "",
  desp: `
 
    <p><strong>Purpose:</strong> AmiPYQ is a student-led platform built to centralize and simplify access to previous year question papers (PYQs) for Amitians. It provides an organized and easy-to-use space where students can find question papers from the last 10 years, enhancing exam preparation and academic confidence.</p>
    <br>
    <p><strong>Ideation:</strong> The idea for AmiPYQ emerged from the common student struggle of searching for reliable PYQs across scattered sources. This platform was developed to solve that problem by offering a single, dependable destination for all PYQ needs.</p>
<br>
    <p><strong>Development:</strong> AmiPYQ was built with a focus on accessibility, simplicity, and student-centric design. From interface to functionality, every element is crafted to support hassle-free navigation and fast access to academic resources.</p>
<br>
    <p><strong>Mission:</strong> AmiPYQ aims to promote academic support and collaboration within the student community. With a completely free and open-access model.</p>

    `
},
{
  title: "Privacy Policy",
  cardImage: "assets/images/experience-page/amipyq.png",
  place: "Last Update: 1 August 2025",

  time: "",
  desp: `
    <p><strong>Overview:</strong> AmiPYQ is committed to protecting the privacy of its users. We collect minimal personal information and ensure it's handled responsibly and securely.</p>

    <p><strong>Purpose:</strong> We collect data like name or email only when you submit a question paper or get in touch. This helps us maintain platform quality, verify contributions, and communicate with contributors.</p>

    <p><strong>Data Protection:</strong> We apply simple, effective security measures. No sensitive or financial data is collected, requested, or stored at any stage.</p>

    <p><strong>Transparency:</strong> All information shared with us is handled openly. Any changes to our privacy policy will be reflected on this page along with the update date.</p>

    <p><strong>Children’s Privacy:</strong> AmiPYQ is intended for university students. We do not knowingly collect any data from children under 13 years of age, in compliance with the Children’s Online Privacy Protection Act (COPPA).</p>

    <p><strong>Third-Party Disclosure:</strong> We do not sell or share your data with third parties, except for trusted hosting or infrastructure services that are bound by confidentiality.</p>

    <p><strong>Contact Us:</strong> For privacy-related queries, suggestions, or removal requests, feel free to email us at <a href="mailto:amipqy@gmail.com">amipqy@gmail.com</a>.</p>
  `
}



];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img alt="img" src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h1 style="font-size: ${window.innerWidth <= 480 ? '20px' : window.innerWidth <= 768 ? '24px' : '28px'}; color: #78a329ff; text-align: center; font-weight: 700; margin: 10px 0;">
  ${title}
</h1>

            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <div class="desp">
              ${desp}
            </div>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img alt="img" src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/*references Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/referencess-page
// Changed names and descriptions of referencess
const referencesTable = document.querySelector(".pain");

const referencess = [
  {
    sl1: 1,
    name1 : "Jiya Jahnavi (Founder) ",
        designation1 : "Btech CSE'27, AUGN ",
        image1 : "assets/images/references-page/myprofile.jpg",
        message1 : "Jiya Jahnavi has been a core contributor to AmiPYQ, playing a vital role from ideation to launch. She not only helped shape the platform’s structure but also contributed extensively to its PYQ collection. Her dedication and initiative were key in turning AmiPYQ into a valuable academic resource for Amitians. ",
        

         sl2: 2,
    name2 : "Abhishek Kumar Singh",
        designation2 : "Btech CSE'28, AUGN ",
        image2 : "assets/images/references-page/abhisheek.jpg",
        message2 : "Abhishek Kumar Singh has been a key part of the AmiPYQ journey. From organizing PYQs year-wise and course-wise to ensuring everything was neatly arranged, his dedication and consistent support made the process smooth and efficient. Grateful to have him on the team! ",
        
    },
     {
   
        sl1:1,
        name1 : "Shivam ",
        designation1 : "", 
        image1: "assets/images/references-page/shivam.jpg",
        message1 : "Shivam has been a core contributor throughout the entire launch process, consistently handling complex tasks with expertise and dedication. His problem-solving skills and commitment played a key role in the successful execution of all challenging aspects. A reliable and invaluable team member.",
        

        sl2:2,
        name2 : "Rakshit Panwar",
        designation2 : "Btech CSE'27, AUGN", 
        image2: "assets/images/references-page/rakshit.jpeg",
        message2 : "Rakshit Panwar has been a valuable contributor to AmiPYQ, helping enrich the platform with a significant number of previous year question papers. His help made it easier to bring useful content to students. Grateful for the support!.",
        
        
    },

];


AOS.init();
const fillData = () => {
  let output = "";

  referencess.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      absbox_for_linkedin1,
      sl2,
      image2,
      name2,
      designation2,
      message2,
      absbox_for_linkedin2,
    }) =>
      (output += `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img alt="img" src="${image1}" class="rImg"></td>
                <td class = "referencesTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img alt="img" src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img alt="img" src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referencesY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referencesTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img alt="img" src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img alt="img" src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referencesY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img alt="img" src="${image2}" class="rImg1"></td>
                    </tr>`)
  );
  referencesTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
    {
    title: "Aniket Verma",
    subtitle: "Amity University Greater Noida",
    image: "assets/images/experience-page/aniketv.jpg",
    desp: "AmiPYQ was a total game-changer in my prep, Having all PYQs and lectures sorted in one place saved me from hours of searching. Highly recommend it !",
    href: "",
  },
   {
    title: "Vedant Singh Rawat",
    subtitle: "Amity University Greater Noida",
    image: "assets/images/experience-page/vedant.jpg",
    desp: "AmiPYQ is my go-to during exams. I found all the PYQs and lectures in one place—no chaos, no last-minute panic. Totally recommend it!",
    href: "",
  },
   {
    title: "Ayrish Jain",
    subtitle: "Amity University Greater Noida",
    image: "assets/images/experience-page/ayrish.jpg",
    desp: "I tell all my juniors to use AmiPYQ. It’s the easiest way to prepare smartly and not waste time searching around.",
    href: "",
  },
  
  {
    title: "Priyanshu",
    subtitle: "Amity University Greater Noida",
    image: "assets/images/experience-page/priyanshu.jpg",
    desp: "AmiPYQ literally saved me during exam week! I found question papers for every subject I was looking for in one place",
    href: "",
  },
  {
    title: "Aniket Kumar",
    subtitle: "IIIT Ranchi",
    image: "assets/images/experience-page/aniket.jpg",
    desp: "The collection is impressive — it’s not just one or two years, but a full 10–12 years of papers with video lectures of each course & subjects. Great for serious practice!",
    href: "",
  },

  
   {
    title: "Aastha Muskan",
    subtitle: "Lovely Professional University",
    image: "assets/images/experience-page/aastha.jpeg",
    desp: "I’m not from Amity, but stumbled upon AmiPYQ while exploring exam prep resources. The concept is brilliant — a central place for all PYQs and video lectures of all courses. Honestly, every university should have something like this",
    href: "",
  },
    {
    title: "Dania ",
    subtitle: "Amity University Greater Noida",
    image: "assets/images/references-page/dania.jpg",
    desp: "Thanks to AmiPYQ, I could finally find old question papers without asking in class groups. It’s so convenient and stress-free",
    href: "",
  },
   {
    title: "Md Kaif",
    subtitle: "Amity University Greater Noida",
    image: "assets/images/experience-page/kaif.jpeg",
    desp: "I always struggled to find past year papers before exams. AmiPYQ made it super easy—no logins, totally free, just fast access to exactly what I need.",
    href: "",
  },
  {
    title: "Aditya Pathak",
    subtitle: "Amity University Greater Noida",
    image: "assets/images/experience-page/adpathak.jpg",
    desp: "I used to stress about where to find legit PYQs. AmiPYQ solved that problem completely. It’s my go-to before every exam now.",
    href: "https://www.linkedin.com/company/pitchteen/about/",
  },
  {
    title: "Sakshi",
    subtitle: "Amity University Online",
    image: "assets/images/experience-page/sakshi.jpg",
    desp: "Being an Amity Online student, I sometimes feel disconnected, but AmiPYQ really helped bridge that gap. I got access to all the relevant past papers, faculty lectures just like regular campus students. Super helpful during exams!",
    href: "",
  },
 
  
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img alt="img" src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
