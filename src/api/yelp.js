import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      'Bearer kEDg7Uckh0_P5KhgYy7pZlFYfizkiGndlhunCrI03EeBDRQo946Op_u4EX4I7ZHHKRnMJVR36IjsZlMqmU-814RuKDNhuX-UNWX9eakpSje3lNQ9Y14YROiKgVB8YXYx'
  },
});
