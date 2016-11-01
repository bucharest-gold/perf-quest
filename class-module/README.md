## Benchmark
 
```
class
Raw:
 > 163179.82017982018
 > 164937.06293706293
 > 163919.0809190809
 > 160949.05094905096
Average (mean) 163246.25374625373

module
Raw:
 > 21452.547452547453
 > 21079.92007992008
 > 21373.626373626375
 > 21201.798201798203
Average (mean) 21276.973026973028

Winner: class
Compared with next highest (module), it's:
86.97% faster
7.67 times as fast
0.88 order(s) of magnitude faster
QUITE A BIT FASTER

```
 
## Benchmark 2
 
```
class x 105,183,428 ops/sec ±1.21% (93 runs sampled)
module x 19,621,550 ops/sec ±0.48% (94 runs sampled)
Fastest is: class
[Node.js 6.9.1 on Linux 64-bit]
```
 
## Profile summary
 
Tick-class
```
 [Summary]:
   ticks  total  nonlib   name
   6192   65.0%   82.3%  JavaScript
    568    6.0%    7.5%  C++
     11    0.1%    0.1%  GC
   2001   21.0%          Shared libraries
```
 
Tick-module
```
 [Summary]:
   ticks  total  nonlib   name
   7453   79.0%   83.0%  JavaScript
   1061   11.2%   11.8%  C++
    319    3.4%    3.6%  GC
    458    4.9%          Shared libraries
```
 
