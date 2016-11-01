## Benchmark
 
```
no_extra_hidden
Raw:
 > 166136.86313686313
 > 165678.3216783217
 > 165150.84915084916
 > 165347.65234765236
Average (mean) 165578.42157842158

hidden
Raw:
 > 44853.146853146856
 > 44624.37562437562
 > 44835.16483516483
 > 44641.35864135864
Average (mean) 44738.51148851149

Winner: no_extra_hidden
Compared with next highest (hidden), it's:
72.98% faster
3.7 times as fast
0.57 order(s) of magnitude faster
QUITE A BIT FASTER

```
 
## Benchmark 2
 
```
hidden x 106,963,362 ops/sec ±1.11% (90 runs sampled)
no_extra_hidden x 107,504,967 ops/sec ±1.04% (90 runs sampled)
Fastest is: no_extra_hidden
[Node.js 6.9.1 on Linux 64-bit]
```
 
## Profile summary
 
Tick-hidden
```
 [Summary]:
   ticks  total  nonlib   name
   6291   67.4%   83.2%  JavaScript
    611    6.5%    8.1%  C++
      9    0.1%    0.1%  GC
   1773   19.0%          Shared libraries
```
 
Tick-no_extra_hidden
```
 [Summary]:
   ticks  total  nonlib   name
   6558   69.9%   85.1%  JavaScript
    459    4.9%    6.0%  C++
      6    0.1%    0.1%  GC
   1674   17.9%          Shared libraries
```
 
