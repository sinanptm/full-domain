class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.val < root.val) {
            if (!root.left) root.left = newNode;
            else this.insertNode(root.left, newNode);
        } else {
            if (!root.right) root.right = newNode;
            else this.insertNode(root.right, newNode);
        }
    }

    search(val, root = this.root) {
        if (!root) return false;
        if (root.val === val) return true;
        if (val < root.val) return this.search(val, root.left);
        else return this.search(val, root.right);
    }

    minVal(root = this.root) {
        let current = root;
        while (current && current.left) {
            current = current.left;
        }
        return current.val;
    }

    height(root = this.root) {
        if (!root) return -1;
        let left = this.height(root.left);
        let right = this.height(root.right);
        return Math.max(left, right) + 1;
    }

    preOrder(node = this.root) {
        let res = [];
        if (node) {
            res.push(node.val);
            res = res.concat(this.preOrder(node.left));
            res = res.concat(this.preOrder(node.right));
        }
        return res;
    }

    inOrder(node = this.root) {
        let res = [];
        if (node) {
            res = res.concat(this.inOrder(node.left));
            res.push(node.val);
            res = res.concat(this.inOrder(node.right));
        }
        return res;
    }

    postOrder(node = this.root) {
        let res = [];
        if (node) {
            res = res.concat(this.postOrder(node.left));
            res = res.concat(this.postOrder(node.right));
            res.push(node.val);
        }
        return res;
    }

    delete(val) {
        this.root = this.deleteNode(this.root, val);
    }

    deleteNode(root, val) {
        if (!root) return null;

        if (val < root.val) {
            root.left = this.deleteNode(root.left, val);
        } else if (val > root.val) {
            root.right = this.deleteNode(root.right, val);
        } else {
            if (!root.left) return root.right;
            if (!root.right) return root.left;

            root.val = this.minVal(root.right);
            root.right = this.deleteNode(root.right, root.val);
        }
        return root;
    }
}


const bst = new BinaryTree();
bst.insert(1)
bst.insert(2)
bst.insert(3)
bst.insert(2563)
bst.insert(2663)
bst.insert(2522)
bst.insert(13)
bst.insert(2323)
console.log(bst.inOrder());