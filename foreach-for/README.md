## Benchmark
 
```
for
Raw:
 > 4.280821917808219
 > 3.9800995024875623
 > 4.25531914893617
 > 4.351610095735422
Average (mean) 4.216962666241844

forEach
Raw:
 > 0.17809439002671415
 > 0.14198494959534289
 > 0.17516202487300753
 > 0.17905102954341987
Average (mean) 0.1685730985096211

Winner: for
Compared with next highest (forEach), it's:
96% faster
25.02 times as fast
1.4 order(s) of magnitude faster
A LOT FASTER

```
 
## Benchmark 2
 
```
forEach x 177 ops/sec ±0.35% (80 runs sampled)
for x 4,346 ops/sec ±0.23% (96 runs sampled)
Fastest is: for
[Node.js 4.5.0 on Linux 64-bit]
```
 
## Profile summary
 
Tick-for
```
 [Summary]:
   ticks  total  nonlib   name
  10791   99.0%   99.0%  JavaScript
    108    1.0%    1.0%  C++
      3    0.0%    0.0%  GC
      2    0.0%          Shared libraries
```
 
Tick-foreach
```
 [Summary]:
   ticks  total  nonlib   name
  29452   45.6%   45.6%  JavaScript
  35092   54.4%   54.4%  C++
      8    0.0%    0.0%  GC
      7    0.0%          Shared libraries
```
 
