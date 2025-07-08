import { da } from "date-fns/locale";

// Converts a Date object to a YYYY-MM-DD string format
export const searchDateFormateMaker = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero for single-digit months
  const day = String(date.getDate()).padStart(2, "0"); // Add leading zero for single-digit days

  return `${year}-${month}-${day}`; // Example: "2025-06-01"
};

// Formats a date string to a "MMM D, YYYY, HH:MM:SS AM/PM" format
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };
  return date.toLocaleString("en-US", options); // Example: "Jun 1, 2025, 12:00:00 AM"
}

// Formats a Date object to a "ddd, DD MMM YYYY" format
export const formatDateShort = (date: any) => {
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options); // Example: "Sun, 01 Jun 2025"
};

export const formatDateLong = (date: any) => {
  return date.toLocaleDateString("en-US", {
    month: "long", // Full month name
    day: "numeric", // Numeric day (e.g., 25)
    weekday: "short", // Abbreviated weekday (e.g., Thu)
  });
};

// Calculates the duration between two date strings in days, hours, and minutes
export const TravelDuration = (
  arrivingAt: string,
  departingAt: string
): string => {
  const arrivingAtDate = new Date(arrivingAt);
  const departingAtDate = new Date(departingAt);
  const durationMillis = arrivingAtDate.getTime() - departingAtDate.getTime();
  const totalMinutes = Math.floor(durationMillis / 60000);
  const totalHours = Math.floor(totalMinutes / 60);
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;

  let durationString = "";
  if (days > 0) {
    durationString += `${days}d `;
  }
  if (hours > 0) {
    durationString += `${hours}h `;
  }
  if (minutes > 0) {
    durationString += `${minutes}min`;
  }

  return durationString.trim(); // Example: "1d 2h 30min"
};

export const TravelDurationLongFormate = (
  arrivingAt: string,
  departingAt: string
): string => {
  const arrivingAtDate = new Date(arrivingAt);
  const departingAtDate = new Date(departingAt);
  const durationMillis = arrivingAtDate.getTime() - departingAtDate.getTime();
  const totalMinutes = Math.floor(durationMillis / 60000);
  const totalHours = Math.floor(totalMinutes / 60);
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;

  let durationString = "";

  if (days > 0) {
    durationString += `${days} ${days === 1 ? "Day" : "Days"} `;
  }
  if (hours > 0) {
    durationString += `${hours} ${hours === 1 ? "Hour" : "Hours"} `;
  }
  if (minutes > 0) {
    durationString += `${minutes} ${minutes === 1 ? "Minute" : "Minutes"}`;
  }

  return durationString.trim(); // Example: "1 Day 2 Hours 30 Minutes"
};

export const TravelTime = (ms: any) => {
  // const date = new Date(ms);

  // const options: any = {
  //   day: "numeric",
  //   month: "short",
  //   hour: "numeric",
  //   minute: "numeric",
  //   hour12: true,
  // };

  // return date.toLocaleString("en-US", options).replace(",", "");

  // const date = new Date(ms);

  // const options = {
  //   day: "numeric",
  //   month: "short",
  //   hour: "numeric",
  //   minute: "numeric",
  //   hour12: true,
  // };

  // // Get the formatted time (12:25 pm) and date (14 Sep)
  // const time = date.toLocaleString("en-US", {
  //   hour: "numeric",
  //   minute: "numeric",
  //   hour12: true,
  // });
  // const dayMonth = date.toLocaleString("en-US", {
  //   day: "numeric",
  //   month: "short",
  // });

  // return `${time.toLowerCase()} ${dayMonth}`;

  const date = new Date(ms);

  const options: any = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  // Get the formatted time (12:25 pm) and convert it to lowercase
  return date.toLocaleString("en-US", options).toLowerCase();
};

export const TimeDuration = (ms: number) => {
  let days = Math.floor(ms / (1000 * 60 * 60 * 24));
  let hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));

  let result = [];

  if (days > 0) {
    result.push(`${days}d`);
  }
  if (hours > 0) {
    result.push(`${hours}h`);
  }
  if (minutes > 0) {
    result.push(`${minutes}m`);
  }

  return result.length > 0 ? result.join(" ") : "0m"; // Example: "1d 2h 30m"
};

// Formats a Date object to a "HH:MM" format
export const FormatTime = (date: Date): string => {
  let hours: number | string = date.getHours();
  let minutes: number | string = date.getMinutes();

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;

  return `${hours}:${minutes}`; // Example: "08:05"
};

export const formatTo12HourTime = (date: any) => {
  if (!(date instanceof Date)) {
    throw new Error("Invalid date object");
  }

  const options: any = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  return date.toLocaleTimeString("en-US", options);
};
// Formats a Date object to a "Do MMM YYYY" format
export const FormatDate = (date: Date): string => {
  const days = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th",
    "13th",
    "14th",
    "15th",
    "16th",
    "17th",
    "18th",
    "19th",
    "20th",
    "21st",
    "22nd",
    "23rd",
    "24th",
    "25th",
    "26th",
    "27th",
    "28th",
    "29th",
    "30th",
    "31st",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${days[day - 1]} ${months[month]} ${year}`; // Example: "1st Jun 2025"
};

// Formats a Date object to a "D MMM, HH:MM" format
export const dateTimeHour = (date: Date): string => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  const formattedHours = hours < 10 ? `0${hours}` : hours.toString();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();

  return `${day} ${month}, ${formattedHours}:${formattedMinutes}`; // Example: "1 Jun, 08:05"
};

// Formats a Date object to a "D MMMM YYYY" format
export function formatDate2(date: Date) {
  let day = date.getDate();
  let month = date.toLocaleString("en-US", { month: "long" });
  let year = date.getFullYear();

  return `${day} ${month} ${year}`; // Example: "1 June 2025"
}

export function ShortDate(date: any) {
  const options = { month: "short", day: "numeric" };
  const monthDay = date.toLocaleDateString("en-US", options); // e.g. "Aug 5"

  const dayOfWeek = date.toLocaleString("en-US", { weekday: "short" }); // e.g. "Mon"

  return `${monthDay}, ${dayOfWeek}`; // Example: "Aug 5, Mon"
}

export function ShortDate2(date: any) {
  const options = { month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options); // Example: "Aug 5"
}

export function getFormattedTimeWithAmPm(time: any) {
  // take :  "14:00"
  const [hour, minute] = time.split(":").map(Number);
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
  const amPm = hour >= 12 ? "PM" : "AM";
  const formattedMinute = minute < 10 ? `0${minute}` : minute;
  return `${formattedHour}:${formattedMinute} ${amPm}`; // example : 02:00 PM
}

// utils/formatDate.js

export function fullDateTime(date: any) {
  const options: any = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const formatted = date.toLocaleString("en-GB", options).replace(",", "");
  const [weekday, ...rest] = formatted.split(" ");
  return `${weekday}, ${rest.join(" ")}`; // Thu, 29 May 2025, 18:59
}
