

// Determine the price for current Course Configuration
function coursecalc()
{
    var theForm = document.forms["courseform"];

    var students = Number(document.getElementById('students').value);
    var months = Number(document.getElementById('months').value);
    var lessons = Number(document.getElementById('lessons').value);
    var level = document.getElementById('level').value;
    var levelCost = Number(60);
    var courseCost = Number(1529);
    var studentCost = Number(0);
    var monthCost = Number(0);
    var discount = Number(0);
    var regfee = Number(500);
    // var couponcode = document.getElementById('couponcode').value;
    
    // APPLY DISCOUNT FOR MULTIPLE STUDENTS
    if (students == '1') {
        studentCost = 1;
    } else if (students == '2') {
        studentCost = 1.95;
    } else if (students == '3') {
        studentCost = 2.9;
    } else if (students == '4') {
        studentCost = 3.85;
    } else if (students == '5') {
        studentCost = 4.8;
    } else if (students == '10') {
        studentCost = 9.5;
    } else if (students == '20') {
        studentCost = 18;
    } else if (students == '50') {
        studentCost = 45;
    }

    // APPLY DISCOUNT FOR BULK MONTHS
    if (months == '1') {
        monthCost = 1;
    } else if (months == '6') {
        monthCost = 6;
    } else if (months == '12') {
        monthCost = 11.5;
    } else if (months == '24') {
        monthCost = 23;
    } else if (months == '48') {
        monthCost = 44;
    }

    if (level === 'Beginner') {
        levelCost = 60;
        courseCost = Number(1529);
    } else if (level === 'Social') {
        levelCost = 100;
        courseCost = Number(1729);
    } else if (level === 'Business') {
        levelCost = 180;
        courseCost = Number(2129);
    }
    

    // 52/48 is 52 weeks actual and 48 counted in our form which equates around 4.33.
    // Use this to find total number of coachings requested.
    var lessonTotal = lessons * 52/48*4 * levelCost * monthCost * studentCost;
    var courseTotal = monthCost * studentCost * courseCost;

    var courseTotalPrice = (lessonTotal + courseTotal + regfee);
    if (months == '1') {
        // add 20% interest for paying monthly
        var paymentplan = courseTotalPrice;
    } else {
        var paymentplan = courseTotalPrice / months * 1.2;
    }
    

    
    monthlyPlanTotal = paymentplan.toFixed(0);
    courseTotalPrice = courseTotalPrice.toFixed(0);

    document.getElementById('priceTotal').innerHTML = "$" +courseTotalPrice;
    document.getElementById('monthlyPlanTotal').innerHTML = "$" +monthlyPlanTotal;


    console.log("Lesson Total " +lessonTotal);
    console.log("Course Total " +courseTotal);
    console.log("Lesson Total " +lessonTotal);
    console.log("Lesson Total " +lessonTotal);

    return courseTotalPrice;
}

// $('.scroll').on('click',function(e) {
// 	e.preventDefault();
// 	var offset = 100;
// 	var target = this.hash;
// 	if ($(this).data('offset') != undefined) offset = $(this).data('offset');
// 	$('html, body').stop().animate({
// 		'scrollTop': $(target).offset().top - offset
// 	}, 500, 'swing', function() {
// 		// window.location.hash = target;
// 	});
// });


