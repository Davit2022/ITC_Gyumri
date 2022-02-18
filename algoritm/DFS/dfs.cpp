#include <iostream>                                                         
#include <list>
#include <map>
#include <queue>
#include <algorithm>
using namespace std; 
class Graph {
    map<int, list<int>> l;
 
 public:
     void addEdge(int x, int y){
         l[x].push_back(y);
         l[y].push_back(x);
      }
  
     void dfs(int src){
        map<int, int> visited;
        visited[src] = true;
        cout << src <<" ";
        list<int> our_list = l[src]; 
       for (int i = 0; i < our_list.size(); i++){
          list<int>::iterator it = our_list.begin();
          std::advance(it, i);
          if (!visited[*it]) {
              dfs(*it);
           }
        }
       cout << endl;
     }
 };


int main(){
    Graph g;
    g.addEdge(0, 1);
    g.addEdge(1, 2);
    g.addEdge(2, 3);
    g.addEdge(3, 4); 
    g.dfs(3);
    return 0;
}                   






