#include <iostream>
#include <vector>

using namespace std;

class Graph {
   private:
     vector<pair<pair<int,int>, int >> edges;
     vector<int> vertices;
     bool isExists(int first, int second){
       for(){
         start->first.first == first &&
         start->first.second == second
         start->first.second == first &&
         start->first.first == second
       }
     }
   public:
     void addEdges(int first, int second, int weight){
        if(!isExists(first,second)){
            pair<int, int> edge(first, second);
            edges.push_back(pair(first, second));
        }
     }
};


int main(){
  int v = 6;
  int arr[10][10];
  add_edge(arr,0, 4);
  add_edge(arr,0, 3);
  add_edge(arr,1, 2);
  add_edge(arr,1, 4);
  add_edge(arr,1, 5);
  add_edge(arr,2, 3);
  add_edge(arr,2, 5);
  add_edge(arr,5, 3);
//  add_edge(arr,5, 4);
  printMat(arr,v);
}








