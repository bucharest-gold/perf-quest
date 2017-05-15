## Benchmark
 
```
Symbol
Raw:
 > 137713.2867132867
 > 138199.8001998002
 > 132657.34265734267
 > 135792.2077922078
Average (mean) 136090.65934065936

WeakMap
Raw:
 > 1750.2497502497502
 > 343.701399688958
 > 1559.659090909091
 > 1476.4107308048103
Average (mean) 1282.5052429131524

Winner: Symbol
Compared with next highest (WeakMap), it's:
99.06% faster
106.11 times as fast
2.03 order(s) of magnitude faster
A LOT FASTER

```
 
## Benchmark 2
 
```
WeakMap x 1,137,180 ops/sec ±39.06% (41 runs sampled)
Symbol x 88,229,311 ops/sec ±1.62% (82 runs sampled)
Fastest is: Symbol
[null]
```
 
## Profile summary
 
Tick-Weakmap
```
 [Summary]:
   ticks  total  nonlib   name
   1247   12.1%   12.2%  JavaScript
   8669   84.4%   84.7%  C++
   4696   45.7%   45.9%  GC
     38    0.4%          Shared libraries
```
 
Tick-Symbol
```
 [Summary]:
   ticks  total  nonlib   name
   6787   72.4%   86.3%  JavaScript
    385    4.1%    4.9%  C++
      8    0.1%    0.1%  GC
   1508   16.1%          Shared libraries
```
 
