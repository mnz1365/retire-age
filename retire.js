
var age = 37;
var retire_age = 0;
var retire_year = 0;
var remain = 0;
var work_time = 17;
var this_year = new Date();
this_year = this_year.getFullYear();

remain = 30 - 17;
retire_age = age + remain;
retire_year = this_year + remain;



console.log( "i'm " + age + " and remain " +  remain + " i retire in " + retire_year);