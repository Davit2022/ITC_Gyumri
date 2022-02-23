data = str(input("input "))

def foo(data: str) -> int:
    if '*' in data:
        a, b = data.split('*', 1)
        return int(foo(a)) * int(foo(b))
    if '+' in data:
        a, b = data.split('+', 1)
        return int(foo(a)) + int(foo(b))
    if '-' in data:
        a, b = data.split('-', 1)
        return int(foo(a)) - int(foo(b))
    if '/' in data:
        a, b = data.split('/', 1)
        return int(foo(a)) / int(foo(b))
sumbl1 = '('
sumbl2 = ')'
l = len(data) - 1
s = 0
	
while s < data[l]:
	if data[s] == '(' and data[l] == ')':
		foo(data)
		s += 1
		break
	else:
		print('You have ()- problem')
   
print(data[0], data[l]) 


if __name__ == '__main__':
    print(foo(data))
