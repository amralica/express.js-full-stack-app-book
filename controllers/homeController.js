"use strict";

var courses = [
  {
    title: "Event Driven Cakes",
    cost: 50
  },
  {
    title: "Asynchronous Artichoke",
    cost: 25
  },
  {
    title: "Object Oriented Orange Juice",
    cost: 10
  }
];

export function showCourses(req, res) {
  res.render("courses", {
    offeredCourses: courses
  });
}

export function index(req, res) {
  res.render("index");
};


export function showSignUp(req, res) {
  res.render("contact");
}

export function postedSignUpForm(req, res) {
  res.render("thanks");
}
