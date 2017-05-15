## Benchmark
 
```
mapByHand
Raw:
 > 15794.205794205795
 > 16323.676323676324
 > 15974.025974025973
 > 15512.487512487513
Average (mean) 15901.0989010989

mapp
Raw:
 > 1593.4065934065934
 > 1566.4335664335665
 > 1592.4075924075923
 > 1580.4195804195804
Average (mean) 1583.1668331668332

Winner: mapByHand
Compared with next highest (mapp), it's:
90.04% faster
10.04 times as fast
1 order(s) of magnitude faster
A LOT FASTER

```
 
## Benchmark 2
 
```
map x 1,524,011 ops/sec ±0.77% (90 runs sampled)
mapByHand x 14,463,070 ops/sec ±0.93% (91 runs sampled)
Fastest is: mapByHand
[null]
```
 
## Profile summary
 
Tick-map
```
 [Summary]:
   ticks  total  nonlib   name
   2678   28.6%   28.7%  JavaScript
   5921   63.3%   63.5%  C++
    246    2.6%    2.6%  GC
     33    0.4%          Shared libraries
```
 
Tick-map_by_hand
```
 [Summary]:
   ticks  total  nonlib   name
   7984   85.4%   87.5%  JavaScript
    459    4.9%    5.0%  C++
    289    3.1%    3.2%  GC
    223    2.4%          Shared libraries
```
 
