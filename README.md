# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$ e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

https://convertpedia.com.br/en/math/calculate-factorial/17-factorial.php
I used the above link when making more tests to find the factorial of other numbers. I also looked at the class slides for more information on bottom-up programming.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

In this implementation, when the sum of the values to find euler's number, we call factorial to get the denominator. In the e function, we have a for loop adding the 1/factorial numbers going from 0 to n. When we call factorial, there is a for loop calculating the factorial for the iteration we are on which would be n. Then in e, we return the value calculated from factorial and add it to the previous numbers and so on, which this for loop would also result in n. So, $n+n$ or $/Theta(2n)$ would be the worst time complexity. 
