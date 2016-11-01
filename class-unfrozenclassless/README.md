## Benchmark
 
```
class
Raw:
 > 150890.1098901099
 > 151388.61138861137
 > 150447.55244755244
 > 150070.92907092907
Average (mean) 150699.3006993007

classless
Raw:
 > 26562.43756243756
 > 26920.07992007992
 > 27022.977022977022
 > 27497.502497502497
Average (mean) 27000.74925074925

Winner: class
Compared with next highest (classless), it's:
82.08% faster
5.58 times as fast
0.75 order(s) of magnitude faster
QUITE A BIT FASTER

```
 
## Benchmark 2
 
```
class x 104,078,398 ops/sec ±1.08% (89 runs sampled)
unfrozenclassless x 24,826,860 ops/sec ±0.60% (94 runs sampled)
Fastest is: class
[Node.js 6.9.1 on Linux 64-bit]
```
 
## Profile summary
 
Tick-class
```
 [Summary]:
   ticks  total  nonlib   name
   6266   65.9%   83.0%  JavaScript
    558    5.9%    7.4%  C++
      6    0.1%    0.1%  GC
   1963   20.6%          Shared libraries
```
 
Tick-unfrozenclassless
```
 [Summary]:
   ticks  total  nonlib   name
   7053   74.9%   79.8%  JavaScript
   1205   12.8%   13.6%  C++
    353    3.7%    4.0%  GC
    578    6.1%          Shared libraries
```
 
