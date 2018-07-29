/* This is all stuff from the course.

var $ = require('jquery');
//var Person = require('./modules/Person');
import Person from "./modules/Person";

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes .50 in taxes.");
  }
}

alert("ab321");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();

$("h1").remove();
*/
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
