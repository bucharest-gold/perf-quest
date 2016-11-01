## Benchmark
 
```
named
Raw:
 > 363.6363636363636
 > 367.2654690618763
 > 363.6363636363636
 > 366.6333666333666
Average (mean) 365.29289074199255

arrow
Raw:
 > 355.2894211576846
 > 367.2654690618763
 > 367.2654690618763
 > 368.2634730538922
Average (mean) 364.5209580838323

Winner: named
Compared with next highest (arrow), it's:
0.21% faster
1 times as fast
0 order(s) of magnitude faster
BASICALLY THE SAME

```
 
## Benchmark 2
 
```
named x 357,153 ops/sec ±0.58% (93 runs sampled)
arrow x 353,594 ops/sec ±0.49% (89 runs sampled)
Fastest is: named
[Node.js 6.9.1 on Linux 64-bit]
```
 
## Profile summary
 
Tick-arrow
```
 [Summary]:
   ticks  total  nonlib   name
   1828   19.1%   19.2%  JavaScript
   7067   73.9%   74.1%  C++
    280    2.9%    2.9%  GC
     19    0.2%          Shared libraries
```
 
Tick-named
```
 [Summary]:
   ticks  total  nonlib   name
   1772   18.6%   18.6%  JavaScript
   7089   74.3%   74.5%  C++
    311    3.3%    3.3%  GC
     29    0.3%          Shared libraries
```
 
