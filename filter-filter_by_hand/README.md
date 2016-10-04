## Benchmark
 
```
filterByHand
Raw:
 > 18203.796203796202
 > 18307.69230769231
 > 18639.36063936064
 > 18612.38761238761
Average (mean) 18440.80919080919

filterr
Raw:
 > 2040.959040959041
 > 2050.949050949051
 > 2050.949050949051
 > 2046.9530469530469
Average (mean) 2047.4525474525476

Winner: filterByHand
Compared with next highest (filterr), it's:
88.9% faster
9.01 times as fast
0.95 order(s) of magnitude faster
QUITE A BIT FASTER

```
 
## Profile summary
 
Tick-filter
```
 [Summary]:
   ticks  total  nonlib   name
   3123   32.9%   33.2%  JavaScript
   5638   59.4%   59.9%  C++
    330    3.5%    3.5%  GC
     85    0.9%          Shared libraries
```
 
Tick-filter_by_hand
```
 [Summary]:
   ticks  total  nonlib   name
   7675   82.0%   87.3%  JavaScript
    516    5.5%    5.9%  C++
    232    2.5%    2.6%  GC
    564    6.0%          Shared libraries
```
 
