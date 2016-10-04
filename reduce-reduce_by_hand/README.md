## Benchmark
 
```
reducee
Raw:
 > 9980.01998001998
 > 9993.006993006993
 > 9916.083916083917
 > 9872.127872127872
Average (mean) 9940.30969030969

reduceByHand
Raw:
 > 9279.720279720279
 > 9282.717282717284
 > 9283.716283716283
 > 9275.724275724277
Average (mean) 9280.46953046953

Winner: reducee
Compared with next highest (reduceByHand), it's:
6.64% faster
1.07 times as fast
0.03 order(s) of magnitude faster
A LITTLE FASTER

```
 
## Profile summary
 
Tick-reduce
```
 [Summary]:
   ticks  total  nonlib   name
   7696   81.0%   83.5%  JavaScript
    835    8.8%    9.1%  C++
    650    6.8%    7.0%  GC
    281    3.0%          Shared libraries
```
 
Tick-reduce_by_hand
```
 [Summary]:
   ticks  total  nonlib   name
   8802   92.9%   95.2%  JavaScript
    312    3.3%    3.4%  C++
      4    0.0%    0.0%  GC
    231    2.4%          Shared libraries
```
 
