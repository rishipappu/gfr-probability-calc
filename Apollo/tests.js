const scipy = require('scipy');
const math = require('mathjs');
const jStat = require('jStat');

// function B(x, y) {
//     const abc = math.factorial(x - 1) * math.factorial(y - 1) / math.factorial(x + y - 1);
//     return abc;
// }


// function tcdf(t, df) {
//     const first_term = 1 / (math.sqrt(df) * B(0.5, df / 2));
//     const second_term = 1 + math.pow(t, 2) / df;
//     const exponent = -1 * (df + 1) / 2;
//     return first_term * math.pow(second_term, exponent);

// }


// function two_t_test(list1, list2, sig_level = 0.05, ho = "great", diff = 0) {
//     // Data
//     const xbar_1 = math.mean(list1);
//     const stand_deviation_1 = math.std(list1);

//     const xbar_2 = math.mean(list2);
//     const stand_deviation_2 = math.std(list2);

//     const powered_stdv_1 = math.pow(stand_deviation_1, 2) / list1.length;
//     const powered_stdv_2 = math.pow(stand_deviation_2, 2) / list2.length;

//     const standard_error_squared = powered_stdv_1 + powered_stdv_2;
//     const standard_error = math.pow(standard_error_squared, 0.5);
//     const double_powered_1 = math.pow(powered_stdv_1, 2) / (list1.length - 1);
//     const double_powered_2 = math.pow(powered_stdv_2, 2) / (list2.length - 1);
//     const degrees_of_freedom = standard_error_squared / (double_powered_1 + double_powered_2);
//     const t_test_statistic = (xbar_1 - xbar_2 - diff) / standard_error;


//     // One-sided
//     if (ho != "not") {
const p_value = tcdf(t_test_statistic, degrees_of_freedom);
//     }

//     // Print
//     console.log(p_value);

// }

// two_t_test([25, 27], [26, 28])

