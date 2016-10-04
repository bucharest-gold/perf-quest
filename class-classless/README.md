## Benchmark
 
```
class
Raw:
 > 124452.54745254746
 > 129103.8961038961
 > 130160.83916083915
 > 136404.5954045954
Average (mean) 130030.46953046953

classless
Raw:
 > 10540.45954045954
 > 9959.04095904096
 > 12291.708291708292
 > 12415.584415584415
Average (mean) 11301.698301698301

Winner: class
Compared with next highest (classless), it's:
91.31% faster
11.51 times as fast
1.06 order(s) of magnitude faster
A LOT FASTER

```
 
## Profile summary
 
Tick-class
```
 [Summary]:
   ticks  total  nonlib   name
   5701   60.5%   80.6%  JavaScript
    708    7.5%   10.0%  C++
      6    0.1%    0.1%  GC
   2355   25.0%          Shared libraries
```
 
Tick-classless
```
 [Summary]:
   ticks  total  nonlib   name
   3292   34.8%   36.1%  JavaScript
   5155   54.5%   56.6%  C++
    228    2.4%    2.5%  GC
    353    3.7%          Shared libraries
```
 
