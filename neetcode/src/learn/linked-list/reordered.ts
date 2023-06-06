import LNode from './struct';


const reorderedS = function(head: LNode | null): void {

    if (head === null) return;

    if (head.next === null) return;

    if (head.next.next === null) return;

    const nodes: LNode[] = [];
    
    let curr: LNode | null = head;
    while (curr !== null) {
        nodes.push(curr);
        curr = curr.next;
    }

    for (let i = nodes.length - 1, j = 0; j < i; j++, i--) {
        // i:4 j:1
        // i:3 j:2
        nodes[j].next = nodes[i];
        nodes[i].next = nodes[j + 1];
    }

    nodes[Math.floor(nodes.length / 2)].next = null;
}

const reorderedF = function(head: LNode | null): void {
    // No memory usage => break input list into two parts
    // Reverse the second part
    // Merge the two parts to get the result
    // Too lazy to implement because all the null checking
}
