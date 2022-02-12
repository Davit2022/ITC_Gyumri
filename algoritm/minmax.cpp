#include <iostream>

struct Mix{
	int min;
	int max;
};

Mix getMinMax(int arr[], int n){
	struct Mix minmax;
	int i;

	if ( n == 1)
	{
		minmax.max = arr[0];
		minmax.min = arr[0];
		return minmax;
	}

	if (arr[0] > arr[1])
	{
		minmax.max = arr[0];
		minmax.min = arr[1];
		
	}else {
		minmax.max = arr[1];
		minmax.min = arr[0];
	}

	for(i = 2; i < n; i++){
		if (arr[i] > minmax.max)
			minmax.max = arr[i];
		else if (arr[i] < minmax.min)
			minmax.min = arr[i];
	}
	return minmax;
}

int main() {
	int arr[] = {100, 54, 784, 7, 6, 25, 360};
	int arr_size = 7;
	
	struct Mix minmax = getMinMax(arr, arr_size);

	std::cout << "max element: ";
	std::cout << minmax.max << std::endl;
	std::cout << "min element: ";
	std::cout << minmax.min << std::endl;

return 0;
}
