import "./style/style.css";
import moment from "moment";
import $ from "jquery";
const displayTime = () => {
    moment.locale("id");
    $(".time").text(moment().format("hh:mm:s"));
    $(".date").text(moment().format("D, MMMM  YYYY"));
};
const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000);
};
updateTime();
