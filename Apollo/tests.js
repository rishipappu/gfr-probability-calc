function B(x, y) {
    return Math.factorial(x-1) * Math.factorial(y-1) / Math.factorial(x+y-1);
}


function tcdf(t, df) {
    const first_term = 1 / (Math.sqrt(df) * B(0.5, df / 2));
    const second_term = 1 + Math.pow(t, 2) / df;
    const exponent = -1 * (df + 1) / 2;
    return first_term * Math.pow(second_term, exponent);
    
}


function two_t_test(list1, list2, sig_level=0.05, ho="great", diff=0) {
    // Data
    const xbar_1 = Math.mean(list1);
    const stand_deviation_1 = Math.std(list1);
    
    const xbar_2 = Math.mean(list2);
    const stand_deviation_2 = Math.std(list2);
    
    
    const standard_error_squared = 
        Math.pow(stand_deviation_1, 2) / list1.length + 
        Math.pow(stand_deviation_2, 2) / list2.length;
    const standard_error = Math.pow(standard_error_squared, 0.5);
    const degrees_of_freedom = standard_error_squared / (
        (Math.pow(Math.pow(stand_deviation_1, 2) / list1.length), 2) / (list1.length - 1) +
        (Math.pow(Math.pow(stand_deviation_2, 2) / list2.length), 2) / (list2.length - 1)
    );
    const t_test_statistic = (xbar_1 - xbar_2 - diff) / standard_error;
    
    
    // One-sided
    if (ho != "not") {
        const p_value = tcdf(t_test_statistic, degrees_of_freedom);
    }
    
    // Print
    console.log(p_value);
    
}

two_t_test([25, 27], [26, 28])