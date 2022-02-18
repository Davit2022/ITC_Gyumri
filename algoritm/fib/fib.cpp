#include <iostream>
#include <chrono>
using namespace std;

int fib(int,int);
void fibonacci(int);

int main(){
  using namespace std::chrono;
  milliseconds mil(1000); 
      
  mil = mil*60;     
  std::cout << "duration (in periods): ";
  std::cout << mil.count() << " milliseconds.\n";
      
  std::cout << "duration (in seconds): ";
  std::cout << (mil.count() * milliseconds::period::num / 
                               milliseconds::period::den);
  std::cout << " seconds.\n";
 
  cout << fib(7,mil) <<"\n";
  fibonacci(7);
  cout <<"\n";
}


int fib(int n,int count){
  if(n < 2){
     return 1;
  } else {
     return fib(n - 1) + fib(n - 2);     
  }
  cout << count <<"\n";
}


void fibonacci(int n){
  int a = 0;
  int b = 1;
  int c = b + a; 
  for(int i = 0;i< n;i++){
    cout << a <<" ";
    int k = a + b;
    a = b;
    b = k;
  }
}


