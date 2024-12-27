    const currentDate = new Date();
    let tasks = {};

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const monthYearElem = document.getElementById("month-year");
    const calendarStatusElem = document.getElementById("calendarstatus");
    const taskModal = document.getElementById("task-modal");
    const taskNameInput = document.getElementById("task-name");
    const clientNameInput = document.getElementById("client-name");
    const employeeNameInput = document.getElementById("employee-name");
    const taskTimeInput = document.getElementById("task-time");
    const taskStatusInput = document.getElementById("task-status");
    const saveTaskBtn = document.getElementById("save-task");
    const removeTaskBtn = document.getElementById("remove-task");

    const yearMonthPopup = document.getElementById("year-month-popup");
    const selectYearMonthBtn = document.getElementById("select-year-month");
    const closePopupBtn = document.querySelector(".close-btn");
    const yearSelect = document.getElementById("year-select");
    const monthSelect = document.getElementById("month-select");
    const applyMonthBtn = document.getElementById("apply-month");

    function renderCalendar() {
      const month = currentDate.getMonth();
      const year = currentDate.getFullYear();

      monthYearElem.textContent = `${monthNames[month]} ${year}`;
      calendarStatusElem.innerHTML = "";

      const firstDayOfMonth = new Date(year, month, 1).getDay();
      const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

      // Display the day names
      for (let i = 0; i < 7; i++) {
        let dayName = document.createElement("div");
        dayName.textContent = daysInWeek[i];
        dayName.style.fontWeight = "bold";
        calendarStatusElem.appendChild(dayName);
      }

      // Fill in empty spaces before the first day of the month
      for (let i = 0; i < firstDayOfMonth; i++) {
        let emptyDiv = document.createElement("div");
        calendarStatusElem.appendChild(emptyDiv);
      }

      // Fill in the calendar days
      for (let i = 1; i <= lastDateOfMonth; i++) {
        let day = document.createElement("div");
        day.textContent = i;

        const dateKey = `${year}-${month + 1}-${i}`;
        if (tasks[dateKey]) {
          day.classList.add("task");
        }

        day.addEventListener("click", () => openTaskModal(year, month, i));
        calendarStatusElem.appendChild(day);
      }
    }

    function openTaskModal(year, month, day) {
      const dateKey = `${year}-${month + 1}-${day}`;
      taskModal.style.display = "flex";
      taskNameInput.value = tasks[dateKey]?.taskName || "";
      clientNameInput.value = tasks[dateKey]?.clientName || "";
      employeeNameInput.value = tasks[dateKey]?.employeeName || "";
      taskTimeInput.value = tasks[dateKey]?.taskTime || "";
      taskStatusInput.value = tasks[dateKey]?.status || "pending";

      saveTaskBtn.onclick = () => saveTask(year, month, day);
      removeTaskBtn.onclick = () => removeTask(year, month, day);
    }

    function saveTask(year, month, day) {
      const dateKey = `${year}-${month + 1}-${day}`;
      tasks[dateKey] = {
        taskName: taskNameInput.value,
        clientName: clientNameInput.value,
        employeeName: employeeNameInput.value,
        taskTime: taskTimeInput.value,
        status: taskStatusInput.value,
      };
      taskModal.style.display = "none";
      renderCalendar();
    }

    function removeTask(year, month, day) {
      const dateKey = `${year}-${month + 1}-${day}`;
      delete tasks[dateKey];
      taskModal.style.display = "none";
      renderCalendar();
    }

    function openYearMonthPopup() {
      const currentYear = currentDate.getFullYear();
      yearSelect.innerHTML = "";
      for (let i = currentYear - 5; i <= currentYear + 5; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
      }
      yearSelect.value = currentYear;

      monthSelect.innerHTML = "";
      monthNames.forEach((month, index) => {
        const option = document.createElement("option");
        option.value = index + 1;
        option.textContent = month;
        monthSelect.appendChild(option);
      });
      monthSelect.value = currentDate.getMonth() + 1;

      yearMonthPopup.style.display = "flex";
    }

    function applyYearMonthSelection() {
      const selectedYear = parseInt(yearSelect.value);
      const selectedMonth = parseInt(monthSelect.value);
      currentDate.setFullYear(selectedYear, selectedMonth - 1, 1);
      yearMonthPopup.style.display = "none";
      renderCalendar();
    }

    selectYearMonthBtn.addEventListener("click", openYearMonthPopup);
    closePopupBtn.addEventListener("click", () => yearMonthPopup.style.display = "none");
    applyMonthBtn.addEventListener("click", applyYearMonthSelection);

    document.getElementById("prev-month").addEventListener("click", () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar();
    });

    document.getElementById("next-month").addEventListener("click", () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar();
    });

    renderCalendar();