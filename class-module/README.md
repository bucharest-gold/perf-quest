## Benchmark
 
```
class
Raw:
 > 145987.01298701297
 > 154653.34665334664
 > 160453.54645354644
 > 160267.73226773227
Average (mean) 155340.4095904096

module
Raw:
 > 65714.28571428571
 > 65350.64935064935
 > 68384.61538461539
 > 70466.53346653347
Average (mean) 67479.02097902098

Winner: class
Compared with next highest (module), it's:
56.56% faster
2.3 times as fast
0.36 order(s) of magnitude faster
QUITE A BIT FASTER

```
 
## Profile summary
 
Tick-class
```
 [Summary]:
   ticks  total  nonlib   name
   5502   57.9%   81.4%  JavaScript
    494    5.2%    7.3%  C++
     11    0.1%    0.2%  GC
   2738   28.8%          Shared libraries
```
 
Tick-module
```
 [Summary]:
   ticks  total  nonlib   name
   6960   73.4%   85.6%  JavaScript
    320    3.4%    3.9%  C++
      5    0.1%    0.1%  GC
   1356   14.3%          Shared libraries
```
 
