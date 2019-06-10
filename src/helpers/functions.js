import "isomorphic-fetch";
import apiKey from "../apiKey";

const baseURL = "https://www.skiddle.com/api/v1";

const getData = async ({ route }) => {
  try {
    const fetchURL = `${baseURL}${route}${apiKey}`;
    const response = await fetch(fetchURL, {
      method: "GET"
    });
    const data = await response.json();
    if (data.error) throw new Error(data.error);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const monthReferenceObject = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
};

const parseDate = dateString => {
  const date = new Date(dateString);
  let day = date.getDay();
  let endNumeral = day;
  if (day.length === 2) {
    endNumeral = day[1];
  }
  if (endNumeral === 1) {
    day = `${day}st`;
  } else if (endNumeral === 2) {
    day = `${day}nd`;
  } else if (endNumeral === 3) {
    day = `${day}rd`;
  } else {
    day = `${day}th`;
  }
  let month = date.getMonth();
  const year = date.getFullYear();
  month = monthReferenceObject[month];
  return `${day} ${month} ${year}`;
};

export { getData, parseDate };
