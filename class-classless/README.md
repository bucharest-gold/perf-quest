## Benchmark
 
```
class
Raw:
 > 111474.52547452548
 > 110513.48651348651
 > 114226.77322677322
 > 95249.75024975024
Average (mean) 107866.13386613387

classless
Raw:
 > 8287.712287712287
 > 8059.94005994006
 > 8194.805194805194
 > 7755.244755244756
Average (mean) 8074.425574425574

Winner: class
Compared with next highest (classless), it's:
92.51% faster
13.36 times as fast
1.13 order(s) of magnitude faster
A LOT FASTER

```
 
## Benchmark 2
 
```
class x 16,304,025 ops/sec ±1.24% (87 runs sampled)
classless x 5,977,324 ops/sec ±0.63% (94 runs sampled)
Fastest is: class
[Node.js 4.5.0 on Linux 64-bit]
```
 
## Profile summary
 
Tick-class
```
 [Summary]:
   ticks  total  nonlib   name
   6472   68.5%   87.2%  JavaScript
    950   10.1%   12.8%  C++
    274    2.9%    3.7%  GC
   2026   21.4%          Shared libraries
```
 
Tick-classless
```
 [Summary]:
   ticks  total  nonlib   name
   3844   40.6%   41.9%  JavaScript
   5315   56.1%   57.9%  C++
    172    1.8%    1.9%  GC
    294    3.1%          Shared libraries
```
 
