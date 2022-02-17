#It means we open the character for reading, writing and so on: 
#There are other options ('w', 'x', 'a', 'b', 't', '+') 
#We can also add these actions together

#f = open ('test.txt','r')

#reads the contents of the character
#if we write f.read(1) will copy the first letter of the character and so on

#print (f.read())
#-------------------------------------------------------------------------
#For cyclic printing
#for line in f:
#	print (line)
#---------------------------------------------------------------------

# Character changes for:
f = open ('test.txt', 'w')

f.write ('Hi, it\'s me!')

#To close the character, it is required
f.close ()
