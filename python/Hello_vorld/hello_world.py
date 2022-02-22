def print_element():
    text = "hello world"
    print(text.lower())
    print(text.upper())
    print(text.title())
    text_list = list(text)
    for i in range(len(text_list)):
        print(text_list[i])

if(__name__ == "__main__"):
   print_element()
