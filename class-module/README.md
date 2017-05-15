## Benchmark
 
```
class
Raw:
 > 155963.03696303695
 > 149779.22077922078
 > 148795.2047952048
 > 148605.3946053946
Average (mean) 150785.7142857143

module
Raw:
 > 17559.440559440558
 > 17163.836163836164
 > 17585.414585414586
 > 16742.25774225774
Average (mean) 17262.737262737264

Winner: class
Compared with next highest (module), it's:
88.55% faster
8.73 times as fast
0.94 order(s) of magnitude faster
QUITE A BIT FASTER

```
 
## Benchmark 2
 
```
class x 94,028,915 ops/sec ±1.08% (86 runs sampled)
module x 16,180,711 ops/sec ±0.80% (92 runs sampled)
Fastest is: class
[null]
```
 
## Profile summary
 
Tick-class
```
 [Summary]:
   ticks  total  nonlib   name
   6260   66.8%   81.1%  JavaScript
    399    4.3%    5.2%  C++
      8    0.1%    0.1%  GC
   1652   17.6%          Shared libraries
```
 
Tick-module
```
 [Summary]:
   ticks  total  nonlib   name
   7479   79.5%   82.2%  JavaScript
   1068   11.4%   11.7%  C++
    342    3.6%    3.8%  GC
    304    3.2%          Shared libraries
```
 
