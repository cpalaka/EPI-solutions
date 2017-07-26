//Dutch national flag problem

#include <iostream>
#include <cstdlib>
#include <ctime>
#include <utility>
#include <cassert>

void dutch(int* A, const int &size, int &pivot);
void printarr(int* A, const int size);

int main(int argc, char* argv[]) {
    srand(time(0));

    //initialize a random array (elements range from 0-100) of random size(10-20)
    int size = 10;// + rand()%11;
    int A[size];
    //int test[size] = {10,42,77,35,15,65,0,35,43,52}; troublesome example with pivot = 7

    for(int i = 0; i<size; ++i) {
        A[i] = rand()%100;
    }

    //print random array
    std::cout<<">: ";
    printarr(A, size);

    //choose a random pivot
    int pivot = rand()%size;

    //test
   // pivot = 7;

    //partition the array according to the dutch national flag problem
    dutch(A, size, pivot);

    std::cout<<"Final: ";
    printarr(A, size);
    return 0;
}

void dutch(int* A, const int &size, int &pivot) {
    std::cout<<"pivot: "<<pivot<<", "<<A[pivot]<<std::endl;
   
    int L = 0;
    int R = size-1;
    int iter = 0;

    //frame the array correctly so that pivot is at the correct location
    int left = 0, right=0, same = 0;
    for(int i=0; i<size; ++i) {
        if(A[i] < A[pivot]) left++;
        if(A[i] == A[pivot]) same++;
    }

    std::swap(A[pivot], A[left+same-1]);
    pivot = left+same-1;

    std::cout<<"New pivot: "<<pivot<<std::endl;

    //use left and right pointers to find incorrect numbers and swap them 
    while(A[L] != A[pivot] && A[R] != A[pivot]) 
    {
        while(A[L] < A[pivot]) 
        {
            L++;
        }

        while(A[R] > A[pivot]) 
        {
            R--;
        }

        std::swap(A[L], A[R]);

        std::cout<<iter<<": ";
        printarr(A, size);
        std::cout<<std::endl;
        std::cout<<"L: "<<L<<" R: "<<R<<std::endl;
        iter++;
   }
}

void printarr(int* A, const int size) {
    for(int i = 0; i<size; ++i) {
        std::cout<<A[i]<<" ";
    }
    std::cout<<std::endl;
}