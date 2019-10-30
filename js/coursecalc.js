

// Determine the price for current Course Configuration
function coursecalc()
{
    var theForm = document.forms["courseform"];

    var startdate = document.getElementById('startdate').value;
    var months = Number(document.getElementById('months').value);
    var lessons = Number(document.getElementById('lessons').value);
    var level = document.getElementById('level').value;
    var levelCost = Number(60);
    var courseCost = Number(1529) * months;
    var discount = Number(0);
    // var couponcode = document.getElementById('couponcode').value;
    
    if (startdate === 'now')
    {
        discount = Number(0.03);
    }

    if (level === 'Beginner') {
        levelCost = 60;
    } else if (level === 'Social') {
        levelCost = 100;
    } else if (level === 'Business') {
        levelCost = 180;
    }

    // 52/48 is 52 weeks actual and 48 counted in our form which equates around 4.33.
    // Use this to find total number of coachings requested.
    var lessonTotal = lessons * 52/48 * months * levelCost;
 
    var courseTotalPrice = (lessonTotal + courseCost) - ((lessonTotal + courseCost) * discount);

    // add 20% interest for paying monthly if longer than 1 month payment
    if (months > 1) {
        var monthCost = courseTotalPrice / months * 1.2;
    } else {
        var monthCost = courseTotalPrice * 1.3;
        courseTotalPrice = courseTotalPrice * 1.3;
    }
    
    monthTotal = monthCost.toFixed(0);
    courseTotalPrice = courseTotalPrice.toFixed(0);

    document.getElementById('priceTotal').innerHTML = "$" +courseTotalPrice;
    document.getElementById('monthPriceTotal').innerHTML = "$" +monthTotal;

    return courseTotalPrice;
}


