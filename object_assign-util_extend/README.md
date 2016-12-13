## Benchmark
 
```
Extend
Raw:
 > 8434.565434565435
 > 8299.7002997003
 > 8182.817182817183
 > 7619.3806193806195
Average (mean) 8134.115884115884

Assign
Raw:
 > 5053.946053946054
 > 5182.817182817183
 > 5107.892107892108
 > 5200.799200799201
Average (mean) 5136.363636363636

Winner: Extend
Compared with next highest (Assign), it's:
36.85% faster
1.58 times as fast
0.2 order(s) of magnitude faster
A LITTLE FASTER

```
 
## Benchmark 2
 
```
Assign x 4,674,796 ops/sec ±1.39% (82 runs sampled)
Extend x 7,990,340 ops/sec ±1.75% (84 runs sampled)
Fastest is: Extend
[Node.js 6.9.1 on Darwin 64-bit]
```
 
## Profile summary
 
Tick-Assign
```
out.txt: [Summary]:
out.txt-   ticks  total  nonlib   name
out.txt-    674    8.4%    8.4%  JavaScript
out.txt-   6673   83.1%   83.2%  C++
out.txt-     26    0.3%    0.3%  GC
out.txt-      6    0.1%          Shared libraries
```
 
Tick-Extend
```
out.txt: [Summary]:
out.txt-   ticks  total  nonlib   name
out.txt-   2710   33.9%   33.9%  JavaScript
out.txt-   4718   59.0%   59.0%  C++
out.txt-    112    1.4%    1.4%  GC
out.txt-     12    0.1%          Shared libraries
```
 
