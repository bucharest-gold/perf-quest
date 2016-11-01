## Benchmark
 
```
for
Raw:
 > 4.721435316336166
 > 4.921259842519685
 > 4.694835680751174
 > 4.587155963302752
Average (mean) 4.731171700727444

forEach
Raw:
 > 0.06847439057792386
 > 0.06854479402289396
 > 0.06808742425274052
 > 0.06510416666666667
Average (mean) 0.06755269388005625

Winner: for
Compared with next highest (forEach), it's:
98.57% faster
70.04 times as fast
1.85 order(s) of magnitude faster
A LOT FASTER

```
 
## Benchmark 2
 
```
forEach x 68.21 ops/sec ±1.52% (68 runs sampled)
for x 4,719 ops/sec ±0.93% (87 runs sampled)
Fastest is: for
[Node.js 6.9.1 on Linux 64-bit]
```
 
## Profile summary
 
Tick-for
```
 [Summary]:
   ticks  total  nonlib   name
  10373   99.1%   99.1%  JavaScript
     83    0.8%    0.8%  C++
      4    0.0%    0.0%  GC
      7    0.1%          Shared libraries
```
 
Tick-foreach
```
 [Summary]:
   ticks  total  nonlib   name
  15930    8.7%    8.7%  JavaScript
  156835   85.7%   85.7%  C++
    149    0.1%    0.1%  GC
     10    0.0%          Shared libraries
```
 
