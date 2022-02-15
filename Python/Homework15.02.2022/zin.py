boy = int (input ("Greq dzer boy@:"))
qash = int (input ("Greq dzer qash@:"))
fizo = int (input ("Fizkakan 75-120kg 1/0:"))

if (boy >= 180):
	if (qash >= 75):
		if (fizo == 0):
			print("Dzer zeniq tip@ SVD e")	
if (boy >= 180):
	if (fizo == 1):
		if (qash >= 75):
			print("Dzer zenq@ klini PK")
if (boy >= 165):
	if (fizo == 1):
		if(qash >= 60):
			print("Dzer zenq@ klini RPK-74")

else:
	print ("Dzer zenq@ klini Aka-74")
