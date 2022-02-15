#l = ['H1', 'H100', 'h10', 'H3', 'H2', 'H6', 'H10', 'H50', 'H5', 'H99', 'H8']
#c = sorted (l, key=lambda x: int("".join([i for i in x if i.isdigit()])))

#print (c)

word = 'aa4 bb5 opp3 aa3'
sorted_word = ''.join(sorted(set(word), key=str.lower))
print(sorted_word)
