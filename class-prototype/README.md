## Benchmark
 
```
prototype
Raw:
 > 162181.81818181818
 > 163516.4835164835
 > 163171.82817182818
 > 162651.34865134864
Average (mean) 162880.36963036962

class
Raw:
 > 139810.1898101898
 > 140198.8011988012
 > 139901.0989010989
 > 140025.97402597402
Average (mean) 139984.015984016

Winner: prototype
Compared with next highest (class), it's:
14.06% faster
1.16 times as fast
0.07 order(s) of magnitude faster
A LITTLE FASTER

```
 
## Benchmark 2
 
```
class x 105,144,316 ops/sec ±1.06% (91 runs sampled)
prototype x 107,131,846 ops/sec ±1.01% (92 runs sampled)
Fastest is: prototype
[Node.js 6.9.1 on Linux 64-bit]
```
 
## Profile summary
 
Tick-class
```
 [Summary]:
   ticks  total  nonlib   name
   6221   65.3%   82.8%  JavaScript
    528    5.5%    7.0%  C++
      8    0.1%    0.1%  GC
   2021   21.2%          Shared libraries
```
 
Tick-prototype
```
 [Summary]:
   ticks  total  nonlib   name
   6228   65.4%   84.3%  JavaScript
    507    5.3%    6.9%  C++
      5    0.1%    0.1%  GC
   2140   22.5%          Shared libraries
```
 
