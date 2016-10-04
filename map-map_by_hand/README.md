## Benchmark
 
```
mapByHand
Raw:
 > 17681.31868131868
 > 17766.233766233767
 > 17764.235764235764
 > 17260.73926073926
Average (mean) 17618.131868131866

mapp
Raw:
 > 1719.2807192807193
 > 1721.2787212787214
 > 1721.2787212787214
 > 1617.3826173826174
Average (mean) 1694.8051948051948

Winner: mapByHand
Compared with next highest (mapp), it's:
90.38% faster
10.4 times as fast
1.02 order(s) of magnitude faster
A LOT FASTER

```
 
## Profile summary
 
Tick-map
```
 [Summary]:
   ticks  total  nonlib   name
   2805   29.4%   29.6%  JavaScript
   5997   62.8%   63.2%  C++
    267    2.8%    2.8%  GC
     66    0.7%          Shared libraries
```
 
Tick-map_by_hand
```
 [Summary]:
   ticks  total  nonlib   name
   7811   82.5%   87.5%  JavaScript
    520    5.5%    5.8%  C++
    247    2.6%    2.8%  GC
    539    5.7%          Shared libraries
```
 
