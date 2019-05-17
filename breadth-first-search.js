class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Graph {
    constructor(root){
        this.root = null;
    }
    traverse(node, value){
        if (node === null) node = new Node(value);
        else if (value > node.value){
            node.right === null ? node.right = new Node(value) : this.traverse(node.right, value);
        }
        else if (value < node.value){
            node.left === null ? node.left = new Node(value) : this.traverse(node.left, value);
        }
    }
    addNode(value){
        if (this.root === null) this.root = new Node(value);
        else return this.traverse(this.root, value);
    }
    iterativeDFS(target){
        const parents = new Map();
        const stack = [this.root];
        while (stack.length){
            const current = stack.pop();
            if (current.value === target){
                let currentValue = current.value;
                const path = [currentValue];
                while (parents.get(currentValue) !== undefined){
                    currentValue = parents.get(currentValue);
                    path.unshift(currentValue);
                }
                return path.join(', ');
            }
            if (current.left){
                parents.set(current.left.value, current.value);
                stack.push(current.left);
            }
            if (current.right){
                parents.set(current.right.value, current.value);
                stack.push(current.right);
            }
        }
    }
    iterativeBFS(target){
        const parents = new Map(); // Only works if values are unique
        const queue = [this.root];
        while (queue.length){
            const current = queue.shift();
            if (current.value === target){
                let currentValue = current.value;
                const path = [currentValue];
                while (parents.get(currentValue) !== undefined){
                    currentValue = parents.get(currentValue);
                    path.unshift(currentValue);
                }
                return path.join(', ');
            }
            if (current.left){
                parents.set(current.left.value, current.value);
                queue.push(current.left);
            }
            if (current.right){
                parents.set(current.right.value, current.value);
                queue.push(current.right);
            }
        }
        return null;
    }
}

const nums = [5, 4, 6, 3, 7, 2, 8, 1, 9, 10];

const graph = new Graph();

for (let i = 0; i < nums.length; i++){
    graph.addNode(nums[i]);
}
console.log(graph.iterativeDFS(9));