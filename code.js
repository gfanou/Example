// 1- BOOKS AND DVDs FEES

$(document).ready(
    function()
    {
        // add event handlers
        $("#calcTotalFee").click(showTotalFee);


        // all other functions (program logic)
        function showTotalFee()
        {
            // get data from input boxes

            // Late fee for book per day
            var lateFeeBook = 0.25;


            var numberOfBook = parseInt($("#numberOfBook").val());

            // Number of days late for book
            var numberDayLateBook = parseInt($("#numberDayLateBook").val());

            // Late fee for DVD per day
            var lateFeeDVD = 0.50;

            // Number of DVD
            var numberOfDVD = parseInt($("#numberOfDVD").val());

            // Number of days late for DVD
            var numberDayLateDVD = parseInt($("#numberDayLateDVD").val());


            // Let's do math

            // Fees pay for book
            var feePayForBook = numberOfBook * numberDayLateBook * lateFeeBook;

            // Fees pay for DVDs
            var feePayForDVD = numberOfDVD * numberDayLateDVD * lateFeeDVD;

            // Total fee
            var totalFee = feePayForBook + feePayForDVD;


            // Display result
            $("#feeOutput").text(`Your total fee is $ ${totalFee.toFixed(2)}.`);



        }

    }

);

