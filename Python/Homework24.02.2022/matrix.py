#tpel matrixneri ankyunagcer@ naev gagatner@
import numpy as np

def first():
	a = np.zeros((4, 4), int) 
	np.fill_diagonal(a, 1) 
	print(a)

def second():
	a = np.zeros((4, 4), int)
	np.fill_diagonal(np.fliplr(a), [1, 1, 1])
	print (a)

def three():
	#araji gagat@
	b = np.zeros((4, 4, 4, 4), int)
	np.fill_diagonal(b, 1)
	print (b[0, 0])
	print ("-------------")
	g = np.zeros((4, 4, 4, 4), int)
	np.fill_diagonal(g, 1)
	print (g[1, 1])
	print ("-------------")
	g = np.zeros((4, 4, 4, 4), int)
	np.fill_diagonal(g, 1)
	print (g[2, 2])
	print ("-------------")
	g = np.zeros((4, 4, 4, 4), int)
	np.fill_diagonal(g, 1)
	print (g[3, 3])


#def four():
#	xs = np.sin(np.arange(9)).reshape((3, 3))
#	print(xs)

if __name__ == '__main__':
	first()
	print ("-----------------------")
	second()
	print ("-----------------------")
	three()
	#print ("-----------------------")
	#four()
