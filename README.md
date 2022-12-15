# COA-memory-mapping-project
Direct mapping and 2-way set associative mapping in a cache using byte addressing.        

### Description
The address is converted into binary format. The last 2 digits are eliminated as offsets, taking the next three digits from the end for direct mapping and two for 2-way set associative mapping.
With the 3/2 digits as the index, it is mapped into the cache with [LRU](https://www.geeksforgeeks.org/lru-cache-implementation/).
The hit rate and miss rate are also calculated.

Example   
If the entered number is 12.   

For direct mapping      
>12 into binary.     
12<sub>10</sub>=01100   
Deleting 00 as offset.   
Taking 011 as index.   
The address is mapped into block 011 in cache.   

For 2-way set associative mapping      
>12 into binary.     
12<sub>10</sub>=1100   
Deleting 00 as offset.   
Taking 11 as index.   
The address is mapped into block 11 in cache.   

### How to use
Open the website (http://thaha-althaf.github.io/coa-memory-mapping-project)
Enter the address in decimal format and click enter.
