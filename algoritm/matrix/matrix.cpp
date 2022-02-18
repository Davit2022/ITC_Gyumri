#include <iostream>
using namespace std;

void matrixSum(int[3][3],int[3][3]);
void matrixMult(int[3][3],int[3][3]);

int main(){
  int a[3][3] = {
                {1,1,1},
                {1,1,1},
                {1,1,1},      
    };
  int b[3][3] = {
                {2,2,2},
                {2,2,2},
                {2,2,2},      
    };
  for(int i = 0;i< 3;i++){
    for(int j = 0;j<3;j++){
      cout << a[i][j] <<" ";
    }
    cout <<"\n";
  }
  cout <<"\n";
  for(int i = 0;i< 3;i++){
    for(int j = 0;j<3;j++){
      cout << b[i][j] <<" ";
    }
    cout <<"\n";
  }

  matrixSum(a,b);
  matrixMult(a,b);
}

void matrixSum(int a[3][3],int b[3][3]){
   int c[3][3];
   cout << "Sum of matrix element" <<"\n";
   for(int i = 0;i < 3; i++){
     for(int j = 0;j < 3; j++){
       c[i][j] = a[i][j] + b[i][j];
       cout << c[i][j] <<" ";
     }
     cout <<"\n";
   }
   
   int min = c[0][0];
   int max = c[0][0]; 
   for(int i= 0;i< 3;i++){
    for(int j = 0;j< 3;j++){
      if(min > c[i][j]){
         min = c[i][j];
      }
      if(max < c[i][j]){
         max = c[i][j];
      }  
     }
   }
  cout <<"Minimum element: " << min <<"\n";
  cout <<"Maximum element: " << max <<"\n";
}


void matrixMult(int a[3][3],int b[3][3]){
   int c[3][3];
   cout << "Multiplication of matrix element" <<"\n";
   for(int i = 0;i < 3;i++){
     for(int j = 0; j < 3; j++){
      // c[i][j]=1;
       for(int k = 0;k < 3;k++){
         c[i][j] += a[i][k] * b[k][j];
       }
     }
   }

   for(int i = 0;i<3;i++){
    for(int j = 0;j < 3;j++){
      cout << c[i][j] <<" ";
    }
    cout <<"\n";
  }
}


