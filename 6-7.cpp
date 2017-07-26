//Buy and sell a stock once

#include <iostream>
#include <cstdlib>

int main(int argc, char* argv[]) {
    int size = 10;
    int A[size] = {310, 315, 275, 295, 270, 260, 290, 230, 255, 250};

    int lowest_diff = 0;
    int l_ind = 0, r_ind = 0;
    int low_val = A[0], low_val_ind = 0;

    for(int i = 1; i<size; ++i) {
        if(A[i] - low_val >= lowest_diff) {
            if(A[i]-low_val > 0) {
                l_ind = low_val_ind;
                r_ind = i;
                lowest_diff = A[i] - low_val;
            }
        } 

       // std::cout<<"Current Low: "<<A[i] - low_val<<std::endl;

        if(A[i] < low_val)
        {
            low_val = A[i];
            low_val_ind = i;
        }
        //std::cout<<i<<": "<<" Buy: "<<l_ind<<" Sell: "<<r_ind<<" Lowest: "<<low_val<<" Lowest ind: "<<low_val_ind<<std::endl;
    }

    std::cout<<"Lowest difference: "<<lowest_diff<<std::endl;
    std::cout<<"Buy on: Day "<<l_ind+1<<std::endl<<"Sell on: Day "<<r_ind+1;

}