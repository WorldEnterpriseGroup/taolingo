

// Determine the price for current Course Configuration
function coursecalc()
{
    var theForm = document.forms["courseform"];
    var students = Number(document.getElementById('students').value);
    var months = Number(document.getElementById('months').value);
    var lessons = Number(document.getElementById('lessons').value);
    var current_level = document.getElementById('current_level').value;
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

    if (current_level === 'Beginner') {
        levelCost = 60;
        courseCost = Number(1529);
    } else if (current_level === 'Social') {
        levelCost = 100;
        courseCost = Number(1729);
    } else if (current_level === 'Business') {
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
        
    courseTotalPrice = courseTotalPrice.toFixed(0);
    monthlyPlanTotal = paymentplan.toFixed(0);
    
    document.getElementById('priceTotal').innerHTML = "$" +courseTotalPrice;
    document.getElementById('monthlyPlanTotal').innerHTML = "$" +monthlyPlanTotal;

    console.log("Lesson Total " +lessonTotal);
    console.log("Course Total " +courseTotal);

    return courseTotalPrice;
} // END COURSE CALCULTION

'use strict';
angular.module('formApp', [
  'ngAnimate'
]).controller('formCtrl', ['$scope', '$http', '$httpParamSerializerJQLike', function($scope, $http, $httpParamSerializerJQLike) {
  $scope.formParams = {};
  $scope.stage = "";
  $scope.fullqrcode = "0";
  $scope.monthlyqrcode = "0";
  $scope.formValidation = false;
  $scope.toggleJSONView = false;
  $scope.toggleFormErrorsView = false;
  
  $scope.formParams = {
    payneeded: 'yes',
    _gotcha: '',
    website: 'Tao Lingo',
    test: 'on',
    owner: '76986198-30f2-e911-a972-000d3a34e213',
    fisrtname: '',
    lastname: '',
    email: '',
    partner: '',
    students: '1',
    months: '12',
    lessons: '2',
    current_level: 'Beginner',
    monthlyPlanTotal: '2406',
    priceTotal: '24064',
    message: ''
  };
  
  // Navigation functions
  $scope.next = function (stage) {
    //$scope.direction = 1;
    //$scope.stage = stage;
    
    $scope.formValidation = true;
    
    if ($scope.multiStepForm.$valid) {
      $scope.direction = 1;
      $scope.stage = stage;
      $scope.formValidation = false;
    }
  };

  $scope.back = function (stage) {
    $scope.direction = 0;
    $scope.stage = stage;
  };
  
  
  // Post to desired exposed web service.
  $scope.submitForm = function () {
    var wsUrl = "https://prod-20.eastus.logic.azure.com:443/workflows/a8bed9230a7445338ffbbecaa103ec67/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=tz8jPn70VwbD7XM6aZw6T2gNB_sxAutBWp5I-hKv6cA";

    console.log("Attempting...");
    var message = "Students: " +$scope.formParams.students + "\r\n Lessons: " +$scope.formParams.lessons + "\r\n Monthly Total: $" +$scope.formParams.monthlyPlanTotal + "\r\n Price Total: $" +$scope.formParams.priceTotal;

    // Check form validity and submit data using $http
    if ($scope.multiStepForm.$valid) {
      $scope.formValidation = false;

      console.log("Valid..." +message);

      $scope.formParams.message =  message;
      $scope.formParams.monthlybudget = $scope.formParams.monthlyPlanTotal;
      $scope.formParams.budget = $scope.formParams.priceTotal;
      $scope.formParams.interest = $scope.formParams.current_level;
      $scope.formParams.time = $scope.formParams.months+ " Months ";

      $http({
        method: 'POST',
        url: wsUrl,
        data: $httpParamSerializerJQLike($scope.formParams), // Make sure to inject the service you choose to the controller
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded' // Note the appropriate header
        }
      }).then(function successCallback(response) {

        // responseconsole.log(JSON.stringify(result))
        console.log('Response' +JSON.stringify(response));
        console.log('Response Status = ' +response.status);
        
        if (response.status == "200") {
          $scope.fullqrcode = response.data.full;
          $scope.monthlyqrcode = response.data.monthly;
            console.log("Success...");
          $scope.stage = "fullpayment";
        } else {
                console.log("Status:" +response.status );
            $scope.stage = "error";
        }
      }, function errorCallback(response) {
        $scope.stage = "error";
        console.log(response);
      });
    }
    else{
        $scope.stage = "error";
    }
  };
  
  $scope.reset = function() {
    // Clean up scope before destorying
    $scope.formParams = {};
    $scope.stage = "";
  }
}]);