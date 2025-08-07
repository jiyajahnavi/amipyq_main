/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "No More 'Bhaiya PYQ Hai Kya?' – We Got You!",
    authors:
      "Every Amity student knows the last-minute panic before exams. Messages go out to friends, classmates, and even seniors: Bhaiya, PYQ hai kya?",
    conferences:
      "AMIPYQ is a platform made by Amity students, for Amity students, created to solve one simple but widespread problem: PYQs should be accessible to everyone — without the last-minute panic.We’ve collected over 3,000+ PYQs from the past 12 years, across all major courses like B.Tech, BBA, Diploma , MCA , BDes ,BCA , BCom, MBA, and more. Whether it’s a midterm, end-term, or even a surprise quiz you’re prepping for, AMIPYQ helps you study smart, not hard..",
    researchYr: "01-08-2025",
    citebox: "popup1",
    image: "assets/images/research-page/b1.jpeg",
    citation: {
      vancouver:
        "AMIPYQ gives Amity students quick access to 3,000+ PYQs from the last 12 years, across all major courses. No logins, no clutter — just fast, organized, and reliable exam prep. Built by students, for students.",
    },
    abstract:
      "No logins. No broken links. No group chat chaos. Just fast, organized access to the papers you actually need — all in one place. With AMIPYQ, you save time, reduce exam stress, and prepare with confidence. It’s the kind of tool every student wishes existed — now it does.",
    absbox: "absPopup1",
  },
  {
    title: "How to Score 9+ GPA in College – What Amity Toppers Actually Do",
    authors: "Scoring a 9+ GPA in college isn’t just about studying harder — it’s about studying smarter.",
    conferences:
      "Amity and similar universities, toppers often follow a simple but focused strategy: they track the syllabus closely, attend key classes, revise regularly, and most importantly, solve previous year question papers (PYQs). Why? Because exams tend to follow patterns. PYQs help you understand which topics matter most, how questions are framed, and what areas to prioritize. That’s where AMIPYQ comes in — a student-made platform that gives you access to over 3,000 PYQs across 12 years, completely free.",
    researchYr: "18-07-2025",
    citebox: "popup5",
    image: "assets/images/research-page/b5.png",
    citation: {
      vancouver:
        "To score a 9+ GPA, combine smart study habits with tools like AMIPYQ — giving you fast, free access to real past papers that help you prepare effectively.",
    },
    abstract:
      "Toppers don’t waste time collecting PDFs or relying on last-minute notes. They use PYQs to plan revision, practice writing answers, and reduce surprises during exams. With AMIPYQ, you can instantly find past papers for courses like B.Tech, BBA, MBA, BCA, and more — without any login or spam. Combine this with consistent revision and smart time management, and a 9+ GPA becomes totally achievable.",
    absbox: "absPopup5",
  },

   {
    title:
      "How to Study in One Night with Only PYQs",
    authors: "Got an exam tomorrow and zero prep? You’re not the only one.",
    conferences:
      "Studying in one night is tough, but possible — especially if you use PYQs the right way. When time is limited, you don’t need the whole textbook. What you need is focus. Start by downloading the previous year question papers from AMIPYQ. Skim through 3–4 papers and note down frequently repeated questions or topics. Focus only on those. Read answers, understand the concepts behind them, and don’t waste time trying to memorize everything. Solve at least one paper on your own to test how much you actually retained.",
    researchYr: "13-07-2025",
    citebox: "popup7",
    image: "assets/images/research-page/b7.jpeg",
    citation: {
      vancouver:
        " In one night, PYQs help you focus on what’s important. AMIPYQ makes it possible to prep fast and smart — even at the last minute.",
    },
    abstract:
      "PYQs help you predict what’s likely to be asked. One night isn’t enough to learn everything, but it’s enough to prepare for what matters. AMIPYQ gives you direct access to 3,000+ PYQs across courses like B.Tech, BBA, BCA, MBA, and more — all without any login. It’s quick, easy, and made for moments like this.",
    absbox: "absPopup7",
  },

 

  {
    title: " Top 3 Mistakes Students Make with PYQs (and How to Avoid Them)",
    authors: "PYQs are one of the most powerful tools for exam prep — but many students don’t use them the right way. Here are the top 3 mistakes students often make with previous year question papers. ",
    conferences:
      "1: Using PYQs too late — Waiting until the night before the exam to open PYQs won’t help much. Start using them at least a week in advance so you can spot important patterns. Mistake 2: Memorizing answers blindly — PYQs help you understand question trends, not just memorize past answers. Always focus on understanding the concept behind the question. Mistake 3: Not practicing under exam conditions — Reading questions is not the same as solving them. Simulate real exam settings to improve your speed and recall. AMIPYQ helps you fix all three — it gives you fast, organized access to 3,000+ real question papers, so you can start early, practice well, and avoid last-minute panic.",
    researchYr: "06-07-2025",
    citebox: "popup6",
    image: "assets/images/research-page/b6.jpeg",
    citation: {
      vancouver:
        "Most students misuse PYQs — either too late or without real practice. AMIPYQ helps you avoid those mistakes and study smarter, not harder.",
    },
    abstract:
      "The smartest students treat PYQs as a guide, not a shortcut. With AMIPYQ, you can browse by course, subject, and exam type — so you're not wasting time. Whether it’s B.Tech, BBA, MBA, BCA, or any other major Amity course, you’ll find 12 years’ worth of real exam material, all in one place, with zero distractions.",
    absbox: "absPopup6",
  },
 {
    title: "Best Site for College Question Papers – Here's What Students Are Using",
    authors:
      "When exams are near, one of the most common Google searches by students is: “Best site for college question papers” And honestly, it’s a fair question. Most students end up digging through old WhatsApp forwards, Telegram groups, or asking around for papers — only to get outdated or irrelevant files.",
    conferences:
      "So what’s the solution?If you’re a student at Amity University, the answer is AMIPYQ — a platform created by students, specifically to solve this exact problem. With over 3,000 previous year question papers from the past 12 years, AMIPYQ is designed to make exam prep smarter, faster, and less stressful. It covers courses like B.Tech, BBA, MBA, BCA, BCom, BA(JMC), Diploma, MCA, B.Des, and more.",
    researchYr: "02-07-2025",
    citebox: "popup2",
    image: "assets/images/research-page/b2.jpeg",
    citation: {
      vancouver:
        "For Amity students, AMIPYQ is the best free site for college PYQs — fast access, no logins, and 3,000+ papers across 12 years.",
    },
    abstract:
      "AMIPYQ stands out because it’s built by students who know the real struggle. It’s clean, fast, and doesn’t ask for logins or payments. Just select your course, find your subject, and access real past papers instantly. Whether it’s a midterm, end-term, or backlog exam, AMIPYQ helps you focus on what matters — real exam questions that have already appeared.",
    absbox: "absPopup2",
  },



  {
    title:
      "How Toppers Use PYQs Differently Than Everyone Else",
    authors:
      "Everyone uses PYQs — but not everyone uses them the right way. ",
    conferences:
      " While most students wait until the night before the exam to look at previous year papers, toppers treat PYQs like a strategy tool. They start early, analyze patterns, and figure out which units matter most based on what’s asked every year. That’s the real difference. AMIPYQ makes that kind of smart prep easy — with 3,000+ PYQs across B.Tech, BBA, MBA, BCA, and more. It’s not just about passing; it’s about preparing like the students who score 9+ SGPA consistently.",
    researchYr: "22-06-2025",
    citebox: "popup8",
    image: "assets/images/research-page/b8.jpeg",
    citation: {
      vancouver:
        " Toppers don’t just solve PYQs — they study the patterns. AMIPYQ helps you do the same, smarter and faster.",
    },
    abstract:
      "When you have instant access to years of real question papers, you stop guessing and start preparing with purpose. That’s how toppers stay ahead. AMIPYQ gives you that same edge — no logins, no distractions, just smart prep from day one.",
    absbox: "absPopup8",
  },
    {
    title:
      " Amity B.Tech Previous Year Papers Free – Here’s Where to Find Them",
    authors: "If you're a B.Tech student at Amity and you’re searching for previous year question papers for free, you're not alone. PYQs can make a big difference in your exam prep — but they’re often hard to find, incomplete, or spread across random sources. ",
    conferences:
      "That’s exactly why AMIPYQ exists. It’s a free, student-made platform that gives you access to over 3,000 previous year question papers, including a huge collection for B.Tech students, covering all semesters and core subjects. No sign-ups, no confusion — just organized, easy access to real past papers from the last 12 years.",
    researchYr: "15-06-2025",
    citebox: "popup3",
    image: "assets/images/research-page/b3.jpeg",
    citation: {
      vancouver:
        "AMIPYQ offers Amity B.Tech students instant, free access to real previous year papers — 12 years’ worth, organized by semester and subject..",
    },
    abstract:
      "For B.Tech students, time is everything. AMIPYQ is designed to cut through the clutter and give you direct access to exactly what matters. It helps you analyze question patterns, prioritize topics, and reduce exam stress — especially for end-terms. And because it’s built by students who’ve faced the same issues, everything is free, fast, and frustration-free.",
    absbox: "absPopup3",
  },
   {
    title:
      "Are PYQs Enough for Exams? Here's What Students Need to Know",
    authors:
      "Are PYQs enough for exams?” is one of the most searched questions by college students — and for good reason. ",
    conferences:
      " The short answer? PYQs (previous year question papers) can absolutely help you score better, but they work best when used as part of a smart study strategy. They give you a clear understanding of important topics, commonly repeated questions, and the format your professors prefer. That’s why platforms like AMIPYQ exist — to make accessing real PYQs easier for students, especially at Amity University, where paper patterns often follow trends.",
    researchYr: "11-06-2025",
    citebox: "popup4",
    image: "assets/images/research-page/b4.jpeg",
    citation: {
      vancouver:
        " PYQs alone aren’t enough to master your course, but with a tool like AMIPYQ, they become one of the most powerful study resources you can use before exams.",
    },
    abstract:
      "PYQs show what matters, but they don’t replace your textbooks or class notes. The best way to use them is after you’ve covered the syllabus — to revise smartly and test your readiness. At AMIPYQ, you can browse over 3,000 real question papers from the last 12 years across courses like B.Tech, BBA, MBA, BCA, and more. It’s a free, no-login tool designed to help students use PYQs the right way — as a final boost, not a shortcut.",
    absbox: "absPopup4",
  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img alt="img" src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img alt="img" src="${image}" class="imgRes">
                        </span>
                    </div>
                   <h2 class="paperTitle" style="font-size: 26px; color: #ffd000ff; font-weight: 700; margin: 10px 0;">
  <a href="#0" style="text-decoration: none; color: inherit;">${title}</a>
</h2>


                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            More
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            Overview
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
