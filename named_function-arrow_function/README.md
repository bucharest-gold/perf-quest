## Benchmark
 
```
named
Raw:
 > 924.075924075924
 > 926.073926073926
 > 902.0979020979021
 > 898.1018981018981
Average (mean) 912.5874125874125

arrow
Raw:
 > 909.0909090909091
 > 879.2415169660678
 > 889.1108891108892
 > 895.2095808383234
Average (mean) 893.1632240015474

Winner: named
Compared with next highest (arrow), it's:
2.13% faster
1.02 times as fast
0.01 order(s) of magnitude faster
A LITTLE FASTER

```
 
## Benchmark 2
 
```
named x 903,707 ops/sec ±0.63% (88 runs sampled)
arrow x 902,548 ops/sec ±0.84% (89 runs sampled)
Fastest is: named,arrow
[null]
```
 
## Profile summary
 
Tick-arrow
```
 [Summary]:
   ticks  total  nonlib   name
   4323   46.1%   46.2%  JavaScript
   4417   47.1%   47.2%  C++
    250    2.7%    2.7%  GC
     16    0.2%          Shared libraries
```
 
Tick-named
```
 [Summary]:
   ticks  total  nonlib   name
   4172   44.6%   44.7%  JavaScript
   4529   48.4%   48.5%  C++
    230    2.5%    2.5%  GC
     17    0.2%          Shared libraries
```
 
