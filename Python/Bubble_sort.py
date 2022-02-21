def bubble_sort(our_list):
    for i in range(len(our_list)):
        for j in range(len(our_list) - 1):
            if our_list[j] > our_list[j+1]:
                our_list[j], our_list[j+1] = our_list[j+1], our_list[j]
our_list = [19, 13, 6, 2, 18, 8]
bubble_sort(our_list)
print(our_list)
