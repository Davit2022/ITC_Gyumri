import random
from posixpath import split

name = input("What is your name? ")
 
print("Good Luck ! ", name)
 
file = open("file.txt")
words = file.readline()
words = words.split(", ")
word = random.choice(words)

print("Guess the characters")
guesses = ''
quantity = 3
while quantity > 0:
    failed = 0
    for i in word:
        if i in guesses:
            print(i, end=" ")    
        else:
            print("_")
            failed += 1
    if failed == 0:
        print("\nYou Win")
        print("The word is: ", word)
        break
    
    print()
    guess = input("guess a character:")
    guesses += guess
    
    if guess not in word:
        quantity -= 1
        print("Wrong")
        print("You have", + quantity, 'more guesses')
         
        if quantity == 0:
            print("You Loose")
            print("The word is", word)
file.close()