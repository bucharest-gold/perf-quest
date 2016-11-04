## Benchmark
 
```
Symbol
Raw:
 > 126807.19280719281
 > 129034.96503496503
 > 128523.47652347652
 > 48472.882968601334
Average (mean) 108209.62933355893

WeakMap
Raw:
 > 489.6042924211938
 > 994.005994005994
 > 1011.4832535885167
 > 448.14814814814815
Average (mean) 735.8104220409632

Winner: Symbol
Compared with next highest (WeakMap), it's:
99.32% faster
147.06 times as fast
2.17 order(s) of magnitude faster
A LOT FASTER

```
 
## Benchmark 2
 
```
WeakMap x 742,482 ops/sec ±25.62% (38 runs sampled)
Symbol x 88,700,623 ops/sec ±1.74% (84 runs sampled)
Fastest is: Symbol
[Node.js 6.9.1 on Linux 64-bit]
```
 
## Profile summary
 
Tick-Weakmap
```
 [Summary]:
   ticks  total  nonlib   name
    854    8.3%    8.4%  JavaScript
   9134   88.8%   89.4%  C++
   3351   32.6%   32.8%  GC
     71    0.7%          Shared libraries
```
 
Tick-Symbol
```
 [Summary]:
   ticks  total  nonlib   name
      0    0.0%    0.0%  JavaScript
    710    7.7%   10.5%  C++
     17    0.2%    0.3%  GC
   2451   26.7%          Shared libraries
```
 
