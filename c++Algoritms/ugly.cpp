#include <iostream>
using namespace std;
 
int divide(int x, int y){
    while (x % y == 0){
        x = x / y;
	}
    return x;
}
 
int isNumUgly(int n){
    n = divide(n, 2);
    n = divide(n, 3);
    n = divide(n, 5);
 
    if(n == 1){
		return 1;
	}else{
		return 0;
	}
}
 
int getUglyNum(int n){
    int i = 1;
    int count = 1;
 
    while (n > count)
    {
        i++;
        if (isNumUgly(i))
            count++;
    }
    return i;
}
 
int main(){
    int m=4;
    unsigned n = getUglyNum(m);
    cout << "The "<< m <<"th ugly number is " << n <<endl;
    return 0;
}
