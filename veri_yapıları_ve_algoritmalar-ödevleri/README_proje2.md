# Merge Sort Projesi

## Problem

[16,21,11,8,12,22] -> Merge Sort

Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.

Big-O gösterimini yazınız.

## Çözüm

önce ayırma
1. [16,21,11,8,12,22]
2. [16,21,11] --- [8,12,22]
3. [16,21] -- [11] --- [8,12] -- [22]
4. [16] - [21] -- [11] --- [8] - [12] -- [22]

şimdi birleştirme

5. [16,21] -- [11] --- [8,12] -- [22]
6. [11,16,21] --- [8,12,22]
7. [8,11,12,16,21,22]

Sonuç -> [8,11,12,16,21,22]

Big-O gösterimi

her bölme adımı O(logn) ve her birleştirme adımı O(n) sonuç olarak -> O(nlogn)
