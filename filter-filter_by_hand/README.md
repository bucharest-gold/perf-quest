## Benchmark
 
```
filterByHand
Raw:
 > 16506.493506493505
 > 17690.309690309692
 > 15129.87012987013
 > 17397.602397602397
Average (mean) 16681.068931068934

filterr
Raw:
 > 646.3536463536464
 > 651.3486513486514
 > 627.3726273726273
 > 610.7784431137725
Average (mean) 633.9633420471744

Winner: filterByHand
Compared with next highest (filterr), it's:
96.2% faster
26.31 times as fast
1.42 order(s) of magnitude faster
A LOT FASTER

```
 
## Benchmark 2
 
```
filterr x 620,418 ops/sec ±2.46% (88 runs sampled)
filterByHand x 15,345,404 ops/sec ±3.67% (87 runs sampled)
Fastest is: filterByHand
[Node.js 6.9.1 on Linux 64-bit]
```
 
## Profile summary
 
Tick-filter
```
 [Summary]:
   ticks  total  nonlib   name
   1466   15.4%   15.5%  JavaScript
   7336   77.2%   77.5%  C++
    228    2.4%    2.4%  GC
     42    0.4%          Shared libraries
```
 
Tick-filter_by_hand
```
 [Summary]:
   ticks  total  nonlib   name
   7900   83.9%   87.4%  JavaScript
    551    5.9%    6.1%  C++
    327    3.5%    3.6%  GC
    377    4.0%          Shared libraries
```
 
