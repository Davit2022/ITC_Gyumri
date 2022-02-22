data = "5+4/2"

def eval(data: str) -> int:
    if '*' in data:
        a, b = data.split('*', 1)
        return float(eval(a)) * float(eval(b))
    if '+' in data:
        a, b = data.split('+', 1)
        return float(eval(a)) + float(eval(b))
    if '-' in data:
        a, b = data.split('-', 1)
        return float(eval(a)) - float(eval(b))
    if '/' in data:
        a, b = data.split('/', 1)
        return float(eval(a)) / float(eval(b))

    return data

if __name__ == '__main__':
    print(eval(data))