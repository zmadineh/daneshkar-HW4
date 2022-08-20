const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");
const daySelect = document.getElementById("day");


function populateMonths(){
    for(let i = 1; i <= 12; i++){
        const option = document.createElement('option');
        option.textContent = i;
        monthSelect.appendChild(option);
    }
    monthSelect.value = 1;
};

function populateDays(){
    for(let i = 1; i <= 31; i++){
        const option = document.createElement('option');
        option.textContent =i;
        daySelect.appendChild(option);
    }
    daySelect.value = 1;
};

function populateYears(){
    let year = new Date().getFullYear();
    for(let i = 0; i < 101; i++){
        const option = document.createElement("option");
        option.textContent = year - i;
        yearSelect.appendChild(option);
    }
    yearSelect.value = year;
};

populateDays();
populateMonths();
populateYears();
