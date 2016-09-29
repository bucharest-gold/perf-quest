## Benchmark
 
```
for
Raw:
 > 4.317789291882556
 > 4.317789291882556
 > 4.306632213608958
 > 4.306632213608958
Average (mean) 4.312210752745757

forEach
Raw:
 > 0.17882689556509299
 > 0.1765536723163842
 > 0.1772421127259837
 > 0.176772140710624
Average (mean) 0.1773487053295212

Winner: for
Compared with next highest (forEach), it's:
95.89% faster
24.31 times as fast
1.39 order(s) of magnitude faster
A LOT FASTER

```
 
## Profile summary
 
Tick-for
```
 [Summary]:
   ticks  total  nonlib   name
  10780   99.2%   99.2%  JavaScript
     83    0.8%    0.8%  C++
      5    0.0%    0.0%  GC
      9    0.1%          Shared libraries
```
 
Tick-foreach
```
 [Summary]:
   ticks  total  nonlib   name
  30327   45.8%   45.8%  JavaScript
  35907   54.2%   54.2%  C++
      2    0.0%    0.0%  GC
      4    0.0%          Shared libraries
```
 
