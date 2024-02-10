$(document).ready(function () {
    $("#calculateBtn").on("click", function () {
        // Get the values from the input boxes
        var hours = parseFloat($("#hours").val());

        // Validate input
        if (isNaN(hours) || hours <= 0) {
            // Show error message next to the input box
            $("#hours").after("<span style='color: red;'>Please enter a valid positive number for hours.</span>");
            return;
        }

        // Clear any previous error messages
        $("#hours").next("span").remove();

        // Get the hourly rate
        var hourlyRate = parseFloat($("#hourlyRate").val());

        // Calculate the total
        var total = hours * hourlyRate;

        // Display the total
        $("#total").val(total.toFixed(2));
    });
});
