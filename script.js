var form = document.querySelector("form");
var button = document.querySelector("button");

today = new Date();

function calcDate(date1, date2) {
  var diff = Math.floor(date1.getTime() - date2.getTime());
  var day = 1000 * 60 * 60 * 24;

  var days = Math.floor(diff / day);
  var months = Math.floor(days / 31);
  var years = Math.floor(months / 12);

  return [days, months, years];
}

function validateDay(validateDay) {
  var dayRGEX = /^(3[01]|[12][0-9]|[1-9])$/;
  var dayResult = dayRGEX.test(validateDay);

  return dayResult;
}
function validateMonth(validateMonth) {
  var monthRGEX = /^[1-9]$|^1[0-2]$/;
  var monthResult = monthRGEX.test(validateMonth);

  return monthResult;
}
function validateYear(validateYear) {
  var yearRGEX = /^([1-9]|[1-9][0-9]{1,2}|1[0-9]{3}|20[01][0-9]|202[0-3])$/;
  var yearResult = yearRGEX.test(validateYear);

  return yearResult;
}

button.onclick = (e) => {
  e.preventDefault();
  var inputDay = document.getElementById("day");
  var inputMonth = document.getElementById("month");
  var inputYear = document.getElementById("year");
  var errorDay = document.querySelector(".error-day");
  var errorMonth = document.querySelector(".error-month");
  var labelDay = document.querySelector(".label-day");
  var errorMonth = document.querySelector(".error-month");
  var labelMonth = document.querySelector(".label-month");
  var errorYear = document.querySelector(".error-year");
  var labelYear = document.querySelector(".label-year");
  var stateDay = false;
  var stateMonth = false;
  var stateYear = false;

  if (validateDay(inputDay.value) == false || inputDay.value == "") {
    labelDay.style.color = "#ff5757";
    inputDay.style.border = "1px solid #ff5757";
    inputDay.style.color = "#141414";
    errorDay.style.display = "block";
    stateDay = false;
  } else {
    labelDay.style.color = "#716f6f";
    inputDay.style.border = "1px solid #dbdbdb";
    errorDay.style.display = "none";
    stateDay = true;
  }
  if (validateMonth(inputMonth.value) == false || inputMonth.value == "") {
    labelMonth.style.color = "#ff5757";
    inputMonth.style.border = "1px solid #ff5757";
    inputMonth.style.color = "#141414";
    errorMonth.style.display = "block";
    stateMonth = false;
  } else {
    labelMonth.style.color = "#716f6f";
    inputMonth.style.border = "1px solid #dbdbdb";
    errorMonth.style.display = "none";
    stateMonth = true;
  }
  if (inputMonth.value == 4 || inputMonth.value == 6 || inputMonth.value == 9) {
    if (inputDay.value > 30) {
      labelDay.style.color = "#ff5757";
      inputDay.style.border = "1px solid #ff5757";
      inputDay.style.color = "#141414";
      errorDay.style.display = "block";
      stateDay = false;
    } else {
      labelDay.style.color = "#716f6f";
      inputDay.style.border = "1px solid #dbdbdb";
      errorDay.style.display = "none";
      stateDay = true;
    }
  }
  if (inputMonth.value == 2) {
    if (inputDay.value > 28) {
      labelDay.style.color = "#ff5757";
      inputDay.style.border = "1px solid #ff5757";
      inputDay.style.color = "#141414";
      errorDay.style.display = "block";
      stateDay = false;
    } else {
      labelYear.style.color = "#716f6f";
      inputYear.style.border = "1px solid #dbdbdb";
      errorYear.style.display = "none";
      stateDay = true;
    }
  }
  if (validateYear(inputYear.value) == false || inputYear.value == "") {
    labelYear.style.color = "#ff5757";
    inputYear.style.border = "1px solid #ff5757";
    inputYear.style.color = "#141414";
    errorYear.style.display = "block";
    stateYear = false;
  } else {
    stateYear = true;
  }

  if (stateDay == true && stateMonth == true && stateYear == true) {
    function animate(obj, initVal, lastVal, duration) {
      let startTime = null;
      let currentTime = Date.now();
      const step = (currentTime) => {
        if (!startTime) {
          startTime = currentTime;
        }

        const progress = Math.min((currentTime - startTime) / duration, 1);
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
      };
      window.requestAnimationFrame(step);
    }

    inputDay.style.color = "#141414";
    inputMonth.style.color = "#141414";
    inputYear.style.color = "#141414";
    var inputDate = new Date(
      inputYear.value,
      inputMonth.value - 1,
      inputDay.value
    );
    var b = calcDate(today, inputDate);

    let text3 = document.getElementById("result-year");
    animate(text3, 0, b[2], 500);
    setTimeout(() => {
      let text2 = document.getElementById("result-month");
      animate(text2, 0, b[1], 500);
    }, 500);
    setTimeout(() => {
      let text1 = document.getElementById("result-day");
      animate(text1, 0, b[0], 500);
    }, 1000);
  }
};
