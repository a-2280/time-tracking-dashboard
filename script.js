const allLists = document.querySelectorAll("li");
const workCurrent = document.getElementById("work-current");
const workPrevious = document.getElementById("work-previous");
const playCurrent = document.getElementById("play-current");
const playPrevious = document.getElementById("play-previous");
const studyCurrent = document.getElementById("study-current");
const studyPrevious = document.getElementById("study-previous");
const exerciseCurrent = document.getElementById("exercise-current");
const exercisePrevious = document.getElementById("exercise-previous");
const socialCurrent = document.getElementById("social-current");
const socialPrevious = document.getElementById("social-previous");
const selfCareCurrent = document.getElementById("self-care-current");
const selfCarePrevious = document.getElementById("self-care-previous");

fetchData();

allLists.forEach((list) => {
  list.addEventListener("click", (e) => {
    const target = e.target.closest("li");
    setActive(target);
  });
});

function setActive(clickedList) {
  allLists.forEach((list) => {
    list.classList.remove("active");
  });

  clickedList.classList.add("active");
}

async function fetchData() {
  try {
    const response = await fetch("/data.json");
    if (!response.ok) {
      throw new Error("Could not fetch resource...");
    }
    const data = await response.json();

    const workData = data.find((item) => item.title === "Work");
    const playData = data.find((item) => item.title === "Play");
    const studyData = data.find((item) => item.title === "Study");
    const exerciseData = data.find((item) => item.title === "Exercise");
    const socialData = data.find((item) => item.title === "Social");
    const selfCareData = data.find((item) => item.title === "Self Care");

    const workDaily = workData.timeframes.daily;
    const workWeekly = workData.timeframes.weekly;
    const workMonthly = workData.timeframes.monthly;

    const playDaily = playData.timeframes.daily;
    const playWeekly = playData.timeframes.weekly;
    const playMonthly = playData.timeframes.monthly;

    const studyDaily = studyData.timeframes.daily;
    const studyWeekly = studyData.timeframes.weekly;
    const studyMonthly = studyData.timeframes.monthly;

    const exerciseDaily = exerciseData.timeframes.daily;
    const exerciseWeekly = exerciseData.timeframes.weekly;
    const exerciseMonthly = exerciseData.timeframes.monthly;

    const socialDaily = socialData.timeframes.daily;
    const socialWeekly = socialData.timeframes.weekly;
    const socialMonthly = socialData.timeframes.monthly;

    const selfCareDaily = selfCareData.timeframes.daily;
    const selfCareWeekly = selfCareData.timeframes.weekly;
    const selfCareMonthly = selfCareData.timeframes.monthly;

    const activeListItem = document.querySelector(".active a").innerText;

    if (activeListItem === "Daily") {
      workCurrent.innerText = `${workDaily.current}hrs`;
      workPrevious.innerText = `Last Week - ${workDaily.previous}hrs`;
      playCurrent.innerText = `${playDaily.current}hrs`;
      playPrevious.innerText = `Last Week - ${playDaily.previous}hrs`;
      studyCurrent.innerText = `${studyDaily.current}hrs`;
      studyPrevious.innerText = `Last Week - ${studyDaily.previous}hrs`;
      exerciseCurrent.innerText = `${exerciseDaily.current}hrs`;
      exercisePrevious.innerText = `Last Week - ${exerciseDaily.previous}hrs`;
      socialCurrent.innerText = `${socialDaily.current}hrs`;
      socialPrevious.innerText = `Last Week - ${socialDaily.previous}hrs`;
      selfCareCurrent.innerText = `${selfCareDaily.current}hrs`;
      selfCarePrevious.innerText = `Last Week - ${selfCareDaily.previous}hrs`;
    }

    if (activeListItem === "Weekly") {
      workCurrent.innerText = `${workWeekly.current}hrs`;
      workPrevious.innerText = `Last Week - ${workWeekly.previous}hrs`;
      playCurrent.innerText = `${playWeekly.current}hrs`;
      playPrevious.innerText = `Last Week - ${playWeekly.previous}hrs`;
      studyCurrent.innerText = `${studyWeekly.current}hrs`;
      studyPrevious.innerText = `Last Week - ${studyWeekly.previous}hrs`;
      exerciseCurrent.innerText = `${exerciseWeekly.current}hrs`;
      exercisePrevious.innerText = `Last Week - ${exerciseWeekly.previous}hrs`;
      socialCurrent.innerText = `${socialWeekly.current}hrs`;
      socialPrevious.innerText = `Last Week - ${socialWeekly.previous}hrs`;
      selfCareCurrent.innerText = `${selfCareWeekly.current}hrs`;
      selfCarePrevious.innerText = `Last Week - ${selfCareWeekly.previous}hrs`;
    }

    if (activeListItem === "Monthly") {
      workCurrent.innerText = `${workMonthly.current}hrs`;
      workPrevious.innerText = `Last Week - ${workMonthly.previous}hrs`;
      playCurrent.innerText = `${playMonthly.current}hrs`;
      playPrevious.innerText = `Last Week - ${playMonthly.previous}hrs`;
      studyCurrent.innerText = `${studyMonthly.current}hrs`;
      studyPrevious.innerText = `Last Week - ${studyMonthly.previous}hrs`;
      exerciseCurrent.innerText = `${exerciseMonthly.current}hrs`;
      exercisePrevious.innerText = `Last Week - ${exerciseMonthly.previous}hrs`;
      socialCurrent.innerText = `${socialMonthly.current}hrs`;
      socialPrevious.innerText = `Last Week - ${socialMonthly.previous}hrs`;
      selfCareCurrent.innerText = `${selfCareMonthly.current}hrs`;
      selfCarePrevious.innerText = `Last Week - ${selfCareMonthly.previous}hrs`;
    }
    fetchData();
  } catch (error) {
    console.error(error);
  }
}
