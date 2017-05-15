## Benchmark
 
```
reducee
Raw:
 > 7946.053946053946
 > 7805.194805194805
 > 7785.2147852147855
 > 7934.065934065934
Average (mean) 7867.632367632367

reduceByHand
Raw:
 > 6780.219780219781
 > 6664.335664335665
 > 6519.480519480519
 > 6754.245754245754
Average (mean) 6679.570429570429

Winner: reducee
Compared with next highest (reduceByHand), it's:
15.1% faster
1.18 times as fast
0.07 order(s) of magnitude faster
A LITTLE FASTER

```
 
## Benchmark 2
 
```
reduce x 6,932,332 ops/sec ±0.83% (90 runs sampled)
reduceByHand x 6,288,599 ops/sec ±0.90% (88 runs sampled)
Fastest is: reduce
[null]
```
 
## Profile summary
 
Tick-reduce
```
 [Summary]:
   ticks  total  nonlib   name
   7870   84.0%   85.0%  JavaScript
    719    7.7%    7.8%  C++
    618    6.6%    6.7%  GC
    105    1.1%          Shared libraries
```
 
Tick-reduce_by_hand
```
 [Summary]:
   ticks  total  nonlib   name
   8905   95.3%   95.9%  JavaScript
    184    2.0%    2.0%  C++
      1    0.0%    0.0%  GC
     67    0.7%          Shared libraries
```
 
