## Benchmark
 
```
mapByHand
Raw:
 > 16277.722277722278
 > 16198.801198801199
 > 16268.731268731268
 > 16379.620379620379
Average (mean) 16281.21878121878

mapp
Raw:
 > 536.4635364635365
 > 552.8942115768463
 > 549.4505494505495
 > 553.4465534465535
Average (mean) 548.0637127343714

Winner: mapByHand
Compared with next highest (mapp), it's:
96.63% faster
29.71 times as fast
1.47 order(s) of magnitude faster
A LOT FASTER

```
 
## Benchmark 2
 
```
map x 496,684 ops/sec ±3.49% (84 runs sampled)
mapByHand x 12,389,627 ops/sec ±6.60% (75 runs sampled)
Fastest is: mapByHand
[Node.js 6.9.1 on Linux 64-bit]
```
 
## Profile summary
 
Tick-map
```
 [Summary]:
   ticks  total  nonlib   name
   1395   14.7%   14.8%  JavaScript
   7387   77.7%   78.2%  C++
    237    2.5%    2.5%  GC
     58    0.6%          Shared libraries
```
 
Tick-map_by_hand
```
 [Summary]:
   ticks  total  nonlib   name
   7839   83.1%   87.9%  JavaScript
    526    5.6%    5.9%  C++
    304    3.2%    3.4%  GC
    524    5.6%          Shared libraries
```
 
