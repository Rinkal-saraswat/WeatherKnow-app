// 
#include<bits/stdc++.h>
using namespace std;
int lonelyinteger(vector<int> a) {
    map<int,int>mp;
    int nu;
    int n =a.size();
    for(int i=0;i<n;i++)
    {
        mp[a[i]]++;
    }
    for(auto it=mp.begin();it!=mp.end();it++)
    {
        if(it->second==1)
        {
             nu= it->first;
        }
    }
    return nu;
}
int main(){
vector<int>ar={1,2,3,4,2,5,9};
int num =lonelyinteger(ar);
cout<<num;

}
