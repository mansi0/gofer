{- data = [("anupama", [10,8,10,12,12]) , ("Rohit", [14,10,20,9,12]) , ("Megha",[20,13,20,18,15]),),("Kunal", [20,10,15,14,15)] 
1. No of tests in which full marks were scored , studentwise eg : [("anupama", 0), ("Rohit" , 1), ("Megha", 2),("Kunal",1)]
2. All students who have greater than 15 in at least one test eg : ["Rohit","Megha","Kunal"]
3. Maximum marks scored in nth test eg : first test - 20  , second-test -13  or [(1,20),(2,13) ..] 
4. All students who scored maximum marks in that n'th test .. So for first test = ["Megha","Kunal"]
5. All students who have more than 15 in each test :  [(1,["Megha","Kunal"]), (2, []), (3,["Rohit","Megha"]
7. Sum of marks in all tests for any given student. 
6. Now instead of having test scores in an ordered sequence 1 ..5 , how about if each test had a code like TS1,TS2 and so on .. and all students have appeared for 0 or more tests,
   how would you represent data above . Try repeating above questions (wherever  applicable) with this new representation-}


scoreList =  [("anupama", [10,8,10,12,12]) , ("Rohit", [14,10,20,9,12]) , ("Megha",[20,13,20,18,15]) , ("Kunal" , [20,10,15,14,15]) ]
{-
--getName : [(a,b)] -> [a]
getName . [] = []
getName . ((name , marks) :: xs) = fst . (name,marks) :: getName . xs

--noOfTestFullMarks : [([a] , [Int]) ] -> Int -> Int
noOfTestFullMarks .  (marks :: [])  . m
					       |marks == 20 = m+1
					       |otherwise = m
noOfTestFullMarks . (marks :: ms) . m
					       |marks == 20 = noOfTestFullMarks . ms . (m+1)
					       |otherwise = noOfTestFullMarks . ms . m


getMarks . [] = []
getMarks .( (name , marks) :: xs )= marks :: getMarks . xs
-}


--1

fullMarks1 . [] = []
fullMarks1. ((x,y) :: xs) = (x,length. (filter.(\a->(a==20)).y)) :: fullMarks1.xs

--2
gt15 . scoreList  = let
       		    fm1 . scoreList = map . (\(x,y) -> (x , any. (\x -> x > 15) . y)) . scoreList
		    fm2 = filter . (\(x,y) -> y == True) . (fm1.scoreList)
		    fm3 . [] = [] 
		    fm3 . ((x,b) :: xs) = x :: fm3 . xs
		    in fm3 . fm2
		      
	  	      
--3

maxMarksall . scoreList = let
	      		getIndex . (x :: xs) . n
				      	       | n == 1 = x
					       |otherwise = getIndex . xs . (n-1)

			getMarks . (x , (y::ys)) . n = getIndex . (y :: ys) . n

			getMarks2 . [] . n = []
			getMarks2 . ((x,y) :: xs) . n = getMarks . (x,y) . n :: getMarks2 . xs . n
			maximum4 . (x :: []) = x   
			maximum4 . (x :: xs) = max . x . (maximum4 . xs)
			maxList . [] = []
			maxList . (x :: xs) = ( maximum4 . x) :: (maxList . xs)
			getList = maxList . (map . (getMarks2 . scoreList) . [1...5])
			in zip . [1...5] . getList


--4
