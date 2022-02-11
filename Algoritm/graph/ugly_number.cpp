#include <iostream>

bool is_ugly (int x);
int print ();

int main (){
	int x;
	std::cout << "Enter number ";
	std::cin >> x;
	print();
	return 0;
}

bool is_ugly (int x){
	while (x > 1){
		if (x % 2 == 0){	
			int x = x / 2;
			return x;
		} else if (x % 3 == 0){
			int x = x / 3;
			return x;
		} else if (x % 5 == 0){
			int x = x / 5;
			return x;
		} else {
			return true;
		}
	}
	return false;
}

int print (){
	int x;
	int number = is_ugly(x);
	if (number = true) {
		std::cout << number << " is ugly number " << std::endl;
	} else {
		std::cout << number << " is no ugly number " << std::endl;
	}
}
