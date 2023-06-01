import Queue from "./Queue";

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue = new Queue<BinaryNode<number>>();

    queue.enqueue(head);

    let node: BinaryNode<number> | undefined;
    
    while (queue.length > 0) {
        node = queue.deque();
        if (node) {
            if (node.value === needle) return true;
            if (node.left) queue.enqueue(node.left);
            if (node.right) queue.enqueue(node.right);
        }
    }

    return false;
}
