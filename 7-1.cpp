//convert number in string form to integer form
#include <iostream>

int main(int argc, char* argv[]) {

    char* s = "-789444";

    //get ascii codes for zero and minus sign
    int zero = (int)"0"[0];
    int minus = (int)"-"[0];

    //fill nums array with ascii codes for numbers 0-9
    int nums[10];
    for(int i=0; i<10; ++i) {
        nums[i] = zero++;
    }

    int num=0;
    bool neg = false;

    //traverse once through each character to find length of string
    int num_of_digits = 0;
    for(char* i=s; (*i) != '\0'; ++i) {
        num_of_digits++;
    }

    //check if number is negative
    char* start = s;
    if((int)s[0] == minus) {
        neg = true;
        start++;
        num_of_digits--;
    }

    //set up the decimal multiplier based on the number of digits (since we are reading the string left to right)
    int multiplier = 1;
    for(int i =0; i<num_of_digits-1; ++i) {
        multiplier*=10;
    }

    //loop through string character by character
    //obtain the correct number by looking for ascii code in nums array
    for(char* i = start; (*i) != '\0'; i++) {
        for(int j = 0; j<10; ++j) {
            if((int)*i == nums[j]) {
                num += j*multiplier;
                multiplier/=10;
            }
        }
    }

    //convert number to negative if necessary and print
    num = neg?-num:num;
    std::cout<<num<<std::endl;
}