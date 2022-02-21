#Menq nshenq anhrajesht fayli anun@ ev mer hrahangshar@ gnum e ayd papki mej kardum e hin exacac@ tox ar tox aynuheteve jnjume bolor ketadrakan nshaner@ ev barer@ iraric bajanum e - ov aynuhetev amen erkrod bar araji tar@ darcnum e mecatar


import string
punctuations = '''!`()-[]{};:'"\,<>./?@#$%^&*_~'''
 
#inp_str = input("Enter a string: ")

with open('text.txt', 'r+') as inFile:
	no_punc = ""
	for char in inFile:
	   if char not in punctuations:
	       no_punc = no_punc + char
	for char in string.punctuation:
		no_punc = no_punc.replace(char, '')

	no_punc = no_punc.title()
	no_punc = '-'.join(no_punc)
	print("Change is text: \n",no_punc.replace('a', 'u'), file=open("text.txt", "a"))
