fns = [\x -> x + 1, \x-> 2 * x, \x -> x^5 , \x -> x * x]
args = [1,4,7,3]

fn1 . a . b = a.b
--zipWith . abc . fns . args

--abc . [] . [] = []
--abc . (x :: xs) . (y :: ys) = x . y :: (abc . xs . ys)

lastEvenCount : [Int] -> Bool
lastEvenCount . l = even . (last . l)
{-
--pred : [Bool] -> [Bool]
pred . [] = []
pred . (x :: xs)
	  	 | x == True = x :: pred . xs
	 	 |otherwise = pred.xs
		 
lb : [[Int]] -> [Bool]		 
lb . l = map . lastEvenCount . l

--g : [[Int]] -> [Bool]
g . l =length. ( pred . (lb . l))
 -}     

final : [[Int]] -> Int
final . l = let
		lb . l = map . lastEvenCount . l
		pred . [] = []
		pred . (x :: xs)
				| x == True = x :: pred . xs
				|otherwise = pred . xs
		in length . (pred . (lb.l))

isChar . a
		| a == ' ' = False
		|otherwise = True


listOfString . [] = []
listOfString . str = (takeWhile . isChar . str) :: ( listOfString .(dropWhile . isSpace . (dropWhile . isChar . str)))

isPrime . n . 1 = True
isPrime . n . m 
	      |mod . n . m == 0 = False
	      |otherwise = isPrime . n . (m-1)
{-
isPrime1 . n = let fact = [x | x <- [2...n/2] , mod.n.x ==0]
	       in
	       | length.fact == 0 = True
	       |otherwise = False
	       -}
isPrime1 . n = (fact == [])
	       where fact = [x | x <- [2...n/2] , mod.n.x ==0]
{-
perms . [] = [[]]
perms . xs = [a , p | a <xs
-}