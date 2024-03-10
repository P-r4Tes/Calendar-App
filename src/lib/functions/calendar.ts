function getFirstAndLastDay(date: Date) {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return { firstDay, lastDay };
}

function getWeekCount(date: Date) {
  if (!date) throw new Error("날짜가 입력되지 않았습니다!");

  const { firstDay, lastDay } = getFirstAndLastDay(date);
  const lastDate = lastDay.getDate();
  const firstDayOfWeek = firstDay.getDay();

  if (lastDate === 28 && firstDayOfWeek === 0) return 4;
  else if (lastDate === 31 && (firstDayOfWeek === 5 || firstDayOfWeek === 6)) return 6;
  else if (lastDate === 30 && firstDayOfWeek === 6) return 6;
  else return 5;
}

function generateCalendarForMonth(date: Date) {
  const weeks = [];
  const { year, month } = { year: date.getFullYear(), month: date.getMonth() + 1 };
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const lastDayOfMonth = new Date(year, month, 0);

  const startDay = new Date(firstDayOfMonth);
  startDay.setDate(startDay.getDate() - startDay.getDay());
  const endDay = new Date(lastDayOfMonth);
  endDay.setDate(endDay.getDate() + (6 - endDay.getDay()));
  const currentDate = new Date(startDay);

  while (currentDate <= endDay) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push(`${currentDate.getMonth() + 1}/${currentDate.getDate()}`);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}

export function generateCalendar(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const weeks = getWeekCount(date);
  const weeksArray = generateCalendarForMonth(date);
  const lastDayOfPreviousMonth = new Date(year, month, 0);

  if (weeks === 5) {
    const additionalWeek = [];
    const startDay = new Date(year, month - 1, lastDayOfPreviousMonth.getDate() - 6);
    for (let i = 0; i < 7; i++) {
      additionalWeek.push(`${startDay.getMonth() + 1}/${startDay.getDate()}`);
      startDay.setDate(startDay.getDate() + 1);
    }
    weeksArray.unshift(additionalWeek);
  } else if (weeks === 4) {
    const additionalWeekStart = [];
    const startDayStart = new Date(year, month - 1, lastDayOfPreviousMonth.getDate() - 6);
    for (let i = 0; i < 7; i++) {
      additionalWeekStart.push(`${startDayStart.getMonth() + 1}/${startDayStart.getDate()}`);
      startDayStart.setDate(startDayStart.getDate() + 1);
    }
    weeksArray.unshift(additionalWeekStart);

    const additionalWeekEnd = [];
    const startDayEnd = new Date(year, month + 1, 1);
    for (let i = 0; i < 7; i++) {
      additionalWeekEnd.push(`${startDayEnd.getMonth() + 1}/${startDayEnd.getDate()}`);
      startDayEnd.setDate(startDayEnd.getDate() + 1);
    }
    weeksArray.push(additionalWeekEnd);
  }

  return weeksArray;
}
