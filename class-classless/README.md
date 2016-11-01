## Benchmark
 
```
class
Raw:
 > 155278.7212787213
 > 129457.54245754245
 > 146598.4015984016
 > 128271.72827172827
Average (mean) 139901.5984015984

classless
Raw:
 > 12363.636363636364
 > 10737.262737262738
 > 11776.223776223776
 > 11903.096903096903
Average (mean) 11695.054945054944

Winner: class
Compared with next highest (classless), it's:
91.64% faster
11.96 times as fast
1.08 order(s) of magnitude faster
A LOT FASTER

```
 
## Benchmark 2
 
```
class x 104,650,875 ops/sec ±1.37% (91 runs sampled)
classless x 11,575,987 ops/sec ±0.49% (90 runs sampled)
Fastest is: class
[Node.js 6.9.1 on Linux 64-bit]
```
 
## Profile summary
 
Tick-class
```
 [Summary]:
   ticks  total  nonlib   name
   6311   66.3%   83.9%  JavaScript
    452    4.7%    6.0%  C++
      5    0.1%    0.1%  GC
   1998   21.0%          Shared libraries
```
 
Tick-classless
```
 [Summary]:
   ticks  total  nonlib   name
   3399   36.0%   37.0%  JavaScript
   5059   53.6%   55.1%  C++
    249    2.6%    2.7%  GC
    267    2.8%          Shared libraries
```
 
