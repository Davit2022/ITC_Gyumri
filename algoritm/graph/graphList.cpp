#include <iostream>                                                         
#include <vector>
#include <utility>
#include <algorithm>
   
class Graph {
   private:
       std::vector<std::pair<int, int>> edges;
       std::vector<int> vertexes;
       bool checkEdgeExistance(int vertex1, int vertex2){
         for(int i = 0;i<edges.size();i++){
           if((edges[i].first == vertex1 &&
               edges[i].second == vertex2) ||
               (edges[i].first == vertex2 &&
               edges[i].second == vertex1)){
                return true;
             }
         }
         return false;
       };
       bool checkVertexExistance(int vertex){
         for(int i = 0;i<vertexes.size();i++){
           if(vertex == vertexes[i]){
              return true;
           }
          }
          return false;
        }
   public:
       void add_vertex(int vertex){
         if(!checkVertexExistance(vertex)){
           vertexes.push_back(vertex);
          // std::cout << "Vertex\n";
         }
       }

       void add_edge(int vertex1, int vertex2){ 
         if(!checkEdgeExistance(vertex1,vertex2) &&
            vertex1 != vertex2){
            std::pair<int,int> new_edge(vertex1, vertex2);
            edges.push_back(new_edge);
           // std::cout << "push\n";
         }
       } 

       void add_edge(std::pair<int, int> edge){
          if(!checkEdgeExistance(edge.first,edge.second) &&
             edge.first != edge.second){
             edges.push_back(edge);
             // std::cout << "push\n";
           }
       };

       void print_graph(){
         for(int i = 0;i < edges.size();i++){
           std::cout << "(" << edges[i].first <<", "
           << edges[i].second <<")";
         }
         std::cout <<"\n";
         for(int i = 0;i<vertexes.size();i++){
           for(int j = 0;j<edges.size();j++){
             if(){}
           }
         }
       };
      // Graph();
      // Graph(const Graph &graph);
};
  
  
  
int main(){
  Graph graph = Graph();
  graph.add_edge(1,2);
  graph.add_edge(1,0);
  graph.add_edge(2,2);
  graph.add_edge(2,1);
  graph.add_vertex(1);
  graph.add_vertex(2);
  graph.add_vertex(1);
  graph.print_graph();

}




