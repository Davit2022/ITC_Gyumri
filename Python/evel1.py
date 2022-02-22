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
s2 = 0
s3= 0
k = data[s+=1]
#	for s < data[l]
#		if data[s2] == '('
#			if data[]
#    return data
print(data[0], data[l], data[k]) 


if __name__ == '__main__':
    print(foo(data))
