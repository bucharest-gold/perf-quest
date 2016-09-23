## Benchmark
 
```
prototype
Raw:
 > 203535.46453546453
 > 203623.37662337662
 > 202730.26973026973
 > 202700.2997002997
Average (mean) 203147.35264735267

class
Raw:
 > 119770.22977022977
 > 116597.4025974026
 > 117657.34265734266
 > 118331.66833166833
Average (mean) 118089.16083916085

Winner: prototype
Compared with next highest (class), it's:
41.87% faster
1.72 times as fast
0.24 order(s) of magnitude faster
A LITTLE FASTER

```
 
## Profile summary
 
Tick-class
```
 [Summary]:
   ticks  total  nonlib   name
   6837   72.2%   88.4%  JavaScript
    896    9.5%   11.6%  C++
    270    2.9%    3.5%  GC
   1731   18.3%          Shared libraries
```
 
Tick-prototype
```
 [Summary]:
   ticks  total  nonlib   name
   6529   68.7%   88.9%  JavaScript
    812    8.5%   11.1%  C++
      8    0.1%    0.1%  GC
   2158   22.7%          Shared libraries
```
 
