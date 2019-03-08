import math, statistics
from scipy.stats import t

def one_prop_z_interval(proportion, size):
    pass

def two_t_test(list1, list2, sig_level=0.05, ho='great', diff=0):
    
    # Data
    xbar_1 = statistics.mean(list1)
    stand_deviation_1 = statistics.stdev(list1)
    
    xbar_2 = statistics.mean(list2)
    stand_deviation_2 = statistics.stdev(list2)
    
    
    standard_error_squared = stand_deviation_1**2/len(list1) + stand_deviation_2**2/len(list2)
    standard_error = standard_error_squared ** 0.5
    degrees_of_freedom = standard_error_squared / (
        (stand_deviation_1**2/len(list1)) ** 2 / (len(list1) - 1) + \
        (stand_deviation_2**2/len(list2)) ** 2 / (len(list2) - 1)
    )
    t_test_statistic = (xbar_1 - xbar_2 - diff) / standard_error
    
    
    # One-sided
    if ho != 'not':
        p_value = t.cdf(t_test_statistic, degrees_of_freedom)
        
    
    # Print
    print(ho)
    print('x bar 1 %s' % xbar_1)
    print('stand deviation 1 %s' % stand_deviation_1)
    print('x bar 2 %s' % xbar_2)
    print('stand deviation 2 %s' % stand_deviation_2)
    print('df %s' % degrees_of_freedom)
    print('t* %s' % t_test_statistic)
    print('p-value %s' % p_value)
    
two_t_test((25, 27), (26, 28))
