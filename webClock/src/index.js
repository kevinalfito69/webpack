import "./style/style.css";
import moment from "moment";
import $ from "jquery";
const generateGreetings = () => {
    var currentHour = moment().format("HH");
    if (currentHour >= 3 && currentHour < 12) {
        return "Good Morning";
    } else if (currentHour >= 13 && currentHour < 18) {
        return "Good Afternoon";
    } else if (currentHour >= 15 && currentHour < 20) {
        return "Good Evening";
    } else if (currentHour >= 17 && currentHour < 24) {
        return "Good Night";
    } else {
        return "Hello";
    }
};
console.log(generateGreetings());
const displayTime = () => {
    moment.locale("id");
    const time = $(".time");
    const date = $(".date");
    time.text(moment().format("HH:mm:s"));
    date.text(moment().format("D, MMMM  YYYY"));
    $(".pesan").text(generateGreetings() + " Kevin");
};
const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000);
};
updateTime();
