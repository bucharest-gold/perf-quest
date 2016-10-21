## Benchmark
 
```
class
Raw:
 > 158024.97502497502
 > 157733.26673326673
 > 157851.14885114884
 > 157835.16483516485
Average (mean) 157861.13886113887

module
Raw:
 > 21571.428571428572
 > 21576.42357642358
 > 21915.084915084914
 > 22026.973026973028
Average (mean) 21772.477522477522

Winner: class
Compared with next highest (module), it's:
86.21% faster
7.25 times as fast
0.86 order(s) of magnitude faster
QUITE A BIT FASTER

```
 
## Profile summary
 
Tick-class
```
 [Summary]:
   ticks  total  nonlib   name
   5679   59.6%   80.9%  JavaScript
    609    6.4%    8.7%  C++
      5    0.1%    0.1%  GC
   2514   26.4%          Shared libraries
```
 
Tick-module
```
 [Summary]:
   ticks  total  nonlib   name
   7220   76.3%   81.7%  JavaScript
   1088   11.5%   12.3%  C++
    330    3.5%    3.7%  GC
    627    6.6%          Shared libraries
```
 
