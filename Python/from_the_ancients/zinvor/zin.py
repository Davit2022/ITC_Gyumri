#ogtagorcox@ nermucelov tveal mardu anun@ boy@ qash@ ev fizikakan@ karox e tesnel te ir tvyalnerin hamapatasxan inch zenq e nran hasnum

anun = str(input ("name secondname: ")) 
height = int (input ("Height: "))
qash = int (input("Weight: "))
fizo = int (input ("Fizikakan ete qash@ 75-120kg (good)1/0(normal)"))

def zin (anun, height, qash, fizo):
	listt = [anun]
	if height >= 180 and qash <= 75:
	   	print(listt, "SVD")
	elif height >= 180 and qash >= 75 and qash <= 120 and fizo == 1:
	    print(listt, "PK")
	elif height <= 180 and height >= 165 and qash >= 60 and qash <= 75:
	    print(listt, "RPK-74")
	else:
	    print(listt, "AK-74")

zin (anun, height, qash, fizo)

