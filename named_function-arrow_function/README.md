## Benchmark
 
```
named
Raw:
 > 1606.3936063936064
 > 1643.3566433566434
 > 1672.3276723276724
 > 1587.4125874125873
Average (mean) 1627.3726273726274

arrow
Raw:
 > 1625.3746253746253
 > 1620.3796203796203
 > 1598.4015984015984
 > 1633.3666333666333
Average (mean) 1619.3806193806195

Winner: named
Compared with next highest (arrow), it's:
0.49% faster
1 times as fast
0 order(s) of magnitude faster
BASICALLY THE SAME

```
 
## Profile summary
 
Tick-arrow
```
 [Summary]:
   ticks  total  nonlib   name
   7021   74.4%   75.0%  JavaScript
   2343   24.8%   25.0%  C++
   1031   10.9%   11.0%  GC
     76    0.8%          Shared libraries
```
 
Tick-named
```
 [Summary]:
   ticks  total  nonlib   name
   7324   77.4%   78.1%  JavaScript
   2050   21.7%   21.9%  C++
    848    9.0%    9.0%  GC
     85    0.9%          Shared libraries
```
 
