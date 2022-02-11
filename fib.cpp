#include<iostream>
#include <cstring>
using namespace std;
#define COUNT 100
int arr[COUNT];
int fibonacci(int n){
    if(arr[n]==-1){
        if(n<=1){
            arr[n]=n;
        }
        else{
        arr[n]=fibonacci(n-1)+fibonacci(n-2);
        }
    }
    return arr[n];
}

int main(){

    int n;
    n=11;
    memset(arr,-1,sizeof(arr));
	cout<<fibonacci(n)<<"\n";
}

