## Benchmark
 
```
reducee
Raw:
 > 9373.626373626374
 > 9162.837162837162
 > 9398.601398601399
 > 9387.612387612387
Average (mean) 9330.66933066933

reduceByHand
Raw:
 > 9159.84015984016
 > 8938.061938061937
 > 8824.175824175823
 > 9112.887112887112
Average (mean) 9008.741258741258

Winner: reducee
Compared with next highest (reduceByHand), it's:
3.45% faster
1.04 times as fast
0.02 order(s) of magnitude faster
A LITTLE FASTER

```
 
## Benchmark 2
 
```
reduce x 8,551,368 ops/sec ±2.69% (91 runs sampled)
reduceByHand x 8,758,707 ops/sec ±0.47% (87 runs sampled)
Fastest is: reduceByHand,reduce
[Node.js 6.9.1 on Linux 64-bit]
```
 
## Profile summary
 
Tick-reduce
```
 [Summary]:
   ticks  total  nonlib   name
   7241   77.5%   80.8%  JavaScript
    964   10.3%   10.8%  C++
    728    7.8%    8.1%  GC
    381    4.1%          Shared libraries
```
 
Tick-reduce_by_hand
```
 [Summary]:
   ticks  total  nonlib   name
   8793   92.9%   95.6%  JavaScript
    270    2.9%    2.9%  C++
      7    0.1%    0.1%  GC
    274    2.9%          Shared libraries
```
 
