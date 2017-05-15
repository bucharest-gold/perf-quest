## Benchmark
 
```
for
Raw:
 > 4.672897196261682
 > 4.545454545454546
 > 4.84027105517909
 > 4.616805170821792
Average (mean) 4.668856991929277

forEach
Raw:
 > 0.6688963210702341
 > 0.6605019815059445
 > 0.6583278472679395
 > 0.6544502617801047
Average (mean) 0.6605441029060557

Winner: for
Compared with next highest (forEach), it's:
85.85% faster
7.07 times as fast
0.85 order(s) of magnitude faster
QUITE A BIT FASTER

```
 
## Benchmark 2
 
```
forEach x 652 ops/sec ±0.84% (89 runs sampled)
for x 4,506 ops/sec ±0.94% (85 runs sampled)
Fastest is: for
[null]
```
 
## Profile summary
 
Tick-for
```
 [Summary]:
   ticks  total  nonlib   name
   9971   99.3%   99.3%  JavaScript
     58    0.6%    0.6%  C++
      1    0.0%    0.0%  GC
      2    0.0%          Shared libraries
```
 
Tick-foreach
```
 [Summary]:
   ticks  total  nonlib   name
  13371   95.4%   95.4%  JavaScript
     61    0.4%    0.4%  C++
      2    0.0%    0.0%  GC
      1    0.0%          Shared libraries
```
 
