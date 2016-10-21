## Benchmark
 
```
class
Raw:
 > 152415.58441558442
 > 153489.5104895105
 > 156119.8801198801
 > 156488.5114885115
Average (mean) 154628.37162837162

classless
Raw:
 > 26456.543456543455
 > 26975.024975024975
 > 26718.28171828172
 > 28732.267732267734
Average (mean) 27220.529470529473

Winner: class
Compared with next highest (classless), it's:
82.4% faster
5.68 times as fast
0.75 order(s) of magnitude faster
QUITE A BIT FASTER

```
 
## Profile summary
 
Tick-class
```
 [Summary]:
   ticks  total  nonlib   name
   5848   61.9%   83.3%  JavaScript
    570    6.0%    8.1%  C++
     12    0.1%    0.2%  GC
   2424   25.7%          Shared libraries
```
 
Tick-unfrozenclassless
```
 [Summary]:
   ticks  total  nonlib   name
   6838   72.5%   79.6%  JavaScript
   1191   12.6%   13.9%  C++
    327    3.5%    3.8%  GC
    839    8.9%          Shared libraries
```
 
