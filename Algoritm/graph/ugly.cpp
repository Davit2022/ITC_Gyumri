#include <iostream>

int max_divide(int a, int b);
int is_ugly(int x);
int input_number(int n);

int main()
{
	unsigned y;
	std::cout << "Enter number " ;
	std::cin >> y;
	unsigned x = input_number(y);
	std::cout << y << " th ugly is " << x << std::endl;
	return 0;
}

int max_divide(int a, int b)
{
	while (a % b == 0)
		a = a / b;
		
	return a;
}

int is_ugly(int x)
{
	x = max_divide(x, 2);
	x = max_divide(x, 3);
	x = max_divide(x, 5);

	return (x == 1) ? 1 : 0;
}

int input_number(int n)
{
	int i = 1;
	
	int count = 1;

	while (n > count)
	{
		i++;
		if (is_ugly(i))
			count++;
	}
	return i;
}

