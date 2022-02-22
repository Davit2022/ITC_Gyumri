import time
from cfonts import render, say

def func():
	a = 100
	i = 0
	while i < a:
			print ("Procecc", (a), " %")
			a -= 1
			time.sleep(0.01)
			if a == 0:
				break
func()

output = render('Hello world !!!', colors=['red', 'yellow'], align='center')

if __name__ == "__main__":
	print(output)
