
with open("file.txt") as file:
  data = file.readlines()
  for line in data:
    for word in line.split():
      if len(word) == 3:
        print(word)
    print(len(line.split()))
  
    