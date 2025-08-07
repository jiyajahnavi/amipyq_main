// Reference Details Table
// ... (unchanged comments)

const themeToggle = document.getElementById('theme-toggle');

// Function to update the theme toggle icon based on current theme
function setThemeIcon() {
  if (!themeToggle) return;
  // If dark mode active, show sun, else moon
  themeToggle.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';
}

// Load theme preference or default to light
if (
  localStorage.getItem('theme') === 'dark' ||
  (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.body.classList.add('dark');
} else {
  document.body.classList.remove('dark');
}

setThemeIcon();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    setThemeIcon();
  });
}

// Drag-and-drop file upload logic
const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('file-upload');
const fileInfo = document.getElementById('file-info');
const dropText = document.getElementById('drop-text');

['dragenter', 'dragover'].forEach(event => {
  dropArea.addEventListener(event, (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropArea.parentNode.classList.add('drag-active');
  });
});

['dragleave', 'dragend', 'drop'].forEach(event => {
  dropArea.addEventListener(event, (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropArea.parentNode.classList.remove('drag-active');
  });
});

dropArea.addEventListener('drop', (e) => {
  const files = e.dataTransfer.files;
  if (files && files[0]) {
    fileInfo.textContent = `Selected: ${files[0].name}`;
    // TODO: Implement your upload logic here if needed
  }
  fileInput.files = files;
});

dropArea.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    fileInfo.textContent = `Selected: ${file.name}`;
    // TODO: Implement your upload logic here if needed
  }
});

const referenceTable = document.querySelector(".pain");

// Assuming "references" array exists globally or is imported
// Initialize AOS animations
AOS.init();

const fillData = () => {
  let output = "";

  references.forEach(
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
                <td class="imgCol"><img src="${image1}" class="rImg" alt="${name1}"></td>
                <td class="referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes" alt="${name1}">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png" alt="quote icon"/>
                    <a href="#0" class="paperTitle">${name1}</a> 
                    <div>${designation1}</div> 
                    <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                <td class="referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image2}" class="imgRes" alt="${name2}">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png" alt="quote icon"/>
                    <a href="#0" class="paperTitle">${name2}</a> 
                    <div>${designation2}</div> 
                    <div class="rConferences">
                        <div class="referenceY">${message2}</div>
                    </div>
                </td>
                <td class="imgCol"><img src="${image2}" class="rImg1" alt="${name2}"></td>
            </tr>`)
  );

  referenceTable.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", fillData);
