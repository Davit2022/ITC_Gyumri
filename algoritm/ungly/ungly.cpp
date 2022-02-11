#include <iostream>
using namespace std;
int isUngly(int);
int getNothingUngly(int);

int main(){
   int index;
   cout << "Enter number: ";
   cin >> index;
   cout << getNothingUngly(index) <<"\n";
}


int isUngly(int num){
  while(num != 1){
   if(num % 2 == 0){
     num /= 2;
   } else if(num % 3 == 0){
     num /= 3;
   } else if(num % 5 ==  0){
     num /=5;
   } else {
     return false;
   };
  }
  return true;
}


int getNothingUngly(int index){
  int num = 1;
  int count = 1;
  while(index > count){
    num++;
    if(isUngly(num)){
      count++;
    }
  }
  return num;
}


