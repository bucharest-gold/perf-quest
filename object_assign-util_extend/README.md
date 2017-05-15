## Benchmark
 
```
Extend
Raw:
 > 7789.210789210789
 > 8104.895104895105
 > 8094.905094905095
 > 8235.764235764236
Average (mean) 8056.193806193806

Assign
Raw:
 > 5975.024975024975
 > 6209.79020979021
 > 6105.894105894105
 > 6235.764235764236
Average (mean) 6131.618381618381

Winner: Extend
Compared with next highest (Assign), it's:
23.89% faster
1.31 times as fast
0.12 order(s) of magnitude faster
A LITTLE FASTER

```
 
## Benchmark 2
 
```
Assign x 5,565,803 ops/sec ±0.75% (92 runs sampled)
Extend x 7,118,612 ops/sec ±1.34% (85 runs sampled)
Fastest is: Extend
[null]
```
 
## Profile summary
 
Tick-Assign
```
 [Summary]:
   ticks  total  nonlib   name
    710    7.6%    7.6%  JavaScript
   8025   85.5%   86.4%  C++
     31    0.3%    0.3%  GC
    104    1.1%          Shared libraries
```
 
Tick-Extend
```
 [Summary]:
   ticks  total  nonlib   name
   4157   44.4%   44.9%  JavaScript
   4505   48.1%   48.6%  C++
     92    1.0%    1.0%  GC
    105    1.1%          Shared libraries
```
 
