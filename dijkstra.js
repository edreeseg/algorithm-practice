function dijkstra(input, start, end){
    const graph = new Map();
    const costs = new Map();
    const parents = new Map();
    for (let i = 0; i < input.length; i++){
        costs.set(start, 0);
        const [from, to, cost] = input[i].split(' ');
        if (!graph.get(from)) graph.set(from, new Map());
        graph.get(from).set(to, Number(cost));
        if (from === start) {
            costs.set(to, Number(cost));
            parents.set(to, from);
        }
        else costs.set(to, Infinity);
    }
    const processed = [];
    let node = findLowestCodeNode(costs, processed);
    while (node !== null){
        let cost = costs.get(node);
        const neighbors = graph.get(node);
        for (let [key, value] of neighbors){
            const newCost = cost + value;
                if (costs.get(key) > newCost){
                    costs.set(key, newCost);
                    parents.set(key, node);
                }
        }
        processed.push(node);
        node = findLowestCodeNode(costs, processed);
    }
    const result = [];
    for (let current = end; current !== start;){
        const next = parents.get(current);
        result.unshift({ from: next,  to: current });
        current = next;
    }
    return result;
}

function findLowestCodeNode(costs, processed){
    let lowestCost = Infinity;
    let lowestCostNode = null;
    costs.forEach((value, key) => {
        if (lowestCost > value && !processed.includes(key)) 
            [lowestCost, lowestCostNode] = [value, key];
    });
    return lowestCostNode;
}

const example = `A B 1
B A 1
A C 3
C A 3
B D 2
D B 2
C D 3
D C 3
D E 1
E D 1`.split('\n');