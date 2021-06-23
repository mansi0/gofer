{-1) Given two input lists l and m, write function for returning a list
   a) whose elements belong to both l and m.
   b) whose elements belong to l but not m
   You may assume both list are of type [Int] and have no duplicates 
-}
--a
intersect . [] . _ = []
intersect . (x :: xs) . y
			| (any . (\a -> a == x)) . y == True = x :: (intersect . xs . y)
			| otherwise = intersect . xs . y

--b
lm . [] . _ = []
lm . (x :: xs) . y
			| (any . (\a -> a == x)) . y == False = x :: (lm . xs . y)
			| otherwise = lm . xs . y


{-
2) Write a function which checks whether the elements of a list are in
   non-increasing order

   i.e. given [x1,x2,x3,x4]
   then x1 >= x2 >= x2 >= x3 >= x4 (>= means greater than or equal to)

   HintSol1 : Use zipwith.f.(x::xs).xs with in-built function 'and'
-}
isNonIncreasing . (x :: []) = True
isNonIncreasing . (x :: y :: xs)  
			       | x >= y = isNonIncreasing . (y :: xs)
			       |otherwise = False
{-
3)  The sieve of Eratosthenes is an algorithm for finding all prime numbers

    For example to find all primes between 2 and 25

    Enumerate the numbers

    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25

    First number is 2 so remove all multiples of 2 from all numbers after 2

    Then you are left with

    2, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25

    Now take the next number 3 and remove all multiples of 3 from all numbers
    after 3

    2, 3, 5, 7, 11, 13, 17, 19, 23, 25

    Now take the next number 5 and remove all multiples of 5 from all numbers
    after 5

    And you are left with

    2, 3, 5, 7, 11, 13, 17, 19, 23

    Now repeat the above process for all numbers till you reach the end of the sequence/list

    What you are finally left with is the set of prime numbers between 2 and 25
    

    If you wish for an animated explanation of the algorithm refer to https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes


    Dont read the solutions there, but try writing this solution in gofer

-}
notZero . n
	   |n == 0  = False
	   |otherwise = True

delebydivi . (x :: []) . n = x :: []
delebydivi . (x :: y :: xs) . n = x :: delebydivi .( [a| a <- (y :: xs) , notZero . (mod . a . n )] ) . y

{-

4.  Write a function subSeq which returns all initial sub-strings of a given non-empty string

    Eg given "gofer" , you get ["g", "go" , "gof", "gofe", "gofer"]

    HintSoln : Try using map and take  (and flip ?)
-}
f1 : [Char] -> [[Char]]
f1 . [] = []
f1 . str = (take .(length.str).str) :: f1 . (take . (length.str - 1) . str)

--output of f1 : ["gofer", "gofe", "gof", "go", "g"] : [[Char]]


{-
5. Write a function which checks whether the elements of a list are a Geometric Progression 

   A geometric progression is a sequence of numbers of the form

   a, a*r, a*(r^2), a*(r^3), ...a*(r^n)

   i.e. each term after the first is a multiple of the previous term with some non-zero common ratio r.

   eg : 3, 6, 12, 24, 48   is a Geometric progression with a = 3 and r = 2.

   3,  3 * (2^1) , 3 * (2^2) , 3 * (2^3), 3*(2^4) 

-}






isGemoProg .(x :: y :: ys) = let
	       	       	     findR . a . b = b/a
			     gemo . [] . a . r . pow = True
			     gemo . (xx :: xs) . a . r . pow
								|xx == a*(r^pow) = gemo.xs.a.r.(pow+1)
								|otherwise = False
	       	       	     r = findR . x . y
			     a3 = gemo . ys . x . r . 2
			     in a3
			     

			
		      
