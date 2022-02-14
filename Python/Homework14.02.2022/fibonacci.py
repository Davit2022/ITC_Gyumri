fibo = [0, 1]

def fibonacci(n):
	if n<=len(fibo) and n>0:
		return fibo[n-1]
	else:
		fn = fibonacci(n-1) + fibonacci(n-2)
		if n>len(fibo):
			fibo.append(fn)
		return fn

n = int(input('Enter a number, N, N>=2 : '))

fibonacci(n)

print(fibo)