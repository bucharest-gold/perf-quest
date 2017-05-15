## Benchmark
 
```
prototype
Raw:
 > 153309.6903096903
 > 156191.8081918082
 > 163612.38761238763
 > 161768.23176823178
Average (mean) 158720.52947052947

class
Raw:
 > 153030.96903096902
 > 150089.9100899101
 > 158000.999000999
 > 151661.33866133867
Average (mean) 153195.8041958042

Winner: prototype
Compared with next highest (class), it's:
3.48% faster
1.04 times as fast
0.02 order(s) of magnitude faster
A LITTLE FASTER

```
 
## Benchmark 2
 
```
class x 93,904,507 ops/sec ±1.19% (86 runs sampled)
prototype x 91,929,799 ops/sec ±1.08% (88 runs sampled)
Fastest is: class
[null]
```
 
## Profile summary
 
Tick-class
```
 [Summary]:
   ticks  total  nonlib   name
   6275   67.0%   81.9%  JavaScript
    405    4.3%    5.3%  C++
      6    0.1%    0.1%  GC
   1712   18.3%          Shared libraries
```
 
Tick-prototype
```
 [Summary]:
   ticks  total  nonlib   name
   6600   70.4%   85.9%  JavaScript
    377    4.0%    4.9%  C++
      4    0.0%    0.1%  GC
   1693   18.1%          Shared libraries
```
 
