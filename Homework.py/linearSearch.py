def search(list, n):
	i = 0
	while i < len(list):
		if list[i] == n:
			return True
		i = i + 1
	return False


list = [5, 0, 4, 8, 9, 2, 6]
n = 9

if search(list, n):
	print("Found = " ,n)
else:
	print("Not Found")
